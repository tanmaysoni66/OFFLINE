import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Faridabad | Training, Spawn & Setup",
  description:
    "Start commercial mushroom farming in Faridabad. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and marketing support across Ballabhgarh & NIT.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/haryana/faridabad",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Faridabad | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Faridabad. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and marketing support across Ballabhgarh & NIT.",
    url: "https://organicmushroomsfarm.com/cities/haryana/faridabad",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Faridabad | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Faridabad. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and marketing support across Ballabhgarh & NIT.",
  },
};

export default function ArticleFaridabadTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/haryana/faridabad#webpage",
        url: "https://organicmushroomsfarm.com/cities/haryana/faridabad",
        name: "Mushroom Farming in Faridabad | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Faridabad. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and marketing support across Ballabhgarh & NIT.",
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
            name: "Haryana",
            item: "https://organicmushroomsfarm.com/states/haryana",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Faridabad",
            item: "https://organicmushroomsfarm.com/cities/haryana/faridabad",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Faridabad | Training, Spawn & Setup",
        description:
          "Start commercial mushroom farming in Faridabad. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and marketing support across Ballabhgarh & NIT.",
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
          "@id": "https://organicmushroomsfarm.com/cities/haryana/faridabad",
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
              Mushroom Farming in Faridabad (फरीदाबाद में मशरूम की खेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Ballabhgarh, NIT Faridabad, Greater Faridabad & Surrounding Villages</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              Faridabad, a major industrial and agricultural hub in the Delhi NCR region, provides a unique advantage for mushroom farming. With proximity to major wholesale markets in Delhi and local industrial sectors (like Ballabhgarh and NIT), the demand for high-quality mushrooms is massive. 
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              मशरूम की खेती (Mushroom Farming) अब पारंपरिक खेती (Traditional Farming) से आगे बढ़कर एक लाभकारी बिज़नेस बन चुकी है। फरीदाबाद और आसपास के ग्रामीण इलाकों (Dhauj, Tigaon, Chhainsa) के किसानों और युवाओं के लिए यह एक हाई-प्रॉफिट (High-Profit) अवसर है।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Understanding the Faridabad Market (बाज़ार की मांग)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              फरीदाबाद के मौसम (सर्दियों में ठंड, गर्मियों में लू) को ध्यान में रखते हुए, यहाँ कई वैरायटी उगाई जा सकती हैं:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Button Mushroom Farming:</strong> फरीदाबाद के होटल्स और शादियों के सीजन में इसकी सबसे ज़्यादा मांग होती है। सर्दियों में इसे झोपड़ियों में, और साल भर AC फार्म में उगाया जाता है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Oyster & Milky Mushroom:</strong> Oyster सर्दियों/वसंत में और Milky गर्मियों में उगाई जाती है। इसे सुखाकर भी अच्छे दाम पर बेचा जा सकता है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Medicinal Mushrooms (Cordyceps, Shiitake):</strong> हेल्थ सप्लीमेंट इंडस्ट्री के लिए, जिन्हें छोटे इनडोर AC सेटअप में उगाकर भारी मुनाफा कमाया जा सकता है।</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Infrastructure: Farm Setup & Climate Control
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              फरीदाबाद की गर्मी से बचने और 12 महीने लगातार उत्पादन (Round-the-year production) के लिए, हम <strong>Turnkey Mushroom Projects</strong> सेटअप करते हैं। इसमें PUF Panel कमरे, चिलर (Chillers), और ऑटोमैटिक ह्यूमिडिफायर (Smart Climate Control) शामिल होते हैं, जो बाहर के मौसम का असर फार्म पर नहीं पड़ने देते।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Training: The Crucial First Step (बिना सीखे निवेश न करें)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4 font-medium">
              मशरूम उगाने में सफाई (Hygiene) और तापमान (Temperature) का बहुत बड़ा रोल होता है। थोड़ी सी भी गलती से फंगस लग सकता है। हम ऑफर करते हैं:
            </p>
            <div className="space-y-4 mb-8 pl-4 border-l border-black/10 dark:border-white/10">
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">1. Online Mushroom Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">हिंदी में हमारी विस्तृत ऑनलाइन क्लास (Online Class) ज्वाइन करें जहाँ खाद (Compost) बनाने से लेकर कटाई (Harvesting) तक सब कुछ सिखाया जाता है।</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">2. Offline Mushroom Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">प्रैक्टिकल हैंड्स-ऑन (Hands-on) ट्रेनिंग, ताकि आप असली फार्म पर काम का अनुभव ले सकें।</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">3. Professional Mushroom Consultancy:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">कमर्शियल प्रोजेक्ट्स के लिए, प्रोजेक्ट रिपोर्ट (Project Report), लोन गाइडेंस और फार्म डिज़ाइनिंग सपोर्ट।</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Premium Spawn & Sales Strategy (बीज और बिक्री)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              आपके मशरूम की क्वालिटी 100% उसके बीज (Mushroom Spawn Supply) पर निर्भर करती है। हम लैब-टेस्टेड (Lab-Tested) फर्स्ट-जेनरेशन स्पॉन फरीदाबाद में सप्लाई करते हैं।
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              <strong>मार्केटिंग सपोर्ट:</strong> फरीदाबाद से आप आसानी से ओखला (Okhla) मंडी, आज़ादपुर (Azadpur) मंडी, और लोकल डबुआ (Dabua) मंडी में माल सप्लाई कर सकते हैं। इसके अलावा होटल्स और B2B बायर्स से सीधे जुड़ने में हम आपकी मदद करते हैं।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Hyper-Local Coverage: फरीदाबाद और आसपास
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              हम फरीदाबाद के हर हिस्से में सर्विस और ट्रेनिंग प्रोवाइड करते हैं:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> Urban / Industrial Zones</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">NIT Faridabad (All sectors), Ballabhgarh, Greater Faridabad (Neharpar), Surajkund</p>
              </div>
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> Rural / Agri Belts</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Dhauj, Tigaon, Chhainsa, Pali Belt, Mohna Area, Neemka Rural Region</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Conclusion: आज ही शुरुआत करें!
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              फरीदाबाद उत्तर भारत में mushroom business development के लिए सबसे उपयुक्त और तेज़ी से बढ़ते शहरों में से एक है। यहाँ का ट्रांसपोर्ट नेटवर्क और बढ़ता फ़ूड बाज़ार इसे होलसेल डिस्ट्रीब्यूशन के लिए परफेक्ट बनाता है।
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              चाहे आपका लक्ष्य एक छोटी यूनिट लगाना हो या एक हाई-टेक कमर्शियल फार्म, Organic Mushrooms Farm आपकी पूरी मदद करेगा। Contact us today!
            </p>

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Grow Your Agribusiness in Faridabad?
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-[12px] transition-all shadow-lg w-full sm:w-auto">
                  <Phone size={16} /> WhatsApp Us: 9203544140
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
