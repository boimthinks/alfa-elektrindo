const API_URL = "https://script.google.com/macros/s/AKfycbzb_kpSYhGAg2cocBVsx6c2KvZitNhsKM5m9GeraQRNKiQCszoIVPov5lGpkkmqIJR4mw/exec";

let cachedData = null;

export async function getAllData() {
  if (cachedData) return cachedData;
  
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from Google Sheets`);
    }
    const data = await response.json();
    
    // Derive categories and manufacturers from parts
    const categories = [...new Set(data.part.map(p => p.category))].filter(Boolean).map(cat => ({
      name: cat,
      slug: cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    }));
    
    const manufacturers = [...new Set(data.part.map(p => p.manufacturer))].filter(Boolean).map(m => ({
      name: m,
      slug: m.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    }));
    
    cachedData = {
      part: data.part.map(p => ({
        ...p,
        slug: p.slug || p.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      })).filter(p => p.slug),
      blog: data.blog.map(b => ({
        ...b,
        slug: b.slug || b.long_title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || b.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      })).filter(b => b.slug),
      area: data.area.map(a => ({
        ...a,
        slug: (a.slug || a.title || "").toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
      })).filter(a => a.slug),
      jual: data.jual.filter(j => j.slug),
      category: categories.filter(c => c.slug),
      manufacturer: manufacturers.filter(m => m.slug)
    };
    
    return cachedData;
  } catch (error) {
    console.error(`Error fetching data:`, error);
    return { part: [], blog: [], area: [], jual: [], category: [], manufacturer: [] };
  }
}

export function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
