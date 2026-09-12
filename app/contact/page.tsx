import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, ExternalLink, Info, MessageSquare, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Organic Mushroom Farm | Jabalpur & Pan India Support",
  description:
    "Contact our mushroom farming experts in Katangi, Jabalpur. We offer PAN India support for farm setups, training, spawn supply, and agribusiness consultancy.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Organic Mushroom Farm | Jabalpur & Pan India Support",
    description:
      "Contact our mushroom farming experts in Katangi, Jabalpur. We offer PAN India support for farm setups, training, spawn supply, and agribusiness consultancy.",
    url: "https://organicmushroomsfarm.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Organic Mushroom Farm | Jabalpur & Pan India Support",
    description:
      "Contact our mushroom farming experts in Katangi, Jabalpur. We offer PAN India support for farm setups, training, spawn supply, and agribusiness consultancy.",
  },
};

const faqs = [
  {
    q: "Where are you located?",
    a: "Our main commercial farm and training center is located in Katangi, Jabalpur, Madhya Pradesh, India. However, we provide farm setup services, consultancy, and training across Pan India."
  },
  {
    q: "Do you deliver mushroom spawn (seeds) pan India?",
    a: "Yes, we dispatch high-quality, 1st generation (F1) commercial mushroom spawn to almost all major states and cities across India with secure packaging to maintain viability."
  },
  {
    q: "Can I visit your farm for a consultation?",
    a: "Yes, site visits and on-site consultations are available by appointment only. Please contact us via phone or WhatsApp to schedule your visit beforehand."
  },
  {
    q: "How can I enroll in your training programs?",
    a: "We offer both online and offline (hands-on) training programs. You can check the 'Training' section on our website for current batches or directly message us on WhatsApp for enrollment details."
  },
  {
    q: "Do you provide turnkey farm setup services?",
    a: "Yes, we specialize in complete end-to-end commercial mushroom farm setups including climate control integration, infrastructure design, and operational SOP implementation."
  }
];

export default function ContactPage() {
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
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9203544140",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://organicmushroomsfarm.com/#localbusiness",
        name: "Organic Mushrooms Farm",
        image: "https://organicmushroomsfarm.com/icon.png",
        telephone: "+91-9203544140",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Katangi",
          addressLocality: "Jabalpur",
          addressRegion: "Madhya Pradesh",
          postalCode: "483105",
          addressCountry: "IN",
        },
        url: "https://organicmushroomsfarm.com/",
      },
      {
        "@type": "WebPage",
        "@id": "https://organicmushroomsfarm.com/contact#webpage",
        url: "https://organicmushroomsfarm.com/contact",
        name: "Contact Organic Mushroom Farm | Jabalpur & Pan India Support",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        description:
          "Contact our mushroom farming experts in Katangi, Jabalpur. We offer PAN India support for farm setups, training, spawn supply, and agribusiness consultancy.",
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
            name: "Contact",
            item: "https://organicmushroomsfarm.com/contact",
          },
        ],
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
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
        </div>

        <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-slate-700 dark:text-slate-300 text-[10px] md:text-[11px] font-bold mb-6 border border-black/10 dark:border-white/10 backdrop-blur-sm">
              <MessageSquare size={14} className="text-brand-blue" />
              <span>24/7 Support Available</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              Get in Touch with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-500">Experts</span>
            </h1>
            <p className="text-[12px] md:text-[14px] text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Whether you need consultation for a commercial setup, premium spawn, or specialized training, our technical team is ready to assist you across India.
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information Cards */}
            <div className="glass p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/5 dark:bg-white/5 backdrop-blur-md relative overflow-hidden shadow-xl lg:col-span-1 flex flex-col gap-8">
              
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-1">Direct Support</h3>
                  <a href="tel:+919203544140" className="text-[13px] text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors font-medium">
                    +91 92035 44140
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-1">WhatsApp</h3>
                  <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="text-[13px] text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors font-medium">
                    +91 92035 44140
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-1">Main Facility</h3>
                  <p className="text-[12px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    Organic Mushroom Farm<br />
                    Katangi, Jabalpur<br />
                    Madhya Pradesh - 483105, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-1">Working Hours</h3>
                  <p className="text-[12px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    Monday - Saturday<br />
                    9:00 AM - 6:00 PM (IST)
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Actions & Map */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              
              <div className="grid sm:grid-cols-2 gap-6">
                 <Link href="/on-site-consultation" className="group glass p-6 rounded-3xl border border-black/5 dark:border-white/5 bg-white/5 dark:bg-white/5 backdrop-blur-md shadow-lg hover:shadow-brand-blue/5 transition-all">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <MapPin size={18} />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-[14px] mb-2">Book Site Visit</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-4">
                      Schedule a physical tour of our commercial facility in Jabalpur.
                    </p>
                    <span className="text-brand-blue text-[11px] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Schedule Now <ChevronRight size={12} />
                    </span>
                 </Link>
                 
                 <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="group glass p-6 rounded-3xl border border-black/5 dark:border-white/5 bg-white/5 dark:bg-white/5 backdrop-blur-md shadow-lg hover:shadow-[#25D366]/5 transition-all">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <MessageSquare size={18} />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-[14px] mb-2">WhatsApp Consultation</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-4">
                      Chat directly with our farm experts for quick queries and quotes.
                    </p>
                    <span className="text-[#25D366] text-[11px] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Start Chat <ChevronRight size={12} />
                    </span>
                 </a>
              </div>

              {/* Map View */}
              <div className="glass p-2 rounded-3xl border border-black/5 dark:border-white/5 bg-white/5 dark:bg-white/5 backdrop-blur-md shadow-xl overflow-hidden h-[300px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117260.67137000781!2d79.74239857731737!3d23.303986377725838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a38435d79901%3A0xc312ecf9eb1d25c4!2sOrganic%20Mushroom%20Farm!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  className="w-full h-full rounded-[1.25rem] border-0" 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Organic Mushroom Farm Location Map"
                ></iframe>
                <a href="https://maps.app.goo.gl/z7oQHSoLbCL9H4ov8?g_st=ic" target="_blank" rel="noopener noreferrer" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-slate-900 px-6 py-2 rounded-full text-[11px] font-bold shadow-2xl flex items-center gap-2 hover:bg-slate-50 transition-colors">
                  Open in Google Maps <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-white/5 dark:bg-white/5 backdrop-blur-md shadow-sm">
                  <h3 className="font-bold text-[14px] text-slate-900 dark:text-white mb-3 flex items-start gap-3">
                    <span className="text-brand-blue shrink-0 mt-0.5"><Info size={16} /></span>
                    {faq.q}
                  </h3>
                  <p className="text-[12px] text-slate-600 dark:text-slate-400 pl-7 leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </article>
      </main>
    </>
  );
}
