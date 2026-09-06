"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import CTASection from "../components/CTASection";

const images = [
  {
    src: "/images/rakeshsoniorganicmushroomfarmexperttraininer.webp",
    category: "Expert Training",
    alt: "Rakesh Soni Expert Mushroom Farming Trainer",
  },
  {
    src: "/images/mushroom360viewimage.jpeg",
    category: "Farm View",
    alt: "Commercial Mushroom Farm 360 Degree View",
  },
  {
    src: "/images/buttonmushroomspawn.webp",
    category: "Premium Spawn",
    alt: "High Quality Button Mushroom Spawn Seeds",
  },
  {
    src: "/images/buttonmushroomroommaking.webp",
    category: "Farm Construction",
    alt: "Button Mushroom Growing Room Construction Process",
  },
  {
    src: "/images/butoonmushroomvsoystermushroom.webp",
    category: "Mushroom Guide",
    alt: "Detailed Comparison Between Button Mushroom and Oyster Mushroom",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378182/Screenshot_2026-02-22_165327_bfm4pv.png",
    category: "Commercial Infrastructure",
    alt: "Commercial Infrastructure Setup Mushroom Farm",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/IMG_6265_svucsm.jpg",
    category: "All Types Mushroom",
    alt: "All Types High Yield Mushroom Farm",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378173/Screenshot_2026-01-17_125022_nvavd2.png",
    category: "Mushroom Harvesting",
    alt: "Mushroom Harvesting Process Commercial",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378147/img_5794_tjestw.png",
    category: "Enoki Setup",
    alt: "Indoor Mushroom Farming Enoki Setup",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378183/Screenshot_2026-01-17_141353_v8rgpt.png",
    category: "Organic Spawn",
    alt: "Organic Quality Spawn Seed Supply",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777382179/Screenshot_2026-04-24_201116_b29aci.png",
    category: "Commercial Training",
    alt: "Mushroom Farming Training Students Offline",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378173/Screenshot_2026-01-17_125022_nvavd2.png",
    category: "Harvest Process",
    alt: "Mushroom Harvest India",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378144/img_9856_er5mbe.png",
    category: "Turnkey Infrastructure",
    alt: "Turnkey Project Mushroom Facility India",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378148/img_6985_inr8qh.png",
    category: "Industrial Compost",
    alt: "Industrial Mushroom Compost Production",
  },
];

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-16 relative">
      {/* Page Hero */}
      <section className="relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border dark:border-emerald-500/30 border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
              Commercial Ecosystem Tour
            </div>
            <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight">
              Visualizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Success</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A glimpse into our commercial farms, expert training sessions, and high-quality organic produce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden glass border dark:border-white/10 border-black/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-85 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                      {img.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
