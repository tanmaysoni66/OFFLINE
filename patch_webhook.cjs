const fs = require('fs');
let content = fs.readFileSync('api/razorpay-webhook.ts', 'utf8');

// Replace VercelRequest/VercelResponse with NextRequest/NextResponse
content = content.replace(
  /import type \{ VercelRequest, VercelResponse \} from '@vercel\/node';/,
  `import { NextRequest, NextResponse } from 'next/server';`
);

// We need to parse body properly in App router. 
// Remove getRawBody
content = content.replace(/async function getRawBody[\s\S]*?\}\);[\s\n]*\}/m, '');

// Replace the handler signature and logic
const oldHandlerRegex = /export default async function handler\(req: VercelRequest, res: VercelResponse\) \{[\s\S]*?if \(req\.method !== 'POST'\) \{[\s\S]*?return res\.status\(405\)\.json\(\{ error: 'Method not allowed' \}\);[\s\S]*?\}/m;

content = content.replace(oldHandlerRegex, `export async function POST(req: NextRequest) {`);

content = content.replace(/const bodyText = await getRawBody\(req\);/g, `const bodyText = await req.text();`);

// Convert res.status(xxx).json(...) to NextResponse.json(...)
content = content.replace(/res\.status\((\d+)\)\.send\((.*?)\)/g, 'NextResponse.json({ error: $2 }, { status: $1 })');
content = content.replace(/res\.status\((\d+)\)\.json\((.*?)\)/g, 'NextResponse.json($2, { status: $1 })');
content = content.replace(/return res\.send\('ok'\);/g, `return NextResponse.json({ status: 'ok' });`);

// Fix req.headers['x-razorpay-signature']
content = content.replace(/const signature = req\.headers\['x-razorpay-signature'\];/g, `const signature = req.headers.get('x-razorpay-signature');`);

fs.writeFileSync('app/api/razorpay-webhook/route.ts', content);
