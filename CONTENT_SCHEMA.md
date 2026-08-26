# Content Schema

Living document. Defines the file formats for lessons, concepts, questions, and sources. All formats are Zod-validated at build time in `lib/content.ts`; an invalid file fails the build and CI.

## Lesson source pack: `/data/curriculum/lessons/NN-slug.md`

One file per lesson. Markdown body = the lesson text, rendered in the reading stage. YAML frontmatter = application data, never shown as lesson text.

```yaml
lesson: 1                      # lesson number, matches NN in the filename
slug: what-is-money
title: What is money?
oneSentence: >                 # the sentence the learner can say afterwards
  ...
level: 1                       # curriculum level (module)
prerequisites: []              # concept ids that must be learned first
concepts: [money]              # concept ids this lesson teaches (must exist in concepts.json)
visual:
  id: money-functions          # key into the visual component registry
  kind: diagram                # diagram | chart | timeline | statement | flow
  requirement: reinforcement   # required | reinforcement (SPEC_V2 §9)
  caption: ...
prediction:                    # step 6: answered before any explanation
  prompt: ...
  modelAnswer: ...
retrieval:                     # step 8 items, in order
  - id: q1
    conceptId: money
    type: freeRecall           # freeRecall | shortAnswer -> self-scored
    prompt: ...
    modelAnswer: ...
    rubricNote: ...            # what a 5 includes
    askConfidence: false
  - id: q2
    conceptId: money
    type: classification       # auto-scored
    prompt: ...
    items:
      - text: ...
        options: [a, b, c]
        answer: b
        errorMap: { a: terminology-confusion, c: factual-misunderstanding }
exercise:                      # the practical application (optional Apply step)
  id: ex1
  conceptId: money
  type: calculation            # auto-scored numeric
  prompt: ...
  answer: 66
  tolerance: 0
  explanation: ...
sources:
  - title: ...
    publisher: ...
    url: ...
    publishedAt: "2015-11-24"
    verifiedAt: "2026-08-21"   # last date the owner checked the source
masteryCriteria: >             # human-readable acceptance bar for the concept
  ...
```

Body structure (SPEC_V2 §10): title header, opening problem (100-150 words), intuitive explanation (400-600), formal definitions (100-200), worked example (300-400, EUR, arithmetic written out), connections (150-250), common misconceptions (100-200). Target total 1,400-1,800 words, roughly 7-9 minutes of reading.

Question types across the system: freeRecall, shortAnswer, explanation, prediction (self-scored); classification, comparisonChoice, numeric, calculation, multipleChoice (auto-scored, never the majority); decisionScenario, portfolioConstruction (Phase 3+).

Error classes (SPEC_V2 §23): factual-misunderstanding, terminology-confusion, calculation-error, causal-reasoning-error, overgeneralisation, missing-prerequisite, misconception, careless-error.

## Concept graph: `/data/concepts/concepts.json`

```json
{
  "version": "2026-08-21",
  "concepts": [
    {
      "id": "money",
      "title": "Money",
      "level": 1,
      "tier": 1,
      "prerequisites": [],
      "related": [],
      "misconceptions": [
        { "statement": "...", "correction": "..." }
      ]
    }
  ]
}
```

Rules enforced in CI: ids unique; every prerequisite resolves; the graph is a DAG; no tier-1 concept lists a tier-2 prerequisite; every lesson `concepts` and `prerequisites` entry resolves to this file.

## Question pools: `/data/questions/*.json`

Held-out and cross-lesson items (review variants, transfer bank, baseline, final exam). Lesson-embedded retrieval items live in the lesson frontmatter; pool items reference concepts the same way and add `pool`: `review | transferBank | baseline | finalExam` and `cognition`: `recall | application | transfer | decision`. The `finalExam` pool is never rendered by any screen except the exam (SPEC_V2 §41). Format matches the retrieval item schema above plus those two fields.

