// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import { remarkAutolinkTerms } from './src/lib/remark-autolink-terms.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://alfa.elektrindo.co.id',
  trailingSlash: 'always',
  compressHTML: true,
  markdown: {
    processor: unified({
      remarkPlugins: [remarkAutolinkTerms]
    })
  },
  build: {
    inlineStylesheets: 'always'
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});