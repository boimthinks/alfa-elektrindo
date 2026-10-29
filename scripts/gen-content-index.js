#!/usr/bin/env node
/**
 * gen-content-index.js
 * Meng-generate ulang CONTENT_INDEX.md (bagian Kategori, Brand, dan Indeks Artikel)
 * dari data riil di src/content/parts dan src/content/blog.
 *
 * Cara pakai: node scripts/gen-content-index.js
 * (Bagian "Ide Artikel Baru" manual dipertahankan agar ide yang belum terpakai tidak hilang.)
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PARTS_DIR = join(ROOT, 'src/content/parts');
const BLOG_DIR = join(ROOT, 'src/content/blog');
const INDEX_PATH = join(ROOT, 'CONTENT_INDEX.md');
const AUTOLINK_SCRIPT = join(ROOT, 'scripts/gen-autolink-terms.js');

function readBlockScalar(content, key) {
  const m = content.match(new RegExp(`^${key}:\\s*\\|-\\s*\\n\\s*([^\\n]+)`, 'm'));
  return m ? m[1].trim() : null;
}

function readScalar(content, key) {
  const m = content.match(new RegExp(`^${key}:\\s*"([^"]*)"`, 'm'));
  return m ? m[1] : null;
}

// 1. Kategori & Brand dari parts
const categories = new Map();
const brands = new Map();

for (const file of readdirSync(PARTS_DIR).filter(f => f.endsWith('.md'))) {
  const content = readFileSync(join(PARTS_DIR, file), 'utf8');
  const cat = readBlockScalar(content, 'category');
  const man = readBlockScalar(content, 'manufacturer');
  if (cat) categories.set(cat, (categories.get(cat) || 0) + 1);
  if (man) brands.set(man, (brands.get(man) || 0) + 1);
}

const catLines = [...categories.entries()]
  .sort((a, b) => b[1] - a[1])
  .map(([name, count]) => `- ${name} (${count} part)`);

const brandLines = [...brands.entries()]
  .sort((a, b) => b[1] - a[1])
  .map(([name, count]) => `- ${name} (${count} part)`);

// 2. Artikel terbit dari blog
const articles = [];
for (const file of readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'))) {
  const content = readFileSync(join(BLOG_DIR, file), 'utf8');
  const title = readScalar(content, 'long_title') || readScalar(content, 'title');
  const slug = readScalar(content, 'slug');
  const date = readScalar(content, 'date');
  if (title && slug) {
    articles.push({ title, slug, date: date ? date.slice(0, 10) : '' });
  }
}
articles.sort((a, b) => (a.date < b.date ? 1 : -1));

const articleLines = articles.map(a =>
  `| ${a.title} | ${a.slug} | ${a.date} |`
);

// 3. Pertahankan bagian "Ide Artikel Baru" manual dari file lama
let backlog = ['- (Tambahkan ide artikel di sini; bagian ini dipertahankan saat script dijalankan ulang)'];
const old = (() => {
  try { return readFileSync(INDEX_PATH, 'utf8'); } catch { return ''; }
})();
const splitIdx = old.indexOf('## 4. Ide Artikel Baru (Backlog)');
if (splitIdx !== -1) {
  const rest = old.slice(splitIdx + '## 4. Ide Artikel Baru (Backlog)'.length).trim();
  if (rest) {
    backlog = rest.split('\n').filter(l => l.trim());
  }
}

const output = `# CONTENT_INDEX
 
Daftar ini memuat kategori, brand, artikel yang sudah terbit, dan ide artikel yang akan datang.
> File ini di-generate otomatis oleh \`scripts/gen-content-index.js\`. Jangan edit bagian Kategori/Brand/Artikel secara manual; jalankan ulang script setelah ada perubahan katalog atau artikel baru.

## 1. Kategori Produk (${categories.size})
${catLines.join('\n')}

## 2. Brand / Manufacturer (${brands.size})
${brandLines.join('\n')} 
 
## 3. Indeks Artikel Terbit (${articles.length})
| Judul Artikel | Slug | Tanggal |
| :--- | :--- | :--- |
${articleLines.join('\n')}

## 4. Ide Artikel Baru (Backlog)
${backlog.join('\n')}
`;

writeFileSync(INDEX_PATH, output, 'utf8');
console.log(`CONTENT_INDEX.md diperbarui: ${categories.size} kategori, ${brands.size} brand, ${articles.length} artikel.`);

// Build autolink model dari data parts terbaru
try {
  execSync(`node "${AUTOLINK_SCRIPT}"`, { stdio: 'ignore' });
  console.log('Autolink model (src/lib/autolink-terms.ts) generated.');
} catch (err) {
  console.warn('Gagal generate autolink model:', err.message);
}

// Generate llms-full.txt dari data terbaru
const LLMS_FULL_SCRIPT = join(ROOT, 'scripts/gen-llms-full.js');
try {
  execSync(`node "${LLMS_FULL_SCRIPT}"`, { stdio: 'ignore' });
  console.log('llms-full.txt (public/llms-full.txt) generated.');
} catch (err) {
  console.warn('Gagal generate llms-full.txt:', err.message);
}