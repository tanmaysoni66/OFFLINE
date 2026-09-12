import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Madurai, Tamil Nadu | Training & Spawn",
  description:
    "Start commercial mushroom farming in Madurai, TN. Expert online/offline training (Tamil/English), premium spawn, turnkey farm setup, and B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/tamil-nadu/madurai",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Madurai, Tamil Nadu | Training & Spawn",
    description:
      "Start commercial mushroom farming in Madurai, TN. Expert online/offline training (Tamil/English), premium spawn, turnkey farm setup, and B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/tamil-nadu/madurai",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Madurai, Tamil Nadu | Training & Spawn",
    description:
      "Start commercial mushroom farming in Madurai, TN. Expert online/offline training (Tamil/English), premium spawn, turnkey farm setup, and B2B marketing support.",
  },
};

export default function ArticleMaduraiTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/tamil-nadu/madurai#webpage",
        url: "https://organicmushroomsfarm.com/cities/tamil-nadu/madurai",
        name: "Mushroom Farming in Madurai, Tamil Nadu | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Madurai, TN. Expert online/offline training (Tamil/English), premium spawn, turnkey farm setup, and B2B marketing support.",
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
            name: "Tamil Nadu",
            item: "https://organicmushroomsfarm.com/states/tamil-nadu",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Madurai",
            item: "https://organicmushroomsfarm.com/cities/tamil-nadu/madurai",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Madurai, Tamil Nadu | Training & Spawn",
        description:
          "Start commercial mushroom farming in Madurai, TN. Expert online/offline training (Tamil/English), premium spawn, turnkey farm setup, and B2B marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/tamil-nadu/madurai",
        },
      },
    ],
  };

  const faqs = [
    { q: "1. மதுரையில் காளான் பண்ணை தொடங்க எவ்வளவு முதலீடு தேவை?", a: "ஒரு சிறிய 10x10 அறையில் தொடங்க ₹5,000-₹10,000 வரை மட்டுமே தேவைப்படும். பெரிய Commercial Farm-க்கு முதலீடு மாறுபடும்." },
    { q: "2. மதுரைக்கு எந்த Mushroom variety சிறந்தது?", a: "Oyster மற்றும் Milky mushrooms மதுரையின் சீதோஷ்ண நிலைக்கு மிகச் சிறந்தவை. AC வசதி இருந்தால் Button mushroom-ம் செய்யலாம்." },
    { q: "3. காளான் வளர்ப்பு பயிற்சி எங்கு கிடைக்கும்?", a: "நாங்கள் Online மற்றும் Offline Training வழங்குகிறோம்." },
    { q: "4. தரமான Mushroom Spawn (விதை) மதுரையில் எங்கு கிடைக்கும்?", a: "நாங்கள் F1-Gen Lab Tested Oyster, Milky, Button spawn-களை supply செய்கிறோம்." },
    { q: "5. উৎপাদিত காளானை எங்கு விற்கலாம்?", a: "உள்ளூர் காய்கறி சந்தைகள், Hotels, Supermarkets, மற்றும் Online Delivery மூலம் விற்கலாம். இதற்கு நாங்கள் Marketing Support தருகிறோம்." },
    { q: "6. பெண்கள் வீட்டிலிருந்தபடியே செய்ய முடியுமா?", a: "ஆம், இது குறைந்த இடமும் குறைந்த நேரமும் தேவைப்படும் ஒரு மிகச் சிறந்த self-employment தொழில்." }
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
              Mushroom Farming in Madurai (மதுரையில் காளான் வளர்ப்பு)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Madurai, Anna Nagar, KK Nagar, Vadipatti, Thirumangalam & Surrounding Areas</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              மதுரை (Madurai) தமிழ்நாட்டின் மிக முக்கியமான கலாச்சார மற்றும் வர்த்தக மையமாகும். சமீப காலமாக, மதுரையில் மக்களின் சுகாதார விழிப்புணர்வு அதிகரித்துள்ளதால் Organic மற்றும் Fresh Mushroom-களுக்கான தேவை வேகமாக உயர்ந்து வருகிறது.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              நீங்கள் மதுரையில் அல்லது அதைச் சுற்றியுள்ள பகுதிகளில் ஒரு லாபகரமான விவசாயத் தொழிலைத் தொடங்க விரும்பினால், காளான் வளர்ப்பு (Mushroom Farming) மிகக் குறைந்த முதலீட்டில் அதிக லாபம் தரும் ஒரு சிறந்த வாய்ப்பாகும்.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Madurai is Ideal for Mushroom Cultivation
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>High Market Demand:</strong> அண்ணா நகர், கே.கே நகர் போன்ற பகுதிகளில் உள்ள Premium Supermarkets, மற்றும் பல உணவகங்களில் காளானுக்கு தினசரி நல்ல டிமாண்ட் உள்ளது.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>No Huge Land Required:</strong> மதுரையில் நிலத்தின் விலை அதிகம் என்பதால், குறைந்த இடத்தில் Vertical Farming முறையில் அதிக லாபம் ஈட்டலாம்.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Available Substrate:</strong> நெல் வைக்கோல் (Paddy Straw) மதுரை மற்றும் சுற்றுப்புற கிராமங்களில் எளிதாகவும் மலிவாகவும் கிடைக்கும்.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Professional Mushroom Training</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  சரியான பயிற்சி இல்லாமல் காளான் வளர்ப்பது நஷ்டத்தை ஏற்படுத்தும். வைக்கோல் பதப்படுத்துதல் முதல் அறுவடை வரை அனைத்து தொழில்நுட்பங்களையும் நாங்கள் Online/Offline Training மூலம் கற்றுத் தருகிறோம்.
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn (விதை)</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  விளைச்சல் வீரியம் நிறைந்த விதையில்தான் உள்ளது. மதுரை முழுவதும் F1-Gen, Lab Tested Oyster, Milky, Button Mushroom Spawn-களை நாங்கள் Supply செய்கிறோம்.
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Turnkey Farm Setup & Marketing</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  பெரிய அளவில் செய்ய விரும்புபவர்களுக்கு AC Farm Setup, Climate Control Systems, மற்றும் விளைந்த காளானை விற்க B2B Marketing Support ஆகியவற்றை வழங்குகிறோம்.
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Areas We Cover in Madurai
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              மதுரை நகரம் மற்றும் அதன் சுற்றுப்புற கிராமங்களில் நாங்கள் சேவைகளை வழங்கி வருகிறோம்:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Madurai City / Urban:</strong> Anna Nagar, K.K. Nagar, SS Colony, TVS Nagar, Bypass Road, Kalavasal.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Suburban / Industrial:</strong> Kappalur, Kochadai, Uthangudi, Othakadai, Thirunagar.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl col-span-1 sm:col-span-2">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Rural Clusters:</strong> Vadipatti, Thirumangalam, Alanganallur, Sholavandan, Melur.</span>
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
                Ready to Start Your Mushroom Business in Madurai?
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
