const fs = require('fs');

const checkout = `import { Metadata } from "next";
import TrainingCheckoutClient from "./TrainingCheckoutClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function TrainingCheckoutPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const params = await searchParams;
  const type = (params.type as "basic" | "advanced" | "offline-basic" | "offline-advanced") || "basic";
  return <TrainingCheckoutClient type={type} />;
}
`;
fs.writeFileSync('app/training-checkout/page.tsx', checkout);

const success = `import { Metadata } from "next";
import TrainingSuccessClient from "./TrainingSuccessClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function TrainingSuccessPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const params = await searchParams;
  return <TrainingSuccessClient searchParams={params} />;
}
`;
fs.writeFileSync('app/training/success/page.tsx', success);

const cancel = `import { Metadata } from "next";
import TrainingCancelClient from "./TrainingCancelClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function TrainingCancelPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const params = await searchParams;
  return <TrainingCancelClient searchParams={params} />;
}
`;
fs.writeFileSync('app/training/cancel/page.tsx', cancel);
