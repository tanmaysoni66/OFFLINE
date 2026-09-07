const fs = require('fs');

let content = fs.readFileSync('app/api/payment-notification/route.ts', 'utf8');

// Replace VercelRequest/VercelResponse with NextRequest/NextResponse
content = content.replace(
  /import type \{ VercelRequest, VercelResponse \} from '@vercel\/node';/,
  `import { NextRequest, NextResponse } from 'next/server';`
);

// Replace handler export
content = content.replace(
  /export default async function handler\(req: VercelRequest, res: VercelResponse\) \{[\s\S]*?if \(req\.method !== 'POST'\) \{[\s\S]*?return res\.status\(405\)\.json\(\{ error: 'Method not allowed' \}\);[\s\S]*?\}[\s\S]*?try \{[\s\S]*?const payload = req\.body;[\s\S]*?await handlePaymentNotification\(payload\);[\s\S]*?return res\.status\(200\)\.json\(\{ success: true \}\);[\s\S]*?\} catch \(err: any\) \{[\s\S]*?console\.error\('Error in payment notification:', err\);[\s\S]*?return res\.status\(500\)\.json\(\{ error: err\.message \}\);[\s\S]*?\}/,
  `export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    await handlePaymentNotification(payload);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Error in payment notification:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}`
);

fs.writeFileSync('app/api/payment-notification/route.ts', content);
