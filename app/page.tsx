import { loadLessons } from '@/lib/content';
import { TodayCard } from '@/components/home/TodayCard';

export default function HomePage() {
  const lessons = loadLessons().map((l) => ({
    slug: l.slug,
    title: l.title,
    lesson: l.lesson,
    minutes: l.audio.durationSec ? Math.round(l.audio.durationSec / 60) : 10,
    concepts: l.concepts,
  }));
  return <TodayCard lessons={lessons} />;
}
