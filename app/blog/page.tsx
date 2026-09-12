import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, TrendingUp, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming Blog | Educational & Health Insights",
  description:
    "Read the latest articles on mushroom cultivation, health benefits of medicinal fungi, and market trends in the Indian agri-business sector.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming Blog | Educational & Health Insights",
    description:
      "Read the latest articles on mushroom cultivation, health benefits of medicinal fungi, and market trends in the Indian agri-business sector.",
    url: "https://organicmushroomsfarm.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming Blog | Educational & Health Insights",
    description:
      "Read the latest articles on mushroom cultivation, health benefits of medicinal fungi, and market trends in the Indian agri-business sector.",
  },
};

export default function BlogPage() {
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
        "@id": "https://organicmushroomsfarm.com/blog#webpage",
        url: "https://organicmushroomsfarm.com/blog",
        name: "Mushroom Farming Blog | Educational & Health Insights",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Read the latest articles on mushroom cultivation, health benefits of medicinal fungi, and market trends in the Indian agri-business sector.",
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
            name: "Blog",
            item: "https://organicmushroomsfarm.com/blog",
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
        {/* Animated Background without blocking text */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="mb-10 text-center">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
              Mushroom Farming Blog – Guides, Tips & Expert Insights
            </h1>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Explore practical mushroom farming guides, cultivation techniques, growing tips, farm setup ideas, harvesting methods, and business insights.
            </p>
          </header>

          <section className="glass bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-lg mb-8">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={16} className="text-brand-blue" />
              <h2 className="text-[12px] font-bold text-slate-900 dark:text-white uppercase tracking-widest">
                Practical Farming Guides
              </h2>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
              If you are just getting started, deciding between varieties is crucial. We highly recommend reading our detailed comparison on{" "}
              <Link href="/blog/button-mushroom-vs-oyster-mushroom" className="text-brand-blue font-semibold hover:underline">Button Mushroom vs Oyster Mushroom</Link>. 
              For those leaning towards high-yield and fast cycles, our guide on{" "}
              <Link href="/blog/oyster-mushroom-cultivation-india" className="text-brand-blue font-semibold hover:underline">Oyster Mushroom Cultivation in India</Link>{" "}
              and the step-by-step{" "}
              <Link href="/blog/oyster-mushroom-cultivation-process" className="text-brand-blue font-semibold hover:underline">Oyster Mushroom Cultivation Process</Link>{" "}
              will provide you with all necessary biological parameters.
            </p>
            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
              To scale up to year-round production, temperature management is essential. Learn about{" "}
              <Link href="/blog/smart-climate-control-automation-mushroom-growing" className="text-brand-blue font-semibold hover:underline">Smart Climate Control for Commercial Mushroom Growing</Link>{" "}
              and the comprehensive{" "}
              <Link href="/blog/button-mushroom-farming-guide" className="text-brand-blue font-semibold hover:underline">White Button Mushroom Farming Guide</Link>{" "}
              for AC-controlled setups. We also offer a highly requested{" "}
              <Link href="/blog/mushroom-training-guide-english" className="text-brand-blue font-semibold hover:underline">Advanced Mushroom Training Guide</Link>{" "}
              along with a detailed roadmap for{" "}
              <Link href="/articles/commercial-mushroom-farm-setup-training" className="text-brand-blue font-semibold hover:underline">Commercial Mushroom Farm Setup & Training</Link>.
            </p>
            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
              Education and certification add immense value to your agri-business. Find out more about obtaining a{" "}
              <Link href="/articles/mushroom-farming-training-online-offline-certificate" className="text-brand-blue font-semibold hover:underline">Mushroom Farming Training Online/Offline Certificate</Link>, 
              uncover the essentials in our article{" "}
              <Link href="/articles/organic-mushroom-farm-everything-you-need-to-know" className="text-brand-blue font-semibold hover:underline">Organic Mushroom Farm: Everything You Need to Know</Link>, 
              and download our official{" "}
              <Link href="/articles/white-button-mushroom-business-plan" className="text-brand-blue font-semibold hover:underline">White Button Mushroom Business Plan (Project Report)</Link>.
            </p>
          </section>

          <section className="glass bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-lg mb-8">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={16} className="text-brand-blue" />
              <h2 className="text-[12px] font-bold text-slate-900 dark:text-white uppercase tracking-widest">
                Industry Insights & News
              </h2>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
              The Indian mushroom industry is evolving rapidly. To understand the financial economics, start with our overarching{" "}
              <Link href="/blog/mushroom-farming-business-plan-india" className="text-brand-blue font-semibold hover:underline">Mushroom Farming Business Plan India</Link>{" "}
              and learn about the end-to-end execution of a{" "}
              <Link href="/blog/turnkey-commercial-setup" className="text-brand-blue font-semibold hover:underline">Turnkey Commercial Setup</Link>. 
              New entrepreneurs will benefit greatly from answering the fundamental question:{" "}
              <Link href="/articles/mushroom-farming-beginner-guide-india-2026-2027" className="text-brand-blue font-semibold hover:underline">What is Mushroom Farming? Complete Beginner Guide 2026-2027</Link>.
            </p>
            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
              Looking ahead, we have forecasted trends in our{" "}
              <Link href="/blog/10" className="text-brand-blue font-semibold hover:underline">Mushroom Farming in India 2027 — Complete Guide</Link>{" "}
              and analyzed the strategic{" "}
              <Link href="/blog/7" className="text-brand-blue font-semibold hover:underline">Future of Mushroom Farming in India 2027</Link>. 
              Once your harvest is ready, navigate the markets using our guide on{" "}
              <Link href="/blog/8" className="text-brand-blue font-semibold hover:underline">Selling Harvest in Local Mandis: A Practical Guide</Link>. 
              Additionally, regional farmers can maximize their CapEx by following our{" "}
              <Link href="/blog/9" className="text-brand-blue font-semibold hover:underline">Government Subsidies in MP: Step-by-Step Guide</Link>.
            </p>
          </section>

          <section className="glass bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-lg text-center">
            <div className="flex justify-center mb-3">
              <Mail size={24} className="text-brand-blue" />
            </div>
            <h2 className="text-[14px] font-bold text-slate-900 dark:text-white mb-2">Never Miss an Update</h2>
            <p className="text-[10px] text-slate-600 dark:text-slate-400 mb-4 max-w-sm mx-auto">
              Get the latest market price updates and farming SOPs delivered straight to your inbox.
            </p>
            <form 
              action="https://gmail.us3.list-manage.com/subscribe/post?u=1d6033f192756e322bdf749ea&amp;id=fb8e6fe459&amp;f_id=00cdcfe0f0" 
              method="post" 
              target="_blank"
              className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto"
            >
              <input 
                type="email" 
                name="EMAIL" 
                required 
                placeholder="Enter your email address" 
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[11px] rounded-lg px-4 py-2 text-slate-900 dark:text-white outline-none focus:border-brand-blue transition-colors"
              />
              <div aria-hidden="true" className="hidden">
                <input type="text" name="b_1d6033f192756e322bdf749ea_fb8e6fe459" tabIndex={-1} defaultValue="" />
              </div>
              <button 
                type="submit" 
                name="subscribe" 
                className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold text-[11px] px-6 py-2 rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </section>
        </article>
      </main>
    </>
  );
}

