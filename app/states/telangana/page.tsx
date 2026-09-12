import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Telangana | Training & Commercial Setup",
  description:
    "Find mushroom farming training, commercial setups, spawn suppliers, and expert advice across cities in Telangana, including Hyderabad.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states/telangana",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Telangana | Training & Commercial Setup",
    description:
      "Find mushroom farming training, commercial setups, spawn suppliers, and expert advice across cities in Telangana, including Hyderabad.",
    url: "https://organicmushroomsfarm.com/states/telangana",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Telangana | Training & Commercial Setup",
    description:
      "Find mushroom farming training, commercial setups, spawn suppliers, and expert advice across cities in Telangana, including Hyderabad.",
  },
};

export default function TelanganaPage() {
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
        "@id": "https://organicmushroomsfarm.com/states/telangana#webpage",
        url: "https://organicmushroomsfarm.com/states/telangana",
        name: "Telangana Mushroom Farming Training & Resources",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Find mushroom farming training, commercial setups, and resources across cities in Telangana.",
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
              Telangana
            </span>
          </nav>

          <header className="mb-8">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <MapPin className="text-brand-blue" size={24} />
              Telangana Mushroom Resources
            </h1>
          </header>

          <section className="glass bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              Telangana is rapidly evolving into a major hub for commercial agri-tech and sustainable farming. The state&apos;s favorable policies and growing urban demand for exotic, organic produce make mushroom cultivation an incredibly profitable venture. We provide extensive support, whether you are planning to start a small-scale Oyster mushroom farm or a high-capacity, climate-controlled White Button mushroom unit.
            </p>

            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              If you are located in or around the IT and commercial capital, you can discover premium mushroom training, cutting-edge cultivation resources, and expert guidance for setting up commercial farms right in{" "}
              <Link href="/cities/telangana/hyderabad" className="text-brand-blue font-semibold hover:underline">Hyderabad</Link>. 
              Our network offers hands-on workshops, reliable marketing linkages, and technical consultancy tailored for urban and peri-urban environments.
            </p>

            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
              Join the agricultural revolution in Telangana by leveraging our end-to-end turnkey project solutions. Gain access to premium quality spawn (seeds), advanced standard operating procedures (SOPs), and robust post-harvest cold chain strategies to maximize your business ROI.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
