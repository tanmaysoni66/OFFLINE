import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Madhya Pradesh Mushroom Farming | Cities Pages",
  description:
    "Discover top-rated commercial mushroom farming training, turnkey setup services, and expert guidance in Madhya Pradesh (Jabalpur, Indore, Bhopal, Gwalior) to start your successful business.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states/madhya-pradesh",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Madhya Pradesh Mushroom Farming | Cities Pages",
    description:
      "Discover top-rated commercial mushroom farming training, turnkey setup services, and expert guidance in Madhya Pradesh to start your successful business.",
    url: "https://organicmushroomsfarm.com/states/madhya-pradesh",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Madhya Pradesh Mushroom Farming | Cities Pages",
    description:
      "Discover top-rated commercial mushroom farming training, turnkey setup services, and expert guidance in Madhya Pradesh to start your successful business.",
  },
};

export default function MadhyaPradeshPage() {
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
        "@id": "https://organicmushroomsfarm.com/states/madhya-pradesh#webpage",
        url: "https://organicmushroomsfarm.com/states/madhya-pradesh",
        name: "Madhya Pradesh Mushroom Farming Resources",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Discover top-rated commercial mushroom farming training, turnkey setup services, and expert guidance in Madhya Pradesh to start your successful business.",
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
            name: "Madhya Pradesh",
            item: "https://organicmushroomsfarm.com/states/madhya-pradesh",
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
            <span className="font-semibold text-slate-900 dark:text-white">
              Madhya Pradesh
            </span>
          </nav>

          <header className="mb-8">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <MapPin className="text-brand-blue" size={24} />
              Madhya Pradesh Cities
            </h1>
          </header>

          <section className="glass p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden bg-white/5 dark:bg-white/5 backdrop-blur-md">
            <p className="text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed">
              Madhya Pradesh offers an excellent environment for commercial mushroom farming. Whether you want to start cultivating Oyster or Button mushrooms, you can explore specialized training centers, spawn suppliers, and turnkey cultivation guides across various major cities. 
              Find extensive resources and setup guidance in central hubs like{" "}
              <Link
                href="/locations/jabalpur"
                className="text-brand-blue hover:text-purple-500 font-semibold underline underline-offset-2 transition-colors"
              >
                Jabalpur
              </Link>
              , commercial setups in{" "}
              <Link
                href="/cities/madhya-pradesh/indore"
                className="text-brand-blue hover:text-purple-500 font-semibold underline underline-offset-2 transition-colors"
              >
                Indore
              </Link>
              , agricultural support in the capital city{" "}
              <Link
                href="/cities/madhya-pradesh/bhopal"
                className="text-brand-blue hover:text-purple-500 font-semibold underline underline-offset-2 transition-colors"
              >
                Bhopal
              </Link>
              , and comprehensive commercial farming guides in{" "}
              <Link
                href="/cities/madhya-pradesh/gwalior"
                className="text-brand-blue hover:text-purple-500 font-semibold underline underline-offset-2 transition-colors"
              >
                Gwalior
              </Link>
              . Select a city to view local insights and jumpstart your successful agribusiness journey today.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
