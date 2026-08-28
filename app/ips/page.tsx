'use client';
// Investment Policy Statement builder (SPEC_V2 §38): the written rule of
// lessons 20 and 43, drafted, self-scored against a rubric, stored on-device.
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getLearner, updateLearner } from '@/lib/db';
import type { InvestmentPolicyStatement } from '@/lib/types';

const RUBRIC = [
  'The objective names an amount or an income, and a date - not "grow my money".',
  'The equity share respects the LOWER of my risk capacity and my honestly-tested tolerance.',
  'I have written the two-standard-deviation bad year in euros and accepted it.',
  'The rebalancing rule is mechanical: a band and a check date, no judgment required.',
  'Contributions are automated - no monthly decision exists.',
  'The change conditions are life events, not market events.',
];

const EMPTY: InvestmentPolicyStatement = {
  objective: '',
  horizonYears: 20,
  equityPercent: 60,
  rebalanceBandPoints: 5,
  monthlyContribution: 200,
  changeConditions: '',
  rubricChecked: [],
  updatedAt: 0,
};

export default function IpsPage() {
  const [ips, setIps] = useState<InvestmentPolicyStatement>(EMPTY);
  const [ready, setReady] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  useEffect(() => {
    getLearner().then((l) => {
      if (l.ips) {
        setIps(l.ips);
        setSavedAt(l.ips.updatedAt);
      }
      setReady(true);
    });
  }, []);

  async function save() {
    const next = { ...ips, updatedAt: Date.now() };
    await updateLearner({ ips: next });
    setIps(next);
    setSavedAt(next.updatedAt);
  }

  function toggleRubric(item: string) {
    setIps((cur) => ({
      ...cur,
      rubricChecked: cur.rubricChecked.includes(item)
        ? cur.rubricChecked.filter((x) => x !== item)
        : [...cur.rubricChecked, item],
    }));
  }

  if (!ready) return <p className="text-sm text-[var(--muted)]">Loading…</p>;

  const rubricScore = ips.rubricChecked.length;
  const statement = [
    `INVESTMENT POLICY STATEMENT (self-written, ${savedAt ? new Date(savedAt).toLocaleDateString() : 'unsaved'})`,
    '',
    `Objective: ${ips.objective || '—'}`,
    `Horizon: ${ips.horizonYears} years`,
    `Target allocation: ${ips.equityPercent}% equities / ${100 - ips.equityPercent}% bonds and cash`,
    `Rebalancing: ±${ips.rebalanceBandPoints} point band, checked yearly; new contributions go to the underweight side`,
    `Contribution: ${ips.monthlyContribution} €/month, automated`,
    `Changes allowed only on: ${ips.changeConditions || '—'}`,
    '',
    `Rubric self-score: ${rubricScore}/${RUBRIC.length}`,
  ].join('\n');

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold">Investment Policy Statement</h1>
      <p className="text-sm text-[var(--muted)]">
        The written rule from lessons 20, 41 and 43 - decided in calm so crashes are compliance,
        not courage. Stored only on this device. Education, not advice.
      </p>

      <section className="space-y-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <label className="block text-sm">
          Objective (an amount or income, and a date)
          <input
            value={ips.objective}
            onChange={(e) => setIps({ ...ips, objective: e.target.value })}
            placeholder="e.g. 750 €/month of retirement income from 2056"
            className="mt-1 w-full rounded-md border border-[var(--border)] p-2 text-sm"
          />
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="block text-sm">
            Horizon (years)
            <input
              type="number"
              value={ips.horizonYears}
              onChange={(e) => setIps({ ...ips, horizonYears: Number(e.target.value) })}
              className="mt-1 w-full rounded-md border border-[var(--border)] p-2 text-sm"
            />
          </label>
          <label className="block text-sm">
            Equity share (%)
            <input
              type="number"
              value={ips.equityPercent}
              min={0}
              max={100}
              onChange={(e) => setIps({ ...ips, equityPercent: Number(e.target.value) })}
              className="mt-1 w-full rounded-md border border-[var(--border)] p-2 text-sm"
            />
          </label>
          <label className="block text-sm">
            Rebalancing band (± points)
            <input
              type="number"
              value={ips.rebalanceBandPoints}
              onChange={(e) => setIps({ ...ips, rebalanceBandPoints: Number(e.target.value) })}
              className="mt-1 w-full rounded-md border border-[var(--border)] p-2 text-sm"
            />
          </label>
          <label className="block text-sm">
            Monthly contribution (€)
            <input
              type="number"
              value={ips.monthlyContribution}
              step={50}
              onChange={(e) => setIps({ ...ips, monthlyContribution: Number(e.target.value) })}
              className="mt-1 w-full rounded-md border border-[var(--border)] p-2 text-sm"
            />
          </label>
        </div>
        <label className="block text-sm">
          Changes allowed only on (life events, not market events)
          <input
            value={ips.changeConditions}
            onChange={(e) => setIps({ ...ips, changeConditions: e.target.value })}
            placeholder="e.g. job loss, birth, inheritance, retirement within 10 years"
            className="mt-1 w-full rounded-md border border-[var(--border)] p-2 text-sm"
          />
        </label>
      </section>

      <section className="space-y-2 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <h2 className="text-sm font-semibold">
          Self-score against the rubric ({rubricScore}/{RUBRIC.length})
        </h2>
        {RUBRIC.map((item) => (
          <label key={item} className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              checked={ips.rubricChecked.includes(item)}
              onChange={() => toggleRubric(item)}
              className="mt-0.5"
            />
            <span className={ips.rubricChecked.includes(item) ? '' : 'text-[var(--muted)]'}>{item}</span>
          </label>
        ))}
      </section>

      <div className="flex items-center gap-4">
        <button
          onClick={save}
          className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
        >
          Save the statement
        </button>
        {savedAt && (
          <span className="text-xs text-[var(--muted)]">
            Saved {new Date(savedAt).toLocaleString()}
          </span>
        )}
      </div>

      {savedAt && (
        <section className="space-y-2 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
          <h2 className="text-sm font-semibold">Your statement</h2>
          <pre className="whitespace-pre-wrap rounded-md bg-[var(--bg,#faf9f7)] p-3 text-xs leading-relaxed">
            {statement}
          </pre>
          <button
            onClick={() => navigator.clipboard?.writeText(statement)}
            className="text-sm text-[var(--accent)] underline"
          >
            Copy as text
          </button>
        </section>
      )}

      <Link href="/labs/personal/" className="inline-block text-sm text-[var(--accent)] underline">
        ← Personal finance lab
      </Link>
    </div>
  );
}
