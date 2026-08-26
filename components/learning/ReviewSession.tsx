'use client';
// Review session: one question per due concept, interleaved across
// curriculum levels (SPEC_V2 §29), applying FSRS and mastery updates.
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { RetrievalQuestion } from '@/lib/types';
import { allSchedules } from '@/lib/db';
import { applySessionResults, type SessionItemResult } from '@/lib/learning';
import { interleaveByLevel } from '@/lib/metrics';
import { RetrievalStage } from './RetrievalStage';
import type { Lesson } from '@/lib/types';

interface ConceptQuestion {
  lessonSlug: string;
  question: RetrievalQuestion;
}

export function ReviewSession({
  questionsByConcept,
  conceptLevels,
}: {
  questionsByConcept: Record<string, ConceptQuestion[]>;
  conceptLevels: Record<string, number>;
}) {
  const [queue, setQueue] = useState<ConceptQuestion[] | null>(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    (async () => {
      const now = Date.now();
      const due = (await allSchedules()).filter((s) => s.due <= now);
      const ordered = interleaveByLevel(due, (s) => conceptLevels[s.conceptId] ?? 0);
      const picked: ConceptQuestion[] = [];
      ordered.forEach((s, i) => {
        const pool = questionsByConcept[s.conceptId];
        if (pool?.length) picked.push(pool[i % pool.length]);
      });
      setQueue(picked);
    })();
  }, [questionsByConcept, conceptLevels]);

  if (queue === null) return <p className="text-sm text-[var(--muted)]">Checking your schedule…</p>;

  if (finished || queue.length === 0) {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <h1 className="text-xl font-semibold">{finished ? 'Review complete' : 'Nothing due'}</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">
          {finished
            ? 'Schedules and mastery are updated.'
            : 'Come back when a concept is due, or continue with the next lesson.'}
        </p>
        <Link href="/" className="mt-3 inline-block text-sm text-[var(--accent)] underline">
          Back to today
        </Link>
      </div>
    );
  }

  // Reuse the retrieval renderer with a synthetic lesson wrapper.
  const pseudoLesson = {
    slug: queue[0].lessonSlug,
    retrieval: queue.map((q) => q.question),
  } as unknown as Lesson;

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Review - {queue.length} concept{queue.length === 1 ? '' : 's'}</h1>
      <RetrievalStage
        lesson={pseudoLesson}
        onComplete={async (results: SessionItemResult[]) => {
          const stamped = results.map((r) => ({
            ...r,
            attempt: { ...r.attempt, stage: 'review' as const },
          }));
          await applySessionResults(stamped);
          setFinished(true);
        }}
      />
    </div>
  );
}
