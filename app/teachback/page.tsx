import { loadConcepts, loadLessons } from '@/lib/content';
import { TeachBack, type TeachableConcept } from '@/components/learning/TeachBack';

export default function TeachBackPage() {
  const conceptTitles = new Map(loadConcepts().map((c) => [c.id, c.title]));
  const teachable: TeachableConcept[] = [];
  for (const l of loadLessons()) {
    for (const id of l.concepts) {
      teachable.push({
        conceptId: id,
        title: conceptTitles.get(id) ?? id,
        lessonSlug: l.slug,
        lessonNumber: l.lesson,
        modelSummary: l.oneSentence.trim(),
      });
    }
  }
  return <TeachBack teachable={teachable} />;
}
