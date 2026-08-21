> **Superseded (2026-08-21).** Described a server stack (PostgreSQL, Prisma, Auth.js) removed by the v2.0 revision's C4 constraint. Current architecture: root ARCHITECTURE.md.

# Proposed Architecture

Status: Phase 0 proposal, awaiting approval.

## 1. System overview

Finance Academy is a single Next.js application with a PostgreSQL database. The system separates three concerns that the specification treats as distinct products inside one application:

1. **Content**: the curriculum, concepts, lessons, questions, scenarios, misconceptions, and sources. Authored as versioned data files, validated with Zod, seeded into the database.
2. **Learning engine**: mastery scoring, spaced repetition, interleaving, adaptive difficulty, error classification, and session planning. Pure TypeScript modules with no framework dependencies, fully unit-testable.
3. **Delivery**: the Next.js UI, audio player, labs and simulators, dashboard, and AI tutor. Consumes the learning engine through a typed service layer.

This separation exists because the specification's success criteria (sections 40-61) are properties of the learning engine and content, not of the UI. Both must be testable without a browser.

```
+-----------------------------------------------------------+
|  Next.js (App Router)                                     |
|                                                           |
|  UI routes          API routes / server actions           |
|  /today             /api/session   /api/review            |
|  /learn/[lesson]    /api/attempts  /api/tutor             |
|  /review            /api/labs      /api/analytics         |
|  /labs/*            /api/assessment                       |
|  /dashboard                                               |
+--------------------------+--------------------------------+
                           |
             +-------------v--------------+
             |  Service layer (lib/)      |
             |  session planner           |
             |  mastery engine            |
             |  spaced repetition (FSRS)  |
             |  assessment engine         |
             |  finance calculations      |
             |  simulation engines        |
             |  analytics                 |
             |  tutor orchestration       |
             +-------------+--------------+
                           |
        +------------------+------------------+
        |                                     |
+-------v--------+                   +--------v---------+
| PostgreSQL     |                   | Content packages |
| (Prisma)       |<---- seed --------| /data (Zod-      |
| user state,    |                   | validated JSON)  |
| attempts,      |                   | curriculum,      |
| schedules,     |                   | questions,       |
| analytics      |                   | scenarios, tax   |
+----------------+                   +------------------+
```

## 2. Technology stack

As mandated by spec section 72, with versions and roles made concrete.

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 15, App Router, TypeScript strict | Server components for content, client components for audio and exercises |
| Styling | Tailwind CSS 4, shadcn/ui | Restrained editorial design system per section 77 |
| Database | PostgreSQL 16, Prisma ORM | Single database, schema in DATA_MODEL.md |
| Validation | Zod | Every API boundary and every content file |
| Charts | Recharts | All lesson visuals and lab outputs |
| Testing | Vitest (unit, integration), Playwright (e2e) | Financial calculations get reference-value test suites per section 83 |
| Audio | HTML5 `<audio>` + Media Session API | Lock-screen controls where the platform supports them |
| Auth | Auth.js (email magic link) | Minimal, see OPEN_QUESTIONS.md Q2 |
| AI tutor | Claude API through a server-side gateway | Never called from the client, see section 9 below |

## 3. Directory structure

Follows spec section 73, with the additions needed to make the content pipeline and engine boundaries real.

```
/app                        routes only, thin
/components
  /audio                    player, audio-mode shell
  /charts                   Recharts wrappers with shared theme
  /learning                 lesson shell, segments, transcript
  /exercises                the 8 exercise type renderers
  /portfolio                portfolio lab UI
  /finance                  personal finance lab UI
  /dashboard                competency dashboard
/lib
  /learning                 session planner, interleaving, adaptive difficulty
  /mastery                  mastery score computation
  /spaced-repetition        FSRS implementation + scheduling
  /simulation               market scenarios, behavioral scenarios
  /portfolio                allocation math, volatility, correlation, drawdown
  /finance                  compound interest, real returns, fees, bonds, NPV
  /tax                      versioned French tax rules engine
  /market-data              data-source abstraction, static datasets for MVP
  /audio                    audio manifest, resume positions
  /assessment               baseline, final exam assembly, rubric scoring
  /analytics                event recording and KPI aggregation
/data
  /curriculum               levels, modules, lesson metadata
  /concepts                 concept graph: prerequisites, misconceptions
  /questions                question bank, tagged by concept and cognition level
  /scenarios                decision scenarios, market scenarios
  /sources                  source registry with dates and jurisdictions
/prisma
/tests
  /unit  /integration  /e2e  /reference-values
```

