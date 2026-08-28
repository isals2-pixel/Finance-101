# Changelog

## 2026-08-28 - Phase 5, batch 6: e2e tests and accessibility baseline

- Playwright e2e smoke suite (§82) over the real static export: home and session modes, the lesson flow's enforced stage order (prediction locks before the model answer), every top-level page, and the dated tax notice. Runs locally against the pre-installed browser and as a new CI job gating the Pages deploy.
- Accessibility baseline (§76): skip-to-content link, main/nav landmarks, a visible focus ring on every focusable element, reduced-motion support. §77 closed as minimal-by-design per revision §13.

## 2026-08-28 - Phase 5, batch 5: argument analysis, misconception surfacing, adaptive practice

- Financial argument analysis (§68) at /labs/arguments: five real-world-shaped pitches (the hot-fund newsletter, the 100-percent-stocks forum post, the "fees are noise" adviser, the concentration brag, the never-sell tax phobia) where the learner must name the central flaw - each built on true premises and one broken inference. Scored into §42 decision quality.
- Misconception database surfaced (§24): every glossary entry now discloses its concept's authored misconceptions with corrections.
- Adaptive practice (§65, light): transfer sessions order items weakest-tracked-concept first, shuffled within groups.

## 2026-08-28 - Phase 5, batch 4: session modes and teach-back

- Variable session length (§16) and the minimum viable day (§17): the home screen offers quick / session / deep modes. Quick shows exactly one action - a due review, else one transfer item - with explicit permission to stop after it; deep adds practice, labs and the exam. The choice persists on-device.
- Teach-back (§67) at /teachback: explain a learned concept as if teaching it (weakest mastery offered first), explanation locked before the lesson's one-sentence model appears, then 0-5 self-score with anchors - recorded as a self-reported review explanation feeding FSRS and mastery.

## 2026-08-28 - Phase 5, batch 3: personal finance lab and IPS builder

- Personal finance laboratory (§37) at /labs/personal: savings rate and reserve target, repay-vs-invest with the guaranteed-return comparison, and a retirement-gap projector (capital needed, required monthly saving now versus a 15-year-later start) - all over lib/finance, including a new reference-tested `requiredMonthlyContribution` inverse.
- Investment Policy Statement builder (§38) at /ips: objective, horizon, allocation, rebalancing band, automated contribution, change conditions; self-scored against a six-item rubric; stored only on-device in the learner record (included in Gist backup like all learner data), copyable as text.

## 2026-08-28 - Phase 5, batch 2: behavioural simulator and decision lab

- Behavioural finance simulator (§32) at /labs/behaviour: one scripted market cycle, six bias-triggering decisions against the written plan (herding at the top, panic in the crash, the band-rule trade, dead-cat-bounce narratives, ranking chasing, the inherited loser). Deviations are priced in euros relative to the plan and named by bias; a run report lists which biases got a vote.
- Investment decision laboratory (§33) at /labs/decisions: six goal-first scenarios decided with the lesson 20 checklist (deposit-in-2-years, retirement fund pick, the guaranteed-12-percent pitch, crash forecast, PEA vs CTO, TER vs tracking difference).
- Both record as stage `decision`, bringing the §42 composite's decision-quality component (weight .15) live - the last placeholder component.
- Data integrity and metric wiring covered in CI (tests/labs.test.ts).

## 2026-08-28 - Phase 5, batch 1: transfer practice and the final exam

- Transfer pool (§22): 24 auto-scored novel-scenario items tagged by concept, served six at a time at /practice with rationale after each answer. Attempts record as stage `transfer` and now feed both the per-concept mastery transfer component (weight .15) and the §42 composite's transfer component (weight .20) - both previously renormalised away for lack of evidence.
- Final exam (§40, §41, §55): 30 held-out, hand-authored items across ten domains at /exam; one sitting, pass mark 80% (configuration), answers never revealed, per-domain scores point back to review. Result stored on the learner record.
- Pool integrity in CI: concept references, option/answer consistency, tolerances, and arithmetic re-derivation of every numeric answer.

