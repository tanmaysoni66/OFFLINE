import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Jabalpur | Training, Spawn & Setup",
  description:
    "Start commercial mushroom farming in Jabalpur, MP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/madhya-pradesh/jabalpur",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Jabalpur | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Jabalpur, MP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/madhya-pradesh/jabalpur",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Jabalpur | Training, Spawn & Setup",
    description:
      "Start commercial mushroom farming in Jabalpur, MP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
  },
};

export default function ArticleJabalpurGuide() {
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
        "@id": "https://organicmushroomsfarm.com/cities/madhya-pradesh/jabalpur#webpage",
        url: "https://organicmushroomsfarm.com/cities/madhya-pradesh/jabalpur",
        name: "Mushroom Farming in Jabalpur | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Jabalpur, MP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
            name: "Madhya Pradesh",
            item: "https://organicmushroomsfarm.com/states/madhya-pradesh",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Jabalpur",
            item: "https://organicmushroomsfarm.com/cities/madhya-pradesh/jabalpur",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Jabalpur | Training, Spawn & Setup",
        description:
          "Start commercial mushroom farming in Jabalpur, MP. Expert online/offline training (Hindi), premium spawn, turnkey farm setup, and B2B marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/madhya-pradesh/jabalpur",
        },
      },
    ],
  };

  const faqs = [
    { q: "What's the best mushroom to grow in Jabalpur?", a: "For beginners: oyster mushrooms (during monsoon especially). For profit: button mushrooms (during winter). For specialization: shiitake or specialty mushrooms." },
    { q: "How long does it take to see profit?", a: "First cycle: 35-50 days. First profit: Within 2-3 months. Break-even: 4-6 months typically." },
    { q: "Can I do mushroom farming part-time in Jabalpur?", a: "Absolutely! Many farmers in Jabalpur start part-time with 50-100 sq ft units while keeping their jobs." },
    { q: "Where can I get mushroom spawn in Jabalpur?", a: "We provide quality spawn delivery in Jabalpur. Always verify quality and freshness before purchasing." },
    { q: "What's the best season to start?", a: "You can start anytime, but monsoon (June-July) is ideal for oyster mushrooms, and September-October is best for button mushrooms." },
    { q: "How much space do I need?", a: "As little as 50 sq ft to start profitably. Even 100 sq ft generates ₹20,000-30,000 monthly income." }
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
              Mushroom Farming in Jabalpur (जबलपुर में मशरूम की खेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Jabalpur, Katni, Mandla, Narsinghpur & Surrounding MP Regions</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              Jabalpur is emerging as a major hub for commercial mushroom farming in Madhya Pradesh. With its favorable climate, abundant raw materials (wheat straw), and a growing population of 1.1 million, the city offers an incredible opportunity for agri-entrepreneurs.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              जबलपुर और आसपास के जिलों (कटनी, नरसिंहपुर, मंडला) में मशरूम की मांग तेजी से बढ़ रही है। यदि आप एक कम निवेश और अधिक मुनाफे वाले व्यवसाय की तलाश में हैं, तो मशरूम की खेती आपके लिए सबसे बेहतरीन विकल्प है।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Jabalpur is Perfect for Mushroom Farming
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Favorable Climate:</strong> Jabalpur experiences distinct seasons, allowing you to grow different varieties year-round (Oyster in monsoon/spring, Button in winter, Milky in summer) even without AC setups.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Abundant Raw Materials:</strong> Wheat straw (Gehu ka bhusa) is the primary substrate and is available abundantly and cheaply across the Mahakaushal region.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Growing Market Demand:</strong> Local hotels, restaurants, and health-conscious consumers provide a ready market for fresh organic mushrooms.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Investment & Profit Economics (Jabalpur Model)
            </h2>
            <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl border border-black/5 dark:border-white/5 mb-8">
              <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-4">Sample Business Model (100 Sq. Ft. Setup)</h3>
              
              <h4 className="font-bold text-brand-blue text-[13px] mb-2">Estimated Costs (1 Cycle / 45 Days):</h4>
              <ul className="list-disc pl-5 space-y-1 text-[12px] text-slate-700 dark:text-slate-300 mb-4">
                <li>100 bags setup cost (straw, polybags, chemicals): ₹2,500</li>
                <li>Mushroom Spawn (10 kg): ₹1,000</li>
                <li>Labor (Self): ₹0</li>
                <li>Contingency: ₹300</li>
                <li><strong>Total Investment per cycle:</strong> ~₹3,800</li>
              </ul>
              
              <h4 className="font-bold text-brand-blue text-[13px] mb-2">Estimated Revenue:</h4>
              <ul className="list-disc pl-5 space-y-1 text-[12px] text-slate-700 dark:text-slate-300 mb-4">
                <li>Yield: ~100 kg Oyster Mushrooms</li>
                <li>Wholesale Market Price (Jabalpur): ~₹90 - ₹120 per kg</li>
                <li><strong>Gross Revenue:</strong> ₹9,000 - ₹12,000</li>
                <li><strong>Net Profit:</strong> ₹5,200 - ₹8,200 (per cycle on a tiny setup)</li>
              </ul>
              <p className="text-[12px] text-slate-700 dark:text-slate-300 italic">
                * Scale this to 1000 sq ft or 3000 bags to calculate commercial potential.
              </p>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Support in Jabalpur
            </h2>
            <div className="space-y-4 mb-10 pl-4 border-l border-black/10 dark:border-white/10">
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">1. Professional Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">We offer specialized online and offline training programs in Hindi, covering everything from substrate preparation to disease management.</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">2. Premium Spawn Supply:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">Get high-yielding, lab-tested mushroom spawn delivered directly to your farm in Jabalpur and surrounding districts.</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">3. Turnkey Farm Setup:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">For investors looking to start large-scale commercial AC farms (for year-round Button mushrooms), we provide complete turnkey installations and project reports for subsidies.</p>
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
                Ready to Grow Your Agribusiness in Jabalpur?
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
