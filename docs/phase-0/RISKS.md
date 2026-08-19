# Risks

Status: Phase 0 analysis. Ordered by expected impact on the section 85 success criteria.

## R1 - Content production is the critical path, not code

164 lessons, each requiring an audio script, visual, retrieval questions, exercise, sources, and mastery criteria, is an authoring effort several times larger than the engineering effort. The first 20 lessons alone (Phase 2) are roughly 3 hours of finished audio plus question banks.

Mitigation: content authoring starts in Phase 1 as a parallel track. LLM-drafted scripts and questions with human review against the section 84 checklist. The content pipeline makes review mechanical where possible. Curriculum ships level by level, and the MVP is complete at 20 lessons by design (section 79).

## R2 - Financial and tax accuracy

Incorrect financial content in an education product defeats its purpose, and French tax rules (PEA, CTO, assurance-vie) change with finance laws. The specification requires versioned, source-linked tax content but does not name a reviewer.

Mitigation: every substantive claim carries a source with a verification date (section 69). Tax rules live in versioned TaxRule records with validity windows and display their as-of date in the UI. A disclaimer distinguishes education from advice on every tax and decision surface. Open question Q4 asks who performs expert review.

## R3 - LLM grading reliability

Explanation quality, teach-back, error classification of free text, and IPS grading all depend on LLM rubric scoring. Inconsistent grading corrupts mastery scores, review scheduling, and the competency KPIs built on them.

Mitigation: rubrics are explicit and versioned. A hand-scored calibration set gates Phase 5. Grading calls log rubric, response, and score for audit. Deterministic grading is preferred wherever the question type allows it, and free-text items feed mastery with a capped weight until calibration is demonstrated.

## R4 - Single-learner statistics

The KPI framework (sections 42-61) and the A/B experiments (sections 47-49) are written for populations. The primary deployment is one learner. Between-subject designs are impossible and within-subject comparisons on one person have low statistical power.

Mitigation: experiments are within-subject with topic-matched pairs, reported as descriptive trends rather than significance claims. KPIs remain valid as personal progress measures. The instrumentation is built so it generalizes if the user base grows.

## R5 - Spaced-repetition and mastery correctness

A subtle scheduling bug shows up as poor 30-day retention months later and is hard to attribute.

Mitigation: FSRS rather than an invented algorithm, property-based and reference-value tests on state transitions, and a simulated-learner harness that fast-forwards time in tests to verify schedules and mastery trajectories over simulated months.

## R6 - Background audio on mobile web

The learner's core mode is listening with the screen locked. Mobile browsers, iOS Safari in particular, restrict background playback and lock-screen controls for web apps, and behavior changes across OS versions.

Mitigation: Media Session API plus PWA installation gives the best available web behavior. This is verified on real devices early in Phase 2, and results are documented. If web playback proves unreliable on the learner's device, the fallback is exporting lesson audio as a private podcast feed, which native podcast players handle well. The native app remains out of scope.

## R7 - Scope discipline

The specification describes roughly ten interconnected subsystems. Building broad and shallow would produce a demo, not a learning system, and would violate the phase gates in section 81.

Mitigation: strict phase sequencing with exit criteria, the MVP boundary of section 79, and no phase starts before the previous phase's tests pass.

## R8 - TTS quality and cost

Audio is the primary medium, so flat or error-prone TTS directly harms the product. Rendering 164 lessons at high quality has a real cost, and scripts with numbers and finance jargon are exactly where TTS mispronounces.

Mitigation: provider decision is open question Q1. Scripts use SSML-friendly formatting for numbers and pauses. A pronunciation lexicon covers recurring terms. Audio is re-renderable per lesson from the stored script, so provider switches are cheap.

## R9 - Market and ETF data licensing

Real ETF names, index data, and historical returns carry licensing constraints for redistribution.

Mitigation: MVP uses static, clearly sourced datasets and fictionalized ETF examples in exercises where licensing is unclear (the section 33 exercise works identically with realistic fictional funds). The market-data abstraction isolates any later licensed feed.
