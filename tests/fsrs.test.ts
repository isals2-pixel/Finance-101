import { describe, expect, it } from 'vitest';
import { combineGrades, gradeForOutcome, isDue, Rating, reviewConcept } from '@/lib/fsrs';

describe('grade mapping (LEARNING_SCIENCE.md)', () => {
  it('maps auto outcomes', () => {
    expect(gradeForOutcome({ kind: 'auto', correct: false })).toBe(Rating.Again);
    expect(gradeForOutcome({ kind: 'auto', correct: true })).toBe(Rating.Good);
    expect(gradeForOutcome({ kind: 'auto', correct: true, confidence: 90 })).toBe(Rating.Easy);
    expect(gradeForOutcome({ kind: 'auto', correct: true, confidence: 70 })).toBe(Rating.Good);
    expect(gradeForOutcome({ kind: 'auto', correct: false, confidence: 90 })).toBe(Rating.Again);
  });

  it('maps self-scores 0-5', () => {
    expect(gradeForOutcome({ kind: 'self', score: 0 })).toBe(Rating.Again);
    expect(gradeForOutcome({ kind: 'self', score: 1 })).toBe(Rating.Again);
    expect(gradeForOutcome({ kind: 'self', score: 2 })).toBe(Rating.Hard);
    expect(gradeForOutcome({ kind: 'self', score: 3 })).toBe(Rating.Good);
    expect(gradeForOutcome({ kind: 'self', score: 4 })).toBe(Rating.Good);
    expect(gradeForOutcome({ kind: 'self', score: 5 })).toBe(Rating.Easy);
  });

  it('combines multi-item concepts conservatively', () => {
    expect(combineGrades([Rating.Easy, Rating.Again, Rating.Good])).toBe(Rating.Again);
    expect(combineGrades([Rating.Good, Rating.Easy])).toBe(Rating.Good);
  });
});

describe('scheduling behavior', () => {
  const now = new Date('2026-08-21T10:00:00Z');

  it('first successful review schedules a future due date', () => {
    const rec = reviewConcept('money', undefined, Rating.Good, now);
    expect(rec.conceptId).toBe('money');
    expect(rec.due).toBeGreaterThan(now.getTime());
    expect(rec.reps).toBe(1);
    expect(isDue(rec, now)).toBe(false);
  });

  it('successive Good reviews lengthen the interval (spaced practice)', () => {
    let rec = reviewConcept('money', undefined, Rating.Good, now);
    let reviewTime = new Date(rec.due);
    rec = reviewConcept('money', rec, Rating.Good, reviewTime);
    const interval1 = rec.due - reviewTime.getTime();
    reviewTime = new Date(rec.due);
    rec = reviewConcept('money', rec, Rating.Good, reviewTime);
    const interval2 = rec.due - reviewTime.getTime();
    expect(interval2).toBeGreaterThan(interval1);
  });

  it('a failure shortens the next interval and counts a lapse', () => {
    let rec = reviewConcept('money', undefined, Rating.Good, now);
    let t = new Date(rec.due);
    rec = reviewConcept('money', rec, Rating.Good, t);
    t = new Date(rec.due);
    rec = reviewConcept('money', rec, Rating.Good, t);
    const goodInterval = rec.due - t.getTime();

    t = new Date(rec.due);
    const failed = reviewConcept('money', rec, Rating.Again, t);
    const failInterval = failed.due - t.getTime();
    expect(failInterval).toBeLessThan(goodInterval);
    expect(failed.lapses).toBeGreaterThan(rec.lapses);
  });

  it('is deterministic (fuzz disabled)', () => {
    const a = reviewConcept('money', undefined, Rating.Good, now);
    const b = reviewConcept('money', undefined, Rating.Good, now);
    expect(a).toEqual(b);
  });
});
