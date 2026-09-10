"use client";

import React from "react";
import { motion } from "motion/react";

export type RobotState = "idle" | "thinking" | "talking";

interface RobotAvatarProps {
  state?: RobotState;
  size?: "sm" | "md" | "lg" | "sticky";
  className?: string;
  showRings?: boolean;
}

export const RobotAvatar: React.FC<RobotAvatarProps> = ({
  state = "idle",
  size = "md",
  className = "",
  showRings = true,
}) => {
  // Dimensions based on size
  const dimensions = {
    sm: { w: 28, h: 32, box: "w-7 h-8" },
    md: { w: 40, h: 46, box: "w-10 h-11" },
    lg: { w: 56, h: 64, box: "w-14 h-16" },
    sticky: { w: 48, h: 54, box: "w-12 h-14" },
  }[size];

  const isThinking = state === "thinking";
  const isTalking = state === "talking";

  return (
    <div
      className={`relative flex items-center justify-center select-none ${dimensions.box} ${className}`}
      aria-label={`AI Bot avatar in ${state} mode`}
    >
      {/* Radiating Energy / Thought Rings for Thinking State */}
      {isThinking && showRings && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 pointer-events-none">
          <motion.div
            initial={{ scale: 0.6, opacity: 0.9 }}
            animate={{ scale: [0.6, 2.2, 2.8], opacity: [0.9, 0.4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
            className="w-4 h-4 rounded-full border-2 border-cyan-400 bg-cyan-400/20 shadow-[0_0_12px_#22d3ee]"
          />
          <motion.div
            initial={{ scale: 0.6, opacity: 0.9 }}
            animate={{ scale: [0.6, 2, 2.6], opacity: [0.9, 0.4, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5,
            }}
            className="absolute inset-0 w-4 h-4 rounded-full border-2 border-purple-400 bg-purple-400/20 shadow-[0_0_12px_#c084fc]"
          />
        </div>
      )}

      {/* Main Robot Vector Canvas */}
      <svg
        viewBox="0 0 100 115"
        className="w-full h-full overflow-visible drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Head Gradient */}
          <linearGradient id="robotHeadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="45%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>

          {/* Visor Screen Gradient */}
          <linearGradient id="visorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#030712" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          {/* Cyan Glow for Eyes & Mouth */}
          <filter id="neonGlowCyan" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Amber/Magenta Glow for Thinking Antenna */}
          <filter id="neonGlowEnergy" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Mouth Wave Gradient */}
          <linearGradient id="mouthWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        {/* ================= 1. ANTENNA SYSTEM ================= */}
        <g id="robot-antenna">
          {/* Antenna Stem */}
          <rect
            x="47.5"
            y="9"
            width="5"
            height="14"
            rx="2.5"
            fill="#94a3b8"
            className="transition-colors"
          />

          {/* Antenna Glowing Orb Tip */}
          <motion.circle
            cx="50"
            cy="8"
            r={isThinking ? 7 : isTalking ? 6 : 5}
            fill={isThinking ? "#38bdf8" : isTalking ? "#a855f7" : "#22c55e"}
            filter={isThinking ? "url(#neonGlowEnergy)" : "url(#neonGlowCyan)"}
            animate={
              isThinking
                ? {
                    r: [5, 7.5, 5],
                    fill: ["#38bdf8", "#f59e0b", "#38bdf8"],
                    filter: [
                      "drop-shadow(0 0 4px #38bdf8)",
                      "drop-shadow(0 0 12px #f59e0b)",
                      "drop-shadow(0 0 4px #38bdf8)",
                    ],
                  }
                : isTalking
                ? {
                    r: [5, 6.5, 5],
                    fill: ["#a855f7", "#22d3ee", "#a855f7"],
                  }
                : {
                    r: [4.5, 5, 4.5],
                    fill: ["#22c55e", "#4ade80", "#22c55e"],
                  }
            }
            transition={{
              duration: isThinking ? 0.7 : isTalking ? 0.9 : 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Core high-intensity center spark */}
          <circle cx="50" cy="8" r="2.5" fill="#ffffff" />
        </g>

        {/* ================= 2. EARS / HEADSET MODULES ================= */}
        <g id="robot-ears">
          {/* Left Ear */}
          <rect
            x="8"
            y="48"
            width="8"
            height="22"
            rx="4"
            fill="#475569"
            stroke="#64748b"
            strokeWidth="1.5"
          />
          <circle
            cx="12"
            cy="59"
            r="2.5"
            fill={isThinking ? "#38bdf8" : isTalking ? "#a855f7" : "#22c55e"}
          />

          {/* Right Ear */}
          <rect
            x="84"
            y="48"
            width="8"
            height="22"
            rx="4"
            fill="#475569"
            stroke="#64748b"
            strokeWidth="1.5"
          />
          <circle
            cx="88"
            cy="59"
            r="2.5"
            fill={isThinking ? "#38bdf8" : isTalking ? "#a855f7" : "#22c55e"}
          />
        </g>

        {/* ================= 3. ROBOT HELMET & BODY ================= */}
        <rect
          x="14"
          y="22"
          width="72"
          height="76"
          rx="24"
          fill="url(#robotHeadGrad)"
          stroke="#a855f7"
          strokeWidth="2"
        />

        {/* Subtle helmet specular shine */}
        <path
          d="M 26 26 Q 50 30 74 26"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.35"
        />

        {/* ================= 4. VISOR (FACE SCREEN) ================= */}
        <rect
          x="22"
          y="32"
          width="56"
          height="56"
          rx="18"
          fill="url(#visorGrad)"
          stroke="#334155"
          strokeWidth="1.5"
        />

        {/* Visor internal subtle grid lines */}
        <line x1="26" y1="60" x2="74" y2="60" stroke="#1e293b" strokeWidth="0.8" opacity="0.6" />

        {/* ================= 5. EYES (WITH THINKING / CALCULATION ANIMATION) ================= */}
        <g id="robot-eyes" filter="url(#neonGlowCyan)">
          {isThinking ? (
            /* --- THINKING STATE: CALCULATION / MATRIX SCANNER EYES --- */
            <g id="thinking-calculation-eyes">
              {/* Left Eye: Rapid Calculating HUD Gauge */}
              <motion.g
                animate={{
                  scale: [1, 1.15, 0.95, 1],
                  rotate: [0, 45, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ originX: "36px", originY: "48px" }}
              >
                <circle
                  cx="36"
                  cy="48"
                  r="6.5"
                  stroke="#38bdf8"
                  strokeWidth="1.8"
                  strokeDasharray="4 2 2 2"
                  fill="none"
                />
                <circle cx="36" cy="48" r="2.5" fill="#38bdf8" />
              </motion.g>

              {/* Right Eye: Rapid Calculating HUD Gauge */}
              <motion.g
                animate={{
                  scale: [1, 1.15, 0.95, 1],
                  rotate: [360, 270, 180, 90, 45, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ originX: "64px", originY: "48px" }}
              >
                <circle
                  cx="64"
                  cy="48"
                  r="6.5"
                  stroke="#38bdf8"
                  strokeWidth="1.8"
                  strokeDasharray="4 2 2 2"
                  fill="none"
                />
                <circle cx="64" cy="48" r="2.5" fill="#38bdf8" />
              </motion.g>

              {/* Horizontal Calculation / Data Scanner Beam sweeping back and forth */}
              <motion.line
                x1="26"
                y1="48"
                x2="74"
                y2="48"
                stroke="#22d3ee"
                strokeWidth="1.5"
                strokeDasharray="6 3 2 3"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  y: [-3, 3, -3],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </g>
          ) : isTalking ? (
            /* --- TALKING STATE: ACTIVE ENGAGED EXPRESSIVE EYES --- */
            <g id="talking-eyes">
              {/* Left Eye: Alert & Expressive Arc */}
              <motion.ellipse
                cx="36"
                cy="48"
                rx="6"
                ry="7"
                fill="#22d3ee"
                animate={{
                  ry: [7, 7, 1.5, 7, 8, 7],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  times: [0, 0.45, 0.5, 0.55, 0.8, 1],
                }}
              />
              <circle cx="34" cy="46" r="2" fill="#ffffff" />

              {/* Right Eye: Alert & Expressive Arc */}
              <motion.ellipse
                cx="64"
                cy="48"
                rx="6"
                ry="7"
                fill="#22d3ee"
                animate={{
                  ry: [7, 7, 1.5, 7, 8, 7],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  times: [0, 0.45, 0.5, 0.55, 0.8, 1],
                }}
              />
              <circle cx="62" cy="46" r="2" fill="#ffffff" />
            </g>
          ) : (
            /* --- IDLE STATE: FRIENDLY GLOWING CYCOLOP EYES WITH NATURAL BLINK --- */
            <g id="idle-eyes">
              <motion.ellipse
                cx="36"
                cy="48"
                rx="5.5"
                ry="6"
                fill="#38bdf8"
                animate={{
                  ry: [6, 6, 0.8, 6, 6],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  times: [0, 0.85, 0.9, 0.95, 1],
                }}
              />
              <circle cx="34.5" cy="46.5" r="1.8" fill="#ffffff" />

              <motion.ellipse
                cx="64"
                cy="48"
                rx="5.5"
                ry="6"
                fill="#38bdf8"
                animate={{
                  ry: [6, 6, 0.8, 6, 6],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  times: [0, 0.85, 0.9, 0.95, 1],
                }}
              />
              <circle cx="62.5" cy="46.5" r="1.8" fill="#ffffff" />
            </g>
          )}
        </g>

        {/* ================= 6. VISOR LIP / MOUTH ANIMATION WAVE ================= */}
        <g id="robot-mouth" filter="url(#neonGlowCyan)">
          {isTalking ? (
            /* --- TALKING STATE: DYNAMIC AUDIO EQUALIZER / SPEECH WAVEFORM WAVE --- */
            <g id="talking-mouth-wave">
              {/* Audio Wave Bar 1 */}
              <motion.rect
                x="32"
                y="67"
                width="3.5"
                height="12"
                rx="1.75"
                fill="url(#mouthWaveGrad)"
                animate={{
                  height: [4, 14, 6, 12, 4],
                  y: [71, 66, 70, 67, 71],
                }}
                transition={{
                  duration: 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Audio Wave Bar 2 */}
              <motion.rect
                x="38"
                y="64"
                width="3.5"
                height="18"
                rx="1.75"
                fill="url(#mouthWaveGrad)"
                animate={{
                  height: [8, 20, 10, 18, 6],
                  y: [69, 63, 68, 64, 70],
                }}
                transition={{
                  duration: 0.42,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.08,
                }}
              />

              {/* Audio Wave Bar 3 (Center Lead) */}
              <motion.rect
                x="44"
                y="62"
                width="4"
                height="22"
                rx="2"
                fill="url(#mouthWaveGrad)"
                animate={{
                  height: [10, 24, 8, 22, 12],
                  y: [68, 61, 69, 62, 67],
                }}
                transition={{
                  duration: 0.38,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.15,
                }}
              />

              {/* Audio Wave Bar 4 */}
              <motion.rect
                x="51"
                y="63"
                width="4"
                height="20"
                rx="2"
                fill="url(#mouthWaveGrad)"
                animate={{
                  height: [6, 22, 12, 18, 8],
                  y: [70, 62, 67, 64, 69],
                }}
                transition={{
                  duration: 0.45,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.05,
                }}
              />

              {/* Audio Wave Bar 5 */}
              <motion.rect
                x="58"
                y="65"
                width="3.5"
                height="16"
                rx="1.75"
                fill="url(#mouthWaveGrad)"
                animate={{
                  height: [8, 18, 6, 16, 8],
                  y: [69, 64, 70, 65, 69],
                }}
                transition={{
                  duration: 0.36,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.12,
                }}
              />

              {/* Audio Wave Bar 6 */}
              <motion.rect
                x="64"
                y="68"
                width="3.5"
                height="10"
                rx="1.75"
                fill="url(#mouthWaveGrad)"
                animate={{
                  height: [4, 12, 5, 14, 4],
                  y: [71, 67, 70.5, 66, 71],
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.18,
                }}
              />
            </g>
          ) : isThinking ? (
            /* --- THINKING STATE: DIGITAL PROCESSING PROGRESS DOTS --- */
            <g id="thinking-mouth-dots">
              <motion.circle
                cx="38"
                cy="73"
                r="2.5"
                fill="#38bdf8"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: 0,
                }}
              />
              <motion.circle
                cx="46"
                cy="73"
                r="2.5"
                fill="#38bdf8"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: 0.2,
                }}
              />
              <motion.circle
                cx="54"
                cy="73"
                r="2.5"
                fill="#38bdf8"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: 0.4,
                }}
              />
              <motion.circle
                cx="62"
                cy="73"
                r="2.5"
                fill="#38bdf8"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: 0.6,
                }}
              />
            </g>
          ) : (
            /* --- IDLE STATE: CALM, FRIENDLY DIGITAL SMILE BAR --- */
            <g id="idle-mouth">
              <path
                d="M 38 72 Q 50 78 62 72"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
              />
              {/* Subtle smile cheek dots */}
              <circle cx="37" cy="71" r="1.5" fill="#38bdf8" />
              <circle cx="63" cy="71" r="1.5" fill="#38bdf8" />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};

export default RobotAvatar;
