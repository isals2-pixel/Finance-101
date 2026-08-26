# Learning Science Implementation

Living document. Explains the educational design decisions the code implements, per SPEC_V2.md sections 4-6, 23, 26-29.

## Spaced repetition: FSRS

Scheduling uses FSRS (Free Spaced Repetition Scheduler) through the open-source `ts-fsrs` implementation with default parameters and fuzzing disabled (deterministic schedules, testable). FSRS models each concept as a card with stability, difficulty, state, and review counts - exactly the per-concept state SPEC_V2 section 28 requires.

The spec's initial ladder (1, 3, 7, 14, 30, 60, 120 days) is approximated by FSRS defaults for a first successful review and subsequent Good reviews; FSRS then adapts per concept. Failures shorten intervals, successes lengthen them, matching section 4.2. We do not hand-tune FSRS weights until at least three months of real review history exists.

### Grade mapping

FSRS expects one of four grades per review. Mapping from application outcomes:

| Outcome | FSRS grade |
|---|---|
| Automatically scored item, incorrect | Again |
| Automatically scored item, correct | Good |
| Automatically scored item, correct with stated confidence 81-100% and no error on the same concept this session | Easy |
| Self-scored written answer, 0-1 | Again |
| Self-scored written answer, 2 | Hard |
| Self-scored written answer, 3-4 | Good |
| Self-scored written answer, 5 | Easy |

When one review session touches a concept through several items, the concept's grade is the minimum (most conservative) of the item grades. Rationale: a single failure on a concept is stronger evidence of fragility than a parallel success is of strength.

### Self-score scale (anchors)

0 incorrect - 1 superficial - 2 partially correct - 3 technically correct - 4 technically correct with causal explanation - 5 adds a correct example. Self-scores are only collected after the written answer is locked, and are flagged self-reported in storage and display.

## Per-concept mastery (0-100)

Defined in `lib/mastery.ts`. Components are recency-weighted accuracies in [0,1] (weight 0.7^k over attempts, most recent first, so old evidence decays):

| Component | Weight | Evidence |
|---|---|---|
| Initial learning | 10 | Lesson completed through retrieval (binary) |
| Immediate retrieval | 25 | Attempts within 2 days of first exposure |
| Delayed retrieval | 30 | Attempts 7+ days after the previous review of the concept |
| Application | 20 | Exercise and scenario attempts |
| Transfer | 15 | Attempts on items tagged transfer |

Missing components renormalise the remaining weights (a concept with no transfer items yet is not penalised for it). From the weighted sum a calibration penalty is subtracted: 10 x mean(|stated confidence - actual correctness|) over confidence-flagged attempts, 0 if none. Result clamped to [0,100] and rounded.

Lesson completion alone yields at most the 10-point learning component: mastery cannot be reached by listening.

Self-scored answers enter components at face value but carry the self-reported flag; the dashboard reports the share of a score resting on self-assessment.

## Retrieval and generative design

- The lesson flow (audio -> prediction -> visual -> retrieval) forces generation before explanation: the prediction answer locks before its model answer shows, and retrieval happens without notes (the transcript is unavailable inside the retrieval stage).
- Recognition-style items (multiple choice) are never the majority format; lesson retrieval uses free recall, short answer, and classification.
- Interleaving (Phase 2): review sessions draw due concepts across at least three curriculum levels once more than one level is in progress.

## Error classification

Eight classes (SPEC_V2 section 23). Automatically scored items carry an author-supplied error map (answer pattern -> class). Written answers ask the learner to pick the class after self-scoring below 4. Remediation (Phase 2): missing prerequisite schedules the prerequisite concept for review; misconception schedules the linked misconception challenge; calculation error re-presents the worked example.

## Confidence calibration

Five bands captured before the answer or model answer is revealed, on items flagged `askConfidence`. Calibration = mean(band midpoint - actual correctness). Feeds the mastery penalty above and the section 42 composite (Phase 2 dashboard).
