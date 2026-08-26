# Finance Academy - Specification v2.0

Date: 2026-08-21. Supersedes v1.0 and docs/phase-0/OPEN_QUESTIONS.md. Produced by applying docs/revisions/2026-08-spec-revision.md to v1.0 in full. Section numbers follow v1.0 so cross-references remain valid. Removed sections keep their number with a removal note. REQUIREMENTS.md tracks the status of every section.

## 0. Hard constraints

These override any conflicting requirement below.

- **C1 - Zero budget.** No paid API, hosting, text-to-speech, or database. Everything runs on a free tier or on the owner's machine. Features that cannot fit this limit are deferred, not approximated.
- **C2 - Audio produced outside the application.** Lesson audio is generated manually in Google NotebookLM (renamed Gemini Notebook, July 2026) from source packs written for that purpose. The application stores and plays uploaded audio files. It never synthesizes speech.
- **C3 - One user, no accounts.** No sign-up, password, session management, or consent flows.
- **C4 - Static, GitHub only.** A static site with no server and no server-side database, hosted on GitHub Pages from the same repository that holds code, content, and audio. Every part of the toolchain is a GitHub feature.

## 1. Purpose

The application has one user: its owner. Its purpose is that this single learner can make autonomous, well-informed financial decisions, understand core financial concepts, and hold durable financial literacy. It is not a product: no cohorts, no other users, no growth objectives, no engagement targets.

It teaches personal finance, economics, financial markets, investing, portfolio theory, ETFs, asset allocation, behavioural finance, taxation, and financial decision-making (accounting and corporate finance are optional Tier 2, section 39). After completing the curriculum the learner can independently:

1. understand fundamental financial and economic concepts
2. explain how financial markets work
3. understand ETFs and index investing
4. evaluate ETF characteristics
5. understand risk and return
6. construct and justify a diversified long-term portfolio
7. understand the effect of fees, inflation and taxation
8. reason about market events without simplistic rules
9. recognise common investment mistakes and financial misinformation
10. create and defend a personal Investment Policy Statement
11. make financially rational decisions in realistic scenarios

The application is educational. It must not present itself as a financial adviser and must never imply certainty about future returns.

## 2. Core product principle

The product is a learning system, not a finance encyclopedia. The central design question: what must the learner be able to understand, retrieve, apply and transfer in order to make better financial decisions?

Do not optimise for lessons completed, definitions memorised, time in the application, gamification, or visual complexity. Optimise for delayed retention, conceptual understanding, ability to explain, ability to apply to unfamiliar situations, decision quality, financial reasoning, and long-term behavioural competence.

## 3. Target user

The owner: adult, highly analytical, beginner in formal finance, capable of advanced concepts when scaffolded, approximately EUR 1,000/month disposable investment capacity, long-term horizon, primarily interested in diversified ETF investing. Prefers learning by listening while doing other activities, benefits from short units, frequent activity changes, and immediate application, and disengages during long passive screen sessions. The application must not infantilise the learner: intellectually rigorous, minimal cognitive friction.

## 4. Learning science foundation

### 4.1 Retrieval practice

Activities repeatedly require retrieval from memory, not recognition: free recall, short answer, prediction, explanation, scenario decisions, calculation, concept comparison. Multiple choice is never the primary format.

### 4.2 Spaced practice

Concepts return at increasing intervals. Initial ladder: immediately, 1, 3, 7, 14, 30, 60, 120 days. The scheduler (FSRS, section 28) adapts: repeated failure shortens intervals, successful retrieval lengthens them.

### 4.3 Interleaving

Once foundations exist, review sessions mix categories (stocks, bonds, ETFs, inflation, rates, portfolio construction, behavioural finance) to force discrimination between concepts.

## 5. Generative learning

The learner frequently generates knowledge: explain in own words, predict before seeing the answer, compare concepts, generate examples, identify errors, explain why an answer is wrong, construct portfolios, defend decisions. The application explicitly distinguishes recognition, recall, application, transfer, and decision-making.

