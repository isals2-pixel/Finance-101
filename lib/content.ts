// Build-time content loading and validation. Runs in server components
// (executed at static export) and in tests. Never shipped to the client.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { z } from 'zod';
import type { Concept, Lesson } from './types';
import { ERROR_CLASSES } from './types';

const errorClassEnum = z.enum(ERROR_CLASSES);

const classificationItemSchema = z.object({
  text: z.string().min(1),
  options: z.array(z.string().min(1)).min(2),
  answer: z.string().min(1),
  errorMap: z.record(z.string(), errorClassEnum).optional(),
});

const retrievalSchema = z
  .object({
    id: z.string().min(1),
    conceptId: z.string().min(1),
    type: z.enum(['freeRecall', 'shortAnswer', 'explanation', 'classification']),
    prompt: z.string().min(1),
    modelAnswer: z.string().optional(),
    rubricNote: z.string().optional(),
    askConfidence: z.boolean().optional().default(false),
    items: z.array(classificationItemSchema).optional(),
  })
  .superRefine((q, ctx) => {
    if (q.type === 'classification') {
      if (!q.items?.length) ctx.addIssue({ code: 'custom', message: `${q.id}: classification needs items` });
      for (const item of q.items ?? []) {
        if (!item.options.includes(item.answer))
          ctx.addIssue({ code: 'custom', message: `${q.id}: answer not in options` });
      }
    } else if (!q.modelAnswer) {
      ctx.addIssue({ code: 'custom', message: `${q.id}: written item needs a modelAnswer` });
    }
  });

const lessonFrontmatterSchema = z.object({
  lesson: z.number().int().positive(),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  oneSentence: z.string().min(10),
  level: z.number().int().positive(),
  prerequisites: z.array(z.string()),
  concepts: z.array(z.string()).min(1),
  visual: z.object({
    id: z.string().min(1),
    kind: z.enum(['diagram', 'chart', 'timeline', 'statement', 'flow']),
    requirement: z.enum(['required', 'reinforcement']),
    caption: z.string().min(1),
  }),
  prediction: z.object({ prompt: z.string().min(1), modelAnswer: z.string().min(1) }),
  retrieval: z.array(retrievalSchema).min(1),
  exercise: z.object({
    id: z.string().min(1),
    conceptId: z.string().min(1),
    type: z.literal('calculation'),
    prompt: z.string().min(1),
    answer: z.number(),
    tolerance: z.number().nonnegative(),
    explanation: z.string().min(1),
  }),
  sources: z
    .array(
      z.object({
        title: z.string().min(1),
        publisher: z.string().min(1),
        url: z.string().url(),
        publishedAt: z.string().min(4),
        verifiedAt: z.string().min(4),
      }),
    )
    .min(1),
  masteryCriteria: z.string().min(10),
});

const conceptsFileSchema = z.object({
  version: z.string(),
  concepts: z.array(
    z.object({
      id: z.string().regex(/^[a-z0-9-]+$/),
      title: z.string().min(1),
      level: z.number().int().positive(),
      tier: z.union([z.literal(1), z.literal(2)]),
      prerequisites: z.array(z.string()),
      related: z.array(z.string()),
      misconceptions: z.array(z.object({ statement: z.string().min(1), correction: z.string().min(1) })),
    }),
  ),
});

const ROOT = process.cwd();
const LESSONS_DIR = path.join(ROOT, 'data', 'curriculum', 'lessons');
const CONCEPTS_FILE = path.join(ROOT, 'data', 'concepts', 'concepts.json');

export function loadConcepts(): Concept[] {
  const raw = JSON.parse(fs.readFileSync(CONCEPTS_FILE, 'utf8'));
  const parsed = conceptsFileSchema.parse(raw);
  return parsed.concepts as Concept[];
}

export function loadLessons(): Lesson[] {
  const files = fs
    .readdirSync(LESSONS_DIR)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .sort();
  return files.map((file) => {
    const { data, content } = matter(fs.readFileSync(path.join(LESSONS_DIR, file), 'utf8'));
    const fm = lessonFrontmatterSchema.parse(data);
    const expectedPrefix = String(fm.lesson).padStart(2, '0');
    if (!file.startsWith(`${expectedPrefix}-`)) {
      throw new Error(`${file}: filename must start with ${expectedPrefix}- to match lesson number`);
    }
    return { ...fm, body: content.trim() } as Lesson;
  });
}

export function bodyWordCount(body: string): number {
  return body.split(/\s+/).filter(Boolean).length;
}

/** Throws with a list of problems if content is inconsistent. Used by CI. */
export function validateContent(lessons: Lesson[], concepts: Concept[]): void {
  const problems: string[] = [];
  const conceptIds = new Set(concepts.map((c) => c.id));
  const byId = new Map(concepts.map((c) => [c.id, c]));

  for (const c of concepts) {
    for (const p of [...c.prerequisites, ...c.related]) {
      if (!conceptIds.has(p)) problems.push(`concept ${c.id}: unknown reference ${p}`);
    }
    if (c.tier === 1) {
      for (const p of c.prerequisites) {
        if (byId.get(p)?.tier === 2) problems.push(`tier rule: tier-1 ${c.id} depends on tier-2 ${p}`);
      }
    }
  }

  // DAG check via iterative DFS cycle detection.
  const visiting = new Set<string>();
  const done = new Set<string>();
  const visit = (id: string, trail: string[]): void => {
    if (done.has(id)) return;
    if (visiting.has(id)) {
      problems.push(`cycle in concept graph: ${[...trail, id].join(' -> ')}`);
      return;
    }
    visiting.add(id);
    for (const p of byId.get(id)?.prerequisites ?? []) visit(p, [...trail, id]);
    visiting.delete(id);
    done.add(id);
  };
  for (const c of concepts) visit(c.id, []);

  const seenNumbers = new Set<number>();
  for (const l of lessons) {
    if (seenNumbers.has(l.lesson)) problems.push(`duplicate lesson number ${l.lesson}`);
    seenNumbers.add(l.lesson);
    for (const id of [...l.concepts, ...l.prerequisites]) {
      if (!conceptIds.has(id)) problems.push(`lesson ${l.slug}: unknown concept ${id}`);
    }
    for (const q of l.retrieval) {
      if (!conceptIds.has(q.conceptId)) problems.push(`lesson ${l.slug} ${q.id}: unknown concept ${q.conceptId}`);
    }
    if (!conceptIds.has(l.exercise.conceptId))
      problems.push(`lesson ${l.slug} exercise: unknown concept ${l.exercise.conceptId}`);
    const words = bodyWordCount(l.body);
    if (words < 500 || words > 1100)
      problems.push(`lesson ${l.slug}: body is ${words} words, outside 500-1100 (target band 600-900)`);
  }

  if (problems.length) throw new Error(`Content validation failed:\n- ${problems.join('\n- ')}`);
}
