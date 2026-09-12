import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Nashik, Maharashtra | Training & Spawn",
  description:
    "Start commercial mushroom farming in Nashik, Maharashtra. Expert online/offline training (Marathi/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/maharashtra/nashik",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Nashik, Maharashtra | Training & Spawn",
    description:
      "Start commercial mushroom farming in Nashik, Maharashtra. Expert online/offline training (Marathi/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/maharashtra/nashik",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Nashik, Maharashtra | Training & Spawn",
    description:
      "Start commercial mushroom farming in Nashik, Maharashtra. Expert online/offline training (Marathi/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  },
};

export default function ArticleNashikTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/maharashtra/nashik#webpage",
        url: "https://organicmushroomsfarm.com/cities/maharashtra/nashik",
        name: "Mushroom Farming in Nashik, Maharashtra | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Nashik, Maharashtra. Expert online/offline training (Marathi/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
            name: "Nashik",
            item: "https://organicmushroomsfarm.com/cities/maharashtra/nashik",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Nashik, Maharashtra | Training & Spawn",
        description:
          "Start commercial mushroom farming in Nashik, Maharashtra. Expert online/offline training (Marathi/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/maharashtra/nashik",
        },
      },
    ],
  };

  const faqs = [
    { q: "1. Nashik मध्ये मशरूम शेतीसाठी किती खर्च येतो?", a: "छोट्या स्तरावर 5,000-10,000 रुपयांत सुरुवात करता येते, commercial farm साठी खर्च जास्त असतो." },
    { q: "2. Nashik च्या वातावरणासाठी कोणती variety चांगली आहे?", a: "Oyster mushroom सर्व हंगामात चांगले येते. AC setup असल्यास Button mushroom फायदेशीर ठरते." },
    { q: "3. ट्रेनिंग कुठे मिळते?", a: "आम्ही online आणि offline दोन्ही प्रकारची सविस्तर ट्रेनिंग देतो." },
    { q: "4. उत्तम प्रतीचे बियाणे (Spawn) कुठे मिळेल?", a: "Organic Mushrooms Farm कडून F1-Gen, लॅब-टेस्टेड स्पॉन थेट फार्मवर पुरवले जाते." },
    { q: "5. तयार मशरूम कुठे विकायचे?", a: "नाशिकमधील हॉटेल्स, सुपरमार्केट्स आणि लोकल भाज्यांच्या मार्केटमध्ये. आम्ही मार्केटिंग सपोर्टही देतो." },
    { q: "6. महिला घरबसल्या हा व्यवसाय करू शकतात का?", a: "होय, कमी जागेत आणि कमी वेळेत महिलांसाठी हा एक उत्तम स्वयंरोजगार आहे." }
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
              Mushroom Farming in Nashik (नाशिकमध्ये मशरूम शेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Nashik, Gangapur Road, Panchavati, Indira Nagar & Surrounding Regions</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              कृषी राजधानी म्हणून ओळखले जाणारे नाशिक (Nashik) शहर आता फक्त द्राक्षे आणि कांद्यासाठी मर्यादित राहिलेले नाही. बदलत्या जीवनशैलीमुळे आणि आरोग्याबाबत वाढत्या जागरूकतेमुळे नाशिकमध्ये सेंद्रिय आणि ताज्या मशरूमला (Mushroom Farming) मोठी मागणी येत आहे.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              तुम्ही नाशिक शहरात असाल किंवा जवळच्या सिन्नर, निफाडसारख्या ग्रामीण भागात, कमी गुंतवणुकीत आणि कमी जागेत मशरूम शेती हा एक अत्यंत फायदेशीर व्यवसाय ठरत आहे.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Nashik is Ideal for Mushroom Cultivation
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Favorable Climate:</strong> नाशिकचे समशीतोष्ण हवामान मशरूमच्या वाढीसाठी अनुकूल असते, ज्यामुळे उत्पादन खर्च कमी होतो.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Growing Urban Market:</strong> गंगापूर रोड, कॉलेज रोडवरील प्रीमियम रेस्टॉरंट्स आणि सुपरमार्केट्समध्ये Button व Oyster मशरूमची दैनंदिन मागणी मोठी आहे.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Easy Raw Material:</strong> आजूबाजूच्या शेतीप्रधान भागातून गव्हाचा भुसा किंवा सोयाबीनचे कुटार अगदी स्वस्तात उपलब्ध होते.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Professional Mushroom Training</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  योग्य मार्गदर्शनाशिवाय मशरूम फार्ममध्ये बुरशी लागण्याची शक्यता असते. आम्ही तुम्हाला ऑनलाइन आणि ऑफलाइन प्रॅक्टिकल ट्रेनिंग देतो, ज्यामध्ये भुसा भिजवण्यापासून ते पॅकिंगपर्यंत सर्व काही शिकवले जाते.
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn Supply</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  मशरूमचे उत्पादन हे बियाणांच्या (Spawn) गुणवत्तेवर अवलंबून असते. आम्ही नाशिकमध्ये F1-Generation, लॅब-टेस्टेड Oyster, Button व Milky Mushroom Spawn चा पुरवठा करतो.
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Turnkey Farm Setup & Marketing Support</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  जर तुम्हाला व्यावसायिक स्तरावर Button Mushroom चे उत्पादन घ्यायचे असेल, तर आम्ही पूर्णपणे Climate-Controlled AC Farms सेटअप करून देतो व माल विकण्यासाठी मार्केटिंग सपोर्टही देतो.
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Areas We Cover in Nashik Region
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              आम्ही नाशिक शहरातील आणि ग्रामीण भागातील सर्व ठिकाणी आमच्या सेवा पुरवत आहोत:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Nashik City (Urban):</strong> Gangapur Road, Panchavati, Indira Nagar, Satpur, Ambad, Nashik Road, College Road, CIDCO.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Surrounding Talukas:</strong> Sinnar, Niphad, Igatpuri, Yeola, Trimbakeshwar, Dindori.</span>
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
                Ready to Start Your Mushroom Business in Nashik?
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
