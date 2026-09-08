const fs = require('fs');
let code = fs.readFileSync('app/services/oyster-mushroom/page.tsx', 'utf-8');

// Fix the missed alt replacement because the previous one targeted a different string
code = code.replace(
  /"alt": "Mushroom cultivation and commercial mushroom farming"/g,
  '"alt": "Oyster mushroom cultivation and farming"'
);

fs.writeFileSync('app/services/oyster-mushroom/page.tsx', code);
