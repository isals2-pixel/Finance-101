'use client';
// The §42 progress dashboard: composite score, the six measures where
// computable, per-concept mastery, weakest area, one recommended action.
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { allAttempts, allLessonStates, allMastery, getLearner } from '@/lib/db';
import {
  competencyScore,
  lessonAbandonment,
  selfReportedShare,
  type CompetencyComponent,
} from '@/lib/metrics';
import type { MasteryRecord } from '@/lib/types';

export default function ProgressPage() {
  const [score, setScore] = useState<number | null>(null);
  const [components, setComponents] = useState<CompetencyComponent[]>([]);
  const [mastery, setMastery] = useState<MasteryRecord[]>([]);
  const [selfShare, setSelfShare] = useState<number | null>(null);
  const [abandonment, setAbandonment] = useState<number | null>(null);
  const [baseline, setBaseline] = useState<number | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const attempts = await allAttempts();
      const m = await allMastery();
      const result = competencyScore(m, attempts);
      setScore(result.score);
      setComponents(result.components);
      setMastery([...m].sort((a, b) => a.score - b.score));
      setSelfShare(selfReportedShare(attempts));
      setAbandonment(lessonAbandonment(await allLessonStates()));
      const learner = (await getLearner()) as { baselineScore?: number };
      setBaseline(learner.baselineScore ?? null);
      setReady(true);
    })();
  }, []);

  if (!ready) return <p className="text-sm text-[var(--muted)]">Computing…</p>;

  const weakest = mastery[0];

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Progress</h1>

      <section className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
          Finance competency score
        </h2>
        <p className="mt-2 text-4xl font-semibold text-[var(--accent)]">
          {score === null ? '—' : `${score}/100`}
        </p>
        <p className="mt-1 text-xs text-[var(--muted)]">
          Weighted over the components with evidence; engagement never enters it.
          {selfShare !== null && ` ${Math.round(selfShare)}% of scored answers are self-reported.`}
        </p>
        <ul className="mt-4 space-y-1 text-sm">
          {components.map((c) => (
            <li key={c.key} className="flex justify-between">
              <span>{c.label}</span>
              <span className="tabular-nums text-[var(--muted)]">
                {c.value === null ? 'no data yet' : `${Math.round(c.value)}%`}
              </span>
            </li>
          ))}
          <li className="flex justify-between border-t border-[var(--border)] pt-1">
            <span>Baseline assessment</span>
            <span className="tabular-nums text-[var(--muted)]">
              {baseline === null ? (
                <Link href="/assessment/" className="text-[var(--accent)] underline">
                  not taken - start it
                </Link>
              ) : (
                `${baseline}%`
              )}
            </span>
          </li>
        </ul>
      </section>

      <section className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
          Concept mastery
        </h2>
        {mastery.length === 0 ? (
          <p className="mt-2 text-sm text-[var(--muted)]">Appears after your first lesson.</p>
        ) : (
          <ul className="mt-3 space-y-2 text-sm">
            {mastery.map((m) => (
              <li key={m.conceptId}>
                <div className="flex justify-between">
                  <span>{m.conceptId}</span>
                  <span className="tabular-nums text-[var(--muted)]">{m.score}</span>
                </div>
                <div className="mt-0.5 h-1.5 overflow-hidden rounded-full bg-[var(--border)]">
                  <div className="h-full bg-[var(--accent)]" style={{ width: `${m.score}%` }} />
                </div>
              </li>
            ))}
          </ul>
        )}
        {weakest && (
          <p className="mt-4 text-sm">
            Weakest area: <strong>{weakest.conceptId}</strong> ({weakest.score}/100).{' '}
            <Link href="/review/" className="text-[var(--accent)] underline">
              Recommended action: a short review
            </Link>
          </p>
        )}
      </section>

      <section className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 text-sm">
        <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">Usability</h2>
        <p className="mt-2 text-[var(--muted)]">
          Lessons started but abandoned before retrieval (48h):{' '}
          {abandonment === null ? 'no data yet' : `${Math.round(abandonment)}%`}. One number, no
          streaks, no judgment.
        </p>
      </section>
    </div>
  );
}
