import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Globe, Building, ShieldCheck, Sprout, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pan India & Global Operations | Organic Mushrooms Farm",
  description:
    "Explore our operational network across India and globally. We provide mushroom training, commercial farm setups, premium spawn, and agribusiness consultancy.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/operations",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Pan India & Global Operations | Organic Mushrooms Farm",
    description:
      "Explore our operational network across India and globally. We provide mushroom training, commercial farm setups, premium spawn, and agribusiness consultancy.",
    url: "https://organicmushroomsfarm.com/operations",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pan India & Global Operations | Organic Mushrooms Farm",
    description:
      "Explore our operational network across India and globally. We provide mushroom training, commercial farm setups, premium spawn, and agribusiness consultancy.",
  },
};

const domesticLocations = [
  "Pune", "Mumbai", "Nagpur", "Nashik", "Aurangabad",
  "Jabalpur", "Bhopal", "Indore", "Gwalior",
  "Delhi", "Gurugram", "Faridabad", "Noida",
  "Lucknow", "Kanpur", "Agra",
  "Jaipur", "Udaipur", "Bikaner",
  "Patna", "Ranchi", "Kolkata", "Siliguri",
  "Bhubaneswar", "Guwahati", "Hyderabad",
  "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli",
  "Bangalore", "Mysuru", "Mangalore",
  "Kochi", "Thiruvananthapuram", "Vijayawada", "Visakhapatnam",
  "Ahmedabad", "Surat", "Vadodara", "Rajkot",
  "Chandigarh", "Amritsar", "Dehradun"
];

const globalLocations = [
  "USA", "Australia", "Europe", "UAE", "UK", "Canada"
];

export default function OperationsPage() {
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
        "@id": "https://organicmushroomsfarm.com/operations#webpage",
        url: "https://organicmushroomsfarm.com/operations",
        name: "Pan India & Global Operations | Organic Mushrooms Farm",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Explore our operational network across India and globally. We provide mushroom training, commercial farm setups, premium spawn, and agribusiness consultancy.",
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
            name: "Operations",
            item: "https://organicmushroomsfarm.com/operations",
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

        <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-slate-700 dark:text-slate-300 text-[10px] md:text-[11px] font-bold mb-6 border border-black/10 dark:border-white/10 backdrop-blur-sm">
              <Globe size={14} className="text-brand-blue animate-[spin_10s_linear_infinite]" />
              <span>Pan India & Global Presence</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              Our Operational <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-500">Network & Reach</span>
            </h1>
            <p className="text-[12px] md:text-[14px] text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
              From state-of-the-art regional consulting units across Indian provinces to custom industrial consulting for international growers in the USA, Australia, and Europe.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Card 1: Domestic Network */}
            <div className="glass p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-white/5 dark:bg-white/5 backdrop-blur-md relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6">
                  <Building size={24} />
                </div>
                <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4">Domestic Operations (Pan-India)</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-blue-400 rounded-full mb-6"></div>
                
                <p className="text-[12px] text-slate-700 dark:text-slate-300 font-medium mb-6 leading-relaxed">
                  Our teams provide <strong>mushroom training in India</strong> and <strong>farm setup services</strong> across major regions including Madhya Pradesh, Maharashtra, Uttar Pradesh, and Bihar. We aim to build a strong network of successful mushroom farms.
                </p>
                
                <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 mt-auto">
                  <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Serving Pan India Cities:</h3>
                  <div className="flex flex-wrap gap-2">
                    {domesticLocations.map((loc, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full transition-colors cursor-default hover:bg-brand-blue/10 hover:border-brand-blue/30">
                        {loc}
                      </span>
                    ))}
                    <span className="px-3 py-1.5 text-[10px] font-medium text-slate-500 dark:text-slate-400 rounded-full italic">
                      + Many More...
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: International Operations */}
            <div className="glass p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-white/5 dark:bg-white/5 backdrop-blur-md relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
                  <Globe size={24} />
                </div>
                <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4">Global Reach & Consultancy</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
                
                <p className="text-[12px] text-slate-700 dark:text-slate-300 font-medium mb-6 leading-relaxed">
                  We offer professional consultancy services worldwide. Our standard procedures, high-yield methods, and climate control setups work effectively in any country.
                </p>
                
                <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 mt-auto">
                  <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Global Reach & International Consultancy:</h3>
                  <div className="flex flex-wrap gap-2">
                    {globalLocations.map((loc, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full transition-colors cursor-default hover:bg-purple-500/10 hover:border-purple-500/30">
                        {loc}
                      </span>
                    ))}
                    <span className="px-3 py-1.5 text-[10px] font-medium text-slate-500 dark:text-slate-400 rounded-full italic">
                      + Other Hubs Worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="glass p-6 rounded-3xl border border-black/5 dark:border-white/5 bg-white/5 dark:bg-white/5 backdrop-blur-md text-center shadow-lg hover:shadow-brand-blue/5 transition-shadow">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-4">
                <Sprout size={20} />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-[14px] mb-2">Organic F1 Spawn</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                Supplying high-efficiency F1 mother spawn seeds to extreme climates across domestic and global zones.
              </p>
            </div>
            <div className="glass p-6 rounded-3xl border border-black/5 dark:border-white/5 bg-white/5 dark:bg-white/5 backdrop-blur-md text-center shadow-lg hover:shadow-purple-500/5 transition-shadow">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={20} />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-[14px] mb-2">Turnkey Setups</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                SOP-driven climate controls custom-engineered for region-specific seasonal temperature and humidity profiles.
              </p>
            </div>
            <div className="glass p-6 rounded-3xl border border-black/5 dark:border-white/5 bg-white/5 dark:bg-white/5 backdrop-blur-md text-center shadow-lg hover:shadow-brand-blue/5 transition-shadow">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-4">
                <Users size={20} />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-[14px] mb-2">Linkage & Training</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                Direct market mapping connections to distributors and high-standard scientific agricultural program consulting.
              </p>
            </div>
          </div>

          {/* Call To Action */}
          <section className="glass p-8 md:p-12 rounded-[2rem] border border-black/5 dark:border-white/5 bg-white/5 dark:bg-white/5 backdrop-blur-md text-center shadow-2xl relative overflow-hidden">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to Start Your Commercial Farm?</h3>
            <p className="text-[12px] text-slate-500 dark:text-slate-400 mb-8 max-w-xl mx-auto font-medium">
              Contact our specialist agri-tech consultancy team for custom global setup quotes or verified spawn order logistics.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-[12px] transition-all shadow-lg shadow-brand-blue/20 w-full sm:w-auto">
                WhatsApp Support
              </a>
              <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-slate-900 dark:text-white border border-slate-900/10 dark:border-white/20 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-[12px] transition-all w-full sm:w-auto">
                Request Project Quote <ArrowRight size={14} />
              </Link>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}
