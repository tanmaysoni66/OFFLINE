import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare, Sun } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Bikaner, Rajasthan | Training & Spawn",
  description:
    "Discover high-profit indoor mushroom farming in Bikaner, Rajasthan. Water-efficient, climate-proof setups, seasonal varieties, premium spawn, and market linkages.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/rajasthan/bikaner",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Bikaner, Rajasthan | Training & Spawn",
    description:
      "Discover high-profit indoor mushroom farming in Bikaner, Rajasthan. Water-efficient, climate-proof setups, seasonal varieties, premium spawn, and market linkages.",
    url: "https://organicmushroomsfarm.com/cities/rajasthan/bikaner",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Bikaner, Rajasthan | Training & Spawn",
    description:
      "Discover high-profit indoor mushroom farming in Bikaner, Rajasthan. Water-efficient, climate-proof setups, seasonal varieties, premium spawn, and market linkages.",
  },
};

export default function ArticleBikanerTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/rajasthan/bikaner#webpage",
        url: "https://organicmushroomsfarm.com/cities/rajasthan/bikaner",
        name: "Mushroom Farming in Bikaner, Rajasthan | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Discover high-profit indoor mushroom farming in Bikaner, Rajasthan. Water-efficient, climate-proof setups, seasonal varieties, premium spawn, and market linkages.",
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
            name: "Rajasthan",
            item: "https://organicmushroomsfarm.com/states/rajasthan",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Bikaner",
            item: "https://organicmushroomsfarm.com/cities/rajasthan/bikaner",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Bikaner, Rajasthan | Training & Spawn",
        description:
          "Discover high-profit indoor mushroom farming in Bikaner, Rajasthan. Water-efficient, climate-proof setups, seasonal varieties, premium spawn, and market linkages.",
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
          "@id": "https://organicmushroomsfarm.com/cities/rajasthan/bikaner",
        },
      },
    ],
  };

  const faqs = [
    { q: "1. क्या बीकानेर के गर्म वातावरण में मशरूम उगाना संभव है?", a: "हाँ, बिल्कुल! गर्मियों में हीट-टॉलरेंट मिल्की मशरूम (Milky Mushroom) बिना एसी के आसानी से उगाई जा सकती है। सर्दियों में बटन और ऑयस्टर मशरूम बहुत कम लागत में बंपर पैदावार देती हैं।" },
    { q: "2. बीकानेर में पानी की कमी की समस्या कैसे दूर होती है?", a: "मशरूम की खेती पूरी तरह से इंडोर होती है और इसमें पारंपरिक फसलों की तुलना में 95% कम पानी की आवश्यकता होती है। पानी केवल हवा में नमी बनाए रखने के लिए स्प्रे किया जाता है।" },
    { q: "3. तैयार मशरूम बीकानेर में कहाँ बेची जा सकती है?", a: "बीकानेर के हेरिटेज होटलों, रिसॉर्ट्स, शादी-समारोह कैटरर्स, सब्जी मंडियों और स्थानीय सुपरमार्केट्स में ताजी मशरूम की भारी मांग है।" },
    { q: "4. अच्छी क्वालिटी का बीज (स्पॉन) कहाँ मिलेगा?", a: "Organic Mushrooms Farm द्वारा उच्च गुणवत्ता वाला F1-Gen सर्टिफाइड स्पॉन बीकानेर में सीधा किसानों और उद्यमियों तक डिलीवर किया जाता है।" }
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
              Mushroom Farming in Bikaner (बीकानेर में मशरूम की खेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <Sun size={16} />
              <span>Transforming the Thar Desert with High-Profit Indoor Agriculture</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              राजस्थान के ऐतिहासिक शहर बीकानेर (Bikaner) में परंपरागत कृषि पानी की कमी और अत्यधिक गर्मी के कारण हमेशा एक बड़ी चुनौती रही है। लेकिन आधुनिक इंडोर मशरूम फार्मिंग (Indoor Mushroom Farming) ने रेगिस्तानी क्षेत्र में कृषि का एक नया और बेहद लाभदायक विकल्प तैयार किया है।
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              मशरूम की खेती में जमीन की उपजाऊ क्षमता या भारी पानी की आवश्यकता नहीं होती। इसे बंद कमरों में लंबवत (Vertical racks) तरीके से उगाया जाता है, जिससे बीकानेर के किसान, युवा और महिलाएं बहुत कम लागत में लाखों का मुनाफा कमा रहे हैं।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Key Strategic Advantages for Bikaner
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>The Ultimate Low-Water Crop:</strong> पारंपरिक फसलों की तुलना में इसमें 95% कम पानी लगता है। बंद कमरे में स्प्रे और फॉगर्स से नमी बनाकर पूरा उत्पादन लिया जाता है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Seasonal Rotation Strategy:</strong> सर्दियों (नवंबर से फरवरी) में बिना एसी के बटन व ढींगरी मशरूम और गर्मियों में 35-40°C पर मिल्की मशरूम उगाकर 365 दिन उत्पादन किया जा सकता है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Tourism & Pure-Veg Demand:</strong> बीकानेर की हेरिटेज हवेलियां, पैलेस होटल्स और राजस्थान की शुद्ध शाकाहारी आबादी में प्रोटीन से भरपूर मशरूम की भारी खपत है।</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Hands-on Training in Hindi</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  भूसा शोधन (Substrate treatment), स्पॉनिंग, कमरों में नमी नियंत्रण और कीट प्रबंधन का संपूर्ण व्यावहारिक प्रशिक्षण।
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Certified Mushroom Spawn Supply</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  बीकानेर जिले में उच्च पैदावार देने वाले F1-Gen ऑयस्टर, मिल्की और बटन मशरूम स्पॉन की समय पर आपूर्ति।
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Insulated Farm Setup & Subsidies</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  रेगिस्तानी गर्मी से बचाव के लिए PUF-पैनल इंसुलेटेड चैंबर डिजाइन, हॉर्टिकल्चर विभाग सब्सिडी सहायता (DPR) और स्थानीय बाजार संपर्क।
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Coverage Across Bikaner District
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              हम बीकानेर शहर और आसपास के सभी उप-खंडों और कस्बों में सेवाएं प्रदान करते हैं:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>City Hubs:</strong> Kote Gate, Rani Bazar, Sadul Ganj, Pawanpuri, Gangashahr, Tilak Nagar, Nokha Road.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Tehsils & Rural Towns:</strong> Nokha, Kolayat, Lunkaransar, Sri Dungargarh, Khajuwala, Deshnoke.</span>
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
                Ready to Start Your Mushroom Business in Bikaner?
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
