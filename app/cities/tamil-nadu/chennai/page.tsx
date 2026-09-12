import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Chennai | Training, Spawn & Setup",
  description:
    "Start mushroom farming in Chennai, Tamil Nadu. Expert online/offline training (Oyster, Milky, Button), premium spawn supply, farm setup, and marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/tamil-nadu/chennai",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Chennai | Training, Spawn & Setup",
    description:
      "Start mushroom farming in Chennai, Tamil Nadu. Expert online/offline training (Oyster, Milky, Button), premium spawn supply, farm setup, and marketing support.",
    url: "https://organicmushroomsfarm.com/cities/tamil-nadu/chennai",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Chennai | Training, Spawn & Setup",
    description:
      "Start mushroom farming in Chennai, Tamil Nadu. Expert online/offline training (Oyster, Milky, Button), premium spawn supply, farm setup, and marketing support.",
  },
};

export default function ArticleChennaiTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/tamil-nadu/chennai#webpage",
        url: "https://organicmushroomsfarm.com/cities/tamil-nadu/chennai",
        name: "Mushroom Farming in Chennai | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start mushroom farming in Chennai, Tamil Nadu. Expert online/offline training (Oyster, Milky, Button), premium spawn supply, farm setup, and marketing support.",
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
            name: "Chennai",
            item: "https://organicmushroomsfarm.com/cities/tamil-nadu/chennai",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Chennai | Training, Spawn & Setup",
        description:
          "Start mushroom farming in Chennai, Tamil Nadu. Expert online/offline training (Oyster, Milky, Button), premium spawn supply, farm setup, and marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/tamil-nadu/chennai",
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
              Mushroom Farming in Chennai, Tamil Nadu (சென்னையில் காளான் வளர்ப்பு)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Chennai, Tambaram, OMR, Poonamallee & Surrounding Regions</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              Chennai, with its booming IT corridors, fast-growing vegan culture, and massive hospitality sector, is experiencing an unprecedented demand for fresh, organic mushrooms. However, local supply often falls short, making commercial mushroom farming a highly lucrative agribusiness opportunity for entrepreneurs and farmers alike in Tamil Nadu.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              Whether you want to start a small terrace setup in Anna Nagar or a large commercial facility in Sriperumbudur, this comprehensive guide covers everything from high-yield spawn to automated climate control.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Understanding the Chennai Market & Climate (சிப்பிக் காளான் & பால் காளான்)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              Chennai's coastal climate is naturally warm and humid, which dictates the types of mushrooms that thrive best:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Milky Mushroom Farming (பால் காளான்):</strong> Excellent for Chennai's warmer months. Known for its meaty texture, bright white color, and excellent shelf life, making it a favorite in local supermarkets.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Oyster Mushroom Cultivation (சிப்பிக் காளான்):</strong> Highly adaptable and fast-growing. Perfect for the slightly cooler monsoons or under basic shade net structures.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Button Mushroom Farming:</strong> The highest in demand across star hotels and premium retail chains. Due to Chennai's heat, Button mushrooms require a fully insulated, AC-controlled (Smart Climate Control) environment.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Infrastructure: Commercial Farm Setup & Climate Control
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              To achieve consistent, year-round production despite the coastal heat, modern infrastructure is key.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              We provide end-to-end <strong>Turnkey Mushroom Projects</strong>. Our team designs and builds insulated PUF panel structures equipped with high-efficiency Humidifiers, CO2 sensors, and automated cooling systems, ensuring maximum yield every single day.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Training & Consultancy (பயிற்சி மற்றும் ஆலோசனை)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4 font-medium">
              Mushroom cultivation requires precise scientific knowledge. Contamination is the biggest risk for untrained growers. We offer comprehensive training:
            </p>
            <div className="space-y-4 mb-8 pl-4 border-l border-black/10 dark:border-white/10">
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">1. Online Mushroom Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">Master the theoretical science and practical steps of substrate preparation, spawning, harvesting, and hygiene from the comfort of your home.</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">2. Offline Mushroom Training:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">Join our intensive hands-on workshops where you practically prepare compost bags, manage humidity, and harvest live crops.</p>
              </div>
              <div>
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-1">3. Professional Mushroom Consultancy:</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">Expert troubleshooting for contamination issues, structural farm planning, and production audits to maximize profitability.</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Premium Mushroom Spawn & Compost
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              The foundation of a good crop is high-quality seed. We ensure a steady supply of premium, first-generation <strong>Mushroom Spawn (காளான் வித்து)</strong> to Chennai. We also provide expert guidance on <strong>Mushroom Compost Preparation</strong>, utilizing local agricultural waste efficiently.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Sales, Marketing & Government Subsidy
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              Growing mushrooms is only half the battle; selling them smartly is where the real profit lies.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Fresh & Dry Sale:</strong> Tap into local markets, or drastically increase shelf life by processing into dry mushrooms or value-added products like mushroom powder.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Marketing Support:</strong> We connect you with local market networks and commercial restaurant supply chains.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Business Plan & Subsidy:</strong> We assist with detailed ROI evaluations and guide you through securing a Government Subsidy for Mushroom Farming.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Hyper-Local Reach: Serving Chennai & Surrounding Districts
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              We extend our services to all major zones and rural clusters:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> Major Urban Hubs</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Tambaram, Velachery, Anna Nagar, OMR, Porur, Ambattur, Avadi, Chromepet</p>
              </div>
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2 flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> Outskirts & Rural Belts</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Poonamallee, Thiruvallur blocks, Sriperumbudur, Kundrathur regions</p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Conclusion: Take the First Step Today!
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              சென்னை மற்றும் அதன் சுற்றுப்புற பகுதிகளில் காளான் வளர்ப்பு ஒரு சிறந்த விவசாய மற்றும் தொழில் வாய்ப்பாக மாறி வருகிறது. Proper training, premium spawn, and strategic marketing support can transform a small space into a highly rewarding business venture.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              Ready to start your mushroom farming journey in Chennai? Contact us today to consult with our experts!
            </p>

            {/* CTA Section */}
            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Grow Your Agribusiness in Chennai?
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