## 6. Cognitive load design

Minimise decorative animation, unnecessary text, irrelevant images, excess navigation, competing instructions, long text blocks, interface complexity. Manage intrinsic complexity through segmentation, prerequisites, progressive difficulty, worked examples, pre-training. Promote generative processing through prediction, explanation, retrieval, application. Mayer's Cognitive Theory of Multimedia Learning guides the combination of narration and visuals.

## 7. Auditory-first design

Audio is the primary learning medium, based on the owner's strong demonstrated preference and adherence advantage for audio-based learning (not a claim about a fixed "learning style"). Audio is the lowest-friction way to consume new material. Under C2, all audio is produced in NotebookLM per section 10.

## 8. Lesson length

Default 7-10 minutes, allowed 5-12. Never a mandatory 30-60 minute lesson; complex topics are decomposed into lesson series (bonds become eight short lessons, not one long one). NotebookLM runtime is steered by source pack word count, calibrated empirically (section 10).

## 9. Lesson structure

Eight steps split across two media, because NotebookLM produces a steered conversation, not a controlled script. In-audio pauses and exercises cannot be relied on.

In the audio, driven by the source pack:

1. Hook - a concrete problem or paradox
2. Concept - explained intuitively
3. Formal definition and terminology
4. Worked example with numbers
5. Connection to previously learned concepts

In the application, as a single flow beginning automatically when the audio ends:

6. Prediction - one question answered before any explanation is shown
7. Visual mental model
8. Retrieval - recall or explanation without notes

The lesson is not marked complete until step 8 is submitted. No audio file carries timestamp markers. Each lesson records whether its visual is required for comprehension or optional reinforcement.

## 10. Source packs and audio production

Replaces v1.0 section 10 (audio script design). The source pack is the document that produces the audio and is the single most important content asset. One per lesson.

### Production workflow

1. Export the lesson source pack body as a standalone text file (`npm run export:pack -- <lesson>`).
2. Create a new NotebookLM notebook containing that single source (one source per notebook, deliberately - extra sources lengthen and dilute the audio).
3. Select Audio Overview, apply the standing custom instruction stored at `/data/curriculum/audio-instruction.md` (kept under 1,500 characters), generate.
4. Download (.wav), convert to mono .mp3 under 8 MB, add to the repository, register on the lesson.
5. The application stores the file reference, duration, and generation date.

The free tier limits generations per day: plan batches. Length is calibrated empirically: produce three lessons, measure runtimes, adjust source pack word count, record the calibrated count in CONTENT_PIPELINE.md. Verify current NotebookLM behavior before each batch.

### Source pack format

Markdown at `/data/curriculum/lessons/NN-slug.md`. Footer data in frontmatter (parsed by the application, excluded from export); body in markdown (exported for NotebookLM). Target 1,400-1,800 words, subject to calibration.

Header: lesson number and title, the one sentence a learner should be able to say afterwards, prerequisite concepts by name, concepts introduced by name.

Body, in order:

1. Opening problem - 100-150 words, concrete situation with a non-obvious answer
2. Intuitive explanation - 400-600 words, plain language, one idea per paragraph
3. Formal definitions - 100-200 words, one sentence per term
4. Worked example - 300-400 words, real EUR numbers, every arithmetic step written out, result interpreted in words
5. Connections - 150-250 words, relation to named earlier concepts
6. Common misconceptions - 100-200 words, two or three, stated then corrected

Frontmatter footer: retrieval questions with model answers, the prediction question, the practical exercise, sources with publication dates, mastery criteria.

Scripts sound natural when spoken: short sentences, no dense lists, jargon defined immediately, concrete examples. (Pauses and in-audio prediction prompts are excluded - they live in the application flow.)

## 11. Audio player

Supports play, pause, speeds 0.75/1.0/1.25/1.5/1.75/2.0, 15- and 30-second rewind, resume position, completion tracking, transcript (the source pack body), bookmark, and "review this concept". Media Session integration for lock-screen controls where the platform supports them. In parallel, a podcast RSS feed generated from the repository (section 72) provides offline download, lock-screen playback, speed control, and resume in any podcast application; retrieval is then done afterwards in the web application.

