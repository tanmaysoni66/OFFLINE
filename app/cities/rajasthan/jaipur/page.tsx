import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Jaipur | Training, Spawn & Setup",
  description:
    "Start commercial mushroom farming in Jaipur, Rajasthan. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/rajasthan/jaipur",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Jaipur | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Jaipur, Rajasthan. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/rajasthan/jaipur",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Jaipur | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Jaipur, Rajasthan. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  },
};

export default function ArticleJaipurTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/rajasthan/jaipur#webpage",
        url: "https://organicmushroomsfarm.com/cities/rajasthan/jaipur",
        name: "Mushroom Farming in Jaipur | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Jaipur, Rajasthan. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
            name: "Rajasthan",
            item: "https://organicmushroomsfarm.com/states/rajasthan",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Jaipur",
            item: "https://organicmushroomsfarm.com/cities/rajasthan/jaipur",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Jaipur | Training, Spawn & Setup",
        description:
          "Start commercial mushroom farming in Jaipur, Rajasthan. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/rajasthan/jaipur",
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
              Mushroom Farming in Jaipur (जयपुर में मशरूम की खेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Jaipur, Vaishali Nagar, Mansarovar, Jagatpura, Chomu & Surrounding Regions</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              जयपुर, जिसे पिंक सिटी (Pink City) के नाम से भी जाना जाता है, राजस्थान का प्रमुख आर्थिक, पर्यटन और शैक्षिक केंद्र है। तेजी से बढ़ती शहरी आबादी, 5-स्टार होटल्स की भरमार और स्वास्थ्य के प्रति जागरूकता (Health awareness) ने जयपुर में ऑर्गेनिक और ताजे मशरूम की मांग में भारी उछाल ला दिया है।
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              अगर आप जयपुर (Jaipur) या उसके आस-पास के क्षेत्रों (चोमू, सांगानेर, बस्सी, दूदू) में एक लाभदायक एग्री-बिजनेस शुरू करना चाहते हैं, तो <strong>Mushroom Farming (मशरूम की खेती)</strong> आपके लिए एक गेम-चेंजर साबित हो सकता है।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Jaipur is Perfect for Mushroom Farming?
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Massive Hotel & Tourism Market:</strong> जयपुर में हर साल लाखों पर्यटक आते हैं। लग्जरी होटल्स, रिसॉर्ट्स, और कैफे में Button और Oyster मशरूम की रोजाना भारी खपत होती है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>No Huge Farmland Required:</strong> जयपुर जैसे महंगे रियल एस्टेट वाले शहर में, आप इसे केवल एक कमरे, बेसमेंट या खाली पड़े शेड से (Vertical Farming) शुरू कर सकते हैं।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Available Substrate (Raw Material):</strong> राजस्थान कृषि प्रधान राज्य है, जिससे गेहूं का भूसा और सरसों की तूड़ी (Mustard straw) बहुत ही सस्ती दरों पर उपलब्ध हो जाती है।</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Mushroom Farming Services in Jaipur
            </h2>
            <div className="space-y-4 mb-8 pl-4 border-l border-black/10 dark:border-white/10">
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">1. Expert Training (Online & Offline in Hindi):</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">बिना सही जानकारी के मशरूम की खेती में फंगस या बीमारी लगने का रिस्क रहता है। हमारी ट्रेनिंग में आपको भूसा उपचार, स्पॉनिंग (Spawning), नमी नियंत्रण (Humidity control) और कटाई (Harvesting) की पूरी वैज्ञानिक जानकारी दी जाती है।</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">2. High-Quality Mushroom Spawn (बीज):</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">हम जयपुर में F1-Gen, लैब-टेस्टेड Oyster, Button और Milky मशरूम स्पॉन सप्लाई करते हैं।</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">3. AC Farm Setup (Turnkey Projects):</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">जयपुर की चिलचिलाती गर्मी में Button Mushroom उगाने के लिए हम Fully Climate-Controlled AC Farms (PUF Panels) सेटअप करते हैं।</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Hyper-Local Coverage: जयपुर और आसपास के क्षेत्र
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              हम जयपुर के सभी शहरी, उपनगरीय और ग्रामीण इलाकों में अपनी सेवाएं और लॉजिस्टिक्स सपोर्ट पहुंचा रहे हैं:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> Major Urban Clusters</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Vaishali Nagar, Mansarovar, Jagatpura, Malviya Nagar, Sanganer, Vidhyadhar Nagar, Jhotwara, C-Scheme, Raja Park</p>
              </div>
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> Satellite Towns</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Chomu, Bagru, Shahpura, Kotputli, Achrol, Chandwaji, Dudu, Phagi, Bassi, Sambhar Lake, Jobner, Jamwa Ramgarh</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Strategic Marketing Support & Processing
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              नए मशरूम उत्पादकों के सामने सबसे बड़ी चुनौती होती है—"माल कहां बेचें?" इसके लिए <strong>Organic Mushrooms Farm</strong> आपको एक रेडीमेड मार्केटिंग इकोसिस्टम प्रदान करता है:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[12px] text-slate-700 dark:text-slate-300 mb-8">
              <li><strong>B2B Direct Supply:</strong> जयपुर की मुहाना मंडी (Muhana Mandi) और लाल कोठी सब्जी मंडी के थोक विक्रेताओं से सीधा संपर्क।</li>
              <li><strong>HORECA Network:</strong> जयपुर के प्रमुख फाइव-स्टार होटलों, रिसॉर्ट्स (जैसे कूकस और दिल्ली रोड के रिसॉर्ट्स) और कैफे के साथ कॉन्ट्रैक्ट्स।</li>
              <li><strong>Value-Added Processing:</strong> यदि आपका फ्रेश मशरूम नहीं बिक पाता है, तो हम उसे सुखाकर Mushroom Powder, Mushroom Pickle (अचार), और Mushroom Papad बनाने की ट्रेनिंग देते हैं।</li>
            </ul>

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Grow Your Agribusiness in Jaipur?
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
