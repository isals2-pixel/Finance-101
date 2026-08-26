// The single definition of the on-device IndexedDB schema (SPEC_V2 §74).
// One learner, no user ids.
import { openDB, type DBSchema, type IDBPDatabase } from 'idb';
import type { Attempt, LearnerRecord, LessonState, MasteryRecord, ScheduleRecord } from './types';

interface FinanceAcademyDB extends DBSchema {
  learner: { key: 'me'; value: LearnerRecord };
  mastery: { key: string; value: MasteryRecord };
  schedule: { key: string; value: ScheduleRecord };
  attempts: { key: number; value: Attempt; indexes: { byConcept: string } };
  lessonState: { key: string; value: LessonState };
}

export const DB_NAME = 'finance-academy';
export const DB_VERSION = 1;
export const STORE_NAMES = ['learner', 'mastery', 'schedule', 'attempts', 'lessonState'] as const;

let dbPromise: Promise<IDBPDatabase<FinanceAcademyDB>> | null = null;

export function getDb(): Promise<IDBPDatabase<FinanceAcademyDB>> {
  if (!dbPromise) {
    dbPromise = openDB<FinanceAcademyDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        db.createObjectStore('learner');
        db.createObjectStore('mastery', { keyPath: 'conceptId' });
        db.createObjectStore('schedule', { keyPath: 'conceptId' });
        const attempts = db.createObjectStore('attempts', { autoIncrement: true });
        attempts.createIndex('byConcept', 'conceptId');
        db.createObjectStore('lessonState', { keyPath: 'slug' });
      },
    });
  }
  return dbPromise;
}

export async function getLearner(): Promise<LearnerRecord> {
  const db = await getDb();
  const existing = await db.get('learner', 'me');
  if (existing) return existing;
  const fresh: LearnerRecord = { id: 'me', createdAt: Date.now() };
  await db.put('learner', fresh, 'me');
  return fresh;
}

export async function updateLearner(patch: Partial<LearnerRecord>): Promise<LearnerRecord> {
  const db = await getDb();
  const current = await getLearner();
  const next = { ...current, ...patch, id: 'me' as const };
  await db.put('learner', next, 'me');
  return next;
}

export async function getLessonState(slug: string): Promise<LessonState> {
  const db = await getDb();
  return (await db.get('lessonState', slug)) ?? { slug };
}

export async function putLessonState(state: LessonState): Promise<void> {
  const db = await getDb();
  await db.put('lessonState', state);
}

export async function recordAttempt(attempt: Attempt): Promise<void> {
  const db = await getDb();
  await db.add('attempts', attempt);
}

export async function attemptsForConcept(conceptId: string): Promise<Attempt[]> {
  const db = await getDb();
  return db.getAllFromIndex('attempts', 'byConcept', conceptId);
}

export async function putMastery(record: MasteryRecord): Promise<void> {
  const db = await getDb();
  await db.put('mastery', record);
}

export async function getMastery(conceptId: string): Promise<MasteryRecord | undefined> {
  const db = await getDb();
  return db.get('mastery', conceptId);
}

export async function allMastery(): Promise<MasteryRecord[]> {
  const db = await getDb();
  return db.getAll('mastery');
}

export async function putSchedule(record: ScheduleRecord): Promise<void> {
  const db = await getDb();
  await db.put('schedule', record);
}

export async function getSchedule(conceptId: string): Promise<ScheduleRecord | undefined> {
  const db = await getDb();
  return db.get('schedule', conceptId);
}

export async function allSchedules(): Promise<ScheduleRecord[]> {
  const db = await getDb();
  return db.getAll('schedule');
}

export async function allLessonStates(): Promise<LessonState[]> {
  const db = await getDb();
  return db.getAll('lessonState');
}

export async function allAttempts(): Promise<Attempt[]> {
  const db = await getDb();
  return db.getAll('attempts');
}

/** One-action local wipe (SPEC_V2 §72). Gist deletion handled in backup.ts. */
export async function clearAllData(): Promise<void> {
  const db = await getDb();
  const tx = db.transaction(STORE_NAMES as unknown as ('learner' | 'mastery' | 'schedule' | 'attempts' | 'lessonState')[], 'readwrite');
  await Promise.all([
    tx.objectStore('learner').clear(),
    tx.objectStore('mastery').clear(),
    tx.objectStore('schedule').clear(),
    tx.objectStore('attempts').clear(),
    tx.objectStore('lessonState').clear(),
  ]);
  await tx.done;
}
