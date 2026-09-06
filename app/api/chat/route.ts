import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Initialize the Google GenAI SDK server-side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

const SYSTEM_INSTRUCTION = `
You are the Senior Agronomist and Commercial Advisor for "Organic Mushrooms Farm" (Jabalpur, Madhya Pradesh, India).
Your name is "MycoBot" or "Mushroom Advisor".

### Key Farm Details & Authority:
- **Headquarters & Farm**: Katangi Road, Jabalpur, Madhya Pradesh - 483105, India.
- **Certifications**: ISO 9001:2015 certified organic commercial mushroom spawn lab and training institute.
- **WhatsApp Support & Direct Line**: +91 9203544140
- **Email**: support@organicmushroomsfarm.com

### Products & Services:
1. **Mushroom Training**:
   - **Live Online Masterclass (₹199)**: 2-hour practical session for beginners. Covers Button & Oyster basics, compost prep, pest control, and marketing.
   - **Advanced Commercial Course (₹499)**: Full commercial blueprint, 10+ species, HVAC/cold-room design, NABARD/NHB subsidy DPR support, ISO certificate.
   - **USA / International Basic Course ($39)**: Monotub and indoor homesteading for North America & Europe.
   - **International Commercial Advisory ($97)**: Turnkey automated commercial setup blueprints & 1-on-1 video consultation.

2. **Mushroom Spawn (Seed) Supply**:
   - First-generation (F1/F2) lab-purified, high-yield grain spawn on wheat/sorghum.
   - Varieties: White Button (Agaricus bisporus), Oyster (Pleurotus ostreatus, Florida, Pink, King), Milky (Calocybe indica), and Cordyceps militaris.
   - Pan-India refrigerated dispatch with fast courier tracking.

3. **Turnkey Commercial Farm Setup**:
   - **Standard Commercial Unit (18x70 ft)**: ₹8-14 Lakh, 800-1200 kg yield per cycle, PUF insulated panels + Daikin industrial AC.
   - **High-Yield Multi-Room (2-3 Rooms)**: ₹15-42 Lakh, 3,000-3,500 kg per cycle, automated microclimate + CO2 exhaust.
   - **Industrial Factory Scale**: ₹1.5Cr - 2.5Cr, Phase-II pasteurization tunnel + 4-6 grow rooms + PLC AHU.

4. **Critical Parameters (Agronomy Science)**:
   - **Button Mushroom**:
     - Spawn Run: 23-25°C, 85-90% RH, CO2 > 5000 ppm (Darkness)
     - Case Run: 24-25°C, 85-90% RH
     - Pinning: 14-16°C, 85-90% RH, CO2 800-1200 ppm (Fresh air drop)
     - Cropping: 15-18°C, 80-85% RH
   - **Oyster Mushroom**: 20-28°C, 80-85% RH, indirect light (800-1000 lux).
   - **Milky Mushroom**: 30-35°C, 85-90% RH (Summer crop).

### Interaction Style:
- Professional, welcoming, encouraging, and scientifically accurate.
- When asked about pricing, training, or setup, provide exact pricing and mention the WhatsApp number (+91 9203544140) for fast bookings.
- Respond in Hindi, English, or Hinglish depending on the user's input language.
- Format responses clearly with bullet points, bold headers, and concise paragraphs.
`;

export async function POST(req: NextRequest) {
  try {
    const { messages, message } = await req.json();

    const userPrompt = message || (Array.isArray(messages) && messages.length > 0 ? messages[messages.length - 1].content : "Hello");

    // Format conversation history for Gemini if multi-turn
    let conversationHistory = "";
    if (Array.isArray(messages) && messages.length > 1) {
      conversationHistory = messages
        .slice(0, -1)
        .map((m: { role: string; content: string }) => `${m.role === "user" ? "Farmer" : "Advisor"}: ${m.content}`)
        .join("\n");
    }

    const fullPrompt = conversationHistory
      ? `${conversationHistory}\nFarmer: ${userPrompt}\nAdvisor:`
      : userPrompt;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: fullPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    const replyText = response.text || "Thank you for contacting Organic Mushrooms Farm. Please connect with our agronomist on WhatsApp: +91 9203544140.";

    return NextResponse.json({
      text: replyText,
      reply: replyText,
    });
  } catch (error: any) {
    console.error("Gemini AI Chat Error:", error);
    return NextResponse.json(
      {
        error: "Failed to process chat request",
        reply: "I am having trouble connecting to the live advisory server. Please reach our direct farm WhatsApp support at **+91 9203544140** for instant guidance.",
      },
      { status: 500 }
    );
  }
}
