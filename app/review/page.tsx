import { loadConcepts, loadLessons } from '@/lib/content';
import { ReviewSession } from '@/components/learning/ReviewSession';
import type { RetrievalQuestion } from '@/lib/types';

export default function ReviewPage() {
  const lessons = loadLessons();
  // Index every lesson retrieval question by concept so due concepts can be
  // quizzed. Dedicated review pools arrive with the transfer bank.
  const byConcept: Record<string, { lessonSlug: string; question: RetrievalQuestion }[]> = {};
  for (const l of lessons) {
    for (const q of l.retrieval) {
      (byConcept[q.conceptId] ??= []).push({ lessonSlug: l.slug, question: q });
    }
  }
  const conceptLevels: Record<string, number> = {};
  for (const c of loadConcepts()) conceptLevels[c.id] = c.level;
  return <ReviewSession questionsByConcept={byConcept} conceptLevels={conceptLevels} />;
}
