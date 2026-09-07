const fs = require('fs');
let content = fs.readFileSync('app/api/razorpay-webhook/route.ts', 'utf8');

// Replace VercelRequest, VercelResponse if they exist
content = content.replace(/import type \{ VercelRequest, VercelResponse \} from '@vercel\/node';/, "import { NextRequest, NextResponse } from 'next/server';");

// Replace the handler signature completely
content = content.replace(/export default async function handler\(req: VercelRequest, res: VercelResponse\) \{[\s\S]*?if \(req\.method !== 'POST'\) \{[\s\S]*?return res\.status\(405\)\.end.*?;[\s\S]*?\}/, `export async function POST(req: NextRequest) {`);

// Also fix `req.socket` if it exists in Firebase event logic since NextRequest doesn't have it
content = content.replace(/req\.socket\.remoteAddress/g, `req.headers.get('x-forwarded-for')`);
content = content.replace(/req\.headers\['user-agent'\]/g, `req.headers.get('user-agent')`);
content = content.replace(/req\.headers\['x-forwarded-for'\]/g, `req.headers.get('x-forwarded-for')`);

// Fix rawBody call if we left getRawBody
content = content.replace(/const rawBody = await getRawBody\(req\);/g, `const rawBody = await req.text();`);

// Fix signature
content = content.replace(/const signature = req\.headers\['x-razorpay-signature'\] as string;/g, `const signature = req.headers.get('x-razorpay-signature') as string;`);

fs.writeFileSync('app/api/razorpay-webhook/route.ts', content);
