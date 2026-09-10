"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Send,
  Loader2,
  Maximize2,
  Minimize2,
  Sparkles,
  Bot,
  User,
  RefreshCw,
  Copy,
  Check,
} from "lucide-react";

export type BotState = "idle" | "thinking" | "talking";

type Message = {
  id: string;
  role: "user" | "model";
  text: string;
  isTyping?: boolean;
};

const QUICK_PROMPTS = [
  "💰 Commercial Farm Setup Cost?",
  "🍄 Button vs Oyster Farming?",
  "🎓 Training Masterclass (₹199)?",
  "🌡️ Ideal Temperature & Humidity?",
  "📦 How to buy F1 Spawn?",
];

// =========================================================================
// HIGH-TECH ANIMATED ROBOT AVATAR (SVG)
// Supports:
// 1. Idle: Blinking friendly eyes, soft hover, calm breathing
// 2. Thinking: Glowing radiant antenna with radio wave pulses, scanning laser visor & calculating eye matrix
// 3. Talking: Attentive eyes, dynamic visor lip/mouth equalizer wave, voice energy aura
// =========================================================================
export const BotAvatar = ({
  botState = "idle",
  className = "w-full h-full",
}: {
  botState?: BotState;
  className?: string;
}) => {
  const isThinking = botState === "thinking";
  const isTalking = botState === "talking";

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} drop-shadow-xl overflow-visible select-none`}
      aria-label={`AI Robot - State: ${botState}`}
    >
      <defs>
        {/* Head Gradient */}
        <linearGradient id="robotHeadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isThinking ? "#06b6d4" : isTalking ? "#a855f7" : "#34d399"} />
          <stop offset="100%" stopColor={isThinking ? "#3b82f6" : isTalking ? "#ec4899" : "#3b82f6"} />
        </linearGradient>

        {/* Body Gradient */}
        <linearGradient id="robotBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        {/* Thruster Gradient */}
        <radialGradient id="thrusterGrad">
          <stop
            offset="0%"
            stopColor={isThinking ? "#22d3ee" : isTalking ? "#e879f9" : "#38bdf8"}
            stopOpacity="0.9"
          />
          <stop
            offset="100%"
            stopColor={isThinking ? "#22d3ee" : isTalking ? "#e879f9" : "#38bdf8"}
            stopOpacity="0"
          />
        </radialGradient>

        {/* Antenna Glow Filter */}
        <filter id="antennaGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Thruster / Hover Aura Under Robot */}
      <motion.ellipse
        cx="50"
        cy="92"
        rx="15"
        ry="4"
        fill="url(#thrusterGrad)"
        animate={
          isThinking
            ? { scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }
            : isTalking
            ? { scale: [1, 1.5, 1], opacity: [0.5, 0.9, 0.5] }
            : { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }
        }
        transition={{
          duration: isThinking ? 0.8 : isTalking ? 0.7 : 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ filter: "blur(2px)" }}
      />

      {/* Main Floating Robot Body Group */}
      <motion.g
        animate={
          isThinking
            ? { y: [0, -4, 0], rotate: [-1, 1, -1] }
            : isTalking
            ? { y: [0, -3, 0], scale: [1, 1.02, 1] }
            : { y: [0, -2.5, 0], rotate: [0, -0.8, 0.8, 0] }
        }
        transition={{
          duration: isThinking ? 1 : isTalking ? 0.8 : 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* ================= 1. ANTENNA SYSTEM ================= */}
        <g style={{ transformOrigin: "50px 20px" }}>
          {/* Antenna Stem */}
          <line
            x1="50"
            y1="20"
            x2="50"
            y2="4"
            stroke={isThinking ? "#22d3ee" : isTalking ? "#c084fc" : "#10b981"}
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* THINKING STATE: Concentric Radiating Wave Rings */}
          {isThinking && (
            <>
              <motion.circle
                cx="50"
                cy="4"
                r="4"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="1.5"
                initial={{ r: 4, opacity: 1 }}
                animate={{ r: 16, opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.circle
                cx="50"
                cy="4"
                r="4"
                fill="none"
                stroke="#a855f7"
                strokeWidth="1.5"
                initial={{ r: 4, opacity: 1 }}
                animate={{ r: 16, opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.45, ease: "easeOut" }}
              />
            </>
          )}

          {/* Antenna Glowing Beacon Orb / Tip */}
          <motion.circle
            cx="50"
            cy="4"
            r="4.5"
            fill={isThinking ? "#22d3ee" : isTalking ? "#e879f9" : "#10b981"}
            filter="url(#antennaGlow)"
            animate={
              isThinking
                ? {
                    fill: ["#22d3ee", "#a855f7", "#38bdf8", "#22d3ee"],
                    scale: [1, 1.7, 1],
                    opacity: [0.85, 1, 0.85],
                  }
                : isTalking
                ? {
                    fill: ["#c084fc", "#f472b6", "#38bdf8", "#c084fc"],
                    scale: [1, 1.3, 1],
                  }
                : {
                    fill: ["#10b981", "#34d399", "#10b981"],
                    scale: [1, 1.1, 1],
                  }
            }
            transition={{
              duration: isThinking ? 0.6 : isTalking ? 0.8 : 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </g>

        {/* Lower Body Shell */}
        <motion.path
          d="M 30 50 Q 50 60 70 50 L 75 75 Q 50 95 25 75 Z"
          fill="url(#robotBodyGrad)"
          stroke="#334155"
          strokeWidth="1.5"
        />

        {/* Chest Core Pulse */}
        <motion.circle
          cx="50"
          cy="65"
          r="6"
          fill={isThinking ? "#22d3ee" : isTalking ? "#e879f9" : "#38bdf8"}
          animate={
            isThinking
              ? { scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }
              : isTalking
              ? { scale: [1, 1.4, 1], opacity: [0.5, 0.9, 0.5] }
              : { scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }
          }
          transition={{
            duration: isThinking ? 0.7 : isTalking ? 0.8 : 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <circle cx="50" cy="65" r="3" fill="#ffffff" />

        {/* ================= 2. ROBOT HEAD & VISOR ================= */}
        <g style={{ transformOrigin: "50px 40px" }}>
          {/* Ear Bolts */}
          <rect x="15" y="32" width="6" height="16" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <rect x="79" y="32" width="6" height="16" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="1" />

          {/* Head Chassis */}
          <rect x="20" y="20" width="60" height="40" rx="20" fill="url(#robotHeadGrad)" />

          {/* Dark Glass Visor Screen */}
          <rect x="25" y="30" width="50" height="20" rx="10" fill="#020617" stroke="#1e293b" strokeWidth="1.5" />

          {/* Top Visor Glare */}
          <path d="M 28 32 Q 50 36 72 32" stroke="#ffffff" strokeWidth="1" opacity="0.3" fill="none" />

          {/* ================= 3. VISOR INTERNALS BY STATE ================= */}
          {isThinking ? (
            /* ===== THINKING STATE: CALCULATION & SCANNING ANIMATION ===== */
            <g>
              {/* Sweeping Laser Scan Line */}
              <motion.line
                x1="28"
                y1="30"
                x2="28"
                y2="50"
                stroke="#22d3ee"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{
                  x1: [28, 72, 28],
                  x2: [28, 72, 28],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ filter: "drop-shadow(0 0 4px #22d3ee)" }}
              />

              {/* Left Eye: Calculating Matrix Box */}
              <motion.g
                animate={{
                  scale: [0.9, 1.2, 0.9],
                  rotate: [0, 90, 180, 270, 360],
                }}
                style={{ transformOrigin: "38px 40px" }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              >
                <rect x="34" y="36" width="8" height="8" rx="1.5" fill="#083344" stroke="#22d3ee" strokeWidth="1" />
                <circle cx="38" cy="40" r="2" fill="#22d3ee" />
              </motion.g>

              {/* Center Micro Processing Dot */}
              <motion.circle
                cx="50"
                cy="40"
                r="1.8"
                fill="#34d399"
                animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.4, repeat: Infinity }}
              />

              {/* Right Eye: Calculating Matrix Box */}
              <motion.g
                animate={{
                  scale: [1.2, 0.9, 1.2],
                  rotate: [360, 270, 180, 90, 0],
                }}
                style={{ transformOrigin: "62px 40px" }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              >
                <rect x="58" y="36" width="8" height="8" rx="1.5" fill="#083344" stroke="#22d3ee" strokeWidth="1" />
                <circle cx="62" cy="40" r="2" fill="#22d3ee" />
              </motion.g>

              {/* Bottom Calculating Tick Grid */}
              <motion.line
                x1="36"
                y1="46"
                x2="64"
                y2="46"
                stroke="#22d3ee"
                strokeWidth="1"
                strokeDasharray="2, 2"
                animate={{ strokeDashoffset: [0, 8] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
              />
            </g>
          ) : isTalking ? (
            /* ===== TALKING STATE: LIP/MOUTH WAVE ANIMATION ===== */
            <g>
              {/* Alert Attentive Glowing Eyes */}
              <motion.circle
                cx="38"
                cy="37"
                r="3.5"
                fill="#e879f9"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
              <motion.circle
                cx="62"
                cy="37"
                r="3.5"
                fill="#e879f9"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
              />

              {/* Visor Lip / Mouth Equalizer Audio Waveform (5 Vertical Bouncing Bars) */}
              {/* Bar 1 */}
              <motion.line
                x1="42"
                y1="45"
                x2="42"
                y2="45"
                stroke="#22d3ee"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{ y1: [46, 43, 47, 44, 46], y2: [47, 49, 46, 48, 47] }}
                transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Bar 2 */}
              <motion.line
                x1="46"
                y1="44"
                x2="46"
                y2="48"
                stroke="#c084fc"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{ y1: [46, 41, 45, 42, 46], y2: [47, 50, 47, 49, 47] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: 0.08, ease: "easeInOut" }}
              />
              {/* Bar 3 (Center Lip Wave) */}
              <motion.line
                x1="50"
                y1="43"
                x2="50"
                y2="49"
                stroke="#6ee7b7"
                strokeWidth="2.5"
                strokeLinecap="round"
                animate={{ y1: [46, 40, 45, 41, 46], y2: [47, 51, 47, 50, 47] }}
                transition={{ duration: 0.42, repeat: Infinity, delay: 0.15, ease: "easeInOut" }}
              />
              {/* Bar 4 */}
              <motion.line
                x1="54"
                y1="44"
                x2="54"
                y2="48"
                stroke="#c084fc"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{ y1: [46, 42, 45, 43, 46], y2: [47, 49, 47, 50, 47] }}
                transition={{ duration: 0.48, repeat: Infinity, delay: 0.22, ease: "easeInOut" }}
              />
              {/* Bar 5 */}
              <motion.line
                x1="58"
                y1="45"
                x2="58"
                y2="45"
                stroke="#22d3ee"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{ y1: [46, 44, 47, 43, 46], y2: [47, 48, 46, 49, 47] }}
                transition={{ duration: 0.46, repeat: Infinity, delay: 0.12, ease: "easeInOut" }}
              />
            </g>
          ) : (
            /* ===== IDLE STATE: FRIENDLY BLINKING EYES ===== */
            <g>
              {/* Left Eye with Natural Periodic Blink */}
              <motion.circle
                cx="38"
                cy="40"
                r="4"
                fill="#38bdf8"
                animate={{
                  scaleY: [1, 1, 0.1, 1, 1],
                  cx: [38, 38, 36, 40, 38],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  times: [0, 0.88, 0.92, 0.96, 1],
                }}
              />

              {/* Right Eye with Natural Periodic Blink */}
              <motion.circle
                cx="62"
                cy="40"
                r="4"
                fill="#38bdf8"
                animate={{
                  scaleY: [1, 1, 0.1, 1, 1],
                  cx: [62, 62, 60, 64, 62],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  times: [0, 0.88, 0.92, 0.96, 1],
                }}
              />

              {/* Gentle Calm Smile */}
              <motion.rect
                x="45"
                y="46"
                width="10"
                height="2.5"
                rx="1.2"
                fill="#38bdf8"
                opacity="0.8"
              />
            </g>
          )}
        </g>

        {/* Arms */}
        <motion.path
          d="M 72 55 Q 85 60 80 75"
          fill="none"
          stroke="url(#robotHeadGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          style={{ transformOrigin: "72px 55px" }}
          animate={
            isThinking
              ? { rotate: [0, -10, 5, 0] }
              : isTalking
              ? { rotate: [0, 12, -4, 0] }
              : { rotate: [0, 6, -2, 0] }
          }
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 28 55 Q 15 60 20 75"
          fill="none"
          stroke="url(#robotHeadGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          style={{ transformOrigin: "28px 55px" }}
          animate={
            isThinking
              ? { rotate: [0, 10, -5, 0] }
              : isTalking
              ? { rotate: [0, -12, 4, 0] }
              : { rotate: [0, -6, 2, 0] }
          }
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>
    </svg>
  );
};

export const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isGreeting, setIsGreeting] = useState(false);
  const [greetingText, setGreetingText] = useState("Hello! 👋");

  const [botState, setBotState] = useState<BotState>("idle");
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);
  const [displayedTypingText, setDisplayedTypingText] = useState<string>("");
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "model",
      text: "Namaste! I am your AI Mushroom Farm Advisor. Ask me anything about commercial setups, spawn, subsidies, climate, or ROI!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isHidden, setIsHidden] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const handleMobileMenuToggle = (e: CustomEvent) => {
      setIsHidden(e.detail);
      if (e.detail) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mobileMenuToggle", handleMobileMenuToggle as EventListener);

    if (typeof document !== "undefined") {
      setIsHidden(document.body.classList.contains("mobile-menu-open"));
    }

    return () => {
      window.removeEventListener("mobileMenuToggle", handleMobileMenuToggle as EventListener);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        chatRef.current &&
        !chatRef.current.contains(target) &&
        !(target as Element).closest('[aria-label="Toggle AI Assistant"]')
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside, { passive: true });
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ai-chat-history");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.length > 0) setMessages(parsed);
        } catch (e) {}
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ai-chat-history", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, displayedTypingText, isLoading]);

  useEffect(() => {
    const hour = new Date().getHours();
    let text = "Hello! 👋";
    if (hour >= 5 && hour < 12) text = "Good morning! 👋";
    else if (hour >= 12 && hour < 17) text = "Good afternoon! 👋";
    else if (hour >= 17 && hour < 21) text = "Good evening! 👋";
    else text = "Good night! 👋";
    setGreetingText(text);

    const timer1 = setTimeout(() => setIsGreeting(true), 1500);
    const timer2 = setTimeout(() => setIsGreeting(false), 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Clean up typing animation timers on unmount
  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current);
      }
    };
  }, []);

  // Starts the typewriter stream with the talking mouth wave on the robot visor!
  const startTypewriterStream = (fullText: string, messageId: string) => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
    }

    setTypingMessageId(messageId);
    setDisplayedTypingText("");
    setBotState("talking"); // Visor Lip/Mouth Wave activates!

    let currentIndex = 0;
    const chunkSize = 3; // 3 characters per step for fast natural speech typing
    const intervalSpeed = 18; // 18ms per step

    typingTimerRef.current = setInterval(() => {
      currentIndex += chunkSize;
      if (currentIndex >= fullText.length) {
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
        setDisplayedTypingText(fullText);
        setTypingMessageId(null);
        setBotState("idle"); // Transitions back to idle

        setMessages((prev) =>
          prev.map((m) =>
            m.id === messageId ? { ...m, text: fullText, isTyping: false } : m
          )
        );
      } else {
        setDisplayedTypingText(fullText.slice(0, currentIndex));
      }
    }, intervalSpeed);
  };

  const handleOpenClick = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }
    setIsGreeting(true);
    setTimeout(() => {
      setIsGreeting(false);
      setIsOpen(true);
    }, 400);
  };

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = (customPrompt || inputValue).trim();
    if (!textToSend || isLoading) return;

    if (typingMessageId && typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      setTypingMessageId(null);
    }

    const userMsg: Message = { id: Date.now().toString(), role: "user", text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);
    setBotState("thinking"); // Antenna glows intensely & eyes start calculating!

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: [...messages, userMsg].map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      const replyText = data.text || "Thank you for contacting us. WhatsApp: +91 9203544140";
      const botMsgId = (Date.now() + 1).toString();

      setIsLoading(false);

      const botMessage: Message = {
        id: botMsgId,
        role: "model",
        text: replyText,
        isTyping: true,
      };

      setMessages((prev) => [...prev, botMessage]);

      // Start typewriter stream and talking visor lip wave
      startTypewriterStream(replyText, botMsgId);
    } catch (error) {
      setIsLoading(false);
      setBotState("idle");
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "model",
          text: "I experienced a slight delay. You can connect directly with our head agronomist on WhatsApp: +91 9203544140.",
        },
      ]);
    }
  };

  const copyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const resetHistory = () => {
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    setTypingMessageId(null);
    setBotState("idle");
    const fresh: Message[] = [
      {
        id: Date.now().toString(),
        role: "model",
        text: "Chat cleared! How can I assist your mushroom cultivation journey today?",
      },
    ];
    setMessages(fresh);
    localStorage.setItem("ai-chat-history", JSON.stringify(fresh));
  };

  return (
    <AnimatePresence>
      {!isHidden && (
        <div className="relative z-[99999]">
          {/* ================= CHAT DIALOG WINDOW ================= */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={chatRef}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute z-[100000] bg-white dark:bg-slate-950 flex flex-col overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)] border border-slate-200 dark:border-white/10 ${
                  isFullScreen
                    ? "fixed inset-0 w-full h-full rounded-none"
                    : "bottom-[70px] left-0 w-[320px] sm:w-[390px] rounded-3xl"
                }`}
                style={{
                  transformOrigin: "bottom left",
                  ...(isFullScreen ? {} : { maxHeight: "calc(100vh - 120px)", height: "540px" }),
                }}
              >
                {/* Header with Active State Robot Avatar */}
                <div
                  className={`p-3.5 sm:p-4 text-white flex items-center justify-between shadow-md z-10 shrink-0 transition-colors duration-300 ${
                    botState === "thinking"
                      ? "bg-gradient-to-r from-cyan-900 via-slate-900 to-indigo-950 border-b border-cyan-500/30"
                      : botState === "talking"
                      ? "bg-gradient-to-r from-purple-900 via-slate-900 to-pink-950 border-b border-purple-500/30"
                      : "bg-gradient-to-r from-emerald-600 via-teal-700 to-slate-900 border-b border-emerald-500/20"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-black/30 border border-white/20 p-1 flex items-center justify-center shrink-0">
                      <BotAvatar botState={botState} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-sm sm:text-base tracking-tight text-white">
                          MycoBot Advisor
                        </span>
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider ${
                            botState === "thinking"
                              ? "bg-cyan-400/20 text-cyan-200 border border-cyan-400/50"
                              : botState === "talking"
                              ? "bg-purple-400/20 text-purple-200 border border-purple-400/50"
                              : "bg-emerald-400/20 text-emerald-200 border border-emerald-400/50"
                          }`}
                        >
                          {botState === "thinking"
                            ? "Calculating..."
                            : botState === "talking"
                            ? "Talking..."
                            : "Online"}
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-slate-200/90 flex items-center gap-1">
                        <span
                          className={`w-1.5 h-1.5 rounded-full inline-block ${
                            botState === "thinking"
                              ? "bg-cyan-400 animate-ping"
                              : botState === "talking"
                              ? "bg-purple-400 animate-pulse"
                              : "bg-emerald-400"
                          }`}
                        />
                        {botState === "thinking"
                          ? "Antenna beaming • Processing formula"
                          : botState === "talking"
                          ? "Visor wave • Speaking answer"
                          : "Jabalpur Commercial Farm AI"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={resetHistory}
                      title="Reset chat"
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-colors text-white/80 hover:text-white"
                    >
                      <RefreshCw size={15} />
                    </button>
                    <button
                      onClick={() => setIsFullScreen(!isFullScreen)}
                      title={isFullScreen ? "Minimize" : "Full screen"}
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-colors text-white/80 hover:text-white hidden sm:block"
                    >
                      {isFullScreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                    </button>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        setIsFullScreen(false);
                      }}
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-colors text-white/80 hover:text-white"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* Quick Prompts Bar */}
                <div className="p-2 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-white/5 overflow-x-auto scrollbar-hide flex items-center gap-1.5 shrink-0">
                  {QUICK_PROMPTS.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(prompt)}
                      disabled={isLoading || botState === "talking"}
                      className="shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-purple-900/30 border border-slate-200 dark:border-white/10 transition-all active:scale-95 disabled:opacity-50"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>

                {/* Messages Chat Area */}
                <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 flex flex-col gap-3.5 bg-slate-50/50 dark:bg-slate-950/60 scrollbar-thin">
                  {messages.map((msg) => {
                    const isUser = msg.role === "user";
                    const isCurrentlyTyping = msg.id === typingMessageId;
                    const textToDisplay = isCurrentlyTyping ? displayedTypingText : msg.text;

                    return (
                      <div
                        key={msg.id}
                        className={`flex items-start gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                      >
                        {/* Mini Avatar */}
                        <div className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-xs overflow-hidden mt-0.5">
                          {isUser ? (
                            <div className="w-full h-full bg-blue-600 text-white flex items-center justify-center">
                              <User size={14} />
                            </div>
                          ) : (
                            <div className="w-full h-full bg-slate-800 border border-purple-400/30 flex items-center justify-center p-0.5">
                              <BotAvatar botState={isCurrentlyTyping ? "talking" : "idle"} />
                            </div>
                          )}
                        </div>

                        {/* Speech Bubble */}
                        <div className={`max-w-[82%] relative group ${isUser ? "text-right" : "text-left"}`}>
                          <div
                            className={`rounded-2xl px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed shadow-sm ${
                              isUser
                                ? "bg-blue-600 text-white rounded-tr-xs"
                                : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 rounded-tl-xs"
                            }`}
                          >
                            <span className="whitespace-pre-wrap">{textToDisplay}</span>
                            {/* Blinking Typewriter Cursor */}
                            {isCurrentlyTyping && (
                              <span className="inline-block w-1.5 h-3.5 bg-purple-400 ml-1 animate-pulse align-middle" />
                            )}
                          </div>

                          {!isUser && !isCurrentlyTyping && (
                            <div className="flex items-center gap-1.5 mt-1 px-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => copyText(msg.id, msg.text)}
                                className="text-[10px] text-slate-400 hover:text-slate-200 flex items-center gap-1"
                              >
                                {copiedId === msg.id ? (
                                  <Check size={11} className="text-emerald-400" />
                                ) : (
                                  <Copy size={11} />
                                )}
                                <span>Copy</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  {/* Thinking State Bubble in Chat */}
                  {isLoading && (
                    <div className="flex items-start gap-2">
                      <div className="w-7 h-7 shrink-0 rounded-full bg-slate-800 border border-cyan-400/50 p-0.5 flex items-center justify-center">
                        <BotAvatar botState="thinking" />
                      </div>
                      <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-2xl rounded-tl-xs px-3.5 py-2.5 flex items-center gap-2 text-cyan-200 text-xs">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse [animation-delay:0.15s]" />
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse [animation-delay:0.3s]" />
                        </div>
                        <span className="font-medium">Calculating response parameters...</span>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* WhatsApp Help Strip */}
                <div className="px-3 py-1.5 bg-emerald-500/10 border-t border-emerald-500/20 flex items-center justify-between text-[11px] shrink-0">
                  <span className="text-emerald-600 dark:text-emerald-300 font-medium">
                    Need instant human agronomist?
                  </span>
                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20was%20chatting%20with%20AI%20Advisor%20and%20need%20farm%20guidance."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                  >
                    WhatsApp (+91 9203544140)
                  </a>
                </div>

                {/* Input Area */}
                <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/10 shrink-0">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                    className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-full pr-1.5 pl-4 py-1 border border-slate-200 dark:border-white/10"
                  >
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask about spawn, cost, setup, climate..."
                      disabled={isLoading || botState === "talking"}
                      className="flex-1 bg-transparent border-none outline-none text-xs sm:text-sm text-slate-800 dark:text-slate-200 py-1.5 disabled:opacity-60"
                    />
                    <button
                      type="submit"
                      disabled={!inputValue.trim() || isLoading || botState === "talking"}
                      className="w-8 h-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                      aria-label="Send message"
                    >
                      <Send size={14} />
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ================= STICKY LAUNCHER BUTTON WITH DYNAMIC STATES ================= */}
          <div className="relative flex items-center gap-2">
            {/* Dynamic Status Badges / Tooltips beside Button */}
            <AnimatePresence>
              {isGreeting && !isOpen && botState === "idle" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-10 left-2 bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 font-bold px-3 py-1.5 text-xs rounded-2xl rounded-bl-none shadow-lg border border-emerald-100 dark:border-emerald-800/80 whitespace-nowrap z-10"
                >
                  {greetingText}
                </motion.div>
              )}

              {botState === "thinking" && !isOpen && (
                <motion.div
                  key="thinking-badge"
                  initial={{ opacity: 0, x: -10, scale: 0.85 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -10, scale: 0.85 }}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/95 border border-cyan-400/90 shadow-[0_0_20px_rgba(6,182,212,0.5)] backdrop-blur-md"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-[11px] font-bold text-cyan-200">
                    Antenna Glowing • Thinking...
                  </span>
                </motion.div>
              )}

              {botState === "talking" && !isOpen && (
                <motion.div
                  key="talking-badge"
                  initial={{ opacity: 0, x: -10, scale: 0.85 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -10, scale: 0.85 }}
                  className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/95 border border-purple-400/90 shadow-[0_0_20px_rgba(168,85,247,0.5)] backdrop-blur-md"
                >
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-2.5 bg-purple-400 rounded-full animate-bounce" />
                    <span className="w-0.5 h-3.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.15s]" />
                    <span className="w-0.5 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.3s]" />
                  </div>
                  <span className="text-[11px] font-bold text-purple-200">
                    Visor Wave • Answering...
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Sticky Launcher Button */}
            <motion.button
              onClick={handleOpenClick}
              aria-label="Toggle AI Assistant"
              className={`relative w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center cursor-pointer transition-all outline-none rounded-full ${
                botState === "thinking"
                  ? "shadow-[0_0_35px_rgba(6,182,212,0.7)]"
                  : botState === "talking"
                  ? "shadow-[0_0_35px_rgba(168,85,247,0.7)]"
                  : "shadow-[0_0_25px_rgba(16,185,129,0.5)]"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              animate={
                botState === "thinking"
                  ? {
                      filter: [
                        "drop-shadow(0px 0px 10px rgba(6, 182, 212, 0.7))",
                        "drop-shadow(0px 0px 22px rgba(168, 85, 247, 0.9))",
                        "drop-shadow(0px 0px 10px rgba(6, 182, 212, 0.7))",
                      ],
                      y: [0, -6, 0],
                    }
                  : botState === "talking"
                  ? {
                      filter: [
                        "drop-shadow(0px 0px 12px rgba(168, 85, 247, 0.8))",
                        "drop-shadow(0px 0px 25px rgba(236, 72, 153, 0.9))",
                        "drop-shadow(0px 0px 12px rgba(168, 85, 247, 0.8))",
                      ],
                      y: [0, -5, 0],
                    }
                  : {
                      filter: [
                        "drop-shadow(0px 0px 8px rgba(16, 185, 129, 0.4))",
                        "drop-shadow(0px 0px 16px rgba(59, 130, 246, 0.6))",
                        "drop-shadow(0px 0px 8px rgba(16, 185, 129, 0.4))",
                      ],
                      y: [0, -4, 0],
                    }
              }
              transition={{
                duration: botState === "thinking" ? 1 : botState === "talking" ? 0.9 : 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full p-1 flex items-center justify-center">
                <BotAvatar botState={botState} />
              </div>
            </motion.button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AIChatWidget;
