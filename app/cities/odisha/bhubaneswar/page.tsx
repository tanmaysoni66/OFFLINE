import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Bhubaneswar | Training, Spawn & Setup (Odia)",
  description:
    "Start mushroom farming in Bhubaneswar, Odisha. Expert online/offline training in Odia/Hindi, premium spawn supply, turnkey farm setup, and complete market linkage support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/odisha/bhubaneswar",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Bhubaneswar | Training, Spawn & Setup (Odia)",
    description:
      "Start mushroom farming in Bhubaneswar, Odisha. Expert online/offline training in Odia/Hindi, premium spawn supply, turnkey farm setup, and complete market linkage support.",
    url: "https://organicmushroomsfarm.com/cities/odisha/bhubaneswar",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Bhubaneswar | Training, Spawn & Setup (Odia)",
    description:
      "Start mushroom farming in Bhubaneswar, Odisha. Expert online/offline training in Odia/Hindi, premium spawn supply, turnkey farm setup, and complete market linkage support.",
  },
};

export default function ArticleBhubaneswarTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/odisha/bhubaneswar#webpage",
        url: "https://organicmushroomsfarm.com/cities/odisha/bhubaneswar",
        name: "Mushroom Farming in Bhubaneswar | Training, Spawn & Setup (Odia)",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start mushroom farming in Bhubaneswar, Odisha. Expert online/offline training in Odia/Hindi, premium spawn supply, turnkey farm setup, and complete market linkage support.",
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
            name: "Odisha",
            item: "https://organicmushroomsfarm.com/states/odisha",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Bhubaneswar",
            item: "https://organicmushroomsfarm.com/cities/odisha/bhubaneswar",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Bhubaneswar | Training, Spawn & Setup (Odia)",
        description:
          "Start mushroom farming in Bhubaneswar, Odisha. Expert online/offline training in Odia/Hindi, premium spawn supply, turnkey farm setup, and complete market linkage support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/odisha/bhubaneswar",
        },
      },
    ],
  };

  const faqs = [
    {
      q: "1. Bhubaneswar ରେ mushroom farming ଆରମ୍ଭ କରିବା ପାଇଁ କେତେ ଜାଗା ଦରକାର?",
      a: "ଆପଣ 10x10 ଫୁଟ ର ଛୋଟ ରୁମ୍ ବା shed ରୁ ଆରମ୍ଭ କରିପାରିବେ, କିନ୍ତୁ commercial scale ପାଇଁ ଅଧିକ ଜାଗା ଦରକାର।"
    },
    {
      q: "2. କଣ ଓଡ଼ିଶାର ପାଗ mushroom ପାଇଁ ଠିକ୍ କି?",
      a: "ହଁ, ଓଡ଼ିଶାର humid climate Oyster ଏବଂ Milky mushroom ପାଇଁ ବହୁତ ଉପଯୋଗୀ।"
    },
    {
      q: "3. ଆପଣ quality spawn (ମଞ୍ଜି) ଦିଅନ୍ତି କି?",
      a: "ହଁ, ଆମେ ଉଚ୍ଚ ମାନର Button, Oyster ଏବଂ Milky mushroom spawn (F1 generation) ଯୋଗାଇଦେଉ।"
    },
    {
      q: "4. Training କେଉଁଠି ଦିଆଯାଏ?",
      a: "ଆମେ online ଏବଂ offline ଉଭୟ ପ୍ରକାର training ପ୍ରଦାନ କରୁ।"
    },
    {
      q: "5. Farmers ନିଜ ଚାଷ ସହ ଏହା କିପରି କରିବେ?",
      a: "ଧାନ ନଡା ବା ପାଳ (Paddy straw) କୁ substrate ଭାବେ ବ୍ୟବହାର କରି farmers side business ଭାବେ ଏହାକୁ କରିପାରିବେ।"
    },
    {
      q: "6. Mushroom farming ରୁ ଭଲ profit ମିଳେ କି?",
      a: "ବିଲକୁଲ୍, Bhubaneswar ଏବଂ Cuttack ର hotel ଓ market ରେ demand ବହୁତ ଅଧିକ, ତେଣୁ profit margin ଭଲ ରହିଥାଏ।"
    },
    {
      q: "7. Commercial scale ରେ ଆରମ୍ଭ କରିବା ପାଇଁ କେତେ ଖର୍ଚ୍ଚ ହୁଏ?",
      a: "ଖର୍ଚ୍ଚ ଆପଣଙ୍କ scale, setup (AC ବା Non-AC) ଏବଂ capacity ଉପରେ ନିର୍ଭର କରେ, detailed ROI analysis ପାଇଁ ଆମ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ।"
    },
    {
      q: "8. ମହିଳାମାନେ mushroom farming କରିପାରିବେ କି?",
      a: "ହଁ, SHG ବା ଘରେ ରହୁଥିବା ମହିଳାମାନେ ଖୁବ୍ ସହଜରେ ଏହି business ଆରମ୍ଭ କରିପାରିବେ।"
    },
    {
      q: "9. Students ଏହାକୁ part-time କରିପାରିବେ କି?",
      a: "ହଁ, କମ୍ investment ଏବଂ ସମୟ ରେ students ଙ୍କ ପାଇଁ ମଧ୍ୟ ଏହା ଏକ ଭଲ option।"
    },
    {
      q: "10. Government subsidy ଉପଲବ୍ଧ ଅଛି କି?",
      a: "Eligibility ଅନୁଯାୟୀ ଓଡ଼ିଶା ସରକାର ଏବଂ Horticulture department ରୁ subsidy ମିଳିପାରେ, ଯେଉଁଥିରେ ଆମେ guide କରୁ।"
    },
    {
      q: "11. କେଉଁ mushroom variety ସବୁଠାରୁ best?",
      a: "ଆରମ୍ଭ ପାଇଁ Oyster Mushroom ସବୁଠାରୁ ସହଜ। Commercial scale ପାଇଁ Button ଓ Milky Mushroom ମଧ୍ୟ ଭଲ option।"
    },
    {
      q: "12. Mushroom କିପରି sell କରାଯିବ?",
      a: "Restaurant partnership, organic store, direct consumer sale ଏବଂ social media marketing ମାଧ୍ୟମରେ।"
    },
    {
      q: "13. ଆପଣ consultancy service ଦିଅନ୍ତି କି?",
      a: "ହଁ, ଆମେ farm setup ଠାରୁ production ପର୍ଯ୍ୟନ୍ତ complete Consultancy ଦେଇଥାଉ।"
    },
    {
      q: "14. Turnkey project provide କରନ୍ତି କି?",
      a: "ହଁ, commercial investor ମାନଙ୍କ ପାଇଁ complete Turnkey Mushroom Project setup ଉପଲବ୍ଧ।"
    },
    {
      q: "15. Marketing support ଦିଅନ୍ତି କି?",
      a: "ହଁ, branding ଏବଂ sales strategy ପାଇଁ ମଧ୍ୟ ଆମେ support ପ୍ରଦାନ କରୁ।"
    },
    {
      q: "16. Bhubaneswar ର କେଉଁ climate mushroom farming ପାଇଁ best?",
      a: "Monsoon (June-Sept) ର humid climate Oyster ଓ Milky Mushroom ପାଇଁ ଆଦର୍ଶ, ଏବଂ Winter (Nov-Feb) Button Mushroom ପାଇଁ suitable।"
    },
    {
      q: "17. Medicinal mushroom cultivation profitable କି?",
      a: "ହଁ, wellness market ରେ demand ବଢୁଥିବାରୁ Reishi, Cordyceps, Lion's Mane ଭଳି medicinal mushroom ର premium value ରହିଛି।"
    },
    {
      q: "18. Dry mushroom ର shelf life କେତେ?",
      a: "ସଠିକ ଭାବେ dehydrate ଓ store କରାଗଲେ dry mushroom ମାସ ମାସ ଧରି store ହୋଇପାରେ।"
    },
    {
      q: "19. Cuttack ଓ Khordha ର ଲୋକମାନେ training ପାଇପାରିବେ କି?",
      a: "ହଁ, Cuttack, Khordha, Jatni, Pipili ସମେତ ସମଗ୍ର ଓଡ଼ିଶାରୁ ଲୋକମାନେ Online ବା Offline training ପାଇପାରିବେ।"
    },
    {
      q: "20. FPO ମାନେ bulk spawn order କରିପାରିବେ କି?",
      a: "ହଁ, Farmer Producer Organisation ମାନେ bulk order ଉପରେ special support ପାଇପାରନ୍ତି।"
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
              Mushroom Farming in Bhubaneswar, Odisha (ଭୁବନେଶ୍ୱରରେ ଛତୁ ଚାଷ)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Bhubaneswar, Cuttack, Khordha & Entire Coastal Odisha</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              Bhubaneswar, the capital of Odisha, is rapidly expanding with a booming hospitality sector, IT hubs, and health-conscious consumers. Because of this, the demand for organic, high-quality mushrooms—such as Paddy Straw (ପାଳ ଛତୁ), Oyster (ଡିଙ୍ଗିରି ଛତୁ), and Button mushrooms—is at an all-time high in local markets, supermarkets, and restaurants across the Twin Cities (Bhubaneswar-Cuttack).
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              Odisha's humid climate naturally supports mushroom cultivation, making it one of the most profitable agribusiness opportunities in the state. Whether you are a farmer looking to utilize paddy straw or an entrepreneur setting up a commercial high-tech farm, this guide provides the exact roadmap.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Understanding the Odisha Market (ବଜାର ର ଚାହିଦା)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              Odisha is traditionally famous for Paddy Straw Mushroom (Volvariella volvacea), which grows abundantly during the humid monsoons. However, its shelf life is extremely short (only a few hours). 
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              For a stable, round-the-year commercial business, <strong>Oyster Mushroom Cultivation (ଡିଙ୍ଗିରି ଛତୁ)</strong> and <strong>Button Mushroom Farming</strong> are the best choices. Oyster mushrooms are highly nutritious, easy to grow, and can be dried for long-term storage. Button mushrooms command premium prices in hotels and restaurants in Bhubaneswar.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Infrastructure: Commercial Farm Setup & Climate Control
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              To supply consistent volume to restaurants, you cannot depend only on natural weather. We specialize in <strong>Turnkey Mushroom Projects</strong>. By designing insulated PUF panel rooms and installing automated humidifiers (Smart Climate Control), you can grow high-value Button and Milky mushrooms even during the hot summers of Odisha.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Substrate & Straw Management (ନଡା/ପାଳ ର ବ୍ୟବହାର)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              Odisha produces a massive amount of paddy straw (ଧାନ ନଡା). This agricultural waste is the perfect raw material (substrate) for mushroom beds. We train you in proper Mushroom Compost Preparation techniques, ensuring maximum yield from local resources.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Training: The Most Important Step (ସଠିକ୍ ତାଲିମ୍)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4 font-medium">
              Mushroom cultivation is a science. Without proper training, contamination can ruin the crop.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Online Training:</strong> We provide detailed online mushroom training courses covering everything from substrate prep to market linkage.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Offline Training:</strong> Hands-on training where you physically learn how to manage temperature, humidity, and harvesting techniques safely.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Premium Spawn & Sales Strategy (ଉନ୍ନତ ମାନର ମଞ୍ଜି)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              Getting high-quality, disease-free Mushroom Spawn (ଛତୁ ମଞ୍ଜି) is critical. We supply premium F1 generation spawn directly to Bhubaneswar to ensure your crop yield is maximized.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              For marketing, target the local Unit-1 market, supermarkets, and organic stores. We also provide guidance on Government Subsidies available through the Odisha Horticulture Department.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-brand-blue pl-3">
              Frequently Asked Questions (FAQ - Bhubaneswar)
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
                Ready to Grow Your Agribusiness in Bhubaneswar?
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
