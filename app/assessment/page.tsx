'use client';
// Baseline assessment (SPEC_V2 §42.1, §63): taken once before learning,
// stored permanently as the improvement denominator. Answers are never
// revealed, so the same instrument can be repeated at 3, 6 and 12 months.
import Link from 'next/link';
import { useEffect, useState } from 'react';
import baseline from '@/data/questions/baseline.json';
import { getLearner, recordAttempt, updateLearner } from '@/lib/db';

interface Item {
  id: string;
  domain: string;
  type: 'multipleChoice' | 'numeric';
  prompt: string;
  options?: string[];
  answer: string | number;
  tolerance?: number;
}

export default function AssessmentPage() {
  const items = baseline.items as Item[];
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [existing, setExisting] = useState<{ score: number; at: number } | null>(null);
  const [done, setDone] = useState<number | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    getLearner().then((l) => {
      if (l.baselineScore !== undefined) setExisting({ score: l.baselineScore, at: l.baselineAt ?? 0 });
      setReady(true);
    });
  }, []);

  async function submit() {
    let correctCount = 0;
    const now = Date.now();
    for (const item of items) {
      const raw = (answers[item.id] ?? '').trim();
      const correct =
        item.type === 'numeric'
          ? Number.isFinite(Number(raw.replace(',', '.'))) &&
            Math.abs(Number(raw.replace(',', '.')) - (item.answer as number)) <= (item.tolerance ?? 0)
          : raw === item.answer;
      if (correct) correctCount++;
      await recordAttempt({
        lessonSlug: 'baseline',
        questionId: item.id,
        conceptId: 'money',
        stage: 'assessment',
        kind: 'calculation',
        answer: raw,
        correct,
        selfReported: false,
        at: now,
      });
    }
    const score = Math.round((100 * correctCount) / items.length);
    await updateLearner({ baselineScore: score, baselineAt: now });
    setDone(score);
  }

  if (!ready) return <p className="text-sm text-[var(--muted)]">Loading…</p>;

  if (done !== null || existing) {
    const score = done ?? existing!.score;
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <h1 className="text-xl font-semibold">Baseline recorded</h1>
        <p className="mt-2 text-3xl font-semibold text-[var(--accent)]">{score}%</p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Stored permanently as your starting point (answers are not revealed, so the same
          assessment can measure progress at 3, 6 and 12 months). Now the curriculum does the work.
        </p>
        <Link href="/" className="mt-3 inline-block text-sm text-[var(--accent)] underline">
          To today's lesson
        </Link>
      </div>
    );
  }

  const allAnswered = items.every((i) => (answers[i.id] ?? '').trim() !== '');

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Baseline assessment</h1>
      <p className="text-sm text-[var(--muted)]">
        {items.length} questions, about 10 minutes, taken once before learning. Answer from what you
        know today - a low score is the point of a baseline, not a problem.
      </p>
      {items.map((item, idx) => (
        <section key={item.id} className="space-y-2 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
          <p className="text-sm">
            <span className="text-[var(--muted)]">{idx + 1}.</span> {item.prompt}
          </p>
          {item.type === 'multipleChoice' ? (
            <div className="flex flex-col gap-1.5">
              {item.options!.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setAnswers({ ...answers, [item.id]: opt })}
                  className={`rounded-md px-3 py-1.5 text-left text-xs ${
                    answers[item.id] === opt
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
              value={answers[item.id] ?? ''}
              onChange={(e) => setAnswers({ ...answers, [item.id]: e.target.value })}
              placeholder="Number"
              className="w-40 rounded-md border border-[var(--border)] p-2 text-sm"
            />
          )}
        </section>
      ))}
      <button
        onClick={submit}
        disabled={!allAnswered}
        className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
      >
        Submit baseline
      </button>
    </div>
  );
}
