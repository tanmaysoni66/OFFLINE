const fs = require('fs');

// Fix app/blog/[slug]/page.tsx
let slugCode = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf-8');
slugCode = slugCode.replace(/\\\`https:\/\/organicmushroomsfarm\.com\/blog\/\$\\{post\.slug\\}\\\`/g, '`https://organicmushroomsfarm.com/blog/${post.slug}`');
slugCode = slugCode.replace(/\\\`\\\$\\{postUrl\\}#article\\\`/g, '`${postUrl}#article`');
slugCode = slugCode.replace(/\\\`\\\$\\{postUrl\\}#webpage\\\`/g, '`${postUrl}#webpage`');
// Let's just do a blind replace of escaped backticks since they were generated wrong in my previous run_command
slugCode = slugCode.replace(/\\`/g, '`');
slugCode = slugCode.replace(/\\\$/g, '$');
fs.writeFileSync('app/blog/[slug]/page.tsx', slugCode);

// Fix app/blog/page.tsx
let indexCode = fs.readFileSync('app/blog/page.tsx', 'utf-8');
indexCode = indexCode.replace(/\\`/g, '`');
indexCode = indexCode.replace(/\\\$/g, '$');
fs.writeFileSync('app/blog/page.tsx', indexCode);

console.log("fixed template literal syntax errors in blog pages");