## 12. Audio-only mode

A dedicated mode showing only lesson title, progress bar, audio controls, minimal context, optional transcript. No dashboard elements. Start a lesson and put the phone away.

## 13. ADHD-optimised design

Designed for difficulty sustaining attention on passive material, task-initiation friction, boredom with repetition, attraction to novelty, benefit from feedback, short bounded tasks, and visible progress. No childish gamification. Use: clear next action, visible endpoint, short sessions, predictable structure, immediate feedback, varied task formats, novelty through scenarios, progress indicators, low-friction restart, automatic resumption, minimal setup.

## 14. No infinite feed

No infinite scrolling, social feed, recommendation feed, or endless library. The home screen answers exactly: what should I learn today, why, how long will it take, what do I need to review.

## 15. Daily session

Default: TODAY'S 10 MINUTES. Learn (8-minute audio), Retrieve (2-minute recall), optional Apply (3-5 minute exercise).

## 16. Variable session length

5-minute mode (one concept plus one recall question), 10-minute mode (normal lesson), 20-minute mode (lesson plus retrieval plus exercise), optional deep dive. A missed day must not become an abandonment event.

## 17. Minimum viable day

3 minutes: one previously learned concept, one retrieval question, one application. Objective is continuity. Never display messaging implying failure for a missed day.

## 18. Visual design

Every lesson has at least one meaningful visual (diagram, chart, flowchart, timeline, financial statement, portfolio diagram, causal model, simulation). No decorative stock photography. The visual must explain something. Per section 9, the visual follows the audio as step 7; each lesson marks it required or reinforcement.

## 19. Multimedia principles

Never display a paragraph while narrating the same paragraph. Visuals use diagrams, labels, keywords, arrows, progressive highlighting. Narration explains, visuals represent relationships, text provides labels and essential terminology. Follows coherence, signalling, segmenting, modality, and contiguity principles.

## 20. Concrete application requirement

Every major concept has at least one practical exercise that requires doing: inflation (calculate real purchasing power), compounding (compare contribution vs growth over 20 years), bonds (yield-change effects), ETFs (compare two funds), diversification (construct and compare two portfolios), fees (long-term TER impact), macro (trace a rate change). Tier 2 additions: accounting (interpret a balance sheet), corporate finance (NPV decision).

## 21. Exercise types

At least eight: calculation, prediction, explanation, classification, comparison, error detection, decision scenario, portfolio construction.

## 22. Transfer exercises

At least 30 percent of assessment questions use unfamiliar scenarios, requiring transfer of the concept rather than repetition of the memorised phrase.

## 23. Error analysis and written-answer scoring

When an answer is incorrect, classify the error: factual misunderstanding, terminology confusion, calculation error, causal reasoning error, overgeneralisation, missing prerequisite, misconception, careless error. Then prescribe remediation.

Automatic classification applies to automatically scored item types only (multiple choice, numeric, classification, calculation), using per-item error maps.

Written answers (explanation, teach-back, IPS) are scored by structured self-assessment, because C1 removes model grading and a mis-scored answer would corrupt mastery and scheduling:

1. The learner writes the answer with no reference material visible.
2. The answer is submitted and locked; it cannot be edited afterwards.
3. The model answer and rubric are displayed beside the learner's answer.
4. The learner self-scores 0-5 using the section 43 KPI 6 anchors.
5. Answer and self-score are stored; self-scores are flagged as self-reported wherever displayed.

Self-scoring is valid only because the answer locks before the model answer appears; the interface enforces this. For written answers the learner selects the error type from the list above.

## 24. Misconception database

A structured database of common financial misconceptions ("ETF = diversified by definition", "low P/E = cheap", "past return predicts future return", "high dividend yield = good investment", "bond = safe", "cash = no risk", "index fund = no risk", "more diversification is always better", "rates rising always means stocks fall", "an accumulating ETF never has tax implications"). The learner is periodically challenged on these.

