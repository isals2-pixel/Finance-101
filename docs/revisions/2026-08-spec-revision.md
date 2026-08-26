# Specification Revision - August 2026

Received 2026-08-21 from the owner. Applied in full to produce SPEC_V2.md. Preserved verbatim for provenance. This document supersedes docs/phase-0/OPEN_QUESTIONS.md.

---

## 1. REVISED OBJECTIVE

The application has one user: its owner.

The purpose is that this single learner can make autonomous, well-informed financial decisions, understand core financial concepts, and hold durable financial literacy.

The application is not a product. There are no cohorts, no other users, no growth objectives, and no engagement targets.

## 2. HARD CONSTRAINTS

**C1 - Zero budget.** There is no money for this application. No paid API, no paid hosting, no paid text-to-speech, no paid database. Every component must run on a free tier or on the owner's own machine. Any feature that cannot be built within that limit is deferred, not approximated.

**C2 - Audio is produced outside the application.** Lesson audio is generated in Google NotebookLM, also released as Gemini Notebook, from source documents written for that purpose. The application does not synthesize speech. It stores and plays audio files that are produced manually and uploaded.

**C3 - One user, no accounts.** No sign-up, no password, no session management, no consent flows.

**C4 - Static, GitHub only.** The application is a static site with no server and no server-side database. It is hosted on GitHub Pages from the same repository that holds the code, the content, and the audio. Every part of the toolchain is a GitHub feature. No third-party service is introduced.

## 3. RESOLUTIONS TO THE TEN OPEN QUESTIONS

| # | Question | Resolution |
|---|---|---|
| Q1 | Audio production method | Superseded by C2. No text-to-speech provider, no `AudioSource` provider abstraction. The application accepts an audio file per lesson, produced as specified in section 9. |
| Q2 | Single-user or multi-user | Single user, permanently. There is no plan to scale. No `userId` columns, no tenancy, no authentication, no cohort metrics. Learner state is a single row. |
| Q3 | AI tutor provider and budget | Deferred. C1 removes the operating budget the tutor requires. Specify the tutor interface, build no calls. Section 11 defines how written answers are scored without a model. |
| Q4 | Expert review of financial and tax content | Accepted as written. All content ships with sources and verification dates. Tax lessons display an as-of date and an education-not-advice notice. |
| Q5 | Experiment design at n=1 | Deleted. See section 4. |
| Q6 | Final exam generation | Accepted as written. Hand-authored held-out pool, assembled at exam time per the section 41 blueprint. No model-generated questions in a graded exam. |
| Q7 | Lock-screen listening | Progressive web app with Media Session, verified on the owner's device. Reliable background playback in an iOS web app is not assumed. The audio files are also published as a private podcast feed, generated from the repository, so listening can happen in a podcast app with retrieval done afterwards in the web app. |
| Q8 | Competency thresholds | Thresholds are configuration, reported honestly, and describe the learner only. Delete the separate product success test in section 85. |
| Q9 | Currency and locale | Accepted as written. English interface and content, EUR only, France as the only tax jurisdiction. |
| Q10 | Real personal financial data | Under C4 all data stays on the device, with an encrypted-at-rest copy in a private GitHub Gist owned by the learner. No third party holds it. Data is deletable in one action, locally and in the Gist. No bank or broker connections. |

## 4. SECTIONS TO DELETE

Remove entirely. Each requires a population of learners to be interpretable, or a budget that does not exist.

| Section | Title |
|---|---|
| 47 | Audio effectiveness experiment |
| 48 | Visual effectiveness experiment |
| 49 | Exercise effectiveness experiment |
| 50 | User retention metrics |
| 51 | Activation KPI |
| 52 | Course completion KPI |
| 60 | Attention friction metric |
| 61 | Product health matrix |
| 85 | Success criteria, as a product test |

Phase 8 of the original build sequence is removed with them.

Also delete from section 75 every analytics event that exists only for funnel analysis. Keep only events consumed by the mastery model, the review scheduler, and the progress dashboard.

## 5. NEW SECTION 42 - PERSONAL PROGRESS MEASUREMENT

Replaces sections 42 through 61.

Measure six things, all for one learner.

1. **Baseline score.** A standardized assessment taken before any learning, stored permanently.
2. **Current knowledge score.** The same assessment repeated at 3, 6, and 12 months.
3. **Delayed retention.** Percentage correct on items last studied at least 30 days earlier. Target 80 percent.
4. **Transfer.** Percentage correct on items presenting unfamiliar situations. Target 75 percent.
5. **Calculation accuracy.** Percentage correct on quantitative items. Target 80 percent.
6. **Confidence calibration.** Stated confidence minus actual accuracy, as a single number.

