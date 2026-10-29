import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const parts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/parts" }),
  schema: z.object({
    title: z.coerce.string(),
    slug: z.coerce.string(),
    category: z.coerce.string().optional(),
    manufacturer: z.coerce.string().optional(),
    fifu_image_url: z.coerce.string().optional(),
    pendahuluan: z.coerce.string().optional(),
    spesifikasi: z.coerce.string().optional(),
    penjelasan_spesifikasi: z.coerce.string().optional(),
    aplikasi_dalam_industri: z.coerce.string().optional(),
    penutup: z.coerce.string().optional(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false).optional(),
  }),
});

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    long_title: z.string().optional(),
    slug: z.string(),
    date: z.string().optional(),
    kategori: z.string().optional(),
    fifu_image_url: z.string().optional(),
    pendahuluan: z.string().optional(),
  }),
});

const areas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/areas" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string().optional(),
    kategori: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

const jual = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/jual" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    content: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { parts, blogs, areas, jual };
