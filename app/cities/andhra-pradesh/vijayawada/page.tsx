import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Vijayawada, Andhra Pradesh | Training & Spawn",
  description:
    "Start commercial mushroom farming in Vijayawada (Amaravati region), Andhra Pradesh. Telugu/English training, Milky & Oyster spawn, turnkey setups, and subsidies.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/andhra-pradesh/vijayawada",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Vijayawada, Andhra Pradesh | Training & Spawn",
    description:
      "Start commercial mushroom farming in Vijayawada (Amaravati region), Andhra Pradesh. Telugu/English training, Milky & Oyster spawn, turnkey setups, and subsidies.",
    url: "https://organicmushroomsfarm.com/cities/andhra-pradesh/vijayawada",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Vijayawada, Andhra Pradesh | Training & Spawn",
    description:
      "Start commercial mushroom farming in Vijayawada (Amaravati region), Andhra Pradesh. Telugu/English training, Milky & Oyster spawn, turnkey setups, and subsidies.",
  },
};

export default function ArticleVijayawadaTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/andhra-pradesh/vijayawada#webpage",
        url: "https://organicmushroomsfarm.com/cities/andhra-pradesh/vijayawada",
        name: "Mushroom Farming in Vijayawada, Andhra Pradesh | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Vijayawada (Amaravati region), Andhra Pradesh. Telugu/English training, Milky & Oyster spawn, turnkey setups, and subsidies.",
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
            name: "Andhra Pradesh",
            item: "https://organicmushroomsfarm.com/states/andhra-pradesh",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Vijayawada",
            item: "https://organicmushroomsfarm.com/cities/andhra-pradesh/vijayawada",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Vijayawada, Andhra Pradesh | Training & Spawn",
        description:
          "Start commercial mushroom farming in Vijayawada (Amaravati region), Andhra Pradesh. Telugu/English training, Milky & Oyster spawn, turnkey setups, and subsidies.",
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
          "@id": "https://organicmushroomsfarm.com/cities/andhra-pradesh/vijayawada",
        },
      },
    ],
  };

  const faqs = [
    { q: "1. విజయవాడలో మష్రూమ్ ఫార్మింగ్ ప్రారంభించడానికి ఎంత ఖర్చు అవుతుంది?", a: "చిన్న వెదురు షెడ్ లేదా ఇంట్లోని ఖాళీ గదిలో అయితే ₹10,000 నుండి ₹15,000 తో ప్రారంభించవచ్చు. అదే కమర్షియల్ క్లైమేట్ కంట్రోల్డ్ AC ఫార్మ్ అయితే ప్రాజెక్ట్ పరిమాణాన్ని బట్టి పెట్టుబడి ఉంటుంది." },
    { q: "2. విజయవాడ వాతావరణానికి ఏ పుట్టగొడుగుల రకం అనుకూలం?", a: "విజయవాడ యొక్క ఉష్ణోగ్రతలకు మిల్కీ మష్రూమ్ (Milky Mushroom) అత్యంత అనుకూలమైనది. శీతాకాలం మరియు తేమ ఉన్న రోజుల్లో ఆయిస్టర్ మష్రూమ్ (Oyster) అద్భుతంగా పండుతుంది." },
    { q: "3. నాణ్యమైన స్పాన్ (విత్తనాలు) ఎక్కడ దొరుకుతాయి?", a: "Organic Mushrooms Farm నుండి ల్యాబ్-టెస్టెడ్, అధిక దిగుబడినిచ్చే F1-Gen స్పాన్ విజయవాడ మరియు కృష్ణా జిల్లా వ్యాప్తంగా వేగంగా డెలివరీ చేయబడుతుంది." },
    { q: "4. ఆంధ్రప్రదేశ్ ప్రభుత్వ సబ్సిడీ లభిస్తుందా?", a: "అవును, ఆంధ్రప్రదేశ్ ఉద్యానవన శాఖ మరియు NHB పథకాల ద్వారా అర్హత కలిగిన రైతులకు మరియు స్టార్టప్‌లకు 20% నుండి 40% వరకు సబ్సిడీ లభించే అవకాశం ఉంది. మేము ప్రాజెక్ట్ రిపోర్ట్ (DPR) అందిస్తాము." }
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
              Mushroom Farming in Vijayawada (విజయవాడలో పుట్టగొడుగుల పెంపకం)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Vijayawada, Benz Circle, Tadepalli, Guntur, Mangalagiri & Krishna Delta</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              ఆంధ్రప్రదేశ్ వాణిజ్య రాజధాని విజయవాడ (Vijayawada) మరియు రాజధాని ప్రాంతమైన అమరావతి-గుంటూరు బెల్ట్ వేగంగా అభివృద్ధి చెందుతున్నాయి. కృష్ణా డెల్టా ప్రాంతంలో వరి గడ్డి సులభంగా లభించడం మరియు నగరంలో హోటళ్ళు, రెస్టారెంట్లు, సూపర్ మార్కెట్లలో తాజా పుట్టగొడుగులకు విపరీతమైన డిమాండ్ ఉండడం వల్ల విజయవాడలో కమర్షియల్ మష్రూమ్ ఫార్మింగ్ (Mushroom Farming) అత్యంత లాభదాయకమైన రంగంగా మారింది.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              రైతులు, మహిళలు, నిరుద్యోగ యువత మరియు కొత్త వ్యాపారవేత్తలు తక్కువ పెట్టుబడితో గృహస్థాయిలో లేదా వాణిజ్య స్థాయిలో అధిక లాభాలను ఆర్జించేందుకు Organic Mushrooms Farm సమగ్ర శిక్షణ మరియు మార్గదర్శకత్వాన్ని అందిస్తోంది.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Vijayawada is Best for Mushroom Cultivation
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Milky Mushroom Capital:</strong> విజయవాడ వేసవి కాలానికి మిల్కీ మష్రూమ్ (Calocybe indica) అద్భుతంగా సరిపోతుంది. ఇది ఎక్కువ రోజులు నిల్వ ఉంటుంది మరియు హోటల్స్ లో అధిక రేటు పలుకుతుంది.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Abundant Paddy Straw:</strong> కృష్ణా మరియు గుంటూరు డెల్టా జిల్లాల్లో వరి కోతల తర్వాత నాణ్యమైన వరి గడ్డి అతి తక్కువ ధరకే లభిస్తుంది.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>High-End Urban Consumer Base:</strong> బెంజ్ సర్కిల్, పటమట, తాడేపల్లి, మంగళగిరి వంటి ప్రాంతాలలో హెల్త్-కాన్షియస్ వినియోగదారులు ఆర్గానిక్ మష్రూమ్స్ కి ప్రీమియం ధర చెల్లిస్తారు.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Hands-on Training in Telugu & English</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  గడ్డి శుద్ధి చేయడం (Substrate treatment), స్పాన్ మిక్సింగ్, ఉష్ణోగ్రత-తేమ నిర్వహణ మరియు వ్యాధి నివారణపై పూర్తి ప్రాక్టికల్ అవగాహన.
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn Supply</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  ల్యాబ్-టెస్టెడ్, అధిక దిగుబడినిచ్చే F1-Gen ఆయిస్టర్ మరియు మిల్కీ మష్రూమ్ స్పాన్ విజయవాడకు నేరుగా సరఫరా.
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Commercial Setups & Marketing Guidance</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  ఆధునిక క్లైమేట్-కంట్రోల్డ్ ఫార్మ్ డిజైన్, ప్రభుత్వ సబ్సిడీల కోసం ప్రాజెక్ట్ రిపోర్ట్స్ (DPR) మరియు మార్కెట్ లింకేజ్ సపోర్ట్.
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Coverage Across Vijayawada & CRDA Region
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              మేము విజయవాడ నగరంతో పాటు చుట్టుపక్కల అన్ని ప్రాంతాలలో సేవలు అందిస్తున్నాము:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>City Hubs:</strong> Benz Circle, Patamata, Governorpet, Gunadala, Bhavanipuram, Gollapudi, Moghalrajpuram.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>CRDA & Surrounding Towns:</strong> Tadepalli, Mangalagiri, Gannavaram, Tenali, Gudivada, Kankipadu, Penamaluru, Nuzvid.</span>
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
                Ready to Start Your Mushroom Business in Vijayawada?
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
