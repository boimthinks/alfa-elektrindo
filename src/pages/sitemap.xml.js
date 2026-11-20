import { getAllData } from '../lib/data';

export async function GET() {
  const { part, blog, area, category, manufacturer } = await getAllData();
  const baseUrl = 'https://alfa.elektrindo.co.id';
  
  const pages = [
    '/',
    '/products/',
    '/manufacturers/',
    '/blog/',
    '/latest-products/',
    '/about-us/',
    '/contact-us/',
    '/privacy-policy/',
    '/terms/',
    '/cookie-policy/',
    '/jual-komponen/',
    // '/temp/' sengaja dikecualikan: halaman internal untuk pelacakan gambar placeholder
    ...part.map(p => `/part/${p.slug}/`),
    ...blog.map(b => `/blog/${b.slug}/`),
    ...area.map(a => `/area/${a.slug}/`),
    ...category.map(c => `/ca/${c.slug}/`),
    ...manufacturer.map(m => `/ma/${m.slug}/`)
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.includes('/part/') ? 'weekly' : 'daily'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