## 25. Knowledge graph

Explicit concept dependencies (e.g. inflation -> real return -> interest rates -> bond yields -> asset valuation -> portfolio construction). Every concept specifies prerequisites, dependents, related concepts, common misconceptions, and assessment methods. The graph is a validated DAG. Tier 2 concepts are optional nodes; no Tier 1 concept may list a Tier 2 concept as a prerequisite.

## 26. Mastery model

Every concept has a mastery score 0-100. It is a per-concept score, distinct from the single composite Finance Competency Score in section 42. Explicit weights (documented and tunable in one configuration module, see LEARNING_SCIENCE.md):

- initial learning 10
- immediate retrieval 25
- delayed retrieval 30
- application 20
- transfer 15

Each component is a recency-weighted accuracy in [0,1]; missing components renormalise the weights. A calibration penalty of up to 10 points (mean absolute gap between stated confidence and accuracy) is subtracted. Error rate enters through the component accuracies. Lesson completion alone contributes zero mastery.

## 27. Confidence calibration

Selected questions ask "how confident are you?" on five bands (0-20, 21-40, 41-60, 61-80, 81-100 percent), captured before the answer is revealed. Track accuracy against confidence; identify overconfidence, underconfidence, calibration. Especially important in investing.

## 28. Spaced repetition engine

FSRS (Free Spaced Repetition Scheduler) via an established open-source implementation. Per-concept state: stability, difficulty, interval, last review, next review, success and failure counts. The mapping from item outcomes and 0-5 self-scores to FSRS recall grades is defined in LEARNING_SCIENCE.md. No invented scoring logic without documentation.

## 29. Interleaved review

Review sessions mix concepts across levels (e.g. inflation, ETF tracking difference, bond duration, dividends, diversification) so the learner must identify the relevant mental model.

## 30. Portfolio laboratory (Tier 1)

Simulated portfolio environment: global equities, US equities, European equities, emerging markets, government bonds, corporate bonds, cash, REITs, commodities. Allocation changes allowed. Displays allocation, expected-return assumptions, historical volatility, correlation, estimated portfolio volatility, drawdown, fees. Assumptions clearly labelled, from static datasets (section 70).

## 31. Market simulator (Tier 2)

Simulated environments (expansion, inflation shock, recession, rate shock, equity crash, bond selloff, stagflation, strong growth, deflationary shock); the learner decides, then consequences are explained. Built last or not at all.

## 32. Behavioural finance simulator (Tier 1)

Scenarios such as a 20 percent drawdown with choices (sell, hold, rebalance, increase contributions), then explanation of the behavioural bias, financial implications, and conditions under which each action could be rational. No universally correct answer assumed.

## 33. Investment decision laboratory (Tier 1)

Realistic ETF-selection exercises (TER, fund size, replication, distribution policy, index) where the correct answer depends on stated objectives. Teaches how to compare, not one "best ETF".

## 34. Financial statement laboratory (Tier 2)

Simplified statements; learner analyses revenue through free cash flow and judges financial health. Built last or not at all.

## 35. Corporate finance laboratory (Tier 2)

NPV, IRR, cost of capital, debt vs equity, dividends, buybacks; calculate and interpret. Built last or not at all.

## 36. Macroeconomic laboratory (Tier 2)

Causal-chain exercises (policy rate -> borrowing cost -> demand -> inflation -> yields -> valuation -> implications). No deterministic market rules. Built last or not at all.

## 37. Personal finance laboratory (Tier 1)

Simulated personal balance sheet: income, expenses, savings, debt, mortgage, emergency reserve, investments, pension, insurance. Outputs: net worth, savings rate, liquidity, debt burden, investment rate, financial resilience. Data handling per section 74.

## 38. Investment Policy Statement (Tier 1)