## 2026-08-26 - Phase 4, batch 7: personal finance and French tax (lessons 47-50) - Tier 1 curriculum complete

- Level 12 completed: the personal finance base (emergency fund via regulated livrets, debt ordering, insurance), pensions and the retirement gap (répartition, Agirc-Arrco, PER trade-offs), taxation of investments (PFU at 31.4 % since January 2026 - 12.8 % + 18.6 % after the CSG rise - realized-vs-unrealized timing, Acc-fund efficiency), and the wrappers (PEA, CTO, assurance-vie with their clocks and 2026 rates).
- French tax content is hand-written, source-linked to official pages (Service-Public, impots.gouv.fr, economie.gouv.fr) and dated: a new `taxRulesVerifiedAt` frontmatter field renders an education-not-advice notice with the verification date on tax lessons (SPEC §39), enforced by a CI test.
- Four concepts with misconceptions, four visuals, exercise arithmetic checked in CI.
- **All twelve Tier 1 curriculum levels are now complete: 50 lessons.**

## 2026-08-26 - Phase 4, batch 6: behavioural finance (lessons 44-46)

- Level 11 completed, covering the eleven specified biases in three lessons: loss aversion / panic selling / disposition effect; overconfidence / confirmation bias / anchoring / narrative fallacy (with calibration as the counter-programme); herding / FOMO / recency bias / performance chasing (with the investor-return gap).
- Three concepts with misconceptions, three visuals (loss asymmetry curve, activity-vs-returns bars, chase cycle), exercise arithmetic checked in CI.

## 2026-08-26 - Phase 4, batch 5: asset allocation (lessons 41-43)

- Level 10 completed: asset allocation (strategic vs tactical, risk tolerance vs capacity, horizon, the lowest-cap rule), rebalancing and sequence of returns (drift, bands, withdrawal-phase order risk), building the portfolio (liquidity-allocation-funds-rules construction order, the two-fund implementation).
- Three concepts with misconceptions, three visuals (allocation dials, rebalancing cycle, construction blueprint), exercise arithmetic checked in CI.

## 2026-08-26 - Phase 4, batch 4: portfolio theory (lessons 38-40)

- Level 9 completed: measuring risk and return (volatility, volatility drag), correlation and portfolio risk (offsetting mechanism, crisis correlations, two-layer diversification), risk-adjusted return (Sharpe ratio, efficient frontier, beta/CAPM).
- Three concepts with misconceptions, three visuals (volatility-drag paths, correlation-mix curve, efficient frontier), exercise arithmetic checked in CI.

## 2026-08-26 - Phase 4, batch 3: fixed income depth and ETF structure (lessons 32-37)

- Level 7 completed: yield and bond pricing, duration, credit risk and ratings.
- Level 8 completed: passive vs active with replication methods, tracking difference, fund structure (UCITS, domicile, Acc/Dist).
- Six concepts with misconceptions, six visuals, exercise arithmetic checked in CI.

## 2026-08-26 - Phase 4, batch 2: market mechanics and equities (lessons 27-31)

- Five lessons completing the reduced Levels 5 and 6: exchanges and brokers, liquidity and the bid-ask spread, market and limit orders, earnings, growth vs value.
- Six concepts added with misconceptions; five visuals (broker-exchange chain, order book, order-fill comparison, earnings waterfall, growth/value compare).
- Exercise arithmetic checked in CI.

## 2026-08-26 - Phase 4, batch 1: Level 2 economics (lessons 21-26)

- Six lessons: supply and demand, GDP, monetary policy, fiscal policy, business cycles, exchange rates - the complete reduced Level 2 of SPEC_V2 §39 (inflation and interest were covered in Level 1).
- Six concepts added to the graph with misconceptions; six new visuals (supply-demand cross, GDP components, policy transmission chain, fiscal flows, cycle wave, FX seesaw).
- Sources verified: INSEE (PIB), Banque de France (taux directeurs, ABC de l'économie), ECB.
- Exercise arithmetic checked in CI.

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
