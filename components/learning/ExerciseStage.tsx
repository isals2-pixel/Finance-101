'use client';
// Shown after the lesson completes: summary plus the optional Apply exercise
// (SPEC_V2 §15, §20). The exercise is auto-scored and feeds mastery.
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Lesson } from '@/lib/types';
import { getSchedule } from '@/lib/db';
import { applySessionResults } from '@/lib/learning';

export function ExerciseStage({ lesson }: { lesson: Lesson }) {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);
  const [nextReview, setNextReview] = useState<string | null>(null);

  useEffect(() => {
    getSchedule(lesson.concepts[0]).then((s) => {
      if (s) setNextReview(new Date(s.due).toLocaleDateString());
    });
  }, [lesson.concepts, result]);

  async function submit() {
    const numeric = Number(value.replace(',', '.'));
    const correct =
      Number.isFinite(numeric) && Math.abs(numeric - lesson.exercise.answer) <= lesson.exercise.tolerance;
    setResult(correct ? 'correct' : 'incorrect');
    await applySessionResults([
      {
        attempt: {
          lessonSlug: lesson.slug,
          questionId: lesson.exercise.id,
          conceptId: lesson.exercise.conceptId,
          stage: 'exercise',
          kind: 'calculation',
          answer: value,
          correct,
          selfReported: false,
          errorClass: correct ? undefined : 'calculation-error',
          at: Date.now(),
        },
        outcome: { kind: 'auto', correct },
      },
    ]);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
          Lesson complete
        </h2>
        <p className="mt-2 text-sm leading-relaxed">{lesson.oneSentence}</p>
        {nextReview && (
          <p className="mt-2 text-xs text-[var(--muted)]">Next review scheduled: {nextReview}</p>
        )}
      </div>

      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
          Apply it (optional, ~3 minutes)
        </h2>
        <p className="mt-2 text-sm leading-relaxed">{lesson.exercise.prompt}</p>
        <div className="mt-3 flex gap-2">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={result !== null}
            inputMode="decimal"
            placeholder="Your answer"
            className="w-40 rounded-md border border-[var(--border)] p-2 text-sm disabled:bg-[var(--background)]"
          />
          <button
            onClick={submit}
            disabled={result !== null || value.trim() === ''}
            className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
          >
            Check
          </button>
        </div>
        {result && (
          <div className="mt-3 rounded-md border border-[var(--border)] bg-[var(--background)] p-3 text-sm">
            <p className="font-medium">{result === 'correct' ? 'Correct.' : 'Not quite.'}</p>
            <p className="mt-1 text-[var(--muted)]">{lesson.exercise.explanation}</p>
          </div>
        )}
      </div>

      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 text-sm">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-[var(--muted)]">Sources</h2>
        <ul className="space-y-1">
          {lesson.sources.map((s) => (
            <li key={s.url} className="text-xs text-[var(--muted)]">
              <a href={s.url} target="_blank" rel="noreferrer" className="underline">
                {s.title}
              </a>{' '}
              - {s.publisher}, {s.publishedAt}. Verified {s.verifiedAt}.
            </li>
          ))}
        </ul>
      </div>

      <Link href="/" className="inline-block text-sm text-[var(--accent)] underline">
        Back to today
      </Link>
    </div>
  );
}
