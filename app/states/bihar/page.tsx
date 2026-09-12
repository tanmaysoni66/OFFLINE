import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Bihar | Training & Commercial Setup",
  description:
    "Find mushroom farming training, commercial setups, spawn suppliers, and expert advice across cities in Bihar including Patna.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states/bihar",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Bihar | Training & Commercial Setup",
    description:
      "Find mushroom farming training, commercial setups, spawn suppliers, and expert advice across cities in Bihar including Patna.",
    url: "https://organicmushroomsfarm.com/states/bihar",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Bihar | Training & Commercial Setup",
    description:
      "Find mushroom farming training, commercial setups, spawn suppliers, and expert advice across cities in Bihar including Patna.",
  },
};

export default function BiharPage() {
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
        "@id": "https://organicmushroomsfarm.com/states/bihar#webpage",
        url: "https://organicmushroomsfarm.com/states/bihar",
        name: "Bihar Mushroom Farming Training & Resources",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Find mushroom farming training, commercial setups, and resources across cities in Bihar.",
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
            name: "Bihar",
            item: "https://organicmushroomsfarm.com/states/bihar",
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
              Bihar
            </span>
          </nav>

          <header className="mb-8">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <MapPin className="text-brand-blue" size={24} />
              Bihar Mushroom Resources
            </h1>
          </header>

          <section className="glass bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              Bihar has seen a massive surge in agricultural entrepreneurship, particularly in the cultivation of Oyster and Button mushrooms. Given the state&apos;s agrarian base and increasing demand for nutritional cash crops, mushroom farming offers an excellent, highly profitable venture for local farmers and urban entrepreneurs alike. We provide comprehensive technical support to set up commercial farms that thrive in the local climate.
            </p>

            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              If you are based in the capital city or surrounding regions, you can find premium mushroom training, complete cultivation resources, and expert guidance on commercial setups directly in{" "}
              <Link href="/cities/bihar/patna" className="text-brand-blue font-semibold hover:underline">Patna</Link>. 
              Our network provides access to hands-on workshops, reliable marketing strategies, and step-by-step consultancy tailored specifically for the Bihar market.
            </p>

            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
              Join the growing community of smart agriculturists in Bihar by utilizing our end-to-end turnkey solutions. Ensure your success with access to premium spawn (seeds), advanced standard operating procedures (SOPs), and climate-controlled farm structures designed for maximum yield and profitability.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
