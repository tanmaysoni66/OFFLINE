const fs = require('fs');
let sitemap = fs.readFileSync('app/sitemap-main.xml/route.ts', 'utf-8');

// The entry should look like this (or something similar depending on previous changes):
//   <url>
//     <loc>${baseUrl}/spawn-seed</loc>
//     <lastmod>${now}</lastmod>
//     <changefreq>weekly</changefreq>
//     <priority>0.90</priority>
//   </url>

sitemap = sitemap.replace(
  /<loc>\$\{baseUrl\}\/spawn-seed<\/loc>\s*<lastmod>\$\{now\}<\/lastmod>\s*<changefreq>.*<\/changefreq>\s*<priority>.*<\/priority>/,
  '<loc>${baseUrl}/spawn-seed</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>'
);

fs.writeFileSync('app/sitemap-main.xml/route.ts', sitemap);
console.log('done updating sitemap-main.xml/route.ts');
