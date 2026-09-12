import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Ranchi, Jharkhand | Training & Spawn",
  description:
    "Start commercial mushroom farming in Ranchi, Jharkhand. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and NABARD subsidy guidance.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/jharkhand/ranchi",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Ranchi, Jharkhand | Training & Spawn",
    description:
      "Start commercial mushroom farming in Ranchi, Jharkhand. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and NABARD subsidy guidance.",
    url: "https://organicmushroomsfarm.com/cities/jharkhand/ranchi",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Ranchi, Jharkhand | Training & Spawn",
    description:
      "Start commercial mushroom farming in Ranchi, Jharkhand. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and NABARD subsidy guidance.",
  },
};

export default function ArticleRanchiTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/jharkhand/ranchi#webpage",
        url: "https://organicmushroomsfarm.com/cities/jharkhand/ranchi",
        name: "Mushroom Farming in Ranchi, Jharkhand | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Ranchi, Jharkhand. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and NABARD subsidy guidance.",
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
            name: "Jharkhand",
            item: "https://organicmushroomsfarm.com/states/jharkhand",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Ranchi",
            item: "https://organicmushroomsfarm.com/cities/jharkhand/ranchi",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Ranchi, Jharkhand | Training & Spawn",
        description:
          "Start commercial mushroom farming in Ranchi, Jharkhand. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and NABARD subsidy guidance.",
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
          "@id": "https://organicmushroomsfarm.com/cities/jharkhand/ranchi",
        },
      },
    ],
  };

  const faqs = [
    { q: "1. What is the cost of mushroom farming in Ranchi?", a: "शुरुआती लागत आपके स्केल पर निर्भर करती है। कमरे या बांस के शेड से ₹10,000 - ₹15,000 में काम शुरू हो सकता है। कमर्शियल (AC Setup) की लागत ₹5 लाख से ₹12 लाख तक जा सकती है।" },
    { q: "2. How much profit can be earned from mushroom cultivation?", a: "मशरूम की खेती में शुद्ध मुनाफा (profit margin) 40% से 60% के बीच होता है।" },
    { q: "3. Where can I buy high-quality mushroom spawn in Ranchi?", a: "आप सीधे Organic Mushrooms Farm के वितरण केंद्र से उच्च गुणवत्ता वाले स्पॉन (Oyster, Button, Milky) खरीद सकते हैं। हम होम डिलीवरी देते हैं।" },
    { q: "4. What government subsidies are available for mushroom projects in Jharkhand?", a: "झारखंड सरकार और नाबार्ड के तहत सामान्य वर्ग के लिए 40% और महिला/एसटी/एससी वर्ग के लिए 50% से 60% तक की सब्सिडी का प्रावधान है।" }
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
              Mushroom Farming in Ranchi (रांची में मशरूम की खेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Ranchi, Kanke, Morabadi, Namkum, Doranda & Surrounding Jharkhand Areas</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              झारखंड की राजधानी रांची (Ranchi) अपने अनुकूल मौसम, हरियाली और तेजी से बढ़ते शहरीकरण के कारण मशरूम उत्पादन (Mushroom Farming) के लिए देश के सबसे मुफीद शहरों में से एक है। साल के अधिकतर महीनों में यहाँ का तापमान नियंत्रित रहता है, जिससे मशरूम उगाने में बिजली और एयर कंडीशनिंग की लागत काफी कम आती है।
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              चाहे आप रांची के काँके (Kanke) में कमर्शियल बटन मशरूम फार्म लगाना चाहते हों, या मोरहाबादी में घर के खाली कमरे से ऑयस्टर मशरूम शुरू करना चाहते हों—Organic Mushrooms Farm आपको संपूर्ण तकनीकी व व्यावहारिक सहायता प्रदान करता है।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Ranchi is Ideal for Mushroom Farming
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Pleasant Microclimate:</strong> पठारी क्षेत्र होने के कारण रांची का मौसम अधिकांश समय मशरूम के लिए बहुत अनुकूल रहता है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Huge Local Consumption:</strong> रांची, जमशेदपुर, और धनबाद के होटल्स और बाजारों में ताजा बटन और ऑयस्टर मशरूम की भारी खपत है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Government Subsidies:</strong> झारखंड सरकार और नाबार्ड (NABARD) द्वारा मशरूम फार्मिंग पर 40% से 60% तक की भारी सब्सिडी दी जा रही है।</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer in Ranchi
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Hands-on Mushroom Training</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  वैज्ञानिक विधि से ऑयस्टर, बटन और मिल्की मशरूम उगाने का प्रशिक्षण। धान के पुआल के उपचार से लेकर बैग तैयार करने और तापमान नियंत्रण की पूरी सीख।
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn (बीज) Supply</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  रांची और आसपास के जिलों में लैब-टेस्टेड, उच्च उत्पादन क्षमता वाले F1-Gen स्पॉन की समय पर होम डिलीवरी।
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Turnkey Farm Setup & Subsidies</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  कमर्शियल फार्म डिजाइन, इंसुलेशन, फॉगर्स, और बैंक लोन/सब्सिडी हेतु विस्तृत प्रोजेक्ट रिपोर्ट (DPR) की तैयारी।
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Areas We Cover in Ranchi Region
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              हम रांची शहर और आसपास के ग्रामीण क्षेत्रों में पूरी सहायता देते हैं:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Urban Hubs:</strong> Morabadi, Bariatu, Harmu, Argora, Ashok Nagar, Doranda, Lalpur, Hindpiri.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Suburban & Farming Belts:</strong> Kanke, Mesra, Namkum, Tatisilwai, Ormanjhi, Angara, Tupudana, Ratu.</span>
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
                Ready to Start Your Mushroom Business in Ranchi?
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