Final project: objectives, horizon, liquidity requirements, emergency reserve, risk capacity, risk tolerance, target allocation, ETF selection criteria, contribution schedule, rebalancing policy, tax considerations, behavioural rules, conditions for changing strategy. Graded against a rubric by the section 23 self-assessment procedure.

## 39. Curriculum structure

Two tiers over the original 13 levels (~164 concepts).

**Tier 1 - core, required (~109 concepts):**

- Level 1 Financial foundations: money, income, expenses, assets, liabilities, net worth, cash flow, interest, compounding, inflation, real vs nominal returns, opportunity cost
- Level 2 Economics (reduced): supply and demand, GDP, inflation, monetary policy, fiscal policy, interest rates, business cycles, exchange rates
- Level 5 Markets (reduced): markets, exchanges, brokers, liquidity, bid/ask spread, market orders, limit orders
- Level 6 Equities (reduced): stocks, equity ownership, market capitalization, earnings, dividends, growth vs value
- Level 7 Fixed income: bonds, coupons, yield, yield to maturity, bond pricing, duration, credit risk, interest-rate risk, government bonds, corporate bonds, investment grade, high yield
- Level 8 ETFs: ETF, index, index construction, market-cap weighting, passive vs active, physical and synthetic replication, tracking difference, tracking error, TER, fund size, liquidity, accumulating vs distributing, UCITS, domicile, securities lending
- Level 9 Portfolio theory: risk, return, volatility, variance, standard deviation, correlation, covariance, diversification, portfolio risk, systematic and idiosyncratic risk, beta, CAPM, Sharpe ratio, efficient frontier
- Level 10 Asset allocation: strategic and tactical allocation, risk tolerance, risk capacity, horizon, liquidity, rebalancing, sequence of returns, portfolio construction
- Level 11 Behavioural finance: loss aversion, overconfidence, confirmation bias, recency bias, anchoring, herding, FOMO, disposition effect, narrative fallacy, panic selling, performance chasing
- Level 12 Personal finance and tax: emergency funds, debt, insurance, pensions, taxation, PEA, CTO, assurance-vie, capital gains, dividends, tax efficiency, ETF taxation. French tax rules versioned and source-linked, hand-written, each tax screen showing its last verification date and an education-not-advice notice.

**Tier 2 - optional, built last or not at all:** Level 3 accounting, Level 4 corporate finance, Level 6 valuation ratios (EPS, P/E, P/B, EV/EBITDA, FCF valuation, cyclicality), and all of Level 13 advanced investing, with leverage, options, futures, and short selling last. Tier 2 concepts remain in the graph as optional nodes.

## 40. Final competency level

Completion is demonstrated competency, not lesson completion. Thresholds are configuration, reported honestly, and describe the learner only: knowledge >=85 percent, delayed retention >=80 percent at 30+ days, application >=80 percent on novel scenarios, transfer >=75 percent, quantitative >=80 percent, decision competence >=80 percent, and improving confidence calibration.

## 41. Final exam

Approximately 100 questions: 20 percent conceptual, 20 quantitative, 20 application, 20 transfer, 10 misconception detection, 10 investment decision-making. Hand-authored held-out pool assembled at exam time from the concept graph blueprint; lesson questions are never reused; the pool is never displayed before the exam. Item secrecy beyond the exam pool is not attempted, since the learner reads the source packs.

## 42. Personal progress measurement

Replaces v1.0 sections 42-61. Six measures, all for one learner:

1. **Baseline score** - standardized assessment before any learning, stored permanently
2. **Current knowledge score** - same assessment repeated at 3, 6, and 12 months
3. **Delayed retention** - percent correct on items last studied 30+ days earlier; target 80
4. **Transfer** - percent correct on unfamiliar-situation items; target 75
5. **Calculation accuracy** - percent correct on quantitative items; target 80
6. **Confidence calibration** - stated confidence minus actual accuracy, one number

One composite Finance Competency Score 0-100 with weights: foundational knowledge 20, delayed retention 20, transfer 20, quantitative competence 15, investment decision quality 15, confidence calibration 10. Engagement never influences it. Self-reported scores are flagged in every report.