Report one composite Finance Competency Score from 0 to 100 using the weights in section 57. Delete the second composite score in section 26. Section 26 governs per-concept mastery and must state its own explicit weights.

Add one usability number: percentage of started lessons abandoned before the retrieval step.

## 6. CURRICULUM SCOPE

The original curriculum contains 164 concepts. Split it into two tiers.

### Tier 1 - Core, required

Levels 1, 2, 5, 7, 8, 9, 10, 11, and 12, with these reductions:

- **Level 2, Economics:** keep supply and demand, GDP, inflation, monetary policy, fiscal policy, interest rates, business cycles, exchange rates.
- **Level 5, Markets:** keep markets, exchanges, brokers, liquidity, bid/ask spread, market orders, limit orders.
- **Level 6, Equities:** keep stocks, equity ownership, market capitalization, earnings, dividends, growth versus value.

Tier 1 is approximately 100 concepts.

### Tier 2 - Optional, built last or not at all

Level 3 accounting, Level 4 corporate finance, the Level 6 valuation ratios, and the Level 13 items covering leverage, options, futures, and short selling.

Tier 2 concepts stay in the concept graph as optional nodes. No Tier 1 concept may list a Tier 2 concept as a prerequisite.

### Laboratories

Keep: portfolio laboratory (30), behavioral finance simulator (32), investment decision laboratory (33), personal finance laboratory (37), investment policy statement (38).

Move to Tier 2: market simulator (31), financial statement laboratory (34), corporate finance laboratory (35), macroeconomic laboratory (36).

## 7. CONTRADICTIONS RESOLVED

**Audio-only mode versus mandatory visuals.** The visual follows listening, it does not accompany it. Lesson segment 6 becomes a screen opened after the audio ends. No audio file carries timestamp markers. Each lesson records whether its visual is required for comprehension or optional reinforcement.

**Two mastery scores.** Resolved in section 5 above.

**Unnamed spaced repetition algorithm.** Use FSRS. Define the mapping between the 0 to 100 per-concept mastery score and the discrete recall grades FSRS expects, and document it in LEARNING_SCIENCE.md.

**Assessment item secrecy.** The learner wrote the specification and will read the source packs. Item secrecy is limited to the held-out final exam pool, which is never displayed before the exam.

## 8. REVISED LESSON STRUCTURE

The original eight-segment structure assumes a narrator reading a controlled script. NotebookLM produces a conversation between two synthetic hosts from source material. Instructions steer it, they do not script it. Segments that require the learner to stop and think cannot be relied on inside the audio.

Split the eight segments across the two media.

**In the audio, driven by the source pack:**

1. Hook, a concrete problem or paradox
2. Concept, explained intuitively
3. Formal definition and terminology
4. Worked example with numbers
5. Connection to previously learned concepts

**In the application, after the audio ends:**

6. Prediction, one question answered before any explanation is shown
7. Visual mental model
8. Retrieval, recall or explanation without notes

The application presents steps 6 to 8 as a single flow that begins automatically when the audio finishes. The lesson is not marked complete until step 8 is submitted.

## 9. AUDIO PRODUCTION

Audio is produced in NotebookLM, one lesson at a time, by hand. The application never generates it.

### Workflow per lesson

1. The application exports the lesson source pack as a text or PDF file.
2. The owner creates a new NotebookLM notebook containing that single source. One source per notebook is deliberate. Audio length tracks the volume of source material, so extra sources lengthen and dilute the result.
3. The owner selects Audio Overview, applies the standing custom instruction below, and generates.
4. The owner downloads the file, which arrives as .wav, converts it to .mp3 if size matters, and uploads it to the lesson in the application.
5. The application stores the file, its duration, and the date of generation.

The free tier limits Audio Overview generations per day. Twenty lessons take several days to produce. Plan production in batches.

Length is not directly controllable. The length presets are relative instructions, not minute guarantees, and the finished runtime depends on the source. Calibrate empirically: produce the first three lessons, measure the runtimes, and adjust the source pack word count up or down before producing the rest. Record the calibrated word count in CONTENT_PIPELINE.md.

Verify these product details before the first batch. NotebookLM changes frequently and was renamed Gemini Notebook in July 2026.

### Standing custom instruction

Store this text in the repository at `/data/curriculum/audio-instruction.md`. Keep it under 1,500 characters, above which instructions are followed unreliably.

