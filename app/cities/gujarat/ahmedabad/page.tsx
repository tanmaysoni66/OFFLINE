import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Ahmedabad | Training, Spawn & Setup",
  description:
    "Start mushroom farming in Ahmedabad, Gujarat. Get expert online & offline training, premium spawn, farm setup consultancy, and marketing support in Gujarati.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/gujarat/ahmedabad",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Ahmedabad | Training, Spawn & Setup",
    description:
      "Start mushroom farming in Ahmedabad, Gujarat. Get expert online & offline training, premium spawn, farm setup consultancy, and marketing support in Gujarati.",
    url: "https://organicmushroomsfarm.com/cities/gujarat/ahmedabad",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Ahmedabad | Training, Spawn & Setup",
    description:
      "Start mushroom farming in Ahmedabad, Gujarat. Get expert online & offline training, premium spawn, farm setup consultancy, and marketing support in Gujarati.",
  },
};

export default function ArticleAhmedabadTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/gujarat/ahmedabad#webpage",
        url: "https://organicmushroomsfarm.com/cities/gujarat/ahmedabad",
        name: "Mushroom Farming in Ahmedabad | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start mushroom farming in Ahmedabad, Gujarat. Get expert online & offline training, premium spawn, farm setup consultancy, and marketing support in Gujarati.",
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
            name: "Ahmedabad",
            item: "https://organicmushroomsfarm.com/cities/gujarat/ahmedabad",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Ahmedabad | Training, Spawn & Setup",
        description:
          "Start mushroom farming in Ahmedabad, Gujarat. Get expert online & offline training, premium spawn, farm setup consultancy, and marketing support in Gujarati.",
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
          "@id": "https://organicmushroomsfarm.com/cities/gujarat/ahmedabad",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pt-24 pb-16 min-h-screen bg-transparent relative overflow-hidden">
        {/* Animated gradient or background visual element without covering the app's global background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="mb-12 text-center">
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              Mushroom Farming in Ahmedabad, Gujarat (અમદાવાદમાં મશરૂમની ખેતી)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Ahmedabad, Gandhinagar, Sanand & Surrounding Areas</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              Gujarat is known for its entrepreneurial spirit, and Ahmedabad is leading the way in modern agribusiness. With increasing awareness about health and nutrition, the demand for organic mushrooms is skyrocketing in hotels, supermarkets, and households across Ahmedabad and Gandhinagar.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              If you are looking to start a profitable agro-business with low space requirements, commercial mushroom farming is an excellent choice. This guide will walk you through the essential steps, training, and setup required to succeed in Ahmedabad.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Understanding the Market (અમદાવાદમાં મશરૂમનું માર્કેટ)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              In Ahmedabad, <strong>Oyster Mushroom Cultivation (છીપ મશરૂમ)</strong>, <strong>Button Mushroom Farming (બટન મશરૂમ)</strong>, and <strong>Milky Mushroom Farming (દૂધિયા મશરૂમ)</strong> offer highly lucrative opportunities. Oyster and milky mushrooms are relatively easier to grow and adapt well to Gujarat's climate with basic modifications, while button mushrooms have immense demand in the premium hospitality sector.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              Due to the hot and dry summers in Gujarat, setting up a Smart Climate Control room or a Turnkey Mushroom Farm is highly recommended for year-round commercial production. Proper climate management ensures consistent yield and premium quality, allowing you to capture the high-end market.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Quality Substrate and Composting (કમ્પોસ્ટ અને કાચો માલ)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              A successful harvest depends entirely on high-quality substrate. Wheat straw (ઘઉંનું ભૂસું) is widely available in Gujarat and serves as an excellent base. For button mushrooms, proper Mushroom Compost Preparation is vital. Ensuring your Farm Infrastructure has a dedicated, clean area for substrate treatment is the first step toward preventing contamination.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              The Importance of Cleanliness and Setup (સ્વચ્છતા અને યોગ્ય સેટઅપ)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              મશરૂમની ખેતી ખૂબ જ સેન્સેટિવ હોય છે. તમારું ફાર્મ સંપૂર્ણપણે હાઇજીનિક હોવું જોઈએ. A well-designed setup focuses on a sterilized production area, precise humidity control, adequate ventilation, and cold storage capabilities. Professionally managed farms always produce superior crops that attract premium buyers.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Mushroom Training: The Foundation of Success (ટ્રેનિંગ અને સ્કીલ્સ)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4 font-medium">
              Entering this business without proper knowledge can lead to significant losses.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Online Mushroom Training:</strong> Join our comprehensive online mushroom training course to learn cultivation, disease management, harvesting, and packaging from the comfort of your home.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Offline Mushroom Training:</strong> Gain hands-on experience covering live demonstrations, substrate preparation, spawn inoculation, and complete farm management. Practical skills are crucial for commercial success.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Spawn Supply & Market Strategy (સ્પોન સપ્લાય અને માર્કેટિંગ)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              Access to reliable, high-yielding Mushroom Spawn (બીજ) is essential. We provide premium quality oyster mushroom spawn, button mushroom spawn, and milky mushroom spawn to ensure robust crop cycles.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              વેચાણ માટે (For sales), you can target Fresh Mushroom Buyers like star hotels, multi-cuisine restaurants, and organic stores across Ahmedabad. Additionally, creating value-added products like Dry Mushrooms and Mushroom Powder opens doors to broader markets and better margins.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Ahmedabad Areas Covered (અમદાવાદના પ્રમુખ વિસ્તારો)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              We provide training, spawn, and consultancy services across Ahmedabad and surrounding regions:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 items-start text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <MapPin className="text-brand-blue shrink-0 mt-1" size={16} /> 
                <span><strong>SG Highway (એસજી હાઇવે)</strong> & <strong>Satellite (સેટેલાઇટ)</strong></span>
              </li>
              <li className="flex gap-3 items-start text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <MapPin className="text-brand-blue shrink-0 mt-1" size={16} /> 
                <span><strong>Bopal (બોપલ)</strong>, <strong>Thaltej (થલતેજ)</strong> & <strong>Vastrapur (વસ્ત્રાપુર)</strong></span>
              </li>
              <li className="flex gap-3 items-start text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <MapPin className="text-brand-blue shrink-0 mt-1" size={16} /> 
                <span><strong>Gandhinagar (ગાંધીનગર)</strong>, <strong>Sanand (સાણંદ)</strong> & <strong>Kalol (કલોલ)</strong></span>
              </li>
              <li className="flex gap-3 items-start text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <MapPin className="text-brand-blue shrink-0 mt-1" size={16} /> 
                <span><strong>Shela (શેલા)</strong>, <strong>Rancharda (રાંચરડા)</strong> & <strong>Godhavi (ગોધાવી)</strong></span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Conclusion: Start Your Mushroom Journey Today!
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              અમદાવાદ અને સમગ્ર ગુજરાતમાં મશરૂમ ફાર્મિંગ એ માત્ર ખેતી નથી, પણ એક હાઈ-રીટર્ન આપતો મોર્ડન એગ્રી-બિઝનેસ ઓપ્શન છે. પ્રોપર ટ્રેનિંગ, ક્વોલિટી સ્પોન, રાઈટ ફાર્મ સેટઅપ અને સોલિડ માર્કેટિંગ પ્લાન સાથે તમે આ બિઝનેસમાં ખૂબ જ ટૂંકા સમયમાં સેટ થઈ શકો છો.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              ભલે તમારો ગોલ એક નાનું હોમ-બેઝ્ડ સેટઅપ શરૂ કરવાનો હોય કે મોટું કોમર્શિયલ પ્રોડક્શન યુનિટ—<strong>Organic Mushrooms Farm</strong> તમારી સાથે છે. આજે જ અમારો સંપર્ક કરો અને ગુજરાતના આ ગ્રોઈંગ એગ્રીકલ્ચર રિવોલ્યુશનનો ભાગ બનો!
            </p>

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Grow Your Agribusiness in Ahmedabad?
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+919203544140" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-[12px] transition-all shadow-lg w-full sm:w-auto">
                  <Phone size={16} /> Call Now: 9203544140
                </a>
                <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-slate-900 dark:text-white border border-slate-900/10 dark:border-white/20 px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-[12px] transition-all w-full sm:w-auto">
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
