> **Superseded (2026-08-21).** The v2.0 revision replaced the build sequence. Current plan: SPEC_V2.md section 81.

# Implementation Plan

Status: Phase 0 proposal, awaiting approval. Phases follow spec section 81. Each phase ends with its tests green and its living documents updated (CHANGELOG.md, ARCHITECTURE.md, LEARNING_SCIENCE.md, CONTENT_SCHEMA.md, METRICS.md, created in the phase that first needs them).

## Phase 1 - Foundation

Deliverables:

- Next.js 15 project with TypeScript strict, Tailwind, shadcn/ui, ESLint, Prettier, Vitest, Playwright wired in CI.
- Design tokens and base components implementing the section 77 design language.
- Prisma schema from DATA_MODEL.md, migrations, seed pipeline for content packages.
- Zod content schemas and the `content:check` validation command (section 84 checklist, mechanical parts).
- Auth.js email authentication, single-tenant.
- Routing shell: `/today`, `/learn/[lessonId]`, `/review`, `/labs`, `/dashboard`, `/onboarding`.
- Curriculum engine v1: concept graph loading, DAG validation, lesson unlock rules, session planner skeleton.
- Onboarding flow and baseline assessment (section 62-63) using a provisional question set.

Exit criteria: content pipeline validates and seeds a sample lesson package end to end. Unit tests cover graph validation and unlock logic. E2e covers onboarding through baseline.

## Phase 2 - Learning loop

Deliverables:

- Audio player with the full section 11 control set, resume positions, Media Session integration, Audio Mode route (section 12).
- Lesson experience: eight-segment structure, synchronized visual per segment 6, transcript, prediction pauses.
- Visual system: typed visual specs rendered through shared Recharts wrappers.
- Retrieval system: post-lesson retrieval block, the recognition/recall distinction enforced by question type.
- Exercise system: all eight section 21 exercise types rendered and graded (deterministic grading only in this phase).
- First 20 lessons (section 80) authored as content packages with audio scripts, TTS-rendered audio, visuals, retrieval questions, exercises, prerequisites, sources, mastery criteria.

Exit criteria: a learner completes the section 15 daily session (learn, retrieve, apply) fully. Content check passes for all 20 lessons. E2e covers first lesson with audio completion and exercise.

## Phase 3 - Memory engine

Deliverables:

- FSRS spaced-repetition implementation with the section 4.2 ladder as initial parameters, documented in LEARNING_SCIENCE.md.
- Mastery engine: composite scoring per section 26, weights configurable, documented.
- Interleaved review sessions (sections 4.3, 29) composed across levels.
- Error classification (section 23) for deterministic exercise types, with remediation mapping.
- Confidence capture on flagged questions and calibration tracking (section 27).
- Analytics: section 75 event set, KPI aggregation into MetricSnapshot, learning-effectiveness dashboard v1 (section 58).
- Session length modes: 3, 5, 10, 20 minutes (sections 16-17).

Exit criteria: reference-value unit tests for FSRS transitions and mastery composition. Integration tests for review scheduling after pass and fail. Simulated 60-day learner produces sane schedules and mastery curves.

## Phase 4 - Labs

Deliverables:

- Compound interest, inflation, and fee simulators (already stubbed in Phase 2 exercises, now full labs).
- Portfolio laboratory (section 30) on static covariance and return datasets, assumptions labeled.
- Market simulator with the section 31 scenario set.
- Behavioral finance simulator (section 32) with multi-answer rationality rubrics.
- Financial statement lab (section 34), corporate finance lab (section 35), macro causal-chain lab (section 36), personal finance lab (section 37).

Exit criteria: every calculation engine has reference-value tests including zero, negative, and large-value edge cases (section 83). Assumption labels present in every lab UI.

## Phase 5 - Intelligence

Deliverables:

- AI tutor gateway with knowledge-graph context assembly and guardrail test suite (section 71).
- LLM rubric grading for explanation, teach-back, and argument-analysis items, with logged rubric and score.
- Teach-back mode (section 67) and financial argument analysis exercises (section 68).
- Adaptive difficulty: tier selection per concept from accuracy, calibration, and transfer signals (section 65).
- Error classification extended to free-text answers.

Exit criteria: guardrail suite passes (no prediction, no advice-as-certainty, no fabricated sources). Grading consistency checked against a hand-scored calibration set of at least 50 responses.

## Phase 6 - Full curriculum and specialization

Deliverables:

- Remaining curriculum through Level 13 (section 39), authored incrementally with the same content pipeline. Content authoring runs in parallel from Phase 2 onward, see RISKS.md R1.
- ETF comparison lab / investment decision lab (section 33).
- French tax module: versioned, source-linked TaxRule content for PEA, CTO, assurance-vie, capital gains, dividends, ETF taxation (section 39 Level 12).
- Investment Policy Statement builder and rubric grading (section 38).
- Misconception challenge scheduling from the section 24 database.

Exit criteria: content check green across all levels. Tax content carries sources and validity dates. IPS flow produces a graded document.

## Phase 7 - Testing hardening

Deliverables:

- Full section 82 matrix: unit (calculations, mastery, spaced repetition), integration (lesson completion, quiz submission, mastery update, review scheduling, portfolio creation), e2e (onboarding, first lesson, audio completion, exercise, review, dashboard update).
- Accessibility acceptance tests (section 76).
- Load of the assessment pool partition rule: final exam items never appear in practice (section 55).

Exit criteria: CI green, coverage thresholds met for `/lib`, accessibility checks pass.

## Phase 8 - Effectiveness instrumentation

Deliverables:

- Final exam assembly from the concept graph per the section 41 blueprint.
- Delayed retention probes at 7, 30, 90, 180 days (KPI 2), transfer bank scoring (KPI 3), decision scenario bank (KPI 4), calculation battery (KPI 5), explanation rubric reporting (KPI 6).
- Composite competency score (section 57) and full dashboard (section 58).
- Within-subject experiment scaffolding for audio vs text, visual on/off, and exercise depth (sections 47-49).
- ADHD product metrics and attention-friction metric (sections 59-60), product health matrix report (section 61).

Exit criteria: all METRICS.md KPIs computed from real event data on a seeded learner history. Experiment assignment and reporting verified by integration tests.

## Cross-phase rules

- Mocked functionality is labeled as mocked in the UI and in code (spec section 87.11).
- Every phase updates CHANGELOG.md.
- Content authoring is a parallel track with its own reviewer, not a serial phase.
- No engagement mechanics are added at any phase beyond section 78's allowed list.
