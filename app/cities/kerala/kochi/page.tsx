import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Kochi, Kerala | Training, Spawn & Setup",
  description:
    "Start commercial mushroom farming in Kochi, Ernakulam. Expert training, premium spawn, turnkey farm setup, and B2B marketing support in Kerala.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/kerala/kochi",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Kochi, Kerala | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Kochi, Ernakulam. Expert training, premium spawn, turnkey farm setup, and B2B marketing support in Kerala.",
    url: "https://organicmushroomsfarm.com/cities/kerala/kochi",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Kochi, Kerala | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Kochi, Ernakulam. Expert training, premium spawn, turnkey farm setup, and B2B marketing support in Kerala.",
  },
};

export default function ArticleKochiTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/kerala/kochi#webpage",
        url: "https://organicmushroomsfarm.com/cities/kerala/kochi",
        name: "Mushroom Farming in Kochi, Kerala | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Kochi, Ernakulam. Expert training, premium spawn, turnkey farm setup, and B2B marketing support in Kerala.",
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
          {
            "@type": "ListItem",
            position: 4,
            name: "Kochi",
            item: "https://organicmushroomsfarm.com/cities/kerala/kochi",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Kochi, Kerala | Training, Spawn & Setup",
        description:
          "Start commercial mushroom farming in Kochi, Ernakulam. Expert training, premium spawn, turnkey farm setup, and B2B marketing support in Kerala.",
        author: {
          "@type": "Organization",
          name: "Organic Mushrooms Farm",
        },
        publisher: {
          "@type": "Organization",
          name: "Organic Mushrooms Farm",
          logo: {
            "@type": "ImageObject",
            url: "https://organicmushroomsfarm.com/icon.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://organicmushroomsfarm.com/cities/kerala/kochi",
        },
      },
    ],
  };

  const faqs = [
    { q: "1. എനിക്ക് എത്ര സ്ഥലം വേണം?", a: "ഒരു മുറി (100 sq ft) മാത്രം മതി Oyster mushroom ആരംഭിക്കാൻ." },
    { q: "2. എനിക്ക് training എവിടെ നിന്ന് ലഭിക്കും?", a: "ഞങ്ങൾ professional training (Online & Offline) നൽകുന്നുണ്ട്. അത് നിങ്ങളെ അടിസ്ഥാന കാര്യങ്ങൾ മനസ്സിലാക്കാൻ സഹായിക്കും." },
    { q: "3. ഇവ എവിടെ വിൽക്കാം?", a: "Local vegetable markets, organic stores, restaurants, അതുപോലെ online delivery വഴിയും വിൽക്കാം." },
    { q: "4. Government subsidies ലഭ്യമാണോ?", a: "PMFME അടക്കം പല സ്കീമുകളും നിലവിലുണ്ട്. Agriculture ഡിപ്പാർട്മെന്റുമായി ബന്ധപ്പെടുക." },
    { q: "5. പരാജയപ്പെടാനുള്ള പ്രധാന കാരണം എന്താണ്?", a: "Poor hygiene കാരണമുണ്ടാകുന്ന contamination-ഉം humidity control ഇല്ലാത്തതുമാണ് പ്രധാന കാരണങ്ങൾ." },
    { q: "6. സ്ത്രീകൾക്ക് വീട്ടിലിരുന്ന് ചെയ്യാൻ സാധിക്കുമോ?", a: "അതെ, flexible working hours കാരണം സ്ത്രീകൾക്ക് ഏറ്റവും അനുയോജ്യമായ ബിസിനസ്സ് ആണിത്." }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pt-24 pb-16 min-h-screen bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="mb-12 text-center">
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              Mushroom Farming in Kochi (കൊച്ചിയിൽ കൂൺ കൃഷി)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Ernakulam, Kakkanad, Aluva, Edappally & Surrounding Kerala Regions</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              Kochi (കൊച്ചി) is the commercial capital of Kerala. With its booming IT sector in Kakkanad, premium hotels across Marine Drive, and a highly health-conscious population, the demand for fresh organic mushrooms has skyrocketed in Ernakulam district.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              Whether you are an IT professional looking for a side business, a homemaker in Thrippunithura, or a farmer in Perumbavoor, commercial mushroom farming is a highly profitable, low-investment opportunity in Kochi.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Kochi is Ideal for Mushroom Cultivation
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>High Humidity Climate:</strong> Kerala's naturally humid climate is perfect for Oyster and Milky mushrooms. They grow effortlessly with minimal artificial humidification.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Massive Market Demand:</strong> IT hubs, 5-star hotels, resorts, and premium supermarkets in Edappally and Panampilly Nagar provide a massive, high-paying ready market.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>No Land Required:</strong> Due to high real estate costs in Ernakulam, vertical farming in polybags inside vacant rooms or terraces is highly cost-effective.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Mushroom Services in Kochi
            </h2>
            <div className="space-y-4 mb-8 pl-4 border-l border-black/10 dark:border-white/10">
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">1. Professional Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">Scientific training is crucial to prevent contamination. We provide comprehensive online/offline training on substrate preparation, spawning, and climate control.</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">2. Premium Mushroom Spawn (വിത്ത്):</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">We supply high-yielding, lab-tested Oyster, Milky, and Button mushroom spawn directly to your farm anywhere in Ernakulam.</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">3. Turnkey Climate-Controlled Farms:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">For large scale commercial cultivation (especially Button mushrooms), we design and install fully automated AC farms (PUF panels, foggers, chillers) for year-round yield.</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Hyper-Local Coverage in Ernakulam District
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              We provide logistical and technical support across all major zones:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> Urban Core & IT Hubs</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Kakkanad (Infopark), Edappally, Palarivattom, Panampilly Nagar, Vyttila, Marine Drive, Fort Kochi</p>
              </div>
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> Suburban & Rural Belts</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Aluva, Angamaly, Perumbavoor, Muvattupuzha, Kothamangalam, Thrippunithura, Kalamassery</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-brand-blue pl-3">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-3 mb-12">
              {faqs.map((faq, index) => (
                <div key={index} className="p-5 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5 space-y-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-[13px]">
                    {faq.q}
                  </h4>
                  <p className="text-[12px] dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Start Your Mushroom Business in Kochi?
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-[12px] transition-all shadow-lg w-full sm:w-auto">
                  <MessageSquare size={16} /> WhatsApp Us: 9203544140
                </a>
                <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-slate-900 dark:text-white border border-slate-900/10 dark:border-white/20 px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-[12px] transition-all w-full sm:w-auto">
                  <Calendar size={14} /> Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
