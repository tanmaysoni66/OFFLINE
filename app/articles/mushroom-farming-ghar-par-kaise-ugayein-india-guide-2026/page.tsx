import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  ArrowLeft, Calendar, TrendingUp, ArrowRight, Sprout, Building, Wallet, Award, PlayCircle, ShieldAlert,
  ThermometerSun, Droplets, Wind, ListChecks, Pill, CheckCircle2, Factory, HelpCircle, ChevronRight, MessageCircle, AlertCircle
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming at Home in India | Complete 2026 Guide",
  description: "Ghar par mushroom kaise ugaye? Pura step-by-step 2026 guide: substrate pasteurization, seed selection, bag filling aur harvesting ke aasan tarike sikhein.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/articles/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming at Home in India | Complete 2026 Guide",
    description: "Ghar par mushroom kaise ugaye? Pura step-by-step 2026 guide: substrate pasteurization, seed selection, bag filling aur harvesting ke aasan tarike sikhein.",
    url: "https://organicmushroomsfarm.com/articles/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026",
    siteName: "Organic Mushroom Farm",
    locale: "hi_IN",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming at Home in India | Complete 2026 Guide",
    description: "Ghar par mushroom kaise ugaye? Pura step-by-step 2026 guide: substrate pasteurization, seed selection, bag filling aur harvesting ke aasan tarike sikhein.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://organicmushroomsfarm.com/#organization",
      name: "Organic Mushroom Farm",
      url: "https://organicmushroomsfarm.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://organicmushroomsfarm.com/#website",
      url: "https://organicmushroomsfarm.com",
      name: "Organic Mushroom Farm",
      publisher: {
        "@id": "https://organicmushroomsfarm.com/#organization",
      },
    },
    {
      "@type": "Article",
      "@id": "https://organicmushroomsfarm.com/articles/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026#article",
      url: "https://organicmushroomsfarm.com/articles/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026",
      headline: "How to Grow Mushrooms at Home in India: The Ultimate 2026 Guide",
      description: "Discover how to cultivate highly nutritious mushrooms right inside your house. The perfect beginner-friendly guide to zero-land organic farming in India.",
      datePublished: "2026-08-12T00:00:00+00:00",
      author: {
        "@type": "Person",
        name: "Tanish Soni"
      },
      publisher: {
        "@id": "https://organicmushroomsfarm.com/#organization"
      },
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/articles/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://organicmushroomsfarm.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Articles",
          item: "https://organicmushroomsfarm.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ghar Par Mushroom Kaise Ugayein",
        },
      ],
    },
  ],
};

const varietyTable = [
  { name: "Oyster Mushroom (Dhingri)", season: "Winter / Rainy (Sept to March)", temp: "15°C to 28°C", difficulty: "Beginner Friendly", price: "Rs. 150 - 250 / kg" },
  { name: "Button Mushroom (White)", season: "Strictly Winter (Nov to Feb)", temp: "14°C to 18°C", difficulty: "High / Requires AC/Compost", price: "Rs. 120 - 180 / kg" },
  { name: "Milky Mushroom (Dudhiya)", season: "Summer Only (April to August)", temp: "28°C to 35°C", difficulty: "Moderate (Casing required)", price: "Rs. 250 - 350 / kg" },
  { name: "Shiitake / Cordyceps", season: "Controlled Environment (AC)", temp: "20°C / 18°C", difficulty: "Expert Level (Lab setup)", price: "Rs. 1500+ / kg" }
];

