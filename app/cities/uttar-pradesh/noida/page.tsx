import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Noida, UP | Training, Spawn & Setup",
  description:
    "Start commercial mushroom farming in Noida & Greater Noida. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/uttar-pradesh/noida",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Noida, UP | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Noida & Greater Noida. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/uttar-pradesh/noida",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Noida, UP | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Noida & Greater Noida. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  },
};

export default function ArticleNoidaTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/uttar-pradesh/noida#webpage",
        url: "https://organicmushroomsfarm.com/cities/uttar-pradesh/noida",
        name: "Mushroom Farming in Noida, UP | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Noida & Greater Noida. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
            name: "Noida",
            item: "https://organicmushroomsfarm.com/cities/uttar-pradesh/noida",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Noida, UP | Training, Spawn & Setup",
        description:
          "Start commercial mushroom farming in Noida & Greater Noida. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/uttar-pradesh/noida",
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
              Mushroom Farming in Noida (नोएडा में मशरूम की खेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Noida, Greater Noida, Noida Extension & Delhi NCR Region</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              Noida and Greater Noida are rapidly expanding urban hubs in the Delhi NCR region. With a high concentration of IT parks, luxury residential societies, and premium restaurants, the demand for fresh, organic, and specialty mushrooms is exploding.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              Whether you want to start a high-tech AC mushroom farm in a commercial space or a low-investment setup in surrounding rural areas like Jewar or Dadri, Mushroom Farming offers one of the highest ROIs in the agribusiness sector.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Noida is the Ultimate Mushroom Market
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Massive Purchasing Power:</strong> The urban population in sectors like 150, 137, and Noida Extension is health-conscious and willing to pay premium prices for Button, Oyster, and Shiitake mushrooms.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Proximity to Delhi Mandis:</strong> Direct access to major wholesale markets (like Azadpur Mandi) ensures you can sell high volumes of produce instantly.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Vertical Farming Feasibility:</strong> Land is expensive, but mushroom cultivation requires very little space. It's the perfect vertical farming model for urban and peri-urban locations.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Expert Training Programs (Online & Offline)</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  Learn the exact science of temperature control, substrate preparation, and disease management. We offer step-by-step Hindi masterclasses for beginners and advanced commercial growers.
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn Supply</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  We supply F1-Generation, lab-tested, and high-yielding mushroom seeds (Spawn) for Button, Oyster, and Milky mushrooms directly to your farm in Noida and Greater Noida.
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Turnkey AC Farm Setups & Projects</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  To grow Button mushrooms year-round in Noida's harsh summers, we design and build Fully Climate-Controlled AC Farms with PUF panels and industrial chillers.
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Marketing, Subsidy & ROI Planning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-black/10 dark:border-white/10 p-5 rounded-2xl">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">Sales & Value Addition</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  We provide B2B marketing support for Fresh Mushroom Sale. For unsold inventory, we train you in Dry Mushroom processing and powder making to maximize your profit margins.
                </p>
              </div>
              <div className="border border-black/10 dark:border-white/10 p-5 rounded-2xl">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">Government Subsidy Guidance</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  Our consultancy includes preparing Detailed Project Reports (DPRs) to help you secure Government Subsidies under NHB or UP state agricultural schemes.
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Areas We Cover in Gautam Buddha Nagar
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              We provide delivery, setup, and support across the entire urban and rural landscape:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Noida Urban Sectors:</strong> Sector 18, 62, 75, 137, 150, Noida Extension.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Greater Noida & Satellite:</strong> Pari Chowk, Knowledge Park, Ghaziabad edges.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl col-span-1 sm:col-span-2">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Rural Clusters:</strong> Jewar, Dadri, Bisrakh Region, Shahberi, Dankaur, Rabupura.</span>
              </li>
            </ul>

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Start Your Mushroom Business in Noida?
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
