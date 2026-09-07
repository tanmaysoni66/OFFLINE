const fs = require('fs');

const checkout = `import { Metadata } from "next";
import TrainingCheckoutClient from "./TrainingCheckoutClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function TrainingCheckoutPage() {
  return <TrainingCheckoutClient />;
}
`;
fs.writeFileSync('app/training-checkout/page.tsx', checkout);
