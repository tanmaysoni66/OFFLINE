import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Guwahati, Assam | Training, Spawn & Setup",
  description:
    "Start commercial mushroom farming in Guwahati, Assam. Expert online/offline training, premium spawn, turnkey farm setup, and B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/assam/guwahati",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Guwahati, Assam | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Guwahati, Assam. Expert online/offline training, premium spawn, turnkey farm setup, and B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/assam/guwahati",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Guwahati, Assam | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Guwahati, Assam. Expert online/offline training, premium spawn, turnkey farm setup, and B2B marketing support.",
  },
};

export default function ArticleGuwahatiTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/assam/guwahati#webpage",
        url: "https://organicmushroomsfarm.com/cities/assam/guwahati",
        name: "Mushroom Farming in Guwahati, Assam | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Guwahati, Assam. Expert online/offline training, premium spawn, turnkey farm setup, and B2B marketing support.",
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
            name: "Assam",
            item: "https://organicmushroomsfarm.com/states/assam",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Guwahati",
            item: "https://organicmushroomsfarm.com/cities/assam/guwahati",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Guwahati, Assam | Training, Spawn & Setup",
        description:
          "Start commercial mushroom farming in Guwahati, Assam. Expert online/offline training, premium spawn, turnkey farm setup, and B2B marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/assam/guwahati",
        },
      },
    ],
  };

  const faqs = [
    { q: "1. গুৱাহাটীত Mushroom Farming ৰ খৰচ কিমান?", a: "Scale ৰ ওপৰত নিৰ্ভৰ কৰে — ঘৰুৱা সৰু unit ৰ বাবে ₹10,000-₹25,000 ৰ পৰা আৰম্ভ কৰিব পাৰি, commercial scale ৰ বাবে বেছি বিনিয়োগ লাগে।" },
    { q: "2. কিমান লাভ হ'ব পাৰে?", a: "সঠিক management আৰু consistent hotel/resort demand ৰ সৈতে monthly ভাল margin সম্ভৱ।" },
    { q: "3. Mushroom spawn ক'ত পাম?", a: "আমাৰ পৰা গোটেই অসম আৰু pan-India delivery ৰ সৈতে spawn কিনিব পাৰিব।" },
    { q: "4. Training কেনেকৈ join কৰিম?", a: "WhatsApp ৰ জৰিয়তে যোগাযোগ কৰি online বা offline training ৰ বাবে registration কৰিব পাৰিব।" },
    { q: "5. Online training উপলব্ধ নেকি?", a: "হয়, Hindi আৰু English ত সম্পূৰ্ণ সমৰ্থনৰ সৈতে online training উপলব্ধ।" },
    { q: "6. গুৱাহাটীত offline training পাম নেকি?", a: "হয়, গুৱাহাটীত practical hands-on offline training ৰ ব্যৱস্থা আছে।" },
    { q: "7. কিমান ঠাই লাগিব?", a: "সৰু স্তৰৰ বাবে 100-200 sq ft যথেষ্ঠ, commercial ৰ বাবে বেছি ঠাই লাগে।" },
    { q: "8. মহিলাসকলে mushroom farming আৰম্ভ কৰিব পাৰিব নেকি?", a: "নিশ্চয়, ঘৰতে বহি মহিলাসকলে সহজেই এই ব্যৱসায় আৰম্ভ কৰিব পাৰে।" },
    { q: "9. ছাত্ৰ-ছাত্ৰীসকলেও আৰম্ভ কৰিব পাৰিব নেকি?", a: "নিশ্চয়, কম বিনিয়োগ আৰু সময়ত ছাত্ৰ-ছাত্ৰীসকলৰ বাবেও ই এক ভাল বিকল্প।" },
    { q: "10. Government subsidy উপলব্ধ নেকি?", a: "Eligibility criteria অনুসৰি কিছুমান আঁচনিৰ জৰিয়তে সাহায্য পাব পাৰে, আমি guidance দিওঁ।" },
    { q: "11. কোনটো mushroom variety সৰ্বোত্তম?", a: "Oyster mushroom beginners ৰ বাবে আৰম্ভ কৰিবলৈ আটাইতকৈ সহজ।" },
    { q: "12. Mushroom কেনেকৈ বিক্ৰী কৰিম?", a: "Local hotels, restaurants, organic stores, আৰু WhatsApp/social media ৰ জৰিয়তে direct customers লৈ।" },
    { q: "13. আপোনালোকে consultancy দিয়ে নেকি?", a: "হয়, production ৰ পৰা marketing লৈকে সম্পূৰ্ণ consultancy উপলব্ধ।" },
    { q: "14. Turnkey project ও পোৱা যায় নেকি?", a: "হয়, ডাঙৰ investors ৰ বাবে complete turnkey mushroom project setup দিয়া হয়।" },
    { q: "15. Marketing support পাম নেকি?", a: "হয়, packaging, branding আৰু buyer connection ত সম্পূৰ্ণ support পোৱা যায়।" },
    { q: "16. গুৱাহাটীৰ কোনবোৰ অঞ্চলত সেৱা উপলব্ধ?", a: "Beltola, Dispur, Six Mile, Zoo Road, Maligaon, Jalukbari, Chandmari, Pan Bazar আৰু আশে-পাশৰ সকলো অঞ্চলত।" },
    { q: "17. North Guwahati বা Rangia ত সেৱা পাম নেকি?", a: "হয়, North Guwahati, Rangia, Hajo, Sonapur আদি ওচৰৰ সকলো অঞ্চল সামৰি লোৱা হয়।" }
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
              Mushroom Farming in Guwahati, Assam (গুৱাহাটীত কাঠফুলা খেতি)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Guwahati, Dispur, North Guwahati & Surrounding Regions in Assam</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              Guwahati is proudly known as the gateway to Northeast India—a region celebrated for its lush landscapes and incredible agricultural heritage. With its naturally high humidity levels and subtropical climate, Assam provides the perfect atmospheric conditions for fungi to thrive.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              Whether you are a student, a local farmer, or an entrepreneur, commercial mushroom farming represents a highly profitable, fast-growing agri-business in Guwahati. By harnessing the local weather, you can drastically cut down infrastructure costs while growing premium mushrooms for high-end local restaurants and hotels.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Abundant & Low-Cost Raw Materials in Assam
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              A profitable mushroom farm keeps its production costs low. Assam provides both infrastructure and substrate in abundance:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Paddy Straw:</strong> As a major rice-producing state, agricultural waste like paddy straw is widely and cheaply available. This is the absolute best, nutrient-rich substrate for Oyster mushrooms.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Bamboo Infrastructure:</strong> Instead of building expensive metal racks or concrete rooms, growers in Assam can utilize locally sourced, durable bamboo to build highly effective, low-cost vertical farming sheds.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              A Massive, Built-In Local Market
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              Unlike other parts of the country where mushrooms are a relatively new health trend, the Northeast has a deep, traditional love for them. Mushrooms are a celebrated part of the local diet and culture.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              As Guwahati rapidly urbanizes, the demand from premium restaurants, cafes, luxury hotels, and health-conscious consumers has skyrocketed. Currently, the demand for fresh, hygienically grown organic mushrooms far exceeds the local supply.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Training & Consultancy (প্ৰশিক্ষণ আৰু পৰামৰ্শ)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4 font-medium">
              Commercial success requires more than just good weather. You need proper sterilization techniques and a clear business strategy. We offer:
            </p>
            <div className="space-y-4 mb-8 pl-4 border-l border-black/10 dark:border-white/10">
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">1. Online Mushroom Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">Learn the complete scientific process with our online training program (available in Hindi and English) from your home.</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">2. Professional Mushroom Consultancy:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">For large scale commercial setups, we provide turnkey solutions, farm layout blueprints, and high-quality spawn supply.</p>
              </div>
            </div>

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
                গুৱাহাটীত Mushroom Farming আৰম্ভ কৰক আজিয়েই!
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/917389712061" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-[12px] transition-all shadow-lg w-full sm:w-auto">
                  <MessageSquare size={16} /> WhatsApp Us
                </a>
                <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-slate-900 dark:text-white border border-slate-900/10 dark:border-white/20 px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-[12px] transition-all w-full sm:w-auto">
                  <Phone size={14} /> Contact Us
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
