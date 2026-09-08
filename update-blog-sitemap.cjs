const fs = require('fs');

let sitemap = fs.readFileSync('app/sitemap-main.xml/route.ts', 'utf-8');

// Ensure lib/blog-data is imported
if (!sitemap.includes('import { BLOG_POSTS } from')) {
    sitemap = sitemap.replace(
        "import { NextResponse } from 'next/server';",
        "import { NextResponse } from 'next/server';\nimport { BLOG_POSTS } from '../../lib/blog-data';"
    );
}

// 1. Remove the old /blog if it exists
sitemap = sitemap.replace(/<url>\s*<loc>\${baseUrl}\/blog<\/loc>\s*<lastmod>\${now}<\/lastmod>\s*<changefreq>weekly<\/changefreq>\s*<priority>0\.85<\/priority>\s*<\/url>/, '');

// 2. Add /blog with priority 0.95 and all dynamic posts
const blogRoutes = `
  <url>
    <loc>\${baseUrl}/blog</loc>
    <lastmod>\${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  \${BLOG_POSTS.map(post => \`
  <url>
    <loc>\${baseUrl}/blog/\${post.slug}</loc>
    <lastmod>\${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>\`).join('')}`;

if (!sitemap.includes('${baseUrl}/blog/oyster-mushroom-cultivation-india')) {
    sitemap = sitemap.replace('</urlset>', blogRoutes + '\n</urlset>');
}

fs.writeFileSync('app/sitemap-main.xml/route.ts', sitemap);
