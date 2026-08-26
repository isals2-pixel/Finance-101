# Metrics

Living document. Every number the application computes about the learner, per SPEC_V2 §42. All metrics describe one learner. Engagement never enters any score. Self-reported (self-scored) evidence is flagged wherever it appears.

## The six measures

| # | Metric | Definition | Source | Target |
|---|---|---|---|---|
| 1 | Baseline score | Standardized assessment before any learning, stored permanently | `attempts` (assessment kind baseline) | n/a |
| 2 | Current knowledge | Same assessment at 3, 6, 12 months | same | improvement over baseline |
| 3 | Delayed retention | % correct on items whose concept was last reviewed >=30 days earlier | `attempts` joined to `schedule` history | >=80% |
| 4 | Transfer | % correct on items tagged cognition=transfer | `attempts` | >=75% |
| 5 | Calculation accuracy | % correct on numeric/calculation items | `attempts` | >=80% |
| 6 | Confidence calibration | mean(confidence band midpoint - actual correctness), signed | confidence-flagged `attempts` | toward 0 |

## Finance Competency Score (0-100)

Weighted composite: foundational knowledge 20, delayed retention 20, transfer 20, quantitative competence 15, investment decision quality 15, confidence calibration 10 (calibration scored as 100 minus absolute calibration gap in points). Components with no evidence yet renormalise the weights and the dashboard says which components are live. Decision quality comes from decision-scenario rubric scores (Phase 5); until then the composite reports without it.

Per-concept mastery (0-100) is a different score with its own weights, defined in LEARNING_SCIENCE.md - the two are never mixed.

## Usability number

Lesson abandonment: % of started lessons (lessonState.startedAt set) with no retrieval submission (retrievalAt unset) after 48 hours. One number, shown only in the dashboard's detail view, never as a streak or a judgment.

## Where computed

All metrics are computed on demand in the client from IndexedDB (`lib/metrics.ts`, Phase 2 dashboard). Nothing is transmitted anywhere except inside the encrypted Gist backup.

## Thresholds

Targets above are configuration (`lib/config.ts`), reported honestly, and describe the learner only. There is no product success test.
