'use client';
// The four-stage lesson flow (SPEC_V2 §9): audio, then prediction, visual,
// retrieval as one flow. The lesson is complete only when retrieval is
// submitted. Stage transitions persist so an interrupted lesson resumes.
import { useEffect, useState } from 'react';
import type { Lesson } from '@/lib/types';
import { getLessonState, putLessonState } from '@/lib/db';
import { applySessionResults, type SessionItemResult } from '@/lib/learning';
import { AudioStage } from './AudioStage';
import { PredictionStage } from './PredictionStage';
import { VisualStage } from './VisualStage';
import { RetrievalStage } from './RetrievalStage';
import { ExerciseStage } from './ExerciseStage';

type Stage = 'audio' | 'prediction' | 'visual' | 'retrieval' | 'done';

export function LessonFlow({ lesson, audioUrl }: { lesson: Lesson; audioUrl: string }) {
  const [stage, setStage] = useState<Stage | null>(null);

  useEffect(() => {
    (async () => {
      const state = await getLessonState(lesson.slug);
      if (!state.startedAt) await putLessonState({ ...state, startedAt: Date.now() });
      if (state.completedAt) setStage('done');
      else if (state.retrievalAt) setStage('done');
      else if (state.visualAt) setStage('retrieval');
      else if (state.predictionAt) setStage('visual');
      else if (state.audioCompletedAt) setStage('prediction');
      else setStage('audio');
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

      {stage === 'audio' && (
        <AudioStage
          lesson={lesson}
          audioUrl={audioUrl}
          onComplete={(skipped) =>
            advance('prediction', {
              audioCompletedAt: Date.now(),
              audioSkipped: skipped,
            })
          }
        />
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
    case 'audio':
      return 'Listen';
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
