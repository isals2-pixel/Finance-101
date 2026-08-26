'use client';
// Step 1: read the lesson text (SPEC_V2 §7, §9). The flow continues to
// prediction when the learner marks the reading done.
import type { Lesson } from '@/lib/types';

export function ReadStage({ lesson, onComplete }: { lesson: Lesson; onComplete: () => void }) {
  return (
    <div className="space-y-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
      <article className="space-y-4 text-[15px] leading-relaxed">
        {renderBody(lesson.body)}
      </article>
      <button
        onClick={onComplete}
        className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
      >
        Done reading - continue to the prediction
      </button>
    </div>
  );
}

// Minimal markdown rendering for the lesson body: headings and paragraphs.
function renderBody(body: string) {
  return body.split(/\n\n+/).map((block, i) => {
    const text = block.trim();
    if (text.startsWith('## ')) {
      return (
        <h2 key={i} className="pt-2 text-lg font-semibold">
          {text.slice(3)}
        </h2>
      );
    }
    if (text.startsWith('# ')) {
      return (
        <h2 key={i} className="text-lg font-semibold">
          {text.slice(2)}
        </h2>
      );
    }
    return <p key={i}>{text.replace(/\n/g, ' ')}</p>;
  });
}
