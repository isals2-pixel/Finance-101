'use client';
// Teach-back mode (SPEC_V2 §67): explain a learned concept as if teaching
// it, answer locked before the model summary appears, then self-score 0-5.
// Records as a review-stage explanation attempt: feeds FSRS and mastery.
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { allLessonStates, allMastery } from '@/lib/db';
import { applySessionResults } from '@/lib/learning';

export interface TeachableConcept {
  conceptId: string;
  title: string;
  lessonSlug: string;
  lessonNumber: number;
  modelSummary: string;
}

const SCORE_ANCHORS = [
  '0 - could not explain it',
  '1 - fragments only',
  '2 - the gist, with gaps or errors',
  '3 - correct but incomplete',
  '4 - correct and complete, less crisp',
  '5 - could genuinely teach it',
];

export function TeachBack({ teachable }: { teachable: TeachableConcept[] }) {
  const [candidates, setCandidates] = useState<TeachableConcept[] | null>(null);
  const [current, setCurrent] = useState<TeachableConcept | null>(null);
  const [text, setText] = useState('');
  const [locked, setLocked] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    (async () => {
      const completed = new Set(
        (await allLessonStates()).filter((s) => s.completedAt || s.retrievalAt).map((s) => s.slug),
      );
      const learned = teachable.filter((t) => completed.has(t.lessonSlug));
      // Weakest-first: lowest mastery score among learned concepts.
      const mastery = new Map((await allMastery()).map((m) => [m.conceptId, m.score]));
      learned.sort((a, b) => (mastery.get(a.conceptId) ?? 0) - (mastery.get(b.conceptId) ?? 0));
      setCandidates(learned);
      setCurrent(learned[0] ?? null);
    })();
  }, [teachable]);

  if (candidates === null) return <p className="text-sm text-[var(--muted)]">Loading…</p>;

  if (!current) {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 text-sm">
        <h1 className="text-xl font-semibold">Teach-back</h1>
        <p className="mt-2 text-[var(--muted)]">
          Nothing to teach yet - complete a lesson first, then come back and explain it.
        </p>
        <Link href="/" className="mt-2 inline-block text-[var(--accent)] underline">
          To today's lesson
        </Link>
      </div>
    );
  }

  async function score(s: number) {
    await applySessionResults([
      {
        attempt: {
          lessonSlug: current!.lessonSlug,
          questionId: `teachback-${current!.conceptId}`,
          conceptId: current!.conceptId,
          stage: 'review',
          kind: 'explanation',
          answer: text,
          selfScore: s,
          selfReported: true,
          at: Date.now(),
        },
        outcome: { kind: 'self', score: s },
      },
    ]);
    setSaved(true);
  }

  if (saved) {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <h1 className="text-xl font-semibold">Recorded</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">
          The self-score updated this concept's mastery and review schedule, flagged as
          self-reported.
        </p>
        <div className="mt-3 flex gap-4 text-sm">
          <button onClick={() => location.reload()} className="text-[var(--accent)] underline">
            Teach another
          </button>
          <Link href="/" className="text-[var(--accent)] underline">
            Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h1 className="text-xl font-semibold">Teach-back</h1>
        <select
          value={current.conceptId}
          onChange={(e) => {
            const next = candidates.find((c) => c.conceptId === e.target.value);
            if (next) {
              setCurrent(next);
              setText('');
              setLocked(false);
            }
          }}
          className="rounded-md border border-[var(--border)] p-1.5 text-xs"
        >
          {candidates.map((c) => (
            <option key={c.conceptId} value={c.conceptId}>
              {c.title}
            </option>
          ))}
        </select>
      </div>
      <section className="space-y-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
        <p className="text-sm">
          Explain <strong>{current.title}</strong> (lesson {current.lessonNumber}) to someone who
          knows nothing about finance. Definition, why it matters, one concrete example - in your
          own words. Weakest concepts are offered first.
        </p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={locked}
          rows={7}
          placeholder="Teach it here…"
          className="w-full rounded-md border border-[var(--border)] p-2 text-sm"
        />
        {!locked ? (
          <button
            onClick={() => setLocked(true)}
            disabled={text.trim().length < 40}
            className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
          >
            Lock my explanation
          </button>
        ) : (
          <>
            <div className="rounded-md border border-[var(--border)] bg-[var(--bg,#faf9f7)] p-3 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                The lesson's one sentence
              </p>
              <p className="mt-1">{current.modelSummary}</p>
            </div>
            <p className="text-xs text-[var(--muted)]">
              Score your locked explanation against it - completeness and correctness, not wording.
            </p>
            <div className="flex flex-col gap-1.5">
              {SCORE_ANCHORS.map((anchor, s) => (
                <button
                  key={anchor}
                  onClick={() => score(s)}
                  className="rounded-md border border-[var(--border)] px-3 py-1.5 text-left text-xs text-[var(--muted)] hover:border-[var(--accent)]"
                >
                  {anchor}
                </button>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
