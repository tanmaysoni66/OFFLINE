import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Delhi NCR | Training, Spawn & Setup",
  description:
    "Start mushroom farming in Delhi NCR (Noida, Gurugram, Ghaziabad, Faridabad). Expert training (Hindi), premium spawn, turnkey farm setup, and complete B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/delhi/delhi",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Delhi NCR | Training, Spawn & Setup",
    description:
      "Start mushroom farming in Delhi NCR (Noida, Gurugram, Ghaziabad, Faridabad). Expert training (Hindi), premium spawn, turnkey farm setup, and complete B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/delhi/delhi",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Delhi NCR | Training, Spawn & Setup",
    description:
      "Start mushroom farming in Delhi NCR (Noida, Gurugram, Ghaziabad, Faridabad). Expert training (Hindi), premium spawn, turnkey farm setup, and complete B2B marketing support.",
  },
};

export default function ArticleDelhiTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/delhi/delhi#webpage",
        url: "https://organicmushroomsfarm.com/cities/delhi/delhi",
        name: "Mushroom Farming in Delhi NCR | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start mushroom farming in Delhi NCR (Noida, Gurugram, Ghaziabad, Faridabad). Expert training (Hindi), premium spawn, turnkey farm setup, and complete B2B marketing support.",
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
            name: "Delhi",
            item: "https://organicmushroomsfarm.com/states/delhi",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Delhi NCR",
            item: "https://organicmushroomsfarm.com/cities/delhi/delhi",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Delhi NCR | Training, Spawn & Setup",
        description:
          "Start mushroom farming in Delhi NCR (Noida, Gurugram, Ghaziabad, Faridabad). Expert training (Hindi), premium spawn, turnkey farm setup, and complete B2B marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/delhi/delhi",
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
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="mb-12 text-center">
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              Mushroom Farming in Delhi NCR (दिल्ली एनसीआर में मशरूम की खेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Delhi, Noida, Gurugram, Ghaziabad, Faridabad & Surrounding NCR Clusters</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              Delhi NCR, acting as the corporate, political, and culinary capital of India, represents one of the largest and most lucrative markets for premium agricultural produce. With a massive population of health-conscious urban professionals, a booming vegan culture, and an enormous hospitality sector comprising thousands of restaurants and star hotels, the demand for fresh, organic mushrooms consistently outweighs the local supply.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              Mushroom farming provides an incredibly high-ROI agribusiness opportunity for both urban vertical farmers in Delhi and commercial investors in the expansive NCR regions like Noida, Gurugram, and Ghaziabad. This comprehensive guide will equip you with everything needed to establish a highly profitable mushroom farm.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Understanding the Delhi NCR Market & Mushroom Varieties
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              Delhi NCR experiences extreme weather conditions—sweltering summers and chilling winters. To capture the high-end consumer market continuously, you need to understand which varieties perform best locally and yield the highest returns:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Oyster Mushroom Cultivation:</strong> Excellent for beginners and adaptable to varying conditions. It is fast-growing, highly nutritious, and increasingly popular as a meat substitute in modern cafes across South Delhi and Gurugram.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Button Mushroom Farming:</strong> The undisputed king of the North Indian market. It enjoys massive demand in luxury hotels, catering businesses, and premium supermarkets. Cultivating Button mushrooms year-round in Delhi requires a strictly controlled, air-conditioned environment.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Milky Mushroom Farming:</strong> Ideal for the intensely hot summer months. It boasts a long shelf life and a dense, meaty texture, making it highly marketable.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Medicinal Mushroom Cultivation (Cordyceps, Reishi, Shiitake):</strong> A rapidly emerging, highly profitable niche targeting the wellness and supplement industry, perfect for small, high-tech indoor setups.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Infrastructure: Commercial Farm Setup & Climate Control
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              To reliably supply high volumes to Delhi NCR's corporate cafeterias and premium retail chains, depending on natural seasonal changes is not a viable strategy.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              We specialize in delivering <strong>Turnkey Mushroom Projects</strong> and complete <strong>Commercial Mushroom Farm Setup</strong>. Our expert services include designing insulated PUF panel structures, integrating automated humidifiers (Smart Climate Control), deploying precise CO2 sensors, and installing high-quality multi-tier racks. This state-of-the-art infrastructure ensures maximum crop yield 365 days a year, entirely insulated from Delhi's extreme weather fluctuations.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Training & Consultancy (प्रशिक्षण और मार्गदर्शन)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4 font-medium">
              Mushroom cultivation is a precise science. Without proper scientific training, fungal contamination can swiftly wipe out your entire investment. We offer structured, expert-led learning paths (available in Hindi and English):
            </p>
            <div className="space-y-4 mb-8 pl-4 border-l border-black/10 dark:border-white/10">
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">1. Online Mushroom Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">Join our comprehensive digital masterclass to thoroughly understand substrate preparation, spawning, harvesting, strict disease management, and packaging protocols, straight from your home in Delhi NCR.</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">2. Offline Mushroom Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">Intensive, hands-on practical sessions where you actively make mushroom beds, correctly mix compost, and master essential farm hygiene protocols.</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">3. Professional Mushroom Consultancy:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">Providing end-to-end troubleshooting, structural farm planning, commercial expansion strategies, and ongoing technical guidance for serious investors.</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Market Distribution, ROI & Government Subsidy
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              To build a sustainable agro-business, your production must line up perfectly with a strategic sales strategy.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Fresh & Dry Sale:</strong> Tap directly into Delhi's bustling wholesale mandis (like Azadpur), local retail chains, and supermarkets. Drying mushrooms helps you unlock longer shelf-life and massive value addition profits.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Marketing Support:</strong> Our Mushroom Marketing Support connects your production facility directly with local restaurant supply chains and B2B wholesale buyers.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Business Plan & Subsidy:</strong> We help you draft a bulletproof Business Plan & ROI evaluation, and guide you through securing a Government Subsidy under NHB, MIDH, and state schemes.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Hyper-Local Target Reach: Covering Delhi NCR
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              Our setup consulting and training services cover all major residential, commercial, and rural clusters:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> Delhi Urban Zones</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Rohini, Dwarka, Janakpuri, Pitampura, Laxmi Nagar, Karol Bagh, Uttam Nagar, Shahdara, Saket, Vasant Kunj, Mayur Vihar</p>
              </div>
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> NCR Region (UP & Haryana)</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Noida, Greater Noida, Ghaziabad, Indirapuram, Faridabad, Gurugram, Cyber City, Sohna Road</p>
              </div>
            </div>

            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 rounded-2xl mb-8">
              <h3 className="font-bold text-slate-900 dark:text-white text-[13px] mb-2">Looking for Training specifically in Noida?</h3>
              <p className="text-[12px] text-slate-700 dark:text-slate-300 mb-3">If you are located in Noida, Sector 62, Greater Noida, or Noida Extension, we have a dedicated guide for your region.</p>
              <Link href="/cities/uttar-pradesh/noida" className="text-brand-blue text-[12px] font-bold flex items-center gap-2 hover:underline">
                Read the Noida Mushroom Training Guide <ArrowRight size={14} />
              </Link>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Conclusion: Take the First Step Today!
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              दिल्ली और उसके आसपास के क्षेत्रों में मशरूम की खेती एक बेहतरीन और आधुनिक व्यावसायिक अवसर प्रदान करती है। With the right technical training, premium spawn, automated farm setup, and rock-solid marketing support, you can turn a small indoor space into a highly rewarding commercial agribusiness.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              Ready to build your successful mushroom farming brand in Delhi NCR? Contact us today to consult with our agro-experts and book your slot!
            </p>

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Grow Your Agribusiness in Delhi NCR?
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
