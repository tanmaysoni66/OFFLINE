import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Award, Users, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Expertise in Commercial Mushroom Farming | Organic Mushrooms Farm",
  description:
    "Learn about our precision engineering, expert training, and quality guarantee in commercial mushroom farming setups.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/expertise",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Our Expertise in Commercial Mushroom Farming | Organic Mushrooms Farm",
    description:
      "Learn about our precision engineering, expert training, and quality guarantee in commercial mushroom farming setups.",
    url: "https://organicmushroomsfarm.com/expertise",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Our Expertise in Commercial Mushroom Farming | Organic Mushrooms Farm",
    description:
      "Learn about our precision engineering, expert training, and quality guarantee in commercial mushroom farming setups.",
  },
};

export default function ExpertiseDetailsPage() {
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
        "@id": "https://organicmushroomsfarm.com/expertise#webpage",
        url: "https://organicmushroomsfarm.com/expertise",
        name: "Our Expertise in Commercial Mushroom Farming | Organic Mushrooms Farm",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Learn about our precision engineering, expert training, and quality guarantee in commercial mushroom farming setups.",
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
            name: "Expertise",
            item: "https://organicmushroomsfarm.com/expertise",
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

        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-brand-blue transition-colors">
              Home
            </Link>
            <ChevronRight size={10} />
            <span className="font-semibold text-slate-900 dark:text-white">
              Expertise
            </span>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-slate-700 dark:text-slate-300 text-[10px] md:text-[11px] font-bold mb-4 border border-black/10 dark:border-white/10 backdrop-blur-sm">
              <Award size={14} className="text-brand-blue" />
              <span>Our Edge</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-500">Expertise</span>
            </h1>
            <p className="text-[12px] md:text-[14px] text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Precision engineering, hands-on training, and uncompromising quality guarantees for commercial mushroom farming.
            </p>
          </header>

          <div className="space-y-8">
            {/* Precision Engineering */}
            <div className="glass p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/5 dark:bg-white/5 backdrop-blur-md relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-8 text-brand-blue/5">
                <Award size={120} />
              </div>
              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
                    <Award size={28} className="text-brand-blue" />
                  </div>
                </div>
                <div>
                  <h2 className="text-[18px] font-bold text-slate-900 dark:text-white mb-3">Precision Engineering</h2>
                  <p className="text-[12px] text-slate-700 dark:text-slate-300 mb-5 leading-relaxed font-medium">
                    Our farms use smart sensors to check and adjust the temperature and humidity automatically.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                      <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                      <span><strong>Automated CO2 Management:</strong> Smart exhaust systems automatically trigger when CO2 levels exceed optimal thresholds (e.g., &gt;1200ppm during spawn run, &lt;800ppm during cropping).</span>
                    </li>
                    <li className="flex items-start gap-3 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                      <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                      <span><strong>Humidity Control:</strong> Special humidifiers keep the air moist, which is essential for growing high-quality mushrooms.</span>
                    </li>
                    <li className="flex items-start gap-3 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                      <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                      <span><strong>Thermal Efficiency:</strong> 80-100mm Polyurethane Foam (PUF) panels ensure complete thermal isolation, drastically reducing electrical operating costs.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Expert Training */}
            <div className="glass p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/5 dark:bg-white/5 backdrop-blur-md relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-8 text-purple-500/5">
                <Users size={120} />
              </div>
              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                    <Users size={28} className="text-purple-500" />
                  </div>
                </div>
                <div>
                  <h2 className="text-[18px] font-bold text-slate-900 dark:text-white mb-3">Expert Training</h2>
                  <p className="text-[12px] text-slate-700 dark:text-slate-300 mb-5 leading-relaxed font-medium">
                    We teach you everything you need to know with hands-on training.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                      <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={16} />
                      <span><strong>Physical Training Center (Jabalpur):</strong> Learn directly on a working farm. Practice making beds, adding seeds, and harvesting.</span>
                    </li>
                    <li className="flex items-start gap-3 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                      <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={16} />
                      <span><strong>Online Certification:</strong> Learn the basics online, including how to make compost and identify diseases.</span>
                    </li>
                    <li className="flex items-start gap-3 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                      <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={16} />
                      <span><strong>Lifetime Support:</strong> Our training doesn't end after certification. Graduates receive ongoing consultation and troubleshooting access.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quality Guarantee */}
            <div className="glass p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/5 dark:bg-white/5 backdrop-blur-md relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-8 text-emerald-500/5">
                <ShieldCheck size={120} />
              </div>
              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                    <ShieldCheck size={28} className="text-emerald-500" />
                  </div>
                </div>
                <div>
                  <h2 className="text-[18px] font-bold text-slate-900 dark:text-white mb-3">Quality Guarantee</h2>
                  <p className="text-[12px] text-slate-700 dark:text-slate-300 mb-5 leading-relaxed font-medium">
                    We use high-quality materials to make sure your farm lasts and produces a lot.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                      <span><strong>ISI-Grade Infrastructure:</strong> We build strong metal shelves that can hold heavy mushroom beds for many years.</span>
                    </li>
                    <li className="flex items-start gap-3 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                      <span><strong>Premium Hybrid Spawn:</strong> Our high-quality seeds grow fast, resist diseases, and give a great harvest.</span>
                    </li>
                    <li className="flex items-start gap-3 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                      <span><strong>Compliance Ready:</strong> Our materials and structural blueprints are fully compliant with government subsidy requirements (NHB/MIDH).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </article>
      </main>
    </>
  );
}
