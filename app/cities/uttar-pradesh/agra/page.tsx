import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Agra | Training, Spawn & Farm Setup",
  description:
    "Start your commercial mushroom farming business in Agra, Uttar Pradesh. Get expert online/offline training, premium spawn, farm setup consultancy, and marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/uttar-pradesh/agra",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Agra | Training, Spawn & Farm Setup",
    description:
      "Start your commercial mushroom farming business in Agra, Uttar Pradesh. Get expert online/offline training, premium spawn, farm setup consultancy, and marketing support.",
    url: "https://organicmushroomsfarm.com/cities/uttar-pradesh/agra",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Agra | Training, Spawn & Farm Setup",
    description:
      "Start your commercial mushroom farming business in Agra, Uttar Pradesh. Get expert online/offline training, premium spawn, farm setup consultancy, and marketing support.",
  },
};

export default function ArticleAgraTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/uttar-pradesh/agra#webpage",
        url: "https://organicmushroomsfarm.com/cities/uttar-pradesh/agra",
        name: "Mushroom Farming in Agra | Training, Spawn & Farm Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start your commercial mushroom farming business in Agra, Uttar Pradesh. Get expert online/offline training, premium spawn, farm setup consultancy, and marketing support.",
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
            name: "Uttar Pradesh",
            item: "https://organicmushroomsfarm.com/states/uttar-pradesh",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Agra",
            item: "https://organicmushroomsfarm.com/cities/uttar-pradesh/agra",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Agra | Training, Spawn & Farm Setup",
        description:
          "Start your commercial mushroom farming business in Agra, Uttar Pradesh. Get expert online/offline training, premium spawn, farm setup consultancy, and marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/uttar-pradesh/agra",
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
              Mushroom Farming in Agra, Uttar Pradesh
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Agra (Sikandra, Tajganj, Kamla Nagar) & Surrounding Areas</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              Agra, famous globally for its tourism and the Taj Mahal, is now emerging as a fantastic location for agribusiness. 
              The hospitality industry (hotels and restaurants) in Agra generates massive demand for fresh, healthy ingredients, making it highly lucrative for local growers. 
              Entrepreneurs and farmers are realizing the potential of Commercial Mushroom Farming to supply these businesses directly.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              This guide explains the scope of the mushroom business in Agra and how proper training, quality spawn, and strategic marketing can help you build a profitable brand.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Understanding the Agra Market (आगरा का मार्केट)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              In Agra, <strong>Oyster Mushroom Cultivation</strong>, <strong>Button Mushroom Farming</strong>, and <strong>Milky Mushroom Farming</strong> offer excellent income opportunities. 
              Oyster and milky mushrooms are easier to grow and handle in varied climates, making them a great starting point, while button mushrooms have high demand in star hotels and luxury restaurants across the city.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              To grow high-quality crops continuously, setting up a Smart Climate Control room or a well-insulated Turnkey Mushroom Farm is beneficial. 
              Commercial Mushroom Farm Setup ensures you maintain the required temperature and humidity year-round, which is critical during Agra's hot summers.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Quality Substrate and Composting (कम्पोस्ट और रॉ मटेरियल)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              A good harvest starts with high-quality substrate. Wheat and paddy straw (wheat bhusa / dhan pual) are commonly used. 
              Mushroom Compost Preparation is a vital step, especially for button mushrooms. It's crucial that your Mushroom Farm Infrastructure includes a clean and covered area for making and storing compost to prevent contamination.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              The Importance of Cleanliness and Setup (स्वच्छता और फार्म सेटअप)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              Mushroom farming is highly sensitive. आपका फार्म हाइजीनिक होना चाहिए। 
              A proper setup focuses on a clean production area, strict humidity management, proper ventilation, and a reliable cold storage facility. Well-managed farms are always better prepared for premium buyers.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Mushroom Training: The Key to Success (ट्रेनिंग और स्किल्स)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4 font-medium">
              Learning before investing significantly reduces operational risks.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Online Mushroom Training:</strong> You can join the best online mushroom training course in India to master cultivation, harvesting, packaging, and branding from home. Taking a mushroom farming course online helps you understand the global standards required for export.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Offline Mushroom Training:</strong> Practical sessions cover live demonstrations, bed preparation, spawn handling, and farm management. Learn mushroom cultivation step by step to improve your hands-on production skills.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Spawn Supply & Fresh/Dry Sales (स्पॉन सप्लाई और बिक्री)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              Reliable Mushroom Spawn Supply remains essential for commercial production. Healthy oyster mushroom spawn, button mushroom spawn, and milky mushroom spawn support consistent crop quality.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              जब बात बिक्री की आती है, तो Fresh Mushroom Sale के लिए आप Hotels, Restaurants, Supermarkets, और Organic Food Stores को टारगेट कर सकते हैं। इसके अलावा, Dry Mushroom Sale, Mushroom Powder, और Healthy Snacks जैसे प्रोडक्ट्स आपको multiple revenue streams बनाने में मदद करते हैं।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Smart Marketing & Business Expansion
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              Before expanding into larger markets, evaluating your Business Plan & ROI is crucial. You need to assess production capacity, operating costs, and long-term growth opportunities.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              आज के डिजिटल युग में मार्केटिंग का तरीका बदल चुका है। Mushroom Marketing Support activities should include brand development and online sales. To target institutional buyers or international clients, you can leverage digital marketing by running highly targeted Meta Ads and using Instagram to connect directly with B2B food processing companies and distributors.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              Also, eligible farmers and entrepreneurs can benefit from a government subsidy under agriculture, MSME, and export promotion schemes.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Expert Guidance: Consultancy & Turnkey Projects
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              If you are a commercial investor, Turnkey Mushroom Projects can simplify your journey by providing farm design, infrastructure planning, and equipment selection. Professional Mushroom Consultancy helps with business development, market expansion, and quality improvement so your business matches international standards.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Agra Areas Covered (आगरा के प्रमुख क्षेत्र)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              We aim to support and guide entrepreneurs across the entire Agra region:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Major Areas:</strong> Sikandra, Dayal Bagh, Kamla Nagar, Shahganj, Fatehabad Road, Trans Yamuna, Civil Lines, Tajganj.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Nearby Locations:</strong> Fatehpur Sikri, Mathura, Firozabad, Achhnera.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Nearby Villages:</strong> Kiraoli Region, Khandauli Belt, Etmadpur Area, Shamshabad Rural Region.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Final Thoughts (निष्कर्ष)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              Agra offers excellent opportunities for entrepreneurs who want to build a mushroom business with long-term global growth in mind. While many businesses begin by serving local customers, maintaining high standards from the start can prepare them for broader market opportunities.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              Whether your goal is Mushroom Farm Setup, Online Mushroom Training, Offline Mushroom Training, Mushroom Spawn Supply, Mushroom Consultancy, or securing a government subsidy, Agra provides a very strong foundation. बेहतरीन क्वालिटी, स्मार्ट मार्केटिंग और सही प्लानिंग के साथ, आप अपने मशरूम बिजनेस को लोकल से ग्लोबल लेवल तक ले जा सकते हैं!
            </p>

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Grow Your Agribusiness in Agra?
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
