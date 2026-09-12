import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Chandigarh | Tricity Training & Setup",
  description:
    "Find mushroom farming training, commercial setups, spawn suppliers, and expert advice across Chandigarh, Mohali, and Panchkula.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states/chandigarh",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Chandigarh | Tricity Training & Setup",
    description:
      "Find mushroom farming training, commercial setups, spawn suppliers, and expert advice across Chandigarh, Mohali, and Panchkula.",
    url: "https://organicmushroomsfarm.com/states/chandigarh",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Chandigarh | Tricity Training & Setup",
    description:
      "Find mushroom farming training, commercial setups, spawn suppliers, and expert advice across Chandigarh, Mohali, and Panchkula.",
  },
};

export default function ChandigarhPage() {
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
        "@id": "https://organicmushroomsfarm.com/states/chandigarh#webpage",
        url: "https://organicmushroomsfarm.com/states/chandigarh",
        name: "Chandigarh Mushroom Farming Training & Resources",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Find mushroom farming training, commercial setups, and resources across Chandigarh, Mohali, and Panchkula.",
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
            name: "Chandigarh",
            item: "https://organicmushroomsfarm.com/states/chandigarh",
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

        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="mb-6 flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-brand-blue transition-colors">
              Home
            </Link>
            <ChevronRight size={10} />
            <Link href="/states" className="hover:text-brand-blue transition-colors">
              States
            </Link>
            <ChevronRight size={10} />
            <span className="font-semibold text-slate-900 dark:text-white">
              Chandigarh
            </span>
          </nav>

          <header className="mb-8">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <MapPin className="text-brand-blue" size={24} />
              Chandigarh Tricity Mushroom Resources
            </h1>
          </header>

          <section className="glass bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              Chandigarh and the surrounding Tricity area offer an exceptional environment for commercial mushroom farming. With high urban demand, premium pricing, and a strong awareness of organic and health foods, establishing an indoor, climate-controlled farm here is a highly lucrative agri-business opportunity.
            </p>

            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              Whether you aim to cultivate exotic Oyster mushrooms or scale up to high-capacity White Button mushroom production, we offer specialized mushroom training, complete cultivation resources, and expert commercial setups right here in{" "}
              <Link href="/cities/chandigarh" className="text-brand-blue font-semibold hover:underline">Chandigarh, Mohali, and Panchkula</Link>. 
              Our comprehensive network ensures you have everything from reliable spawn (seeds) suppliers to customized farm designs suited for urban spaces.
            </p>

            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
              Transform your agricultural investment into a profitable enterprise with our turnkey project consultancy. Gain access to advanced technology, standard operating procedures (SOPs), and strategic marketing linkages that empower your mushroom farming journey in the Tricity region.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
