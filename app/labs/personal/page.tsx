'use client';
// Personal finance laboratory (SPEC_V2 §37): the Level 12 arithmetic, live.
// Pure calculators over lib/finance - results are arithmetic, not forecasts.
import Link from 'next/link';
import { useState } from 'react';
import { futureValue, requiredMonthlyContribution } from '@/lib/finance';

const eur = (v: number) =>
  v.toLocaleString('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

function Field({
  label,
  value,
  onChange,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  step?: number;
}) {
  return (
    <label className="block text-sm">
      {label}
      <input
        type="number"
        value={value}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full rounded-md border border-[var(--border)] p-2 text-sm"
      />
    </label>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
      <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">{title}</h2>
      {children}
    </section>
  );
}

export default function PersonalFinanceLabPage() {
  const [base, setBase] = useState({ income: 2600, expenses: 2100, reserveMonths: 4 });
  const [debt, setDebt] = useState({ amount: 4000, debtRate: 16, marketRate: 6 });
  const [gap, setGap] = useState({ netIncome: 2500, replacement: 70, yearsToRetire: 30, retirementYears: 25, realReturn: 3 });

  const savingsRate = base.income > 0 ? ((base.income - base.expenses) / base.income) * 100 : 0;
  const reserveTarget = base.expenses * base.reserveMonths;

  const debtCost = debt.amount * (debt.debtRate / 100);
  const marketHope = debt.amount * (debt.marketRate / 100);

  const monthlyGap = gap.netIncome * (1 - gap.replacement / 100);
  const capitalNeeded = monthlyGap * 12 * gap.retirementYears;
  const monthlyNeeded = requiredMonthlyContribution(capitalNeeded, gap.realReturn / 100, gap.yearsToRetire);
  const lateStart = requiredMonthlyContribution(capitalNeeded, gap.realReturn / 100, Math.max(1, gap.yearsToRetire - 15));

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Personal finance lab</h1>
      <p className="text-sm text-[var(--muted)]">
        The Level 12 arithmetic on your own numbers. Everything stays on this device; results are
        arithmetic under stated assumptions, not forecasts or advice.
      </p>

      <Card title="Savings rate and reserve (lesson 47)">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Net income (€/month)" value={base.income} onChange={(v) => setBase({ ...base, income: v })} step={50} />
          <Field label="Essential expenses (€/month)" value={base.expenses} onChange={(v) => setBase({ ...base, expenses: v })} step={50} />
          <Field label="Reserve (months)" value={base.reserveMonths} onChange={(v) => setBase({ ...base, reserveMonths: v })} />
        </div>
        <p className="text-sm">
          Savings rate: <strong>{savingsRate.toFixed(1)}%</strong>. Emergency reserve target:{' '}
          <strong>{eur(reserveTarget)}</strong> in instantly available savings (Livret A / LDDS).
        </p>
      </Card>

      <Card title="Repay debt or invest? (lesson 47)">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Debt balance (€)" value={debt.amount} onChange={(v) => setDebt({ ...debt, amount: v })} step={500} />
          <Field label="Debt rate (%/yr)" value={debt.debtRate} onChange={(v) => setDebt({ ...debt, debtRate: v })} step={0.5} />
          <Field label="Expected market return (%/yr)" value={debt.marketRate} onChange={(v) => setDebt({ ...debt, marketRate: v })} step={0.5} />
        </div>
        <p className="text-sm">
          Repaying stops <strong>{eur(debtCost)}</strong>/year with certainty; investing hopes for{' '}
          <strong>{eur(marketHope)}</strong>/year with risk.{' '}
          <strong>
            {debt.debtRate >= debt.marketRate
              ? 'The guaranteed repayment wins.'
              : 'The rates favour investing - if the debt rate is genuinely this low.'}
          </strong>
        </p>
      </Card>

      <Card title="Retirement gap (lesson 48)">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Net income (€/month)" value={gap.netIncome} onChange={(v) => setGap({ ...gap, netIncome: v })} step={100} />
          <Field label="Replacement rate (%)" value={gap.replacement} onChange={(v) => setGap({ ...gap, replacement: v })} />
          <Field label="Years until retirement" value={gap.yearsToRetire} onChange={(v) => setGap({ ...gap, yearsToRetire: v })} />
          <Field label="Years of retirement to fund" value={gap.retirementYears} onChange={(v) => setGap({ ...gap, retirementYears: v })} />
          <Field label="Real return while saving (%/yr)" value={gap.realReturn} onChange={(v) => setGap({ ...gap, realReturn: v })} step={0.5} />
        </div>
        <p className="text-sm">
          Monthly gap: <strong>{eur(monthlyGap)}</strong>. Capital to fund it for{' '}
          {gap.retirementYears} years (in today's euros, conservatively at zero real return in
          retirement): <strong>{eur(capitalNeeded)}</strong>.
        </p>
        <p className="text-sm">
          Required saving: <strong>{eur(monthlyNeeded)}/month</strong> starting now — versus{' '}
          <strong>{eur(lateStart)}/month</strong> if the start waits 15 years. Your real replacement
          rate is at{' '}
          <a href="https://www.info-retraite.fr" target="_blank" rel="noreferrer" className="underline">
            info-retraite.fr
          </a>.
        </p>
      </Card>

      <Card title="What a euro becomes (lesson 5, for scale)">
        <p className="text-sm text-[var(--muted)]">
          At 5 percent nominal: 1 euro invested at 25 → {futureValue(1, 0.05, 40).toFixed(2)} at 65;
          invested at 45 → {futureValue(1, 0.05, 20).toFixed(2)}. The calendar is the cheapest
          multiplier available.
        </p>
      </Card>

      <div className="flex flex-col gap-2 text-sm">
        <Link href="/ips/" className="text-[var(--accent)] underline">
          Write your Investment Policy Statement →
        </Link>
        <Link href="/labs/" className="text-[var(--accent)] underline">
          Back to labs
        </Link>
      </div>
    </div>
  );
}