const requirementsData = [
  { icon: <ThermometerSun size={20} className="text-orange-500" />, title: "Temperature (Taapman)", desc: "18°C se 25°C ke beech maximum varieties ke liye ideal environment. Zyada garmi (30°C+) mein bags contamination ho jata hai." },
  { icon: <Droplets size={20} className="text-blue-500" />, title: "Humidity (Nami)", desc: "80% se 90% hawa mein nami zaroori hai. Iske liye room mein floor par pani dalna ya misting spray nozzles ka use best hai." },
  { icon: <Wind size={20} className="text-teal-500" />, title: "Ventilation (Cross Air)", desc: "Mushroom CO2 chhodti hai aur Oxygen leti hai. Din mein 2 baar fresh hawa cross-ventilation ke through dena mandatory hai." },
  { icon: <ListChecks size={20} className="text-emerald-500" />, title: "Cleanliness (Hygiene)", desc: "Sabse important! Room ko Dettol, Formalin ya bleaching powder se mop karna chahiye. Gande hathon se touch na karein." }
];

const costItems = [
  { item: "Substrate (Bhusa / Parali) 500 Kg", cost: "Rs. 3,500" },
  { item: "High Quality Spawn Seeds (50 Kg)", cost: "Rs. 4,500" },
  { item: "Polythene Bags (PP Bags 5 KG cap)", cost: "Rs. 800" },
  { item: "Chemicals (Formalin, Bavistin)", cost: "Rs. 400" },
  { item: "Labor / Helpers (2 days filling)", cost: "Rs. 1,000" },
  { item: "Miscellaneous (Rubber bands, transport)", cost: "Rs. 1,800" }
];

const trainingTable = [
  { type: "Basic Online Video Module", duration: "Lifetime Access", mode: "Recorded HD App", fee: "Rs. 299 Only" },
  { type: "Live Doubt Session Webinar", duration: "2 Hours", mode: "Google Meet", fee: "Free with Module" },
  { type: "Physical Hands-On Farm Visit", duration: "1 Day (8 Hours)", mode: "Offline @ Jabalpur", fee: "Rs. 1500" },
  { type: "Master Commercial Blueprint", duration: "3 Days Camp", mode: "Offline + Book", fee: "Rs. 5000" }
];

const faqsList = [
  { q: "Q1. Kya mushroom ugane mein badbu (smell) aati hai?", a: "Nahi, agar aap Oyster ya Milky mushroom uga rahe hain (bhuse par), toh koi buri smell nahi aati. Sirf compost wale Button mushroom mein shuruat mein smell aa sakti hai." },
  { q: "Q2. Ghar ka kaunsa kamra best rahega?", a: "Koi bhi aisa kamra jisme direct tez dhoop na aati ho. Pukka room, kaccha ghar, ya bamboo shed sab chalega. Bas andhera aur thandak maintain honi chahiye." },
  { q: "Q3. Spawn (Beej) kahan se kharidein?", a: "Aap verified labs se ya seedha Organic Mushrooms Farm Jabalpur se pan-India order kar sakte hain. Sahi quality ka first-generation grain spawn lijiye." },
  { q: "Q4. Mujhe mushroom ka seed (spawn) kitna dalna chahiye?", a: "General rule: 1 kg sookha bhusa (dry straw) = 100 grams spawn. Agar bag mein 2 kg sookha bhusa hai toh 200 gm beej lagega." },
  { q: "Q5. Polythene bag mein ched (holes) kyun karte hain?", a: "Taaki mycelium (fungus ka jaal) ko saans lene ke liye oxygen mile aur pinheads wahi se bahar nikal sakein." },
  { q: "Q6. Mushroom grow hone mein kitna time lagta hai?", a: "Oyster mushroom bag banne ke baad 20-25 din mein mycelium run (safed jaal) complete karti hai, aur 30-35 din mein pehli harvest aa jati hai." },
  { q: "Q7. Kya hum AC room ke bina ugas sakte hain?", a: "Haan! Agar aap season ke hisab se variety select karein. Sardiyon mein Oyster aur garmiyon mein Milky bina AC natural temperature par badhiya grow hoti hain." },
  { q: "Q8. Ek bag se kitna yield (paidaish) milta hai?", a: "Sahi parameters par ek 1 kg dry straw ke bag se lagbhag 800 gm se 1 kg tak fresh mushroom total 3 flushes (tudai) mein mil jati hai." },
  { q: "Q9. Market mein mushroom kahan bechein?", a: "Local sabji mandi, hotels, fast-food wale, aur gym trainers raw items afford karte hain. Bacha hua dry karke powder ya online Amazon/Flipkart par FSSAI license ke through sale hota hai." },
  { q: "Q10. Training lena compulsory hai kya?", a: "Technically no, but practically YES. Chhoti mistakes jaise contamination ya over-watering pura batch barbad kar sakti hai. 299 rs ka basic training lifetime ke losses se bacha leta hai." }
];