> You are producing one episode of a private finance course for a single adult learner who is analytical, has no formal finance training, and is learning in order to manage her own long-term investments. Cover only the source document. Do not introduce material that is not in it. Follow the order of the source document exactly. State the formal definition of each term the first time it appears, then keep using plain language. Work through every number in the worked example out loud, slowly, including the arithmetic. Do not summarize the worked example, perform it. Do not add a recap at the end. Do not tell the learner to pause, predict, or do an exercise, that happens elsewhere. Do not use analogies involving sports, cooking, or dating. Keep the tone measured and adult. Avoid enthusiasm, filler, and mutual compliments between hosts. Target eight to ten minutes.

### Lesson source pack format

The source pack is the document that produces the audio. It is the single most important content asset. Every lesson has exactly one.

Target length is 1,400 to 1,800 words, subject to calibration. Structure:

**Header**
- Lesson number and title
- The one sentence a learner should be able to say afterwards
- Prerequisite concepts, listed by name
- Concepts introduced, listed by name

**Body, in this order**
1. **Opening problem.** 100 to 150 words. A concrete situation with a non-obvious answer.
2. **Intuitive explanation.** 400 to 600 words. Plain language, no jargon that has not been defined, one idea per paragraph.
3. **Formal definitions.** 100 to 200 words. Each term defined in one sentence.
4. **Worked example.** 300 to 400 words. Real numbers in EUR, every arithmetic step written out, the result interpreted in words.
5. **Connections.** 150 to 250 words. How this concept relates to named earlier concepts.
6. **Common misconceptions.** 100 to 200 words. Two or three, each stated and then corrected.

**Footer, excluded from the audio by the standing instruction and used by the application**
- Retrieval questions with model answers
- The prediction question for step 6 of the lesson
- The practical exercise
- Sources with publication dates
- Mastery criteria

Store source packs as markdown at `/data/curriculum/lessons/NN-slug.md` with the footer in frontmatter or under a clearly delimited heading, so the application can parse the footer and export the body alone for upload to NotebookLM.

Build an export command that produces the audio-ready body of any lesson as a standalone file.

## 10. CONTENT PRODUCTION PIPELINE

Produce CONTENT_PIPELINE.md covering:

- How source packs are drafted, including the prompt used if they are drafted with a language model
- The review checklist applied before a source pack is accepted, based on section 84
- Version control for content, so a corrected source pack is traceable
- What happens to the audio file when a source pack changes, which is that the audio is regenerated and the old file replaced
- Measured time to produce one complete lesson, filled in after the first three

Content correctness is the owner's responsibility before a lesson is accepted. Nothing in the pipeline verifies financial accuracy automatically.

## 11. SCORING WRITTEN ANSWERS WITHOUT A MODEL

The original specification assumes a language model grades explanations, teach-back answers, and the investment policy statement. C1 removes that option, and a mis-scored answer would corrupt the mastery score and the review schedule.

Replace machine grading with structured self-assessment.

1. The learner writes the answer with no reference material visible.
2. The answer is submitted and locked. It cannot be edited afterwards.
3. The model answer and the scoring rubric are displayed side by side with what the learner wrote.
4. The learner scores their own answer against the rubric, 0 to 5, using the anchors in section 43 KPI 6.
5. Both the answer and the self-score are stored. Self-scores are flagged as self-reported wherever they appear.

Self-scoring is only valid when the answer is locked before the model answer is shown. Enforce this in the interface.

Multiple choice, numeric, classification, and calculation items are scored automatically as before. Section 23 error classification applies to those item types only. For written answers, the learner selects the error type from the section 23 list.

Keep the AI tutor interface in the codebase behind a feature flag that is off. If a budget appears later, it plugs in without rework.

## 12. STATIC GITHUB STACK

This section replaces the deployment parts of section 72. The framework, language, and styling choices in section 72 stand. PostgreSQL, Prisma, and all server-side architecture are removed.

### Hosting

One public GitHub repository holds the code, the lesson content, and the audio. GitHub Pages serves it. A GitHub Actions workflow builds on every push to the main branch and publishes automatically. Nothing else is deployed anywhere.

Next.js is used in static export mode. There are no API routes, no server components that require a runtime, and no server-side rendering. If any required feature cannot be built as a static export, say so in Phase 0 rather than reintroducing a server.

Confirm the current GitHub Pages size and bandwidth limits in Phase 0. The published site must stay well inside them.

### Content

Lesson source packs, questions, exercises, and the concept graph are files in the repository, not database rows. Markdown with frontmatter for source packs, JSON for questions and the concept graph. The application fetches them as static assets.

