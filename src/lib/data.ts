import { getCollection } from 'astro:content';

export function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function slugify(value: string): string {
  return (value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function getAllData() {
  const partsCollection = await getCollection('parts');
  const blogsCollection = await getCollection('blogs');
  const areasCollection = await getCollection('areas');
  const jialCollection = await getCollection('jual');

  const part = partsCollection.map(entry => ({
    ...entry.data,
    slug: entry.data.slug || entry.id,
  }));

  const blog = blogsCollection.map(entry => ({
    ...entry.data,
    slug: entry.data.slug || entry.id,
    long_title: entry.data.long_title || entry.data.title,
  }));

  const area = areasCollection.map(entry => ({
    ...entry.data,
    slug: entry.data.slug || entry.id,
  }));

  const jual = jialCollection.map(entry => ({
    ...entry.data,
    slug: entry.data.slug || entry.id,
    long_title: entry.data.long_title || entry.data.title,
  }));

  const categories = [...new Set(part.map(p => p.category))].filter(Boolean).map(cat => ({
    name: cat,
    slug: slugify(cat)
  }));

  const manufacturers = [...new Set(part.map(p => p.manufacturer))].filter(Boolean).map(m => ({
    name: m,
    slug: slugify(m)
  }));

  return {
    part,
    blog,
    area,
    jual,
    category: categories.filter(c => c.slug),
    manufacturer: manufacturers.filter(m => m.slug),
  };
}
