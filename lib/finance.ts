// Core financial calculations (SPEC_V2 §83): pure, reference-tested.
// Rates are fractions (0.05 = 5%). Values in EUR.

/** Future value of a lump sum under annual compounding. */
export function futureValue(principal: number, annualRate: number, years: number): number {
  return principal * Math.pow(1 + annualRate, years);
}

/**
 * Future value with a lump sum plus a monthly contribution, compounded
 * monthly at the equivalent monthly rate (annuity-due excluded: contributions
 * at period end).
 */
export function futureValueWithContributions(
  principal: number,
  monthlyContribution: number,
  annualRate: number,
  years: number,
): number {
  const months = Math.round(years * 12);
  const monthlyRate = Math.pow(1 + annualRate, 1 / 12) - 1;
  const lumpSum = principal * Math.pow(1 + monthlyRate, months);
  if (monthlyRate === 0) return lumpSum + monthlyContribution * months;
  const contributions = monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  return lumpSum + contributions;
}

/** Purchasing power of a nominal amount after `years` of inflation. */
export function realValue(nominalAmount: number, inflationRate: number, years: number): number {
  return nominalAmount / Math.pow(1 + inflationRate, years);
}

/** Exact Fisher real return. */
export function realReturn(nominalRate: number, inflationRate: number): number {
  return (1 + nominalRate) / (1 + inflationRate) - 1;
}

/** Final values with and without an annual fee, and the wealth lost to it. */
export function feeImpact(
  principal: number,
  grossAnnualRate: number,
  annualFee: number,
  years: number,
): { gross: number; net: number; lost: number } {
  const gross = futureValue(principal, grossAnnualRate, years);
  const net = futureValue(principal, grossAnnualRate - annualFee, years);
  return { gross, net, lost: gross - net };
}

/** Portfolio expected return: weighted average of asset expected returns. */
export function portfolioExpectedReturn(weights: number[], returns: number[]): number {
  return weights.reduce((sum, w, i) => sum + w * returns[i], 0);
}

/**
 * Portfolio volatility from asset volatilities and a correlation matrix:
 * sqrt(w' * Cov * w) with Cov[i][j] = corr[i][j] * vol[i] * vol[j].
 */
export function portfolioVolatility(
  weights: number[],
  vols: number[],
  corr: number[][],
): number {
  let variance = 0;
  for (let i = 0; i < weights.length; i++) {
    for (let j = 0; j < weights.length; j++) {
      variance += weights[i] * weights[j] * corr[i][j] * vols[i] * vols[j];
    }
  }
  return Math.sqrt(Math.max(0, variance));
}

export function weightsSumToOne(weights: number[], tolerance = 1e-6): boolean {
  return Math.abs(weights.reduce((a, b) => a + b, 0) - 1) < tolerance;
}
