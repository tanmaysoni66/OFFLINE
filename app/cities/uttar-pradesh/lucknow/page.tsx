import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Lucknow | Training, Spawn & Setup",
  description:
    "Start commercial mushroom farming in Lucknow, UP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/uttar-pradesh/lucknow",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Lucknow | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Lucknow, UP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/uttar-pradesh/lucknow",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Lucknow | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Lucknow, UP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  },
};

export default function ArticleLucknowTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/uttar-pradesh/lucknow#webpage",
        url: "https://organicmushroomsfarm.com/cities/uttar-pradesh/lucknow",
        name: "Mushroom Farming in Lucknow | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Lucknow, UP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
            name: "Lucknow",
            item: "https://organicmushroomsfarm.com/cities/uttar-pradesh/lucknow",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Lucknow | Training, Spawn & Setup",
        description:
          "Start commercial mushroom farming in Lucknow, UP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/uttar-pradesh/lucknow",
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
              Mushroom Farming in Lucknow (लखनऊ में मशरूम की खेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Lucknow, Gomti Nagar, Aliganj, Barabanki & Surrounding UP Regions</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              नवाबों का शहर लखनऊ (Lucknow) अब तेजी से एक आधुनिक कमर्शियल हब (Commercial Hub) बन रहा है। गोमती नगर, अलीगंज, और हज़रतगंज जैसे इलाकों में प्रीमियम रेस्टोरेंट्स, होटल्स, और सुपरमार्केट्स की बढ़ती संख्या ने विदेशी और स्वास्थ्यवर्धक सब्जियों की भारी मांग पैदा की है।
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              इसी वजह से <strong>लखनऊ और आस-पास के जिलों में मशरूम की खेती (Mushroom Farming)</strong> एक हाई-प्रॉफिट (High Profit) और लो-इन्वेस्टमेंट (Low Investment) बिजनेस मॉडल बनकर उभरा है। 
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Complete Mushroom Farming Solutions
            </h2>
            <div className="space-y-4 mb-8 pl-4 border-l border-black/10 dark:border-white/10">
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">1. Professional Mushroom Training (Hindi):</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">हम ऑनलाइन और ऑफलाइन (Online & Offline) दोनों प्रकार की साइंटिफिक ट्रेनिंग (Scientific Training) उपलब्ध कराते हैं, जिससे आप भूसा उपचार से लेकर मार्केटिंग तक सब कुछ सीख सकें।</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">2. Premium Mushroom Spawn Supply:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">लखनऊ और आसपास के क्षेत्रों में 100% शुद्ध (Pure) और लैब टेस्टेड (Lab-Tested) Oyster, Button और Milky मशरूम स्पॉन की डिलीवरी।</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">3. Turnkey AC Farm Setup:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">अगर आप लखनऊ की गर्मियों में भी बटन मशरूम उगाना चाहते हैं, तो हम आपको पूरा AC फार्म (Turnkey Climate Controlled Project) सेटअप करके देते हैं।</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Government Subsidy & Marketing Support
            </h2>
            <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl border border-black/5 dark:border-white/5 mb-8">
              <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-blue" /> Government Subsidy Guidance</h3>
              <p className="text-[12px] text-slate-700 dark:text-slate-300 mb-4">
                उत्तर प्रदेश सरकार मशरूम उत्पादन को बढ़ावा देने के लिए NHB (National Horticulture Board) के तहत गवर्नमेंट सब्सिडी (Government Subsidy) देती है। हम आपको प्रोजेक्ट रिपोर्ट (DPR) तैयार करने और सब्सिडी प्रोसेस में पूरी गाइडेंस देते हैं।
              </p>
              
              <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-blue" /> Marketing & Processing Support</h3>
              <p className="text-[12px] text-slate-700 dark:text-slate-300">
                फ्रेश मशरूम बेचने के अलावा (लोकल मंडी/होटल्स), हम आपको मशरूम सुखाने (Dry Mushroom) और उसके वैल्यू-एडेड प्रोडक्ट (जैसे मशरूम पाउडर) बनाने की ट्रेनिंग देते हैं ताकि आपका प्रॉफिट मार्जिन हमेशा हाई रहे।
              </p>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Hyper-Local Coverage Across Lucknow
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              हम लखनऊ के हर कोने (शहरी और ग्रामीण) में अपनी सेवाएं दे रहे हैं:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Urban Hubs:</strong> Gomti Nagar, Indira Nagar, Aliganj, Hazratganj, Jankipuram, Ashiyana, Rajajipuram.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Satellite Towns:</strong> Barabanki, Malihabad, Mohanlalganj, Bakshi Ka Talab (BKT), Kakori, Itaunja.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl col-span-1 sm:col-span-2">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Rural Clusters:</strong> Chinhat Rural Belt, Malihabad Region, Kakori Rural, Banthra, Gosainganj.</span>
              </li>
            </ul>

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Grow Your Agribusiness in Lucknow?
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
