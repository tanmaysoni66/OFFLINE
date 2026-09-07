import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Sprout, Phone, Mail, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Why Oyster Mushrooms Are Taking the Culinary & Farming World by Storm",
  description: "Discover the nutritional power and cultivation benefits of oyster mushrooms. Learn why they are a favorite for farmers and a delicious meat substitute.",
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/services/oyster-mushroom',
  }
};

export default function OysterMushroomServicePage() {
  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-12 relative z-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Section (Scaled down for less scrolling) */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest mb-3">
            <Sprout size={16} />
            <span>Mushroom Services</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black dark:text-white text-slate-900 mb-3 leading-tight tracking-tight">
            Why Oyster Mushrooms Are Taking the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Culinary & Farming World by Storm</span>
          </h1>
        </div>

        {/* Content Section (Using smaller text and tighter margins) */}
        <div className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
          <p className="font-semibold text-slate-700 dark:text-slate-200">
            Have you ever wondered why oyster mushrooms are suddenly everywhere? From high-end restaurant menus to local farmers' markets, these beautiful, fan-shaped fungi are having a major moment. And honestly? They completely deserve the hype.
          </p>
          <p>
            Whether you are a food lover looking to upgrade your meals or an aspiring grower stepping into organic mushroom farming, oyster mushrooms are the perfect starting point.
          </p>
          <p>
            Here is why everyone is falling in love with them—and why you should too!
          </p>

          <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-8 mb-3 border-l-4 border-purple-500 pl-3">
            A Nutritional Powerhouse
          </h2>
          <p>
            Don't let their delicate appearance fool you. Oyster mushrooms are packed with serious health benefits. They are naturally low in calories but loaded with protein, fiber, antioxidants, and essential B vitamins. For vegans and vegetarians, their meaty texture makes them an incredible, natural meat substitute that absorbs flavors and spices beautifully.
          </p>

          <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-8 mb-3 border-l-4 border-purple-500 pl-3">
            The Grower’s Favorite Fungus
          </h2>
          <p>
            If you have ever thought about mushroom cultivation, oyster mushrooms are your best friend. Why? Because they are famously forgiving and fast-growing.
          </p>
          
          <ul className="space-y-3 my-4">
            <li className="flex gap-2.5 items-start">
              <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={18} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-0.5">Easy to Cultivate:</strong>
                They grow aggressively on a variety of organic substrates (like straw or sawdust), beating out contaminants easily.
              </div>
            </li>
            <li className="flex gap-2.5 items-start">
              <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={18} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-0.5">Quick Harvest:</strong>
                Unlike other crops that take months, you can often see your first harvest of fresh oyster mushrooms in just a few weeks.
              </div>
            </li>
            <li className="flex gap-2.5 items-start">
              <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={18} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-0.5">High Yield:</strong>
                They produce abundantly, making them a highly profitable choice for commercial farming setups and a rewarding project for beginners.
              </div>
            </li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-8 mb-3 border-l-4 border-purple-500 pl-3">
            Experience the Organic Difference
          </h2>
          <p>
            Not all mushrooms are created equal. To get the best flavor, highest nutritional value, and safest crop, starting with high-quality, chemical-free methods is crucial.
          </p>
          <p>
            Whether you are looking for premium organic oyster mushrooms for your kitchen, or need expert guidance, training, and supplies to start your own successful grow room, we have you covered.
          </p>

          {/* CTA Box - Compact Design */}
          <div className="dark:bg-purple-900/10 bg-purple-50 p-6 rounded-2xl md:rounded-3xl border border-purple-500/20 text-center mt-8 shadow-lg">
            <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">Ready to explore the world of Oysters?</h2>
            <p className="dark:text-slate-300 text-slate-700 text-xs md:text-sm mb-5 max-w-xl mx-auto">
              Discover top-tier cultivation resources and fresh produce at <strong className="dark:text-white text-slate-900">Organic Mushrooms Farm - Oyster Mushroom Services</strong> today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 text-sm">
                <Phone size={16} /> WhatsApp Us
              </a>
              <Link href="/contact" className="w-full sm:w-auto bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 text-sm">
                <Mail size={16} /> Contact Us
              </Link>
            </div>
          </div>

        </div>
      </article>
    </div>
  );
}
