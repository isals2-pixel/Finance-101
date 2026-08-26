# Changelog

## 2026-08-21 - Specification v2.0 and Phase 1

- Applied the August 2026 revision (docs/revisions/2026-08-spec-revision.md) to produce docs/SPEC_V2.md. Hard constraints: zero budget, NotebookLM-produced audio, single user, static GitHub-only stack.
- Added docs/REQUIREMENTS.md (per-section status and residual conflicts), ARCHITECTURE.md, LEARNING_SCIENCE.md, CONTENT_SCHEMA.md, CONTENT_PIPELINE.md, METRICS.md.
- Marked the Phase 0 documents (docs/phase-0/) as superseded where the revision changed them.
- Phase 1 backbone: Next.js static export, GitHub Actions deploy to Pages, podcast feed generation, IndexedDB schema (single learner), FSRS scheduling via ts-fsrs, per-concept mastery scoring, encrypted Gist backup/restore/delete, source pack export command, content validation in CI.
- Content: source pack template, standing NotebookLM instruction, Level 1 concept graph, and lesson 1 "What is money?" complete (source pack, prediction, retrieval, exercise, visual, sources). Audio pending NotebookLM production - the lesson page shows this honestly.

## 2026-08-19 - Phase 0

- Specification v1.0 analysis: proposed architecture, data model, implementation plan, risks, open questions (docs/phase-0/). No code.
