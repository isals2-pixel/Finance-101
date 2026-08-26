// Reference values for the financial calculations (SPEC_V2 §83): edge cases,
// zero, rounding, large values.
import { describe, expect, it } from 'vitest';
import {
  feeImpact,
  futureValue,
  futureValueWithContributions,
  portfolioExpectedReturn,
  portfolioVolatility,
  realReturn,
  realValue,
  weightsSumToOne,
} from '@/lib/finance';

describe('futureValue', () => {
  it('matches hand-computed references', () => {
    expect(futureValue(1000, 0.05, 3)).toBeCloseTo(1157.625, 3);
    expect(futureValue(10000, 0.05, 30)).toBeCloseTo(43219.42, 1);
  });
  it('handles zero rate and zero years', () => {
    expect(futureValue(1000, 0, 10)).toBe(1000);
    expect(futureValue(1000, 0.07, 0)).toBe(1000);
  });
  it('handles large values without loss of sanity', () => {
    expect(futureValue(1e9, 0.02, 50)).toBeCloseTo(1e9 * Math.pow(1.02, 50), 0);
  });
});

describe('futureValueWithContributions', () => {
  it('reduces to lump sum with zero contribution', () => {
    expect(futureValueWithContributions(1000, 0, 0.05, 10)).toBeCloseTo(futureValue(1000, 0.05, 10), 6);
  });
  it('reduces to sum of deposits at zero rate', () => {
    expect(futureValueWithContributions(0, 100, 0, 10)).toBeCloseTo(12000, 6);
  });
  it('monthly contributions compound (reference)', () => {
    // 200/month, 5% annual effective, 10 years. Monthly-equivalent rate
    // convention: rm = 1.05^(1/12) - 1; FV = 200 * ((1+rm)^120 - 1) / rm.
    const rm = Math.pow(1.05, 1 / 12) - 1;
    const reference = 200 * ((Math.pow(1 + rm, 120) - 1) / rm);
    const v = futureValueWithContributions(0, 200, 0.05, 10);
    expect(v).toBeGreaterThan(24000); // more than the 24,000 deposited
    expect(v).toBeCloseTo(reference, 6);
    expect(v).toBeCloseTo(30872.63, 1);
  });
});

describe('realValue and realReturn', () => {
  it('matches the lesson 7 drawer example', () => {
    expect(realValue(1000, 0.02, 30)).toBeCloseTo(552.07, 1);
  });
  it('Fisher exact: 3% nominal, 2% inflation -> 0.98%', () => {
    expect(realReturn(0.03, 0.02)).toBeCloseTo(0.009804, 5);
  });
  it('zero inflation leaves the nominal rate', () => {
    expect(realReturn(0.04, 0)).toBeCloseTo(0.04, 10);
  });
  it('negative real when inflation exceeds nominal', () => {
    expect(realReturn(0.01, 0.02)).toBeLessThan(0);
  });
});

describe('feeImpact', () => {
  it('matches the lesson 18 example', () => {
    const { net, lost } = feeImpact(100000, 0.06, 0.018, 30);
    // gross at 6%: 574,349; net at 4.2%: 343,529
    expect(net).toBeCloseTo(100000 * Math.pow(1.042, 30), 0);
    expect(lost).toBeGreaterThan(0);
  });
  it('zero fee loses nothing', () => {
    expect(feeImpact(10000, 0.05, 0, 20).lost).toBe(0);
  });
});

describe('portfolio math', () => {
  const weights = [0.6, 0.4];
  const returns = [0.05, 0.015];
  const vols = [0.16, 0.05];
  const corr = [
    [1, 0.1],
    [0.1, 1],
  ];
  it('expected return is the weighted average', () => {
    expect(portfolioExpectedReturn(weights, returns)).toBeCloseTo(0.6 * 0.05 + 0.4 * 0.015, 10);
  });
  it('volatility with imperfect correlation is below the weighted average of vols', () => {
    const vol = portfolioVolatility(weights, vols, corr);
    const weightedAvg = 0.6 * 0.16 + 0.4 * 0.05;
    expect(vol).toBeLessThan(weightedAvg);
    // Hand-computed: sqrt(0.36*0.0256 + 0.16*0.0025 + 2*0.6*0.4*0.1*0.16*0.05) = sqrt(0.0099956)
    expect(vol).toBeCloseTo(Math.sqrt(0.36 * 0.0256 + 0.16 * 0.0025 + 2 * 0.6 * 0.4 * 0.1 * 0.16 * 0.05), 10);
  });
  it('perfect correlation gives exactly the weighted average of vols', () => {
    const vol = portfolioVolatility(weights, vols, [
      [1, 1],
      [1, 1],
    ]);
    expect(vol).toBeCloseTo(0.6 * 0.16 + 0.4 * 0.05, 10);
  });
  it('weights validation', () => {
    expect(weightsSumToOne([0.5, 0.5])).toBe(true);
    expect(weightsSumToOne([0.5, 0.4])).toBe(false);
  });
});
