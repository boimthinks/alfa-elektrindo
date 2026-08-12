import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const API_URL = "https://script.google.com/macros/s/AKfycbzb_kpSYhGAg2cocBVsx6c2KvZitNhsKM5m9GeraQRNKiQCszoIVPov5lGpkkmqIJR4mw/exec";

const COLLECTIONS = {
  part: 'parts',
  blog: 'blog',
  area: 'areas',
  jual: 'jual',
};

function slugify(value) {
  return (value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Replicate api.js slug logic exactly to keep URLs unchanged
function resolveSlug(item, type) {
  switch (type) {
    case 'part':
      return item.slug || slugify(item.title);
    case 'blog':
      return item.slug || slugify(item.long_title) || slugify(item.title);
    case 'area':
      return slugify(item.slug || item.title);
    case 'jual':
      return item.slug || slugify(item.long_title) || slugify(item.title);
    default:
      return slugify(item.slug || item.title || item.long_title);
  }
}

function frontmatterFields(item, type, slug) {
  const fields = { title: item.title, slug };
  if (type === 'part') {
    for (const k of ['category', 'manufacturer', 'fifu_image_url', 'pendahuluan', 'spesifikasi', 'penjelasan_spesifikasi', 'aplikasi_dalam_industri', 'penutup']) {
      if (item[k] != null && String(item[k]).length > 0) fields[k] = item[k];
    }
  } else {
    for (const k of ['long_title', 'date', 'kategori', 'fifu_image_url', 'pendahuluan', 'content', 'kesimpulan', 'excerpt', 'description', 'image']) {
      if (item[k] != null && String(item[k]).length > 0) fields[k] = item[k];
    }
  }
  fields.published = true;
  return fields;
}

// Render every value as a YAML block scalar (|-). Safe for arbitrary content
// (HTML, quotes, newlines) with no escaping ambiguities.
function dumpBlockScalar(value) {
  let str = String(value);
  // Normalize CRLF just in case
  str = str.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const lines = str.split('\n');
  const indented = lines.map(l => `  ${l}`).join('\n');
  // Trim trailing blank lines for cleanliness, keep one newline
  return `${indented.trimEnd()}\n`;
}

function buildMarkdown(item, type, slug) {
  const fields = frontmatterFields(item, type, slug);
  const lines = ['---'];
  for (const [k, v] of Object.entries(fields)) {
    if (typeof v === 'boolean') {
      lines.push(`${k}: ${v}`);
    } else if (typeof v === 'number') {
      lines.push(`${k}: ${v}`);
    } else {
      lines.push(`${k}: |-`);
      lines.push(dumpBlockScalar(v).replace(/\n$/, ''));
    }
  }
  lines.push('---', '');
  return lines.join('\n');
}

async function fetchData() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
  return res.json();
}

async function main() {
  const data = await fetchData();
  const root = join(__dirname, '../content');

  for (const [sheetKey, folder] of Object.entries(COLLECTIONS)) {
    const items = data[sheetKey] || [];
    const dir = join(root, folder);
    mkdirSync(dir, { recursive: true });
    let count = 0;
    for (const item of items) {
      const slug = resolveSlug(item, sheetKey);
      if (!slug) continue;
      const content = buildMarkdown(item, sheetKey, slug);
      writeFileSync(join(dir, `${slug}.md`), content, 'utf8');
      count++;
    }
    console.log(`${sheetKey}: ${count} files -> src/content/${folder}/`);
  }
  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
