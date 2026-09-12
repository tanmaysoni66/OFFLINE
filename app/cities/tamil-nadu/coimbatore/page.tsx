import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Coimbatore | Training, Spawn & Setup",
  description:
    "Start mushroom farming in Coimbatore (Kovai). Expert online/offline training in Tamil, premium spawn supply, turnkey farm setup, and B2B marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/tamil-nadu/coimbatore",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Coimbatore | Training, Spawn & Setup",
    description:
      "Start mushroom farming in Coimbatore (Kovai). Expert online/offline training in Tamil, premium spawn supply, turnkey farm setup, and B2B marketing support.",
    url: "https://organicmushroomsfarm.com/cities/tamil-nadu/coimbatore",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Coimbatore | Training, Spawn & Setup",
    description:
      "Start mushroom farming in Coimbatore (Kovai). Expert online/offline training in Tamil, premium spawn supply, turnkey farm setup, and B2B marketing support.",
  },
};

export default function ArticleCoimbatoreTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/tamil-nadu/coimbatore#webpage",
        url: "https://organicmushroomsfarm.com/cities/tamil-nadu/coimbatore",
        name: "Mushroom Farming in Coimbatore | Training, Spawn & Setup",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start mushroom farming in Coimbatore (Kovai). Expert online/offline training in Tamil, premium spawn supply, turnkey farm setup, and B2B marketing support.",
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
            name: "Coimbatore",
            item: "https://organicmushroomsfarm.com/cities/tamil-nadu/coimbatore",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Coimbatore | Training, Spawn & Setup",
        description:
          "Start mushroom farming in Coimbatore (Kovai). Expert online/offline training in Tamil, premium spawn supply, turnkey farm setup, and B2B marketing support.",
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
          "@id": "https://organicmushroomsfarm.com/cities/tamil-nadu/coimbatore",
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
              Mushroom Farming in Coimbatore, Tamil Nadu (கோயம்புத்தூரில் காளான் வளர்ப்பு)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Coimbatore, Tiruppur, Pollachi, Mettupalayam & Western TN</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              கோயம்புத்தூர் (Coimbatore) – தமிழ்நாட்டின் தொழில் நகரமும், மேற்கு தொடர்ச்சி மலையின் அழகிய சீதோஷ்ண நிலையும் கொண்ட ஒரு சிறந்த இடம். இங்கே விவசாயத்துக்கும், புதிய பிசினஸுக்கும் எப்போதுமே ஒரு தனி மவுசு உண்டு. குறிப்பா, சமீப காலமா கோயம்புத்தூர், திருப்பூர், பொள்ளாச்சி பகுதிகளில் காளான் வளர்ப்பு (Mushroom Farming in Coimbatore) ஒரு சிறந்த மற்றும் லாபகரமான தொழிலா மாறிட்டு வருது.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              மக்கள் மத்தியில ஆர்கானிக் மற்றும் ஹெல்தியான உணவுகளுக்கான தேவை அதிகமாக இருக்குறதால, காளான் வியாபாரம் அடுத்த லெவலுக்கு போய்க்கிட்டு இருக்கு. நீங்க ஒரு விவசாயியா இருந்தாலும் சரி, இல்ல பிசினஸ்ல இறங்க நெனைக்கிற ஒரு புது என்டர்பிரனரா (Entrepreneur) இருந்தாலும் சரி, இந்த கைடு உங்களுக்கு ரொம்பவே உதவியா இருக்கும்!
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              எந்த காளான் வளர்க்கலாம்? (Mushroom Varieties)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              கோயம்புத்தூர்ல எல்லா விதமான காளான்களும் வளர்க்க முடியும். ஆனா, மார்க்கெட்ல டிமாண்ட் இருக்குறத பொறுத்து நீங்க முடிவு பண்ணனும்:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Milky Mushroom Farming (பால் காளான்):</strong> இது கோயம்புத்தூரோட வெயில் காலத்துக்கும், சாதாரண வெப்பத்துக்கும் செட் ஆகும். மார்க்கெட்ல நல்ல விலைக்கு போகுது.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Oyster Mushroom Cultivation (சிப்பிக் காளான்):</strong> சீக்கிரமா வளரும். புதுசா பழகுறவங்களுக்கு பெஸ்ட் சாய்ஸ்!</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Button Mushroom Farming:</strong> 5-ஸ்டார் ஹோட்டல்கள்ல பயங்கர டிமாண்ட். ஆனா, இதுக்கு கூலிங் செட்டப் (Smart Climate Control) கட்டாயம் தேவை.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Infrastructure: Commercial Farm Setup & Climate Control
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              காளான் வளர்க்க, டெம்பரேச்சர் (Temperature) மற்றும் ஈரப்பதம் (Humidity) ரொம்ப முக்கியம். வீட்ல சின்னதா ஆரம்பிக்கிறதா இருந்தா சாதாரண செட்டப் போதும். ஆனா, பெரிய லெவல்ல Commercial Mushroom Farm Setup பண்றப்போ, Humidifiers, AC Control, PUF Panels வெச்சு பண்ணுனா வருஷம் முழுக்க லாபம் பார்க்கலாம்.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Mushroom Spawn & Compost (விதையும், வைக்கோலும்)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-8">
              காளான் விதைக்கு (Mushroom Spawn Supply) எப்பவுமே நல்ல லேப்ல ரெடியான (Lab-tested) தரமான விதைகளை தான் வாங்கணும். அதே மாதிரி, Coimbatore ஏரியாக்கள்ல விவசாயம் அதிகமா இருக்குறதால வைக்கோல் ஈஸியா கிடைக்கும். அதை வெச்சு Mushroom Compost Preparation பண்றப்போ, முறையா சுத்தப்படுத்திட்டு (Sterilization) பயன்படுத்தணும்.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Training: கத்துக்காம களத்துல இறங்காதீங்க!
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4 font-medium">
              காளான் வளர்ப்பு ரொம்ப சிம்பிளா தெரிஞ்சாலும், அது ஒரு சயின்ஸ்! கொஞ்சமா அசால்ட்டா இருந்தாலும் ஃபங்கஸ் (Fungus/Contamination) வந்து மொத்த செட்டப்பும் நாசமாயிடும்.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Online Mushroom Training:</strong> வீட்ல இருந்தபடியே கத்துக்கலாம்.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Offline Mushroom Training:</strong> நேர்ல போயி, கையால செஞ்சு பழகுறது.</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Market Sales & Value Addition: காசை எப்படி பாக்குறது?
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6">
              காளானை வளர்த்தா மட்டும் போதாதுங்க, அதை எப்படி சேல்ஸ் பண்றோம்ங்குறதுல தான் நம்ம புத்திசாலித்தனமே இருக்கு.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Fresh Mushroom Sale:</strong> Coimbatore சிட்டிக்குள்ள இருக்குற பெரிய ஹோட்டல்கள், கேட்டரிங் பிசினஸ் மற்றும் ஆர்கானிக் மார்க்கெட்டுகளுக்கு டெய்லி சப்ளை பண்ணலாம்.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Dry Mushroom Sale & Value Addition:</strong> மீறுற காளான்களை Dry Mushrooms-ஆகவோ அல்லது Mushroom Powder ஆகவோ மாத்தி, Ready-to-Cook மசாலா பொருட்கள் தயாரிச்சு வித்தா லாபம் டபுள் ஆகும்!</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Project Consultation & Subsidies
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Business Plan & ROI:</strong> பிசினஸ்ல இறங்குறதுக்கு முன்னாடி Startup Capital எவ்ளோ, Revenue Potential எவ்ளோ வரும்னு ஒரு தெளிவான ப்ளூபிரின்ட் ரெடி பண்ணிக்கோங்க.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Government Subsidy:</strong> NHB மற்றும் அக்ரி டிபார்ட்மென்ட் மூலமா காளான் பண்ணை வைக்க சூப்பரான மானியங்கள் (Subsidies) கிடைக்குது.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Turnkey Projects & Consultancy:</strong> பெரிய லெவல்ல இன்வெஸ்ட் பண்ண நினைக்குறவங்களுக்கு, Farm Design-ல இருந்து எக்யூப்மென்ட் வரைக்கும் எல்லாத்தையும் நாங்க பாத்துக்குவோம்.</span>
              </li>
            </ul>

            <div className="bg-black/5 dark:bg-white/5 border border-brand-blue/20 p-6 md:p-8 rounded-2xl text-center mt-10">
              <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-bold">
                கொங்கு மாஸ் டிப்: நம்ம Saravanampatti அல்லது RS Puram-ல இருக்குற கஸ்டமர்களுக்கு "Fresh from Farm to Kitchen" அப்படிங்கிற கான்செப்ட்ல ஆன்லைன் மூலமா ஆர்டர் எடுத்து டெலிவரி பண்ணா, கஸ்டமர்கள் எப்பவும் நம்ம கையை விட்டு போக மாட்டாங்க!
              </p>
              <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-6">
                Ready to Grow Your Agribusiness in Coimbatore?
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