One usability number: percent of started lessons abandoned before the retrieval step.

The dashboard shows the composite, each component, the weakest area, and one recommended action.

## 43-61. Removed

Replaced by section 42. The KPI 6 explanation rubric anchors from v1.0 section 43 survive as the self-scoring scale (0 incorrect, 1 superficial, 2 partially correct, 3 technically correct, 4 adds causal explanation, 5 adds example) and the section 57 weights survive inside section 42. The v1.0 experiments (47-49), retention/activation/completion metrics (50-52), real-world tracking (53), longitudinal outcome (54), unseen-item principle (55: kept, folded into section 41), ROI framework (56), dashboard spec (58: folded into 42), ADHD metrics (59), attention friction (60: kept as the single usability number in 42), and product health matrix (61) are removed as separate requirements.

## 62. Onboarding

No long profile. Baseline finance assessment, investment experience, preferred learning duration, audio preference, financial objectives, approximate horizon; then immediately the first lesson.

## 63. Baseline assessment

Before learning, assess personal finance, economics, markets, investing, ETFs, portfolio theory, taxation (accounting only if Tier 2 is pursued). Answers not revealed immediately. Baseline stored permanently as the improvement denominator.

## 64. Personalized curriculum

Never skip foundations because the learner recognises terminology. Knowing the word "ETF" without being able to explain index, fund, replication, and tracking difference still routes through the prerequisites.

## 65. Adaptive difficulty

Concepts carry beginner, intermediate, advanced, expert versions. Difficulty increases with high accuracy, calibrated confidence, and strong transfer; decreases with repeated errors, low confidence, or weak prerequisites.

## 66. Memory crystallisation loop

Every important concept follows: exposure (audio) -> encoding (visual) -> retrieval (recall without notes) -> application (concrete problem) -> spacing -> interleaving -> transfer -> explanation (teach back). Encoded in the curriculum engine.

## 67. Teach-back mode

Occasionally: "explain this to someone who has never studied finance." Scored by self-assessment (section 23) on accuracy, completeness, causal reasoning, terminology, example quality.

## 68. Financial argument analysis

Critique statements ("stocks always outperform bonds over long periods", "this ETF is better because it returned more last year", "rates are going down therefore tech stocks will rise", "high dividend stocks are safer", "gold always protects against inflation") by answering: what is potentially correct, what is missing, what assumptions, what evidence would you need, what would falsify it.

## 69. Source system

Every substantive claim has source, publication date, jurisdiction where relevant, last verification date. Prioritise central banks, regulators, government sources, academic research, official fund documentation. Tax information version-controlled.

## 70. Data policy

No hard-coded live market data. Abstraction layers for ETF data, prices, historical returns, inflation, rates, tax rules. Static datasets, each identifying source, timestamp, currency, methodology.

## 71. AI tutor - specified, not built

Deferred under C1. The tutor interface exists in the codebase behind a feature flag that is off, so a future budget plugs in without rework. When built it may explain, quiz, generate examples, challenge assumptions, identify misconceptions, offer alternative explanations and practice problems, using the learner's knowledge graph state. It must never claim to predict markets, fabricate sources, promise returns, encourage speculative trading, or present personalised advice as certainty.

## 72. Technology stack

Framework, language, and styling from v1.0 stand: Next.js (static export mode), TypeScript, React, Tailwind CSS, shadcn/ui, Zod, Recharts, Vitest, Playwright, HTML5 audio. PostgreSQL, Prisma, and all server-side architecture are removed under C4.

**Hosting.** One public GitHub repository holds code, content, and audio. GitHub Pages serves the static export; a GitHub Actions workflow builds and publishes on every push to main. No API routes, no runtime server components, no SSR. Any feature that cannot be static must be flagged, not worked around with a server. Pages limits (verified 2026-08, see ARCHITECTURE.md): 1 GB recommended site size, 100 GB/month soft bandwidth, 10 builds/hour soft limit.

