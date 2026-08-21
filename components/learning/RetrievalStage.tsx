'use client';
// Step 8: retrieval without notes (SPEC_V2 §9, §23). Written answers lock
// before the model answer appears, then the learner self-scores 0-5.
// Classification items are scored automatically with authored error maps.
// The transcript is not reachable from this stage.
import { useState } from 'react';
import type { Lesson, RetrievalQuestion } from '@/lib/types';
import { ERROR_CLASSES, type ErrorClass } from '@/lib/types';
import type { SessionItemResult } from '@/lib/learning';

const CONFIDENCE_BANDS = [
  { label: '0-20%', midpoint: 10 },
  { label: '21-40%', midpoint: 30 },
  { label: '41-60%', midpoint: 50 },
  { label: '61-80%', midpoint: 70 },
  { label: '81-100%', midpoint: 90 },
];

const SELF_SCORE_ANCHORS = [
  '0 - Incorrect',
  '1 - Superficial',
  '2 - Partially correct',
  '3 - Technically correct',
  '4 - Correct with causal explanation',
  '5 - Correct, causal, with an example',
];

export function RetrievalStage({
  lesson,
  onComplete,
}: {
  lesson: Lesson;
  onComplete: (results: SessionItemResult[]) => void;
}) {
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<SessionItemResult[]>([]);
  const [finishing, setFinishing] = useState(false);
  const question = lesson.retrieval[index];

  function handleResult(result: SessionItemResult) {
    const next = [...results, result];
    if (index + 1 < lesson.retrieval.length) {
      setResults(next);
      setIndex(index + 1);
    } else {
      setFinishing(true);
      onComplete(next);
    }
  }

  if (finishing) return <p className="text-sm text-[var(--muted)]">Saving your results…</p>;

  return (
    <div className="space-y-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
      <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
        Retrieval {index + 1} of {lesson.retrieval.length} - no notes
      </h2>
      {question.type === 'classification' ? (
        <ClassificationItem key={question.id} lesson={lesson} question={question} onDone={handleResult} />
      ) : (
        <WrittenItem key={question.id} lesson={lesson} question={question} onDone={handleResult} />
      )}
    </div>
  );
}

