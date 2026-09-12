import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Patna, Bihar | Training & Spawn",
  description:
    "Start commercial mushroom farming in Patna, Bihar. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and government subsidy guidance.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/bihar/patna",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Patna, Bihar | Training & Spawn",
    description:
      "Start commercial mushroom farming in Patna, Bihar. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and government subsidy guidance.",
    url: "https://organicmushroomsfarm.com/cities/bihar/patna",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Patna, Bihar | Training & Spawn",
    description:
      "Start commercial mushroom farming in Patna, Bihar. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and government subsidy guidance.",
  },
};

export default function ArticlePatnaTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/bihar/patna#webpage",
        url: "https://organicmushroomsfarm.com/cities/bihar/patna",
        name: "Mushroom Farming in Patna, Bihar | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Patna, Bihar. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and government subsidy guidance.",
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
            name: "Bihar",
            item: "https://organicmushroomsfarm.com/states/bihar",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Patna",
            item: "https://organicmushroomsfarm.com/cities/bihar/patna",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Patna, Bihar | Training & Spawn",
        description:
          "Start commercial mushroom farming in Patna, Bihar. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and government subsidy guidance.",
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
          "@id": "https://organicmushroomsfarm.com/cities/bihar/patna",
        },
      },
    ],
  };

  const faqs = [
    { q: "क्या पटना की भीषण गर्मी में मशरूम उगाया जा सकता है?", a: "बिल्कुल! गर्मी के मौसम के लिए 'मिल्की मशरूम' और 'पैरा मशरूम' सबसे अच्छे होते हैं। हमारे AC फार्म सेटअप के जरिए आप साल भर बटन मशरूम भी उगा सकते हैं।" },
    { q: "बिहार में मशरूम की खेती के लिए सरकारी सब्सिडी कैसे मिलेगी?", a: "बिहार बागवानी मिशन के तहत 50% तक की सब्सिडी मिलती है। हमारी टीम आपको प्रोजेक्ट रिपोर्ट (DPR) और सब्सिडी एप्लीकेशन में पूरी मदद करती है।" },
    { q: "मशरूम का बीज (Spawn) पटना में कितने दिन में डिलीवर हो जाता है?", a: "हम ऑर्डर मिलने के 24 से 48 घंटे के भीतर पटना और आसपास के जिलों (हाजीपुर, बिहटा, मसौढ़ी) में फ्रेश स्पॉन डिलीवर कर देते हैं।" },
    { q: "क्या माल बेचने में Organic Mushrooms Farm मदद करेगा?", a: "हाँ! हम पटना की लोकल मंडियों, होटल्स, और रिटेल चेन्स से आपको डायरेक्ट जोड़ते हैं, साथ ही मशरूम सुखाने (Dry Mushroom) की ट्रेनिंग भी देते हैं।" }
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
              Mushroom Farming in Patna (पटना में मशरूम की खेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Patna, Danapur, Bihta, Masaurhi, Hajipur & Surrounding Regions</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              बिहार की राजधानी पटना (Patna) आज कृषि से जुड़े स्टार्टअप्स और एग्री-बिजनेस का एक बड़ा केंद्र बन चुकी है। बढ़ती आबादी, होटल्स, और स्वास्थ्य के प्रति जागरूकता के कारण यहाँ ऑर्गेनिक और ताजे मशरूम की मांग बहुत तेजी से बढ़ी है।
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              चाहे आप पटना शहर में एक छोटे कमरे (Vertical Farming) से शुरुआत करना चाहते हों या आसपास के ग्रामीण इलाकों (बिहटा, मसौढ़ी, नौबतपुर) में एक बड़ा कमर्शियल फार्म लगाना चाहते हों, मशरूम की खेती (Mushroom Farming) कम लागत में सबसे ज्यादा मुनाफा देने वाला व्यवसाय है।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Patna is Perfect for Mushroom Cultivation
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Huge Market Demand:</strong> बोरिंग रोड, कंकड़बाग, और पाटलिपुत्र के बड़े रेस्टोरेंट्स और मंडियों में Button और Oyster मशरूम की भारी डिमांड है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Easy Substrate Availability:</strong> बिहार एक कृषि प्रधान राज्य है, इसलिए भूसा (Wheat/Paddy straw) बहुत ही सस्ती दरों पर आसानी से मिल जाता है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Government Support:</strong> बिहार बागवानी मिशन (Bihar Horticulture Mission) के तहत मशरूम झोपड़ी और कमर्शियल यूनिट्स पर भारी सब्सिडी उपलब्ध है।</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Expert Training Programs (प्रशिक्षण)</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  बिना सही जानकारी के मशरूम में बीमारियां लग सकती हैं। हमारी ऑनलाइन और ऑफलाइन ट्रेनिंग में भूसा उपचार, स्पॉनिंग, और तापमान नियंत्रण की पूरी वैज्ञानिक जानकारी दी जाती है।
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn Supply (स्पॉन)</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  हम पटना और आसपास के जिलों में F1-Gen, लैब-टेस्टेड Oyster, Button और Milky मशरूम स्पॉन सप्लाई करते हैं।
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Turnkey AC Farm Setups & Subsidy Guidance</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  पटना की भीषण गर्मी में Button Mushroom उगाने के लिए हम Fully Climate-Controlled AC Farms (PUF Panels) सेटअप करते हैं। साथ ही, सब्सिडी के लिए DPR बनाने में मदद करते हैं।
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Hyper-Local Coverage Across Patna District
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              हम पटना के शहरी और ग्रामीण, दोनों इलाकों को कवर करते हैं:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Urban Patna:</strong> Boring Road, Kankarbagh, Rajendra Nagar, Patliputra, Danapur, Phulwari Sharif, Digha, Anisabad.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Satellite & Rural Belts:</strong> Bihta, Naubatpur, Masaurhi, Punpun, Sampatchak, Maner, Paliganj, Hajipur border.</span>
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

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Start Your Mushroom Business in Patna?
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
