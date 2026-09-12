import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Nagpur, Maharashtra | Training & Spawn",
  description:
    "Start commercial mushroom farming in Nagpur, Vidarbha. Expert online/offline training (Marathi/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/maharashtra/nagpur",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Nagpur, Maharashtra | Training & Spawn",
    description:
      "Start commercial mushroom farming in Nagpur, Vidarbha. Expert online/offline training (Marathi/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/maharashtra/nagpur",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Nagpur, Maharashtra | Training & Spawn",
    description:
      "Start commercial mushroom farming in Nagpur, Vidarbha. Expert online/offline training (Marathi/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  },
};

export default function ArticleNagpurTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/maharashtra/nagpur#webpage",
        url: "https://organicmushroomsfarm.com/cities/maharashtra/nagpur",
        name: "Mushroom Farming in Nagpur, Maharashtra | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Nagpur, Vidarbha. Expert online/offline training (Marathi/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
            name: "Maharashtra",
            item: "https://organicmushroomsfarm.com/states/maharashtra",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Nagpur",
            item: "https://organicmushroomsfarm.com/cities/maharashtra/nagpur",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Nagpur, Maharashtra | Training & Spawn",
        description:
          "Start commercial mushroom farming in Nagpur, Vidarbha. Expert online/offline training (Marathi/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/maharashtra/nagpur",
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
              Mushroom Farming in Nagpur (नागपूरमध्ये मशरूम शेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Nagpur, Dharampeth, Manish Nagar, Hingna & Vidarbha Regions</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              उपराजधानी नागपूर (Nagpur) आणि संपूर्ण विदर्भ (Vidarbha) हे पारंपरिक शेतीसाठी ओळखले जातात. पण बदलत्या काळानुसार आणि वाढत्या शहरीकरणामुळे नागपूरमध्ये ताज्या आणि सेंद्रिय (Organic) भाज्यांची, विशेषतः मशरूमची मागणी झपाट्याने वाढत आहे.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              तुम्ही नागपूर शहरात राहत असाल किंवा आसपासच्या ग्रामीण भागात, कमी गुंतवणुकीत (Low Investment) आणि कमी जागेत मोठा नफा (High Profit) कमवण्यासाठी मशरूम शेती (Mushroom Farming) हा एक उत्कृष्ट व्यवसाय आहे.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Mushroom Varieties Suitable for Nagpur
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              नागपूरचे तापमान उन्हाळ्यात खूप जास्त असते. त्यामुळे हवामानानुसार योग्य मशरूमची निवड करणे महत्त्वाचे आहे:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Milky Mushroom:</strong> नागपूरच्या उन्हाळ्यासाठी (Garam Climate) सर्वात उत्तम. हे उच्च तापमानात चांगले वाढते आणि बाजारात याला चांगला भाव मिळतो.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Oyster Mushroom:</strong> हिवाळा आणि पावसाळ्यात याची शेती अत्यंत सोपी आणि फायदेशीर असते. नवशिक्यांसाठी (Beginners) हा सर्वोत्तम पर्याय आहे.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Button Mushroom:</strong> याला थंड हवामान लागते. नागपूरमध्ये हे हिवाळ्यात (नैसर्गिकरित्या) किंवा पूर्णपणे वातानुकूलित (AC Farm) सेटअपमध्ये वर्षभर घेता येते.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Professional Mushroom Training (मशरूम प्रशिक्षण)</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  योग्य मार्गदर्शनाशिवाय मशरूम फार्ममध्ये बुरशी (Fungus) लागण्याची शक्यता असते. आम्ही तुम्हाला ऑनलाइन आणि ऑफलाइन प्रॅक्टिकल ट्रेनिंग देतो, ज्यामध्ये भूसा भिजवण्यापासून ते मशरूम पॅकिंगपर्यंत सर्व काही शिकवले जाते.
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn Supply (दर्जेदार बियाणे)</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  मशरूमचे उत्पादन हे पूर्णपणे बियाणांच्या (Spawn) गुणवत्तेवर अवलंबून असते. आम्ही नागपूर आणि संपूर्ण विदर्भात F1-Generation, लॅब-टेस्टेड मशरूम स्पॉनचा पुरवठा करतो.
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. AC Farm Setup & Turnkey Projects</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  नागपूरच्या गरमीत जर तुम्हाला वर्षभर बटन मशरूमचे उत्पादन घ्यायचे असेल, तर आम्ही तुम्हाला पूर्णपणे Climate-Controlled AC Farms (PUF Panels) सेटअप करून देतो.
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Subsidy Guidance & Marketing Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-black/10 dark:border-white/10 p-5 rounded-2xl">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">Government Subsidy (सरकारी सबसिडी)</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  महाराष्ट्र शासन आणि NHB (National Horticulture Board) मार्फत मशरूम व्यवसायासाठी सबसिडी उपलब्ध आहे. आम्ही तुम्हाला प्रोजेक्ट रिपोर्ट (DPR) बनवण्यात आणि सबसिडी मिळवण्यात मदत करतो.
                </p>
              </div>
              <div className="border border-black/10 dark:border-white/10 p-5 rounded-2xl">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">Marketing & Value Addition</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  माल विकायचा कुठे? आम्ही तुम्हाला लोकल मार्केट डेव्हलपमेंट, हॉटेल्ससोबत टाय-अप आणि न विकलेला माल वाळवून (Dry Mushroom) किंवा पावडर बनवून विकण्याचे तंत्र शिकवतो.
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Areas We Cover in Nagpur & Vidarbha
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              आम्ही नागपूर शहरातील आणि ग्रामीण भागातील सर्व ठिकाणी आमच्या सेवा पुरवत आहोत:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Nagpur Urban:</strong> Dharampeth, Manish Nagar, Wardha Road, Beltarodi, Trimurti Nagar, Sadar, Mahal.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Nearby Talukas:</strong> Hingna, Kamptee, Katol, Saoner, Umred, Kalmeshwar, Butibori Belt.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl col-span-1 sm:col-span-2">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Rural Clusters:</strong> Hingna Rural Belt, Kalmeshwar Villages, Saoner Rural Area, Parseoni, Kondhali.</span>
              </li>
            </ul>

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Start Your Mushroom Business in Nagpur?
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
