import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Rajkot, Gujarat | Training & Spawn",
  description:
    "Start commercial mushroom farming in Rajkot, Gujarat. Expert online/offline training (Gujarati/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/gujarat/rajkot",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Rajkot, Gujarat | Training & Spawn",
    description:
      "Start commercial mushroom farming in Rajkot, Gujarat. Expert online/offline training (Gujarati/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/gujarat/rajkot",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Rajkot, Gujarat | Training & Spawn",
    description:
      "Start commercial mushroom farming in Rajkot, Gujarat. Expert online/offline training (Gujarati/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  },
};

export default function ArticleRajkotTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/gujarat/rajkot#webpage",
        url: "https://organicmushroomsfarm.com/cities/gujarat/rajkot",
        name: "Mushroom Farming in Rajkot, Gujarat | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Rajkot, Gujarat. Expert online/offline training (Gujarati/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
            name: "Rajkot",
            item: "https://organicmushroomsfarm.com/cities/gujarat/rajkot",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Rajkot, Gujarat | Training & Spawn",
        description:
          "Start commercial mushroom farming in Rajkot, Gujarat. Expert online/offline training (Gujarati/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/gujarat/rajkot",
        },
      },
    ],
  };

  const faqs = [
    { q: "1. રાજકોટમાં મશરૂમ ફાર્મિંગ શરૂ કરવા કેટલો ખર્ચ થાય?", a: "નાના પાયે (Small Scale) 5,000 થી 10,000 રૂપિયામાં શરૂ કરી શકાય છે. કમર્શિયલ ફાર્મ માટે રોકાણ અલગ હોય છે." },
    { q: "2. કઈ વેરાયટી રાજકોટ માટે સારી છે?", a: "રાજકોટના ગરમ વાતાવરણ માટે મિલ્કી મશરૂમ (Milky Mushroom) શ્રેષ્ઠ છે, અને શિયાળામાં ઓઇસ્ટર મશરૂમ (Oyster Mushroom) ઉગાડી શકાય." },
    { q: "3. મશરૂમ ફાર્મિંગની તાલીમ ક્યાં મળશે?", a: "અમે ઓનલાઈન અને ઓફલાઈન પ્રેક્ટિકલ ટ્રેનિંગ આપીએ છીએ, જેમાં તમામ વૈજ્ઞાનિક પદ્ધતિઓ શીખવવામાં આવે છે." },
    { q: "4. સ્પૉન (બિયારણ) ક્યાંથી મળશે?", a: "અમે રાજકોટમાં F1-Gen, લેબ-ટેસ્ટેડ મશરૂમ સ્પૉન પૂરા પાડીએ છીએ." },
    { q: "5. માર્કેટિંગ સપોર્ટ મળશે?", a: "હા, અમે ફ્રેશ મશરૂમ હોટેલ્સ અને સુપરમાર્કેટ્સમાં વેચવા માટે અને ડ્રાય મશરૂમ (Dry Mushroom) પ્રોસેસિંગ માટે માર્ગદર્શન આપીએ છીએ." },
    { q: "6. સરકારી સબસિડી ઉપલબ્ધ છે?", a: "હા, યોગ્ય પ્રોજેક્ટ માટે NHB (National Horticulture Board) અને રાજ્ય સરકારની યોજનાઓ હેઠળ સબસિડી માટે અમે સહાય કરીએ છીએ." }
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
              Mushroom Farming in Rajkot (રાજકોટમાં મશરૂમ ફાર્મિંગ)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Rajkot, Gondal, Morbi, Jetpur, Wankaner & Surrounding Saurashtra Regions</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              રાજકોટ (Rajkot) ગુજરાતનું એક મહત્વનું ઔદ્યોગિક અને વેપારી કેન્દ્ર છે. અહીંની વધતી જતી સુપરમાર્કેટ ચેઇન, હેલ્થ કોન્શિયસ વસ્તી અને પ્રીમિયમ હોટેલ્સના કારણે ઓર્ગેનિક મશરૂમની માંગમાં જબરદસ્ત વધારો થયો છે.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              જો તમે ઓછા રોકાણમાં વધુ નફો રળવા માંગતા હોવ, તો મશરૂમની ખેતી (Mushroom Farming) એક આદર્શ એગ્રી-બિઝનેસ (Agri-business) બની શકે છે. ખાસ કરીને વર્ટિકલ ફાર્મિંગ પદ્ધતિથી શહેરી વિસ્તારોમાં પણ આ બિઝનેસ સરળતાથી કરી શકાય છે.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Choose Mushroom Farming in Rajkot?
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>High Demand & Low Supply:</strong> સૌરાષ્ટ્ર વિસ્તારમાં ઉત્પાદન ઓછું હોવાથી, તમે લોકલ હોટેલ્સ અને રિટેલ માર્કેટમાં પ્રીમિયમ ભાવે મશરૂમ વેચી શકો છો.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Space Efficient:</strong> મોટી જમીનની જરૂર નથી. એક બંધ ઓરડામાં પણ તમે વ્યાપારી ધોરણે ઉત્પાદન કરી શકો છો.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Government Support:</strong> કૃષિ અને MSME અંતર્ગત સબસિડી (Subsidy) ની સુવિધા ઉપલબ્ધ છે, જેનાથી પ્રોજેક્ટ કોસ્ટ ઓછો થાય છે.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Professional Mushroom Training (તાલીમ)</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  Business માં invest કરતા પહેલા યોગ્ય ટ્રેનિંગ લેવી ખૂબ જ જરૂરી છે. અમે online અને offline પ્રેક્ટિકલ ટ્રેનિંગ આપીએ છીએ, જેમાં cultivation, spawn management અને marketing શીખવવામાં આવે છે.
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn Supply (બિયારણ)</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  સારી ગુણવત્તાનું ઉત્પાદન લેવા માટે અમે રાજકોટમાં લેબ-ટેસ્ટેડ, હાઈબ્રિડ મશરૂમ સ્પૉન સપ્લાય કરીએ છીએ.
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Turnkey Farm Setup & AC Projects</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  મોટા કમર્શિયલ ઇન્વેસ્ટર્સ માટે અમે સંપૂર્ણ Climate-Controlled AC Farms (Turnkey Projects) નું આયોજન અને સેટઅપ કરી આપીએ છીએ.
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Dry Mushroom Products & Value Addition
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              માત્ર ફ્રેશ મશરૂમ જ નહીં, પ્રોસેસિંગ અને વેલ્યુ એડિશન (Value Addition) દ્વારા તમે તમારી આવક બમણી કરી શકો છો. ડ્રાય મશરૂમ, મશરૂમ પાઉડર અને અન્ય પ્રોડક્ટ્સ બનાવીને તમે તેને લાંબા સમય સુધી સ્ટોર કરી શકો છો અને ઓનલાઈન પણ વેચી શકો છો.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Areas We Cover in Rajkot & Saurashtra
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              અમે રાજકોટ શહેર અને સૌરાષ્ટ્રના અન્ય વિસ્તારોમાં અમારી સેવાઓ પૂરી પાડીએ છીએ:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Rajkot Urban:</strong> 150 Feet Ring Road, Kalawad Road, Yagnik Road, University Road, Amin Marg, Kotecha Chowk.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Surrounding & Industrial:</strong> Shapar Region, Metoda Belt, Lodhika Area, Kasturbadham Rural Region.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl col-span-1 sm:col-span-2">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Nearby Cities:</strong> Gondal, Morbi, Jetpur, Wankaner, Jamnagar.</span>
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
                Ready to Start Your Mushroom Business in Rajkot?
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
