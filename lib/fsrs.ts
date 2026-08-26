// FSRS scheduling wrapper. Grade mapping documented in LEARNING_SCIENCE.md;
// keep the two in sync.
import { createEmptyCard, fsrs, Rating, State, type Card, type Grade } from 'ts-fsrs';
import type { ScheduleRecord } from './types';

// Deterministic schedules (no fuzz) so behavior is testable and predictable.
const scheduler = fsrs({ enable_fuzz: false });

export type ItemOutcome =
  | { kind: 'auto'; correct: boolean; confidence?: number }
  | { kind: 'self'; score: number };

export function gradeForOutcome(o: ItemOutcome): Grade {
  if (o.kind === 'auto') {
    if (!o.correct) return Rating.Again;
    return o.confidence !== undefined && o.confidence > 80 ? Rating.Easy : Rating.Good;
  }
  if (o.score <= 1) return Rating.Again;
  if (o.score === 2) return Rating.Hard;
  if (o.score <= 4) return Rating.Good;
  return Rating.Easy;
}

/** A concept reviewed through several items gets the most conservative grade. */
export function combineGrades(grades: Grade[]): Grade {
  return grades.reduce((min, g) => (g < min ? g : min));
}

function toCard(rec: ScheduleRecord | undefined, now: Date): Card {
  if (!rec) return createEmptyCard(now);
  return {
    due: new Date(rec.due),
    stability: rec.stability,
    difficulty: rec.difficulty,
    elapsed_days: rec.elapsed_days,
    scheduled_days: rec.scheduled_days,
    learning_steps: rec.learning_steps,
    reps: rec.reps,
    lapses: rec.lapses,
    state: rec.state as State,
    last_review: rec.last_review !== undefined ? new Date(rec.last_review) : undefined,
  };
}

function toRecord(conceptId: string, card: Card): ScheduleRecord {
  return {
    conceptId,
    due: card.due.getTime(),
    stability: card.stability,
    difficulty: card.difficulty,
    elapsed_days: card.elapsed_days,
    scheduled_days: card.scheduled_days,
    learning_steps: card.learning_steps,
    reps: card.reps,
    lapses: card.lapses,
    state: card.state,
    last_review: card.last_review?.getTime(),
  };
}

/** Apply one review of a concept and return the new schedule state. */
export function reviewConcept(
  conceptId: string,
  previous: ScheduleRecord | undefined,
  grade: Grade,
  now: Date,
): ScheduleRecord {
  const { card } = scheduler.next(toCard(previous, now), now, grade);
  return toRecord(conceptId, card);
}

export function isDue(rec: ScheduleRecord, now: Date): boolean {
  return rec.due <= now.getTime();
}

export { Rating };
export type { Grade };
