// Export the audio-ready body of a lesson (frontmatter stripped) for upload
// to NotebookLM. Usage: npm run export:pack -- 01   (number or slug)
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const arg = process.argv[2];
if (!arg) {
  console.error('Usage: npm run export:pack -- <lesson number or slug>');
  process.exit(1);
}

const lessonsDir = path.join(process.cwd(), 'data', 'curriculum', 'lessons');
const files = fs.readdirSync(lessonsDir).filter((f) => f.endsWith('.md') && !f.startsWith('_'));
const padded = String(arg).padStart(2, '0');
const file = files.find((f) => f.startsWith(`${padded}-`) || f.includes(arg));
if (!file) {
  console.error(`No lesson matching "${arg}" in ${lessonsDir}`);
  process.exit(1);
}

const { content, data } = matter(fs.readFileSync(path.join(lessonsDir, file), 'utf8'));
const outDir = path.join(process.cwd(), 'exports');
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, file.replace(/\.md$/, '-sourcepack.txt'));
fs.writeFileSync(outFile, content.trim() + '\n');

const words = content.trim().split(/\s+/).length;
console.log(`Exported ${outFile}`);
console.log(`Lesson ${data.lesson}: "${data.title}" - body ${words} words (calibrated band: see CONTENT_PIPELINE.md)`);
console.log('Next: new NotebookLM notebook -> add this single file -> Audio Overview with data/curriculum/audio-instruction.md');
