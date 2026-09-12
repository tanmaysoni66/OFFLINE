import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight, MapPin, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in India | States & Cities Guide",
  description:
    "Explore mushroom farming training, spawn suppliers, and commercial setups across all major states and cities in India.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in India | States & Cities Guide",
    description:
      "Explore mushroom farming training, spawn suppliers, and commercial setups across all major states and cities in India.",
    url: "https://organicmushroomsfarm.com/states",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in India | States & Cities Guide",
    description:
      "Explore mushroom farming training, spawn suppliers, and commercial setups across all major states and cities in India.",
  },
};

const statesList = [
  { name: "Maharashtra", slug: "maharashtra", desc: "Explore resources in Pune, Mumbai, Nagpur, Nashik, and Aurangabad." },
  { name: "Madhya Pradesh", slug: "madhya-pradesh", desc: "Explore resources in Jabalpur, Bhopal, Indore, and Gwalior." },
  { name: "Delhi", slug: "delhi", desc: "Explore resources and training available in Delhi NCR." },
  { name: "Tamil Nadu", slug: "tamil-nadu", desc: "Explore resources in Chennai, Coimbatore, Madurai, and Tiruchirappalli." },
  { name: "Karnataka", slug: "karnataka", desc: "Explore resources in Bangalore, Mysuru, and Mangalore." },
  { name: "Bihar", slug: "bihar", desc: "Explore resources in Patna and other cities in Bihar." },
  { name: "West Bengal", slug: "west-bengal", desc: "Explore resources in Kolkata, Siliguri, and other cities." },
  { name: "Telangana", slug: "telangana", desc: "Explore resources in Hyderabad and other cities in Telangana." },
  { name: "Chandigarh", slug: "chandigarh", desc: "Explore resources and training available in Chandigarh." },
  { name: "Chhattisgarh", slug: "chhattisgarh", desc: "Explore resources in Raipur and other cities in Chhattisgarh." },
  { name: "Gujarat", slug: "gujarat", desc: "Explore resources in Ahmedabad, Surat, Vadodara, and Rajkot." },
  { name: "Rajasthan", slug: "rajasthan", desc: "Explore resources in Jaipur, Udaipur, and Bikaner." },
  { name: "Punjab", slug: "punjab", desc: "Explore resources in Amritsar and other cities in Punjab." },
  { name: "Haryana", slug: "haryana", desc: "Explore resources in Gurugram, Faridabad, and other cities." },
  { name: "Uttarakhand", slug: "uttarakhand", desc: "Explore resources in Dehradun and other cities in Uttarakhand." },
  { name: "Andhra Pradesh", slug: "andhra-pradesh", desc: "Explore resources in Visakhapatnam, Vijayawada, and other cities." },
  { name: "Odisha", slug: "odisha", desc: "Explore resources in Bhubaneswar and other cities in Odisha." },
  { name: "Uttar Pradesh", slug: "uttar-pradesh", desc: "Explore resources in Lucknow, Kanpur, and Agra." },
  { name: "Jharkhand", slug: "jharkhand", desc: "Explore resources in Ranchi and other cities in Jharkhand." },
  { name: "Assam", slug: "assam", desc: "Explore resources in Guwahati and other cities in Assam." },
  { name: "Kerala", slug: "kerala", desc: "Explore resources in Kochi, Thiruvananthapuram, and other cities." },
];

export default function StatesPage() {
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
        "@id": "https://organicmushroomsfarm.com/states#webpage",
        url: "https://organicmushroomsfarm.com/states",
        name: "Mushroom Farming in India | States & Cities Guide",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Explore mushroom farming training, spawn suppliers, and commercial setups across all major states and cities in India.",
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
            <span className="font-semibold text-slate-900 dark:text-white">
              States
            </span>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-slate-700 dark:text-slate-300 text-[10px] md:text-[11px] font-bold mb-4 border border-black/10 dark:border-white/10 backdrop-blur-sm">
              <Globe size={14} className="text-brand-blue animate-[spin_10s_linear_infinite]" />
              <span>Pan India Directory</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              Explore by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-500">State</span>
            </h1>
            <p className="text-[12px] md:text-[14px] text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Select your state to find local mushroom farming training centers, commercial setup consultants, and verified spawn suppliers in your region.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {statesList.map((state) => (
              <Link
                key={state.slug}
                href={`/states/${state.slug}`}
                className="group glass p-6 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all bg-white/5 dark:bg-white/5 backdrop-blur-md hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                  <MapPin size={18} />
                </div>
                <h2 className="text-[14px] font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-blue transition-colors">
                  {state.name}
                </h2>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                  {state.desc}
                </p>
                <div className="text-brand-blue font-semibold text-[11px] flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
                  View Cities <ChevronRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
