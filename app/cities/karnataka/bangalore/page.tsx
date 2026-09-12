import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Bangalore | Training, Spawn & Setup",
  description:
    "Start mushroom farming in Bangalore (Bengaluru), Karnataka. Expert training, premium spawn, farm setup, and B2B marketing support. Learn oyster, button & milky mushroom cultivation.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/karnataka/bangalore",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Bangalore | Training, Spawn & Setup",
    description:
      "Start mushroom farming in Bangalore (Bengaluru), Karnataka. Expert training, premium spawn, farm setup, and B2B marketing support. Learn oyster, button & milky mushroom cultivation.",
    url: "https://organicmushroomsfarm.com/cities/karnataka/bangalore",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Bangalore | Training, Spawn & Setup",
    description:
      "Start mushroom farming in Bangalore (Bengaluru), Karnataka. Expert training, premium spawn, farm setup, and B2B marketing support. Learn oyster, button & milky mushroom cultivation.",
  },
};

export default function ArticleBangaloreTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/karnataka/bangalore#webpage",
        url: "https://organicmushroomsfarm.com/cities/karnataka/bangalore",
        name: "Mushroom Farming in Bangalore | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start mushroom farming in Bangalore (Bengaluru), Karnataka. Expert training, premium spawn, farm setup, and B2B marketing support. Learn oyster, button & milky mushroom cultivation.",
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
            name: "Karnataka",
            item: "https://organicmushroomsfarm.com/states/karnataka",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Bangalore",
            item: "https://organicmushroomsfarm.com/cities/karnataka/bangalore",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Bangalore | Training, Spawn & Setup",
        description:
          "Start mushroom farming in Bangalore (Bengaluru), Karnataka. Expert training, premium spawn, farm setup, and B2B marketing support. Learn oyster, button & milky mushroom cultivation.",
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
          "@id": "https://organicmushroomsfarm.com/cities/karnataka/bangalore",
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
              Mushroom Farming in Bangalore, Karnataka (ಬೆಂಗಳೂರಿನಲ್ಲಿ ಅಣಬೆ ಕೃಷಿ)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Bangalore Urban, Rural (Hoskote, Devanahalli, Sarjapur) & IT Hubs</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              Bangalore (Bengaluru) is not just the IT capital of India; it's a rapidly growing market for organic, vegan, and health-conscious food products. With a massive population of urban professionals and a booming restaurant culture, the demand for premium mushrooms in the city outstrips the local supply.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              Mushroom farming offers an incredible high-ROI agribusiness opportunity for both urban terrace gardeners and commercial investors in rural clusters like Hoskote and Devanahalli. This complete guide will walk you through setting up a profitable farm.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Understanding the Bangalore Market & Mushroom Varieties
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              Bangalore's moderate climate offers a unique advantage, but to capture the high-end market continuously, you need to understand which varieties sell best:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Oyster Mushroom Cultivation (ಚಿಪ್ಪಣಬೆ ಕೃಷಿ):</strong> Excellent for beginners. Fast growing, highly nutritious, and increasingly popular in modern cafes and for vegan meat substitutes.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Button Mushroom Farming:</strong> The king of the market. High demand in star hotels, supermarkets (like Namdhari's, Nature's Basket), and restaurants. Requires a strictly controlled climate (A/C).</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Milky Mushroom Farming:</strong> Ideal for the slightly warmer months or outskirts. Has a long shelf life and meaty texture.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Infrastructure: Commercial Farm Setup & Climate Control
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              To supply consistent volume to Bangalore's corporate cafeterias and retail chains, a seasonal approach won't work.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              We specialize in <strong>Turnkey Mushroom Projects</strong> and <strong>Commercial Mushroom Farm Setup</strong>. This involves designing insulated PUF panel rooms, installing automated humidifiers (Smart Climate Control), CO2 sensors, and high-quality racks. This ensures your crops yield maximally regardless of the outside weather in Karnataka.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Training & Consultancy (ತರಬೇತಿ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4 font-medium">
              Without proper scientific training, contamination can wipe out your investment. We offer structured learning paths:
            </p>
            <div className="space-y-4 mb-8 pl-4 border-l border-black/10 dark:border-white/10">
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">1. Online Mushroom Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">Join our digital masterclass to understand substrate preparation, spawning, harvesting, disease management, and packaging from your home in Bangalore.</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">2. Offline Mushroom Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">Intensive, hands-on practical sessions where you actually make mushroom beds, mix compost, and learn farm hygiene protocols.</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">3. Professional Mushroom Consultancy:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">End-to-end troubleshooting, structural farm planning, commercial expansion strategies, and ongoing technical guidance for investors.</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              High-Yield Mushroom Spawn & Compost
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              The quality of your harvest depends directly on the quality of your seeds. We ensure a consistent <strong>Mushroom Spawn Supply</strong> (Oyster, Button, Milky, and Medicinal strains) to Bangalore. Furthermore, proper <strong>Mushroom Compost Preparation</strong> is taught and facilitated to ensure high biological efficiency.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Market Distribution, ROI & Government Subsidy
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              To build a sustainable agro-business, your production must line up perfectly with a strategic sales plan.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Fresh & Dry Mushroom Sale:</strong> Tap into premium organic stores and IT catering. We also guide you on drying mushrooms and creating value-added products like protein mixes to increase shelf life.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Marketing Support:</strong> Our dedicated Mushroom Marketing Support connects your farm directly with local restaurant supply chains and B2B buyers.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Business Plan & Subsidy:</strong> We assist in drafting a detailed Business Plan & ROI evaluation. We also guide you through securing a Government Subsidy for Mushroom Farming through NHB or state horticulture schemes.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Hyper-Local Target Reach: Serving All Bangalore Districts
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              Our setup and training services are accessible across major urban zones and connecting rural clusters:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> Major Urban & IT Hubs</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Whitefield, Electronic City, Yelahanka, Hebbal, Rajajinagar, Jayanagar, Malleshwaram</p>
              </div>
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> Rural Clusters & Outskirts</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Hoskote, Devanahalli, Sarjapur, Attibele, Anekal, Jigani</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Conclusion: Start Your Mushroom Farming Business Today!
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              ಬೆಂಗಳೂರು ಮತ್ತು ಅದರ ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳಲ್ಲಿ ಅಣಬೆ ಕೃಷಿಯು ಅತ್ಯುತ್ತಮ ಆರ್ಥಿಕ ಮತ್ತು ಉದ್ಯಮ ಅವಕಾಶವನ್ನು ಒದಗಿಸುತ್ತದೆ. With the right training, premium spawn, automated farm setup, and rock-solid marketing guidance, you can build a highly lucrative commercial mushroom brand in Karnataka.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              Ready to launch your mushroom farming business in Bangalore? Contact us today to consult with our agro-experts and book your slot!
            </p>

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Grow Your Agribusiness in Bangalore?
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
