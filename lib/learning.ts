// Applies the results of a lesson retrieval or review session to the
// schedule (FSRS) and mastery stores. Client-side only.
import { attemptsForConcept, getLessonState, getSchedule, putMastery, putSchedule, recordAttempt } from './db';
import { combineGrades, gradeForOutcome, reviewConcept, type ItemOutcome } from './fsrs';
import { computeMastery } from './mastery';
import type { Attempt } from './types';

export interface SessionItemResult {
  attempt: Attempt;
  outcome: ItemOutcome;
}

/**
 * Record a batch of answered items (one lesson retrieval or one review),
 * update FSRS per touched concept, and recompute mastery.
 */
export async function applySessionResults(results: SessionItemResult[], now = new Date()): Promise<void> {
  for (const r of results) await recordAttempt(r.attempt);

  const byConcept = new Map<string, ItemOutcome[]>();
  for (const r of results) {
    const list = byConcept.get(r.attempt.conceptId) ?? [];
    list.push(r.outcome);
    byConcept.set(r.attempt.conceptId, list);
  }

  for (const [conceptId, outcomes] of byConcept) {
    const grade = combineGrades(outcomes.map(gradeForOutcome));
    const previous = await getSchedule(conceptId);
    await putSchedule(reviewConcept(conceptId, previous, grade, now));

    const attempts = await attemptsForConcept(conceptId);
    const lessonSlug = results.find((r) => r.attempt.conceptId === conceptId)?.attempt.lessonSlug;
    const lessonState = lessonSlug ? await getLessonState(lessonSlug) : { slug: '' };
    const firstLearnedAt = Math.min(...attempts.map((a) => a.at));
    await putMastery(
      computeMastery(
        {
          conceptId,
          attempts,
          firstLearnedAt,
          lessonCompleted: Boolean(lessonState.retrievalAt) || Boolean(lessonState.completedAt),
        },
        now.getTime(),
      ),
    );
  }
}
