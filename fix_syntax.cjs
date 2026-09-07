const fs = require('fs');
let pn = fs.readFileSync('app/api/payment-notification/route.ts', 'utf8');

// The replacement was:
// export async function POST(req: NextRequest) {
//   try {
//     const payload = await req.json();
//     await handlePaymentNotification(payload);
//     return NextResponse.json({ success: true });
//   } catch (err: any) {
//     console.error('Error in payment notification:', err);
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }

// Let's just fix it by replacing the first part completely using split
let newPn = `import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';
import PDFDocument from 'pdfkit';

const pendingPayments = new Map<string, NodeJS.Timeout>();

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    await handlePaymentNotification(payload);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Error in payment notification:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
` + pn.substring(pn.indexOf('export async function handlePaymentNotification'));

fs.writeFileSync('app/api/payment-notification/route.ts', newPn);

let rw = fs.readFileSync('app/api/razorpay-webhook/route.ts', 'utf8');
// Fix the stray ");" at line 35
rw = rw.replace(/\);\n\}\n\nconst hashMetaUserData/g, "\n\nconst hashMetaUserData");

fs.writeFileSync('app/api/razorpay-webhook/route.ts', rw);
