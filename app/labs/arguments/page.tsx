'use client';
// Financial argument analysis (SPEC_V2 §68): find the central flaw in
// real-world-shaped claims. Auto-scored; records as stage 'decision'.
import Link from 'next/link';
import { useState } from 'react';
import lab from '@/data/labs/argument-scenarios.json';
import { recordAttempt } from '@/lib/db';

interface ArgOption {
  id: string;
  text: string;
  correct: boolean;
}
interface Argument {
  id: string;
  conceptId: string;
  claim: string;
  options: ArgOption[];
  debrief: string;
}

export default function ArgumentLabPage() {
  const args = lab.arguments as Argument[];
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  if (index >= args.length) {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <h1 className="text-xl font-semibold">Argument analysis done</h1>
        <p className="mt-2 text-3xl font-semibold text-[var(--accent)]">
          {correctCount}/{args.length}
        </p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          The pattern to keep: find the true premise, then the broken step from it - good pitches
          are built on real facts and bad inferences.
        </p>
        <div className="mt-3 flex gap-4 text-sm">
          <button onClick={() => location.reload()} className="text-[var(--accent)] underline">
            Run it again
          </button>
          <Link href="/labs/" className="text-[var(--accent)] underline">
            Back to labs
          </Link>
        </div>
      </div>
    );
  }

  const arg = args[index];
  const chosen = arg.options.find((o) => o.id === picked);

  async function confirm() {
    const option = arg.options.find((o) => o.id === picked)!;
    if (option.correct) setCorrectCount((c) => c + 1);
    await recordAttempt({
      lessonSlug: 'argument-lab',
      questionId: arg.id,
      conceptId: arg.conceptId,
      stage: 'decision',
      kind: 'classification',
      answer: option.text,
      correct: option.correct,
      selfReported: false,
      at: Date.now(),
    });
    setRevealed(true);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h1 className="text-xl font-semibold">Argument analysis</h1>
        <span className="text-xs text-[var(--muted)]">
          claim {index + 1} / {args.length}
        </span>
      </div>
      <p className="text-xs text-[var(--muted)]">
        Each claim contains one central flaw. Name it - the surrounding facts may be perfectly true.
      </p>
      <section className="space-y-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
        <p className="rounded-md bg-[var(--bg,#faf9f7)] p-3 text-sm italic">{arg.claim}</p>
        {!revealed ? (
          <>
            <div className="flex flex-col gap-1.5">
              {arg.options.map((o) => (
                <button
                  key={o.id}
                  onClick={() => setPicked(o.id)}
                  className={`rounded-md px-3 py-1.5 text-left text-xs ${
                    picked === o.id
                      ? 'bg-[var(--accent)] text-white'
                      : 'border border-[var(--border)] text-[var(--muted)]'
                  }`}
                >
                  {o.text}
                </button>
              ))}
            </div>
            <button
              onClick={confirm}
              disabled={!picked}
              className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
            >
              That's the flaw
            </button>
          </>
        ) : (
          <>
            <p className={`text-sm font-semibold ${chosen!.correct ? 'text-green-700' : 'text-red-700'}`}>
              {chosen!.correct ? 'Found it.' : 'Not the central flaw.'}
            </p>
            <p className="text-sm text-[var(--muted)]">{arg.debrief}</p>
            <button
              onClick={() => {
                setRevealed(false);
                setPicked(null);
                setIndex(index + 1);
              }}
              className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
            >
              {index + 1 >= args.length ? 'Finish' : 'Next claim'}
            </button>
          </>
        )}
      </section>
    </div>
  );
}
