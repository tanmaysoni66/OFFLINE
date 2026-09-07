const fs = require('fs');
let content = fs.readFileSync('components/TrainingLanding.tsx', 'utf8');

content = content.replace(
  /href=\{`\/training-checkout\?type=\$\{plan\.id\}`\}/g,
  "prefetch={true}\n                href={`/training-checkout?type=${plan.id}`}"
);

fs.writeFileSync('components/TrainingLanding.tsx', content);
