'use client';
// Compound interest, inflation, and fee simulators (SPEC_V2 §79). All math
// in lib/finance.ts, reference-tested.
import Link from 'next/link';
import { useState } from 'react';
import {
  feeImpact,
  futureValueWithContributions,
  realValue,
} from '@/lib/finance';

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

export default function LabsPage() {
  const [ci, setCi] = useState({ principal: 1000, monthly: 200, rate: 5, years: 20 });
  const [inf, setInf] = useState({ amount: 10000, rate: 2, years: 20 });
  const [fee, setFee] = useState({ principal: 10000, gross: 6, feeA: 0.2, feeB: 1.8, years: 30 });

  const ciTotal = futureValueWithContributions(ci.principal, ci.monthly, ci.rate / 100, ci.years);
  const ciDeposited = ci.principal + ci.monthly * 12 * ci.years;
  const infReal = realValue(inf.amount, inf.rate / 100, inf.years);
  const cheap = feeImpact(fee.principal, fee.gross / 100, fee.feeA / 100, fee.years);
  const dear = feeImpact(fee.principal, fee.gross / 100, fee.feeB / 100, fee.years);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Labs</h1>
      <p className="text-sm text-[var(--muted)]">
        Calculators over tested formulas. Rates are annual; results are arithmetic, not forecasts.
      </p>

      <Card title="Compound interest (lesson 6)">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Starting amount (€)" value={ci.principal} onChange={(v) => setCi({ ...ci, principal: v })} step={100} />
          <Field label="Monthly contribution (€)" value={ci.monthly} onChange={(v) => setCi({ ...ci, monthly: v })} step={50} />
          <Field label="Annual return (%)" value={ci.rate} onChange={(v) => setCi({ ...ci, rate: v })} step={0.5} />
          <Field label="Years" value={ci.years} onChange={(v) => setCi({ ...ci, years: v })} />
        </div>
        <p className="text-sm">
          Final value: <strong>{eur(ciTotal)}</strong> — of which deposited {eur(ciDeposited)} and
          growth <strong>{eur(ciTotal - ciDeposited)}</strong>.
        </p>
      </Card>

      <Card title="Inflation (lesson 7)">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Amount held as cash (€)" value={inf.amount} onChange={(v) => setInf({ ...inf, amount: v })} step={500} />
          <Field label="Inflation (%/yr)" value={inf.rate} onChange={(v) => setInf({ ...inf, rate: v })} step={0.5} />
          <Field label="Years" value={inf.years} onChange={(v) => setInf({ ...inf, years: v })} />
        </div>
        <p className="text-sm">
          Purchasing power after {inf.years} years: <strong>{eur(infReal)}</strong> in today's terms —
          a loss of {eur(inf.amount - infReal)} without any market event.
        </p>
      </Card>

      <Card title="Fees (lesson 18)">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Investment (€)" value={fee.principal} onChange={(v) => setFee({ ...fee, principal: v })} step={1000} />
          <Field label="Gross return (%/yr)" value={fee.gross} onChange={(v) => setFee({ ...fee, gross: v })} step={0.5} />
          <Field label="Fund A fee (%/yr)" value={fee.feeA} onChange={(v) => setFee({ ...fee, feeA: v })} step={0.05} />
          <Field label="Fund B fee (%/yr)" value={fee.feeB} onChange={(v) => setFee({ ...fee, feeB: v })} step={0.05} />
          <Field label="Years" value={fee.years} onChange={(v) => setFee({ ...fee, years: v })} />
        </div>
        <p className="text-sm">
          After {fee.years} years: fund A <strong>{eur(cheap.net)}</strong>, fund B{' '}
          <strong>{eur(dear.net)}</strong>. The fee gap costs{' '}
          <strong>{eur(cheap.net - dear.net)}</strong>.
        </p>
      </Card>

      <Link href="/labs/portfolio/" className="inline-block text-sm text-[var(--accent)] underline">
        Portfolio laboratory →
      </Link>
    </div>
  );
}