**Content.** Source packs as markdown with frontmatter; questions and the concept graph as JSON; all in the repository, fetched as static assets, correctable directly on github.com.

**Audio.** Mono .mp3, each under 8 MB, committed and served by Pages. Every audio reference is a URL so files can move to Release assets without a code change. A workflow generates a podcast RSS feed from the audio directory, published alongside the site (note: the feed URL is unlisted, not access-controlled - see REQUIREMENTS.md, residual conflicts).

**Learner data.** All learner state lives in IndexedDB on the device (never localStorage for state), schema defined in one place. Backup and sync via a single private GitHub Gist: fine-grained PAT scoped to Gists only, pasted once, stored on-device, never committed; complete state written after every session and on demand, encrypted at rest with a learner passphrase; restore offered on first load; manual export/import of the same JSON as the token-free fallback. Deletable in one action, locally and in the Gist.

**iPhone.** Home-screen web app with manifest and icon; a service worker caches the shell and question content for offline use, never the audio. The podcast feed is the reliable path for lock-screen listening.

## 73. Application structure

```
/app                      routes (static export)
/components/audio         player, audio mode
/components/charts        Recharts wrappers
/components/learning      lesson flow, transcript
/components/exercises     exercise type renderers
/components/portfolio     portfolio lab
/components/finance       personal finance lab
/components/dashboard     progress dashboard
/components/visuals       lesson visual components
/lib/learning /lib/mastery /lib/spaced-repetition /lib/simulation
/lib/portfolio /lib/finance /lib/tax /lib/market-data /lib/audio
/lib/assessment /lib/analytics
/data/curriculum /data/concepts /data/questions /data/scenarios /data/sources
/public/audio             lesson mp3 files
/scripts                  export, feed, content checks
/tests
```

## 74. Data structures

Replaces the v1.0 entity list. Two homes:

**Repository content files** (read-only at runtime): courses/modules/lessons (markdown source packs with frontmatter: objectives, audio reference, visual spec, retrieval questions, prediction, exercise, sources, mastery criteria), concept graph with prerequisites and misconceptions (JSON), question pools including the held-out exam pool (JSON), scenarios (JSON), tax rules with validity windows (JSON), sources registry, market data snapshots.

**IndexedDB stores** (single learner, no user ids): learner (one record: settings, onboarding, gist config), mastery (per concept), schedule (FSRS card per concept), attempts (questions, exercises, scenarios, assessments; with confidence, self-score flags, error class), lessonState (per lesson: started, audio completed, stage reached, completed, audio position), portfolios and lab entries, IPS versions, assessment attempts.

Entities that served only deleted metrics are removed. AnalyticsEvent is replaced by the attempt and lessonState records themselves (section 75).

## 75. Recorded events

Only events consumed by the mastery model, the review scheduler, and the progress dashboard are stored: lesson started, audio completed, stage transitions (prediction, visual, retrieval), question/exercise/scenario answered (with correctness, score, confidence, error class, self-reported flag), review completed, assessment started/completed, portfolio created/modified, teach-back submitted. No funnel analytics. No unnecessary personal information.

## 76. Accessibility

Captions/transcripts, keyboard navigation, screen readers, adjustable text, sufficient contrast, reduced motion, audio speed control.

## 77. Design language

Sophisticated, editorial, restrained, analytical, premium, calm, highly readable. No childish gamification, cartoon characters, confetti, badges, flashing numbers, casino or crypto aesthetics. Implemented with shadcn/ui defaults plus a modified palette and typography (Phase 2), not as a separate design-system deliverable.

## 78. Gamification

Functional only: progress, mastery, milestones, competency levels, completed modules. No meaningless points, streak anxiety, leaderboards, social comparison, arbitrary rewards.

## 79. MVP

Onboarding, baseline assessment, home/today screen, curriculum engine, first 20 lessons, audio player, visual companion, retrieval system, exercise system, mastery system, spaced review, compound-interest simulator, inflation simulator, fee simulator, basic portfolio simulator, glossary, progress measurement (section 42), AI tutor interface (flag off, not functional). Static data. Mocked functionality is always labelled as mocked.

