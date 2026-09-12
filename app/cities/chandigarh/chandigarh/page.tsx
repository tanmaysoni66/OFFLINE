import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Chandigarh Tricity | Training & Setup",
  description:
    "Start commercial & medicinal mushroom farming in Chandigarh, Mohali, Panchkula. Expert training (Hindi/Punjabi), premium spawn, and turnkey farm setup support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/chandigarh/chandigarh",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Chandigarh Tricity | Training & Setup",
    description:
      "Start commercial & medicinal mushroom farming in Chandigarh, Mohali, Panchkula. Expert training (Hindi/Punjabi), premium spawn, and turnkey farm setup support.",
    url: "https://organicmushroomsfarm.com/cities/chandigarh/chandigarh",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Chandigarh Tricity | Training & Setup",
    description:
      "Start commercial & medicinal mushroom farming in Chandigarh, Mohali, Panchkula. Expert training (Hindi/Punjabi), premium spawn, and turnkey farm setup support.",
  },
};

export default function ArticleChandigarhTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/chandigarh/chandigarh#webpage",
        url: "https://organicmushroomsfarm.com/cities/chandigarh/chandigarh",
        name: "Mushroom Farming in Chandigarh Tricity | Training & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial & medicinal mushroom farming in Chandigarh, Mohali, Panchkula. Expert training (Hindi/Punjabi), premium spawn, and turnkey farm setup support.",
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
            name: "Chandigarh",
            item: "https://organicmushroomsfarm.com/states/chandigarh",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Chandigarh",
            item: "https://organicmushroomsfarm.com/cities/chandigarh/chandigarh",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Chandigarh Tricity | Training & Setup",
        description:
          "Start commercial & medicinal mushroom farming in Chandigarh, Mohali, Panchkula. Expert training (Hindi/Punjabi), premium spawn, and turnkey farm setup support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/chandigarh/chandigarh",
        },
      },
    ],
  };

  const faqs = [
    {
      q: "Q1. क्या चंडीगढ़ के मौसम में साल भर मशरूम उगाया जा सकता है?",
      a: "उत्तर: बिल्कुल पाजी! सर्दियों में बटन मशरूम और गर्मियों में मिल्की/ऑयस्टर आसानी से उगते हैं। अगर आप हमारा एडवांस एसी (AC) Mushroom Farm Setup लगाते हैं, तो आप 365 दिन कोई भी मेडिसिनल मशरूम (Cordyceps, Shiitake) उगा सकते हैं।"
    },
    {
      q: "Q2. मशरूम फार्मिंग के लिए Government Subsidy कैसे लें?",
      a: "उत्तर: NHB (National Horticulture Board) और पंजाब/हरियाणा कृषि विभाग के अंतर्गत प्रोजेक्ट कॉस्ट पर भारी सब्सिडी मिलती है। हमारी टीम बैंक लोन और Government Subsidy के लिए जरूरी DPR तैयार करने में आपकी पूरी मदद करती है।"
    },
    {
      q: "Q3. औषधीय (Medicinal) मशरूम बेचने में Organic Mushrooms Farm कैसे मदद करेगा?",
      a: "उत्तर: औषधीय मशरूम महंगे होते हैं और इन्हें लोकल सब्जी मंडी की जगह सप्लीमेंट कंपनियों को बेचा जाता है। हमारा Mushroom Marketing Support आपको बड़े B2B बायर्स और ई-कॉमर्स प्लेटफॉर्म्स से कनेक्ट करता है।"
    }
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
              Mushroom Farming in Chandigarh, Mohali & Panchkula (चंडीगढ़ ट्राईसिटी)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Tricity, Zirakpur, Kharar, Dera Bassi & Rural Borders</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              चंडीगढ़ (Chandigarh), मोहाली (Mohali), और पंचकुला (Panchkula) का ट्राईसिटी क्षेत्र उत्तर भारत का सबसे आधुनिक, सेहत के प्रति जागरूक और तेजी से बढ़ता शहरी हब है। यहां के जिम जाने वाले युवा, डायटीशियन और बड़े कॉर्पोरेट होटल्स लगातार हाई-प्रोटीन और वीगन डाइट की मांग कर रहे हैं।
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              इसी वजह से ट्राईसिटी और इसके आसपास के इलाकों (जैसे जीरकपुर, खरड़, न्यू चंडीगढ़) में Mushroom Farming (मशरूम की खेती) एक साधारण खेती से बढ़कर एक हाई-टेक कमर्शियल एग्री-बिजनेस बन गया है।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Understanding the Tricity Market (चंडीगढ़ ट्राईसिटी की मार्केट)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              चंडीगढ़ की मार्केट पंजाब और हरियाणा दोनों के एग्रीकल्चरल बेल्ट से जुड़ी है। यहाँ हर तरह के मशरूम की भयंकर डिमांड है:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Button Mushroom Farming:</strong> मोहाली और चंडीगढ़ के 5-स्टार होटल्स, बड़े कैफे और वेडिंग इवेंट्स में बटन मशरूम सबसे ज्यादा बिकता है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Oyster & Milky Mushroom Cultivation:</strong> यह जिम जाने वाले युवाओं और वीगन डाइट फॉलो करने वालों के बीच बहुत पॉपुलर है। इसे सुखाकर प्रोटीन पाउडर भी बनाया जा रहा है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Medicinal Mushroom Farming (Cordyceps, Shiitake, Lion's Mane):</strong> ट्राईसिटी में हेल्थ सप्लीमेंट्स का बड़ा मार्केट है। कम जगह (लैब सेटअप) में औषधीय मशरूम उगाकर लाखों कमाए जा सकते हैं।</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Infrastructure: Commercial Farm Setup & Climate Control
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              चंडीगढ़ का मौसम सर्दियों में तो अच्छा रहता है, लेकिन गर्मियों में भयंकर गर्मी और उमस होती है। अगर आपको 365 दिन मशरूम उगाना है (खासकर औषधीय या बटन), तो आपको Smart Climate Control की जरूरत पड़ेगी। हम <strong>Turnkey Mushroom Projects</strong> के तहत पीयूएफ (PUF) पैनल वाले एसी फार्म और आधुनिक लैब डिजाइन करते हैं।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Substrate & Straw Management (गेहूं और धान की पराली का उपयोग)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              चंडीगढ़ के आसपास मोहाली और पंचकुला के ग्रामीण इलाकों (डेराबस्सी, नयागांव, मुल्लांपुर) में गेहूं और धान की पराली आसानी से मिल जाती है। हम आपको बेहतरीन Mushroom Compost Preparation सिखाते हैं, ताकि आप इसी वेस्ट से बेस्ट क्वालिटी मशरूम तैयार कर सकें।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Training: The Most Important Step (बिज़नेस से पहले सही ट्रेनिंग)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4 font-medium">
              मशरूम कोई आम खेती नहीं है, यह एक साइंस है। बिना सही जानकारी के फंगस या बीमारी आपकी सारी मेहनत खराब कर सकती है।
            </p>
            <div className="space-y-4 mb-8 pl-4 border-l border-black/10 dark:border-white/10">
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">1. Online Mushroom Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">घर बैठे ऑनलाइन मास्टरक्लास जॉइन करें (हिंदी और पंजाबी में)। बीज लगाने से लेकर मार्केट में बेचने तक की पूरी ए-टू-ज़ेड (A to Z) जानकारी।</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">2. Offline Mushroom Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">हैंड्स-ऑन ट्रेनिंग जहां आप खुद फार्म पर जाकर कंपोस्ट बनाना, नमी चेक करना और मशरूम तोड़ना सीखते हैं।</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">3. Professional Mushroom Consultancy:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">बड़े निवेशकों के लिए फार्म डिजाइन, बैंक लोन और बिजनेस मॉडल पर एक्सपर्ट सलाह।</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Premium Spawn & Sales Strategy (बीज और बिक्री)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              मशरूम की सफलता 100% उसके बीज (Mushroom Spawn Supply) पर निर्भर करती है। हम फर्स्ट-जनरेशन (F1), लैब-टेस्टेड स्पॉन सीधा चंडीगढ़ ट्राईसिटी में डिलीवर करते हैं।
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              <strong>मार्केटिंग सपोर्ट:</strong> Fresh Mushroom Sale के लिए सेक्टर 26 की मंडी, सुपरमार्केट्स, और बड़े रेस्टोरेंट्स बेहतरीन विकल्प हैं। वहीं Dry Mushroom Sale (ड्राई पाउडर/कैप्सूल) के जरिए आप इसे पूरे भारत में ई-कॉमर्स पर बेच सकते हैं।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Hyper-Local Coverage: चंडीगढ़ ट्राईसिटी और ग्रामीण क्षेत्र
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              चाहे आप सेक्टर 17 में रहते हों या मोहाली के बॉर्डर वाले किसी गांव में, हमारी सर्विस हर जगह उपलब्ध है:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> चंडीगढ़ अर्बन (Chandigarh Core)</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Sector 17, 22, 34, 35, 43, Manimajra, IT Park, Dhanas, Maloya, Ram Darbar</p>
              </div>
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> मोहाली और पंचकुला (Mohali & Panchkula)</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Mohali (Phase 1-11, Aerocity), Panchkula (MDC, Sec 20/21), Zirakpur, Kharar, Dera Bassi, New Chandigarh</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-brand-blue pl-3">
              Frequently Asked Questions (FAQ - Tricity)
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
                Ready to Grow Your Agribusiness in Chandigarh Tricity?
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
