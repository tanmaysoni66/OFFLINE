const fs = require('fs');

let content = fs.readFileSync('app/api/razorpay-webhook/route.ts', 'utf8');
content = content.replace(/export const config = \{\s*api: \{\s*bodyParser: false,\s*\},\s*\};/g, "");
fs.writeFileSync('app/api/razorpay-webhook/route.ts', content);