This means content can be corrected directly on github.com, including from a phone. The change is live after the workflow runs.

### Audio

Compressed .mp3, mono, each lesson under 8 MB, committed to the repository and served by Pages. Store every audio reference as a URL so files can be moved to GitHub Release assets later without a code change, should the repository grow.

A GitHub Actions workflow generates a podcast RSS feed from the audio directory and publishes it alongside the site. Subscribing to that feed in a podcast application gives offline downloads, lock-screen playback, speed control, and resume position without any of it being built.

### Learner data and backup

All learner data lives in the browser on the device: mastery scores, review schedule, answers, confidence ratings, portfolio and personal finance laboratory entries. Use IndexedDB, not localStorage, and define the schema in one place.

Browser storage on a single device is not a safe home for a year of review history. Add synchronization to a private GitHub Gist.

- The learner creates a fine-grained personal access token scoped to Gists only, and pastes it into the application once.
- The token is stored on the device and never committed to the repository.
- The complete learner state is written to a single private Gist after every session, and on demand.
- On first load on any device, the application offers to restore from that Gist.
- A manual export and import of the same JSON file is also provided, so the data is recoverable without a token.

The Gist is the backup and the sync mechanism. No other account is required.

### iPhone

Added to the home screen from Safari, with a web app manifest and an icon so it opens full screen. A service worker caches the application shell and the question content for offline use. It does not attempt to cache the audio.

## 13. BUILD SEQUENCE

Replaces section 81.

**Phase 0 - Analysis.** Read the specification and this revision in full. Return architecture, schema, the stack decisions from section 12, risks, and any conflict this document does not resolve. No code.

**Phase 1 - Backbone and vertical slice.** Repository, static build, GitHub Actions workflow, Pages deployment, the content file formats, the IndexedDB schema, and one complete lesson working end to end on the phone: the audio plays, the prediction and retrieval steps run, an answer is scored, the mastery score is written, and the next review is scheduled. Include the Gist backup in this phase, not later. Minimum viable interface. Stop and evaluate.

**Phase 2 - Learning loop.** The first 20 lessons from section 80, the audio player in full, the source pack export command, FSRS scheduling, interleaved review, and the progress dashboard.

**Phase 3 - Application.** The exercise types in section 21, the compound interest, inflation, and fee simulators, and the portfolio laboratory.

**Phase 4 - Remaining Tier 1 curriculum.** Levels 2 and 5 through 12.

**Phase 5 - Decision tools.** Behavioral finance simulator, investment decision laboratory, personal finance laboratory, tax module, investment policy statement.

**Phase 6 - Tier 2, if wanted.** Accounting, corporate finance, valuation ratios, advanced instruments.

Each phase ends with the application in a usable state. Do not begin a phase before the previous one is confirmed complete.

## 14. SIMPLIFICATIONS

**Authentication and user model.** Not built. No `userId` columns. Learner state is a single row. Schema decisions may assume one user permanently.

**Database entities.** Section 74 becomes two things: content files in the repository, and an IndexedDB schema on the device. Remove any entity serving only deleted metrics. Retain the learning, mastery, scheduling, portfolio, and content structures.

**Design system.** Section 77 stands. Implement it in Phase 2 with shadcn/ui defaults, a modified palette, and typography choices. Do not build a design system as a separate deliverable.

**Tax content.** All Level 12 tax content is hand-written, dated, linked to an official source, and excluded from any automated generation. Every tax screen displays its last verification date.

## 15. WHAT DOES NOT CHANGE

Sections 4 through 29 stand as written, with the corrections above. Retrieval practice, spaced repetition, interleaving, generative learning, cognitive load management, transfer exercises, error analysis, the misconception database, the knowledge graph, and confidence calibration are the core of the product.

Sections 62 through 70 stand as written. Section 71, the AI tutor, is specified but not built.

Sections 73 through 76 and 82 through 84 stand as written except where sections 9, 11, and 12 above modify them. Section 72 stands only for the framework, language, and styling choices. Its backend and database entries are void under C4.

## 16. EXECUTION

1. Read the original specification, OPEN_QUESTIONS.md, and this document in full.
2. Produce specification v2.0 incorporating every change above.
3. List any conflict this revision does not resolve.
4. Produce REQUIREMENTS.md, a table of every numbered section with a status of implemented, deferred, or removed, and a reason for anything not implemented.
5. Produce the section 9 source pack template as a reusable file, plus one worked example for lesson 1, "What is money?", so the format can be judged before twenty are written.
6. Begin Phase 1.
