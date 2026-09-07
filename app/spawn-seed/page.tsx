import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Sprout, Phone, Mail, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "The Secret to Bountiful Organic Mushrooms: Right Spawn | Organic Mushroom Farm",
  description: "Learn why quality mushroom spawn is the foundation of a successful harvest. Fast colonization, maximum yields, and where to buy the best organic spawn.",
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/spawn-seed',
  }
};

export default function SpawnSeedPage() {
  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-12 relative z-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Section (Scaled down for less scrolling) */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest mb-3">
            <Sprout size={16} />
            <span>Spawn & Seeds</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black dark:text-white text-slate-900 mb-3 leading-tight tracking-tight">
            The Secret to Bountiful Organic Mushrooms: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">It All Starts with the Right Spawn</span>
          </h1>
        </div>

        {/* Content Section (Using smaller text and tighter margins) */}
        <div className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
          <p className="font-semibold text-slate-700 dark:text-slate-200">
            If you are stepping into the rewarding world of organic mushroom farming, there is one crucial element you simply cannot compromise on: <strong>Mushroom Spawn</strong>.
          </p>
          <p>
            Often referred to as the "seed" of the mushroom, spawn is the absolute foundation of your crop. Whether you are a weekend hobbyist or scaling up a commercial farm, your harvest will only ever be as good as the material you start with.
          </p>
          <p>
            Here is everything you need to know about setting your farm up for success!
          </p>

          <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-8 mb-3 border-l-4 border-purple-500 pl-3">
            What Exactly is Mushroom Spawn?
          </h2>
          <p>
            Unlike plants, mushrooms don't grow from traditional seeds. Instead, they grow from spores, which are then cultivated into mycelium (the root-like system of a fungus).
          </p>
          <p>
            Spawn is simply a carrier—usually sterilized grain, sawdust, or wooden plugs—that has been fully colonized by this mycelium. When you introduce this spawn to your growing medium (substrate), it explodes into life, eventually fruiting into the delicious organic mushrooms you love.
          </p>

          <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-8 mb-3 border-l-4 border-purple-500 pl-3">
            Why Quality Spawn is a Game-Changer
          </h2>
          <p>
            Sourcing your mushroom seed from a reliable, organic provider isn't just an option; it's a necessity. Here is why premium spawn makes all the difference:
          </p>
          
          <ul className="space-y-3 my-4">
            <li className="flex gap-2.5 items-start">
              <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={18} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-0.5">Faster Colonization:</strong>
                Vigorous, healthy mycelium spreads rapidly through your substrate, beating out competing molds and bacteria before they can take hold.
              </div>
            </li>
            <li className="flex gap-2.5 items-start">
              <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={18} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-0.5">Maximum Yields:</strong>
                Top-tier spawn carries superior genetics, translating to more frequent "flushes" and significantly larger mushrooms.
              </div>
            </li>
            <li className="flex gap-2.5 items-start">
              <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={18} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-0.5">Guaranteed Consistency:</strong>
                High-quality spawn ensures you get the exact strain you paid for, behaving predictably in your grow room every single time.
              </div>
            </li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-8 mb-3 border-l-4 border-purple-500 pl-3">
            Tips for Choosing the Right "Seed"
          </h2>
          <p>When browsing for spawn, always look for:</p>
          
          <ul className="space-y-3 my-4">
            <li className="flex gap-2.5 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-2"></div>
              <div>
                <strong className="dark:text-white text-slate-900">Freshness:</strong> The mycelium should look bright white and healthy.
              </div>
            </li>
            <li className="flex gap-2.5 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-2"></div>
              <div>
                <strong className="dark:text-white text-slate-900">Purity:</strong> Avoid bags with green, pink, or black patches, as this indicates contamination.
              </div>
            </li>
            <li className="flex gap-2.5 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-2"></div>
              <div>
                <strong className="dark:text-white text-slate-900">Organic Origins:</strong> To grow truly organic mushrooms, your starting culture must also be cultivated in clean, chemical-free environments.
              </div>
            </li>
          </ul>

          {/* CTA Box - Compact Design */}
          <div className="dark:bg-purple-900/10 bg-purple-50 p-6 rounded-2xl md:rounded-3xl border border-purple-500/20 text-center mt-8 shadow-lg">
            <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">Ready to Grow?</h2>
            <p className="dark:text-slate-300 text-slate-700 text-xs md:text-sm mb-5 max-w-xl mx-auto">
              The journey to harvesting perfect, chemical-free mushrooms begins with a single, high-quality bag of spawn. Don't leave your yield to chance! Start your organic farming journey today with premium, fully-colonized mushroom spawn at <strong className="dark:text-white text-slate-900">Organic Mushrooms Farm</strong>. Happy growing! 🍄
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
