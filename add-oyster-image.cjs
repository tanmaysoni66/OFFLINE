const fs = require('fs');
let code = fs.readFileSync('app/services/oyster-mushroom/page.tsx', 'utf-8');

// 1. Update OpenGraph images
code = code.replace(
  /"url": "https:\/\/res.cloudinary.com\/dnw4fpk2y\/image\/upload\/v1787977978\/buttonmushroomyield_gpbiqf.webp"/g,
  '"url": "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"'
);
code = code.replace(
  /"alt": "Mushroom cultivation and commercial mushroom farming"/g,
  '"alt": "Oyster mushroom cultivation and farming"'
);

// 2. Update Twitter images
code = code.replace(
  /"https:\/\/res.cloudinary.com\/dnw4fpk2y\/image\/upload\/v1787977978\/buttonmushroomyield_gpbiqf.webp"/g,
  '"https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"'
);

// 3. Add ImageObject schema inside JSON-LD @graph
const imageObjectSchema = `,
    {
      "@type": "ImageObject",
      "@id": "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp#image",
      "contentUrl": "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp",
      "url": "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp",
      "name": "Oyster Mushroom Cultivation",
      "description": "Oyster mushroom cultivation and farming area.",
      "representativeOfPage": true
    }
  ]
};`;

code = code.replace(/\n\s*\]\n};/, imageObjectSchema);

// 4. Update primaryImageOfPage inside WebPage
const webPageReplacement = `"name": "Oyster Mushroom Farming & Cultivation",
      "description": "Learn about oyster mushroom farming, cultivation, substrates, growing methods, harvesting and yield.",
      "isPartOf": {
        "@id": "https://organicmushroomsfarm.com/#website"
      },
      "breadcrumb": {
        "@id": "https://organicmushroomsfarm.com/services/oyster-mushroom#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp#image"
      }`;

code = code.replace(
  /"name": "Oyster Mushroom Farming & Cultivation",\n\s*"description": "Learn about oyster mushroom farming, cultivation, substrates, growing methods, harvesting and yield.",\n\s*"isPartOf": {\n\s*"@id": "https:\/\/organicmushroomsfarm.com\/#website"\n\s*},\n\s*"breadcrumb": {\n\s*"@id": "https:\/\/organicmushroomsfarm.com\/services\/oyster-mushroom#breadcrumb"\n\s*}/,
  webPageReplacement
);

// 5. Add Visible Image to Page Content
const visibleImageStr = `
          <Image
            src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"
            alt="Oyster mushroom farming and cultivation"
            width={1200}
            height={800}
            priority
            referrerPolicy="no-referrer"
            className="rounded-2xl shadow-lg my-6 w-full object-cover"
          />

          <h2`;

code = code.replace(/<h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-8 mb-3 border-l-4 border-purple-500 pl-3">\s*Why Oyster Mushrooms Are Popular/s, visibleImageStr + ' className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-8 mb-3 border-l-4 border-purple-500 pl-3">\n            Why Oyster Mushrooms Are Popular');

fs.writeFileSync('app/services/oyster-mushroom/page.tsx', code);
console.log('done updating oyster-mushroom image data');
