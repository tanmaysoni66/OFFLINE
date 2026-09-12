import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Mumbai, Maharashtra | Training & Spawn",
  description:
    "Start commercial mushroom farming in Mumbai, Maharashtra. Expert online/offline training (Marathi/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/maharashtra/mumbai",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Mumbai, Maharashtra | Training & Spawn",
    description:
      "Start commercial mushroom farming in Mumbai, Maharashtra. Expert online/offline training (Marathi/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/maharashtra/mumbai",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Mumbai, Maharashtra | Training & Spawn",
    description:
      "Start commercial mushroom farming in Mumbai, Maharashtra. Expert online/offline training (Marathi/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  },
};

export default function ArticleMumbaiTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/maharashtra/mumbai#webpage",
        url: "https://organicmushroomsfarm.com/cities/maharashtra/mumbai",
        name: "Mushroom Farming in Mumbai, Maharashtra | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Mumbai, Maharashtra. Expert online/offline training (Marathi/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
            name: "Mumbai",
            item: "https://organicmushroomsfarm.com/cities/maharashtra/mumbai",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Mumbai, Maharashtra | Training & Spawn",
        description:
          "Start commercial mushroom farming in Mumbai, Maharashtra. Expert online/offline training (Marathi/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/maharashtra/mumbai",
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
              Mushroom Farming in Mumbai (मुंबईमध्ये मशरूम शेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Mumbai, Navi Mumbai, Thane, Vasai-Virar & Palghar Belts</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              Mumbai is a bustling metropolis where space is a premium and the demand for healthy, fresh produce is at an all-time high. With the rise of fine dining, health-conscious diets, and organic supermarkets, commercial mushroom farming has emerged as a highly lucrative agribusiness.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              Whether you're setting up a high-tech vertical farm in the city or utilizing agricultural land in the surrounding MMR (Mumbai Metropolitan Region) belts like Vasai, Virar, or Karjat, mushroom cultivation offers high ROI with surprisingly low footprint requirements.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Mumbai is Perfect for Mushroom Cultivation
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Massive Consumption Market:</strong> Mumbai's HORECA sector (Hotels, Restaurants, and Cafes), premium grocery stores (like Nature's Basket), and direct-to-consumer delivery apps ensure your harvest always has buyers.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Space Efficiency:</strong> You don't need acres of land. Vertical farming allows you to produce massive yields in small commercial spaces, basements, or specialized containers.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>High-Value Varieties:</strong> The urban consumer base is willing to pay premium prices for Specialty Mushrooms (Oyster, Shiitake, Milky) and Button Mushrooms.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              End-to-End Solutions We Provide
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Expert Training Programs (प्रशिक्षण)</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  Mushroom cultivation is an exact science. Our detailed training modules (available online and offline) cover critical parameters like substrate preparation, temperature control, humidity management, and contamination prevention.
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn Supply (स्पॉन)</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  The foundation of a successful crop is high-quality seed. We supply F1-Generation, lab-tested Oyster, Button, Milky, and Shiitake Mushroom Spawn directly to your farm locations across the MMR.
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Turnkey AC Farm Setups</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  For serious commercial growers, we design and build Fully Climate-Controlled Farms (using PUF panels, industrial chillers, and automated humidifiers) essential for year-round Button and Specialty mushroom production in Mumbai's humid climate.
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Business Value: Marketing & Subsidies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-black/10 dark:border-white/10 p-5 rounded-2xl">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">Fresh & Dry Mushroom Sales</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  We don't just help you grow; we help you sell. We provide strategies for B2B fresh supply (hotels/markets) and guide you on processing unsold inventory into highly profitable Dry Mushrooms or Mushroom Powder to extend shelf life.
                </p>
              </div>
              <div className="border border-black/10 dark:border-white/10 p-5 rounded-2xl">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">Subsidy & Business Planning</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  Our experts assist in drafting structured DPRs (Detailed Project Reports) to help you unlock Government Subsidies through the NHB (National Horticulture Board) or state-level agricultural schemes, reducing initial CapEx.
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Regions We Serve Across MMR
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              We provide delivery, setup, and support across the entire urban and rural landscape of the region:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Mumbai City & Suburbs:</strong> Andheri, Borivali, Goregaon, Malad, Powai, Ghatkopar, Chembur.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Navi Mumbai & Thane:</strong> Vashi, Nerul, Panvel, Thane Central, Mira Road.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl col-span-1 sm:col-span-2">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Extended Rural & Agri Belts:</strong> Vasai-Virar belt, Karjat rural blocks, Bhiwandi farming clusters, Kalyan-Dombivli edges.</span>
              </li>
            </ul>

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Launch Your Mushroom Business in Mumbai?
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
