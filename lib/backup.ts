// Learner-state backup: encrypted blob in one private GitHub Gist, plus
// plain-file export/import as the token-free fallback (SPEC_V2 §72).
import {
  allAttempts,
  allLessonStates,
  allMastery,
  allSchedules,
  clearAllData,
  getDb,
  getLearner,
  updateLearner,
} from './db';
import type { Attempt, LessonState, MasteryRecord, ScheduleRecord } from './types';

export interface StateSnapshot {
  schemaVersion: 1;
  exportedAt: string;
  mastery: MasteryRecord[];
  schedule: ScheduleRecord[];
  attempts: Attempt[];
  lessonState: LessonState[];
}

const GIST_FILENAME = 'finance-academy-backup.json';
const GIST_DESCRIPTION = 'Finance Academy learner state (encrypted)';
const PBKDF2_ITERATIONS = 200_000;

export async function snapshotState(): Promise<StateSnapshot> {
  return {
    schemaVersion: 1,
    exportedAt: new Date().toISOString(),
    mastery: await allMastery(),
    schedule: await allSchedules(),
    attempts: await allAttempts(),
    lessonState: await allLessonStates(),
  };
}

export async function importSnapshot(snapshot: StateSnapshot): Promise<void> {
  if (snapshot.schemaVersion !== 1) throw new Error(`Unsupported backup version ${snapshot.schemaVersion}`);
  const db = await getDb();
  const tx = db.transaction(['mastery', 'schedule', 'attempts', 'lessonState'], 'readwrite');
  await Promise.all([
    tx.objectStore('mastery').clear(),
    tx.objectStore('schedule').clear(),
    tx.objectStore('attempts').clear(),
    tx.objectStore('lessonState').clear(),
  ]);
  for (const m of snapshot.mastery) await tx.objectStore('mastery').put(m);
  for (const s of snapshot.schedule) await tx.objectStore('schedule').put(s);
  for (const a of snapshot.attempts) await tx.objectStore('attempts').add(a);
  for (const l of snapshot.lessonState) await tx.objectStore('lessonState').put(l);
  await tx.done;
}

// --- Encryption (WebCrypto, works in browser and Node 20+) ---

const te = new TextEncoder();
const td = new TextDecoder();

function toB64(buf: ArrayBuffer | Uint8Array): string {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s);
}

function fromB64(s: string): Uint8Array {
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function deriveKey(passphrase: string, salt: Uint8Array): Promise<CryptoKey> {
  const material = await crypto.subtle.importKey('raw', te.encode(passphrase), 'PBKDF2', false, [
    'deriveKey',
  ]);
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: salt as BufferSource, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    material,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt'],
  );
}

export interface EncryptedPayload {
  v: 1;
  salt: string;
  iv: string;
  data: string;
}

export async function encryptJson(value: unknown, passphrase: string): Promise<EncryptedPayload> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(passphrase, salt);
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv as BufferSource },
    key,
    te.encode(JSON.stringify(value)),
  );
  return { v: 1, salt: toB64(salt), iv: toB64(iv), data: toB64(ciphertext) };
}

export async function decryptJson<T>(payload: EncryptedPayload, passphrase: string): Promise<T> {
  const key = await deriveKey(passphrase, fromB64(payload.salt));
  const plaintext = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: fromB64(payload.iv) as BufferSource },
    key,
    fromB64(payload.data) as BufferSource,
  );
  return JSON.parse(td.decode(plaintext)) as T;
}

// --- Gist sync ---

const GIST_API = 'https://api.github.com/gists';

function gistHeaders(token: string): HeadersInit {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
  };
}

export async function backupToGist(): Promise<{ gistId: string }> {
  const learner = await getLearner();
  if (!learner.gistToken) throw new Error('No GitHub token configured. Add one in Settings.');
  if (!learner.backupPassphrase) throw new Error('No backup passphrase configured. Add one in Settings.');

  const snapshot = await snapshotState();
  const encrypted = await encryptJson(snapshot, learner.backupPassphrase);
  const body = {
    description: GIST_DESCRIPTION,
    public: false,
    files: { [GIST_FILENAME]: { content: JSON.stringify(encrypted) } },
  };

  const url = learner.gistId ? `${GIST_API}/${learner.gistId}` : GIST_API;
  const res = await fetch(url, {
    method: learner.gistId ? 'PATCH' : 'POST',
    headers: gistHeaders(learner.gistToken),
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Gist backup failed: ${res.status} ${await res.text()}`);
  const json = (await res.json()) as { id: string };
  await updateLearner({ gistId: json.id, lastBackupAt: Date.now() });
  return { gistId: json.id };
}

export async function restoreFromGist(): Promise<void> {
  const learner = await getLearner();
  if (!learner.gistToken || !learner.gistId) throw new Error('Token and Gist id required to restore.');
  if (!learner.backupPassphrase) throw new Error('Backup passphrase required to restore.');
  const res = await fetch(`${GIST_API}/${learner.gistId}`, {
    headers: gistHeaders(learner.gistToken),
  });
  if (!res.ok) throw new Error(`Gist fetch failed: ${res.status}`);
  const json = (await res.json()) as { files: Record<string, { content: string }> };
  const file = json.files[GIST_FILENAME];
  if (!file) throw new Error('Backup file not found in Gist.');
  const snapshot = await decryptJson<StateSnapshot>(
    JSON.parse(file.content) as EncryptedPayload,
    learner.backupPassphrase,
  );
  await importSnapshot(snapshot);
}

/** One-action delete: local stores and the Gist (SPEC_V2 §72, Q10). */
export async function deleteEverything(): Promise<{ gistDeleted: boolean }> {
  const learner = await getLearner();
  let gistDeleted = false;
  if (learner.gistToken && learner.gistId) {
    const res = await fetch(`${GIST_API}/${learner.gistId}`, {
      method: 'DELETE',
      headers: gistHeaders(learner.gistToken),
    });
    gistDeleted = res.ok || res.status === 404;
  }
  await clearAllData();
  return { gistDeleted };
}
