import { loadLessons } from '@/lib/content';
import { LessonFlow } from '@/components/learning/LessonFlow';

export function generateStaticParams() {
  return loadLessons().map((l) => ({ lesson: l.slug }));
}

export default async function LessonPage({ params }: { params: Promise<{ lesson: string }> }) {
  const { lesson: slug } = await params;
  const lesson = loadLessons().find((l) => l.slug === slug);
  if (!lesson) throw new Error(`Unknown lesson ${slug}`);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const audioUrl = lesson.audio.file ? `${basePath}/audio/${lesson.audio.file}` : '';
  return <LessonFlow lesson={lesson} audioUrl={audioUrl} />;
}
