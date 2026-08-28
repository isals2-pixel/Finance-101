'use client';
// Behavioural finance simulator (SPEC_V2 §32): one scripted market cycle,
// six bias-triggering decisions against a written plan. Choices record as
// stage 'decision' attempts on the bias concepts (§42 decision quality).
import Link from 'next/link';
import { useState } from 'react';
import sim from '@/data/labs/behaviour-sim.json';
import { recordAttempt } from '@/lib/db';

interface SimOption {
  id: string;
  text: string;
  correct: boolean;
  planDelta: number;
  bias: string | null;
}
interface SimStep {
  id: string;
  conceptId: string;
  situation: string;
  options: SimOption[];
  debrief: string;
}

const eur = (v: number) =>
  v.toLocaleString('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

export default function BehaviourLabPage() {
  const steps = sim.steps as SimStep[];
  const [index, setIndex] = useState(-1);
  const [picked, setPicked] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [choices, setChoices] = useState<{ step: SimStep; option: SimOption }[]>([]);

  if (index === -1) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Behavioural simulator</h1>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 text-sm space-y-2">
          <p>{sim.setup}</p>
          <p className="text-[var(--muted)]">
            One scripted market cycle, six decisions. The numbers are illustrative arithmetic, not
            forecasts - the biases are the real subject. Decide as you honestly would.
          </p>
        </div>
        <button
          onClick={() => setIndex(0)}
          className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
        >
          Start the cycle
        </button>
      </div>
    );
  }

  if (index >= steps.length) {
    const followed = choices.filter((c) => c.option.correct).length;
    const totalCost = choices.reduce((s, c) => s + c.option.planDelta, 0);
    const biasesHit = choices.filter((c) => c.option.bias);
    return (
      <div className="space-y-4">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
          <h1 className="text-xl font-semibold">Cycle complete</h1>
          <p className="mt-2 text-sm">
            Plan followed on <strong>{followed} of {steps.length}</strong> decisions. Estimated cost
            of the deviations, relative to the written plan:{' '}
            <strong className={totalCost < 0 ? 'text-red-700' : 'text-green-700'}>
              {eur(totalCost)}
            </strong>{' '}
            on the 100,000 euro portfolio.
          </p>
        </div>
        {biasesHit.length > 0 && (
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
            <h2 className="text-sm font-semibold">Biases that got a vote</h2>
            <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
              {biasesHit.map((c) => (
                <li key={c.step.id}>
                  <strong className="text-[var(--fg,#1c1917)]">{c.step.id}:</strong> {c.option.bias}
                </li>
              ))}
            </ul>
          </div>
        )}
        {biasesHit.length === 0 && (
          <p className="text-sm text-[var(--muted)]">
            Every decision followed the written rule - which is the entire skill. The feelings the
            scenarios provoke in real markets are stronger; the rule is how they stay advisory.
          </p>
        )}
        <div className="flex gap-4 text-sm">
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

  const step = steps[index];

  async function confirm() {
    const option = step.options.find((o) => o.id === picked)!;
    setChoices([...choices, { step, option }]);
    await recordAttempt({
      lessonSlug: 'behaviour-sim',
      questionId: step.id,
      conceptId: step.conceptId,
      stage: 'decision',
      kind: 'classification',
      answer: option.text,
      correct: option.correct,
      selfReported: false,
      at: Date.now(),
    });
    setRevealed(true);
  }

  const chosen = step.options.find((o) => o.id === picked);

  return (
    <div className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h1 className="text-xl font-semibold">Behavioural simulator</h1>
        <span className="text-xs text-[var(--muted)]">
          decision {index + 1} / {steps.length}
        </span>
      </div>
      <section className="space-y-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
        <p className="text-sm">{step.situation}</p>
        {!revealed ? (
          <>
            <div className="flex flex-col gap-1.5">
              {step.options.map((o) => (
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
              {chosen!.correct
                ? 'The plan held.'
                : `${chosen!.bias ?? 'Deviation'} - estimated cost ${eur(chosen!.planDelta)}.`}
            </p>
            <p className="text-sm text-[var(--muted)]">{step.debrief}</p>
            <button
              onClick={() => {
                setRevealed(false);
                setPicked(null);
                setIndex(index + 1);
              }}
              className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
            >
              {index + 1 >= steps.length ? 'See the full cycle' : 'Continue'}
            </button>
          </>
        )}
      </section>
    </div>
  );
}
