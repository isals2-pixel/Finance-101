// Per-concept mastery (0-100). Weights and formula documented in
// LEARNING_SCIENCE.md; keep the two in sync.
import type { Attempt, MasteryRecord } from './types';

export const MASTERY_WEIGHTS = {
  learning: 0.1,
  immediate: 0.25,
  delayed: 0.3,
  application: 0.2,
  transfer: 0.15,
} as const;

const RECENCY_DECAY = 0.7;
const IMMEDIATE_WINDOW_MS = 2 * 24 * 60 * 60 * 1000;
const DELAYED_GAP_MS = 7 * 24 * 60 * 60 * 1000;
const CALIBRATION_PENALTY_MAX = 10;

function accuracyOf(a: Attempt): number | null {
  if (a.correct !== undefined) return a.correct ? 1 : 0;
  if (a.selfScore !== undefined) return a.selfScore / 5;
  return null;
}

/** Recency-weighted mean accuracy, most recent attempt weighted highest. */
export function recencyWeightedAccuracy(attempts: Attempt[]): number | null {
  const scored = attempts
    .map((a) => ({ at: a.at, acc: accuracyOf(a) }))
    .filter((x): x is { at: number; acc: number } => x.acc !== null)
    .sort((a, b) => b.at - a.at);
  if (!scored.length) return null;
  let num = 0;
  let den = 0;
  scored.forEach((x, k) => {
    const w = Math.pow(RECENCY_DECAY, k);
    num += w * x.acc;
    den += w;
  });
  return num / den;
}

export interface MasteryInput {
  conceptId: string;
  attempts: Attempt[];
  /** Timestamp the concept was first taught (lesson retrieval completed). */
  firstLearnedAt?: number;
  /** True once the teaching lesson was completed through retrieval. */
  lessonCompleted: boolean;
}

export function computeMastery(input: MasteryInput, now: number): MasteryRecord {
  const { attempts } = input;
  const relevant = attempts.filter((a) => a.conceptId === input.conceptId);

  const retrievalLike = relevant.filter((a) => a.stage === 'retrieval' || a.stage === 'review');
  const first = input.firstLearnedAt ?? Math.min(...relevant.map((a) => a.at), now);

  const immediate = retrievalLike.filter((a) => a.at - first <= IMMEDIATE_WINDOW_MS);
  const delayed = retrievalLike.filter((a) => a.at - first > DELAYED_GAP_MS);
  const application = relevant.filter((a) => a.stage === 'exercise');
  // Transfer items arrive with the question pools (Phase 2+); tagged via kind
  // 'explanation' in review stage is not transfer. None exist in Phase 1.
  const transfer: Attempt[] = [];

  const components: Record<string, number | null> = {
    learning: input.lessonCompleted ? 1 : 0,
    immediate: recencyWeightedAccuracy(immediate),
    delayed: recencyWeightedAccuracy(delayed),
    application: recencyWeightedAccuracy(application),
    transfer: recencyWeightedAccuracy(transfer),
  };

  let weighted = 0;
  let totalWeight = 0;
  for (const [key, weight] of Object.entries(MASTERY_WEIGHTS)) {
    const value = components[key];
    if (value !== null) {
      weighted += weight * value;
      totalWeight += weight;
    }
  }
  const base = totalWeight > 0 ? weighted / totalWeight : 0;

  const confident = relevant.filter((a) => a.confidence !== undefined && accuracyOf(a) !== null);
  const calibrationGap = confident.length
    ? confident.reduce((s, a) => s + Math.abs(a.confidence! / 100 - (accuracyOf(a) as number)), 0) /
      confident.length
    : 0;

  const scoredAttempts = relevant.filter((a) => accuracyOf(a) !== null);
  const selfReportedShare = scoredAttempts.length
    ? scoredAttempts.filter((a) => a.selfReported).length / scoredAttempts.length
    : 0;

  const score = Math.round(
    Math.min(100, Math.max(0, 100 * base - CALIBRATION_PENALTY_MAX * calibrationGap)),
  );

  return { conceptId: input.conceptId, score, components, selfReportedShare, updatedAt: now };
}
