import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Mysuru (Mysore), Karnataka | Training & Spawn",
  description:
    "Start commercial mushroom farming in Mysuru (Mysore), Karnataka. Moderate climate benefits, Kannada & English training, premium spawn, and Bengaluru market linkages.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/karnataka/mysuru",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Mysuru (Mysore), Karnataka | Training & Spawn",
    description:
      "Start commercial mushroom farming in Mysuru (Mysore), Karnataka. Moderate climate benefits, Kannada & English training, premium spawn, and Bengaluru market linkages.",
    url: "https://organicmushroomsfarm.com/cities/karnataka/mysuru",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Mysuru (Mysore), Karnataka | Training & Spawn",
    description:
      "Start commercial mushroom farming in Mysuru (Mysore), Karnataka. Moderate climate benefits, Kannada & English training, premium spawn, and Bengaluru market linkages.",
  },
};

export default function ArticleMysuruTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/karnataka/mysuru#webpage",
        url: "https://organicmushroomsfarm.com/cities/karnataka/mysuru",
        name: "Mushroom Farming in Mysuru (Mysore), Karnataka | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Mysuru (Mysore), Karnataka. Moderate climate benefits, Kannada & English training, premium spawn, and Bengaluru market linkages.",
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
            name: "Karnataka",
            item: "https://organicmushroomsfarm.com/states/karnataka",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Mysuru",
            item: "https://organicmushroomsfarm.com/cities/karnataka/mysuru",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Mysuru (Mysore), Karnataka | Training & Spawn",
        description:
          "Start commercial mushroom farming in Mysuru (Mysore), Karnataka. Moderate climate benefits, Kannada & English training, premium spawn, and Bengaluru market linkages.",
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
          "@id": "https://organicmushroomsfarm.com/cities/karnataka/mysuru",
        },
      },
    ],
  };

  const faqs = [
    { q: "1. ಮೈಸೂರಿನಲ್ಲಿ ಅಣಬೆ ಕೃಷಿ ಆರಂಭಿಸಲು ಎಷ್ಟು ಬಂಡವಾಳ ಬೇಕು?", a: "ಸಣ್ಣ ಪ್ರಮಾಣದಲ್ಲಿ ₹5,000 ರಿಂದ ₹10,000 ಸಾಕು. ವಾಣಿಜ್ಯ ಮಟ್ಟದ ಹೈಟೆಕ್ ಫಾರ್ಮ್‌ಗೆ ಜಾಗ ಮತ್ತು ಉತ್ಪಾದನಾ ಸಾಮರ್ಥ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ಹೂಡಿಕೆ ನಿರ್ಧಾರವಾಗುತ್ತದೆ." },
    { q: "2. ಮೈಸೂರಿನ ಹವಾಮಾನಕ್ಕೆ ಯಾವ ಅಣಬೆ ಹೆಚ್ಚು ಸೂಕ್ತ?", a: "ಮೈಸೂರಿನ ಸಮಶೀತೋಷ್ಣ ಹವಾಮಾನವು ಸಿಂಪಿ ಅಣಬೆ (Oyster) ಮತ್ತು ಬಟನ್ ಅಣಬೆ (Button Mushroom) ಗಳಿಗೆ ಅತ್ಯಂತ ಪೂರಕವಾಗಿದೆ. ಬೇಸಿಗೆಯಲ್ಲಿ ಮಿಲ್ಕಿ ಅಣಬೆ ಕೂಡ ಚೆನ್ನಾಗಿ ಬೆಳೆಯುತ್ತದೆ." },
    { q: "3. ಗುಣಮಟ್ಟದ ಬೀಜ (ಸ್ಪಾನ್) ಎಲ್ಲಿ ಸಿಗುತ್ತದೆ?", a: "Organic Mushrooms Farm ವತಿಯಿಂದ ಲ್ಯಾಬ್-ಪರೀಕ್ಷಿತ F1-Gen ಅಧಿಕ ಇಳುವರಿ ನೀಡುವ ಸ್ಪಾನ್ ಮೈಸೂರು ಮತ್ತು ಮಂಡ್ಯ ಪ್ರದೇಶಗಳಿಗೆ ವೇಗವಾಗಿ ರವಾನಿಸಲಾಗುತ್ತದೆ." },
    { q: "4. ಮೈಸೂರಿನಲ್ಲಿ ಮಾರುಕಟ್ಟೆ ಅವಕಾಶಗಳು ಹೇಗಿವೆ?", a: "ಮೈಸೂರಿನ ಹೆರಿಟೇಜ್ ಹೋಟೆಲ್‌ಗಳು, ರೆಸಾರ್ಟ್‌ಗಳು, ಸೂಪರ್‌ಮಾರ್ಕೆಟ್‌ಗಳು ಮತ್ತು ಮೈಸೂರು-ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ರೆಸ್‌ವೇ ಮೂಲಕ ಬೆಂಗಳೂರಿನ ಬೃಹತ್ ಮಾರುಕಟ್ಟೆಗೆ ತಕ್ಷಣ ಪೂರೈಕೆ ಮಾಡಬಹುದು." }
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
              Mushroom Farming in Mysuru (ಮೈಸೂರಿನಲ್ಲಿ ಅಣಬೆ ಕೃಷಿ)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Mysuru, Mandya, Nanjangud, Hunsur & Southern Karnataka</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              ಅರಮನೆ ನಗರಿ ಮೈಸೂರು (Mysuru / Mysore) ಪ್ರವಾಸೋದ್ಯಮ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ವೈಭವಕ್ಕೆ ಮಾತ್ರವಲ್ಲದೆ, ಕೃಷಿ ಮತ್ತು ಆಧುನಿಕ ಆಹಾರೋದ್ಯಮದಲ್ಲೂ ಮುಂಚೂಣಿಯಲ್ಲಿದೆ. ನಗರದ ಹೆರಿಟೇಜ್ ಹೋಟೆಲ್‌ಗಳು, ಐಷಾರಾಮಿ ರೆಸಾರ್ಟ್‌ಗಳು ಮತ್ತು ಆರೋಗ್ಯ ಜಾಗೃತಿ ಹೊಂದಿರುವ ಸಾರ್ವಜನಿಕರಲ್ಲಿ ತಾಜಾ ಸಾವಯವ ಅಣಬೆಗೆ (Organic Mushrooms) ಅತ್ಯಧಿಕ ಬೇಡಿಕೆಯಿದೆ.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              ಮೈಸೂರಿನ ಅನುಕೂಲಕರ ವರ್ಷಪೂರ್ತಿ ಸಮಶೀತೋಷ್ಣ ಹವಾಮಾನ ಮತ್ತು ಪಕ್ಕದ ಮಂಡ್ಯ-ಕಾವೇರಿ ಕಣಿವೆಯ ಭತ್ತದ ಒಣಹುಲ್ಲಿನ ಸುಲಭ ಲಭ್ಯತೆಯು ಅಣಬೆ ಕೃಷಿಯನ್ನು (Mushroom Cultivation) ಅತ್ಯಂತ ಲಾಭದಾಯಕ ಉದ್ಯಮವನ್ನಾಗಿ ಮಾಡಿದೆ.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Mysuru is Perfectly Suited for Mushroom Farming
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Mild Year-Round Climate:</strong> ಮೈಸೂರಿನ ಹಿತಕರ ತಾಪಮಾನದಿಂದಾಗಿ ಹವಾನಿಯಂತ್ರಣ (AC) ಮತ್ತು ವಿದ್ಯುತ್ ವೆಚ್ಚ ತೀರಾ ಕಡಿಮೆ ಇರುತ್ತದೆ.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Rich Agricultural Belt (Mandya-Mysuru):</strong> ಕಾವೇರಿ ಕೃಷಿ ಬೆಲ್ಟ್‌ನಿಂದ ಭತ್ತದ ಒಣಹುಲ್ಲು ಮತ್ತು ಕಬ್ಬಿನ ಸಿಪ್ಪೆ (bagasse) ಅತ್ಯಂತ ಕಡಿಮೆ ಬೆಲೆಗೆ ಲಭ್ಯವಿರುತ್ತದೆ.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Bengaluru Expressway Connectivity:</strong> ಮೈಸೂರು-ಬೆಂಗಳೂರು 10-ಲೇನ್ ಎಕ್ಸ್‌ಪ್ರೆಸ್‌ವೇ ಮೂಲಕ ಕೇವಲ 90 ನಿಮಿಷಗಳಲ್ಲಿ ಬೆಂಗಳೂರಿನ ಬೃಹತ್ ಮಾಲ್ ಮತ್ತು ಸೂಪರ್‌ಮಾರ್ಕೆಟ್‌ಗಳಿಗೆ ತಾಜಾ ಅಣಬೆ ಸರಬರಾಜು ಮಾಡಬಹುದು.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Hands-on Training in Kannada & English</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  ಹುಲ್ಲು ಸಂಸ್ಕರಣೆ, ಬಿತ್ತನೆ (Spawning), ತೇವಾಂಶ ನಿರ್ವಹಣೆ, ರೋಗ ನಿಯಂತ್ರಣ ಮತ್ತು ಕೊಯ್ಲು ಕುರಿತು ಆನ್‌ಲೈನ್ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ತರಬೇತಿ.
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn Supply</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  ಮೈಸೂರು ಮತ್ತು ದಕ್ಷಿಣ ಕರ್ನಾಟಕದ ಜಿಲ್ಲೆಗಳಿಗೆ F1-Gen ಲ್ಯಾಬ್-ಪರೀಕ್ಷಿತ ಹೈ-ಯೀಲ್ಡ್ ಸಿಂಪಿ ಮತ್ತು ಬಟನ್ ಅಣಬೆ ಸ್ಪಾನ್ ಪೂರೈಕೆ.
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Commercial Setups & Marketing Linkages</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  ಹವಾಮಾನ ನಿಯಂತ್ರಿತ ಹೈಟೆಕ್ ಫಾರ್ಮ್ ಸೆಟಪ್, ನಬಾರ್ಡ್/ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿಗಾಗಿ ಡಿಪಿಆರ್ (DPR) ಮತ್ತು ಸ್ಥಳೀಯ ಚಿಲ್ಲರೆ ಮಾರುಕಟ್ಟೆ ನೆಟ್‌ವರ್ಕ್.
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Coverage Across Mysuru Region
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              ಮೈಸೂರು ನಗರ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಎಲ್ಲಾ ತಾಲ್ಲೂಕುಗಳಲ್ಲಿ ನಮ್ಮ ಸೇವೆಗಳು ಲಭ್ಯವಿದೆ:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>City Hubs:</strong> Gokulam, Jayalakshmipuram, Vijayanagar, Kuvempunagar, Saraswathipuram, Hebbal, Bogadi, Yadavagiri.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Surrounding Towns:</strong> Nanjangud, Hunsur, T. Narasipura, Mandya, Srirangapatna, K.R. Nagar, Bannur.</span>
              </li>
            </ul>

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
                Ready to Start Your Mushroom Business in Mysuru?
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
