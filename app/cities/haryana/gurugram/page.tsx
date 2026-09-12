import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Gurugram | Training, Spawn & Setup",
  description:
    "Start commercial mushroom farming in Gurugram (Gurgaon). Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/haryana/gurugram",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Gurugram | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Gurugram (Gurgaon). Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/haryana/gurugram",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Gurugram | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Gurugram (Gurgaon). Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  },
};

export default function ArticleGurugramTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/haryana/gurugram#webpage",
        url: "https://organicmushroomsfarm.com/cities/haryana/gurugram",
        name: "Mushroom Farming in Gurugram | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Gurugram (Gurgaon). Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
            name: "Gurugram",
            item: "https://organicmushroomsfarm.com/cities/haryana/gurugram",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Gurugram | Training, Spawn & Setup",
        description:
          "Start commercial mushroom farming in Gurugram (Gurgaon). Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/haryana/gurugram",
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
              Mushroom Farming in Gurugram (गुरुग्राम में मशरूम की खेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Gurugram (Gurgaon), Manesar, Sohna Road & Cyber City Clusters</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              Gurugram (Gurgaon), known as the Millennium City, is a major corporate and culinary hotspot in the Delhi NCR region. With its booming high-end restaurants, luxury hotels, premium residential condominiums, and an increasingly health-conscious corporate population, the demand for fresh, exotic mushrooms is skyrocketing.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              चाहे आप एक वर्किंग प्रोफेशनल हों जो एक साइड इनकम (Side Income) ढूंढ रहे हों, या एक इन्वेस्टर जो कमर्शियल एग्री-बिजनेस (Agribusiness) में उतरना चाहते हों, गुरुग्राम मशरूम फार्मिंग के लिए सबसे बेहतरीन मार्केट्स में से एक है।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Understanding the Gurugram Market & Varieties
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              गुरुग्राम का मौसम साल भर बदलता रहता है (गर्मियाँ बेहद गर्म और सर्दियाँ ठंडी)। इसलिए सही मशरूम का चुनाव और क्लाइमेट कंट्रोल बेहद जरूरी है:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Button Mushroom Farming:</strong> गुरुग्राम के होटल्स और सुपरमार्केट्स (Supermarkets) में बटन मशरूम की भारी डिमांड है। इसे सर्दियों में या फिर AC फार्म (Climate-Controlled Farm) में साल भर उगाया जा सकता है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Oyster & Milky Mushroom:</strong> Oyster सर्दियों और वसंत में, जबकि Milky गर्मियों के लिए बेहतरीन है। ये तेजी से बढ़ते हैं और कम बजट में उगाए जा सकते हैं।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Medicinal Mushrooms (Cordyceps, Shiitake):</strong> हेल्थ कॉन्शियस अर्बन पॉपुलेशन (Urban Population) के कारण, इन प्रीमियम और औषधीय मशरूम्स को ऊंचे दामों पर बेचा जा सकता है।</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Infrastructure: Commercial Farm Setup
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              To supply premium markets like Cyber Hub or DLF Golf Course Road consistently, you cannot rely on natural weather.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              We provide <strong>Turnkey Mushroom Projects</strong>. We set up insulated PUF panel structures with Smart Climate Control (Chillers, Humidifiers, CO2 Sensors), ensuring you get maximum crop yield 365 days a year, completely unaffected by Gurugram's harsh summers.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Training: Start with Knowledge (प्रशिक्षण से शुरुआत)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4 font-medium">
              Mushroom farming is a scientific process. Proper training saves you from losses caused by contamination. We offer:
            </p>
            <div className="space-y-4 mb-8 pl-4 border-l border-black/10 dark:border-white/10">
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">1. Online Mushroom Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">Perfect for working professionals. Learn the entire process—from compost making to harvesting—in Hindi, right from your home or office.</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">2. Offline Mushroom Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">Intensive hands-on training to get practical experience on a real farm.</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">3. Professional Consultancy:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">End-to-end support for large-scale farm design, project reports, and expansion.</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Premium Spawn & Sales Strategy (बीज और बिक्री)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              High yield starts with high-quality <strong>Mushroom Spawn</strong>. We supply lab-tested, contamination-free spawn directly to your farm in Gurugram.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              <strong>Marketing Support:</strong> In Gurugram, you can sell directly to premium residential societies (D2C), organic stores, and local mandi hubs (like Khandsa). We guide you on branding, packaging, and connecting with B2B hotel vendors.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Who Should Start in Gurugram?
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Working Professionals:</strong> Can use mushroom farming as a highly profitable supplementary income source, especially off-season.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Students & Startups:</strong> Requires low capital investment, making it a great side-hustle or an innovative food-brand startup idea in a city like Gurugram.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Women Entrepreneurs:</strong> Start a small unit from home. Ye low-investment self-employment ka ek behtareen rasta hai.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Hyper-Local Target Reach
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              We cover all major regions within Gurugram and surrounding areas:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> Urban / Corporate Hubs</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Cyber City, DLF Phases, Golf Course Road, Sohna Road, Palam Vihar</p>
              </div>
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> Industrial & Rural Corridors</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Manesar, Farrukhnagar, Bhondsi, Badshahpur, Pataudi</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Grow Your Agribusiness in Gurugram?
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
