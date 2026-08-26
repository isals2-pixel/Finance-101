// Generate podcast.xml from lessons that have produced audio. Runs after
// `next build`; writes into out/. The feed is unlisted, not private.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
const root = process.cwd();
const outDir = path.join(root, 'out');
const lessonsDir = path.join(root, 'data', 'curriculum', 'lessons');

if (!fs.existsSync(outDir)) {
  console.error('out/ not found - run next build first');
  process.exit(1);
}

const lessons = fs
  .readdirSync(lessonsDir)
  .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
  .map((f) => matter(fs.readFileSync(path.join(lessonsDir, f), 'utf8')).data)
  .filter((d) => d.audio?.file)
  .sort((a, b) => a.lesson - b.lesson);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const items = lessons
  .map((d) => {
    const url = `${SITE_URL}/audio/${d.audio.file}`;
    const audioPath = path.join(root, 'public', 'audio', d.audio.file);
    const size = fs.existsSync(audioPath) ? fs.statSync(audioPath).size : 0;
    const pubDate = d.audio.generatedAt ? new Date(d.audio.generatedAt).toUTCString() : new Date().toUTCString();
    return `    <item>
      <title>${esc(`Lesson ${d.lesson}: ${d.title}`)}</title>
      <description>${esc(d.oneSentence ?? '')}</description>
      <enclosure url="${esc(url)}" length="${size}" type="audio/mpeg" />
      <guid isPermaLink="false">finance-academy-lesson-${d.lesson}</guid>
      <pubDate>${pubDate}</pubDate>
    </item>`;
  })
  .join('\n');

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <channel>
    <title>Finance Academy</title>
    <link>${esc(SITE_URL)}</link>
    <description>Private finance curriculum audio. Educational only - not financial advice.</description>
    <language>en</language>
    <itunes:block>Yes</itunes:block>
${items}
  </channel>
</rss>
`;

fs.writeFileSync(path.join(outDir, 'podcast.xml'), feed);
console.log(`podcast.xml written with ${lessons.length} episode(s)`);
