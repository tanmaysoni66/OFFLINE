"use client";

import React from "react";
import { motion } from "motion/react";

export type BotAnimationState = "idle" | "thinking" | "talking";

interface RobotAvatarProps {
  state?: BotAnimationState;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showAntenna?: boolean;
}

const sizeConfig = {
  sm: {
    container: "w-8 h-8",
    head: "w-6 h-5",
    antennaHeight: "h-2",
    antennaOrb: "w-2 h-2",
    visor: "w-5 h-3.5",
    eye: "w-1 h-1.5",
    mouthWave: "h-2 gap-0.5",
    barWidth: "w-0.5",
  },
  md: {
    container: "w-10 h-10",
    head: "w-8 h-6.5",
    antennaHeight: "h-2.5",
    antennaOrb: "w-2.5 h-2.5",
    visor: "w-6.5 h-4.5",
    eye: "w-1.5 h-2",
    mouthWave: "h-2.5 gap-0.5",
    barWidth: "w-0.5",
  },
  lg: {
    container: "w-14 h-14",
    head: "w-11 h-9",
    antennaHeight: "h-3",
    antennaOrb: "w-3 h-3",
    visor: "w-9 h-6",
    eye: "w-2 h-2.5",
    mouthWave: "h-3 gap-1",
    barWidth: "w-1",
  },
  xl: {
    container: "w-16 h-16",
    head: "w-13 h-10.5",
    antennaHeight: "h-3.5",
    antennaOrb: "w-3.5 h-3.5",
    visor: "w-11 h-7.5",
    eye: "w-2.5 h-3",
    mouthWave: "h-3.5 gap-1",
    barWidth: "w-1",
  },
};

