# Requirements Traceability

Status of every numbered section of the specification (v1.0 numbering, carried by SPEC_V2.md). Statuses: **Done** (built and tested), **Planned** (in scope, target phase shown), **Deferred** (in scope only if Tier 2 or the tutor budget materialises), **Removed** (deleted by the v2.0 revision). Updated at the end of every phase and at each spec revision. Current as of Phase 1 + the v2.1 audio removal (docs/revisions/2026-08-26-audio-removal.md).

| § | Title | Status | Notes |
|---|---|---|---|
| 0 | Hard constraints C1-C4 | Done | Governs everything below |
| 1 | Purpose | Done (v2) | Single-owner objective |
| 2 | Core product principle | Done (v2) | |
| 3 | Target user | Done (v2) | |
| 4.1 | Retrieval practice | Done P1 (partial) | Lesson flow forces recall; formats broaden P2-P3 |
| 4.2 | Spaced practice | Done P1 | FSRS via ts-fsrs |
| 4.3 | Interleaving | Done P2 | Review sessions round-robin across curriculum levels |
| 5 | Generative learning | Done P1 (partial) | Prediction, free recall, explanation live; comparison, error-id P3 |
| 6 | Cognitive load design | Done P1 | Minimal interface by construction |
| 7 | Reading-first design (was auditory-first) | Done (v2.1) | Audio removed entirely; lessons are read-only text in the app |
| 8 | Lesson length | Done P1 | 1,400-1,800 word body = ~7-9 min reading |
| 9 | Lesson structure | Done P1 | Read then prediction-visual-retrieval flow; complete only at step 8 |
| 10 | Source packs | Done P1 | Template and lesson 1; the body is the lesson text (v2.1) |
| 11 | Audio player | Removed (v2.1) | No audio; reading stage resumes via lesson state |
| 12 | Audio-only mode | Removed (v2.1) | No audio |
| 13 | ADHD-optimised design | Done P1 (partial) | Clear next action, resumption, short sessions; variety grows with content |
| 14 | No infinite feed | Done P1 | Home answers the four questions only |
| 15 | Daily session | Done P2 | Home offers lesson + due reviews + optional apply |
| 16 | Variable session length | Planned P2 | |
| 17 | Minimum viable day | Planned P2 | |
| 18 | Visual design | Done P1 | Visual step after the reading; required/reinforcement flag per lesson |
| 19 | Multimedia principles | Done P1 | Visual is a diagram, not narrated text |
| 20 | Concrete application requirement | Done P1 (partial) | Lesson 1 exercise; full coverage grows with content |
| 21 | Eight exercise types | Planned P3 | P1 has calculation, prediction, explanation, classification |
| 22 | Transfer exercises (30%) | Planned P2-P4 | Question pools tagged by cognition |
| 23 | Error analysis + self-scoring | Done P1 | Locked-answer self-assessment; error classes on both paths |
| 24 | Misconception database | Planned P2 | Schema exists in concept JSON; lesson 1 misconceptions authored |
| 25 | Knowledge graph | Done P1 | Level 1 seeded; DAG validated in CI; grows with content |
| 26 | Mastery model | Done P1 | Explicit weights in lib/mastery.ts, documented in LEARNING_SCIENCE.md |
| 27 | Confidence calibration | Done P1 | Five bands, captured before reveal |
| 28 | Spaced repetition engine | Done P1 | FSRS; grade mapping in LEARNING_SCIENCE.md |
| 29 | Interleaved review | Done P2 | interleaveByLevel in lib/metrics.ts, tested |
| 30 | Portfolio laboratory | Done P3 (basic) | Allocation, expected return, volatility with correlations, bad-year estimate; assumptions labelled |
| 31 | Market simulator | Deferred | Tier 2 (P6) |
| 32 | Behavioural finance simulator | Planned P5 | Tier 1 |
| 33 | Investment decision laboratory | Planned P5 | Tier 1 |
| 34 | Financial statement laboratory | Deferred | Tier 2 (P6) |
| 35 | Corporate finance laboratory | Deferred | Tier 2 (P6) |
| 36 | Macroeconomic laboratory | Deferred | Tier 2 (P6) |
| 37 | Personal finance laboratory | Planned P5 | Tier 1 |
| 38 | Investment Policy Statement | Planned P5 | Self-scored rubric |
| 39 | Curriculum structure | In progress P4 | First 20 + Level 2 economics done (26 lessons); Levels 5-12 remainder in coming tranches |
| 40 | Final competency level | Planned P4-P5 | Thresholds are configuration |
| 41 | Final exam | Planned P5 | Held-out hand-authored pool |
| 42 | Personal progress measurement | Done P2 | Baseline stored permanently; dashboard computes composite, retention, calculation accuracy, calibration, abandonment; transfer/decision pools pending |
| 43-46 | v1 KPI catalogue | Removed | Subsumed into §42; KPI 6 anchors survive as the self-score scale |
| 47 | Audio effectiveness experiment | Removed | n=1 |
| 48 | Visual effectiveness experiment | Removed | n=1 |
| 49 | Exercise effectiveness experiment | Removed | n=1 |
| 50 | User retention metrics | Removed | No population |
| 51 | Activation KPI | Removed | No population |
| 52 | Course completion KPI | Removed | No population |
| 53 | Real-world financial competence | Removed | Subsumed: labs capture what the learner chooses to enter |
| 54 | Longitudinal outcome | Removed | Subsumed into §42 items 2-6 |
| 55 | Unseen assessment items | Kept | Folded into §41 |
| 56 | ROI framework | Removed | No budget, no population |
| 57 | Composite competency score | Kept | Weights live inside §42 |
| 58 | Learning dashboard | Kept | Folded into §42; built P2 |
| 59 | ADHD product metrics | Removed | Except the single abandonment number in §42 |
| 60 | Attention friction metric | Removed | Survives as the §42 usability number |
| 61 | Product health matrix | Removed | |
| 62 | Onboarding | Done P2 (minimal) | Baseline-first card on home; preference questions omitted (single learner) |
| 63 | Baseline assessment | Done P2 | 12 auto-scored items across domains; answers never revealed |
| 64 | Personalized curriculum | Done P1 | Prerequisite gating in curriculum engine |
| 65 | Adaptive difficulty | Planned P4 | Difficulty tiers in concept schema |
| 66 | Crystallisation loop | Done P1 (partial) | Exposure-encoding-retrieval-application-spacing live; interleave/transfer/teach-back P2+ |
| 67 | Teach-back mode | Planned P2 | Self-scored |
| 68 | Financial argument analysis | Planned P4 | |
| 69 | Source system | Done P1 | Sources with dates in lesson frontmatter, validated in CI |
| 70 | Data policy | Done P1 | Static datasets only; abstraction in lib/market-data (P3) |
| 71 | AI tutor | Deferred | Interface behind an off feature flag; no calls, per C1 |
| 72 | Technology stack | Done P1 | Static export, Pages, IndexedDB, Gist; Recharts/shadcn arrive P2-P3 |
| 73 | Application structure | Done P1 | |
| 74 | Data structures | Done P1 | Content files + IndexedDB schema in lib/db.ts |
| 75 | Recorded events | Done P1 | Attempts and lesson state only; no funnel analytics |
| 76 | Accessibility | Planned P2 | Keyboard/contrast baseline in P1; full pass with design system |
| 77 | Design language | Planned P2 | P1 is deliberately minimal per revision §13 |
| 78 | Gamification limits | Done P1 | Nothing beyond progress and mastery exists |
| 79 | MVP scope | Done | All §79 items live; tutor is interface-only behind an off flag, as specified |
| 80 | First 20 lessons | Done P2 (20 of 20) | Full first-20 curriculum live in the condensed style |
| 81 | Build sequence | Done (v2) | Revised phases |
| 82 | Testing requirements | Done P1 (partial) | Unit tests green; integration/e2e grow P2 |
| 83 | Calculation accuracy | Done P1 | Reference values for mastery/FSRS math; finance calc suites arrive with P3 simulators |
| 84 | Content quality control | Done P1 | Mechanical checks in CI; correctness is the owner's sign-off |
| 85 | Product success test | Removed | Learner thresholds remain in §40/§42 |
| 86 | Final product principle | Done (v2) | |
| 87 | Execution instruction | Done (v2) | |

