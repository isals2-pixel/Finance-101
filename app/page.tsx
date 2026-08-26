import { bodyWordCount, loadLessons } from '@/lib/content';
import { TodayCard } from '@/components/home/TodayCard';

export default function HomePage() {
  const lessons = loadLessons().map((l) => ({
    slug: l.slug,
    title: l.title,
    lesson: l.lesson,
    // Reading time at ~200 words per minute, plus the retrieval flow.
    minutes: Math.max(5, Math.round(bodyWordCount(l.body) / 200) + 3),
    concepts: l.concepts,
  }));
  return <TodayCard lessons={lessons} />;
}
