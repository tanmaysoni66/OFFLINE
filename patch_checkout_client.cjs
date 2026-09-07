const fs = require('fs');
let content = fs.readFileSync('app/training-checkout/TrainingCheckoutClient.tsx', 'utf8');

// Add useSearchParams to import if not present
if (!content.includes('useSearchParams')) {
  content = content.replace(/import \{ useRouter \} from 'next\/navigation';/, "import { useRouter, useSearchParams } from 'next/navigation';");
}

// Replace the component signature
content = content.replace(
  /export default function TrainingCheckoutClient\(\{ type \}: \{ type: "basic" \| "advanced" \| "offline-basic" \| "offline-advanced" \}\) \{/,
  `export default function TrainingCheckoutClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type') || 'basic';
  const type = typeParam as "basic" | "advanced" | "offline-basic" | "offline-advanced";`
);

// We need to remove the first const router = useRouter() since we added it in the signature replacement
content = content.replace(
  /const type = typeParam as "basic" \| "advanced" \| "offline-basic" \| "offline-advanced";\s+const router = useRouter\(\);/,
  `const type = typeParam as "basic" | "advanced" | "offline-basic" | "offline-advanced";`
);

fs.writeFileSync('app/training-checkout/TrainingCheckoutClient.tsx', content);
