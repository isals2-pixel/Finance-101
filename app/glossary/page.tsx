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
    .sort((a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }));

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Glossary</h1>
      <p className="text-sm text-[var(--muted)]">
        Every taught concept, alphabetically, in one sentence, with its lesson.
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
              {c.misconceptions.length > 0 && (
                <details className="mt-2">
                  <summary className="cursor-pointer text-xs text-[var(--accent)]">
                    Common misconceptions ({c.misconceptions.length})
                  </summary>
                  <ul className="mt-2 space-y-2 text-xs">
                    {c.misconceptions.map((m) => (
                      <li key={m.statement}>
                        <span className="text-red-800 line-through decoration-red-300">
                          {m.statement}
                        </span>{' '}
                        <span className="text-[var(--muted)]">{m.correction}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
