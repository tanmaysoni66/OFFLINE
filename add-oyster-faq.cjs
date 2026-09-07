const fs = require('fs');

let code = fs.readFileSync('app/services/oyster-mushroom/page.tsx', 'utf-8');

// 1. Add FAQ Schema
const faqSchemaStr = `,
    {
      "@type": "FAQPage",
      "@id": "https://organicmushroomsfarm.com/services/oyster-mushroom#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are oyster mushrooms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oyster mushrooms are edible fungi known for their fan-shaped caps and delicate texture. They are widely used in cooking and can be cultivated on suitable organic substrates."
          }
        },
        {
          "@type": "Question",
          "name": "Is oyster mushroom farming suitable for beginners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oyster mushrooms can be a suitable option for beginners because they can grow on several suitable substrates and have a relatively short production cycle when proper cultivation conditions are maintained."
          }
        },
        {
          "@type": "Question",
          "name": "What substrate is used for oyster mushroom cultivation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common substrates include properly prepared straw and suitable sawdust-based materials. The substrate must be prepared appropriately to reduce contamination and support healthy mushroom growth."
          }
        },
        {
          "@type": "Question",
          "name": "How long does oyster mushroom cultivation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cultivation timeline varies according to the oyster mushroom species, spawn, substrate and environmental conditions. Under suitable conditions, growers can often harvest within a few weeks."
          }
        },
        {
          "@type": "Question",
          "name": "Can oyster mushrooms be grown commercially?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Oyster mushrooms can be cultivated on both small and commercial scales. Commercial viability depends on production efficiency, yield, input costs, market demand and selling price."
          }
        }
      ]
    }
  ]
};`;

code = code.replace(/}\n\s*\]\n};/g, faqSchemaStr);

// 2. Add Visible FAQ Section
const faqHtmlStr = `
          <section aria-labelledby="oyster-faq" className="mt-12 mb-8">
            <h2 id="oyster-faq" className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-6">
              Oyster Mushroom Farming – Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">What are oyster mushrooms?</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  Oyster mushrooms are edible fungi known for their fan-shaped caps and delicate texture. They are widely used in cooking and can be cultivated on suitable organic substrates.
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">Is oyster mushroom farming suitable for beginners?</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  Oyster mushrooms can be a suitable option for beginners because they can grow on several suitable substrates and have a relatively short production cycle when proper cultivation conditions are maintained.
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">What substrate is used for oyster mushroom cultivation?</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  Common substrates include properly prepared straw and suitable sawdust-based materials. The substrate must be prepared appropriately to reduce contamination and support healthy mushroom growth.
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">How long does oyster mushroom cultivation take?</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  The cultivation timeline varies according to the oyster mushroom species, spawn, substrate and environmental conditions. Under suitable conditions, growers can often harvest within a few weeks.
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">Can oyster mushrooms be grown commercially?</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  Yes. Oyster mushrooms can be cultivated on both small and commercial scales. Commercial viability depends on production efficiency, yield, input costs, market demand and selling price.
                </p>
              </div>
            </div>
          </section>

          <div className="dark:bg-purple-900/10 bg-purple-50 p-6 rounded-2xl md:rounded-3xl border border-purple-500/20 text-center mt-8 shadow-lg">`;

code = code.replace(/<div className="dark:bg-purple-900\/10 bg-purple-50 p-6 rounded-2xl md:rounded-3xl border border-purple-500\/20 text-center mt-8 shadow-lg">/g, faqHtmlStr);

// 3. Update H1 tag
code = code.replace(
  /<h1 className="text-2xl md:text-3xl font-black dark:text-white text-slate-900 mb-3 leading-tight tracking-tight">[\s\S]*?<\/h1>/,
  '<h1 className="text-3xl md:text-4xl font-black dark:text-white text-slate-900 mb-4 leading-tight tracking-tight">Oyster Mushroom Farming &amp; Cultivation</h1>'
);

fs.writeFileSync('app/services/oyster-mushroom/page.tsx', code);
console.log('done updating oyster-mushroom FAQ and H1');
