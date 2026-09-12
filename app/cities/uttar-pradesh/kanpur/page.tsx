import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Kanpur | Training, Spawn & Setup",
  description:
    "Start commercial mushroom farming in Kanpur, UP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/uttar-pradesh/kanpur",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Kanpur | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Kanpur, UP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/uttar-pradesh/kanpur",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Kanpur | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Kanpur, UP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  },
};

export default function ArticleKanpurTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/uttar-pradesh/kanpur#webpage",
        url: "https://organicmushroomsfarm.com/cities/uttar-pradesh/kanpur",
        name: "Mushroom Farming in Kanpur | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Kanpur, UP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
            name: "Uttar Pradesh",
            item: "https://organicmushroomsfarm.com/states/uttar-pradesh",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Kanpur",
            item: "https://organicmushroomsfarm.com/cities/uttar-pradesh/kanpur",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Kanpur | Training, Spawn & Setup",
        description:
          "Start commercial mushroom farming in Kanpur, UP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/uttar-pradesh/kanpur",
        },
      },
    ],
  };

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
              Mushroom Farming in Kanpur (कानपुर में मशरूम की खेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Kanpur Nagar, Kanpur Dehat, Unnao & Surrounding UP Regions</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              कानपुर और इसके आस-पास के क्षेत्रों में मशरूम की खेती (Mushroom Farming) एक तेजी से उभरता हुआ एग्री-बिजनेस बन गया है। बढ़ती शहरी आबादी, होटल्स और रेस्टोरेंट्स की अधिकता, और स्वास्थ्य के प्रति बढ़ती जागरूकता ने ऑर्गेनिक और ताजे मशरूम की मांग को काफी बढ़ा दिया है।
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              चाहे आप कानपुर नगर के इंडस्ट्रियल इलाके में रहते हों या कानपुर देहात के कृषि प्रधान क्षेत्र में, कम निवेश और कम जगह (Vertical Farming) में अधिक मुनाफा कमाने के लिए मशरूम की खेती सबसे बेहतरीन विकल्प है।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Strategic Varieties for Commercial Success
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              एक सफल कमर्शियल मशरूम फार्म सेटअप के लिए सही वैरायटी (Variety) चुनना सबसे जरूरी है। कानपुर के बाजार (Market Demand) के हिसाब से टॉप वैरायटीज़ हैं:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Button Mushroom:</strong> मार्केट में सबसे ज्यादा बिकने वाली वैरायटी, जिसकी शादियों और होटल्स में भारी डिमांड है। इसे सर्दियों में या AC फार्म में उगाया जाता है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Milky Mushroom:</strong> गर्मियों के मौसम (Garam Climate) के लिए बेस्ट और कमर्शियल फार्मिंग के लिए सबसे उपयुक्त।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Medicinal & Specialty:</strong> Shiitake, Lion's Mane, Reishi, और Cordyceps जैसे मशरूम प्रीमियम रेस्टोरेंट्स और वेलनेस (Wellness) मार्केट में ऊंचे दामों पर बिकते हैं।</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Modern Farm Setup & Turnkey Projects
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              अगर आप बड़े स्केल (Scale) पर शुरुआत करना चाहते हैं, तो एक स्ट्रक्चर्ड मशरूम फार्म सेटअप जरूरी है, जिसमें ह्यूमिडिटी कंट्रोल, प्रॉपर वेंटिलेशन और साफ पानी की सप्लाई हो।
            </p>
            <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl border border-black/5 dark:border-white/5 mb-8">
              <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">For Commercial Investors:</h3>
              <p className="text-[12px] text-slate-700 dark:text-slate-300 mb-4">
                बड़े कमर्शियल इन्वेस्टर्स के लिए, हमारे <strong>Turnkey Mushroom Projects</strong> सबसे बेस्ट ऑप्शन रहते हैं। इसमें इंफ्रास्ट्रक्चर प्लानिंग (Infrastructure Planning), फार्म डिजाइन (Farm Design), और उपकरणों का चयन (Equipment Selection) सब कुछ प्रोफेशनली हैंडल किया जाता है।
              </p>
              <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2">Government Subsidy:</h4>
              <p className="text-[12px] text-slate-700 dark:text-slate-300">
                उत्तर प्रदेश सरकार की एग्रीकल्चर (Agriculture), MSME और फूड प्रोसेसिंग (Food Processing) सब्सिडी स्कीम्स का फायदा उठाकर आप अपनी लागत काफी कम कर सकते हैं।
              </p>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Mushroom Training & Seed (Spawn) Supply
            </h2>
            <div className="space-y-4 mb-8 pl-4 border-l border-black/10 dark:border-white/10">
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">1. Professional Mushroom Masterclass (Hindi):</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">हमारी ऑनलाइन और ऑफलाइन ट्रेनिंग में शामिल हों। हम आपको सिखाते हैं कि कैसे जीरो से शुरुआत करके एक प्रॉफिटेबल फार्म खड़ा किया जाए।</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">2. High-Yield Spawn (बीज):</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">हम कानपुर और आसपास के क्षेत्रों में 100% कंटैमिनेशन-फ्री (Contamination-free), लैब टेस्टेड मशरूम स्पॉन सप्लाई करते हैं।</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">3. Marketing Support & Value Addition:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">फ्रेश मशरूम बेचने के अलावा, हम आपको उसे सुखाकर (Dry Mushroom), पाउडर, और अचार (Pickle) बनाकर बेचने की स्ट्रेटेजी भी देते हैं, ताकि आपको कभी नुकसान न हो।</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Local Delivery & Support Across Kanpur
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              हम कानपुर के शहरी और ग्रामीण, दोनों इलाकों को कवर करते हैं:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Kanpur Nagar (Urban):</strong> स्वरूप नगर, कल्याणपुर, सिविल लाइंस, किदवई नगर, काकादेव, गोविंदनगर, जाजमऊ।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Kanpur Dehat & Rural:</strong> अकबरपुर, पुखरायां, रूरा, घाटमपुर, बिठूर, बिल्हौर, शिवराजपुर।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl col-span-1 sm:col-span-2">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Surrounding Districts:</strong> उन्नाव (Unnao), फतेहपुर (Fatehpur), औरैया (Auraiya), कन्नौज (Kannauj)।</span>
              </li>
            </ul>

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Grow Your Agribusiness in Kanpur?
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
