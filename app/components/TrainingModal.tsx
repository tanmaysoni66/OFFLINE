"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Home,
  TrendingUp,
  BookOpen,
  Award
} from "lucide-react";

interface TrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrainingModal = ({ isOpen, onClose }: TrainingModalProps) => {
  const [modalView, setModalView] = useState<"region_select" | "india_plans" | "usa_plans">("region_select");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3.5 sm:p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-950 border border-purple-500/20 rounded-3xl p-5 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-colors z-50"
            aria-label="Close training modal"
          >
            <X size={20} />
          </button>

          {modalView === "region_select" && (
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={13} />
                <span>Choose Training Location</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">
                Select <span className="gradient-text">Your Region</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium max-w-md mx-auto mb-8">
                Choose your location to view pricing and enroll in live batches.
              </p>

              <div className="flex flex-col gap-4 w-full max-w-md mx-auto mb-8">
                <button
                  onClick={() => setModalView("india_plans")}
                  className="flex items-center justify-between p-4 rounded-2xl border-2 border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-500/60 transition-all text-left group"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-3xl">🇮🇳</span>
                    <div>
                      <div className="text-base font-bold text-slate-900 dark:text-white">
                        Join Training from India
                      </div>
                      <div className="text-xs font-black text-purple-600 dark:text-purple-400 tracking-wider">
                        Masterclass ₹199 / Full Course ₹499
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-purple-500 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setModalView("usa_plans")}
                  className="flex items-center justify-between p-4 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-500/60 transition-all text-left group"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-3xl">🇺🇸</span>
                    <div>
                      <div className="text-base font-bold text-slate-900 dark:text-white">
                        USA & International Training
                      </div>
                      <div className="text-xs font-black text-blue-600 dark:text-blue-400 tracking-wider">
                        Pay in USD ($39 / $49)
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Highlights Box */}
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 w-full max-w-lg">
                <h5 className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 text-center">
                  All Courses Include:
                </h5>
                <div className="grid grid-cols-2 gap-2 text-left text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Live Practical Crop SOPs</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>ISO 9001 Certificate</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Market Selling Guidance</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Private Growers Community</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {modalView === "india_plans" && (
            <div>
              <button
                onClick={() => setModalView("region_select")}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white mb-4"
              >
                <ArrowLeft size={14} />
                <span>Back to Region Selection</span>
              </button>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  India Training Programs
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Choose a live batch or comprehensive masterclass
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Live Masterclass Plan */}
                <div className="p-5 rounded-3xl bg-linear-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/40 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-300 text-[10px] font-black uppercase">
                        Live Workshop
                      </span>
                      <span className="text-xl font-black text-purple-600 dark:text-purple-400">
                        ₹199
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Live Mushroom Masterclass
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      2-hour live session covering button & oyster cultivation basics, temperature/humidity control, and pest prevention.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        <span>Live Q&A with Senior Agronomist</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        <span>Substrate & Compost Preparation SOP</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        <span>Digital PDF Farming Guidebook</span>
                      </li>
                    </ul>
                  </div>

                  <Link
                    href="/workshop"
                    onClick={onClose}
                    className="btn-primary w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <span>Enroll Masterclass (₹199)</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Advanced Commercial Plan */}
                <div className="p-5 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase">
                        Full Commercial
                      </span>
                      <span className="text-xl font-black text-slate-900 dark:text-white">
                        ₹499
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Advanced Commercial Course
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      Complete end-to-end commercial blueprint including cold-room setup, Daikin HVAC calculations, and wholesale marketing.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        <span>All 10+ Mushroom Varieties (Button, Oyster, Milky)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        <span>Govt. Subsidy DPR (NHB / NABARD) Support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        <span>ISO 9001:2015 Verified Certificate</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20enroll%20in%20Advanced%20Mushroom%20Training%20(Rs%20499)."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="w-full py-3 rounded-xl text-xs font-bold bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-slate-900 dark:text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <span>WhatsApp Enrollment (₹499)</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {modalView === "usa_plans" && (
            <div>
              <button
                onClick={() => setModalView("region_select")}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white mb-4"
              >
                <ArrowLeft size={14} />
                <span>Back to Region Selection</span>
              </button>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  International & USA Training
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Global climate-tailored mushroom cultivation courses
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-3xl bg-blue-500/10 border-2 border-blue-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-300 text-[10px] font-black uppercase">
                        Global Home-Scale
                      </span>
                      <span className="text-xl font-black text-blue-600 dark:text-blue-400">
                        $39
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Basic Cultivation Training
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      Ideal for hobbyists, indoor tent growers, and homesteaders in North America & Europe.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        <span>Oyster, Lion's Mane & Shiitake Home Setup</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        <span>Substrate Sterilization in Monotubs</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20am%20from%20USA/International%20and%20want%20Mushroom%20Training."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="w-full py-3 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Enroll ($39 USD)</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="p-5 rounded-3xl bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-[10px] font-black uppercase">
                        Industrial Turnkey
                      </span>
                      <span className="text-xl font-black text-cyan-600 dark:text-cyan-400">
                        $97
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Commercial Farm Advisory
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      Commercial automated facility layout, sterile lab inoculation, and international cold chain.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        <span>1-on-1 Video Consultation Call</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        <span>Automated HVAC & CO2 Exhaust Blueprints</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20International%20Commercial%20Advisory%20($97)."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="w-full py-3 rounded-xl text-xs font-bold bg-linear-to-r from-cyan-600 to-blue-600 text-white flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    <span>Enroll Commercial ($97 USD)</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TrainingModal;
