"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Maximize2, Minimize2, Sparkles, RefreshCw } from "lucide-react";

export type RobotState = "idle" | "thinking" | "talking";

type Message = {
  id: string;
  role: "user" | "model";
  text: string;
};

// ==========================================
// ADVANCED ROBOT AVATAR COMPONENT
// ==========================================
export const BotAvatar = ({
  state = "idle",
  className = "",
}: {
  state?: RobotState;
  className?: string;
}) => {
  const isThinking = state === "thinking";
  const isTalking = state === "talking";

  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none ${className}`}>
      {/* Radiating Sonar / Thought Wave Rings for Thinking State */}
      {isThinking && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 pointer-events-none">
          <motion.div
            initial={{ scale: 0.5, opacity: 0.9 }}
            animate={{ scale: [0.5, 2.2, 2.8], opacity: [0.9, 0.4, 0] }}
            transition={{ duration: 1.3, repeat: Infinity, ease: "easeOut" }}
            className="w-4 h-4 rounded-full border-2 border-cyan-400 bg-cyan-400/20 shadow-[0_0_12px_#22d3ee]"
          />
          <motion.div
            initial={{ scale: 0.5, opacity: 0.9 }}
            animate={{ scale: [0.5, 1.9, 2.5], opacity: [0.9, 0.4, 0] }}
            transition={{ duration: 1.3, repeat: Infinity, ease: "easeOut", delay: 0.45 }}
            className="absolute inset-0 w-4 h-4 rounded-full border-2 border-amber-400 bg-amber-400/20 shadow-[0_0_12px_#f59e0b]"
          />
        </div>
      )}

      <svg viewBox="0 0 100 105" className="w-full h-full drop-shadow-xl overflow-visible">
        <defs>
          <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>

          <linearGradient id="visorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#030712" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>

          <radialGradient id="thrusterGrad">
            <stop offset="0%" stopColor={isThinking ? "#38bdf8" : isTalking ? "#a855f7" : "#10b981"} stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Thruster / Hover Aura */}
        <motion.ellipse
          cx="50"
          cy="98"
          rx="16"
          ry="4.5"
          fill="url(#thrusterGrad)"
          animate={
            isThinking
              ? { scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }
              : isTalking
              ? { scale: [1, 1.5, 1], opacity: [0.5, 0.9, 0.5] }
              : { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }
          }
          transition={{ duration: isThinking ? 0.8 : isTalking ? 0.6 : 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "blur(2.5px)" }}
        />

        {/* Main Floating Robot Group */}
        <motion.g
          animate={
            isThinking
              ? { y: [0, -6, 0], rotate: [0, -1.5, 1.5, 0] }
              : isTalking
              ? { y: [0, -5, 0], rotate: [0, 1, -1, 0] }
              : { y: [0, -3, 0], rotate: [0, -0.8, 0.8, 0] }
          }
          transition={{
            duration: isThinking ? 1.4 : isTalking ? 1.2 : 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* ================= 1. ANTENNA SYSTEM (Thinking State Glow) ================= */}
          <g id="antenna-system">
            <line x1="50" y1="20" x2="50" y2="4" stroke={isThinking ? "#38bdf8" : isTalking ? "#a855f7" : "#10b981"} strokeWidth="3" strokeLinecap="round" />

            {/* Glowing Antenna Tip Orb */}
            <motion.circle
              cx="50"
              cy="4"
              r={isThinking ? 6.5 : isTalking ? 5.5 : 4.5}
              fill={isThinking ? "#38bdf8" : isTalking ? "#a855f7" : "#10b981"}
              animate={
                isThinking
                  ? {
                      scale: [1, 1.45, 1],
                      fill: ["#38bdf8", "#f59e0b", "#38bdf8"],
                      filter: [
                        "drop-shadow(0 0 5px #38bdf8)",
                        "drop-shadow(0 0 16px #f59e0b)",
                        "drop-shadow(0 0 5px #38bdf8)",
                      ],
                    }
                  : isTalking
                  ? {
                      scale: [1, 1.25, 1],
                      fill: ["#10b981", "#38bdf8", "#c084fc", "#10b981"],
                      filter: [
                        "drop-shadow(0 0 4px #10b981)",
                        "drop-shadow(0 0 10px #38bdf8)",
                        "drop-shadow(0 0 4px #10b981)",
                      ],
                    }
                  : {
                      scale: [1, 1.1, 1],
                      fill: ["#10b981", "#34d399", "#10b981"],
                      filter: ["drop-shadow(0 0 3px #10b981)", "drop-shadow(0 0 6px #34d399)", "drop-shadow(0 0 3px #10b981)"],
                    }
              }
              transition={{
                duration: isThinking ? 0.7 : isTalking ? 0.8 : 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Center bright spark */}
            <circle cx="50" cy="4" r="2.2" fill="#ffffff" />
          </g>

          {/* ================= 2. ROBOT BODY & CHEST ================= */}
          <path
            d="M 30 50 Q 50 60 70 50 L 75 75 Q 50 95 25 75 Z"
            fill="url(#bodyGrad)"
            stroke="#1e293b"
            strokeWidth="1.5"
          />

          {/* Chest Core Indicator */}
          <motion.circle
            cx="50"
            cy="68"
            r="6"
            fill="#ffffff"
            opacity="0.8"
            animate={
              isThinking
                ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }
                : isTalking
                ? { scale: [1, 1.35, 1], opacity: [0.6, 1, 0.6] }
                : { scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }
            }
            transition={{ duration: isThinking ? 0.9 : isTalking ? 0.8 : 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="50"
            cy="68"
            r="3.5"
            fill={isThinking ? "#38bdf8" : isTalking ? "#a855f7" : "#10b981"}
          />

          {/* ================= 3. ROBOT HEAD & VISOR ================= */}
          <g id="robot-head">
            {/* Ear Modules */}
            <rect x="14" y="32" width="6" height="16" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="1" />
            <circle cx="17" cy="40" r="1.8" fill={isThinking ? "#38bdf8" : isTalking ? "#c084fc" : "#10b981"} />

            <rect x="80" y="32" width="6" height="16" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="1" />
            <circle cx="83" cy="40" r="1.8" fill={isThinking ? "#38bdf8" : isTalking ? "#c084fc" : "#10b981"} />

            {/* Main Outer Helmet */}
            <rect x="20" y="20" width="60" height="42" rx="21" fill="url(#headGrad)" stroke="#1e293b" strokeWidth="1.5" />

            {/* Inner Dark Visor Screen */}
            <rect x="25" y="29" width="50" height="26" rx="13" fill="url(#visorGrad)" stroke="#334155" strokeWidth="1.2" />

            {/* Subtle Helmet Top Reflection */}
            <path d="M 32 23 Q 50 26 68 23" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

            {/* ================= 4. EYES (Calculation / Thinking Animation) ================= */}
            <g id="visor-eyes">
              {isThinking ? (
                /* --- THINKING STATE: HUD CALCULATION & MATRIX SCANNER EYES --- */
                <g id="calculation-eyes">
                  {/* Rotating Calculation Reticle - Left Eye */}
                  <motion.g
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "38px", originY: "39px" }}
                  >
                    <circle cx="38" cy="39" r="5" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
                    <circle cx="38" cy="39" r="2" fill="#38bdf8" />
                  </motion.g>

                  {/* Rotating Calculation Reticle - Right Eye */}
                  <motion.g
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "62px", originY: "39px" }}
                  >
                    <circle cx="62" cy="39" r="5" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
                    <circle cx="62" cy="39" r="2" fill="#38bdf8" />
                  </motion.g>

                  {/* Data Matrix Scanner Beam Sweeping across Visor */}
                  <motion.line
                    x1="28"
                    y1="39"
                    x2="72"
                    y2="39"
                    stroke="#22d3ee"
                    strokeWidth="1.4"
                    strokeDasharray="4 2 1 2"
                    animate={{ y: [-3.5, 3.5, -3.5], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 0.75, repeat: Infinity, ease: "easeInOut" }}
                  />
                </g>
              ) : isTalking ? (
                /* --- TALKING STATE: ENGAGED EXPRESSIVE WIDE EYES --- */
                <g id="talking-eyes">
                  <motion.ellipse
                    cx="38"
                    cy="39"
                    rx="4.5"
                    ry="5"
                    fill="#38bdf8"
                    animate={{ ry: [5, 5, 1.2, 5, 5.5, 5] }}
                    transition={{ duration: 2.2, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 0.8, 1] }}
                  />
                  <circle cx="36.5" cy="37.5" r="1.5" fill="#ffffff" />

                  <motion.ellipse
                    cx="62"
                    cy="39"
                    rx="4.5"
                    ry="5"
                    fill="#38bdf8"
                    animate={{ ry: [5, 5, 1.2, 5, 5.5, 5] }}
                    transition={{ duration: 2.2, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 0.8, 1] }}
                  />
                  <circle cx="60.5" cy="37.5" r="1.5" fill="#ffffff" />
                </g>
              ) : (
                /* --- IDLE STATE: FRIENDLY GLOWING CYBER EYES WITH NATURAL BLINK --- */
                <g id="idle-eyes">
                  <motion.ellipse
                    cx="38"
                    cy="39"
                    rx="4"
                    ry="4.5"
                    fill="#38bdf8"
                    animate={{ ry: [4.5, 4.5, 0.5, 4.5, 4.5] }}
                    transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.85, 0.9, 0.95, 1] }}
                  />
                  <circle cx="37" cy="37.8" r="1.3" fill="#ffffff" />

                  <motion.ellipse
                    cx="62"
                    cy="39"
                    rx="4"
                    ry="4.5"
                    fill="#38bdf8"
                    animate={{ ry: [4.5, 4.5, 0.5, 4.5, 4.5] }}
                    transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.85, 0.9, 0.95, 1] }}
                  />
                  <circle cx="61" cy="37.8" r="1.3" fill="#ffffff" />
                </g>
              )}
            </g>

            {/* ================= 5. VISOR LIP / MOUTH ANIMATION WAVE ================= */}
            <g id="visor-mouth">
              {isTalking ? (
                /* --- TALKING STATE: LIP / MOUTH AUDIO EQUALIZER SPEECH WAVE --- */
                <g id="talking-mouth-wave">
                  {/* Wave Bar 1 */}
                  <motion.rect
                    x="37"
                    y="47"
                    width="2.5"
                    height="6"
                    rx="1.25"
                    fill="url(#waveGrad)"
                    animate={{ height: [3, 8, 4, 7, 3], y: [48.5, 46, 48, 46.5, 48.5] }}
                    transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Wave Bar 2 */}
                  <motion.rect
                    x="42"
                    y="46"
                    width="2.5"
                    height="9"
                    rx="1.25"
                    fill="url(#waveGrad)"
                    animate={{ height: [4, 11, 5, 10, 4], y: [48, 44.5, 47.5, 45, 48] }}
                    transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut", delay: 0.08 }}
                  />
                  {/* Wave Bar 3 (Center) */}
                  <motion.rect
                    x="47"
                    y="45"
                    width="3"
                    height="12"
                    rx="1.5"
                    fill="url(#waveGrad)"
                    animate={{ height: [5, 13, 6, 12, 5], y: [47.5, 43.5, 47, 44, 47.5] }}
                    transition={{ duration: 0.38, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
                  />
                  {/* Wave Bar 4 */}
                  <motion.rect
                    x="53"
                    y="46"
                    width="2.5"
                    height="9"
                    rx="1.25"
                    fill="url(#waveGrad)"
                    animate={{ height: [4, 11, 6, 9, 4], y: [48, 44.5, 47, 45.5, 48] }}
                    transition={{ duration: 0.42, repeat: Infinity, ease: "easeInOut", delay: 0.05 }}
                  />
                  {/* Wave Bar 5 */}
                  <motion.rect
                    x="58"
                    y="47"
                    width="2.5"
                    height="6"
                    rx="1.25"
                    fill="url(#waveGrad)"
                    animate={{ height: [3, 8, 4, 7, 3], y: [48.5, 46, 48, 46.5, 48.5] }}
                    transition={{ duration: 0.36, repeat: Infinity, ease: "easeInOut", delay: 0.12 }}
                  />
                </g>
              ) : isThinking ? (
                /* --- THINKING STATE: DIGITAL PROGRESS DOTS ON VISOR --- */
                <g id="thinking-mouth-dots">
                  <motion.circle
                    cx="41"
                    cy="48"
                    r="1.8"
                    fill="#38bdf8"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 0.7, repeat: Infinity, delay: 0 }}
                  />
                  <motion.circle
                    cx="47"
                    cy="48"
                    r="1.8"
                    fill="#38bdf8"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 0.7, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.circle
                    cx="53"
                    cy="48"
                    r="1.8"
                    fill="#38bdf8"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 0.7, repeat: Infinity, delay: 0.4 }}
                  />
                  <motion.circle
                    cx="59"
                    cy="48"
                    r="1.8"
                    fill="#38bdf8"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 0.7, repeat: Infinity, delay: 0.6 }}
                  />
                </g>
              ) : (
                /* --- IDLE STATE: CALM DIGITAL SMILE --- */
                <g id="idle-mouth">
                  <path
                    d="M 43 47 Q 50 51 57 47"
                    stroke="#38bdf8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.85"
                  />
                  <circle cx="42" cy="46.5" r="1" fill="#38bdf8" opacity="0.9" />
                  <circle cx="58" cy="46.5" r="1" fill="#38bdf8" opacity="0.9" />
                </g>
              )}
            </g>
          </g>

          {/* ================= 6. ARMS ================= */}
          <motion.path
            d="M 72 55 Q 85 60 80 75"
            fill="none"
            stroke="url(#bodyGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            style={{ transformOrigin: "72px 55px" }}
            animate={
              isThinking
                ? { rotate: [0, 10, -5, 0] }
                : isTalking
                ? { rotate: [0, -12, 4, 0] }
                : { rotate: [0, 6, -2, 0] }
            }
            transition={{ duration: isTalking ? 1.5 : 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 28 55 Q 15 60 20 75"
            fill="none"
            stroke="url(#bodyGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            style={{ transformOrigin: "28px 55px" }}
            animate={
              isThinking
                ? { rotate: [0, -10, 5, 0] }
                : isTalking
                ? { rotate: [0, 12, -4, 0] }
                : { rotate: [0, -6, 2, 0] }
            }
            transition={{ duration: isTalking ? 1.5 : 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>
      </svg>
    </div>
  );
};

// ==========================================
// MAIN AIChatWidget COMPONENT
// ==========================================
export const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isGreeting, setIsGreeting] = useState(false);
  const [greetingText, setGreetingText] = useState("Hello! 👋");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "model",
      text: "Namaste! I'm your AI Mushroom Farm Advisor. Ask me about setup costs, spawn, temperature, or commercial ROI!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [robotState, setRobotState] = useState<RobotState>("idle");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isHidden, setIsHidden] = useState(false);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

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
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
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
  }, [messages, isLoading, robotState]);

  useEffect(() => {
    const hour = new Date().getHours();
    let text = "Hello! 👋";
    if (hour >= 5 && hour < 12) text = "Good morning! 👋";
    else if (hour >= 12 && hour < 17) text = "Good afternoon! 👋";
    else if (hour >= 17 && hour < 21) text = "Good evening! 👋";
    else text = "Good night! 👋";
    setGreetingText(text);

    const timer1 = setTimeout(() => setIsGreeting(true), 1500);
    const timer2 = setTimeout(() => setIsGreeting(false), 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

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

  const handleSendMessage = async (e?: React.FormEvent, customPrompt?: string) => {
    e?.preventDefault();
    const promptToSend = (customPrompt || inputValue).trim();
    if (!promptToSend || isLoading) return;

    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: promptToSend,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    // 1. THINKING STATE: Trigger antenna glow & calculation eyes!
    setRobotState("thinking");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg.text,
          history: messages.map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      const replyText =
        data.text ||
        data.reply ||
        "Thank you for contacting us. For instant commercial consultation, call/WhatsApp: +91 9203544140.";

      setIsLoading(false);

      // 2. TALKING / ANSWERING STATE: Visor voice wave active & streaming typing message!
      setRobotState("talking");

      const botMsgId = (Date.now() + 1).toString();
      const initialBotMsg: Message = {
        id: botMsgId,
        role: "model",
        text: "",
      };

      setMessages((prev) => [...prev, initialBotMsg]);

      // Progressive typing message display
      let currentLength = 0;
      const totalLength = replyText.length;
      // Step size so it types smoothly in ~1.5 - 2.5s
      const step = Math.max(3, Math.ceil(totalLength / 45));
      const intervalMs = 22;

      typingIntervalRef.current = setInterval(() => {
        currentLength = Math.min(totalLength, currentLength + step);
        const partialText = replyText.slice(0, currentLength);

        setMessages((prev) =>
          prev.map((m) => (m.id === botMsgId ? { ...m, text: partialText } : m))
        );

        if (currentLength >= totalLength) {
          if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
            typingIntervalRef.current = null;
          }
          // Let mouth animation finish smoothly
          setTimeout(() => {
            setRobotState("idle");
          }, 700);
        }
      }, intervalMs);
    } catch (error) {
      setIsLoading(false);
      setRobotState("idle");
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "model",
          text: "I experienced a slight connection delay. You can connect directly with our agronomist on WhatsApp: +91 9203544140.",
        },
      ]);
    }
  };

  const resetChat = () => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }
    setRobotState("idle");
    setMessages([
      {
        id: Date.now().toString(),
        role: "model",
        text: "Chat refreshed! How can I assist your mushroom farming venture today?",
      },
    ]);
  };

  return (
    <AnimatePresence>
      {!isHidden && (
        <div className="relative z-[99999]">
          {/* ================= CHAT POPUP WINDOW ================= */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={chatRef}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute z-[100000] bg-slate-950/95 backdrop-blur-xl flex flex-col overflow-hidden shadow-2xl border border-purple-500/30 ${
                  isFullScreen
                    ? "fixed inset-0 w-full h-full rounded-none"
                    : "bottom-[75px] left-0 w-[320px] sm:w-[380px] rounded-3xl"
                }`}
                style={{
                  transformOrigin: "bottom left",
                  ...(isFullScreen
                    ? {}
                    : { maxHeight: "calc(100vh - 140px)", height: "490px" }),
                }}
              >
                {/* Header with Live Synchronized Bot Avatar */}
                <div className="bg-linear-to-r from-emerald-600 via-teal-700 to-indigo-800 p-3.5 text-white flex items-center justify-between shadow-md z-10 shrink-0">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-2xl bg-black/30 border border-white/20 p-1 flex items-center justify-center">
                      <BotAvatar state={robotState} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-sm text-white">
                          MycoBot Advisor
                        </span>
                        <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-white/20 text-white">
                          Gemini 3.8
                        </span>
                      </div>
                      <p className="text-[10.5px] text-white/80 flex items-center gap-1">
                        {robotState === "thinking" ? (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 inline-block animate-ping" />
                            <span className="text-cyan-200 font-semibold">
                              Thinking & Calculating...
                            </span>
                          </>
                        ) : robotState === "talking" ? (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-300 inline-block animate-bounce" />
                            <span className="text-purple-200 font-semibold">
                              Speaking via Visor Waves...
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block animate-pulse" />
                            <span>Online • Farm Agronomist</span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={resetChat}
                      title="Reset Chat"
                      className="p-1.5 hover:bg-white/20 rounded-lg text-white/80 hover:text-white transition-colors cursor-pointer"
                    >
                      <RefreshCw size={14} />
                    </button>
                    <button
                      onClick={() => setIsFullScreen(!isFullScreen)}
                      className="p-1.5 hover:bg-white/20 rounded-lg text-white/80 hover:text-white transition-colors hidden sm:block cursor-pointer"
                    >
                      {isFullScreen ? (
                        <Minimize2 size={16} />
                      ) : (
                        <Maximize2 size={16} />
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        setIsFullScreen(false);
                      }}
                      className="p-1.5 hover:bg-white/20 rounded-lg text-white/80 hover:text-white transition-colors cursor-pointer"
                    >
                      <X size={17} />
                    </button>
                  </div>
                </div>

                {/* Quick Prompt Chips */}
                <div className="p-2 bg-purple-950/30 border-b border-purple-500/20 overflow-x-auto scrollbar-hide flex items-center gap-1.5 shrink-0">
                  {[
                    "💰 Setup Cost?",
                    "🍄 Button vs Oyster?",
                    "🎓 Workshop ₹199?",
                    "🌡️ Temp & Humidity?",
                  ].map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(undefined, chip)}
                      disabled={isLoading}
                      className="shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-400/40 text-slate-200 transition-all active:scale-95 disabled:opacity-50 cursor-pointer whitespace-nowrap"
                    >
                      {chip}
                    </button>
                  ))}
                </div>

                {/* Chat Message Stream */}
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-slate-950/80 text-xs sm:text-[13px] scrollbar-thin">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                          msg.role === "user"
                            ? "bg-indigo-600 text-white rounded-br-xs"
                            : "bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-xs shadow-md"
                        }`}
                      >
                        {msg.text === "" && msg.role === "model" ? (
                          /* Initial Live Typing indicator pulse */
                          <div className="flex items-center gap-1 py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse [animation-delay:0.2s]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse [animation-delay:0.4s]" />
                          </div>
                        ) : (
                          <div className="whitespace-pre-wrap">{msg.text}</div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Thinking State Loading Box */}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-slate-900/90 border border-cyan-500/40 rounded-2xl rounded-bl-xs px-3.5 py-2.5 shadow-md flex items-center gap-2.5 text-cyan-300 text-xs font-medium">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        <span>Antenna active: Calculating climate & economics...</span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* WhatsApp Direct Ag-Support */}
                <div className="px-3 py-1 bg-emerald-950/40 border-t border-emerald-500/20 flex items-center justify-between text-[11px] shrink-0">
                  <span className="text-emerald-300 font-medium">Direct Agronomist:</span>
                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20was%20chatting%20with%20AI%20Advisor."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-bold underline"
                  >
                    WhatsApp (+91 9203544140)
                  </a>
                </div>

                {/* Input Form */}
                <div className="p-2.5 bg-slate-900 border-t border-slate-800 shrink-0">
                  <form
                    onSubmit={handleSendMessage}
                    className="flex items-center gap-2 bg-slate-950 rounded-2xl px-3 py-1.5 border border-slate-800 focus-within:border-emerald-500 transition-colors"
                  >
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask about spawn, cost, climate, training..."
                      disabled={isLoading}
                      className="flex-1 bg-transparent border-none outline-none text-xs sm:text-sm text-slate-100 placeholder-slate-500 py-1"
                    />
                    <button
                      type="submit"
                      disabled={!inputValue.trim() || isLoading}
                      className={`p-2 rounded-xl text-white transition-all cursor-pointer shrink-0 ${
                        isLoading
                          ? "bg-cyan-600/50 cursor-not-allowed"
                          : "bg-emerald-600 hover:bg-emerald-500 active:scale-95"
                      }`}
                    >
                      <Send size={14} />
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ================= STICKY LAUNCHER BUTTON & DYNAMIC STATUS BADGE ================= */}
          <div className="relative flex items-center gap-2.5">
            {/* Dynamic Interactive Speech Bubble (Thinking / Talking / Idle) */}
            <AnimatePresence>
              {isGreeting && !isOpen && robotState === "idle" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-10 left-2 bg-slate-950 text-emerald-400 font-bold px-3 py-1.5 text-xs rounded-2xl rounded-bl-none shadow-[0_4px_20px_rgba(16,185,129,0.3)] border border-emerald-500/40 whitespace-nowrap z-10 flex items-center gap-1.5"
                >
                  <Sparkles size={12} className="text-emerald-400 animate-spin" />
                  <span>{greetingText}</span>
                </motion.div>
              )}

              {robotState === "thinking" && !isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  className="hidden sm:flex items-center px-3 py-1.5 rounded-full bg-slate-950/95 border border-cyan-400 text-cyan-300 text-xs font-semibold shadow-[0_0_20px_rgba(34,211,238,0.5)] backdrop-blur-md gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>Antenna Glowing: Calculating...</span>
                </motion.div>
              )}

              {robotState === "talking" && !isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  className="hidden sm:flex items-center px-3 py-1.5 rounded-full bg-slate-950/95 border border-purple-400 text-purple-200 text-xs font-semibold shadow-[0_0_20px_rgba(168,85,247,0.5)] backdrop-blur-md gap-2"
                >
                  <span className="flex items-center gap-0.5">
                    <span className="w-1 h-3 bg-purple-400 animate-bounce" />
                    <span className="w-1 h-4 bg-purple-300 animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1 h-2 bg-purple-400 animate-bounce [animation-delay:0.3s]" />
                  </span>
                  <span>Visor Wave: Answering...</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* The Sticky Animated Robot Button */}
            <motion.button
              onClick={handleOpenClick}
              aria-label="Toggle AI Assistant"
              className={`relative w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center cursor-pointer transition-all outline-none ${
                robotState === "thinking"
                  ? "bg-slate-950/90 border-2 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.7)]"
                  : robotState === "talking"
                  ? "bg-slate-950/90 border-2 border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.7)]"
                  : "bg-slate-950/80 border border-emerald-500/40 hover:border-emerald-400 shadow-[0_8px_24px_rgba(16,185,129,0.3)]"
              }`}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              animate={
                robotState === "thinking"
                  ? { y: [0, -6, 0] }
                  : robotState === "talking"
                  ? { y: [0, -5, 0] }
                  : { y: [0, -4, 0] }
              }
              transition={{
                duration: robotState === "thinking" ? 1.2 : robotState === "talking" ? 1.4 : 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11">
                <BotAvatar state={robotState} />
              </div>
            </motion.button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AIChatWidget;
