'use client';
// Backup, restore, export, import, delete (SPEC_V2 §72). The token and
// passphrase live only on this device.
import { useEffect, useRef, useState } from 'react';
import { getLearner, updateLearner } from '@/lib/db';
import {
  backupToGist,
  deleteEverything,
  importSnapshot,
  restoreFromGist,
  snapshotState,
  type StateSnapshot,
} from '@/lib/backup';

export default function SettingsPage() {
  const [token, setToken] = useState('');
  const [passphrase, setPassphrase] = useState('');
  const [gistId, setGistId] = useState('');
  const [lastBackup, setLastBackup] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getLearner().then((l) => {
      setToken(l.gistToken ?? '');
      setPassphrase(l.backupPassphrase ?? '');
      setGistId(l.gistId ?? '');
      setLastBackup(l.lastBackupAt ? new Date(l.lastBackupAt).toLocaleString() : null);
    });
  }, []);

  async function run(label: string, fn: () => Promise<void>) {
    setBusy(true);
    setStatus(null);
    try {
      await fn();
      setStatus(`${label} succeeded.`);
    } catch (e) {
      setStatus(`${label} failed: ${e instanceof Error ? e.message : String(e)}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Settings</h1>

      <section className="space-y-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
          Gist backup
        </h2>
        <p className="text-xs text-[var(--muted)]">
          Uses a fine-grained GitHub token scoped to Gists only. Token and passphrase stay on this
          device. The backup is encrypted with your passphrase before it leaves the browser; a
          forgotten passphrase makes the Gist copy unrecoverable.
        </p>
        <label className="block text-sm">
          GitHub token (Gist scope)
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="mt-1 w-full rounded-md border border-[var(--border)] p-2 text-sm"
          />
        </label>
        <label className="block text-sm">
          Backup passphrase
          <input
            type="password"
            value={passphrase}
            onChange={(e) => setPassphrase(e.target.value)}
            className="mt-1 w-full rounded-md border border-[var(--border)] p-2 text-sm"
          />
        </label>
        <label className="block text-sm">
          Gist id (filled automatically after the first backup)
          <input
            value={gistId}
            onChange={(e) => setGistId(e.target.value)}
            className="mt-1 w-full rounded-md border border-[var(--border)] p-2 text-sm"
          />
        </label>
        <div className="flex flex-wrap gap-2 pt-1">
          <button
            disabled={busy}
            onClick={() =>
              run('Save', async () => {
                await updateLearner({
                  gistToken: token || undefined,
                  backupPassphrase: passphrase || undefined,
                  gistId: gistId || undefined,
                });
              })
            }
            className="rounded-md border border-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent)]"
          >
            Save settings
          </button>
          <button
            disabled={busy}
            onClick={() =>
              run('Backup', async () => {
                await updateLearner({
                  gistToken: token || undefined,
                  backupPassphrase: passphrase || undefined,
                  gistId: gistId || undefined,
                });
                const { gistId: id } = await backupToGist();
                setGistId(id);
                setLastBackup(new Date().toLocaleString());
              })
            }
            className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
          >
            Back up now
          </button>
          <button
            disabled={busy}
            onClick={() =>
              run('Restore', async () => {
                await updateLearner({
                  gistToken: token || undefined,
                  backupPassphrase: passphrase || undefined,
                  gistId: gistId || undefined,
                });
                await restoreFromGist();
              })
            }
            className="rounded-md border border-[var(--border)] px-4 py-2 text-sm"
          >
            Restore from Gist
          </button>
        </div>
        {lastBackup && <p className="text-xs text-[var(--muted)]">Last backup: {lastBackup}</p>}
      </section>

      <section className="space-y-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
          File export / import (no token needed)
        </h2>
        <div className="flex flex-wrap gap-2">
          <button
            disabled={busy}
            onClick={() =>
              run('Export', async () => {
                const snapshot = await snapshotState();
                const blob = new Blob([JSON.stringify(snapshot, null, 2)], {
                  type: 'application/json',
                });
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = `finance-academy-backup-${new Date().toISOString().slice(0, 10)}.json`;
                a.click();
                URL.revokeObjectURL(a.href);
              })
            }
            className="rounded-md border border-[var(--border)] px-4 py-2 text-sm"
          >
            Export file (unencrypted)
          </button>
          <button
            disabled={busy}
            onClick={() => fileRef.current?.click()}
            className="rounded-md border border-[var(--border)] px-4 py-2 text-sm"
          >
            Import file
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              void run('Import', async () => {
                const snapshot = JSON.parse(await file.text()) as StateSnapshot;
                await importSnapshot(snapshot);
              });
            }}
          />
        </div>
      </section>

      <section className="space-y-3 rounded-lg border border-red-200 bg-[var(--card)] p-5">
        <h2 className="text-sm font-medium uppercase tracking-wide text-red-800">Delete all data</h2>
        <p className="text-xs text-[var(--muted)]">
          Removes everything on this device and deletes the backup Gist. One action, no recovery.
        </p>
        <button
          disabled={busy}
          onClick={() => {
            if (confirm('Delete all learner data on this device and the Gist backup?')) {
              void run('Delete', async () => {
                const { gistDeleted } = await deleteEverything();
                setToken('');
                setPassphrase('');
                setGistId('');
                setLastBackup(null);
                if (!gistDeleted) setStatus('Local data deleted. Gist could not be deleted - remove it on github.com.');
              });
            }
          }}
          className="rounded-md bg-red-800 px-4 py-2 text-sm font-medium text-white"
        >
          Delete everything
        </button>
      </section>

      {status && <p className="text-sm">{status}</p>}
    </div>
  );
}
