# Revision - Audio Removal (2026-08-26)

Owner decision, received in session: the NotebookLM audio production workflow is too much hassle. Remove the audio generation piece entirely; lessons are read-only text in the application.

Applied as specification v2.1:

- Constraint C2 (audio produced outside the application) is deleted. No audio exists in the product.
- The lesson flow becomes read -> predict -> visualise -> retrieve. The completion gate (retrieval submitted) is unchanged.
- The source pack remains the lesson text format, now read in the app instead of feeding NotebookLM. Word budgets stand as reading-length targets (about 7-9 minutes at 200 words per minute).
- Removed from the product and codebase: audio player, audio-only mode, NotebookLM workflow and standing instruction, source pack export command, podcast RSS feed, `public/audio`, audio frontmatter fields, Media Session integration.
- Everything else stands: prediction lock, visual step, retrieval with self-scoring, confidence calibration, FSRS scheduling, mastery, interleaving, Gist backup, static GitHub-only stack.
- Residual conflicts 3 (podcast feed privacy) and 8 (iOS lock-screen playback) in REQUIREMENTS.md are closed by removal.

The v1.0 rationale for audio-first (section 7, listening while doing other activities) is consciously traded away for a workflow the owner will actually sustain. Short lessons, the daily session shape, and the retrieval-first design carry the adherence load instead.
