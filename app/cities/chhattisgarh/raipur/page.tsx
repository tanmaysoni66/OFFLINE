import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight, MapPin, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming Training & Setup in Raipur, Chhattisgarh",
  description:
    "Comprehensive guide for starting a mushroom farming business in Raipur, Chhattisgarh. Learn about Oyster, Button, and Milky mushroom cultivation, training, and turnkey setups.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/chhattisgarh/raipur",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming Training & Setup in Raipur",
    description:
      "Comprehensive guide for starting a mushroom farming business in Raipur, Chhattisgarh. Learn about Oyster, Button, and Milky mushroom cultivation, training, and turnkey setups.",
    url: "https://organicmushroomsfarm.com/cities/chhattisgarh/raipur",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming Training & Setup in Raipur",
    description:
      "Comprehensive guide for starting a mushroom farming business in Raipur, Chhattisgarh. Learn about cultivation and setups.",
  },
};

export default function RaipurPage() {
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
        "@id": "https://organicmushroomsfarm.com/cities/chhattisgarh/raipur#webpage",
        url: "https://organicmushroomsfarm.com/cities/chhattisgarh/raipur",
        name: "Mushroom Farming Training & Setup in Raipur",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Comprehensive guide for starting a mushroom farming business in Raipur, Chhattisgarh.",
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
            name: "Chhattisgarh",
            item: "https://organicmushroomsfarm.com/states/chhattisgarh",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Raipur",
            item: "https://organicmushroomsfarm.com/cities/chhattisgarh/raipur",
          },
        ],
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
        {/* Animated gradient or background visual element without covering the app's global background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-brand-blue transition-colors">
              Home
            </Link>
            <ChevronRight size={10} />
            <Link href="/states" className="hover:text-brand-blue transition-colors">
              States
            </Link>
            <ChevronRight size={10} />
            <Link href="/states/chhattisgarh" className="hover:text-brand-blue transition-colors">
              Chhattisgarh
            </Link>
            <ChevronRight size={10} />
            <span className="font-semibold text-slate-900 dark:text-white">
              Raipur
            </span>
          </nav>

          <header className="mb-8">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <MapPin className="text-brand-blue" size={28} />
              Mushroom Farming in Raipur
            </h1>
          </header>

          <div className="glass p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <section className="mb-8 relative z-10">
              <h2 className="text-[14px] md:text-[16px] font-bold text-slate-900 dark:text-white mb-3 border-l-2 border-brand-blue pl-2">
                 Raipur Urban Hubs & Nearby Districts
              </h2>
              <p className="text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                We provide commercial setups and <Link href="/training" className="text-brand-blue hover:text-purple-500 font-semibold underline underline-offset-2">training services</Link> across major urban areas including Naya Raipur (Atal Nagar), Tatibandh, Shankar Nagar, Devendra Nagar, Amanaka, Pachpedi Naka, Pandri, Mowa, Saddu, Bhathagaon, Santoshi Nagar, Telibandha (Marine Drive area), and Kabir Nagar.
                <br /><br />
                Our reach extends to nearby districts like Durg, Bhilai, Dhamtari, Rajnandgaon, Mahasamund, and Baloda Bazar, covering key rural belts (Abhanpur, Arang, Mandir Hasaud, Tilda, Dharsiwa) for large-scale production.
              </p>
            </section>

            <section className="mb-8 relative z-10 bg-black/5 dark:bg-white/5 p-6 rounded-2xl border border-black/5 dark:border-white/5">
              <h2 className="text-[14px] font-bold text-slate-900 dark:text-white mb-4">
                Frequently Asked Questions (FAQs) - Raipur Market
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-[12px] font-bold text-slate-900 dark:text-white mb-1">
                    Q1. Which mushroom grows best in Chhattisgarh&apos;s warm climate?
                  </h3>
                  <p className="text-[11px] text-slate-700 dark:text-slate-400">
                    Ans: For the hot season (March to July), Milky and Paddy Straw mushrooms are best. With our advanced climate-controlled <Link href="/turnkey-projects" className="text-brand-blue font-semibold hover:underline">commercial setups</Link>, you can grow Button mushrooms 365 days a year.
                  </p>
                </div>
                <div>
                  <h3 className="text-[12px] font-bold text-slate-900 dark:text-white mb-1">
                    Q2. Where can I get training to start farming?
                  </h3>
                  <p className="text-[11px] text-slate-700 dark:text-slate-400">
                    Ans: You can take our online or offline <Link href="/training" className="text-brand-blue font-semibold hover:underline">mushroom training courses</Link> for practical knowledge.
                  </p>
                </div>
                <div>
                  <h3 className="text-[12px] font-bold text-slate-900 dark:text-white mb-1">
                    Q3. Do you provide marketing support?
                  </h3>
                  <p className="text-[11px] text-slate-700 dark:text-slate-400">
                    Ans: Yes! Our marketing support connects you directly with local vendors, hotels, and supermarkets in Raipur.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 pt-8 border-t border-black/5 dark:border-white/10 relative z-10 text-center">
               <h2 className="text-[16px] font-bold text-slate-900 dark:text-white mb-3">Ready to Grow Your Agribusiness?</h2>
               <p className="text-[12px] text-slate-700 dark:text-slate-300 mb-6">Contact us today to book training or get a free consultancy.</p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="tel:+919203544140" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 text-[12px] transition-all shadow-lg shadow-brand-blue/20">
                     <Phone size={14} /> Call Now: 9203544140
                  </a>
                  <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-slate-900 dark:text-white border border-slate-900/10 dark:border-white/20 px-6 py-3 rounded-xl font-bold flex items-center gap-2 text-[12px] transition-all">
                     Contact Us <ArrowRight size={14} />
                  </Link>
               </div>
            </section>

          </div>
        </article>
      </main>
    </>
  );
}
