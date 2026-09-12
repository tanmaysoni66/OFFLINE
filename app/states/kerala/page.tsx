import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Kerala | Cities",
  description:
    "Find mushroom farming training, commercial setups, and resources across cities in Kerala like Kochi and Thiruvananthapuram.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states/kerala",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Kerala | Cities",
    description:
      "Find mushroom farming training, commercial setups, and resources across cities in Kerala like Kochi and Thiruvananthapuram.",
    url: "https://organicmushroomsfarm.com/states/kerala",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Kerala | Cities",
    description:
      "Find mushroom farming training, commercial setups, and resources across cities in Kerala like Kochi and Thiruvananthapuram.",
  },
};

export default function KeralaPage() {
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
        "@id": "https://organicmushroomsfarm.com/states/kerala#webpage",
        url: "https://organicmushroomsfarm.com/states/kerala",
        name: "Mushroom Farming in Kerala | Cities",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Find mushroom farming training, commercial setups, and resources across cities in Kerala like Kochi and Thiruvananthapuram.",
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
            name: "Kerala",
            item: "https://organicmushroomsfarm.com/states/kerala",
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
              Kerala
            </span>
          </nav>

          <header className="mb-8">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <MapPin className="text-brand-blue" size={24} />
              Kerala Cities
            </h1>
          </header>

          <section className="glass p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden bg-white/5 dark:bg-white/5 backdrop-blur-md">
            <p className="text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Select a city in Kerala to find local mushroom farming training centers, consultants, and spawn suppliers. We offer complete resources for cultivation and commercial setups in major hubs like{" "}
              <Link
                href="/cities/kerala/kochi"
                className="text-brand-blue hover:text-purple-500 font-semibold underline underline-offset-2 transition-colors"
              >
                Kochi
              </Link>.
            </p>
            <p className="text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed">
              For farmers and investors in the capital region, explore our dedicated farm setup, spawn supply, training, and business guides tailored for{" "}
              <Link
                href="/cities/kerala/thiruvananthapuram"
                className="text-brand-blue hover:text-purple-500 font-semibold underline underline-offset-2 transition-colors"
              >
                Thiruvananthapuram
              </Link>. Build a profitable agribusiness in Kerala with our expert support.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
