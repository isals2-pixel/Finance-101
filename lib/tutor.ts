// AI tutor interface (SPEC_V2 §71). Specified, not built: C1 removes the
// operating budget. The flag stays off; no network calls exist behind it.
// A future implementation must use the learner's knowledge state and must
// never predict markets, fabricate sources, promise returns, encourage
// speculative trading, or present personalised advice as certainty.

export const FEATURE_TUTOR = false as const;

export interface TutorContext {
  conceptId: string;
  masteryScore: number;
  prerequisiteMastery: Record<string, number>;
  misconceptions: string[];
}

export interface TutorRequest {
  kind: 'explain' | 'quiz' | 'example' | 'challenge' | 'alternative';
  question: string;
  context: TutorContext;
}

export interface TutorResponse {
  text: string;
  sources: { title: string; url: string }[];
}

export interface Tutor {
  ask(request: TutorRequest): Promise<TutorResponse>;
}

export function getTutor(): Tutor | null {
  // Deliberately null while FEATURE_TUTOR is false. When a budget exists, a
  // provider-backed implementation is returned here without callers changing.
  return null;
}
