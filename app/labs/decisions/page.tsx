'use client';
// Investment decision laboratory (SPEC_V2 §33): goal-first scenarios decided
// with the lesson 20 checklist. Auto-scored; attempts record as stage
// 'decision' on the investment-decision concept (§42 decision quality).
import Link from 'next/link';
import { useState } from 'react';
import lab from '@/data/labs/decision-scenarios.json';
import { recordAttempt } from '@/lib/db';

interface ScenarioOption {
  id: string;
  text: string;
  correct: boolean;
}
interface Scenario {
  id: string;
  goal: string;
  options: ScenarioOption[];
  debrief: string;
}

export default function DecisionLabPage() {
  const scenarios = lab.scenarios as Scenario[];
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  if (index >= scenarios.length) {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <h1 className="text-xl font-semibold">Decision lab done</h1>
        <p className="mt-2 text-3xl font-semibold text-[var(--accent)]">
          {correctCount}/{scenarios.length}
        </p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Recorded toward the decision-quality component of your competency score. The checklist
          decided every scenario: {lab.checklist.join(' ')}
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

  const scenario = scenarios[index];
  const chosen = scenario.options.find((o) => o.id === picked);

  async function confirm() {
    const option = scenario.options.find((o) => o.id === picked)!;
    if (option.correct) setCorrectCount((c) => c + 1);
    await recordAttempt({
      lessonSlug: 'decision-lab',
      questionId: scenario.id,
      conceptId: 'investment-decision',
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
        <h1 className="text-xl font-semibold">Investment decision lab</h1>
        <span className="text-xs text-[var(--muted)]">
          scenario {index + 1} / {scenarios.length}
        </span>
      </div>
      <p className="text-xs text-[var(--muted)]">
        The checklist: {lab.checklist.join(' · ')}
      </p>
      <section className="space-y-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
        <p className="text-sm font-medium">{scenario.goal}</p>
        {!revealed ? (
          <>
            <div className="flex flex-col gap-1.5">
              {scenario.options.map((o) => (
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
              Decide
            </button>
          </>
        ) : (
          <>
            <p className={`text-sm font-semibold ${chosen!.correct ? 'text-green-700' : 'text-red-700'}`}>
              {chosen!.correct ? 'Checklist-consistent.' : 'The checklist disagrees.'}
            </p>
            <p className="text-sm text-[var(--muted)]">{scenario.debrief}</p>
            <button
              onClick={() => {
                setRevealed(false);
                setPicked(null);
                setIndex(index + 1);
              }}
              className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
            >
              {index + 1 >= scenarios.length ? 'Finish' : 'Next scenario'}
            </button>
          </>
        )}
      </section>
    </div>
  );
}
