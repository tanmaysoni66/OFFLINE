const fs = require('fs');

let content = fs.readFileSync('src/pages/Blog.tsx', 'utf-8');

// Add "use client"
content = `"use client";\n` + content;

// Replace imports
content = content.replace(/import \{ Link \} from 'react-router-dom';/g, `import Link from 'next/link';`);
content = content.replace(/import SEO from '\.\.\/components\/SEO';\n/g, '');

// Remove SEO tag block
content = content.replace(/<SEO[\s\S]*?\/>/g, '');

// Replace 'to' with 'href' in Link
content = content.replace(/<Link\s+to=\{/g, '<Link href={');

// Compact styles - Page spacing
content = content.replace(/pt-32 pb-20/g, 'pt-24 md:pt-28 pb-12 relative z-20');
content = content.replace(/text-2xl md:text-4xl/g, 'text-xl md:text-2xl');

// Compact styles - Section spacing
content = content.replace(/space-y-24/g, 'space-y-10 md:space-y-12');
content = content.replace(/mb-10 px-6 py-2 rounded-2xl/g, 'mb-6 px-4 py-1.5 rounded-xl');

// Compact styles - Cards
content = content.replace(/p-8 rounded-\[2\.5rem\]/g, 'p-5 rounded-2xl');
content = content.replace(/text-\[15px\] md:text-base mb-3/g, 'text-sm mb-2');
content = content.replace(/text-slate-500 text-sm leading-relaxed mb-10 flex-grow/g, 'text-slate-500 text-xs leading-relaxed mb-4 flex-grow');
content = content.replace(/gap-8/g, 'gap-4 md:gap-6');

// Compact styles - Newsletter
content = content.replace(/p-12 rounded-\[4rem\]/g, 'p-6 md:p-8 rounded-3xl');
content = content.replace(/text-3xl font-bold dark:text-white text-slate-900 mb-4/g, 'text-xl font-bold dark:text-white text-slate-900 mb-2');

// Fix class to className if any issues, but it should be fine.

// Ensure directory exists
if (!fs.existsSync('app/blog')) {
    fs.mkdirSync('app/blog', { recursive: true });
}

fs.writeFileSync('app/blog/page.tsx', content);
console.log("Migration script finished");
