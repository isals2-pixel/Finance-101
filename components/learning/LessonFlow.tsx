'use client';
// The four-stage lesson flow (SPEC_V2 §9): read, then prediction, visual,
// retrieval as one flow. The lesson is complete only when retrieval is
// submitted. Stage transitions persist so an interrupted lesson resumes.
import { useEffect, useState } from 'react';
import type { Lesson } from '@/lib/types';
import { getLessonState, putLessonState } from '@/lib/db';
import { applySessionResults, type SessionItemResult } from '@/lib/learning';
import { ReadStage } from './ReadStage';
import { PredictionStage } from './PredictionStage';
import { VisualStage } from './VisualStage';
import { RetrievalStage } from './RetrievalStage';
import { ExerciseStage } from './ExerciseStage';

type Stage = 'read' | 'prediction' | 'visual' | 'retrieval' | 'done';

export function LessonFlow({ lesson }: { lesson: Lesson }) {
  const [stage, setStage] = useState<Stage | null>(null);

  useEffect(() => {
    (async () => {
      const state = await getLessonState(lesson.slug);
      if (!state.startedAt) await putLessonState({ ...state, startedAt: Date.now() });
      if (state.completedAt || state.retrievalAt) setStage('done');
      else if (state.visualAt) setStage('retrieval');
      else if (state.predictionAt) setStage('visual');
      else if (state.readAt) setStage('prediction');
      else setStage('read');
    })();
  }, [lesson.slug]);

  async function advance(next: Stage, patch: Record<string, unknown>) {
    const state = await getLessonState(lesson.slug);
    await putLessonState({ ...state, ...patch });
    setStage(next);
  }

  if (stage === null) return <p className="text-sm text-[var(--muted)]">Loading…</p>;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-wide text-[var(--muted)]">
          Lesson {lesson.lesson} · {stageLabel(stage)}
        </p>
        <h1 className="mt-1 text-2xl font-semibold">{lesson.title}</h1>
      </div>

      {stage === 'read' && (
        <ReadStage lesson={lesson} onComplete={() => advance('prediction', { readAt: Date.now() })} />
      )}

      {stage === 'prediction' && (
        <PredictionStage
          lesson={lesson}
          onComplete={() => advance('visual', { predictionAt: Date.now() })}
        />
      )}

      {stage === 'visual' && (
        <VisualStage lesson={lesson} onComplete={() => advance('retrieval', { visualAt: Date.now() })} />
      )}

      {stage === 'retrieval' && (
        <RetrievalStage
          lesson={lesson}
          onComplete={async (results: SessionItemResult[]) => {
            const now = Date.now();
            const state = await getLessonState(lesson.slug);
            await putLessonState({ ...state, retrievalAt: now, completedAt: now });
            await applySessionResults(results);
            setStage('done');
          }}
        />
      )}

      {stage === 'done' && <ExerciseStage lesson={lesson} />}
    </div>
  );
}

function stageLabel(stage: Stage): string {
  switch (stage) {
    case 'read':
      return 'Read';
    case 'prediction':
      return 'Predict';
    case 'visual':
      return 'Visualise';
    case 'retrieval':
      return 'Retrieve';
    case 'done':
      return 'Complete';
  }
}
