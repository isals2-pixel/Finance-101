# Architecture

Living document. Reflects the built system (Phase 1). Supersedes docs/phase-0/ARCHITECTURE.md, which described the pre-revision server stack.

## System shape

A static Next.js site with no server. Three parts:

1. **Content** - markdown source packs, JSON concept graph and question pools, mp3 audio - all files in this repository, validated at build time, embedded into pages or served as static assets.
2. **Learning engine** - pure TypeScript in `/lib`: FSRS scheduling, mastery scoring, curriculum gating. No framework dependencies, fully unit-tested.
3. **Client state** - all learner data in IndexedDB on the device, backed up as an encrypted blob to a private GitHub Gist the learner owns.

```
GitHub repository ── Actions (build, test, export, feed) ──> GitHub Pages
  /data  source packs (md), concepts (json), questions (json)
  /public/audio  lesson mp3 (NotebookLM output, added by hand)
                                   │ static HTML/JS/audio/podcast.xml
                                   ▼
                            Browser (phone)
  Next.js static pages ── lesson flow: audio → prediction → visual → retrieval
  /lib engine (FSRS, mastery)      │
  IndexedDB (single learner) ◄─────┘
        │ encrypted JSON blob (learner passphrase, AES-GCM)
        ▼
  Private GitHub Gist (learner's PAT, Gist scope only)
```

## Build and deploy

- `next build` with `output: 'export'` produces `out/`. No API routes, no runtime server components; server components run at build time only, reading `/data` from the filesystem.
- `.github/workflows/deploy.yml`: on push to `main` - install, typecheck, test (includes content validation), build, generate `podcast.xml`, publish to Pages via `actions/deploy-pages`. One-time repository setting: Settings -> Pages -> Source: GitHub Actions.
- `NEXT_PUBLIC_BASE_PATH=/Finance-101` and `NEXT_PUBLIC_SITE_URL` are set in the workflow; local dev uses no base path.
- GitHub Pages limits (docs.github.com, checked 2026-08): sites should be under 1 GB; 100 GB/month soft bandwidth; 10 builds/hour soft limit when not using Actions. Twenty mono mp3 lessons at <8 MB stay far inside these. Re-verify if the repository approaches 1 GB; the escape hatch is moving audio to Release assets (all audio references are URLs).

## Content pipeline

- Source packs: `/data/curriculum/lessons/NN-slug.md`. Frontmatter = application data (questions, prediction, exercise, sources, mastery criteria, audio reference, visual). Body = the NotebookLM source document.
- `lib/content.ts` parses and Zod-validates every lesson at build time; an invalid lesson fails the build. `tests/content.test.ts` runs the same validation plus graph checks in CI (the mechanical part of the section 84 checklist).
- `/data/concepts/concepts.json` is the knowledge graph; validated as a DAG with resolvable prerequisite references and the Tier rule (no Tier 1 concept depends on a Tier 2 concept).
- `npm run export:pack -- 01` writes the audio-ready body (frontmatter stripped) to `exports/` for upload to NotebookLM.
- Audio: `/public/audio/NN-slug.mp3`, referenced from lesson frontmatter as a relative URL.

## Client architecture

- Routes: `/` (today), `/learn/[lesson]` (the four-stage lesson flow), `/review` (due FSRS reviews), `/settings` (backup, restore, delete).
- Lesson pages are statically generated per lesson via `generateStaticParams`; the full lesson object (including model answers) is embedded at build time. Model answers are hidden by the interface until an answer is locked - acceptable for a single learner who authors the content.
- `lib/db.ts` is the single definition of the IndexedDB schema (via `idb`): stores `learner`, `mastery`, `schedule`, `attempts`, `lessonState`. No user ids anywhere.
- `lib/fsrs.ts` wraps `ts-fsrs`; `lib/mastery.ts` computes per-concept mastery from attempts. Both are pure and reference-tested.
- `lib/backup.ts`: serialize all stores -> AES-GCM encrypt (PBKDF2 from a learner passphrase) -> write to one private Gist via the GitHub REST API with a fine-grained PAT (Gist scope). Restore is the reverse. Plain-file export/import is the token-free fallback. Delete-all clears IndexedDB and deletes the Gist in one action.
- Audio player: HTML5 `<audio>` with speed control, 15/30-second rewind, position persistence, completion detection, and Media Session metadata for lock-screen controls where supported. A missing audio file renders an explicit "audio not yet produced" state with the NotebookLM workflow steps; the learner can continue to the retrieval flow, and the skip is recorded honestly in lesson state.
- AI tutor: `lib/tutor.ts` defines the interface only, behind `FEATURE_TUTOR = false`. No network calls exist.

## Podcast feed

`scripts/build-feed.mjs` scans `/public/audio` and lesson metadata and writes `out/podcast.xml` with absolute enclosure URLs. The feed is unlisted, not private (see REQUIREMENTS.md residual conflict 3).

## Testing

Vitest unit tests cover the FSRS grade mapping and scheduling behavior, mastery scoring against hand-computed reference values, backup encryption round-trips, and full content validation. Playwright e2e arrives in Phase 2 with the design pass. CI runs typecheck, tests, and build on every push to main; the deploy job publishes only when all pass.
