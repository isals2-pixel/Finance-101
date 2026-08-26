'use client';
// Basic portfolio simulator (SPEC_V2 §30, §79): allocation across asset
// classes with expected return and volatility from clearly labelled static
// assumptions. Math in lib/finance.ts, reference-tested.
import { useState } from 'react';
import assumptions from '@/data/market-assumptions.json';
import { portfolioExpectedReturn, portfolioVolatility } from '@/lib/finance';

const eur = (v: number) =>
  v.toLocaleString('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
const pct = (v: number) => `${(100 * v).toFixed(1)}%`;

export default function PortfolioLabPage() {
  const assets = assumptions.assets;
  const [weightsPct, setWeightsPct] = useState<number[]>([60, 30, 0, 10]);
  const [amount, setAmount] = useState(10000);

  const total = weightsPct.reduce((a, b) => a + b, 0);
  const weights = weightsPct.map((w) => w / 100);
  const valid = Math.abs(total - 100) < 0.01;

  const expReturn = portfolioExpectedReturn(weights, assets.map((a) => a.expectedReturn));
  const vol = portfolioVolatility(weights, assets.map((a) => a.volatility), assumptions.correlations);
  const badYear = expReturn - 2 * vol;

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Portfolio laboratory</h1>

      <section className="space-y-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
          Allocation (must sum to 100%)
        </h2>
        {assets.map((asset, i) => (
          <label key={asset.id} className="flex items-center gap-3 text-sm">
            <span className="w-44">{asset.label}</span>
            <input
              type="range"
              min={0}
              max={100}
              value={weightsPct[i]}
              onChange={(e) => {
                const next = [...weightsPct];
                next[i] = Number(e.target.value);
                setWeightsPct(next);
              }}
              className="flex-1"
            />
            <span className="w-12 text-right tabular-nums">{weightsPct[i]}%</span>
          </label>
        ))}
        <p className={`text-sm ${valid ? 'text-[var(--muted)]' : 'text-red-800'}`}>
          Total: {total}%{valid ? '' : ' — adjust to 100% to read the results'}
        </p>
        <label className="block w-56 text-sm">
          Amount invested (€)
          <input
            type="number"
            value={amount}
            step={1000}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mt-1 w-full rounded-md border border-[var(--border)] p-2 text-sm"
          />
        </label>
      </section>

      {valid && (
        <section className="space-y-2 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 text-sm">
          <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
            Under the stated assumptions
          </h2>
          <p>
            Expected real return: <strong>{pct(expReturn)}</strong> per year (
            {eur(amount * expReturn)} on {eur(amount)}).
          </p>
          <p>
            Estimated volatility: <strong>{pct(vol)}</strong> — diversification across imperfectly
            correlated assets keeps this below the weighted average of the parts (lesson 16).
          </p>
          <p>
            A bad year (about two standard deviations below expectation):{' '}
            <strong className="text-red-800">{pct(badYear)}</strong>, roughly {eur(amount * badYear)}.
            Lesson 20's risk question: could you hold through that?
          </p>
        </section>
      )}

      <section className="rounded-lg border border-dashed border-[var(--border)] p-4 text-xs text-[var(--muted)]">
        <p className="font-medium">Assumptions, clearly labelled (SPEC_V2 §30, §70)</p>
        <p className="mt-1">{assumptions.source}</p>
        <p className="mt-1">
          {assumptions.methodology} As of {assumptions.asOf}, in {assumptions.currency}. Per asset:{' '}
          {assets.map((a) => `${a.label} ${pct(a.expectedReturn)} / vol ${pct(a.volatility)}`).join('; ')}.
        </p>
      </section>
    </div>
  );
}
