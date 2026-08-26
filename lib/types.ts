export const ERROR_CLASSES = [
  'factual-misunderstanding',
  'terminology-confusion',
  'calculation-error',
  'causal-reasoning-error',
  'overgeneralisation',
  'missing-prerequisite',
  'misconception',
  'careless-error',
] as const;
export type ErrorClass = (typeof ERROR_CLASSES)[number];

export interface ClassificationItem {
  text: string;
  options: string[];
  answer: string;
  errorMap?: Record<string, ErrorClass>;
}

export interface RetrievalQuestion {
  id: string;
  conceptId: string;
  type: 'freeRecall' | 'shortAnswer' | 'explanation' | 'classification';
  prompt: string;
  modelAnswer?: string;
  rubricNote?: string;
  askConfidence?: boolean;
  items?: ClassificationItem[];
}

export interface LessonExercise {
  id: string;
  conceptId: string;
  type: 'calculation';
  prompt: string;
  answer: number;
  tolerance: number;
  explanation: string;
}

export interface LessonSource {
  title: string;
  publisher: string;
  url: string;
  publishedAt: string;
  verifiedAt: string;
}

export interface Lesson {
  lesson: number;
  slug: string;
  title: string;
  oneSentence: string;
  level: number;
  prerequisites: string[];
  concepts: string[];
  audio: { file: string; durationSec: number; generatedAt: string };
  visual: {
    id: string;
    kind: string;
    requirement: 'required' | 'reinforcement';
    caption: string;
  };
  prediction: { prompt: string; modelAnswer: string };
  retrieval: RetrievalQuestion[];
  exercise: LessonExercise;
  sources: LessonSource[];
  masteryCriteria: string;
  body: string;
}

export interface Concept {
  id: string;
  title: string;
  level: number;
  tier: 1 | 2;
  prerequisites: string[];
  related: string[];
  misconceptions: { statement: string; correction: string }[];
}

/** One recorded answer. The only event log the application keeps (SPEC_V2 §75). */
export interface Attempt {
  id?: number;
  lessonSlug: string;
  questionId: string;
  conceptId: string;
  /** Which stage produced it. */
  stage: 'prediction' | 'retrieval' | 'exercise' | 'review' | 'assessment';
  kind: RetrievalQuestion['type'] | 'prediction' | 'calculation';
  answer: string;
  /** Auto-scored items only. */
  correct?: boolean;
  /** 0-5 for self-scored written answers. */
  selfScore?: number;
  /** True when the score came from the learner, not automatic scoring. */
  selfReported: boolean;
  /** Confidence band midpoint 0-100, captured before reveal. */
  confidence?: number;
  errorClass?: ErrorClass;
  at: number;
}

export interface LessonState {
  slug: string;
  startedAt?: number;
  audioCompletedAt?: number;
  audioSkipped?: boolean;
  audioPositionSec?: number;
  predictionAt?: number;
  visualAt?: number;
  retrievalAt?: number;
  completedAt?: number;
}

export interface MasteryRecord {
  conceptId: string;
  score: number;
  components: Record<string, number | null>;
  selfReportedShare: number;
  updatedAt: number;
}

/** Serialized FSRS card state per concept. */
export interface ScheduleRecord {
  conceptId: string;
  due: number;
  stability: number;
  difficulty: number;
  elapsed_days: number;
  scheduled_days: number;
  learning_steps: number;
  reps: number;
  lapses: number;
  state: number;
  last_review?: number;
}

export interface LearnerRecord {
  id: 'me';
  createdAt: number;
  gistId?: string;
  gistToken?: string;
  /** Never synced in plaintext; used to derive the backup encryption key. */
  backupPassphrase?: string;
  lastBackupAt?: number;
}
