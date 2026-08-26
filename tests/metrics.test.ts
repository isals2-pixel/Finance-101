import { describe, expect, it } from 'vitest';
import {
  calculationAccuracy,
  calibrationGap,
  competencyScore,
  delayedRetention,
  interleaveByLevel,
  lessonAbandonment,
} from '@/lib/metrics';
import type { Attempt, LessonState } from '@/lib/types';

const DAY = 24 * 60 * 60 * 1000;
const t0 = Date.parse('2026-06-01T10:00:00Z');

function attempt(partial: Partial<Attempt>): Attempt {
  return {
    lessonSlug: 'x',
    questionId: 'q',
    conceptId: 'money',
    stage: 'retrieval',
    kind: 'freeRecall',
    answer: '',
    selfReported: false,
    at: t0,
    ...partial,
  };
}

describe('delayedRetention', () => {
  it('null with no delayed attempts', () => {
    expect(delayedRetention([attempt({ correct: true })])).toBeNull();
  });
  it('counts only attempts 30+ days after first exposure of the concept', () => {
    const attempts = [
      attempt({ at: t0, correct: true }),
      attempt({ at: t0 + 31 * DAY, correct: true }),
      attempt({ at: t0 + 40 * DAY, correct: false }),
      attempt({ conceptId: 'inflation', at: t0 + 35 * DAY, correct: true }), // first exposure: not delayed
    ];
    expect(delayedRetention(attempts)).toBeCloseTo(50, 6);
  });
});

describe('calculationAccuracy and calibrationGap', () => {
  it('filters to calculation items', () => {
    const attempts = [
      attempt({ kind: 'calculation', correct: true }),
      attempt({ kind: 'calculation', correct: false }),
      attempt({ kind: 'freeRecall', selfScore: 5, selfReported: true }),
    ];
    expect(calculationAccuracy(attempts)).toBeCloseTo(50, 6);
  });
  it('calibration: confident and wrong is +90 points overconfident', () => {
    expect(calibrationGap([attempt({ confidence: 90, correct: false })])).toBeCloseTo(90, 6);
    expect(calibrationGap([attempt({ confidence: 90, correct: true })])).toBeCloseTo(-10, 6);
  });
});

describe('lessonAbandonment', () => {
  it('abandoned = started, no retrieval, older than 48h', () => {
    const now = t0 + 10 * DAY;
    const states: LessonState[] = [
      { slug: 'a', startedAt: t0, retrievalAt: t0 + 1000 },
      { slug: 'b', startedAt: t0 },
      { slug: 'c', startedAt: now - DAY }, // too recent to count
    ];
    expect(lessonAbandonment(states, now)).toBeCloseTo(100 / 3, 4);
  });
});

describe('competencyScore', () => {
  it('renormalises over available components and reports the rest as null', () => {
    const { score, components } = competencyScore(
      [
        { conceptId: 'money', score: 80, components: {}, selfReportedShare: 0, updatedAt: t0 },
      ],
      [attempt({ kind: 'calculation', correct: true })],
    );
    // knowledge 80 (w .2) + quant 100 (w .15) -> (16+15)/0.35 = 88.57 -> 89
    expect(score).toBe(89);
    expect(components.find((c) => c.key === 'transfer')!.value).toBeNull();
  });
  it('null with no evidence at all', () => {
    expect(competencyScore([], []).score).toBeNull();
  });
});

describe('interleaveByLevel', () => {
  it('round-robins across levels', () => {
    const items = [
      { id: 'a1', level: 1 },
      { id: 'a2', level: 1 },
      { id: 'b1', level: 5 },
      { id: 'c1', level: 8 },
      { id: 'a3', level: 1 },
    ];
    const out = interleaveByLevel(items, (i) => i.level).map((i) => i.id);
    expect(out).toEqual(['a1', 'b1', 'c1', 'a2', 'a3']);
  });
  it('handles a single level and empty input', () => {
    expect(interleaveByLevel([], () => 1)).toEqual([]);
    expect(interleaveByLevel([{ id: 'x', level: 2 }], (i) => i.level).length).toBe(1);
  });
});
