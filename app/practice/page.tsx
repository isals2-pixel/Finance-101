'use client';
// Transfer practice (SPEC_V2 §22): applying learned concepts to scenarios
// the lessons never used. Auto-scored with rationale after each answer;
// attempts record as stage 'transfer' and feed the mastery transfer component.
import Link from 'next/link';
import { useMemo, useState } from 'react';
import pool from '@/data/questions/transfer.json';
import { applySessionResults, type SessionItemResult } from '@/lib/learning';

interface TransferItem {
  id: string;
  conceptId: string;
  level: number;
  type: 'multipleChoice' | 'numeric';
  prompt: string;
  options?: string[];
  answer: string | number;
  tolerance?: number;
  rationale: string;
}

const SESSION_SIZE = 6;

function shuffled<T>(xs: T[]): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function PracticePage() {
  const items = useMemo(
    () => shuffled(pool.items as TransferItem[]).slice(0, SESSION_SIZE),
    [],
  );
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState<SessionItemResult[]>([]);
  const [saved, setSaved] = useState(false);

  const item = items[index];
  const done = index >= items.length;

  function isCorrect(raw: string): boolean {
    if (item.type === 'numeric') {
      const n = Number(raw.replace(',', '.'));
      return Number.isFinite(n) && Math.abs(n - (item.answer as number)) <= (item.tolerance ?? 0);
    }
    return raw === item.answer;
  }

  function submit() {
    const correct = isCorrect(input.trim());
    setResults([
      ...results,
      {
        attempt: {
          lessonSlug: 'transfer-pool',
          questionId: item.id,
          conceptId: item.conceptId,
          stage: 'transfer',
          kind: 'calculation',
          answer: input.trim(),
          correct,
          selfReported: false,
          at: Date.now(),
        },
        outcome: { kind: 'auto', correct },
      },
    ]);
    setRevealed(true);
  }

  async function next() {
    setRevealed(false);
    setInput('');
    const nextIndex = index + 1;
    setIndex(nextIndex);
    if (nextIndex >= items.length && !saved) {
      await applySessionResults(results);
      setSaved(true);
    }
  }

  if (done) {
    const correctCount = results.filter((r) => r.attempt.correct).length;
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <h1 className="text-xl font-semibold">Transfer practice done</h1>
        <p className="mt-2 text-3xl font-semibold text-[var(--accent)]">
          {correctCount}/{results.length}
        </p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Recorded toward the transfer component of mastery for each concept touched.
        </p>
        <div className="mt-3 flex gap-4 text-sm">
          <button onClick={() => location.reload()} className="text-[var(--accent)] underline">
            Another round
          </button>
          <Link href="/" className="text-[var(--accent)] underline">
            Home
          </Link>
        </div>
      </div>
    );
  }

  const lastCorrect = results[results.length - 1]?.attempt.correct;

  return (
    <div className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h1 className="text-xl font-semibold">Transfer practice</h1>
        <span className="text-xs text-[var(--muted)]">
          {index + 1} / {items.length} · level {item.level}
        </span>
      </div>
      <p className="text-sm text-[var(--muted)]">
        New scenarios, learned tools. No lesson text to lean on - that is the point.
      </p>
      <section className="space-y-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
        <p className="text-sm">{item.prompt}</p>
        {!revealed ? (
          <>
            {item.type === 'multipleChoice' ? (
              <div className="flex flex-col gap-1.5">
                {item.options!.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setInput(opt)}
                    className={`rounded-md px-3 py-1.5 text-left text-xs ${
                      input === opt
                        ? 'bg-[var(--accent)] text-white'
                        : 'border border-[var(--border)] text-[var(--muted)]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <input
                inputMode="decimal"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Number"
                className="w-40 rounded-md border border-[var(--border)] p-2 text-sm"
              />
            )}
            <button
              onClick={submit}
              disabled={!input.trim()}
              className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
            >
              Submit
            </button>
          </>
        ) : (
          <>
            <p className={`text-sm font-semibold ${lastCorrect ? 'text-green-700' : 'text-red-700'}`}>
              {lastCorrect ? 'Correct.' : 'Not this time.'}
            </p>
            <p className="text-sm text-[var(--muted)]">{item.rationale}</p>
            <button
              onClick={next}
              className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
            >
              {index + 1 >= items.length ? 'Finish' : 'Next'}
            </button>
          </>
        )}
      </section>
      <p className="text-xs text-[var(--muted)]">
        Ready for the whole curriculum at once? <Link href="/exam/" className="underline">Take the final exam</Link>.
      </p>
    </div>
  );
}
