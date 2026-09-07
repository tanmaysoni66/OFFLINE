const fs = require('fs');

let content = fs.readFileSync('app/training-checkout/TrainingCheckoutClient.tsx', 'utf8');

const regex = /const options = \{[\s\S]*?theme: payload\.theme,/m;
const newOptions = `const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || payload.key,
        amount: payload.amount,
        currency: payload.currency,
        order_id: payload.id,
        name: "Organic Mushrooms Farm",
        description: selectedTitle + " Training",
        image: "https://res.cloudinary.com/dnw4fpk2y/image/upload/q_auto,f_auto/v1785226016/IMG-20260728-WA0000-removebg-preview_bztf7y.png",
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile
        },
        theme: {
          color: "#4f46e5"
        },`;

content = content.replace(regex, newOptions);
fs.writeFileSync('app/training-checkout/TrainingCheckoutClient.tsx', content);
