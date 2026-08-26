# Finance Academy

A private, single-learner finance curriculum: audio-first lessons produced in NotebookLM, retrieval practice, FSRS spaced repetition, and mastery tracking, delivered as a static site on GitHub Pages. Educational only - not financial advice.

## How it works

- Lessons are markdown source packs in `data/curriculum/lessons/`. The body is the NotebookLM source document; the frontmatter holds the prediction, retrieval questions, exercise, sources, and mastery criteria.
- Each lesson runs as: listen (audio) -> predict -> visualise -> retrieve. It completes only when retrieval is submitted. FSRS schedules each concept's next review; per-concept mastery is computed from attempt history.
- All learner data stays in the browser (IndexedDB), with an encrypted backup in a private GitHub Gist configured in Settings.

## Documents

| File | Content |
|---|---|
| docs/SPEC_V2.md | The authoritative specification |
| docs/REQUIREMENTS.md | Status of every spec section, residual conflicts |
| ARCHITECTURE.md | The built system |
| LEARNING_SCIENCE.md | FSRS mapping, mastery weights, self-scoring rules |
| CONTENT_SCHEMA.md | Lesson, concept, and question file formats |
| CONTENT_PIPELINE.md | How a lesson becomes audio (NotebookLM workflow) |
| METRICS.md | Personal progress measures |
| CHANGELOG.md | What changed when |

## Commands

```
npm run dev              # local development
npm test                 # unit tests + content validation
npm run typecheck
npm run build            # static export to out/ + podcast.xml
npm run export:pack -- 01  # export a lesson body for NotebookLM
```

## Deployment

Pushing to `main` builds and publishes to GitHub Pages via `.github/workflows/deploy.yml`. One-time setup: repository Settings -> Pages -> Source: **GitHub Actions**.
