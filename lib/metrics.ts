// Personal progress measures (SPEC_V2 §42, METRICS.md). Pure functions over
// attempt and lesson-state data; the dashboard calls them client-side.
import type { Attempt, LessonState, MasteryRecord } from './types';

const DAY = 24 * 60 * 60 * 1000;

function accuracyOf(a: Attempt): number | null {
  if (a.correct !== undefined) return a.correct ? 1 : 0;
  if (a.selfScore !== undefined) return a.selfScore / 5;
  return null;
}

function percentCorrect(attempts: Attempt[]): number | null {
  const scored = attempts.map(accuracyOf).filter((x): x is number => x !== null);
  if (!scored.length) return null;
  return (100 * scored.reduce((a, b) => a + b, 0)) / scored.length;
}

/** §42.3 - % correct on items whose concept was first seen 30+ days before the attempt. */
export function delayedRetention(attempts: Attempt[], now = Date.now()): number | null {
  void now;
  const firstSeen = new Map<string, number>();
  for (const a of [...attempts].sort((x, y) => x.at - y.at)) {
    if (!firstSeen.has(a.conceptId)) firstSeen.set(a.conceptId, a.at);
  }
  const delayed = attempts.filter((a) => a.at - (firstSeen.get(a.conceptId) ?? a.at) >= 30 * DAY);
  return percentCorrect(delayed);
}

/** §42.5 - % correct on quantitative items. */
/** §42 measure 4: percent correct on transfer-pool attempts. */
export function transferAccuracy(attempts: Attempt[]): number | null {
  return percentCorrect(attempts.filter((a) => a.stage === 'transfer'));
}

export function calculationAccuracy(attempts: Attempt[]): number | null {
  return percentCorrect(attempts.filter((a) => a.kind === 'calculation'));
}

/** §42.6 - mean(confidence - accuracy) in percentage points; positive = overconfident. */
export function calibrationGap(attempts: Attempt[]): number | null {
  const confident = attempts.filter((a) => a.confidence !== undefined && accuracyOf(a) !== null);
  if (!confident.length) return null;
  return (
    confident.reduce((s, a) => s + (a.confidence! - 100 * (accuracyOf(a) as number)), 0) /
    confident.length
  );
}

/** Share of scored attempts that were self-scored (flagged wherever shown). */
export function selfReportedShare(attempts: Attempt[]): number | null {
  const scored = attempts.filter((a) => accuracyOf(a) !== null);
  if (!scored.length) return null;
  return (100 * scored.filter((a) => a.selfReported).length) / scored.length;
}

/** §42 usability number - % of started lessons with no retrieval after 48h. */
export function lessonAbandonment(states: LessonState[], now = Date.now()): number | null {
  const started = states.filter((s) => s.startedAt);
  if (!started.length) return null;
  const abandoned = started.filter((s) => !s.retrievalAt && now - (s.startedAt as number) > 2 * DAY);
  return (100 * abandoned.length) / started.length;
}

export interface CompetencyComponent {
  key: string;
  label: string;
  weight: number;
  value: number | null;
  selfReportedShare?: number | null;
}

/**
 * §42 composite Finance Competency Score. Components with no evidence
 * renormalise the weights; the result reports which components are live.
 */
export function competencyScore(
  mastery: MasteryRecord[],
  attempts: Attempt[],
): { score: number | null; components: CompetencyComponent[] } {
  const avgMastery = mastery.length
    ? mastery.reduce((s, m) => s + m.score, 0) / mastery.length
    : null;
  const calib = calibrationGap(attempts);
  const components: CompetencyComponent[] = [
    { key: 'knowledge', label: 'Foundational knowledge (avg mastery)', weight: 0.2, value: avgMastery },
    { key: 'retention', label: 'Delayed retention (30d+)', weight: 0.2, value: delayedRetention(attempts) },
    { key: 'transfer', label: 'Transfer', weight: 0.2, value: transferAccuracy(attempts) },
    { key: 'quant', label: 'Calculation accuracy', weight: 0.15, value: calculationAccuracy(attempts) },
    { key: 'decision', label: 'Decision quality', weight: 0.15, value: null },
    { key: 'calibration', label: 'Confidence calibration', weight: 0.1, value: calib === null ? null : Math.max(0, 100 - Math.abs(calib)) },
  ];
  let weighted = 0;
  let totalWeight = 0;
  for (const c of components) {
    if (c.value !== null) {
      weighted += c.weight * c.value;
      totalWeight += c.weight;
    }
  }
  return {
    score: totalWeight > 0 ? Math.round(weighted / totalWeight) : null,
    components,
  };
}

/**
 * Interleaving (SPEC_V2 §29): order due concepts round-robin across
 * curriculum levels so consecutive items come from different levels.
 */
export function interleaveByLevel<T>(items: T[], levelOf: (item: T) => number): T[] {
  const byLevel = new Map<number, T[]>();
  for (const item of items) {
    const lvl = levelOf(item);
    (byLevel.get(lvl) ?? byLevel.set(lvl, []).get(lvl)!).push(item);
  }
  const queues = [...byLevel.entries()].sort((a, b) => a[0] - b[0]).map(([, q]) => q);
  const out: T[] = [];
  let added = true;
  while (added) {
    added = false;
    for (const q of queues) {
      const next = q.shift();
      if (next !== undefined) {
        out.push(next);
        added = true;
      }
    }
  }
  return out;
}
