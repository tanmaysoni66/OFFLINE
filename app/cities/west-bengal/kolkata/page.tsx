import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Kolkata, West Bengal | Training & Spawn",
  description:
    "Start commercial mushroom farming in Kolkata, WB. Expert online/offline training (Bengali/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/west-bengal/kolkata",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Kolkata, West Bengal | Training & Spawn",
    description:
      "Start commercial mushroom farming in Kolkata, WB. Expert online/offline training (Bengali/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/west-bengal/kolkata",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Kolkata, West Bengal | Training & Spawn",
    description:
      "Start commercial mushroom farming in Kolkata, WB. Expert online/offline training (Bengali/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  },
};

export default function ArticleKolkataTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/west-bengal/kolkata#webpage",
        url: "https://organicmushroomsfarm.com/cities/west-bengal/kolkata",
        name: "Mushroom Farming in Kolkata, West Bengal | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Kolkata, WB. Expert online/offline training (Bengali/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
            name: "West Bengal",
            item: "https://organicmushroomsfarm.com/states/west-bengal",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Kolkata",
            item: "https://organicmushroomsfarm.com/cities/west-bengal/kolkata",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Kolkata, West Bengal | Training & Spawn",
        description:
          "Start commercial mushroom farming in Kolkata, WB. Expert online/offline training (Bengali/Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/west-bengal/kolkata",
        },
      },
    ],
  };

  const faqs = [
    { q: "১. মাশরুম চাষের ট্রেনিং কোথায় পাবো?", a: "আমরা অনলাইনে এবং অফলাইনে (Offline) বিস্তারিত সায়েন্টিফিক ট্রেনিং দিয়ে থাকি। এখানে আপনি বীজ তৈরী থেকে মার্কেটিং সব কিছু শিখতে পারবেন।" },
    { q: "২. ভালো মাশরুম স্পন কোথায় পাওয়া যায়?", a: "আমরা কলকাতা এবং সারা পশ্চিমবঙ্গে F1-Generation, ল্যাব-টেস্টেড মাশরুম স্পন (Mushroom Spawn) ডেলিভারি করি।" },
    { q: "৩. কতটা জায়গা লাগবে?", a: "আপনি মাত্র একটি ছোট ঘর (১০০-২০০ স্কোয়ার ফিট) থেকে এই ব্যবসা শুরু করতে পারেন।" },
    { q: "৪. উৎপাদিত মাশরুম কোথায় বিক্রি করবো?", a: "আমরা আপনাকে Local Market, Wholesale Buyers এবং B2B Hotel সাপ্লাইয়ের জন্য মার্কেটিং সাপোর্ট (Marketing Support) দেবো।" },
    { q: "৫. সরকারি সাবসিডি পাওয়া যায় কি?", a: "হ্যাঁ, Horticulture Department এবং MSME স্কিমের আওতায় মাশরুম ফার্মিংয়ের জন্য আর্থিক সাহায্য পাওয়া সম্ভব। আমরা এর গাইডেন্স দিয়ে থাকি।" },
    { q: "৬. মাশরুম শুকিয়ে (Dry) বিক্রি করা সম্ভব?", a: "হ্যাঁ, Dry Mushroom Sale অত্যন্ত লাভজনক। কাঁচা মাশরুম অবিক্রীত থাকলে আমরা আপনাকে সোলার ড্রায়ার ব্যবহার করে তা শুকিয়ে বিক্রি করার ট্রেনিং দেবো।" }
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
              Mushroom Farming in Kolkata (কলকাতায় মাশরুম চাষ)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Kolkata, Howrah, Hooghly, Salt Lake, New Town & Surrounding Bengal Regions</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              কলকাতা (Kolkata) এবং এর পার্শ্ববর্তী জেলাগুলিতে মাশরুম চাষ (Mushroom Farming) বর্তমানে একটি অত্যন্ত লাভজনক এবং দ্রুত বর্ধনশীল কৃষি-ব্যবসা (Agri-business)। মানুষের মধ্যে স্বাস্থ্য সচেতনতা বৃদ্ধি এবং ৫-স্টার হোটেল ও ক্যাফে-রেস্তোরাঁর বিশাল চাহিদার কারণে, তাজা ও অর্গানিক মাশরুমের বাজার এখানে খুব দ্রুত প্রসারিত হচ্ছে।
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              আপনি যদি শহরতলিতে থেকে কম পুঁজি (Low Investment) ও অল্প জায়গায় (Small Space) একটি সফল ব্যাবসা শুরু করতে চান, তবে মাশরুম চাষ আপনার জন্য একটি যুগান্তকারী সুযোগ।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              কলকাতায় মাশরুম চাষ কেন করবেন? (Why in Kolkata?)
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Huge Local Market Demand:</strong> সল্টলেক (Salt Lake), নিউ টাউন (New Town), পার্ক স্ট্রিট-এর হাই-এন্ড রেস্তোরাঁ এবং সুপারমার্কেটগুলিতে বাটন এবং অয়েস্টার মাশরুমের বিপুল চাহিদা রয়েছে।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>No Land Required (জমির প্রয়োজন নেই):</strong> ভার্টিক্যাল ফার্মিং (Vertical Farming) পদ্ধতিতে একটি সাধারণ ঘরের মধ্যে বা বাড়ির ছাদে খুব সহজেই মাশরুম ফলানো যায়।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>High ROI (বিনিয়োগের দ্রুত ফেরত):</strong> সঠিক বিজ্ঞানসম্মত পদ্ধতিতে চাষ করলে মাশরুম চাষে লাভ অনেক গুণ বেশি হয়।</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">১. Professional Mushroom Training (ট্রেনিং)</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  সঠিক ট্রেনিং ছাড়া মাশরুমে ফাংগাস বা রোগ লাগার ঝুঁকি থাকে। আমরা অনলাইন এবং অফলাইনে বিজ্ঞানভিত্তিক মাশরুম চাষের ট্রেনিং দিয়ে থাকি, যেখানে খড় শোধন থেকে মার্কেটিং পর্যন্ত সব কিছু শেখানো হয়।
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">২. Premium Mushroom Spawn Supply (বীজ)</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  উৎপাদনের হার বীজের মানের উপর নির্ভরশীল। আমরা কলকাতা এবং আশেপাশে F1-Gen, ল্যাব-টেস্টেড <strong>Oyster, Button, এবং Milky Mushroom Spawn</strong> ডেলিভারি করে থাকি।
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">৩. Turnkey Farm Setup (ফার্ম সেটআপ)</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  কলকাতার গরমেও যদি আপনি সারা বছর বাটন মাশরুম চাষ করতে চান, তবে আমরা আপনার জন্য Fully Climate-Controlled AC Farms তৈরি করে দিই।
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Areas We Cover: Kolkata City & All Nearby Villages
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              আমরা কলকাতা শহরের প্রতিটি কোণায় এবং আশেপাশের গ্রামীণ অঞ্চলের চাষিদের কাছে আমাদের পরিষেবা পৌঁছে দিচ্ছি:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Kolkata Urban/IT:</strong> Salt Lake, New Town, Rajarhat, Jadavpur, Tollygunge, Dum Dum, Airport Area.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Suburban Belts:</strong> Belgharia, Sodepur, Barasat, Barrackpore, Howrah, Bally, Uttarpara, Dankuni.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl col-span-1 sm:col-span-2">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Rural Clusters:</strong> Bhangar, Haroa, Basirhat Region, Duttapukur, Amta, Bagnan.</span>
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
                Ready to Start Your Mushroom Business in Kolkata?
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
