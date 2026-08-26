# Changelog

## 2026-08-26 - MVP complete: lessons 12-20, labs, dashboard, baseline

- Lessons 12-20 (stocks, bonds, ETFs, indexes, diversification, risk, fees, long-term investing, the decision framework): the §80 first-20 curriculum is complete, each lesson with prediction, retrieval, exercise, visual, and sources.
- Interleaved review: due concepts round-robin across curriculum levels (§29).
- Progress dashboard (§42): composite competency score over available components, delayed retention, calculation accuracy, confidence calibration, self-reported share, per-concept mastery with weakest-area action, abandonment number.
- Labs: compound interest, inflation, and fee simulators plus the basic portfolio laboratory (expected return, volatility with correlations, bad-year estimate) over reference-tested lib/finance.ts; static assumptions clearly labelled.
- Baseline assessment: 12 auto-scored items, score stored permanently, answers never revealed; home prompts for it first.
- Glossary generated from concepts and their teaching lessons. Navigation extended.
- 51 tests green, including reference values for all financial calculations (§83) and metrics.

## 2026-08-26 - Phase 2, batch 2: lessons 7-11

- Five new lessons: inflation, nominal vs real returns, opportunity cost, economics vs finance vs accounting, what is a financial market. Same structure and style as batch 1; sources verified (ECB, Banque de France, AMF).
- Concept graph: added economics-finance-accounting (level 2) and financial-markets (level 5), with misconceptions; opportunity-cost misconception filled in.
- Five new visuals: purchasing-power decay curve, nominal/real split, opportunity fork, three lenses, market flows.
- Batch 2 exercise answers checked arithmetically in CI.

## 2026-08-26 - Phase 2, batch 1: lessons 2-6

- Five new lessons in the condensed style (bodies 650-820 words): income/expenses/cash flow, assets and liabilities, net worth, interest, compound interest. Each with prediction, three retrieval items (free recall, classification, short answer with confidence), a calculation exercise, and verified sources (Banque de France, INSEE, ECB).
- Five new visuals: cash-flow diagram, assets/liabilities columns, net-worth bar, simple-interest timeline, compound-vs-simple curve.
- Content tests extended: every lesson body inside the word band, every visual id resolves, batch exercise answers checked arithmetically.

## 2026-08-26 - Lesson style: half the length

- Owner directive: lessons were too verbose. Leading principle from now on: short, concise, concrete, simple.
- Word budgets halved everywhere they are defined: body target 600-900 words (was 1,400-1,800), per-section budgets halved in SPEC_V2 §10, CONTENT_SCHEMA.md, CONTENT_PIPELINE.md, the template, and the CI bounds (500-1100).
- Lesson 1 rewritten from 1,390 to 773 words with all concepts, definitions, the worked example, and misconceptions kept; frontmatter model answers tightened.

## 2026-08-26 - Specification v2.1: audio removed

- Owner decision (docs/revisions/2026-08-26-audio-removal.md): the NotebookLM audio workflow is dropped; lessons are read-only text in the app.
- Lesson flow is now read -> predict -> visualise -> retrieve; completion gate unchanged.
- Removed: audio player and audio-only mode, NotebookLM standing instruction and export command, podcast feed, public/audio, audio frontmatter fields, Media Session integration.
- Updated for congruence: SPEC_V2.md (now v2.1), REQUIREMENTS.md (rows 7, 8, 9, 10, 11, 12, 18; residual conflicts 3 and 8 closed), ARCHITECTURE.md, CONTENT_SCHEMA.md, CONTENT_PIPELINE.md, LEARNING_SCIENCE.md, README.md, lesson template and lesson 1, types, content validation, lesson flow components, home card, CI workflow.
- FSRS, mastery, self-scoring, confidence capture, Gist backup, and all tests unchanged.

## 2026-08-21 - Specification v2.0 and Phase 1

- Applied the August 2026 revision (docs/revisions/2026-08-spec-revision.md) to produce docs/SPEC_V2.md. Hard constraints: zero budget, NotebookLM-produced audio, single user, static GitHub-only stack.
- Added docs/REQUIREMENTS.md (per-section status and residual conflicts), ARCHITECTURE.md, LEARNING_SCIENCE.md, CONTENT_SCHEMA.md, CONTENT_PIPELINE.md, METRICS.md.
- Marked the Phase 0 documents (docs/phase-0/) as superseded where the revision changed them.
- Phase 1 backbone: Next.js static export, GitHub Actions deploy to Pages, podcast feed generation, IndexedDB schema (single learner), FSRS scheduling via ts-fsrs, per-concept mastery scoring, encrypted Gist backup/restore/delete, source pack export command, content validation in CI.
- Content: source pack template, standing NotebookLM instruction, Level 1 concept graph, and lesson 1 "What is money?" complete (source pack, prediction, retrieval, exercise, visual, sources). Audio pending NotebookLM production - the lesson page shows this honestly.

## 2026-08-19 - Phase 0

- Specification v1.0 analysis: proposed architecture, data model, implementation plan, risks, open questions (docs/phase-0/). No code.
