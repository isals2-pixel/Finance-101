'use client';
// Review session: presents one question per due concept, applies FSRS and
// mastery updates. Interleaving across levels arrives with Phase 2 content.
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { RetrievalQuestion } from '@/lib/types';
import { allSchedules } from '@/lib/db';
import { applySessionResults, type SessionItemResult } from '@/lib/learning';
import { RetrievalStage } from './RetrievalStage';
import type { Lesson } from '@/lib/types';

interface ConceptQuestion {
  lessonSlug: string;
  question: RetrievalQuestion;
}

export function ReviewSession({
  questionsByConcept,
}: {
  questionsByConcept: Record<string, ConceptQuestion[]>;
}) {
  const [queue, setQueue] = useState<ConceptQuestion[] | null>(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    (async () => {
      const now = Date.now();
      const due = (await allSchedules()).filter((s) => s.due <= now);
      const picked: ConceptQuestion[] = [];
      due.forEach((s, i) => {
        const pool = questionsByConcept[s.conceptId];
        if (pool?.length) picked.push(pool[i % pool.length]);
      });
      setQueue(picked);
    })();
  }, [questionsByConcept]);

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
