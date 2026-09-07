const fs = require('fs');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\s*\} \/\>;\s*\}/g, "\n}");
  fs.writeFileSync(filePath, content);
}

fixFile('app/training/success/page.tsx');
fixFile('app/training/cancel/page.tsx');
fixFile('app/training-checkout/page.tsx');
