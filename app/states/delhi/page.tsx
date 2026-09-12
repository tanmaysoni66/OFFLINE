import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Delhi NCR | Training & Commercial Setup",
  description:
    "Find mushroom farming training, commercial setups, spawn suppliers, and expert advice across Delhi NCR, including New Delhi.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states/delhi",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Delhi NCR | Training & Commercial Setup",
    description:
      "Find mushroom farming training, commercial setups, spawn suppliers, and expert advice across Delhi NCR, including New Delhi.",
    url: "https://organicmushroomsfarm.com/states/delhi",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Delhi NCR | Training & Commercial Setup",
    description:
      "Find mushroom farming training, commercial setups, spawn suppliers, and expert advice across Delhi NCR, including New Delhi.",
  },
};

export default function DelhiPage() {
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
        "@id": "https://organicmushroomsfarm.com/states/delhi#webpage",
        url: "https://organicmushroomsfarm.com/states/delhi",
        name: "Delhi NCR Mushroom Farming Training & Resources",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Find mushroom farming training, commercial setups, and resources across cities in Delhi NCR.",
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
            name: "Delhi",
            item: "https://organicmushroomsfarm.com/states/delhi",
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
              Delhi
            </span>
          </nav>

          <header className="mb-8">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <MapPin className="text-brand-blue" size={24} />
              Delhi Mushroom Resources
            </h1>
          </header>

          <section className="glass bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              Delhi and the surrounding National Capital Region (NCR) present a highly profitable, high-demand market for fresh, organic mushrooms. Given the urban constraints of space, indoor commercial mushroom farming—specifically utilizing vertical farming techniques and AC-controlled climate units—is a phenomenal agri-business opportunity for entrepreneurs in the capital.
            </p>

            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              Whether you want to cultivate high-value White Button mushrooms for upscale markets or easy-to-grow Oyster mushrooms, you can access comprehensive mushroom training, cultivation resources, and turnkey commercial setups right here in{" "}
              <Link href="/cities/delhi/new-delhi" className="text-brand-blue font-semibold hover:underline">New Delhi</Link>. 
              Our expert networks provide end-to-end guidance to establish fully automated farms designed for the city&apos;s unique climate challenges.
            </p>

            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
              Explore advanced technical support, marketing linkages, reliable spawn (seeds) supply, and tailored standard operating procedures (SOPs) to ensure maximum yield and ROI for your commercial mushroom farming venture in Delhi NCR.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
