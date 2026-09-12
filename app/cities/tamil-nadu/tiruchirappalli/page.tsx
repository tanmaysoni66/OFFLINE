import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Tiruchirappalli (Trichy), Tamil Nadu | Training & Spawn",
  description:
    "Start commercial mushroom farming in Tiruchirappalli (Trichy), Tamil Nadu. Expert training (Tamil/English), premium spawn, Milky/Oyster varieties, and marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/tamil-nadu/tiruchirappalli",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Tiruchirappalli (Trichy), Tamil Nadu | Training & Spawn",
    description:
      "Start commercial mushroom farming in Tiruchirappalli (Trichy), Tamil Nadu. Expert training (Tamil/English), premium spawn, Milky/Oyster varieties, and marketing support.",
    url: "https://organicmushroomsfarm.com/cities/tamil-nadu/tiruchirappalli",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Tiruchirappalli (Trichy), Tamil Nadu | Training & Spawn",
    description:
      "Start commercial mushroom farming in Tiruchirappalli (Trichy), Tamil Nadu. Expert training (Tamil/English), premium spawn, Milky/Oyster varieties, and marketing support.",
  },
};

export default function ArticleTiruchirappalliTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/tamil-nadu/tiruchirappalli#webpage",
        url: "https://organicmushroomsfarm.com/cities/tamil-nadu/tiruchirappalli",
        name: "Mushroom Farming in Tiruchirappalli (Trichy), Tamil Nadu | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Tiruchirappalli (Trichy), Tamil Nadu. Expert training (Tamil/English), premium spawn, Milky/Oyster varieties, and marketing support.",
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
            name: "Tiruchirappalli",
            item: "https://organicmushroomsfarm.com/cities/tamil-nadu/tiruchirappalli",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Tiruchirappalli (Trichy), Tamil Nadu | Training & Spawn",
        description:
          "Start commercial mushroom farming in Tiruchirappalli (Trichy), Tamil Nadu. Expert training (Tamil/English), premium spawn, Milky/Oyster varieties, and marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/tamil-nadu/tiruchirappalli",
        },
      },
    ],
  };

  const faqs = [
    { q: "1. திருச்சியில் காளான் வளர்ப்பு தொடங்க எவ்வளவு முதலீடு தேவை?", a: "வீட்டு அளவில் சிப்பி அல்லது பால் காளான் தொடங்க ₹5,000 முதல் ₹10,000 போதுமானது. வணிகரீதியான பண்ணைகளுக்கு இடத்திற்கு ஏற்ப திட்டமிடலாம்." },
    { q: "2. திருச்சி காலநிலைக்கு எந்த காளான் வகை சிறந்தது?", a: "திருச்சியின் வெப்பமான காலநிலைக்கு பால் காளான் (Milky Mushroom) மிகச் சிறந்தது. மிதமான தட்பவெப்பத்தில் சிப்பி காளான் (Oyster Mushroom) அதிக விளைச்சல் தரும்." },
    { q: "3. தரமான காளான் வித்துக்கள் (Spawn) எங்கு கிடைக்கும்?", a: "Organic Mushrooms Farm மூலமாக F1-Gen, பரிசோதிக்கப்பட்ட உயர் ரக வித்துக்கள் திருச்சியில் நேரடியாக விநியோகிக்கப்படுகின்றன." },
    { q: "4. வளர்த்த காளான்களை எங்கு விற்பனை செய்வது?", a: "ஸ்ரீரங்கம், தில்லை நகர், கே.கே.நகர் ஹோட்டல்கள், உணவகங்கள் மற்றும் ஆர்கானிக் கடைகளில் நேரடி விற்பனை செய்யலாம். சந்தைப்படுத்தல் வழிகாட்டலையும் நாங்கள் வழங்குகிறோம்." }
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
              Mushroom Farming in Tiruchirappalli (திருச்சியில் காளான் வளர்ப்பு)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Tiruchirappalli, Thillai Nagar, Srirangam, KK Nagar & Central Tamil Nadu</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              மத்திய தமிழகத்தின் மையப் பகுதியான திருச்சிராப்பள்ளி (Tiruchirappalli / Trichy), கல்வி, தொழில் மற்றும் விவசாயம் சார்ந்த வளர்ச்சிக்கு பெயர் பெற்றது. காவேரி படுகையின் வேளாண் கழிவுகள் (வைக்கோல்) எளிதாகக் கிடைப்பதாலும், நகர்ப்புற உணவகங்கள் மற்றும் உடல்நல விழிப்புணர்வு அதிகரிப்பதாலும் திருச்சியில் காளான் வளர்ப்பு (Mushroom Farming) ஒரு பிரகாசமான தொழிலாக உருவெடுத்துள்ளது.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              குறைந்த இடத்தில், குறைந்த நீரில், அதிக லாபம் தரக்கூடிய வணிக வாய்ப்பைத் தேடும் இளைஞர்கள், பெண்கள் மற்றும் விவசாயிகளுக்கு Organic Mushrooms Farm விரிவான பயிற்சி மற்றும் உயர் ரக வித்துக்களை வழங்குகிறது.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Trichy is Ideal for Mushroom Cultivation
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Milky Mushroom Specialty:</strong> திருச்சியின் வெப்பமான காலநிலைக்கு பால் காளான் (Milky Mushroom - Calocybe indica) அதிக விளைச்சலையும் நீண்ட சேமிப்பு காலத்தையும் தருகிறது.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Abundant Paddy Straw:</strong> காவேரி டெல்டா படுகையில் உள்ளதால் தரமான வைக்கோல் மிகக் குறைந்த விலையில் எளிதாகக் கிடைக்கிறது.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Central Logistics Advantage:</strong> தமிழ்நாட்டின் மையத்தில் அமைந்துள்ளதால் மதுரை, தஞ்சாவூர், திண்டுக்கல் மற்றும் கரூர் சந்தைகளுக்கு எளிதில் விநியோகம் செய்யலாம்.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Hands-on Training Programs</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  தமிழ் மற்றும் ஆங்கிலத்தில் விரிவான நேரடி மற்றும் ஆன்லைன் பயிற்சி—வைக்கோல் பதப்படுத்துதல், வித்திடுதல், ஈரப்பதம் கட்டுப்பாடு மற்றும் பூச்சி மேலாண்மை.
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn Supply</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  F1-Generation ஆய்வக பரிசோதனை செய்யப்பட்ட சிப்பி காளான் (Oyster), பால் காளான் (Milky) வித்துக்கள் திருச்சி மற்றும் சுற்றுவட்டாரப் பகுதிகளுக்கு விநியோகம்.
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Commercial Setups & Marketing Support</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  தொழில்முறை பண்ணை அமைப்புகள், அரசு மானிய வழிகாட்டல் (DPR) மற்றும் உள்ளூர் ஹோட்டல்கள், பல்பொருள் அங்காடிகளுடன் சந்தைப்படுத்தல் இணைப்பு.
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Coverage Across Tiruchirappalli District
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              திருச்சியின் அனைத்து நகர்ப்புற மற்றும் கிராமப்புற பகுதிகளுக்கும் எங்கள் சேவைகள் கிடைக்கின்றன:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Urban Hubs:</strong> Thillai Nagar, Srirangam, KK Nagar, Cantonment, Woraiyur, Golden Rock, Thuvakudi, Crawford.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Nearby Taluks & Rural Belts:</strong> Lalgudi, Manapparai, Thuraiyur, Samayapuram, Navalpattu, Panjappur, Manikandam.</span>
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
                Ready to Start Your Mushroom Business in Tiruchirappalli?
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
