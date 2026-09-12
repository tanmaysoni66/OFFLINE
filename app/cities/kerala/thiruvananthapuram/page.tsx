import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Thiruvananthapuram, Kerala | Training & Spawn",
  description:
    "Start commercial mushroom farming in Thiruvananthapuram, Kerala. Expert training (Malayalam/English), premium spawn, turnkey farm setups, and buyback/marketing guidance.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/kerala/thiruvananthapuram",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Thiruvananthapuram, Kerala | Training & Spawn",
    description:
      "Start commercial mushroom farming in Thiruvananthapuram, Kerala. Expert training (Malayalam/English), premium spawn, turnkey farm setups, and buyback/marketing guidance.",
    url: "https://organicmushroomsfarm.com/cities/kerala/thiruvananthapuram",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Thiruvananthapuram, Kerala | Training & Spawn",
    description:
      "Start commercial mushroom farming in Thiruvananthapuram, Kerala. Expert training (Malayalam/English), premium spawn, turnkey farm setups, and buyback/marketing guidance.",
  },
};

export default function ArticleThiruvananthapuramTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/kerala/thiruvananthapuram#webpage",
        url: "https://organicmushroomsfarm.com/cities/kerala/thiruvananthapuram",
        name: "Mushroom Farming in Thiruvananthapuram, Kerala | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Thiruvananthapuram, Kerala. Expert training (Malayalam/English), premium spawn, turnkey farm setups, and buyback/marketing guidance.",
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
            name: "Thiruvananthapuram",
            item: "https://organicmushroomsfarm.com/cities/kerala/thiruvananthapuram",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Thiruvananthapuram, Kerala | Training & Spawn",
        description:
          "Start commercial mushroom farming in Thiruvananthapuram, Kerala. Expert training (Malayalam/English), premium spawn, turnkey farm setups, and buyback/marketing guidance.",
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
          "@id": "https://organicmushroomsfarm.com/cities/kerala/thiruvananthapuram",
        },
      },
    ],
  };

  const faqs = [
    { q: "1. തിരുവനന്തപുരത്ത് മഷ്റൂം ഫാമിംഗ് തുടങ്ങാൻ എത്ര ചിലവ് വരും?", a: "ചെറിയ തോതിൽ ആരംഭിക്കാൻ 5,000-10,000 രൂപ മതിയാകും. കൊമേഴ്‌സ്യൽ ഫാമിംഗിന് കസ്റ്റമൈസ്ഡ് പ്രൊജക്റ്റ് പ്ലാൻ ആവശ്യമാണ്." },
    { q: "2. ട്രിവാൻഡ്രത്തിന്റെ കാലാവസ്ഥയ്ക്ക് ഏറ്റവും അനുയോജ്യമായ മഷ്റൂം ഏതാണ്?", a: "ഉയർന്ന ഈർപ്പമുള്ള ഉഷ്ണമേഖലാ കാലാവസ്ഥയായതിനാൽ Oyster Mushroom ഉം Milky Mushroom ഉം സ്വാഭാവികമായി തന്നെ മികച്ച വിളവ് തരുന്നു." },
    { q: "3. ഉയർന്ന ഗുണനിലവാരമുള്ള സ്പോൺ (വിത്ത്) എവിടെ ലഭിക്കും?", a: "Organic Mushrooms Farm-ൽ നിന്ന് F1-Gen, ലാബ്-പരിശോധിച്ച സ്പോൺ തിരുവനന്തപുരത്ത് വേഗത്തിൽ ഡോർസ്റ്റെപ്പിൽ എത്തിച്ചു നൽകുന്നു." },
    { q: "4. ഉൽപ്പാദിപ്പിച്ച മഷ്റൂം എവിടെ വിൽക്കാൻ സാധിക്കും?", a: "ടെക്നോപാർക്ക് കാമ്പസ്, സൂപ്പർമാർക്കറ്റുകൾ, കോവളം/വർക്കല റിസോർട്ടുകൾ, പ്രീമിയം ഓർഗാനിക് സ്റ്റോറുകൾ എന്നിവയിൽ വലിയ ഡിമാൻഡുണ്ട്. മാർക്കറ്റിംഗ് സപ്പോർട്ടും ഞങ്ങൾ നൽകുന്നു." }
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
              Mushroom Farming in Thiruvananthapuram (കൂൺ കൃഷി തിരുവനന്തപുരം)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Thiruvananthapuram, Technopark, Kazhakkoottam, Kowdiar & South Kerala</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              കേരളത്തിന്റെ തലസ്ഥാനമായ തിരുവനന്തപുരം (Trivandrum) ഐടി ഹബ്ബുകൾ, ആയുർവേദ വെൽനസ്സ് സെന്ററുകൾ, കൂടാതെ വർദ്ധിച്ചു വരുന്ന ആരോഗ്യബോധമുള്ള സമൂഹത്താൽ സമ്പന്നമാണ്. ടെക്നോപാർക്കിലെ ഐടി പ്രൊഫഷണലുകൾ മുതൽ കോവളം, വർക്കല തുടങ്ങിയ വിനോദസഞ്ചാര കേന്ദ്രങ്ങളിലെ ഹോട്ടലുകൾ വരെ പ്രീമിയം ഓർഗാനിക് മഷ്റൂമുകൾക്ക് വൻ ഡിമാൻഡാണ് നൽകുന്നത്.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              കേരളത്തിന്റെ സവിശേഷമായ ഈർപ്പമുള്ള ഉഷ്ണമേഖലാ കാലാവസ്ഥയും സുലഭമായ വൈക്കോലും കാരണം കുറഞ്ഞ ചിലവിൽ ഉയർന്ന ലാഭം നേടാൻ കൂൺ കൃഷി (Mushroom Farming) ഏറ്റവും മികച്ചൊരു അഗ്രി-ബിസിനസ്സ് സംരംഭമാണ്.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Key Advantages of Mushroom Farming in Trivandrum
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Natural Humidity Advantage:</strong> ഉയർന്ന സ്വാഭാവിക അന്തരീക്ഷ ഈർപ്പം കാരണം ആർട്ടിഫിഷ്യൽ ഹ്യുമിഡിഫയറുകളുടെ ഉപയോഗവും കറന്റ് ബില്ലും വളരെ കുറവായിരിക്കും.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Tech-Savvy & Wellness Consumer Base:</strong> ടെക്നോപാർക്ക് നിവാസികൾ, ജിം ഉപഭോക്താക്കൾ, ആയുർവേദ വെൽനസ്സ് റിസോർട്ടുകൾ എന്നിവർ കെമിക്കൽ-ഫ്രീ ഓർഗാനിക് മഷ്റൂമുകൾക്ക് ഉയർന്ന വില നൽകാൻ താല്പര്യപ്പെടുന്നു.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Vertical Space Efficiency:</strong> കേരളത്തിൽ ഭൂമിയുടെ വില കൂടുതലായതിനാൽ അടച്ചിട്ട മുറിയിലോ വീടിന്റെ ടെറസിലോ വെർട്ടിക്കൽ റാക്കുകൾ ഉപയോഗിച്ച് കുറഞ്ഞ സ്ഥലത്ത് വലിയ ഉൽപ്പാദനം നടത്താം.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Hands-on Mushroom Training</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  മലയാളത്തിലും ഇംഗ്ലീഷിലും പ്രായോഗിക ഓൺലൈൻ/ഓഫ്‌ലൈൻ ട്രെയിനിംഗ്—വൈക്കോൽ അണുവിമുക്തമാക്കൽ, സ്പോണിംഗ്, ഹ്യുമിഡിറ്റി കൺട്രോൾ, പാക്കിംഗ് എന്നിവ പഠിപ്പിക്കുന്നു.
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn Supply</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  ഉയർന്ന വിളവ് ഉറപ്പുനൽകുന്ന F1-Gen, ലാബ് പരിശോധിച്ച ചിപ്പി (Oyster), പാൽക്കൂൺ (Milky) സ്പോണുകൾ വേഗത്തിൽ വിതരണം ചെയ്യുന്നു.
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Commercial Setups & Marketing Support</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  വാണിജ്യാടിസ്ഥാനത്തിലുള്ള ഫാം ഡിസൈൻ, പോർട്ടബിൾ ഗ്രോ ചേമ്പറുകൾ, ബാങ്ക് സബ്‌സിഡിക്കുള്ള പ്രോജക്റ്റ് റിപ്പോർട്ടുകൾ (DPR) എന്നിവ നൽകുന്നു.
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Coverage Across Thiruvananthapuram Region
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              നഗര-ഗ്രാമ വ്യത്യാസമില്ലാതെ തിരുവനന്തപുരത്തെ എല്ലാ പ്രദേശങ്ങളിലും ഞങ്ങളുടെ സേവനങ്ങൾ ലഭ്യമാണ്:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Urban Belts:</strong> Technopark, Kazhakkoottam, Kowdiar, Pattom, Kesavadasapuram, Sreekaryam, Vazhuthacaud, Peroorkada.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Satellite & Rural Towns:</strong> Neyyattinkara, Attingal, Varkala, Kattakada, Nedumangad, Venjaramoodu.</span>
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
                Ready to Start Your Mushroom Business in Thiruvananthapuram?
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
