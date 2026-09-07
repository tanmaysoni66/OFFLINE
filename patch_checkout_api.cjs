const fs = require('fs');

let content = fs.readFileSync('app/training-checkout/TrainingCheckoutClient.tsx', 'utf8');
content = content.replace(
  /const res = await fetch\("\/api\/checkout-payload"/g,
  `const res = await fetch("/api/razorpay/order"`
);
content = content.replace(
  /planId: type/g,
  `currency: 'INR'`
);
// It returns Razorpay order, so payload.order_id should be payload.id
content = content.replace(
  /payload\.order_id/g,
  `payload.id`
);
fs.writeFileSync('app/training-checkout/TrainingCheckoutClient.tsx', content);
