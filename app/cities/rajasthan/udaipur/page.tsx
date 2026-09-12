import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming in Udaipur, Rajasthan | Training & Spawn",
  description:
    "Start commercial mushroom farming in Udaipur, Rajasthan. Aravalli climate advantages, Hindi training, luxury hotel market linkages, and high-yield spawn.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/rajasthan/udaipur",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Udaipur, Rajasthan | Training & Spawn",
    description:
      "Start commercial mushroom farming in Udaipur, Rajasthan. Aravalli climate advantages, Hindi training, luxury hotel market linkages, and high-yield spawn.",
    url: "https://organicmushroomsfarm.com/cities/rajasthan/udaipur",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Udaipur, Rajasthan | Training & Spawn",
    description:
      "Start commercial mushroom farming in Udaipur, Rajasthan. Aravalli climate advantages, Hindi training, luxury hotel market linkages, and high-yield spawn.",
  },
};

export default function ArticleUdaipurTraining() {
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
        "@id": "https://organicmushroomsfarm.com/cities/rajasthan/udaipur#webpage",
        url: "https://organicmushroomsfarm.com/cities/rajasthan/udaipur",
        name: "Mushroom Farming in Udaipur, Rajasthan | Training & Spawn",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Start commercial mushroom farming in Udaipur, Rajasthan. Aravalli climate advantages, Hindi training, luxury hotel market linkages, and high-yield spawn.",
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
            name: "Udaipur",
            item: "https://organicmushroomsfarm.com/cities/rajasthan/udaipur",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Mushroom Farming in Udaipur, Rajasthan | Training & Spawn",
        description:
          "Start commercial mushroom farming in Udaipur, Rajasthan. Aravalli climate advantages, Hindi training, luxury hotel market linkages, and high-yield spawn.",
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
          "@id": "https://organicmushroomsfarm.com/cities/rajasthan/udaipur",
        },
      },
    ],
  };

  const faqs = [
    { q: "1. उदयपुर में मशरूम फार्मिंग शुरू करने में कितना खर्च आता है?", a: "शुरुआती तौर पर घरेलू या छोटे स्तर पर ₹5,000 - ₹10,000 से ऑयस्टर मशरूम शुरू कर सकते हैं। कमर्शियल हाई-टेक सेटअप के लिए बजट शेड और एसी यूनिट्स पर निर्भर करता है।" },
    { q: "2. उदयपुर की जलवायु मशरूम के लिए कैसे अनुकूल है?", a: "अरावली पहाड़ियों और झीलों के कारण उदयपुर की जलवायु पश्चिमी राजस्थान की तुलना में काफी नम और ठंडी रहती है। यहाँ सर्दियों में बटन व ऑयस्टर और गर्मियों में मिल्की मशरूम बहुत अच्छी उपज देते हैं।" },
    { q: "3. तैयार मशरूम को उदयपुर में कहाँ बेचें?", a: "उदयपुर के 5-स्टार लेक पैलेस होटल्स, डेस्टिनेशन वेडिंग रिसॉर्ट्स, कैफे और स्थानीय सब्जी मंडियों में ताजी मशरूम हाथों-हाथ ऊंचे दामों पर बिकती है।" },
    { q: "4. प्रमाणित बीज (स्पॉन) कहाँ से प्राप्त करें?", a: "Organic Mushrooms Farm द्वारा F1-Gen लैब-प्रमाणित स्पॉन उदयपुर और पूरे मेवाड़ संभाग में सुरक्षित और शीघ्र डिलीवर किया जाता है।" }
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
              Mushroom Farming in Udaipur (उदयपुर में मशरूम की खेती)
            </h1>
            <div className="flex items-center justify-center gap-2 text-brand-blue font-medium text-[12px] mb-8">
              <MapPin size={16} />
              <span>Serving Udaipur, Mewar, Rajsamand, Chittorgarh & Southern Rajasthan</span>
            </div>
          </header>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md">
            
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium">
              झीलों की नगरी उदयपुर (City of Lakes - Udaipur) अपने शाही महलों, विश्व प्रसिद्ध हेरिटेज होटलों और डेस्टिनेशन वेडिंग्स के लिए विख्यात है। यहाँ आने वाले लाखों देशी-विदेशी पर्यटकों और स्थानीय शुद्ध शाकाहारी परिवारों में उच्च गुणवत्ता वाली, जैविक व ताजी मशरूम की मांग तेजी से बढ़ रही है।
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-10 font-medium">
              अरावली पर्वतमाला की अनुकूल जलवायु और पानी की अत्यधिक बचत के कारण मशरूम की खेती (Mushroom Farming) उदयपुर और मेवाड़ क्षेत्र के किसानों, युवाओं और उद्यमियों के लिए एक अत्यंत लाभकारी इंडोर व्यवसाय बन चुकी है।
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Why Udaipur is a Prime Destination for Mushroom Farming
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>The Aravalli Climate Advantage:</strong> पश्चिमी राजस्थान के मुकाबले उदयपुर में तापमान अपेक्षाकृत संतुलित और हवा में नमी अधिक रहती है, जिससे क्लाइमेट कंट्रोल पर बिजली का खर्च कम होता है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Massive Hospitality Demand:</strong> उदयपुर के 5-स्टार लेकव्यू होटल्स, रॉयल रिसॉर्ट्स और कैफे में प्रतिदिन सैकड़ों किलो ताजी बटन और ऑयस्टर मशरूम की भारी मांग रहती है।</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Water-Efficient Farming:</strong> राजस्थान में पानी का संरक्षण बेहद जरूरी है; इंडोर वर्टिकल मशरूम फार्मिंग में पारंपरिक खेती की तुलना में 90% से अधिक पानी की बचत होती है।</span>
              </li>
            </ul>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Comprehensive Services We Offer
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">1. Practical Training in Hindi</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  गेहूं के भूसे का उपचार, स्पॉनिंग तकनीक, तापमान-नमी का प्रबंधन, हार्वेस्टिंग और पैकेजिंग का सम्पूर्ण व्यावहारिक मार्गदर्शन।
                </p>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">2. Premium Mushroom Spawn Supply</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  उदयपुर, राजसमंद और चित्तौड़गढ़ के लिए लैब-सर्टिफाइड F1-Gen बटन, ऑयस्टर और मिल्की मशरूम स्पॉन की समय पर डिलीवरी।
                </p>
              </div>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-2">3. Commercial Setups & Hotel Tie-Ups</h3>
                <p className="text-[12px] text-slate-700 dark:text-slate-300">
                  टर्नकी इंसुलेटेड फार्म प्लानिंग, राजस्थान हॉर्टिकल्चर सब्सिडी के लिए प्रोजेक्ट रिपोर्ट (DPR) और स्थानीय होटलों के साथ आपूर्ति नेटवर्क।
                </p>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[18px] font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-brand-blue pl-3">
              Coverage Across Udaipur & Mewar Region
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4">
              हम उदयपुर शहर और आसपास के सभी तहसीलों और औद्योगिक क्षेत्रों में सेवाएं प्रदान करते हैं:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>City Hubs:</strong> Fatehpura, Hiran Magri, Sukher, Madhuban, Bhuwana, Goverdhan Vilas, Saheli Nagar.</span>
              </li>
              <li className="flex items-start gap-3 text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span><strong>Mewar & Surrounding Belts:</strong> Mavli, Vallabhnagar, Girwa, Salumbar, Nathdwara, Rajsamand, Chittorgarh.</span>
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
                Ready to Start Your Mushroom Business in Udaipur?
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