## 80. First 20 lessons

1. What is money? 2. Income, expenses and cash flow 3. Assets and liabilities 4. Net worth 5. Interest 6. Compound interest 7. Inflation 8. Nominal vs real returns 9. Opportunity cost 10. Economics vs finance vs accounting 11. What is a financial market? 12. What is a stock? 13. What is a bond? 14. What is an ETF? 15. What is an index? 16. What does diversification mean? 17. What is risk? 18. Why do fees matter? 19. What does long-term investing actually mean? 20. How to think about an investment decision.

Each has a source pack (audio script source), visual, retrieval questions, practical exercise, prerequisite mapping, source list, and mastery criteria.

## 81. Build sequence

- **Phase 0 - Analysis.** Architecture, schema, stack decisions, risks, unresolved conflicts. No code. (Complete.)
- **Phase 1 - Backbone and vertical slice.** Repository, static build, Actions workflow, Pages deployment, content file formats, IndexedDB schema, and one complete lesson end to end on the phone: audio plays, prediction and retrieval run, an answer is scored, mastery is written, the next review is scheduled. Gist backup included here. Minimum viable interface. Stop and evaluate.
- **Phase 2 - Learning loop.** First 20 lessons, full audio player, source pack export command, FSRS scheduling, interleaved review, progress dashboard.
- **Phase 3 - Application.** Section 21 exercise types; compound interest, inflation, and fee simulators; portfolio laboratory.
- **Phase 4 - Remaining Tier 1 curriculum.** Levels 2 and 5 through 12.
- **Phase 5 - Decision tools.** Behavioural finance simulator, investment decision laboratory, personal finance laboratory, tax module, IPS.
- **Phase 6 - Tier 2, if wanted.**

Each phase ends with the application usable. No phase begins before the previous one is confirmed complete.

## 82. Testing requirements

Unit: financial calculations, compound interest, inflation, portfolio weights and returns, fee calculations, bond calculations, mastery scoring, spaced repetition, content validation. Integration: lesson completion, answer submission, mastery updates, review scheduling, portfolio creation (against the IndexedDB layer). End to end: onboarding, first lesson, audio flow, exercise, review, dashboard update.

## 83. Financial calculation accuracy

Independent reference-value test cases for every important calculation: edge cases, rounding, zero, negative where relevant, very large values. UI calculations are never trusted without tests.

## 84. Content quality control

Per-lesson checklist before acceptance: concept accurate, explanation technically correct, jargon defined, example realistic, misconception check present, retrieval present, application present, transfer potential, sourced, visual actually useful. Mechanical parts run in CI; financial correctness is the owner's responsibility before acceptance (nothing verifies it automatically).

## 85. Removed

The separate product success test is deleted. Learner thresholds live in sections 40 and 42 as honest configuration.

## 86. Final product principle

Less "Duolingo for finance", more a well-designed private finance curriculum that fits into the learner's life: listen while walking, cooking, or commuting, then a few minutes of active application. Consumption is never confused with learning. Core loop: listen -> visualise -> retrieve -> apply -> space -> interleave -> transfer -> master. The outcome is not "I completed a course" but "I can reason about financial decisions without being told what to think."

## 87. Execution instruction

1. Read this specification in full before coding. 2. Never omit requirements silently. 3. Identify conflicts explicitly (REQUIREMENTS.md, residual conflicts). 4. Do not invent major features. 5. Follow the section 81 phases; stop at each phase boundary for confirmation. 6. Run tests after every significant module. 7. Never mark mocked functionality as production. 8. Maintain CHANGELOG.md, ARCHITECTURE.md, LEARNING_SCIENCE.md, CONTENT_SCHEMA.md, METRICS.md, CONTENT_PIPELINE.md, REQUIREMENTS.md. 9. Maintain source attribution. 10. Prioritise educational correctness over visual novelty and learning outcomes over engagement. 11. Never optimise for time spent in the application.
