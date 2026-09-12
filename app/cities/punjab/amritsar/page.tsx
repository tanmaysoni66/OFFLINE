import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Amritsar | Training, Spawn & Setup",
  description:
    "Start mushroom farming in Amritsar, Punjab. Get expert online/offline training in Punjabi/Hindi, premium spawn, farm setup consultancy, and dhaba/hotel marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/punjab/amritsar",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Amritsar | Training, Spawn & Setup",
    description:
      "Start mushroom farming in Amritsar, Punjab. Get expert online/offline training in Punjabi/Hindi, premium spawn, farm setup consultancy, and dhaba/hotel marketing support.",
    url: "https://organicmushroomsfarm.com/cities/punjab/amritsar",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Amritsar | Training, Spawn & Setup",
    description:
      "Start mushroom farming in Amritsar, Punjab. Get expert online/offline training in Punjabi/Hindi, premium spawn, farm setup consultancy, and dhaba/hotel marketing support.",
  },
};

export default function ArticleAmritsarTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/punjab/amritsar#webpage",
        url: "https://organicmushroomsfarm.com/cities/punjab/amritsar",
        name: "Mushroom Farming in Amritsar | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start mushroom farming in Amritsar, Punjab. Get expert online/offline training in Punjabi/Hindi, premium spawn, farm setup consultancy, and dhaba/hotel marketing support.",
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
            name: "Punjab",
            item: "https://organicmushroomsfarm.com/states/punjab",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Amritsar",
            item: "https://organicmushroomsfarm.com/cities/punjab/amritsar",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Amritsar | Training, Spawn & Setup",
        description:
          "Start mushroom farming in Amritsar, Punjab. Get expert online/offline training in Punjabi/Hindi, premium spawn, farm setup consultancy, and dhaba/hotel marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/punjab/amritsar",
        },
      },
    ],
  };

  const faqs = [
    {
      q: "1. Amritsar ਵਿੱਚ mushroom farming ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਕਿੰਨੀ ਜਗ੍ਹਾ ਚਾਹੀਦੀ ਹੈ?",
      a: "ਤੁਸੀਂ 10x10 ਫੁੱਟ ਦੇ ਛੋਟੇ ਕਮਰੇ ਜਾਂ ਸ਼ੈੱਡ ਤੋਂ ਸ਼ੁਰੂਆਤ ਕਰ ਸਕਦੇ ਹੋ, large scale ਲਈ ਜ਼ਿਆਦਾ ਜਗ੍ਹਾ ਚਾਹੀਦੀ ਹੈ।"
    },
    {
      q: "2. ਕੀ ਅੰਮ੍ਰਿਤਸਰ ਦਾ ਮੌਸਮ mushroom ਲਈ ਢੁਕਵਾਂ ਹੈ?",
      a: "ਹਾਂ, ਸਰਦੀਆਂ (ਨਵੰਬਰ ਤੋਂ ਮਾਰਚ) button ਅਤੇ oyster mushroom ਲਈ ਬਹੁਤ ਵਧੀਆ ਹਨ, summer ਲਈ climate control setup ਲਗਾਇਆ ਜਾ ਸਕਦਾ ਹੈ।"
    },
    {
      q: "3. ਕੀ ਤੁਸੀਂ quality spawn (ਬੀਜ) ਮੁਹੱਈਆ ਕਰਵਾਉਂਦੇ ਹੋ?",
      a: "ਹਾਂ, ਅਸੀਂ ਉੱਚ ਗੁਣਵੱਤਾ ਵਾਲਾ button, oyster ਅਤੇ milky mushroom spawn ਮੁਹੱਈਆ ਕਰਵਾਉਂਦੇ ਹਾਂ।"
    },
    {
      q: "4. Training ਕਿੱਥੇ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ?",
      a: "ਅਸੀਂ online ਅਤੇ offline ਦੋਵੇਂ ਤਰ੍ਹਾਂ ਦੀ training ਮੁਹੱਈਆ ਕਰਵਾਉਂਦੇ ਹਾਂ, ਤਾਂ ਜੋ ਤੁਸੀਂ ਆਪਣੇ ਕੰਮ ਅਨੁਸਾਰ ਸਿੱਖ ਸਕੋ।"
    },
    {
      q: "5. Kisan apni kheti ke saath ise kaise shuru karein?",
      a: "Yeh ek sardi ki crop hai jo side business ki tarah start ki ja sakti hai, fasalon ke straw/parali ka use substrate ke liye ho jata hai."
    },
    {
      q: "6. ਕੀ mushroom farming ਨਾਲ ਵਧੀਆ ਕਮਾਈ ਹੋ ਸਕਦੀ ਹੈ?",
      a: "ਬਿਲਕੁਲ, Amritsar ਦੇ hotels ਅਤੇ dhabas ਵਿੱਚ demand ਬਹੁਤ ਹੈ, ਸਹੀ marketing ਨਾਲ profit margin ਕਾਫੀ ਹਾਈ ਰਹਿੰਦਾ ਹੈ।"
    },
    {
      q: "7. Commercial scale ਤੇ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਕਿੰਨਾ ਖਰਚ ਆਉਂਦਾ ਹੈ?",
      a: "ਖਰਚਾ ਤੁਹਾਡੇ scale, setup (AC/non-AC) ਅਤੇ capacity 'ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ, detailed ROI analysis ਲਈ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।"
    },
    {
      q: "8. ਕੀ ਔਰਤਾਂ mushroom farming ਸ਼ੁਰੂ ਕਰ ਸਕਦੀਆਂ ਹਨ?",
      a: "ਬਿਲਕੁਲ, ਘਰ ਬੈਠੇ ਔਰਤਾਂ ਆਸਾਨੀ ਨਾਲ ਇਹ ਕਾਰੋਬਾਰ ਸ਼ੁਰੂ ਕਰ ਸਕਦੀਆਂ ਹਨ।"
    },
    {
      q: "9. Students bhi shuru kar sakte hain?",
      a: "Bilkul, kam investment aur time mein students ke liye bhi yeh accha option hai."
    },
    {
      q: "10. Government subsidy ਉਪਲਬਧ ਹੈ?",
      a: "Eligibility criteria ਅਨੁਸਾਰ ਕੁਝ ਯੋਜਨਾਵਾਂ ਰਾਹੀਂ ਮਦਦ ਮਿਲ ਸਕਦੀ ਹੈ, ਅਸੀਂ guidance ਦਿੰਦੇ ਹਾਂ।"
    },
    {
      q: "11. ਕਿਹੜੀ mushroom variety ਸਭ ਤੋਂ ਵਧੀਆ ਹੈ?",
      a: "Oyster mushroom beginners ਲਈ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਸਭ ਤੋਂ ਸੌਖਾ ਹੈ।"
    },
    {
      q: "12. Mushroom ko dhabo aur restaurants tak kaise pahunchayein?",
      a: "Direct partnerships, consistent quality aur reliable delivery schedule ke through — hum yeh setup karne mein madad karte hain."
    },
    {
      q: "13. ਕੀ ਤੁਸੀਂ consultancy ਦਿੰਦੇ ਹੋ?",
      a: "ਹਾਂ, production ਤੋਂ marketing ਤੱਕ ਪੂਰੀ consultancy ਉਪਲਬਧ ਹੈ।"
    },
    {
      q: "14. Turnkey project bhi milta hai?",
      a: "Ha, bade investors ke liye complete turnkey mushroom project setup diya jata hai."
    },
    {
      q: "15. Marketing support ਮਿਲੇਗਾ?",
      a: "ਹਾਂ, packaging, branding ਅਤੇ dhaba/hotel connection ਵਿੱਚ ਪੂਰਾ support ਮਿਲਦਾ ਹੈ।"
    },
    {
      q: "16. ਅੰਮ੍ਰਿਤਸਰ ਦੇ ਕਿਹੜੇ ਇਲਾਕਿਆਂ ਵਿੱਚ ਸੇਵਾ ਉਪਲਬਧ ਹੈ?",
      a: "Ranjit Avenue, Majitha Road, Chheharta, Batala Road, Verka, Putlighar, Lawrence Road, Mall Road ਅਤੇ ਆਲੇ-ਦੁਆਲੇ ਦੇ ਸਾਰੇ ਇਲਾਕਿਆਂ ਵਿੱਚ।"
    },
    {
      q: "17. Ajnala ya Tarn Taran mein bhi service milegi?",
      a: "Ha, Ajnala, Tarn Taran, Attari, Jandiala Guru samet nearby sabhi areas cover kiye jaate hain."
    },
    {
      q: "18. Dry mushroom ਦੀ shelf life ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ?",
      a: "ਸਹੀ storage ਨਾਲ dry mushroom ਮਹੀਨਿਆਂ ਤੱਕ ਵਧੀਆ quality ਵਿੱਚ ਰਹਿੰਦਾ ਹੈ।"
    },
    {
      q: "19. Kya kanak-jhone ke saath mushroom farming combine ki ja sakti hai?",
      a: "Bilkul, bahut saare farmers apni existing kheti ke saath ek shed mein mushroom cultivation shuru karke additional income kama rahe hain."
    },
    {
      q: "20. Business plan ਕਿਵੇਂ ਮਿਲੇਗਾ?",
      a: "ਤੁਹਾਡੇ scale ਅਨੁਸਾਰ customized project report ਅਤੇ ROI analysis ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।"
    },
    {
      q: "21. Contact ਕਿਵੇਂ ਕਰੀਏ?",
      a: "WhatsApp ਰਾਹੀਂ ਸਿੱਧਾ ਸੰਪਰਕ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ, ਜਿਸਦਾ response ਸਭ ਤੋਂ ਤੇਜ਼ ਹੁੰਦਾ ਹੈ।"
    }
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
              Mushroom Farming in Amritsar, Punjab (ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ ਮਸ਼ਰੂਮ ਦੀ ਖੇਤੀ)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Amritsar, Tarn Taran, Majitha & Nearby Rural Areas</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              Amritsar is not only the spiritual and cultural heart of Punjab but also a massive hub for tourism and hospitality. With millions visiting the Golden Temple and the famous dhabas around the city, the demand for high-quality, fresh ingredients is enormous. Mushroom farming is rapidly becoming one of the most profitable agribusinesses here due to this high local consumption.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              Whether you are a traditional farmer looking for supplementary income using paddy straw (ਪਰਾਲੀ), or an entrepreneur wanting to supply premium button mushrooms to luxury hotels, Amritsar offers a thriving market. This guide provides a complete overview of starting your mushroom journey.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Understanding the Amritsar Market (ਮਾਰਕੀਟ ਦੀ ਸਮਝ)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              In Punjab, the winters are ideal for natural mushroom cultivation. However, for a commercial year-round setup, <strong>Button Mushroom Farming (ਬਟਨ ਮਸ਼ਰੂਮ)</strong> is the undisputed king due to its massive demand in Punjabi cuisine (Matar Mushroom, Mushroom Tikka in Dhabas and Hotels).
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              <strong>Oyster Mushroom Cultivation (ਓਇਸਟਰ ਮਸ਼ਰੂਮ)</strong> is also gaining immense popularity due to its high nutritional value, easy cultivation process, and ability to dry and sell as powder or protein supplements.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Climate Control & Setup (ਵਾਤਾਵਰਣ ਕੰਟਰੋਲ)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              While seasonal farming is possible in winters, the real profit lies in off-season production. Setting up a Smart Climate Control room or a Turnkey Mushroom Farm with insulated PUF panels and humidifiers is essential if you want to supply the market consistently during the hot Punjabi summers.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Substrate & Straw Management (ਪਰਾਲੀ ਦੀ ਵਰਤੋਂ)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              Punjab produces a huge amount of wheat straw (ਕਣਕ ਦਾ ਨਾੜ) and paddy straw (ਝੋਨੇ ਦੀ ਪਰਾਲੀ). Instead of burning it, this straw is the perfect raw material (substrate) for mushroom beds. Proper Mushroom Compost Preparation is the backbone of button mushroom farming, requiring a clean setup and precise pasteurization.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Training: The Most Important Step (ਸਹੀ ਸਿਖਲਾਈ)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4 font-medium">
              Without proper knowledge, disease (infections) can ruin the entire crop. 
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Online Training:</strong> We provide detailed online mushroom training courses (available in Hindi/Punjabi context) covering everything from substrate prep to market linkage.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Offline Training:</strong> Hands-on training where you physically learn how to manage temperature, humidity, and harvesting techniques.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Premium Spawn & Sales Strategy (ਬੀਜ ਅਤੇ ਮਾਰਕੀਟਿੰਗ)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              Getting high-quality, disease-free Mushroom Spawn (ਬੀਜ) is critical. We supply premium F1 generation spawn directly to Amritsar to ensure your crop yield is maximized.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              For marketing, your primary targets should be the massive Dhaba culture (e.g., Kesar Da Dhaba, Bharawan Da Dhaba), luxury hotels in Ranjit Avenue, and wedding caterers. Consistent quality is the key to securing long-term contracts.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-brand-blue pl-3">
              Frequently Asked Questions (FAQ - Amritsar)
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
                Ready to Grow Your Agribusiness in Amritsar?
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-[12px] transition-all shadow-lg w-full sm:w-auto">
                  <Phone size={16} /> WhatsApp Us: 9203544140
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
