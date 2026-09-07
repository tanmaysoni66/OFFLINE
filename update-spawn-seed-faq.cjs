const fs = require('fs');

let code = fs.readFileSync('app/spawn-seed/page.tsx', 'utf-8');

// Update FAQ JSON-LD answers
code = code.replace(
  /"text": "Unusual green, pink, black or other abnormal growth can indicate contamination. Spawn should be inspected carefully before it is introduced into the cultivation substrate."/g,
  '"text": "Unusual green, pink, black or other abnormal growth can indicate contamination. Spawn should be inspected carefully before use."'
);
code = code.replace(
  /"text": "Consider the mushroom species, spawn freshness, purity, cultivation method and compatibility with the intended substrate before selecting mushroom spawn."/g,
  '"text": "Consider the mushroom species, spawn freshness, purity, cultivation method and compatibility with the intended substrate."'
);

// Replace the links block
const oldLinksBlock = `<div className="space-y-4 my-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
            <p>
              Learn more about our{" "}
              <Link href="/training" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                mushroom farming training
              </Link>{" "}
              programs and practical cultivation guidance.
            </p>

            <p>
              If you are planning a commercial farm, explore our{" "}
              <Link href="/mushroom-farming-business-plan" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                mushroom farming business plan
              </Link>
              .
            </p>

            <p>
              You can also explore our{" "}
              <Link href="/mushroomfarmingcalculators" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                mushroom farming calculators
              </Link>{" "}
              for cultivation and farm planning.
            </p>

            <p>
              For commercial project guidance, visit our{" "}
              <Link href="/enquiry" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                mushroom farm enquiry
              </Link>{" "}
              page.
            </p>
          </div>`;

const newLinksBlock = `<div className="space-y-4 my-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
            <p>
              Learn more about our{" "}
              <Link href="/training" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                mushroom farming training
              </Link>{" "}
              programs.
            </p>

            <p>
              For mushroom farm planning, explore our{" "}
              <Link href="/mushroomfarmingcalculators" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                mushroom farming calculators
              </Link>
              .
            </p>

            <p>
              For commercial mushroom farming guidance,{" "}
              <Link href="/enquiry" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                send us an enquiry
              </Link>.
            </p>

            <p>
              Explore our <Link href="/gallery" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">mushroom farming gallery</Link> to see cultivation, farm infrastructure and harvesting images.
            </p>
          </div>`;

code = code.replace(oldLinksBlock, newLinksBlock);

fs.writeFileSync('app/spawn-seed/page.tsx', code);
console.log('done updating spawn-seed/page.tsx');
