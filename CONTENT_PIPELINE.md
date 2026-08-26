# Content Production Pipeline

Living document. How a lesson goes from idea to playable audio. Content correctness is the owner's responsibility before a lesson is accepted; nothing in this pipeline verifies financial accuracy automatically.

## 1. Drafting a source pack

1. Copy `/data/curriculum/lessons/_template.md` to `NN-slug.md`.
2. Write the body to the section structure and word budgets in CONTENT_SCHEMA.md. Write for the ear: short sentences, no lists the hosts would read out, every jargon term defined at first use, one worked example with the arithmetic written step by step in EUR.
3. Fill the frontmatter: prediction, retrieval items with model answers and error maps, exercise, sources with publication and verification dates, mastery criteria.

If a language model drafts the body, use this prompt and then edit by hand:

> Draft the body of a lesson source pack for a private finance course, following the attached template structure and word budgets exactly. Topic: <topic>. The learner is an analytical adult beginner. Use EUR in all numbers. Write every arithmetic step of the worked example out in words and digits. Define each technical term in one sentence the first time it appears. Do not address the listener directly, do not add exercises, recaps, or questions - those live outside the audio. State two or three common misconceptions about the topic and correct them.

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
- [ ] Word count within the calibrated band

CI enforces the mechanical parts (schema, references, DAG, word-count bounds). This checklist covers what CI cannot.

## 3. Producing the audio

1. `npm run export:pack -- NN` writes `exports/NN-slug.txt` (body only).
2. New NotebookLM notebook, that single file as the only source.
3. Audio Overview -> customize -> paste `/data/curriculum/audio-instruction.md` -> generate.
4. Listen to the whole episode. Reject and regenerate if it introduces outside material, skips the worked example's arithmetic, or misstates a definition. Note rejections below.
5. Download (.wav), convert: `ffmpeg -i in.wav -ac 1 -b:a 64k public/audio/NN-slug.mp3` (mono, ~64 kbps keeps 10 minutes near 5 MB).
6. Fill `audio.file`, `audio.durationSec`, `audio.generatedAt` in the lesson frontmatter. Commit both together.

Free-tier generation limits are per day; batch accordingly. Verify current NotebookLM/Gemini Notebook behavior before each batch - the product changes frequently.

## 4. Versioning and regeneration

- Content lives in git; the lesson file's history is its version history. Corrections are normal commits with a CHANGELOG.md entry.
- If a body change alters meaning (not a typo), the audio is stale: regenerate it, replace the mp3 in place (same filename, so URLs and the feed stay valid), and update `generatedAt`.
- Frontmatter-only changes (questions, sources) never require regeneration.
- Changing `audio-instruction.md` makes all audio inconsistent in style; batch-regenerate opportunistically, newest lessons first.

## 5. Calibration and timings

Fill in after the first three lessons are produced:

| Measure | Value |
|---|---|
| Source pack words -> audio minutes (3 samples) | to be measured |
| Calibrated word-count band | 1,400-1,800 (initial assumption) |
| Time to draft + review one source pack | to be measured |
| Time to generate + QA + convert audio | to be measured |
| Rejected generations (count, reason) | to be recorded |
