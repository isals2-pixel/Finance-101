// Decision-lab data integrity (SPEC_V2 §32, §33) and the §42 decision /
// transfer metric wiring.
import { describe, expect, it } from 'vitest';
import sim from '@/data/labs/behaviour-sim.json';
import lab from '@/data/labs/decision-scenarios.json';
import { loadConcepts } from '@/lib/content';
import { competencyScore, decisionQuality, transferAccuracy } from '@/lib/metrics';
import type { Attempt } from '@/lib/types';

function attempt(stage: Attempt['stage'], correct: boolean, at = Date.now()): Attempt {
  return {
    lessonSlug: 'x',
    questionId: 'q',
    conceptId: 'money',
    stage,
    kind: 'classification',
    answer: 'a',
    correct,
    selfReported: false,
    at,
  };
}

describe('behaviour simulator data', () => {
  it('every step has exactly one plan-consistent option and real concepts', () => {
    const conceptIds = new Set(loadConcepts().map((c) => c.id));
    expect(sim.steps.length).toBeGreaterThanOrEqual(6);
    for (const step of sim.steps) {
      expect(conceptIds.has(step.conceptId), `${step.id}: ${step.conceptId}`).toBe(true);
      const correct = step.options.filter((o) => o.correct);
      expect(correct.length, step.id).toBe(1);
      expect(correct[0].planDelta, `${step.id}: plan option costs nothing`).toBe(0);
      expect(correct[0].bias, `${step.id}: plan option has no bias`).toBeNull();
      for (const o of step.options.filter((x) => !x.correct)) {
        expect(o.planDelta, `${step.id}/${o.id}: deviation costs`).toBeLessThan(0);
        expect(o.bias, `${step.id}/${o.id}: deviation names its bias`).toBeTruthy();
      }
      expect(step.debrief.length).toBeGreaterThan(20);
    }
  });
});

describe('decision lab data', () => {
  it('every scenario has exactly one checklist-consistent option and a debrief', () => {
    expect(lab.scenarios.length).toBeGreaterThanOrEqual(6);
    for (const s of lab.scenarios) {
      expect(s.options.filter((o) => o.correct).length, s.id).toBe(1);
      expect(s.options.length, s.id).toBeGreaterThanOrEqual(2);
      expect(s.debrief.length, s.id).toBeGreaterThan(20);
    }
    expect(lab.checklist.length).toBe(5);
  });
});

describe('§42 decision and transfer components', () => {
  it('decisionQuality and transferAccuracy read their stages', () => {
    const attempts = [
      attempt('decision', true),
      attempt('decision', true),
      attempt('decision', false),
      attempt('transfer', true),
      attempt('transfer', false),
    ];
    expect(decisionQuality(attempts)).toBeCloseTo((2 / 3) * 100, 6);
    expect(transferAccuracy(attempts)).toBeCloseTo(50, 6);
    expect(decisionQuality([])).toBeNull();
  });

  it('competencyScore includes both components when evidence exists', () => {
    const attempts = [attempt('decision', true), attempt('transfer', true)];
    const { components } = competencyScore([], attempts);
    expect(components.find((c) => c.key === 'decision')!.value).toBe(100);
    expect(components.find((c) => c.key === 'transfer')!.value).toBe(100);
  });
});
