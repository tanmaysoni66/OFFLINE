import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Gwalior | Training, Spawn & Setup",
  description:
    "Start commercial mushroom farming in Gwalior, MP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/madhya-pradesh/gwalior",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Gwalior | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Gwalior, MP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/madhya-pradesh/gwalior",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Gwalior | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Gwalior, MP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  },
};

export default function ArticleGwaliorTraining() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://organicmushroomsfarm.com/#organization",
        name: "Organic Mushrooms Farm",
        url: "https://organicmushroomsfarm.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://organicmushroomsfarm.com/icon.png",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://organicmushroomsfarm.com/#website",
        url: "https://organicmushroomsfarm.com/",
        name: "Organic Mushrooms Farm",
        publisher: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://organicmushroomsfarm.com/cities/madhya-pradesh/gwalior#webpage",
        url: "https://organicmushroomsfarm.com/cities/madhya-pradesh/gwalior",
        name: "Mushroom Farming in Gwalior | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Gwalior, MP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://organicmushroomsfarm.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "States",
            item: "https://organicmushroomsfarm.com/states",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Madhya Pradesh",
            item: "https://organicmushroomsfarm.com/states/madhya-pradesh",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Gwalior",
            item: "https://organicmushroomsfarm.com/cities/madhya-pradesh/gwalior",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Gwalior | Training, Spawn & Setup",
        description:
          "Start commercial mushroom farming in Gwalior, MP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
        author: {
          "@type": "Organization",
          name: "Organic Mushrooms Farm",
        },
        publisher: {
          "@type": "Organization",
          name: "Organic Mushrooms Farm",
          logo: {
            "@type": "ImageObject",
            url: "https://organicmushroomsfarm.com/icon.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://organicmushroomsfarm.com/cities/madhya-pradesh/gwalior",
        },
      },
    ],
  };

  const faqs = [
    { q: "1. What is the cost of mushroom farming in Gwalior?", a: "लागत आपके सेटअप पर निर्भर करती है। आप झोपड़ी (Bamboo shed) में मात्र ₹10,000 - ₹15,000 से शुरुआत कर सकते हैं, जबकि एक commercial AC setup के लिए ₹5 लाख से ₹15 लाख तक का खर्च आ सकता है।" },
    { q: "2. How much profit can be earned?", a: "मशरूम की खेती में profit margin 40% से 60% तक हो सकता है। अगर आप खुदरा (retail) मार्किट में बेचते हैं, तो मुनाफा और भी बढ़ जाता है।" },
    { q: "3. Where can I buy mushroom spawn in Gwalior?", a: "आप Organic Mushrooms Farm से उच्च गुणवत्ता वाले (quality) Oyster, Button, और Milky mushroom spawn खरीद सकते हैं। हम पूरे ग्वालियर और आस-पास के क्षेत्रों में डिलीवरी देते हैं।" },
    { q: "4. What government subsidy is available in Madhya Pradesh?", a: "National Horticulture Board (NHB) और MP कृषि/बागवानी विभाग के तहत मशरूम प्रोजेक्ट्स पर 20% से 50% तक की सब्सिडी उपलब्ध है। (योजनाओं के अनुसार बदलती रहती है)।" }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pt-24 pb-16 min-h-screen bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="mb-12 text-center">
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              Mushroom Farming in Gwalior (ग्वालियर में मशरूम की खेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Gwalior, Morar, Lashkar, Dabra, Datia & Surrounding MP Regions</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              ग्वालियर (Gwalior), मध्य प्रदेश का ऐतिहासिक और तेजी से विकसित होता हुआ शहर है। यहाँ का बढ़ता मिडिल क्लास, मॉडर्न कैफे कल्चर (Cafe culture), और होटल्स की बढ़ती संख्या मशरूम की मांग (Mushroom Demand) को तेजी से बढ़ा रहे हैं।
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              अगर आप ग्वालियर या आस-पास के क्षेत्रों (डबरा, भितरवार, दतिया, शिवपुरी) के रहने वाले हैं और एक कम निवेश वाला (Low-investment) लेकिन उच्च मुनाफे वाला (High-profit) एग्री-बिज़नेस शुरू करना चाहते हैं, तो Mushroom Farming आपके लिए सबसे बेहतरीन विकल्प है।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Mushroom Varieties Best Suited for Gwalior
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              ग्वालियर के मौसम को देखते हुए, सही मशरूम वैरायटी (Variety) का चुनाव करना बहुत जरूरी है:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Oyster Mushroom:</strong> शुरुआत करने वालों के लिए सबसे अच्छा विकल्प। इसे साधारण झोपड़ी या कमरे में कम खर्च में उगाया जा सकता है। सर्दियों और वसंत में इसकी पैदावार बहुत अच्छी होती है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Button Mushroom:</strong> होटल्स और शादियों में सबसे ज्यादा मांग। अगर आप एक AC सेटअप (Climate controlled chamber) लगाते हैं, तो इसे साल भर उगा सकते हैं।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Milky Mushroom:</strong> ग्वालियर की गर्मियों के लिए यह वैरायटी परफेक्ट है। इसे उच्च तापमान (High temperature) की जरूरत होती है।</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Mushroom Farming in Major Areas of Gwalior
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              हमारा नेटवर्क पूरे ग्वालियर जिले और आस-पास के क्षेत्रों में फैला हुआ है:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> Urban Gwalior</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Morar & Lashkar (Commercial Hubs), City Centre, Thatipur, Sirol (Modern cafes & retail)</p>
              </div>
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> Rural & Surrounding Areas</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Dabra, Bhitarwar, Panihar, Bilaua, Mohna, Datia, Shivpuri</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Training & Farm Setup
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4 font-medium">
              बिना ट्रेनिंग के मशरूम की खेती में नुकसान का खतरा रहता है। हम आपको पूरी ट्रेनिंग और गाइडेंस देते हैं:
            </p>
            <div className="space-y-4 mb-8 pl-4 border-l border-black/10 dark:border-white/10">
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">1. Online & Offline Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">घर बैठे ऑनलाइन ट्रेनिंग लें, या प्रैक्टिकल हैंड्स-ऑन अनुभव के लिए ऑफलाइन बैच ज्वाइन करें।</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">2. Farm Setup & Turnkey Projects:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">अगर आप बड़े स्तर पर काम करना चाहते हैं, तो हम आपके लिए पूरा AC Farm (Turnkey Project) तैयार करते हैं।</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">3. Marketing & Business Plan:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">हम आपको मशरूम बेचने के तरीके बताते हैं और बैंक लोन/सब्सिडी के लिए बिज़नेस प्लान भी उपलब्ध कराते हैं।</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Success Opportunities for Everyone
            </h2>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>For Farmers & FPOs:</strong> अपनी आमदनी दोगुनी करें। कृषि कचरे (भूसा) को मुनाफे में बदलें।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>For Students & Youth:</strong> Entrepreneurship की दुनिया में कदम रखें। Digital marketing और modern agritech का इस्तेमाल करें।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>For Women / SHGs:</strong> घर के काम के साथ-साथ आत्मनिर्भर बनें। घर के एक कमरे से बिज़नेस शुरू करें।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>For Startups & Investors:</strong> Turnkey projects के माध्यम से एक highly scalable food processing business खड़ा करें।</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-brand-blue pl-3">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-3 mb-12">
              {faqs.map((faq, index) => (
                <div key={index} className="p-5 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5 space-y-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-[13px]">
                    {faq.q}
                  </h4>
                  <p className="text-[12px] dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-brand-blue/10 dark:bg-brand-blue/5 p-6 rounded-2xl border border-brand-blue/20 mb-10 text-center">
              <h3 className="font-bold text-[14px] text-brand-blue mb-2">Why Choose Organic Mushrooms Farm in Gwalior?</h3>
              <p className="text-[12px] text-slate-700 dark:text-slate-300">हम सिर्फ एक mushroom seed supplier नहीं हैं, हम आपके बिज़नेस पार्टनर हैं। Gwalior के local market dynamics, MP Government की policies, और यहाँ के weather patterns की हमें गहरी समझ है। "Mushroom farm near me" सर्च करने पर आपको सबसे reliable guidance हमारे पास ही मिलेगी।</p>
            </div>

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Grow Your Agribusiness in Gwalior?
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-[12px] transition-all shadow-lg w-full sm:w-auto">
                  <MessageSquare size={16} /> WhatsApp Us: 9203544140
                </a>
                <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-slate-900 dark:text-white border border-slate-900/10 dark:border-white/20 px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-[12px] transition-all w-full sm:w-auto">
                  <Calendar size={14} /> Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
