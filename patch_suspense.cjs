const fs = require('fs');

function wrapSuspense(filePath, clientComponentName) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('Suspense')) {
    content = `import { Suspense } from "react";\n` + content;
    content = content.replace(
      new RegExp(`return <${clientComponentName} />;`),
      `return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <${clientComponentName} />\n    </Suspense>\n  );`
    );
    fs.writeFileSync(filePath, content);
  }
}

wrapSuspense('app/training-checkout/page.tsx', 'TrainingCheckoutClient');
wrapSuspense('app/training/success/page.tsx', 'TrainingSuccessClient');
wrapSuspense('app/training/cancel/page.tsx', 'TrainingCancelClient');

