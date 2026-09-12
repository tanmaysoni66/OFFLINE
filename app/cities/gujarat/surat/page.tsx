import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Surat, Gujarat | Training & Spawn",
  description:
    "Start commercial mushroom farming in Surat, South Gujarat. Expert online/offline training (Gujarati/Hindi), premium spawn, turnkey setup, and marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/gujarat/surat",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Surat, Gujarat | Training & Spawn",
    description:
      "Start commercial mushroom farming in Surat, South Gujarat. Expert online/offline training (Gujarati/Hindi), premium spawn, turnkey setup, and marketing support.",
    url: "https://organicmushroomsfarm.com/cities/gujarat/surat",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Surat, Gujarat | Training & Spawn",
    description:
      "Start commercial mushroom farming in Surat, South Gujarat. Expert online/offline training (Gujarati/Hindi), premium spawn, turnkey setup, and marketing support.",
  },
};

export default function ArticleSuratTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/gujarat/surat#webpage",
        url: "https://organicmushroomsfarm.com/cities/gujarat/surat",
        name: "Mushroom Farming in Surat, Gujarat | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Surat, South Gujarat. Expert online/offline training (Gujarati/Hindi), premium spawn, turnkey setup, and marketing support.",
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
            name: "Gujarat",
            item: "https://organicmushroomsfarm.com/states/gujarat",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Surat",
            item: "https://organicmushroomsfarm.com/cities/gujarat/surat",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Surat, Gujarat | Training & Spawn",
        description:
          "Start commercial mushroom farming in Surat, South Gujarat. Expert online/offline training (Gujarati/Hindi), premium spawn, turnkey setup, and marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/gujarat/surat",
        },
      },
    ],
  };

  const faqs = [
    { q: "સુરતના ગરમ વાતાવરણમાં બટન કે ઓઇસ્ટર મશરૂમ ઉગાડી શકાય?", a: "હા, બિલકુલ! અમારા મોર્ડન ક્લાઇમેટ-કંટ્રોલ AC ફાર્મ સેટઅપ દ્વારા તમે સુરતની ગરમીમાં પણ વર્ષના ૩૬૫ દિવસ કોઈપણ મશરૂમ વેરાયટી સરળતાથી ઉગાડી શકો છો." },
    { q: "મશરૂમ બિઝનેસ માટે સરકાર કેટલી સબસિડી આપે છે?", a: "ગુજરાતમાં બાગાયત વિભાગ અને NHB અંતર્ગત પ્રોજેક્ટ સાઇઝ પ્રમાણે ૩૦% થી ૫૦% સુધીની સબસિડી ઉપલબ્ધ છે. અમારી ટીમ DPR બનાવવામાં મદદ કરે છે." },
    { q: "તૈયાર માલ વેચવામાં Organic Mushrooms Farm મદદ કરશે?", a: "હા, અમે પૂરો માર્કેટિંગ સપોર્ટ આપીએ છીએ જેમાં સુરતના લોકલ હોટેલ્સ, રેસ્ટોરન્ટ્સ અને સુપરમાર્કેટ્સ સાથે ડાયરેક્ટ કનેક્ટ કરવામાં મદદ મળે છે." }
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
              Mushroom Farming in Surat (સુરતમાં મશરૂમની ખેતી)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Surat, Adajan, Vesu, Pal, Varachha, Kamrej & South Gujarat</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              ડાયમંડ અને ટેક્સટાઇલ સિટી તરીકે વિશ્વવિખ્યાત સુરત (Surat) હવે આધુનિક એગ્રી-બિઝનેસ અને ઓર્ગેનિક ફૂડ કલ્ચરમાં પણ ઝડપથી આગળ વધી રહ્યું છે. સુરતીઓ સ્વાદ અને હેલ્થ પ્રત્યે ખૂબ જાગૃત હોવાથી હોટેલ્સ, રેસ્ટોરન્ટ્સ અને સુપરમાર્કેટ્સમાં તાજા અને ઓર્ગેનિક મશરૂમની માંગ અભૂતપૂર્વ રીતે વધી રહી છે.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              જો તમે સુરત અથવા દક્ષિણ ગુજરાતમાં ઓછા રોકાણ અને ઓછી જગ્યામાં વધુ નફો આપતો વ્યવસાય શરૂ કરવા માંગતા હોવ, તો મશરૂમ ફાર્મિંગ (Mushroom Farming) એક અત્યંત સુરક્ષિત અને ફાયદાકારક વિકલ્પ છે.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Surat is a Thriving Market for Mushrooms
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Massive Consumer Spending:</strong> વેસુ, પાલ, અડાજન અને વીઆઇપી રોડ જેવા વિસ્તારોમાં લોકો તાજા અને કેમિકલ-મુક્ત મશરૂમ માટે પ્રીમિયમ ભાવ આપવા તૈયાર છે.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Thriving Hospitality Sector:</strong> સુરતની જાણીતી રેસ્ટોરન્ટ્સ, કેટરિંગ સર્વિસીસ અને બેન્ક્વેટ હોલ્સમાં દૈનિક ધોરણે બટન મશરૂમની ખૂબ મોટી માંગ રહે છે.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Proximity to Agricultural Belts:</strong> કામરેજ, બારડોલી, ઓલપાડ અને નવસારીમાંથી સસ્તો ડાંગરનો કે ઘઉંનો ભૂસો સરળતાથી મળી રહે છે.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Scientific Mushroom Training</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  ઓનલાઇન અને ઓફલાઇન પ્રેક્ટિકલ તાલીમ—સબસ્ટ્રેટ ટ્રીટમેન્ટ, સ્પૉનિંગ, હ્યુમિડિટી મેનેજમેન્ટ અને પેકેજિંગનું સંપૂર્ણ માર્ગદર્શન.
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn Supply</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  સુરત અને દક્ષિણ ગુજરાતમાં F1-Gen, લેબ-ટેસ્ટેડ હાઈ-યીલ્ડ ઓઇસ્ટર, બટન અને મિલ્કી સ્પૉન સમયસર પહોંચાડવાની ખાતરી.
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Turnkey AC Farm Setup & Subsidies</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  સુરતની ગરમીમાં ૩૬૫ દિવસ ઉત્પાદન માટે ક્લાઇમેટ-કંટ્રોલ્ડ AC ફાર્મ ડિઝાઇન અને સરકારી સબસિડી માટે બેંકેબલ પ્રોજેક્ટ રિપોર્ટ (DPR) તૈયાર કરી આપીએ છીએ.
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Coverage Across Surat Urban & Rural Regions
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              અમે સુરત શહેર અને આસપાસના સમગ્ર દક્ષિણ ગુજરાત પટ્ટાને આવરી લઈએ છીએ:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Surat Urban:</strong> Adajan, Vesu, Pal, Katargam, Varachha, Udhna, Piplod, Ghod Dod Road, Althan, City Light.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Satellite & Rural Belts:</strong> Navsari, Bardoli, Kamrej, Olpad, Palsana, Kim, Kosamba, Sayan, Dumas, Hazira belt.</span>
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
                Ready to Start Your Mushroom Business in Surat?
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