function WrittenItem({
  lesson,
  question,
  onDone,
}: {
  lesson: Lesson;
  question: RetrievalQuestion;
  onDone: (r: SessionItemResult) => void;
}) {
  const [answer, setAnswer] = useState('');
  const [confidence, setConfidence] = useState<number | undefined>(undefined);
  const [locked, setLocked] = useState(false);
  const [selfScore, setSelfScore] = useState<number | undefined>(undefined);
  const [errorClass, setErrorClass] = useState<ErrorClass | undefined>(undefined);

  const needsConfidence = Boolean(question.askConfidence);
  const canLock = answer.trim().length > 0 && (!needsConfidence || confidence !== undefined);
  const needsErrorClass = selfScore !== undefined && selfScore <= 3;

  function finish() {
    if (selfScore === undefined) return;
    onDone({
      attempt: {
        lessonSlug: lesson.slug,
        questionId: question.id,
        conceptId: question.conceptId,
        stage: 'retrieval',
        kind: question.type,
        answer,
        selfScore,
        selfReported: true,
        confidence,
        errorClass,
        at: Date.now(),
      },
      outcome: { kind: 'self', score: selfScore },
    });
  }

  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed">{question.prompt}</p>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        disabled={locked}
        rows={5}
        placeholder="Write your answer from memory…"
        className="w-full rounded-md border border-[var(--border)] p-3 text-sm disabled:bg-[var(--background)]"
      />
      {needsConfidence && !locked && (
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
            How confident are you?
          </p>
          <div className="flex flex-wrap gap-2">
            {CONFIDENCE_BANDS.map((b) => (
              <button
                key={b.midpoint}
                onClick={() => setConfidence(b.midpoint)}
                className={`rounded-md px-3 py-1.5 text-xs ${
                  confidence === b.midpoint
                    ? 'bg-[var(--accent)] text-white'
                    : 'border border-[var(--border)] text-[var(--muted)]'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
      )}
      {!locked ? (
        <button
          onClick={() => setLocked(true)}
          disabled={!canLock}
          className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
        >
          Lock my answer
        </button>
      ) : (
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-[var(--border)] bg-[var(--background)] p-3 text-sm">
              <p className="mb-1 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                Your answer (locked)
              </p>
              <p className="whitespace-pre-wrap">{answer}</p>
            </div>
            <div className="rounded-md border border-[var(--border)] bg-[var(--background)] p-3 text-sm">
              <p className="mb-1 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                Model answer
              </p>
              <p>{question.modelAnswer}</p>
              {question.rubricNote && (
                <p className="mt-2 text-xs text-[var(--muted)]">Rubric: {question.rubricNote}</p>
              )}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
              Score your own answer (stored as self-reported)
            </p>
            <div className="flex flex-col gap-1.5">
              {SELF_SCORE_ANCHORS.map((label, score) => (
                <button
                  key={score}
                  onClick={() => setSelfScore(score)}
                  className={`rounded-md px-3 py-1.5 text-left text-xs ${
                    selfScore === score
                      ? 'bg-[var(--accent)] text-white'
                      : 'border border-[var(--border)] text-[var(--muted)]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          {needsErrorClass && (
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                What kind of gap was it?
              </p>
              <div className="flex flex-wrap gap-2">
                {ERROR_CLASSES.map((ec) => (
                  <button
                    key={ec}
                    onClick={() => setErrorClass(ec)}
                    className={`rounded-md px-2.5 py-1 text-xs ${
                      errorClass === ec
                        ? 'bg-[var(--accent)] text-white'
                        : 'border border-[var(--border)] text-[var(--muted)]'
                    }`}
                  >
                    {ec.replace(/-/g, ' ')}
                  </button>
                ))}
              </div>
            </div>
          )}
          <button
            onClick={finish}
            disabled={selfScore === undefined || (needsErrorClass && !errorClass)}
            className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

function ClassificationItem({
  lesson,
  question,
  onDone,
}: {
  lesson: Lesson;
  question: RetrievalQuestion;
  onDone: (r: SessionItemResult) => void;
}) {
  const items = question.items ?? [];
  const [choices, setChoices] = useState<(string | undefined)[]>(items.map(() => undefined));
  const [submitted, setSubmitted] = useState(false);

  const allChosen = choices.every(Boolean);
  const correctCount = items.filter((item, i) => choices[i] === item.answer).length;
  const allCorrect = correctCount === items.length;

  function submit() {
    setSubmitted(true);
  }

  function finish() {
    const firstWrongIndex = items.findIndex((item, i) => choices[i] !== item.answer);
    const errorClass =
      firstWrongIndex >= 0
        ? items[firstWrongIndex].errorMap?.[choices[firstWrongIndex] as string]
        : undefined;
    onDone({
      attempt: {
        lessonSlug: lesson.slug,
        questionId: question.id,
        conceptId: question.conceptId,
        stage: 'retrieval',
        kind: 'classification',
        answer: JSON.stringify(choices),
        correct: allCorrect,
        selfReported: false,
        errorClass,
        at: Date.now(),
      },
      outcome: { kind: 'auto', correct: allCorrect },
    });
  }

  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed">{question.prompt}</p>
      {items.map((item, i) => (
        <div key={i} className="rounded-md border border-[var(--border)] p-3">
          <p className="mb-2 text-sm">{item.text}</p>
          <div className="flex flex-wrap gap-2">
            {item.options.map((opt) => {
              const chosen = choices[i] === opt;
              const showState = submitted && chosen;
              const isRight = opt === item.answer;
              return (
                <button
                  key={opt}
                  disabled={submitted}
                  onClick={() => {
                    const next = [...choices];
                    next[i] = opt;
                    setChoices(next);
                  }}
                  className={`rounded-md px-3 py-1.5 text-xs ${
                    showState
                      ? isRight
                        ? 'bg-emerald-700 text-white'
                        : 'bg-red-800 text-white'
                      : chosen
                        ? 'bg-[var(--accent)] text-white'
                        : 'border border-[var(--border)] text-[var(--muted)]'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {submitted && choices[i] !== item.answer && (
            <p className="mt-2 text-xs text-[var(--muted)]">Correct: {item.answer}</p>
          )}
        </div>
      ))}
      {!submitted ? (
        <button
          onClick={submit}
          disabled={!allChosen}
          className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
        >
          Check
        </button>
      ) : (
        <div className="space-y-3">
          <p className="text-sm">
            {correctCount} of {items.length} correct.
          </p>
          <button
            onClick={finish}
            className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
