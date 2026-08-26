// The mechanical part of the SPEC_V2 §84 content checklist, run in CI.
import { describe, expect, it } from 'vitest';
import { bodyWordCount, loadConcepts, loadLessons, validateContent } from '@/lib/content';
import { getVisual } from '@/components/visuals/registry';

describe('content validation', () => {
  const lessons = loadLessons();
  const concepts = loadConcepts();

  it('all lessons and the concept graph validate', () => {
    expect(() => validateContent(lessons, concepts)).not.toThrow();
  });

  it('lesson 1 exists with the full contract', () => {
    const l1 = lessons.find((l) => l.lesson === 1);
    expect(l1).toBeDefined();
    expect(l1!.slug).toBe('what-is-money');
    expect(l1!.retrieval.length).toBeGreaterThanOrEqual(3);
    expect(l1!.retrieval.some((q) => q.type === 'classification')).toBe(true);
    expect(l1!.retrieval.some((q) => q.type === 'freeRecall')).toBe(true);
    expect(l1!.retrieval.some((q) => q.askConfidence)).toBe(true);
    expect(l1!.sources.length).toBeGreaterThanOrEqual(1);
    expect(l1!.prediction.prompt.length).toBeGreaterThan(10);
    const words = bodyWordCount(l1!.body);
    expect(words).toBeGreaterThanOrEqual(500);
    expect(words).toBeLessThanOrEqual(1100);
  });

  it('the exercise answer is arithmetically consistent (12 goods -> 66 pairs)', () => {
    const l1 = lessons.find((l) => l.lesson === 1)!;
    expect(l1.exercise.answer).toBe((12 * 11) / 2);
  });

  it('every lesson body is inside the 500-1100 word CI band', () => {
    for (const l of lessons) {
      const words = bodyWordCount(l.body);
      expect(words, `${l.slug}: ${words} words`).toBeGreaterThanOrEqual(500);
      expect(words, `${l.slug}: ${words} words`).toBeLessThanOrEqual(1100);
    }
  });

  it('every lesson visual id resolves to a built component', () => {
    for (const l of lessons) {
      expect(getVisual(l.visual.id), `${l.slug}: visual ${l.visual.id}`).toBeDefined();
    }
  });

  it('batch 1 exercise answers are arithmetically consistent', () => {
    const bySlug = new Map(lessons.map((l) => [l.slug, l]));
    expect(bySlug.get('income-expenses-cash-flow')!.exercise.answer).toBe(((2600 - 2210) / 2600) * 100);
    expect(bySlug.get('assets-and-liabilities')!.exercise.answer).toBe(4500 + 1200);
    expect(bySlug.get('net-worth')!.exercise.answer).toBe(8000 + 220000 + 15000 - (168000 + 2500));
    expect(bySlug.get('interest')!.exercise.answer).toBe(2500 * 0.04);
    expect(bySlug.get('compound-interest')!.exercise.answer).toBe(1000 * 1.1 * 1.1);
  });

  it('level 7-8 exercise answers are arithmetically consistent', () => {
    const bySlug = new Map(lessons.map((l) => [l.slug, l]));
    expect(bySlug.get('yield-and-bond-pricing')!.exercise.answer).toBe((40 / 800) * 100);
    expect(bySlug.get('duration')!.exercise.answer).toBeCloseTo(10000 * 0.07, 6);
    expect(bySlug.get('credit-risk-and-ratings')!.exercise.answer).toBeCloseTo(5.1 - 3.0, 10);
    expect(bySlug.get('passive-active-and-replication')!.exercise.answer).toBeCloseTo(6.0 - 0.2, 10);
    expect(bySlug.get('tracking-difference')!.exercise.answer).toBeCloseTo(6.0 - 5.72, 3);
    expect(bySlug.get('fund-structure')!.exercise.answer).toBe(10000 * 0.02);
  });

  it('level 5-6 exercise answers are arithmetically consistent', () => {
    const bySlug = new Map(lessons.map((l) => [l.slug, l]));
    expect(bySlug.get('exchanges-and-brokers')!.exercise.answer).toBe(5000 * 0.001);
    expect(bySlug.get('liquidity-and-the-spread')!.exercise.answer).toBeCloseTo(200 * (100.05 - 99.95), 6);
    expect(bySlug.get('market-and-limit-orders')!.exercise.answer).toBe(4800 / 48);
    expect(bySlug.get('earnings')!.exercise.answer).toBe(8000000 / 4000000);
    expect(bySlug.get('growth-vs-value')!.exercise.answer).toBe((3 / 60) * 100);
  });

  it('level 2 economics exercise answers are arithmetically consistent', () => {
    const bySlug = new Map(lessons.map((l) => [l.slug, l]));
    expect(bySlug.get('supply-and-demand')!.exercise.answer).toBe(90 / 3);
    expect(bySlug.get('gdp')!.exercise.answer).toBe(1250 + 480 + 570 + (620 - 660));
    expect(bySlug.get('monetary-policy')!.exercise.answer).toBe(2 + 1 + 1.5);
    expect(bySlug.get('fiscal-policy')!.exercise.answer).toBe(1310 - 1180);
    expect(bySlug.get('business-cycles')!.exercise.answer).toBe(2400 * 0.975);
    expect(bySlug.get('exchange-rates')!.exercise.answer).toBeCloseTo(220 / 1.1, 10);
  });

  it('level 9 exercise answers are arithmetically consistent', () => {
    const bySlug = new Map(lessons.map((l) => [l.slug, l]));
    expect(bySlug.get('measuring-risk-and-return')!.exercise.answer).toBeCloseTo(10000 * 1.2 * 0.9, 6);
    expect(bySlug.get('correlation')!.exercise.answer).toBeCloseTo(
      Math.sqrt(0.5 ** 2 * 16 ** 2 + 0.5 ** 2 * 16 ** 2),
      1,
    );
    expect(bySlug.get('risk-adjusted-return')!.exercise.answer).toBeCloseTo((6 - 2) / 16, 6);
  });

  it('level 10 exercise answers are arithmetically consistent', () => {
    const bySlug = new Map(lessons.map((l) => [l.slug, l]));
    expect(bySlug.get('asset-allocation')!.exercise.answer).toBeCloseTo(0.6 * 6 + 0.4 * 3, 6);
    expect(bySlug.get('rebalancing')!.exercise.answer).toBe(60000 * 1.5 - 0.6 * (60000 * 1.5 + 40000));
    expect(bySlug.get('portfolio-construction')!.exercise.answer).toBeCloseTo(5.4 - 2 * 13, 6);
  });

  it('level 11 exercise answers are arithmetically consistent', () => {
    const bySlug = new Map(lessons.map((l) => [l.slug, l]));
    expect(bySlug.get('loss-aversion')!.exercise.answer).toBeCloseTo((40000 / 30000 - 1) * 100, 1);
    expect(bySlug.get('overconfidence')!.exercise.answer).toBeCloseTo(50000 * (0.015 - 0.002), 6);
    expect(bySlug.get('herding')!.exercise.answer).toBeCloseTo(15000 * 0.8 * 1.1, 6);
  });

  it('batch 2 exercise answers are arithmetically consistent', () => {
    const bySlug = new Map(lessons.map((l) => [l.slug, l]));
    expect(bySlug.get('inflation')!.exercise.answer).toBeCloseTo(100 * 1.02 * 1.02, 2);
    expect(bySlug.get('nominal-vs-real-returns')!.exercise.answer).toBe(5 - 2);
    expect(bySlug.get('opportunity-cost')!.exercise.answer).toBe(5000 * 0.04);
    expect(bySlug.get('economics-finance-accounting')!.exercise.answer).toBe(500000 - (450000 + 40000 * 0.2));
    expect(bySlug.get('what-is-a-financial-market')!.exercise.answer).toBe(2000000 * 8);
  });

  it('detects a graph cycle', () => {
    const cyclic = [
      { id: 'a', title: 'A', level: 1, tier: 1 as const, prerequisites: ['b'], related: [], misconceptions: [] },
      { id: 'b', title: 'B', level: 1, tier: 1 as const, prerequisites: ['a'], related: [], misconceptions: [] },
    ];
    expect(() => validateContent([], cyclic)).toThrow(/cycle/);
  });

  it('enforces the tier rule (no tier-1 concept depends on tier-2)', () => {
    const bad = [
      { id: 'adv', title: 'Adv', level: 13, tier: 2 as const, prerequisites: [], related: [], misconceptions: [] },
      { id: 'core', title: 'Core', level: 1, tier: 1 as const, prerequisites: ['adv'], related: [], misconceptions: [] },
    ];
    expect(() => validateContent([], bad)).toThrow(/tier rule/);
  });
});
