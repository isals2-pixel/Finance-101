'use client';
// Step 7: the visual mental model, shown after the audio (SPEC_V2 §9, §18).
import type { Lesson } from '@/lib/types';
import { getVisual } from '@/components/visuals/registry';

export function VisualStage({ lesson, onComplete }: { lesson: Lesson; onComplete: () => void }) {
  const Visual = getVisual(lesson.visual.id);
  return (
    <div className="space-y-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
      <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
        The mental model
      </h2>
      {Visual ? (
        <Visual />
      ) : (
        <p className="text-sm text-[var(--muted)]">Visual {lesson.visual.id} is not yet built.</p>
      )}
      <p className="text-sm text-[var(--muted)]">{lesson.visual.caption}</p>
      <button
        onClick={onComplete}
        className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
      >
        Continue to retrieval
      </button>
    </div>
  );
}
