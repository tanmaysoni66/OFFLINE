import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Mangalore (Mangaluru), Karnataka | Training & Spawn",
  description:
    "Start commercial mushroom farming in Mangalore & coastal Karnataka. Kannada/Tulu/English training, high-humidity setups, premium spawn, and market linkages.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/karnataka/mangalore",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Mangalore (Mangaluru), Karnataka | Training & Spawn",
    description:
      "Start commercial mushroom farming in Mangalore & coastal Karnataka. Kannada/Tulu/English training, high-humidity setups, premium spawn, and market linkages.",
    url: "https://organicmushroomsfarm.com/cities/karnataka/mangalore",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Mangalore (Mangaluru), Karnataka | Training & Spawn",
    description:
      "Start commercial mushroom farming in Mangalore & coastal Karnataka. Kannada/Tulu/English training, high-humidity setups, premium spawn, and market linkages.",
  },
};

export default function ArticleMangaloreTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/karnataka/mangalore#webpage",
        url: "https://organicmushroomsfarm.com/cities/karnataka/mangalore",
        name: "Mushroom Farming in Mangalore (Mangaluru), Karnataka | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Mangalore & coastal Karnataka. Kannada/Tulu/English training, high-humidity setups, premium spawn, and market linkages.",
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
            name: "Mangalore",
            item: "https://organicmushroomsfarm.com/cities/karnataka/mangalore",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Mangalore (Mangaluru), Karnataka | Training & Spawn",
        description:
          "Start commercial mushroom farming in Mangalore & coastal Karnataka. Kannada/Tulu/English training, high-humidity setups, premium spawn, and market linkages.",
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
          "@id": "https://organicmushroomsfarm.com/cities/karnataka/mangalore",
        },
      },
    ],
  };

  const faqs = [
    { q: "1. ಮಂಗಳೂರಿನಲ್ಲಿ ಮಶ್ರೂಮ್ ಫಾರ್ಮಿಂಗ್ ಪ್ರಾರಂಭಿಸಲು ಎಷ್ಟು ಬಂಡವಾಳ ಬೇಕು?", a: "ಸಣ್ಣ ಪ್ರಮಾಣದಲ್ಲಿ ₹5,000 ರಿಂದ ₹10,000 ದಲ್ಲಿ ಪ್ರಾರಂಭಿಸಬಹುದು. ಕಮರ್ಷಿಯಲ್ ಸೆಟಪ್‌ಗೆ ಸ್ಥಳ ಮತ್ತು ತಂತ್ರಜ್ಞಾನಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಹೂಡಿಕೆ ನಿರ್ಧರಿಸಲಾಗುತ್ತದೆ." },
    { q: "2. ಕರಾವಳಿ ಹವಾಮಾನಕ್ಕೆ ಯಾವ ಮಶ್ರೂಮ್ ಸೂಕ್ತ?", a: "ಕರಾವಳಿಯ ನೈಸರ್ಗಿಕ ತೇವಾಂಶದಿಂದಾಗಿ ಸಿಂಪಿ ಅಣಬೆ (Oyster Mushroom) ಮತ್ತು ಬಿಸಿಲಿನಲ್ಲಿ ಮಿಲ್ಕಿ ಮಶ್ರೂಮ್ (Milky Mushroom) ಅತ್ಯುತ್ತಮ ಇಳುವರಿ ನೀಡುತ್ತವೆ." },
    { q: "3. ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಬೀಜ (ಸ್ಪಾನ್) ಎಲ್ಲಿ ಸಿಗುತ್ತದೆ?", a: "Organic Mushrooms Farm ನಿಂದ ಲ್ಯಾಬ್-ಪರೀಕ್ಷಿತ F1-Gen ಸ್ಪಾನ್ ಮಂಗಳೂರು, ಉಡುಪಿ ಮತ್ತು ದಕ್ಷಿಣ ಕನ್ನಡದಾದ್ಯಂತ ತ್ವರಿತವಾಗಿ ತಲುಪಿಸಲಾಗುತ್ತದೆ." },
    { q: "4. ಬೆಳೆದ ಅಣಬೆಯನ್ನು ಎಲ್ಲಿ ಮಾರಾಟ ಮಾಡಬಹುದು?", a: "ಮಂಗಳೂರು ಮತ್ತು ಮಣಿಪಾಲದ ರೆಸಾರ್ಟ್‌ಗಳು, ಹೋಟೆಲ್‌ಗಳು, ಸೂಪರ್‌ಮಾರ್ಕೆಟ್‌ಗಳು ಮತ್ತು ಆನ್‌ಲೈನ್ ಮೂಲಕ ಉತ್ತಮ ಬೆಲೆಗೆ ಸುಲಭವಾಗಿ ಮಾರಾಟ ಮಾಡಬಹುದು." }
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
              Mushroom Farming in Mangalore (ಕುಡ್ಲ / ಮಂಗಳೂರಿನಲ್ಲಿ ಅಣಬೆ ಕೃಷಿ)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Mangalore, Udupi, Surathkal, Manipal & Coastal Karnataka</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              ಕರಾವಳಿ ಕರ್ನಾಟಕದ ವಾಣಿಜ್ಯ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ರಾಜಧಾನಿಯಾದ ಮಂಗಳೂರು (Mangaluru / Kudla) ಪ್ರವಾಸೋದ್ಯಮ, ಬಂದರು ಮತ್ತು ಐಷಾರಾಮಿ ಹೋಟೆಲ್‌ಗಳಿಗೆ ಹೆಸರುವಾಸಿ. ಮಂಗಳೂರು, ಉಡುಪಿ ಮತ್ತು ಮಣಿಪಾಲದ ಶಿಕ್ಷಣ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ವಲಯದಲ್ಲಿ ಆರೋಗ್ಯಕರ, ಪ್ರೋಟೀನ್-ಭರಿತ ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆಗೆ ಬೇಡಿಕೆ ನಿರಂತರವಾಗಿ ಹೆಚ್ಚುತ್ತಿದೆ.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              ಕರಾವಳಿಯ ನೈಸರ್ಗಿಕ ತೇವಾಂಶ ಮತ್ತು ಭತ್ತದ ಒಣಹುಲ್ಲಿನ ಸುಲಭ ಲಭ್ಯತೆಯು ಮಂಗಳೂರಿನಲ್ಲಿ ಅಣಬೆ ಕೃಷಿಯನ್ನು (Mushroom Farming) ಕನಿಷ್ಠ ಖರ್ಚಿನಲ್ಲಿ ಗರಿಷ್ಠ ಲಾಭ ನೀಡುವ ಅದ್ಭುತ ಕೃಷಿ-ಉದ್ಯಮವನ್ನಾಗಿ ಮಾಡಿದೆ.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Coastal Karnataka is Ideal for Mushroom Farming
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Natural Humidity Advantage:</strong> ಕರಾವಳಿಯ ನೈಸರ್ಗಿಕ ತೇವಾಂಶದಿಂದಾಗಿ ಕೃತಕ ಆರ್ದ್ರಕಗಳ (humidifiers) ಮತ್ತು ವಿದ್ಯುತ್ ವೆಚ್ಚ ಗಣನೀಯವಾಗಿ ಕಡಿಮೆಯಾಗುತ್ತದೆ.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>High-Yield Varieties:</strong> ಆರಂಭಿಕರಿಗೆ ಸಿಂಪಿ ಅಣಬೆ (Oyster) ಮತ್ತು ಕರಾವಳಿಯ ಬೇಸಿಗೆ ತಾಪಮಾನಕ್ಕೆ ಸೂಕ್ತವಾದ ಮಿಲ್ಕಿ ಅಣಬೆ (Milky Mushroom) ಅಗಾಧ ಇಳುವರಿ ನೀಡುತ್ತವೆ.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Ready Market (Manipal & Coastal Resorts):</strong> ಮಣಿಪಾಲದ ವಿದ್ಯಾರ್ಥಿ ಸಮುದಾಯ ಮತ್ತು ಕರಾವಳಿ ರೆಸಾರ್ಟ್‌ಗಳು, ಹೋಟೆಲ್‌ಗಳು ದಿನಂಪ್ರತಿ ತಾಜಾ ಮಶ್ರೂಮ್‌ಗಳಿಗೆ ಪ್ರೀಮಿಯಂ ದರ ನೀಡುತ್ತವೆ.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Hands-on Training in Kannada & English</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  ಹುಲ್ಲು ಸಂಸ್ಕರಣೆ, ಬಿತ್ತನೆ (ಸ್ಪಾನಿಂಗ್), ರೋಗ ನಿಯಂತ್ರಣ ಮತ್ತು ಕೊಯ್ಲು ಕುರಿತು ಆನ್‌ಲೈನ್ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ತರಬೇತಿ.
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn Supply</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  ದಕ್ಷಿಣ ಕನ್ನಡ ಮತ್ತು ಉಡುಪಿ ಜಿಲ್ಲೆಗಳಿಗೆ F1-Gen ಅಧಿಕ ಇಳುವರಿ ನೀಡುವ ಪ್ರಮಾಣೀಕೃತ ಸ್ಪಾನ್ ಪೂರೈಕೆ.
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Commercial Setups & Marketing Linkages</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  ಹವಾಮಾನ ನಿಯಂತ್ರಿತ ಫಾರ್ಮ್ ನಿರ್ಮಾಣ, ಬ್ಯಾಂಕ್ ಸಬ್ಸಿಡಿಗಾಗಿ ಯೋಜನಾ ವರದಿ (DPR) ಮತ್ತು ಸ್ಥಳೀಯ ಚಿಲ್ಲರೆ ಮಾರುಕಟ್ಟೆ ನೆಟ್‌ವರ್ಕ್.
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Coverage Across Mangalore & Dakshina Kannada
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              ಮಂಗಳೂರು ನಗರ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಎಲ್ಲಾ ಭಾಗಗಳಲ್ಲಿ ನಮ್ಮ ಸೇವೆಗಳು ಲಭ್ಯವಿದೆ:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>City Hubs:</strong> Kadri, Hampankatta, Lalbagh, Kankanady, Bejai, Surathkal, Derebail, Bondel, Baikampady.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Coastal & Nearby Towns:</strong> Udupi, Manipal, Bantwal, Puttur, Belthangady, Karkala, Moodabidri, Kundapura.</span>
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
                Ready to Start Your Mushroom Business in Mangalore?
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
