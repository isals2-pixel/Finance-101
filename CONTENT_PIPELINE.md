# Content Production Pipeline

Living document. How a lesson goes from idea to published text. Since v2.1 there is no audio step: the source pack body IS the lesson, read in the application. Content correctness is the owner's responsibility before a lesson is accepted; nothing in this pipeline verifies financial accuracy automatically.

## 1. Drafting a source pack

1. Copy `/data/curriculum/lessons/_template.md` to `NN-slug.md`.
2. Write the body to the section structure and word budgets in CONTENT_SCHEMA.md. The leading principle is the owner's: short, concise, concrete, simple. Short sentences, every jargon term defined at first use, one worked example with the arithmetic written step by step in EUR, nothing that pads or restates. The 600-900 word band keeps a lesson at a 3-5 minute read.
3. Fill the frontmatter: prediction, retrieval items with model answers and error maps, exercise, sources with publication and verification dates, mastery criteria.

If a language model drafts the body, use this prompt and then edit by hand:

> Draft the body of a lesson source pack for a private finance course, following the attached template structure and word budgets exactly. Topic: <topic>. The learner is an analytical adult beginner. Keep it short, concise, concrete, and simple: get to the point in the first sentence of every section, and cut any sentence that does not carry a fact, definition, number, or reasoning step. Use EUR in all numbers. Write every arithmetic step of the worked example out in words and digits. Define each technical term in one sentence the first time it appears. Do not add exercises, recaps, or questions - those live in the frontmatter. State two or three common misconceptions and correct them.

The owner verifies every claim against the cited sources before acceptance. A model draft is never accepted unedited.

## 2. Review checklist (from SPEC_V2 §84)

Before a source pack is accepted, confirm by hand:

- [ ] Concept accurate; explanation technically correct
- [ ] All jargon defined at first use
- [ ] Worked example realistic, EUR, arithmetic complete and correct
- [ ] Two or three misconceptions stated and corrected
- [ ] Retrieval items answerable from the body alone; model answers correct
- [ ] Exercise requires doing, and its answer is verified independently
- [ ] At least one item with transfer potential exists or is planned in a pool
- [ ] Every substantive claim has a source with publication date; verification date set to today
- [ ] Visual explains a relationship (not decoration); requirement flag set honestly
- [ ] Word count within 600-900; no paragraph that only restates or pads

CI enforces the mechanical parts (schema, references, DAG, word-count bounds). This checklist covers what CI cannot.

## 3. Publishing

Commit the lesson file to `main` - directly on github.com works, including from a phone. The workflow validates (an invalid lesson fails CI and does not deploy), builds, and publishes. The lesson appears on the site a few minutes later.

## 4. Versioning and corrections

Content lives in git; the lesson file's history is its version history. Corrections are normal commits with a CHANGELOG.md entry. Because the text is the lesson, a correction is live at the next deploy - there is nothing else to regenerate.

## 5. Timings

Fill in after the first three lessons are authored:

| Measure | Value |
|---|---|
| Time to draft + review one source pack | to be measured |
| Words per lesson (actual, first three) | to be measured |
