const fs = require('fs');
let sitemap = fs.readFileSync('app/sitemap-main.xml/route.ts', 'utf-8');

const oysterRoute = `
  <url>
    <loc>\${baseUrl}/services/oyster-mushroom</loc>
    <lastmod>\${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;

if (!sitemap.includes('/services/oyster-mushroom')) {
    sitemap = sitemap.replace(
        '  <url>',
        oysterRoute + '\n  <url>'
    );
    fs.writeFileSync('app/sitemap-main.xml/route.ts', sitemap);
    console.log('done updating sitemap-main.xml/route.ts');
} else {
    console.log('sitemap already has oyster mushroom');
}
