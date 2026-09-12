import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Dehradun | Training, Spawn & Setup",
  description:
    "Start mushroom farming in Dehradun, Uttarakhand. Expert online/offline training in Hindi, premium spawn supply, turnkey farm setup, and complete market linkage support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/uttarakhand/dehradun",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Dehradun | Training, Spawn & Setup",
    description:
      "Start mushroom farming in Dehradun, Uttarakhand. Expert online/offline training in Hindi, premium spawn supply, turnkey farm setup, and complete market linkage support.",
    url: "https://organicmushroomsfarm.com/cities/uttarakhand/dehradun",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Dehradun | Training, Spawn & Setup",
    description:
      "Start mushroom farming in Dehradun, Uttarakhand. Expert online/offline training in Hindi, premium spawn supply, turnkey farm setup, and complete market linkage support.",
  },
};

export default function ArticleDehradunTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/uttarakhand/dehradun#webpage",
        url: "https://organicmushroomsfarm.com/cities/uttarakhand/dehradun",
        name: "Mushroom Farming in Dehradun | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start mushroom farming in Dehradun, Uttarakhand. Expert online/offline training in Hindi, premium spawn supply, turnkey farm setup, and complete market linkage support.",
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
            name: "Uttarakhand",
            item: "https://organicmushroomsfarm.com/states/uttarakhand",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Dehradun",
            item: "https://organicmushroomsfarm.com/cities/uttarakhand/dehradun",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Dehradun | Training, Spawn & Setup",
        description:
          "Start mushroom farming in Dehradun, Uttarakhand. Expert online/offline training in Hindi, premium spawn supply, turnkey farm setup, and complete market linkage support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/uttarakhand/dehradun",
        },
      },
    ],
  };

  const faqs = [
    { q: "1. देहरादून में mushroom farming की लागत कितनी है?", a: "Scale के हिसाब से अलग होती है — घरेलू छोटी unit के लिए ₹10,000-₹25,000 से शुरुआत की जा सकती है, commercial scale के लिए ज़्यादा निवेश चाहिए।" },
    { q: "2. कितना मुनाफा हो सकता है?", a: "सही management और consistent hotel/resort demand के साथ monthly अच्छा margin संभव है।" },
    { q: "3. Mushroom spawn कहां मिलेगा?", a: "हमारे यहां से पूरे उत्तराखंड और pan-India delivery के साथ spawn खरीदा जा सकता है।" },
    { q: "4. Training कैसे join करें?", a: "WhatsApp के ज़रिए संपर्क करके online या offline training के लिए registration किया जा सकता है।" },
    { q: "5. क्या online training उपलब्ध है?", a: "हां, Hindi में पूरे सपोर्ट के साथ complete online training उपलब्ध है।" },
    { q: "6. देहरादून में offline training मिलेगी?", a: "हां, देहरादून में practical hands-on offline training की व्यवस्था है।" },
    { q: "7. कितनी जगह चाहिए?", a: "छोटे स्तर के लिए 100-200 sq ft काफी है, commercial के लिए ज़्यादा जगह चाहिए।" },
    { q: "8. क्या महिलाएं mushroom farming शुरू कर सकती हैं?", a: "बिल्कुल, घर बैठे महिलाएं आसानी से यह व्यवसाय शुरू कर सकती हैं।" },
    { q: "9. क्या छात्र भी शुरू कर सकते हैं?", a: "बिल्कुल, कम निवेश और समय में छात्रों के लिए भी यह अच्छा विकल्प है।" },
    { q: "10. क्या government subsidy उपलब्ध है?", a: "Eligibility criteria के अनुसार कुछ योजनाओं के ज़रिए सहायता मिल सकती है, हम guidance देते हैं।" },
    { q: "11. कौन सी mushroom variety सबसे अच्छी है?", a: "Oyster mushroom beginners के लिए शुरुआत करने का सबसे आसान विकल्प है।" },
    { q: "12. Mushroom hotels-resorts tak kaise pahunchayein?", a: "Direct partnerships, consistent quality aur reliable delivery schedule ke through — hum yeh setup karne mein madad karte hain।" },
    { q: "13. क्या आप consultancy देते हैं?", a: "हां, production से लेकर marketing तक पूरी consultancy उपलब्ध है।" },
    { q: "14. Turnkey project भी मिलता है?", a: "हां, बड़े investors के लिए complete turnkey mushroom project setup दिया जाता है।" },
    { q: "15. Marketing support मिलेगा?", a: "हां, packaging, branding और hotel/buyer connection में पूरा support मिलता है।" },
    { q: "16. देहरादून के किन इलाकों में सेवा उपलब्ध है?", a: "Rajpur Road, Prem Nagar, Clement Town, Vasant Vihar, Sahastradhara Road, Ballupur, Jakhan, Dharampur और आसपास के सभी इलाकों में।" },
    { q: "17. क्या Doiwala या Rishikesh में भी सेवा मिलेगी?", a: "हां, Doiwala, Rishikesh, Mussoorie, Vikasnagar समेत नज़दीकी सभी इलाके कवर किए जाते हैं।" },
    { q: "18. Dry mushroom की shelf life कितनी होती है?", a: "सही storage के साथ dry mushroom महीनों तक अच्छी quality में रहता है।" },
    { q: "19. क्या medicinal mushroom farming profitable है?", a: "हां, Lion's Mane, Reishi जैसी varieties premium price पर बिकती हैं, margin ज़्यादा होता है।" },
    { q: "20. Business plan कैसे मिलेगा?", a: "आपके scale के हिसाब से customized project report और ROI analysis दिया जाता है।" },
    { q: "21. Contact कैसे करें?", a: "WhatsApp के ज़रिए सीधा संपर्क किया जा सकता है, जिसका response सबसे तेज़ होता है।" }
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
              Mushroom Farming in Dehradun, Uttarakhand (देहरादून में मशरूम की खेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Dehradun, Rishikesh, Mussoorie & Doiwala Regions</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              पहाड़ों की रानी मसूरी के पास बसा देहरादून अपने अनुकूल मौसम और तेजी से बढ़ते हॉस्पिटैलिटी सेक्टर (Hospitality Sector) के कारण Mushroom Farming (मशरूम की खेती) के लिए एक शानदार जगह है। यहाँ के होटल्स, रिसॉर्ट्स और कैफे में ताज़े और ऑर्गेनिक मशरूम की भारी मांग है।
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              अगर आप देहरादून या आसपास के क्षेत्रों (ऋषिकेश, विकासनगर, डोईवाला) में एक नया एग्री-बिजनेस (Agribusiness) शुरू करने की सोच रहे हैं, तो मशरूम की खेती एक बेहतरीन और हाई-प्रॉफिट (High-Profit) विकल्प हो सकता है।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Understanding the Dehradun Market & Demand (मार्केट और डिमांड)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              देहरादून का मौसम मशरूम उगाने के लिए काफी अनुकूल है। यहाँ मुख्य रूप से इन मशरूम्स की डिमांड है:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Button Mushroom Farming:</strong> सर्दियों में यह आसानी से उगता है और देहरादून-मसूरी के होटल्स-रिसॉर्ट्स में इसकी सबसे ज्यादा मांग रहती है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Oyster Mushroom Cultivation:</strong> यह तेजी से बढ़ता है और इसे सुखाकर भी बेचा जा सकता है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Medicinal Mushroom Farming (Cordyceps, Shiitake):</strong> हेल्थ कॉन्शियस लोगों के बीच इनकी डिमांड बढ़ रही है। इसे छोटे से लैब सेटअप में भी उगाया जा सकता है।</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Infrastructure: Commercial Farm Setup
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              देहरादून के बदलते मौसम में साल भर लगातार उत्पादन के लिए सही इंफ्रास्ट्रक्चर जरूरी है। हम <strong>Turnkey Mushroom Projects</strong> के जरिए इंसुलेटेड (Insulated) कमरों और Smart Climate Control (तापमान और आर्द्रता नियंत्रण) के साथ फार्म डिजाइन करते हैं, जिससे आपको साल भर उत्पादन मिल सके।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Training: The Crucial First Step (सबसे जरूरी कदम: ट्रेनिंग)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4 font-medium">
              मशरूम की खेती एक तकनीकी प्रक्रिया है। सही जानकारी के बिना नुकसान का डर रहता है। हम ऑफर करते हैं:
            </p>
            <div className="space-y-4 mb-8 pl-4 border-l border-black/10 dark:border-white/10">
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">1. Online Mushroom Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">हिंदी में विस्तार से पूरी प्रक्रिया सीखें—स्पॉनिंग से लेकर हार्वेस्टिंग तक, अपने घर से।</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">2. Offline Mushroom Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">प्रैक्टिकल हैंड्स-ऑन (Hands-on) ट्रेनिंग, जहाँ आप खुद कंपोस्ट बनाना और फार्म मैनेज करना सीखते हैं।</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">3. Professional Mushroom Consultancy:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">बड़े प्रोजेक्ट्स के लिए तकनीकी सपोर्ट और फार्म लेआउट प्लानिंग।</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Premium Spawn & Sales Strategy (बीज और बिक्री)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              मशरूम की क्वालिटी सीधे तौर पर उसके बीज (Mushroom Spawn) पर निर्भर करती है। हम देहरादून और आसपास के क्षेत्रों में हाई-क्वालिटी स्पॉन (Spawn) प्रोवाइड करते हैं।
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              <strong>मार्केटिंग सपोर्ट:</strong> देहरादून के लोकल मार्केट्स, निरंजनपुर मंडी, और होटल्स/रिसॉर्ट्स में Fresh Mushroom Sale के बेहतरीन अवसर हैं। इसके अलावा हम Dry Mushroom Sale और वैल्यू एडिशन (Value Addition) में भी मदद करते हैं।
            </p>

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
                Ready to Grow Your Agribusiness in Dehradun?
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/917389712061" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-[12px] transition-all shadow-lg w-full sm:w-auto">
                  <MessageSquare size={16} /> WhatsApp Us
                </a>
                <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-slate-900 dark:text-white border border-slate-900/10 dark:border-white/20 px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-[12px] transition-all w-full sm:w-auto">
                  <Phone size={14} /> Contact Us
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
