import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Maharashtra Mushroom Farming | Training & Farm Setup Resources",
  description:
    "Find the best mushroom farming training, commercial setups, and expert advice across cities in Maharashtra including Mumbai, Pune, Nagpur, Aurangabad, and Nashik.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states/maharashtra",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Maharashtra Mushroom Farming | Training & Farm Setup Resources",
    description:
      "Find the best mushroom farming training, commercial setups, and expert advice across cities in Maharashtra including Mumbai, Pune, Nagpur, Aurangabad, and Nashik.",
    url: "https://organicmushroomsfarm.com/states/maharashtra",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Maharashtra Mushroom Farming | Training & Farm Setup Resources",
    description:
      "Find the best mushroom farming training, commercial setups, and expert advice across cities in Maharashtra including Mumbai, Pune, Nagpur, Aurangabad, and Nashik.",
  },
};

export default function MaharashtraPage() {
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
        "@id": "https://organicmushroomsfarm.com/states/maharashtra#webpage",
        url: "https://organicmushroomsfarm.com/states/maharashtra",
        name: "Maharashtra Mushroom Farming Resources",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Find the best mushroom farming training, farm setups, and expert advice in Maharashtra.",
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
              Maharashtra
            </span>
          </nav>

          <header className="mb-8">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <MapPin className="text-brand-blue" size={24} />
              Maharashtra Mushroom Resources
            </h1>
          </header>

          <section className="glass bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              Maharashtra is a prime state for mushroom farming due to its massive urban markets, well-developed logistics networks, and varying climate zones suitable for year-round production of Button, Oyster, and Milky mushrooms. 
            </p>

            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              We provide localized resources and expert guidance across the state's major cities. Whether you are looking for advanced mushroom training and commercial setups in{" "}
              <Link href="/cities/maharashtra/mumbai" className="text-brand-blue font-semibold hover:underline">Mumbai</Link> or{" "}
              <Link href="/locations/pune" className="text-brand-blue font-semibold hover:underline">Pune</Link>, 
              exploring cultivation tips and setups in{" "}
              <Link href="/cities/maharashtra/nagpur" className="text-brand-blue font-semibold hover:underline">Nagpur</Link>, 
              starting a venture with Women Self-Help Groups in{" "}
              <Link href="/cities/maharashtra/aurangabad" className="text-brand-blue font-semibold hover:underline">Aurangabad</Link>, 
              or seeking seeds and expert advice in{" "}
              <Link href="/cities/maharashtra/nashik" className="text-brand-blue font-semibold hover:underline">Nashik</Link>, 
              our network connects you with the right support.
            </p>

            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
              Select any of the major hubs linked above to access specific details regarding state subsidies, hands-on training centers, premium spawn availability, and end-to-end turnkey project execution tailored for Maharashtra's agricultural environment.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