export const RobotAvatar: React.FC<RobotAvatarProps> = ({
  state = "idle",
  size = "md",
  className = "",
  showAntenna = true,
}) => {
  const cfg = sizeConfig[size] || sizeConfig.md;
  const isThinking = state === "thinking";
  const isTalking = state === "talking";

  return (
    <div
      className={`relative flex flex-col items-center justify-center select-none ${cfg.container} ${className}`}
      aria-label={`AI Robot Avatar - State: ${state}`}
    >
      {/* ================= 1. ANTENNA SYSTEM ================= */}
      {showAntenna && (
        <div className="relative flex flex-col items-center z-20">
          {/* Antenna Radiating Wave Rings (Thinking State Energy Waves) */}
          {isThinking && (
            <>
              <motion.span
                className="absolute -top-2 w-5 h-5 rounded-full border border-cyan-400/80 pointer-events-none"
                initial={{ scale: 0.3, opacity: 1 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 1.1,
                  ease: "easeOut",
                }}
              />
              <motion.span
                className="absolute -top-2 w-5 h-5 rounded-full border border-purple-400/80 pointer-events-none"
                initial={{ scale: 0.3, opacity: 1 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 1.1,
                  delay: 0.45,
                  ease: "easeOut",
                }}
              />
            </>
          )}

          {/* Glowing Antenna Orb / Tip */}
          <motion.div
            className={`rounded-full relative z-10 ${cfg.antennaOrb} ${
              isThinking
                ? "bg-gradient-to-tr from-cyan-400 via-emerald-300 to-white shadow-[0_0_15px_#22d3ee,0_0_30px_#a855f7]"
                : isTalking
                ? "bg-gradient-to-tr from-purple-400 via-pink-400 to-white shadow-[0_0_12px_#ec4899]"
                : "bg-emerald-400 shadow-[0_0_8px_#34d399]"
            }`}
            animate={
              isThinking
                ? {
                    scale: [1, 1.45, 1],
                    boxShadow: [
                      "0 0 8px #22d3ee",
                      "0 0 20px #06b6d4, 0 0 35px #a855f7",
                      "0 0 8px #22d3ee",
                    ],
                  }
                : isTalking
                ? {
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 6px #c084fc",
                      "0 0 16px #e879f9",
                      "0 0 6px #c084fc",
                    ],
                  }
                : {
                    scale: [1, 1.1, 1],
                    opacity: [0.85, 1, 0.85],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: isThinking ? 0.6 : isTalking ? 0.9 : 2.2,
              ease: "easeInOut",
            }}
          />

          {/* Metallic Antenna Stem */}
          <div
            className={`w-[2px] bg-gradient-to-b from-slate-300 via-slate-500 to-slate-700 ${cfg.antennaHeight}`}
          />
        </div>
      )}

      {/* ================= 2. ROBOT HEAD CHASSIS ================= */}
      <motion.div
        className={`relative flex items-center justify-center rounded-[10px] sm:rounded-[12px] bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border shadow-lg ${cfg.head} ${
          isThinking
            ? "border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            : isTalking
            ? "border-purple-400/80 shadow-[0_0_20px_rgba(192,132,252,0.4)]"
            : "border-slate-700/80 shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
        }`}
        animate={
          isThinking
            ? {
                y: [-0.5, 0.5, -0.5],
                rotate: [-1, 1, -1],
              }
            : isTalking
            ? {
                y: [-1, 0.8, -1],
              }
            : {
                y: [0, -0.5, 0],
              }
        }
        transition={{
          repeat: Infinity,
          duration: isThinking ? 0.7 : isTalking ? 0.8 : 3,
          ease: "easeInOut",
        }}
      >
        {/* Left & Right Mechanical Ear Bolts */}
        <span className="absolute -left-1 w-1 h-2 rounded-l-sm bg-slate-600 border-l border-slate-400" />
        <span className="absolute -right-1 w-1 h-2 rounded-r-sm bg-slate-600 border-r border-slate-400" />

        {/* ================= 3. GLOSSY VISOR ================= */}
        <div
          className={`relative flex flex-col items-center justify-center rounded-[6px] sm:rounded-[8px] bg-slate-950 overflow-hidden border border-slate-800/80 ${cfg.visor}`}
        >
          {/* Subtle Top Glass Glare Reflection */}
          <div className="absolute top-0 inset-x-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />

          {/* ================= 4. THINKING STATE: EYE CALCULATION & MATRIX SCAN ================= */}
          {isThinking ? (
            <div className="relative w-full h-full flex flex-col items-center justify-center px-1">
              {/* Horizontal Laser Scanning Bar (Sweeping Across Visor) */}
              <motion.div
                className="absolute inset-y-0 w-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#22d3ee] z-20 pointer-events-none"
                animate={{
                  x: ["-140%", "140%"],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.85,
                  ease: "easeInOut",
                }}
              />

              {/* High-Tech Calculating Eyes (Pulsing Numerical / Binary Grid) */}
              <div className="flex items-center justify-between w-full px-1 z-10">
                {/* Left Eye: Calculating Matrix Box */}
                <motion.div
                  className="flex items-center justify-center rounded-sm bg-cyan-950/80 border border-cyan-400/90 shadow-[0_0_8px_#22d3ee] overflow-hidden"
                  animate={{
                    scale: [0.9, 1.15, 0.9],
                    borderColor: ["#22d3ee", "#38bdf8", "#a855f7", "#22d3ee"],
                  }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                >
                  <div className="w-1.5 h-2 sm:w-2 sm:h-2.5 flex flex-col items-center justify-center gap-[1px]">
                    <span className="w-1 h-[2px] bg-cyan-300 rounded-[0.5px] animate-pulse" />
                    <span className="w-1 h-[2px] bg-cyan-300 rounded-[0.5px] animate-pulse [animation-delay:0.15s]" />
                  </div>
                </motion.div>

                {/* Center Micro Core Processing Dot */}
                <motion.div
                  className="w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]"
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.3, 0.8],
                  }}
                  transition={{ repeat: Infinity, duration: 0.35 }}
                />

                {/* Right Eye: Calculating Matrix Box */}
                <motion.div
                  className="flex items-center justify-center rounded-sm bg-cyan-950/80 border border-cyan-400/90 shadow-[0_0_8px_#22d3ee] overflow-hidden"
                  animate={{
                    scale: [1.15, 0.9, 1.15],
                    borderColor: ["#a855f7", "#22d3ee", "#38bdf8", "#a855f7"],
                  }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                >
                  <div className="w-1.5 h-2 sm:w-2 sm:h-2.5 flex flex-col items-center justify-center gap-[1px]">
                    <span className="w-1 h-[2px] bg-cyan-300 rounded-[0.5px] animate-pulse [animation-delay:0.2s]" />
                    <span className="w-1 h-[2px] bg-cyan-300 rounded-[0.5px] animate-pulse [animation-delay:0.35s]" />
                  </div>
                </motion.div>
              </div>

              {/* Bottom Subtle Status Line */}
              <div className="w-4/5 h-[1px] bg-cyan-500/40 mt-0.5 animate-pulse" />
            </div>
          ) : isTalking ? (
            /* ================= 5. TALKING / ANSWERING STATE: LIP/MOUTH WAVE EQUALIZER ================= */
            <div className="relative w-full h-full flex flex-col items-center justify-center px-1">
              {/* Alert Attentive Glowing Eyes */}
              <div className="flex items-center justify-between w-full px-1.5 mb-0.5">
                <motion.span
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-tr from-purple-400 to-cyan-300 shadow-[0_0_8px_#c084fc]"
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                />
                <motion.span
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-tr from-purple-400 to-cyan-300 shadow-[0_0_8px_#c084fc]"
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8, delay: 0.1 }}
                />
              </div>

              {/* Dynamic Lip/Mouth Wave Equalizer (5 Active Audio Bars) */}
              <div className={`flex items-end justify-center ${cfg.mouthWave}`}>
                {/* Bar 1 */}
                <motion.span
                  className={`bg-cyan-400 rounded-full shadow-[0_0_4px_#22d3ee] ${cfg.barWidth}`}
                  animate={{
                    height: ["20%", "70%", "30%", "85%", "20%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.45,
                    ease: "easeInOut",
                  }}
                />
                {/* Bar 2 */}
                <motion.span
                  className={`bg-purple-400 rounded-full shadow-[0_0_5px_#c084fc] ${cfg.barWidth}`}
                  animate={{
                    height: ["30%", "100%", "50%", "80%", "30%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.55,
                    delay: 0.08,
                    ease: "easeInOut",
                  }}
                />
                {/* Bar 3 (Center Main Lip Wave) */}
                <motion.span
                  className={`bg-emerald-300 rounded-full shadow-[0_0_6px_#6ee7b7] ${cfg.barWidth}`}
                  animate={{
                    height: ["40%", "100%", "60%", "95%", "40%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.5,
                    delay: 0.16,
                    ease: "easeInOut",
                  }}
                />
                {/* Bar 4 */}
                <motion.span
                  className={`bg-purple-400 rounded-full shadow-[0_0_5px_#c084fc] ${cfg.barWidth}`}
                  animate={{
                    height: ["25%", "85%", "40%", "90%", "25%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.52,
                    delay: 0.24,
                    ease: "easeInOut",
                  }}
                />
                {/* Bar 5 */}
                <motion.span
                  className={`bg-cyan-400 rounded-full shadow-[0_0_4px_#22d3ee] ${cfg.barWidth}`}
                  animate={{
                    height: ["20%", "65%", "35%", "75%", "20%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.48,
                    delay: 0.12,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          ) : (
            /* ================= 6. IDLE STATE: FRIENDLY BLINKING EYES & CALM VISOR ================= */
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2 sm:gap-2.5">
                {/* Left Eye with Periodic Natural Blink */}
                <motion.span
                  className={`rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] ${cfg.eye}`}
                  animate={{
                    scaleY: [1, 1, 0.1, 1, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    times: [0, 0.9, 0.93, 0.96, 1],
                  }}
                />

                {/* Right Eye with Periodic Natural Blink */}
                <motion.span
                  className={`rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] ${cfg.eye}`}
                  animate={{
                    scaleY: [1, 1, 0.1, 1, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    times: [0, 0.9, 0.93, 0.96, 1],
                  }}
                />
              </div>

              {/* Gentle Smile Accent Line */}
              <div className="w-2.5 h-[1.5px] bg-emerald-400/50 rounded-full mt-0.5" />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RobotAvatar;
