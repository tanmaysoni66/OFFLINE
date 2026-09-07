const fs = require('fs');
let code = fs.readFileSync('app/services/oyster-mushroom/page.tsx', 'utf-8');

// There's a trailing comma syntax issue because of my replacement.
// Let's fix it by parsing or doing exact string replacement.
code = code.replace(/\]\n    ,\n    \{/g, ']\n    },\n    {');
// Wait, my replacement logic was: code.replace(/}\n\s*\]\n};/g, faqSchemaStr);
// Which means I replaced "} ] };" with ", { @type: FAQPage ... } ] };"
// Let's just fix it by looking at lines.

fs.writeFileSync('app/services/oyster-mushroom/page.tsx', code);