## 4. Content pipeline

Content is code-reviewed data, not database rows edited in place.

1. Authors write lesson packages as JSON/MDX files in `/data`.
2. A Zod schema per content type enforces the section 80 lesson contract: audio script segmented per section 9's eight-segment structure, at least one meaningful visual, retrieval questions, one practical exercise, prerequisite list, source list, mastery criteria.
3. A validation script (`pnpm content:check`) runs the section 84 checklist mechanically where possible: jargon terms resolve to glossary entries, prerequisites resolve to existing concepts, every claim tagged as substantive links to a source, every lesson has retrieval and application items.
4. A seed script loads validated content into PostgreSQL. Content files carry a version, and the seed is idempotent per version.

This makes the content quality gate (section 84) enforceable in CI rather than by convention.

## 5. Concept graph

The concept graph is the backbone the specification builds everything else on (sections 25, 41, 64, 71).

- Nodes: concepts with id, level, difficulty variants (beginner through expert), misconception links, assessment method tags.
- Edges: prerequisite, dependent, related.
- Stored in `/data/concepts` and mirrored to the `Concept` and `ConceptPrerequisite` tables.
- The graph is validated as a DAG at content-check time. A cycle is a build failure.
- Consumers: curriculum sequencing (a lesson unlocks when prerequisites reach threshold mastery), interleaved review composition, final exam assembly, tutor context (what the learner already knows), remediation (a causal-reasoning error on concept X schedules review of X's weakest prerequisite).

## 6. Learning engine

### 6.1 Spaced repetition

FSRS (Free Spaced Repetition Scheduler) is the established algorithm chosen per section 28. It natively models the required per-concept state: stability, difficulty, interval, last review, next review, and outcome counts. The section 4.2 schedule (1, 3, 7, 14, 30, 60, 120 days) is the initial interval ladder for a concept with default parameters. FSRS then adapts: failures shorten intervals, successes lengthen them. The implementation and its parameters are documented in LEARNING_SCIENCE.md at Phase 3, satisfying the "do not invent arbitrary scoring logic without documenting it" requirement.

### 6.2 Mastery model

Each concept holds a 0-100 mastery score computed as a weighted composite over attempt history:

- initial learning and immediate retrieval
- delayed retrieval (time-weighted, recent evidence counts more)
- application accuracy
- transfer accuracy
- error rate by error class
- confidence calibration error

Weights start from the section 57 composite weighting and are stored in one configuration module so they are inspectable and tunable. Lesson completion contributes zero mastery on its own, as section 26 requires.

### 6.3 Session planner

One module answers the home-screen question "what should I learn today and why" (section 14). Inputs: due reviews from FSRS, curriculum frontier (unlocked lessons), weakest-area signal from the dashboard aggregates, selected session length (3, 5, 10, 20 minute modes). Output: an ordered session plan of lesson, retrieval, and application blocks. Interleaving rules (section 29) apply to review composition: a review session draws from at least three distinct levels once the learner has foundational coverage.

### 6.4 Error classification and remediation

Every incorrect attempt is classified into the section 23 taxonomy. Structured exercises (calculation, classification, comparison) classify deterministically from distractor and answer metadata authored with each question. Free-text answers (explanation, teach-back) are classified by the LLM grader against the question's rubric, with the classification stored on the attempt. Remediation maps error class to action: missing prerequisite schedules the prerequisite, calculation error schedules a worked example, misconception schedules the linked misconception challenge.

## 7. Audio system

- Each lesson has one audio asset per script version plus a transcript generated from the same source script, so audio and transcript cannot drift.
- Production pipeline: script (structured per the eight segments) to TTS render to stored asset. TTS provider is an open decision (OPEN_QUESTIONS.md Q1). The abstraction is one `AudioSource` interface so recorded human audio can replace TTS per lesson without code changes.
- Player: HTML5 audio with the section 11 control set. Resume position persists server-side per user and lesson. Media Session API provides lock-screen controls. Platform limits on background playback are a known risk (RISKS.md R6).
- Audio Mode is a dedicated route rendering only title, progress, controls, and optional transcript (section 12).

## 8. Labs and simulators

All labs share one pattern: a pure calculation engine in `/lib` with reference-value tests, a thin Recharts visualization, and explicit assumption labels rendered in the UI (section 30).

| Lab | Engine | MVP |
|---|---|---|
| Compound interest | `lib/finance/compound.ts` | Yes |
| Inflation | `lib/finance/inflation.ts` | Yes |
| Fees | `lib/finance/fees.ts` | Yes |
| Portfolio lab | `lib/portfolio` (weights, expected return, volatility from a static covariance matrix, drawdown) | Basic version |
| Market simulator | `lib/simulation` scenario definitions with authored consequence narratives | Phase 4 |
| Behavioral simulator | scenario data + decision rubrics | Phase 4 |
| Financial statement lab | static company datasets | Phase 4 |
| Corporate finance lab | `lib/finance/npv.ts`, `lib/finance/irr.ts` | Phase 4 |
| Macro lab | causal-chain exercise type over the concept graph | Phase 4 |
| Personal finance lab | `lib/finance/personal.ts` net worth, savings rate, resilience | Phase 4 |
| IPS builder | structured form + rubric scoring | Phase 6 |

Market and ETF data come from static, timestamped datasets in `/data` behind the `market-data` abstraction (section 70). No live feeds in MVP.

## 9. AI tutor

- Server-side only. The client posts to `/api/tutor`, the server assembles context and calls the Claude API.
- Context assembly: the learner's mastery snapshot for the concept in question and its prerequisites, linked misconceptions, and the lesson's source list. This implements the section 71 requirement that the tutor knows what the learner already understands.
- Guardrails are part of the system prompt and are tested: no market predictions, no return guarantees, no personalized advice presented as certainty, mandatory uncertainty framing. A refusal-behavior test suite runs against recorded prompts in CI.
- The same gateway serves rubric grading for explanation quality (section 43 KPI 6) and teach-back scoring (section 67). Grading calls are logged with rubric, response, and score for auditability.

## 10. Analytics and KPIs

- Events from section 75 are written to an `AnalyticsEvent` table through one typed `track()` function. No third-party analytics in MVP.
- KPI aggregation jobs compute the section 43-46 learning KPIs and the section 59-61 product metrics into a `MetricSnapshot` table read by the dashboard.
- Assessment items are partitioned into disjoint pools: lesson practice, review, delayed-retention probes, transfer bank, final exam. The final exam pool is never served in practice (section 55). Pool membership is a column on `Question`, enforced by the assembly code and a test.
- Experiments (sections 47-49) are within-subject by design because the primary deployment is a single learner. See OPEN_QUESTIONS.md Q5.

## 11. Accessibility and design

- Section 76 items are acceptance criteria in Playwright: keyboard navigation of the player and exercises, transcript availability, reduced-motion respect, contrast tokens in the Tailwind theme.
- Design tokens implement section 77: editorial, restrained, no gamification aesthetics. The only progress mechanics are mastery, milestones, and module completion (section 78).

## 12. Non-goals confirmed from the specification

- No financial advice, no live trading, no brokerage integration.
- No social features, feeds, leaderboards, or streak pressure.
- No native mobile app in scope. The service layer and content API are structured so one can be added later (section 72).
- No engagement-optimizing mechanics. Engagement metrics are recorded but never feed the competency score (section 57).
