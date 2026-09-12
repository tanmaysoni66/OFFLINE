import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Tamil Nadu | Training & Commercial Setup",
  description:
    "Find mushroom farming training, commercial setups, spawn suppliers, and expert advice across cities in Tamil Nadu including Chennai, Coimbatore, Madurai, and Tiruchirappalli.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states/tamil-nadu",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Tamil Nadu | Training & Commercial Setup",
    description:
      "Find mushroom farming training, commercial setups, spawn suppliers, and expert advice across cities in Tamil Nadu including Chennai, Coimbatore, Madurai, and Tiruchirappalli.",
    url: "https://organicmushroomsfarm.com/states/tamil-nadu",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Tamil Nadu | Training & Commercial Setup",
    description:
      "Find mushroom farming training, commercial setups, spawn suppliers, and expert advice across cities in Tamil Nadu including Chennai, Coimbatore, Madurai, and Tiruchirappalli.",
  },
};

export default function TamilNaduPage() {
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
        "@id": "https://organicmushroomsfarm.com/states/tamil-nadu#webpage",
        url: "https://organicmushroomsfarm.com/states/tamil-nadu",
        name: "Tamil Nadu Mushroom Farming Training & Resources",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Find mushroom farming training, commercial setups, and resources across cities in Tamil Nadu.",
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
            name: "Tamil Nadu",
            item: "https://organicmushroomsfarm.com/states/tamil-nadu",
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
              Tamil Nadu
            </span>
          </nav>

          <header className="mb-8">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <MapPin className="text-brand-blue" size={24} />
              Tamil Nadu Mushroom Resources
            </h1>
          </header>

          <section className="glass bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              Tamil Nadu offers an incredible landscape for commercial mushroom farming, ranging from coastal areas to high-altitude hill stations. With a robust agricultural economy and increasing awareness of the health benefits of organic mushrooms, setting up a farm here can be highly lucrative. We provide complete guidance, from selecting the right species to establishing climate-controlled units.
            </p>

            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              If you are based in the capital city, you can access premium mushroom training, growing tips, and professional farm setups in{" "}
              <Link href="/cities/tamil-nadu/chennai" className="text-brand-blue font-semibold hover:underline">Chennai</Link>. 
              For entrepreneurs in the industrial and textile hub, we offer dedicated mushroom training, business ideas, and practical growing tips in{" "}
              <Link href="/cities/tamil-nadu/coimbatore" className="text-brand-blue font-semibold hover:underline">Coimbatore</Link>.
            </p>

            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              Growers in the southern regions can also benefit from our expert networks; explore mushroom training, cultivation resources, and commercial setups in{" "}
              <Link href="/mushroom-farming-madurai-tamil-nadu" className="text-brand-blue font-semibold hover:underline">Madurai</Link>. 
              Furthermore, we strongly encourage smart mushroom farming for young entrepreneurs looking for modern agricultural business models in{" "}
              <Link href="/cities/tamil-nadu/tiruchirappalli" className="text-brand-blue font-semibold hover:underline">Tiruchirappalli</Link>.
            </p>

            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
              Whether you plan to cultivate Oyster, Milky, or Button mushrooms, our comprehensive state-wide services ensure that you have reliable access to high-quality spawn (seeds), necessary infrastructure, and continuous support to run a successful commercial mushroom farming enterprise in Tamil Nadu.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
