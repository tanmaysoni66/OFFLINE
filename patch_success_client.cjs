const fs = require('fs');

// Patch Success Page
let successPage = fs.readFileSync('app/training/success/page.tsx', 'utf8');
successPage = successPage.replace(
  /export default async function TrainingSuccessPage.*\{[\s\S]*?\}/,
  `export default function TrainingSuccessPage() {
  return <TrainingSuccessClient />;
}`
);
fs.writeFileSync('app/training/success/page.tsx', successPage);

// Patch Success Client
let successClient = fs.readFileSync('app/training/success/TrainingSuccessClient.tsx', 'utf8');
if (!successClient.includes('useSearchParams')) {
  successClient = successClient.replace(/import \{ useRouter \} from 'next\/navigation';/, "import { useRouter, useSearchParams } from 'next/navigation';");
}
successClient = successClient.replace(
  /export default function TrainingSuccessClient\(\{ searchParams \}: \{ searchParams: \{ \[key: string\]: string \| undefined \} \}\) \{[\s\S]*?const router = useRouter\(\);[\s\S]*?const paymentId = searchParams\.id \|\| 'N\/A';[\s\S]*?const name = searchParams\.name \|\| 'N\/A';[\s\S]*?const phone = searchParams\.phone \|\| 'N\/A';[\s\S]*?const email = searchParams\.email \|\| 'N\/A';[\s\S]*?const type = searchParams\.type \|\| 'training_basic';/,
  `export default function TrainingSuccessClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const paymentId = searchParams.get('id') || 'N/A';
  const name = searchParams.get('name') || 'N/A';
  const phone = searchParams.get('phone') || 'N/A';
  const email = searchParams.get('email') || 'N/A';
  const type = searchParams.get('type') || 'training_basic';`
);
fs.writeFileSync('app/training/success/TrainingSuccessClient.tsx', successClient);

// Patch Cancel Page
let cancelPage = fs.readFileSync('app/training/cancel/page.tsx', 'utf8');
cancelPage = cancelPage.replace(
  /export default async function TrainingCancelPage.*\{[\s\S]*?\}/,
  `export default function TrainingCancelPage() {
  return <TrainingCancelClient />;
}`
);
fs.writeFileSync('app/training/cancel/page.tsx', cancelPage);

// Patch Cancel Client
let cancelClient = fs.readFileSync('app/training/cancel/TrainingCancelClient.tsx', 'utf8');
if (!cancelClient.includes('useSearchParams')) {
  cancelClient = cancelClient.replace(/import \{ useRouter \} from 'next\/navigation';/, "import { useRouter, useSearchParams } from 'next/navigation';");
}
cancelClient = cancelClient.replace(
  /export default function TrainingCancelClient\(\{ searchParams \}: \{ searchParams: \{ \[key: string\]: string \| undefined \} \}\) \{[\s\S]*?const router = useRouter\(\);[\s\S]*?const type = searchParams\.type === "training_advanced" \? "training_advanced" : "training_basic";/,
  `export default function TrainingCancelClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type') === "training_advanced" ? "training_advanced" : "training_basic";`
);
fs.writeFileSync('app/training/cancel/TrainingCancelClient.tsx', cancelClient);

