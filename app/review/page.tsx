import { loadLessons } from '@/lib/content';
import { ReviewSession } from '@/components/learning/ReviewSession';
import type { RetrievalQuestion } from '@/lib/types';

export default function ReviewPage() {
  const lessons = loadLessons();
  // Index every lesson retrieval question by concept so due concepts can be
  // quizzed. Dedicated review pools arrive in Phase 2.
  const byConcept: Record<string, { lessonSlug: string; question: RetrievalQuestion }[]> = {};
  for (const l of lessons) {
    for (const q of l.retrieval) {
      (byConcept[q.conceptId] ??= []).push({ lessonSlug: l.slug, question: q });
    }
  }
  return <ReviewSession questionsByConcept={byConcept} />;
}
