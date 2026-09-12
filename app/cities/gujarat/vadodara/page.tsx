import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Vadodara (Baroda), Gujarat | Training & Spawn",
  description:
    "Start commercial mushroom farming in Vadodara (Baroda), Gujarat. Expert training (Gujarati/Hindi), premium spawn, turnkey farm setups, and marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/gujarat/vadodara",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Vadodara (Baroda), Gujarat | Training & Spawn",
    description:
      "Start commercial mushroom farming in Vadodara (Baroda), Gujarat. Expert training (Gujarati/Hindi), premium spawn, turnkey farm setups, and marketing support.",
    url: "https://organicmushroomsfarm.com/cities/gujarat/vadodara",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Vadodara (Baroda), Gujarat | Training & Spawn",
    description:
      "Start commercial mushroom farming in Vadodara (Baroda), Gujarat. Expert training (Gujarati/Hindi), premium spawn, turnkey farm setups, and marketing support.",
  },
};

export default function ArticleVadodaraTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/gujarat/vadodara#webpage",
        url: "https://organicmushroomsfarm.com/cities/gujarat/vadodara",
        name: "Mushroom Farming in Vadodara (Baroda), Gujarat | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Vadodara (Baroda), Gujarat. Expert training (Gujarati/Hindi), premium spawn, turnkey farm setups, and marketing support.",
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
            name: "Vadodara",
            item: "https://organicmushroomsfarm.com/cities/gujarat/vadodara",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Vadodara (Baroda), Gujarat | Training & Spawn",
        description:
          "Start commercial mushroom farming in Vadodara (Baroda), Gujarat. Expert training (Gujarati/Hindi), premium spawn, turnkey farm setups, and marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/gujarat/vadodara",
        },
      },
    ],
  };

  const faqs = [
    { q: "વડોદરામાં મશરૂમ ફાર્મિંગ શરૂ કરવા માટે કેટલું રોકાણ જોઈએ?", a: "ઘરે બેઠા નાના પાયે 100-200 સ્ક્વેર ફીટમાં શરૂ કરવા માટે ₹5,000 થી ₹10,000 નું રોકાણ પૂરતું છે. કોમર્શિયલ AC ફાર્મ માટે મોટા રોકાણની જરૂર પડે છે." },
    { q: "વડોદરાના વાતાવરણમાં કઈ મશરૂમ વેરાયટી સૌથી શ્રેષ્ઠ છે?", a: "ઓઇસ્ટર મશરૂમ (Oyster) શરૂઆત કરવા માટે સૌથી સરળ અને નફાકારક છે. ઉનાળામાં મિલ્કી મશરૂમ અને યોગ્ય વાતાનુકૂલિત ચેમ્બરમાં બટન મશરૂમ ઉગાડી શકાય છે." },
    { q: "ઉત્પાદન થયા પછી વેચાણ ક્યાં કરવું?", a: "અલકાપુરી, ગોત્રી, કારેલીબાગના સુપરમાર્કેટ્સ, રેસ્ટોરન્ટ્સ તેમજ ડાયરેક્ટ ઓર્ગેનિક ગ્રાહકોને ઊંચા ભાવે વેચી શકાય છે. અમે પૂરો માર્કેટિંગ સપોર્ટ આપીએ છીએ." },
    { q: "ગુણવત્તાયુક્ત સ્પોન (બીજ) ક્યાં મળશે?", a: "Organic Mushrooms Farm તરફથી લેબ-ટેસ્ટેડ, હાઈ-યીલ્ડ F1-Gen સ્પોન વડોદરામાં ઝડપથી ડોરસ્ટેપ ડિલિવરી કરવામાં આવે છે." }
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
              Mushroom Farming in Vadodara (વડોદરામાં મશરૂમની ખેતી)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Vadodara, Alkapuri, Gotri, Manjalpur, Halol, Padra & Central Gujarat</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              સંસ્કારી નગરી વડોદરા (Vadodara / Baroda) તેના સમૃદ્ધ ઔદ્યોગિક અને શૈક્ષણિક વારસા માટે પ્રસિદ્ધ છે. છેલ્લા કેટલાક સમયમાં શહેરમાં સ્વાસ્થ્ય પ્રત્યે જાગૃતિ વધતા ઓર્ગેનિક, પ્રોટીનથી ભરપૂર શાકાહારી આહાર તરીકે મશરૂમની માંગમાં જબરદસ્ત વધારો નોંધાયો છે.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              ઓછી જગ્યા, ઓછા પાણી અને ખૂબ જ ઓછા રોકાણમાં ઝડપી આવક આપતા મશરૂમ ફાર્મિંગ (Mushroom Farming) ના બિઝનેસ મોડેલને વડોદરાના યુવાનો, મહિલાઓ અને ખેડૂત મિત્રો સફળતાપૂર્વક અપનાવી રહ્યા છે.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Vadodara is an Ideal Mushroom Hub
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>High-End Urban Demand:</strong> અલકાપુરી, ગોત્રી, અકોટા અને વાસણા રોડ જેવા પોશ વિસ્તારોમાં પ્રીમિયમ ઓર્ગેનિક ફૂડ માટે ઊંચા ભાવ ચૂકવવા તૈયાર ગ્રાહકોની મોટી સંખ્યા છે.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Abundant Agricultural By-products:</strong> પાદરા, ડભોઈ, કરજણ અને સાવલીના ખેતી વિસ્તારોમાંથી ડાંગર-ઘઉંનો ભૂસો અત્યંત સસ્તા દરે આસાનીથી મળી રહે છે.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Strategic Central Gujarat Location:</strong> વડોદરાથી અમદાવાદ, સુરત, આણંદ અને ભરૂચ સુધી લોજિસ્ટિક્સ કનેક્ટિવિટી ઉત્તમ છે.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Hands-on Mushroom Training</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  ગુજરાતી અને હિન્દી ભાષામાં વૈજ્ઞાનિક પ્રેક્ટિકલ તાલીમ—બેડ તૈયારી, તાપમાન-ભેજ નિયંત્રણ અને રોગ અટકાવવાની પદ્ધતિઓ.
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn Supply</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  વડોદરા અને મધ્ય ગુજરાતમાં F1-Gen, લેબ-ટેસ્ટેડ હાઈ-યીલ્ડ ઓઇસ્ટર અને બટન સ્પોન ઝડપથી પહોંચાડવાની ખાતરી.
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Commercial Setups & Marketing Support</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  ઓટોમેટેડ ક્લાઇમેટ-કંટ્રોલ ફાર્મ સેટઅપ, સરકારી સબસિડી માટે બેંકેબલ પ્રોજેક્ટ રિપોર્ટ અને હોટેલ્સ/રેસ્ટોરન્ટ્સ સાથે જોડાણ.
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Coverage Across Vadodara & Surrounding Regions
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              અમે વડોદરા શહેર અને આસપાસના સમગ્ર વિસ્તારોમાં સેવાઓ પૂરી પાડીએ છીએ:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>City Belts:</strong> Alkapuri, Gotri, Manjalpur, Fatehgunj, Karelibaug, Akota, Waghodia Road, Sayajigunj, Vasna-Bhayli.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Industrial & Satellite Towns:</strong> Halol, Dabhoi, Padra, Karjan, Savli, Waghodia GIDC, Makarpura.</span>
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
                Ready to Start Your Mushroom Business in Vadodara?
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
