import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Hyderabad, Telangana | Training, Spawn & Setup",
  description:
    "Start commercial mushroom farming in Hyderabad, Telangana. Expert online/offline training, premium spawn, turnkey farm setup, and B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/telangana/hyderabad",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Hyderabad, Telangana | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Hyderabad, Telangana. Expert online/offline training, premium spawn, turnkey farm setup, and B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/telangana/hyderabad",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Hyderabad, Telangana | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Hyderabad, Telangana. Expert online/offline training, premium spawn, turnkey farm setup, and B2B marketing support.",
  },
};

export default function ArticleHyderabadTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/telangana/hyderabad#webpage",
        url: "https://organicmushroomsfarm.com/cities/telangana/hyderabad",
        name: "Mushroom Farming in Hyderabad, Telangana | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Hyderabad, Telangana. Expert online/offline training, premium spawn, turnkey farm setup, and B2B marketing support.",
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
            name: "Telangana",
            item: "https://organicmushroomsfarm.com/states/telangana",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Hyderabad",
            item: "https://organicmushroomsfarm.com/cities/telangana/hyderabad",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Hyderabad, Telangana | Training, Spawn & Setup",
        description:
          "Start commercial mushroom farming in Hyderabad, Telangana. Expert online/offline training, premium spawn, turnkey farm setup, and B2B marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/telangana/hyderabad",
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
              Mushroom Farming in Hyderabad, Telangana
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Hyderabad, Gachibowli, Secunderabad, Moinabad & Surrounding Telangana Regions</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              హైదరాబాద్ మరియు తెలంగాణలోని ఇతర ప్రాంతాలలో పుట్టగొడుగుల పెంపకం (Mushroom Farming) అనేది ఒక అద్భుతమైన ఆధునిక వ్యవసాయ మరియు వ్యాపార అవకాశం. With a booming IT sector, luxury hospitality, and highly health-conscious consumers across Gachibowli, Banjara Hills, and Hitech City, the demand for exotic, fresh mushrooms has never been higher in Hyderabad.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              We offer end-to-end commercial solutions—from <strong>professional training and spawn supply</strong> to <strong>turnkey climate-controlled farm installations</strong>—guaranteeing stable, year-round production of high-value crops regardless of Telangana's intense summer heat.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Commercial Farm Installation & Services
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">Turnkey Commercial Setup (AC Farms)</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  Hyderabad's climate demands precision. Our engineers deploy highly optimized, fully insulated PUF panel structures integrated with automated chillers, intelligent foggers, and CO2 sensors. This allows for the year-round, high-yield cultivation of <strong>Button Mushrooms</strong> and premium <strong>Milky Mushrooms</strong>.
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">Premium Spawn & Materials</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  We supply F1-generation, lab-tested, and vigorously growing spawn directly to your doorstep in Hyderabad and surrounding districts (Medchal, Shamirpet, Chevella).
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Training: Offline & Online
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              Step into the industry with absolute technical confidence:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Online Training:</strong> Perfect for IT professionals looking to diversify income streams. Comprehensive curriculum on Oyster, Button, and Milky cultivation, pathology, and farm management.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Offline Practical Training:</strong> Immerse yourself in our hands-on farm environment. Master sterilization techniques, spawning methods, pinning strategies, and post-harvest management.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Business Planning & Government Subsidy
            </h2>
            <div className="bg-brand-blue/10 dark:bg-brand-blue/5 p-6 rounded-2xl border border-brand-blue/20 mb-8">
              <h3 className="font-bold text-[14px] text-brand-blue mb-2">ROI Analysis & Financial Assistance</h3>
              <p className="text-[12px] text-slate-700 dark:text-slate-300 mb-4">
                Before you lay your first growing rack, we formulate a strict Business Plan & ROI projection mapped to your capacity.
              </p>
              <p className="text-[12px] text-slate-700 dark:text-slate-300 font-medium">
                <strong>Government Subsidy:</strong> We guide you through applying for subsidies under the State Horticulture Department (MIDH schemes offer up to 50% capital subsidy for general categories and up to 95% for SC/ST initiatives in Telangana).
              </p>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Hyper-Local Coverage Across Hyderabad & Telangana
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>IT Hubs:</strong> Gachibowli, Madhapur, Kukatpally, Kondapur, Hitech City.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Urban Nodes:</strong> LB Nagar, Secunderabad, Miyapur, Begumpet.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Rural/Farming Belts:</strong> Shamirpet, Moinabad, Chevella, Medchal clusters.</span>
              </li>
            </ul>

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Start Your Mushroom Farming Journey Today!
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
