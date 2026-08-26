> **Superseded (2026-08-21).** All ten questions were resolved by the August 2026 revision, section 3 (docs/revisions/2026-08-spec-revision.md). Residual conflicts are tracked in docs/REQUIREMENTS.md.

# Open Questions and Specification Conflicts

Status: Phase 0 analysis. Spec section 87.3 requires conflicts and ambiguities to be identified explicitly. Each item states a default. If a question is not answered at Phase 0 approval, the default applies.

## Q1 - Audio production method

The specification mandates audio-first but does not say how audio is produced. Options: TTS (fast, re-renderable, ongoing per-render cost, quality varies by provider), recorded human audio (best quality, slowest, expensive to revise), hybrid.

Default: TTS behind an `AudioSource` abstraction, provider selected in Phase 2 after comparing quality on one finished script. Human recording can replace any lesson later without code changes.

## Q2 - Single-user or multi-user

Section 3 describes one specific learner. Sections 42-61 describe cohort metrics, activation percentages, and A/B tests, which imply a user population. The build differs: single-user needs no roles or tenancy, multi-user affects privacy, consent for the section 53 financial data, and experiment design.

Default: multi-user capable schema (already reflected in DATA_MODEL.md), single-tenant deployment, email authentication. Cohort KPIs are computed but read as personal metrics while there is one user.

## Q3 - AI tutor provider and budget

Section 71 requires an AI tutor and Phase 5 adds LLM rubric grading. The specification does not name a provider or budget. This is the only ongoing operating cost of consequence.

Default: Claude API, server-side, with a monthly spend cap and per-feature usage logging.

## Q4 - Expert review of financial and tax content

Section 69 requires sourcing and section 39 requires versioned French tax rules. The specification does not say who verifies correctness before content ships. LLM-drafted plus self-review is not equivalent to expert review for tax content.

Default: all content ships with sources and verification dates. Tax lessons additionally display their as-of date and a prominent education-not-advice notice. Whether a qualified human reviewer is engaged is a decision for the product owner.

## Q5 - Experiment design at n=1

Sections 47-49 request A/B comparisons. With one learner, only within-subject designs are possible, and topic difficulty confounds every comparison.

Default: within-subject, topic-matched pairs, descriptive reporting, no significance claims. Built in Phase 8 as specified but labeled as exploratory.

## Q6 - Final exam generation

Section 41 says exam questions must be generated from the concept graph and must not reuse lesson questions. "Generated" could mean assembled from a hand-authored held-out pool, or LLM-generated at exam time.

Default: hand-authored held-out pool (`pool = finalExam`), assembled per the section 41 blueprint at exam time. LLM generation feeds the authoring pipeline as drafts, never serves unreviewed questions in a graded exam.

## Q7 - Lock-screen listening guarantee

Section 11 requires listening with the screen locked "where supported by the platform." On iOS Safari this support is partial and version-dependent. If reliable pocket listening on iPhone is a hard requirement, the web app alone may not satisfy it.

Default: PWA with Media Session, verified on the learner's actual device in Phase 2. Private podcast feed as fallback (RISKS.md R6). Decision needed only if both prove insufficient.

## Q8 - Competency thresholds are aspirational

Section 40 sets thresholds (85% knowledge, 80% delayed retention, 75% transfer). These are targets for the learner, but the specification also uses them as product success criteria (section 85). A correct product with a struggling learner would fail the product test.

Default: thresholds are configuration, reported honestly. Product success is evaluated on the section 61 health matrix (are lessons producing retention) separately from learner attainment.

## Q9 - Currency and locale scope

The learner is EUR-based and the tax content is French, but the specification never states the UI language. All lesson content in the specification is written in English.

Default: English UI and content, EUR as the only currency, France as the only tax jurisdiction. French-language content would be a major scope addition and is assumed out of scope.

## Q10 - Real personal financial data

Section 53 tracks savings rate and portfolio data "where the learner chooses to provide data," and section 37 has the learner enter income, debt, and pension details. This is sensitive data in a hosted app.

Default: personal finance lab data is optional, stored only for the owning user, excluded from analytics events (section 75 forbids unnecessary personal information), and deletable in one action. No bank or broker integrations.
