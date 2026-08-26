---
lesson: 0
slug: template
title: Template - do not build
oneSentence: >
  The single sentence the learner should be able to say after this lesson.
level: 1
prerequisites: []
concepts: []
audio:
  file: ""
  durationSec: 0
  generatedAt: ""
visual:
  id: template-visual
  kind: diagram
  requirement: reinforcement
  caption: What the visual shows.
prediction:
  prompt: One question answered before any explanation is shown.
  modelAnswer: The model answer revealed after the learner's answer locks.
retrieval:
  - id: q1
    conceptId: some-concept
    type: freeRecall
    prompt: Recall or explain without notes.
    modelAnswer: The model answer.
    rubricNote: What separates a 5 from a 3.
    askConfidence: false
  - id: q2
    conceptId: some-concept
    type: classification
    prompt: Classify each situation.
    items:
      - text: Situation one.
        options: [option-a, option-b, option-c]
        answer: option-a
        errorMap: { option-b: terminology-confusion, option-c: factual-misunderstanding }
exercise:
  id: ex1
  conceptId: some-concept
  type: calculation
  prompt: A calculation the learner performs.
  answer: 0
  tolerance: 0
  explanation: Why the answer is what it is, with the arithmetic.
sources:
  - title: Source title
    publisher: Publisher
    url: https://example.org
    publishedAt: "2020-01-01"
    verifiedAt: "2026-08-21"
masteryCriteria: >
  What demonstrated performance counts as mastering this lesson's concepts.
---

# Lesson NN - Title

One sentence to hold on to: <the oneSentence, restated>.

## The problem

100-150 words. A concrete situation with a non-obvious answer. No solution yet.

## The idea

400-600 words. Plain language, one idea per paragraph, no term used before it is defined.

## The terms

100-200 words. Each technical term defined in one sentence.

## Worked example

300-400 words. Real EUR numbers. Every arithmetic step written out in words and digits. The result interpreted in a sentence.

## Connections

150-250 words. How this relates to named earlier concepts, or, in the first lessons, to what comes next.

## Common misconceptions

100-200 words. Two or three, each stated plainly and then corrected.