export default function ArticleGharParMushroomFarming() {
  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-[10px] md:text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide flex-wrap">
            <li>
              <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li>
              <Link href="/blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Articles
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li aria-current="page" className="text-slate-800 dark:text-slate-200 truncate font-semibold">
              Ghar Par Kaise Ugayein Guide
            </li>
          </ol>
        </nav>

        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-[11px] font-bold transition-colors uppercase tracking-widest"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Articles
          </Link>
        </div>

        {/* Article Container (Glassmorphism) */}
        <article className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-12 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-sm relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-500/20">
            <Award size={12} />
            Mushroom Training Guide 2026
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight tracking-tight">
            Mushroom Farming: Ghar Par Mushroom Kaise Ugayein — India Ka Sabse Complete Guide (2026)
          </h1>
          
          <p className="text-[12px] md:text-[13px] font-bold text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
            Discover how to cultivate highly nutritious mushrooms right inside your house. The perfect beginner-friendly guide to zero-land organic farming in India.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-10 border-b border-black/10 dark:border-white/10 pb-6">
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <Calendar size={14} className="text-emerald-600 dark:text-emerald-500" /> 
              August 12, 2026
            </span>
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500"></span>
              25 Min Read
            </span>
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500"></span>
              Tanish Soni
            </span>
          </div>

          <div className="space-y-8 text-[11px] md:text-[11.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            
            {/* Intro */}
            <section className="space-y-4">
              <p className="first-letter:text-5xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:text-emerald-600 dark:first-letter:text-emerald-400">
                Sochte ho mushroom farming karna hai lekin samajh nahi aata kahan se shuru karein? Ya fir bahut baar Google search kiya — <strong>how to grow mushroom at home</strong>, <strong>mushroom training center near me</strong>, <strong>government mushroom training center</strong>, <strong>button mushroom training center</strong> — lekin sahi aur seedha javab nahi mila? Toh yeh article sirf aapke liye hi likha gaya hai.
              </p>
              <p>
                Main Tanish hoon — <Link href="/" className="text-emerald-600 dark:text-emerald-400 hover:underline font-bold">Organic Mushrooms Farm, Jabalpur</Link> ka founder. 2021 se hum mushroom farming segment mein act kar rahe hain aur hazaron farmers aur enthusiasts ko offline-online train kar chuke hain. Is absolute guide mein maine apna professional business setup ka secret experience nichodh kar daal diya hai jo kisi bhi absolute beginner ko first harvest ready karne ke liye mandatory hai. Seedha, bina kisi faltu ke words ke.
              </p>
            </section>

            {/* Why Farming */}
            <section className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/20 p-6 md:p-8 rounded-3xl space-y-5">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="text-emerald-600 dark:text-emerald-400" size={20} /> Mushroom Farming Kyun? — Pehle Yeh Samjho
              </h2>
              <p>
                Bahut log poochte hain — kya mushroom business such mein profitable hai? Mera clear answer hai — <strong>bhai safe parameters se professional level pe build karo toh yeh ek sone ki khandan hai.</strong> Aur ghar par ugana koi rocket science nahi hai.
              </p>
              <p>
                Keval <strong>500 square feet ki space</strong> mein, simple logical system se 1000 bags setup ke saath, aap monthly <strong>Rs. 30,000 se Rs. 60,000 net profit</strong> aaraam se generate kar sakte ho. Button mushroom, oyster mushroom, milky mushroom ka demand market mein har ek season mein badh raha hai.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 text-[10px]">
                {[
                  { title: "Space Requirements", desc: "Kam jagah chahiye - keval 500 sq ft mein easily shuru ho sakta hai" },
                  { title: "Yield Turnaround", desc: "Jaldi return milta hai - Oyster mushroom 45-60 din mein ready fast-yield" },
                  { title: "Season Stability", desc: "Mausam ka jhanjhat nahi - 12 Months non-stop indoor artificial atmosphere produce possible" },
                  { title: "Govt Backing", desc: "Subsidy and support options - NABARD, PMEGP, and state subsidy systems ready" },
                  { title: "Foreign Demand", desc: "Export margins are heavy - UAE, UK, USA, Canada mein dry mushroom ki heavy raw demand" },
                  { title: "Organic Premium Edge", desc: "Normal rate comparison mein organic products 2x pricing value pe standard retail out hoti hain" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/50 dark:bg-black/40 p-4 rounded-xl border border-black/5 dark:border-white/5">
                    <span className="uppercase font-bold text-slate-500 dark:text-slate-400 block mb-1">{stat.title}</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{stat.desc}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Link href="/roi-calculator" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl transition-colors">
                  Try Interactive ROI Calculator <ArrowRight size={14} />
                </Link>
              </div>
            </section>

            {/* Variety Guide */}
            <section className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-10 border-l-4 border-emerald-500 pl-3">
                <Sprout className="text-emerald-600 dark:text-emerald-400" size={20} /> Variety Selector Guide
              </h2>
              <p>
                Har ek mushroom variety ki requirements pure range scale par alag hoti hain. Local climate of your state coordinates ke hisab se select are very mandatory.
              </p>
              <div className="overflow-x-auto border border-black/10 dark:border-white/10 rounded-2xl bg-white/30 dark:bg-black/20">
                <table className="w-full text-left text-[10.5px]">
                  <thead>
                    <tr className="bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10 text-emerald-700 dark:text-emerald-400 font-bold">
                      <th className="p-3">Mushroom Variety</th>
                      <th className="p-3">Best Natural Season</th>
                      <th className="p-3">Target Temperature</th>
                      <th className="p-3">Difficulty Level</th>
                      <th className="p-3">Average Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5 dark:divide-white/5">
                    {varietyTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/50 dark:hover:bg-white/5">
                        <td className="p-3 font-bold text-slate-900 dark:text-white">{row.name}</td>
                        <td className="p-3">{row.season}</td>
                        <td className="p-3">{row.temp}</td>
                        <td className="p-3">{row.difficulty}</td>
                        <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Room Requirements */}
            <section className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-10 border-l-4 border-emerald-500 pl-3">
                <Building className="text-emerald-600 dark:text-emerald-400" size={20} /> Room Setup Requirements
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {requirementsData.map((req, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-2xl bg-white/30 dark:bg-white/5 border border-black/5 dark:border-white/5">
                    <div className="bg-white dark:bg-black/40 p-2 rounded-lg h-fit border border-black/5 dark:border-white/5">
                      {req.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-[12px] mb-1">{req.title}</h4>
                      <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed">{req.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6 Steps Formula */}
            <section className="space-y-5">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-10 border-l-4 border-emerald-500 pl-3">
                <ListChecks className="text-emerald-600 dark:text-emerald-400" size={20} /> 6-Step Core Cultivation Formula
              </h2>
              
              <div className="space-y-4">
                <div className="relative pl-6 border-l-2 border-emerald-500">
                  <span className="absolute -left-2.5 top-0 bg-emerald-500 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]">1</span>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Substrate Selection (Bhusa Chunna)</h3>
                  <p>Aap gehu ka bhusa (wheat straw), dhaan ki parali (paddy straw), ya ganne ka bagasse use kar sakte hain. Bhusa naya, sookha, aur sunhera (golden) hona chahiye. Fafund laga hua purana bhusa bilkul use na karein.</p>
                </div>
                <div className="relative pl-6 border-l-2 border-emerald-500">
                  <span className="absolute -left-2.5 top-0 bg-emerald-500 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]">2</span>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Pasteurization (Nirjeevikaran)</h3>
                  <p>Mushroom lagane se pehle bhuse ki saari bimariyan marni padti hain. Iske 2 methods hain: <strong>Chemical method</strong> (Bavistin + Formalin) aur <strong>Boiling/Steam method</strong> (paani ko 80°C pe ubalna). Bhuse ko 12 se 18 ghante paani mein bhigoya jata hai.</p>
                </div>
                <div className="relative pl-6 border-l-2 border-emerald-500">
                  <span className="absolute -left-2.5 top-0 bg-emerald-500 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]">3</span>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Drying (Paani Sukhana)</h3>
                  <p>Bhuse ko baahar nikal kar saaf farsh par failayein. Isme utni nami bachni chahiye ki mutthi mein dabane par pani na tapke, par hath geela ho jaye (approx 60-65% moisture).</p>
                </div>
                <div className="relative pl-6 border-l-2 border-emerald-500">
                  <span className="absolute -left-2.5 top-0 bg-emerald-500 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]">4</span>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Spawning (Beej Milana)</h3>
                  <p>16x18 inch ke PP polythene bags lein. Bhuse ki ek layer (2-3 inch) dalein, uske kinaron par <Link href="/spawn-seed" className="text-emerald-600 dark:text-emerald-400 hover:underline">quality spawn (beej)</Link> bikherein. Phir bhusa, phir beej. Ek bag mein 3-4 layers banti hain.</p>
                </div>
                <div className="relative pl-6 border-l-2 border-emerald-500">
                  <span className="absolute -left-2.5 top-0 bg-emerald-500 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]">5</span>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Incubation (Andhera Kamra)</h3>
                  <p>Bags ko rubber band se tightly band karein, unme 10-15 holes (ched) karein. Inhe andhere kamre mein 20-25 din ke liye rakh dein jahan temp 25°C ke aaspaas ho. Pura bag safed (mycelium) ho jayega.</p>
                </div>
                <div className="relative pl-6 border-l-2 border-emerald-500">
                  <span className="absolute -left-2.5 top-0 bg-emerald-500 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]">6</span>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Fruiting & Harvesting (Tudai)</h3>
                  <p>Jab bag pura safed ho jaye toh fresh air aur thodi light deni shuru karein. Din mein 2 baar misting karein. 5-7 din mein mushrooms nikal aayenge. Unhe halke hath se twist karke harvest karein.</p>
                </div>
              </div>
            </section>

            {/* Costing & ROI */}
            <section className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-10 border-l-4 border-emerald-500 pl-3">
                <Wallet className="text-emerald-600 dark:text-emerald-400" size={20} /> 500 Bags (100 Kg) Production Cost Estimate
              </h2>
              <div className="overflow-x-auto border border-black/10 dark:border-white/10 rounded-2xl bg-white/30 dark:bg-black/20">
                <table className="w-full text-left text-[10.5px]">
                  <thead>
                    <tr className="bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10 text-emerald-700 dark:text-emerald-400 font-bold">
                      <th className="p-3">Raw Cost Category Items</th>
                      <th className="p-3">Amount Costing (Rs.)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5 dark:divide-white/5">
                    {costItems.map((item, id) => (
                      <tr key={id} className="hover:bg-white/50 dark:hover:bg-white/5">
                        <td className="p-3">{item.item}</td>
                        <td className="p-3 font-bold font-mono">{item.cost}</td>
                      </tr>
                    ))}
                    <tr className="bg-emerald-500/10 font-bold text-emerald-700 dark:text-emerald-400">
                      <td className="p-3">TOTAL RAW INPUT EXPENSE</td>
                      <td className="p-3 font-mono">Rs. 12,000 - 17,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-5 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-3">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">💰 Net Return Matrix Breakdown</h3>
                <div className="grid sm:grid-cols-4 gap-2 text-[10px]">
                  <div className="bg-white dark:bg-black/40 p-3 rounded-xl border border-black/5 dark:border-white/5 text-center">
                    <span className="text-slate-500 dark:text-slate-400 font-bold block mb-1 uppercase">Expected Total Yield</span>
                    <span className="font-bold text-teal-600 dark:text-teal-400">175 Kg Average</span>
                  </div>
                  <div className="bg-white dark:bg-black/40 p-3 rounded-xl border border-black/5 dark:border-white/5 text-center">
                    <span className="text-slate-500 dark:text-slate-400 font-bold block mb-1 uppercase">Wholesale Rev (@100/kg)</span>
                    <span className="font-bold text-yellow-600 dark:text-yellow-400">Rs. 17,500</span>
                  </div>
                  <div className="bg-white dark:bg-black/40 p-3 rounded-xl border border-black/5 dark:border-white/5 text-center">
                    <span className="text-slate-500 dark:text-slate-400 font-bold block mb-1 uppercase">Retail Rev (@180/kg)</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">Rs. 31,500</span>
                  </div>
                  <div className="bg-white dark:bg-black/40 p-3 rounded-xl border border-black/5 dark:border-white/5 text-center">
                    <span className="text-slate-500 dark:text-slate-400 font-bold block mb-1 uppercase">Net Profit Range</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">Rs. 500 - 14,500</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Training Courses */}
            <section className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-10 border-l-4 border-emerald-500 pl-3">
                <Award className="text-emerald-600 dark:text-emerald-400" size={20} /> Professional Training Courses Offered
              </h2>
              <div className="overflow-x-auto border border-black/10 dark:border-white/10 rounded-2xl bg-white/30 dark:bg-black/20">
                <table className="w-full text-left text-[10.5px]">
                  <thead>
                    <tr className="bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10 text-emerald-700 dark:text-emerald-400 font-bold">
                      <th className="p-3">Training Type Program</th>
                      <th className="p-3">Duration</th>
                      <th className="p-3">Mode Options</th>
                      <th className="p-3">Fee Structures</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5 dark:divide-white/5">
                    {trainingTable.map((row, i) => (
                      <tr key={i} className="hover:bg-white/50 dark:hover:bg-white/5">
                        <td className="p-3 font-bold text-slate-900 dark:text-white">{row.type}</td>
                        <td className="p-3">{row.duration}</td>
                        <td className="p-3">{row.mode}</td>
                        <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">{row.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <Link href="/workshop" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] px-6 py-3 rounded-xl transition-colors">
                  <PlayCircle size={16} /> Register Basic Join Program [Rs. 299]
                </Link>
              </div>
            </section>

            {/* Govt & Subsidy Options */}
            <section className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-10 border-l-4 border-emerald-500 pl-3">
                <ShieldAlert className="text-emerald-600 dark:text-emerald-400" size={20} /> Govt Training & Subsidy Options
              </h2>
              <p>Agar aapko free mein training chahiye, toh har state mein <strong>KVK (Krishi Vigyan Kendra)</strong> hote hain jahan free programs run hote hain. Par commercial scale par subsidies ke liye apke paas project report hona chahiye.</p>
              <ul className="grid sm:grid-cols-2 gap-3 mt-3">
                <li className="flex items-center gap-2 p-3 rounded-xl border border-black/5 dark:border-white/5 bg-white/20 dark:bg-white/5">
                  <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400" />
                  <span>National Horticulture Board (NHB) - up to 40%</span>
                </li>
                <li className="flex items-center gap-2 p-3 rounded-xl border border-black/5 dark:border-white/5 bg-white/20 dark:bg-white/5">
                  <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400" />
                  <span>PMEGP Loan Scheme - Subsidies for MSMEs</span>
                </li>
                <li className="flex items-center gap-2 p-3 rounded-xl border border-black/5 dark:border-white/5 bg-white/20 dark:bg-white/5">
                  <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400" />
                  <span>NABARD Supported agricultural setups</span>
                </li>
                <li className="flex items-center gap-2 p-3 rounded-xl border border-black/5 dark:border-white/5 bg-white/20 dark:bg-white/5">
                  <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400" />
                  <span>State Agri-Departments local subsidy blocks</span>
                </li>
              </ul>
            </section>

            {/* FAQs using native Details/Summary for zero JS interactivity */}
            <section className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-12 border-l-4 border-emerald-500 pl-3">
                <HelpCircle className="text-emerald-600 dark:text-emerald-400" size={20} /> FAQ — Sabse Zyada Pooche Jaane Wale Sawaal
              </h2>
              <div className="space-y-3">
                {faqsList.map((faq, i) => (
                  <details key={i} className="group rounded-2xl border border-black/5 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] overflow-hidden">
                    <summary className="w-full text-left p-4 cursor-pointer flex justify-between items-center outline-none hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors list-none font-bold text-slate-900 dark:text-white text-[11.5px]">
                      {faq.q}
                      <span className="text-emerald-500 shrink-0 font-bold transition-transform group-open:rotate-180">
                        ▼
                      </span>
                    </summary>
                    <div className="p-4 bg-white/50 dark:bg-black/40 border-t border-black/5 dark:border-white/5 text-[10.5px] dark:text-slate-300 text-slate-700 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Ecosystem Links */}
            <section className="p-6 md:p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-950/10 border border-emerald-500/10 text-center space-y-5 mt-10">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Our Complete Integrated Ecosystem for Mushroom Growers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px]">
                {[
                  { text: "👨‍🌾 Master Training Programs", link: "/training" },
                  { text: "🧪 Lab-Certified Spawn Supply", link: "/spawn-seed" },
                  { text: "🏗 Turnkey Automated Setups", link: "/turnkey-projects" },
                  { text: "📈 Compost Units Specs", link: "/compost-unit-specs" },
                  { text: "📄 Download Business Plans", link: "/business-plan" },
                  { text: "📊 Exact ROI Calculators", link: "/roi-calculator" },
                  { text: "⭐ Farmers Success Stories", link: "/success-stories" },
                  { text: "📸 Video & Image Gallery", link: "/gallery" }
                ].map((l, i) => (
                  <Link key={i} href={l.link} className="p-3 rounded-xl bg-white dark:bg-black/40 border border-emerald-500/10 hover:border-emerald-500 dark:text-white text-slate-900 font-bold transition-colors truncate">
                    {l.text}
                  </Link>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="mt-12 p-8 rounded-3xl bg-emerald-600 text-center shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-black text-white mb-3">Farming Ka Best Season Aa Chuka Hai, Decision Lein!</h3>
                <p className="text-emerald-50 mb-6 text-[11px] max-w-2xl mx-auto">
                  Mushroom business badhane ka sabse behtareen tarika yahi hai ki aap pehle chhota practical direct hands-on batch setup karein. Sirf padhte mat raho!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="inline-flex px-6 py-3 bg-[#25D366] text-white hover:bg-[#20ba5a] font-bold rounded-full transition-colors items-center gap-2 text-[11px] border border-[#25D366]">
                    <MessageCircle size={14} /> WhatsApp Expert
                  </a>
                  <Link href="/workshop" className="inline-flex px-6 py-3 bg-white text-emerald-800 hover:bg-emerald-50 font-bold rounded-full transition-colors items-center gap-2 text-[11px]">
                    <PlayCircle size={14} /> Register Online Training (₹299)
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </article>
      </div>
    </main>
  );
}