## Residual conflicts and interpretations

Conflicts the revision does not fully resolve, with the interpretation applied. Flag disagreement on the PR and the interpretation will be changed.

1. **Level 6 tier membership.** The Tier 1 level list omits Level 6, but the Tier 1 reductions define a reduced Level 6 and Tier 2 claims only its valuation ratios. Interpretation: the reduced Level 6 set (stocks, equity ownership, market capitalization, earnings, dividends, growth vs value) is Tier 1; the ratios are Tier 2.
2. **Level 13 remainder.** Tier 2 names only leverage, options, futures, and short selling from Level 13; the other items (factor investing, REITs, commodities, inflation-linked bonds, international diversification, currency risk) appear in neither tier. Interpretation: all of Level 13 is Tier 2, with the four named instruments last. REITs and commodities still appear as portfolio-lab asset classes in Tier 1 without dedicated lessons.
3. **Resolved by v2.1 - "private" podcast feed.** The feed no longer exists; the conflict is moot. Original text: A feed served by GitHub Pages from a public repository is unlisted, not private: anyone with the URL can subscribe, and the audio files are public regardless. Interpretation: acceptable, because the feed contains only course audio and no learner data. If actual access control is required, the feed must be deferred (C1 leaves no free way to serve authenticated audio to podcast apps).
4. **Final exam pool secrecy in a public repository.** The held-out pool is a JSON file the learner can open on github.com. Enforcement is interface-level only (never displayed in the app before the exam) plus self-discipline. Accepted at n=1 per revision §7.
5. **Gist encryption key.** Q10 requires encryption at rest; the revision's backup section does not name a key. Interpretation: a learner-chosen passphrase, PBKDF2-derived AES-GCM key, passphrase stored on-device only. A forgotten passphrase makes the Gist copy unrecoverable; the unencrypted manual file export is the fallback and its custody is the learner's.
6. **Abandonment metric.** Revision §4 deletes v1 §60 and §5 re-adds the same measurement as a single usability number. Interpretation: keep it, as one number, computed from lesson state, never displayed as a streak or judgment.
7. **Public repository requirement.** Free GitHub Pages requires a public repository. The current repository is public: consistent. Course content is therefore public; learner data never enters the repository.
8. **Resolved by v2.1 - iOS lock-screen playback.** No audio exists; the concern is moot. Original text: Still not guaranteed by any spec change; the podcast feed is the reliable path, the PWA path is best-effort and verified on the owner's device during Phase 1 evaluation.
