import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Siliguri, West Bengal | Training & Spawn",
  description:
    "Start commercial mushroom farming in Siliguri, Gateway to Northeast India. Expert online/offline training (Bengali/Hindi/English), premium spawn, and turnkey setup.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/west-bengal/siliguri",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Siliguri, West Bengal | Training & Spawn",
    description:
      "Start commercial mushroom farming in Siliguri, Gateway to Northeast India. Expert online/offline training (Bengali/Hindi/English), premium spawn, and turnkey setup.",
    url: "https://organicmushroomsfarm.com/cities/west-bengal/siliguri",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Siliguri, West Bengal | Training & Spawn",
    description:
      "Start commercial mushroom farming in Siliguri, Gateway to Northeast India. Expert online/offline training (Bengali/Hindi/English), premium spawn, and turnkey setup.",
  },
};

export default function ArticleSiliguriTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/west-bengal/siliguri#webpage",
        url: "https://organicmushroomsfarm.com/cities/west-bengal/siliguri",
        name: "Mushroom Farming in Siliguri, West Bengal | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Siliguri, Gateway to Northeast India. Expert online/offline training (Bengali/Hindi/English), premium spawn, and turnkey setup.",
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
            name: "Siliguri",
            item: "https://organicmushroomsfarm.com/cities/west-bengal/siliguri",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Siliguri, West Bengal | Training & Spawn",
        description:
          "Start commercial mushroom farming in Siliguri, Gateway to Northeast India. Expert online/offline training (Bengali/Hindi/English), premium spawn, and turnkey setup.",
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
          "@id": "https://organicmushroomsfarm.com/cities/west-bengal/siliguri",
        },
      },
    ],
  };

  const faqs = [
    { q: "১. শিলিগুড়িতে মাশরুম চাষ শুরু করতে কত খরচ হয়?", a: "ছোট আকারে শুরু করতে ৫,০০০–১০,০০০ টাকা যথেষ্ট। বাণিজ্যিক খামারের জন্য সেটআপ অনুযায়ী বিনিয়োগ নির্ধারণ করা হয়।" },
    { q: "২. শিলিগুড়ির আবহাওয়ায় কোন মাশরুম সবচেয়ে ভালো জন্মায়?", a: "সাব-হিমালয়ান আর্দ্র আবহাওয়ার জন্য Oyster মাশরুম সারা বছর দারুণ ফলন দেয়। শীতকালে কম খরচে Button মাশরুম চাষ করা যায়।" },
    { q: "৩. ভালো মানের স্পন (বীজ) কোথায় পাব?", a: "Organic Mushrooms Farm থেকে F1-Gen, ল্যাব-পরীক্ষিত হাই-ইল্ড স্পন শিলিগুড়ি ও পার্শ্ববর্তী এলাকায় দ্রুত সরবরাহ করা হয়।" },
    { q: "৪. উৎপাদিত মাশরুম কোথায় বিক্রি করব?", a: "দার্জিলিং, গ্যাংটক, কালিম্পং-এর হোটেল-রিসোর্ট, শিলিগুড়ির লোকাল সুপারমার্কেট ও সিকিম/আসামের পাইকারি বাজারে সরাসরি বিক্রি করা যায়।" }
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
              Mushroom Farming in Siliguri (শিলিগুড়িতে মাশরুম চাষ)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Siliguri, Matigara, Sevoke Road, Bagdogra, Jalpaiguri & North Bengal</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              উত্তর-পূর্ব ভারতের প্রবেশদ্বার শিলিগুড়ি (Siliguri) বাণিজ্য ও যোগাযোগের অন্যতম প্রধান কেন্দ্র। হিমালয়ের পাদদেশে অবস্থিত এই শহরের সাব-হিমালয়ান আর্দ্র আবহাওয়া এবং দার্জিলিং, কালিম্পং ও সিকিমের বিশাল পর্যটন বাজারের কারণে শিলিগুড়িতে বাণিজ্যিক মাশরুম চাষের (Mushroom Farming) বিপুল সম্ভাবনা তৈরি হয়েছে।
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              অল্প বিনিয়োগ, সীমিত জায়গা এবং প্রচুর ধানের খড়ের সহজলভ্যতার কারণে শিলিগুড়ি ও জলপাইগুড়ি অঞ্চলে নতুন কৃষি-উদ্যোক্তাদের জন্য মাশরুম ফার্মিং একটি অতি লাভজনক আধুনিক ব্যবসা।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Strategic Advantages of Mushroom Farming in Siliguri
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Gateway to Premium Hospitality Markets:</strong> দার্জিলিং, গ্যাংটক ও কালিম্পং-এর বিলাসবহুল রিসোর্ট এবং ক্যাফেগুলোতে প্রতিদিন প্রচুর ফ্রেশ Button ও Oyster মাশরুমের চাহিদা থাকে।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Natural Humidity:</strong> হিমালয় সংলগ্ন উচ্চ প্রাকৃতিক আর্দ্রতার কারণে কৃত্রিম হিউমিডিফায়ার বা ফগারের খরচ অনেক কমে যায়।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Abundant Substrate (ধানের খড়):</strong> উত্তরবঙ্গের বিশাল ধান উৎপাদন এলাকার কারণে কাঁচামাল অত্যন্ত সস্তায় পাওয়া যায়, যার ফলে উৎপাদন খরচ ন্যূনতম থাকে।</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Hands-on Mushroom Training</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  অনলাইন ও অফলাইন ব্যবহারিক প্রশিক্ষণ—খড় শোধন, স্পনিং, তাপমাত্রা নিয়ন্ত্রণ এবং রোগ প্রতিরোধ পদ্ধতির সম্পূর্ণ বৈজ্ঞানিক শিক্ষা।
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn Supply</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  শিলিগুড়ি, জলপাইগুড়ি এবং কালিম্পং অঞ্চলে F1-Gen, ল্যাব-পরীক্ষিত হাই-ইল্ড স্পন দ্রুত পৌঁছে দেওয়ার নিশ্চয়তা।
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Turnkey Setup & Marketing Network</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  বাণিজ্যিক এয়ার-কন্ডিশন্ড মাশরুম ফার্ম ডিজাইন এবং দার্জিলিং ও আসামের পাইকারি বাজারের সাথে সরাসরি যোগাযোগের সুযোগ।
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Coverage Across Siliguri & Surrounding North Bengal
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              আমরা শিলিগুড়ি শহর এবং পার্শ্ববর্তী সমস্ত এলাকায় সেবা প্রদান করি:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Siliguri City:</strong> Sevoke Road, Hill Cart Road, Pradhan Nagar, Matigara, Champasari, Salugara, Hakim Para.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Surrounding Belts:</strong> Bagdogra, Jalpaiguri, Kurseong, Islampur, Naxalbari, Phansidewa.</span>
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
                Ready to Start Your Mushroom Business in Siliguri?
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
