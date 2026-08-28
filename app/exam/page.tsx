'use client';
// Final exam (SPEC_V2 §40, §41, §55): the held-out, hand-authored pool,
// taken in one sitting. Auto-scored; answers are never revealed, so the
// instrument stays reusable. Not shown anywhere in the app outside this page.
import Link from 'next/link';
import { useEffect, useState } from 'react';
import pool from '@/data/questions/final-exam.json';
import { allLessonStates, getLearner, recordAttempt, updateLearner } from '@/lib/db';

interface ExamItem {
  id: string;
  domain: string;
  type: 'multipleChoice' | 'numeric';
  prompt: string;
  options?: string[];
  answer: string | number;
  tolerance?: number;
}

export default function ExamPage() {
  const items = pool.items as ExamItem[];
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [started, setStarted] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(0);
  const [previous, setPrevious] = useState<{ score: number; at: number } | null>(null);
  const [result, setResult] = useState<{ score: number; byDomain: Record<string, [number, number]> } | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Promise.all([getLearner(), allLessonStates()]).then(([l, states]) => {
      if (l.examScore !== undefined) setPrevious({ score: l.examScore, at: l.examAt ?? 0 });
      setCompletedLessons(states.filter((s) => s.completedAt).length);
      setReady(true);
    });
  }, []);

  async function submit() {
    let correctCount = 0;
    const byDomain: Record<string, [number, number]> = {};
    const now = Date.now();
    for (const item of items) {
      const raw = (answers[item.id] ?? '').trim();
      const correct =
        item.type === 'numeric'
          ? Number.isFinite(Number(raw.replace(',', '.'))) &&
            Math.abs(Number(raw.replace(',', '.')) - (item.answer as number)) <= (item.tolerance ?? 0)
          : raw === item.answer;
      if (correct) correctCount++;
      const d = (byDomain[item.domain] ??= [0, 0]);
      d[1]++;
      if (correct) d[0]++;
      await recordAttempt({
        lessonSlug: 'final-exam',
        questionId: item.id,
        conceptId: 'money',
        stage: 'exam',
        kind: 'calculation',
        answer: raw,
        correct,
        selfReported: false,
        at: now,
      });
    }
    const score = Math.round((100 * correctCount) / items.length);
    await updateLearner({ examScore: score, examAt: now });
    setResult({ score, byDomain });
  }

  if (!ready) return <p className="text-sm text-[var(--muted)]">Loading…</p>;

  if (result) {
    const passed = result.score >= pool.passThreshold;
    return (
      <div className="space-y-4">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
          <h1 className="text-xl font-semibold">{passed ? 'Exam passed' : 'Not yet'}</h1>
          <p className="mt-2 text-3xl font-semibold text-[var(--accent)]">{result.score}%</p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Threshold: {pool.passThreshold}%. Answers stay unrevealed so the exam remains reusable -
            weak domains below say where to review.
          </p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
          <h2 className="text-sm font-semibold">By domain</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {Object.entries(result.byDomain).map(([domain, [c, n]]) => (
              <li key={domain} className="flex justify-between">
                <span>{domain}</span>
                <span className={c === n ? 'text-green-700' : c / n < 0.6 ? 'text-red-700' : ''}>
                  {c}/{n}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/review/" className="inline-block text-sm text-[var(--accent)] underline">
          Review the weak spots
        </Link>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Final exam</h1>
        {previous && (
          <p className="rounded-md border border-[var(--border)] bg-[var(--card)] p-3 text-sm">
            Last sitting: <strong>{previous.score}%</strong> on{' '}
            {new Date(previous.at).toLocaleDateString()}. A new sitting replaces it.
          </p>
        )}
        <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 text-sm">
          <p>
            {items.length} questions across the whole curriculum, one sitting, about 30 minutes.
            Pass mark {pool.passThreshold}%. Answers are never revealed - only domain scores - so
            the exam can be retaken meaningfully.
          </p>
          <p className="mt-2 text-[var(--muted)]">
            Lessons completed: {completedLessons} of 50.
            {completedLessons < 50 &&
              ' The exam is designed for a finished curriculum; sitting it early is allowed but scores accordingly.'}
          </p>
        </div>
        <button
          onClick={() => setStarted(true)}
          className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
        >
          Start the exam
        </button>
      </div>
    );
  }

  const allAnswered = items.every((i) => (answers[i.id] ?? '').trim() !== '');

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Final exam</h1>
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
        Submit the exam
      </button>
    </div>
  );
}
