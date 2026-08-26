import Link from 'next/link';
import { loadConcepts, loadLessons } from '@/lib/content';

export default function GlossaryPage() {
  const concepts = loadConcepts();
  const lessons = loadLessons();
  const lessonFor = new Map<string, { slug: string; title: string; oneSentence: string; lesson: number }>();
  for (const l of lessons) {
    for (const c of l.concepts) {
      if (!lessonFor.has(c)) lessonFor.set(c, l);
    }
  }
  const rows = concepts
    .filter((c) => lessonFor.has(c.id))
    .sort((a, b) => a.level - b.level || a.id.localeCompare(b.id));

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Glossary</h1>
      <p className="text-sm text-[var(--muted)]">
        Every taught concept, in one sentence, with its lesson. Concepts without a lesson yet appear
        as the curriculum grows.
      </p>
      <ul className="space-y-4">
        {rows.map((c) => {
          const l = lessonFor.get(c.id)!;
          return (
            <li key={c.id} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
              <div className="flex items-baseline justify-between">
                <h2 className="font-semibold">{c.title}</h2>
                <Link href={`/learn/${l.slug}/`} className="text-xs text-[var(--accent)] underline">
                  Lesson {l.lesson}
                </Link>
              </div>
              <p className="mt-1 text-sm text-[var(--muted)]">{l.oneSentence}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
