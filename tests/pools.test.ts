// Question pool integrity (SPEC_V2 §22, §41): transfer items must resolve
// to real concepts; both pools must be answerable and arithmetically sound.
import { describe, expect, it } from 'vitest';
import { loadConcepts } from '@/lib/content';
import transfer from '@/data/questions/transfer.json';
import exam from '@/data/questions/final-exam.json';

interface PoolItem {
  id: string;
  type: 'multipleChoice' | 'numeric';
  prompt: string;
  options?: string[];
  answer: string | number;
  tolerance?: number;
}

function checkPool(items: PoolItem[]) {
  const ids = new Set<string>();
  for (const item of items) {
    expect(ids.has(item.id), `duplicate id ${item.id}`).toBe(false);
    ids.add(item.id);
    expect(item.prompt.length).toBeGreaterThan(10);
    if (item.type === 'multipleChoice') {
      expect(item.options!.length, item.id).toBeGreaterThanOrEqual(2);
      expect(item.options, item.id).toContain(item.answer);
    } else {
      expect(typeof item.answer, item.id).toBe('number');
      expect(item.tolerance, item.id).toBeGreaterThanOrEqual(0);
    }
  }
}

describe('question pools', () => {
  it('transfer items are well-formed and reference real concepts', () => {
    const conceptIds = new Set(loadConcepts().map((c) => c.id));
    checkPool(transfer.items as PoolItem[]);
    for (const item of transfer.items) {
      expect(conceptIds.has(item.conceptId), `${item.id}: ${item.conceptId}`).toBe(true);
      expect(item.rationale.length, item.id).toBeGreaterThan(10);
    }
  });

  it('final exam items are well-formed with a sensible pass threshold', () => {
    checkPool(exam.items as PoolItem[]);
    expect(exam.items.length).toBeGreaterThanOrEqual(30);
    expect(exam.passThreshold).toBeGreaterThanOrEqual(50);
    expect(exam.passThreshold).toBeLessThanOrEqual(100);
    const domains = new Set(exam.items.map((i) => i.domain));
    expect(domains.size).toBeGreaterThanOrEqual(8);
  });

  it('numeric answers are arithmetically consistent', () => {
    const t = new Map((transfer.items as PoolItem[]).map((i) => [i.id, i]));
    expect(t.get('t1')!.answer).toBeCloseTo(1000 * 1.04 * 1.04, 1);
    expect(t.get('t6')!.answer).toBeCloseTo(30 / 1.0 - 30 / 1.2, 2);
    expect(t.get('t8')!.answer).toBeCloseTo(600000 / 12000000 / (600000 / 60000000), 6);
    expect(t.get('t10')!.answer).toBeCloseTo(12 * 0.5, 6);
    expect(t.get('t13')!.answer).toBeCloseTo(10000 * 1.3 * 0.8, 2);
    expect(t.get('t15')!.answer).toBeCloseTo((7 - 1) / 12, 6);
    expect(t.get('t17')!.answer).toBeCloseTo(0.7 * (49000 + 31000) - 49000, 2);
    expect(t.get('t23')!.answer).toBeCloseTo(5000 * (1 - 0.314), 2);

    const e = new Map((exam.items as PoolItem[]).map((i) => [i.id, i]));
    expect(e.get('e1')!.answer).toBeCloseTo(((3200 - 2720) / 3200) * 100, 2);
    expect(e.get('e2')!.answer).toBeCloseTo(2000 * 1.06 ** 3, 2);
    expect(e.get('e6')!.answer).toBeCloseTo(500 / 1.0 - 500 / 1.25, 2);
    expect(e.get('e8')!.answer).toBeCloseTo(100 * (50.1 - 49.9), 2);
    expect(e.get('e9')!.answer).toBeCloseTo(5000000 / 2000000, 6);
    expect(e.get('e11')!.answer).toBeCloseTo((50 / 1250) * 100, 6);
    expect(e.get('e12')!.answer).toBeCloseTo(-8 * 0.75, 6);
    expect(e.get('e16')!.answer).toBeCloseTo(40000 * (0.016 - 0.002), 2);
    expect(e.get('e17')!.answer).toBeCloseTo(10000 * 1.25 * 0.8, 2);
    expect(e.get('e19')!.answer).toBeCloseTo((8 - 2) / 15, 6);
    expect(e.get('e22')!.answer).toBeCloseTo(66000 - 0.6 * (66000 + 34000), 2);
    expect(e.get('e26')!.answer).toBeCloseTo((1 / 0.8 - 1) * 100, 1);
    expect(e.get('e27')!.answer).toBe(1800 * 5);
    expect(e.get('e28')!.answer).toBeCloseTo(4000 * 0.314, 2);
  });
});
