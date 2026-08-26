// The mechanical part of the SPEC_V2 §84 content checklist, run in CI.
import { describe, expect, it } from 'vitest';
import { bodyWordCount, loadConcepts, loadLessons, validateContent } from '@/lib/content';

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
