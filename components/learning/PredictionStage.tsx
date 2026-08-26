'use client';
// Step 6: one prediction, answered and locked before any explanation is shown
// (SPEC_V2 §9, §23). The model answer only renders after the lock.
import { useState } from 'react';
import type { Lesson } from '@/lib/types';
import { recordAttempt } from '@/lib/db';

export function PredictionStage({ lesson, onComplete }: { lesson: Lesson; onComplete: () => void }) {
  const [answer, setAnswer] = useState('');
  const [locked, setLocked] = useState(false);

  async function lock() {
    setLocked(true);
    await recordAttempt({
      lessonSlug: lesson.slug,
      questionId: 'prediction',
      conceptId: lesson.concepts[0],
      stage: 'prediction',
      kind: 'prediction',
      answer,
      selfReported: false,
      at: Date.now(),
    });
  }

  return (
    <div className="space-y-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
      <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
        Predict before you see the answer
      </h2>
      <p className="text-sm leading-relaxed">{lesson.prediction.prompt}</p>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        disabled={locked}
        rows={4}
        placeholder="Your prediction…"
        className="w-full rounded-md border border-[var(--border)] p-3 text-sm disabled:bg-[var(--background)]"
      />
      {!locked ? (
        <button
          onClick={lock}
          disabled={answer.trim().length === 0}
          className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
        >
          Lock my answer
        </button>
      ) : (
        <div className="space-y-3">
          <div className="rounded-md border border-[var(--border)] bg-[var(--background)] p-4 text-sm leading-relaxed">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
              Model answer
            </p>
            {lesson.prediction.modelAnswer}
          </div>
          <button
            onClick={onComplete}
            className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
          >
            Continue to the visual
          </button>
        </div>
      )}
    </div>
  );
}
