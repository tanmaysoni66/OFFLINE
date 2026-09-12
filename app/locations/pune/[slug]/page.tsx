import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { puneBlogs } from "../../../../src/data/puneBlogsData"; // Keep importing from legacy data file

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return puneBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = puneBlogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Not Found",
    };
  }

  const url = `https://organicmushroomsfarm.com/locations/pune/${slug}`;

  return {
    title: blog.title,
    description: blog.metaDesc,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: blog.title,
      description: blog.metaDesc,
      url: url,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: blog.title,
      description: blog.metaDesc,
    },
  };
}

export default async function PuneBlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = puneBlogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const url = `https://organicmushroomsfarm.com/locations/pune/${slug}`;

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
        "@id": `${url}#webpage`,
        url: url,
        name: blog.title,
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description: blog.metaDesc,
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
            name: "Maharashtra",
            item: "https://organicmushroomsfarm.com/states/maharashtra",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Pune",
            item: "https://organicmushroomsfarm.com/locations/pune",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: blog.h1,
            item: url,
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
        {/* Animated gradient or background visual element without covering the app's global background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-brand-blue transition-colors">
              Home
            </Link>
            <ChevronRight size={10} />
            <Link href="/states" className="hover:text-brand-blue transition-colors">
              States
            </Link>
            <ChevronRight size={10} />
            <Link href="/states/maharashtra" className="hover:text-brand-blue transition-colors">
              Maharashtra
            </Link>
            <ChevronRight size={10} />
            <Link href="/locations/pune" className="hover:text-brand-blue transition-colors">
              Pune
            </Link>
            <ChevronRight size={10} />
            <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[200px]">
              {blog.h1}
            </span>
          </nav>

          <Link
            href="/locations/pune"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold text-[11px] hover:gap-3 transition-all mb-8 bg-brand-blue/5 border border-brand-blue/10 px-4 py-2 rounded-xl"
          >
            <ArrowLeft size={12} /> Back to Pune Resources
          </Link>

          <div className="glass p-6 md:p-10 rounded-[2rem] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden bg-white/5 dark:bg-white/5 backdrop-blur-md">
            <header className="mb-8 relative z-10">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                {blog.h1}
              </h1>
            </header>

            <section className="mb-10 relative z-10">
              <p className="text-[12px] md:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed">
                {blog.intro}
              </p>
            </section>

            {blog.faq && blog.faq.length > 0 && (
              <section className="relative z-10 bg-black/5 dark:bg-black/20 p-6 rounded-2xl border border-black/5 dark:border-white/5">
                <h2 className="text-[14px] font-bold text-slate-900 dark:text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {blog.faq.map((item: any, index: number) => (
                    <div key={index} className="bg-white/40 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                      <h3 className="text-[12px] font-bold text-slate-900 dark:text-white mb-2">
                        {item.q}
                      </h3>
                      <p className="text-[11px] text-slate-700 dark:text-slate-400 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>
    </>
  );
}
