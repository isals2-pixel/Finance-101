'use client';
// The home screen answers exactly four questions (SPEC_V2 §14): what to learn
// today, why, how long it takes, and what to review. Nothing else.
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { allLessonStates, allMastery, allSchedules, getLearner } from '@/lib/db';

interface LessonSummary {
  slug: string;
  title: string;
  lesson: number;
  minutes: number;
  concepts: string[];
}

export function TodayCard({ lessons }: { lessons: LessonSummary[] }) {
  const [nextLesson, setNextLesson] = useState<LessonSummary | null>(null);
  const [resume, setResume] = useState<LessonSummary | null>(null);
  const [dueCount, setDueCount] = useState(0);
  const [trackedConcepts, setTrackedConcepts] = useState(0);
  const [needsBaseline, setNeedsBaseline] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const learner = await getLearner();
      setNeedsBaseline(learner.baselineScore === undefined);
      const states = await allLessonStates();
      const completed = new Set(states.filter((s) => s.completedAt).map((s) => s.slug));
      const started = new Set(states.filter((s) => s.startedAt && !s.completedAt).map((s) => s.slug));
      const inProgress = lessons.find((l) => started.has(l.slug));
      setResume(inProgress ?? null);
      setNextLesson(lessons.find((l) => !completed.has(l.slug) && !started.has(l.slug)) ?? null);
      const now = Date.now();
      setDueCount((await allSchedules()).filter((s) => s.due <= now).length);
      setTrackedConcepts((await allMastery()).length);
      setReady(true);
    })();
  }, [lessons]);

  if (!ready) return <p className="text-sm text-[var(--muted)]">Loading your progress…</p>;

  const target = resume ?? nextLesson;

  return (
    <div className="space-y-6">
      {needsBaseline && (
        <section className="rounded-lg border border-[var(--accent)] bg-[var(--card)] p-5">
          <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
            Start here, once
          </h2>
          <p className="mt-2 text-sm">
            Take the 10-minute baseline assessment before learning - it becomes the permanent
            starting point your progress is measured against.
          </p>
          <Link
            href="/assessment/"
            className="mt-2 inline-block rounded-md border border-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent)]"
          >
            Take the baseline
          </Link>
        </section>
      )}
      <section className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <h1 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
          Today
        </h1>
        {target ? (
          <div className="mt-3 space-y-2">
            <p className="text-xl font-semibold">
              Lesson {target.lesson}: {target.title}
            </p>
            <p className="text-sm text-[var(--muted)]">
              {resume ? 'In progress - continue where you left off.' : 'Your next lesson.'} About{' '}
              {target.minutes} minutes: a short read, then retrieval.
            </p>
            <Link
              href={`/learn/${target.slug}/`}
              className="mt-2 inline-block rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
            >
              {resume ? 'Continue lesson' : 'Start lesson'}
            </Link>
          </div>
        ) : (
          <p className="mt-3 text-sm">All available lessons are complete.</p>
        )}
      </section>

      <section className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
        <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">Review</h2>
        {dueCount > 0 ? (
          <div className="mt-3 space-y-2">
            <p className="text-sm">
              {dueCount} concept{dueCount === 1 ? '' : 's'} due for review (about{' '}
              {Math.max(2, dueCount * 2)} minutes).
            </p>
            <Link
              href="/review/"
              className="inline-block rounded-md border border-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent)]"
            >
              Start review
            </Link>
          </div>
        ) : (
          <p className="mt-3 text-sm text-[var(--muted)]">
            Nothing due. {trackedConcepts > 0 ? `${trackedConcepts} concept${trackedConcepts === 1 ? '' : 's'} on schedule.` : 'Reviews appear after your first lesson.'}
          </p>
        )}
      </section>
    </div>
  );
}
