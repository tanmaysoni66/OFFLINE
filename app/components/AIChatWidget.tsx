"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Markdown from "react-markdown";
import {
  X,
  Send,
  Sparkles,
  User,
  RefreshCw,
  Copy,
  Check,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { RobotAvatar, RobotState } from "./RobotAvatar";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const QUICK_PROMPTS = [
  "💰 Commercial Farm Setup Cost?",
  "🍄 Button vs Oyster Farming?",
  "🎓 Training Masterclass (₹199)?",
  "🌡️ Ideal Temperature & Humidity?",
  "📦 How to buy F1 Spawn?",
];

export const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [robotState, setRobotState] = useState<RobotState>("idle");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content:
        "**Namaste! Welcome to Organic Mushrooms Farm AI Advisor.** 🍄\n\nI can assist you with:\n- 📋 Commercial Farm Setup & Cost Estimates\n- 🌡️ Temperature, Humidity & Climate Controls\n- 🎓 Live Training Enrollment (₹199 / ₹499)\n- 🌾 High-Yield F1 Spawn Supply\n\nHow can I help you today?",
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isLoading]);

  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || inputMessage).trim();
    if (!messageContent || isLoading) return;

    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: messageContent,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    setRobotState("thinking");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageContent,
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      const replyText =
        data.reply ||
        data.text ||
        "Thank you for reaching out. Please connect directly on WhatsApp: +91 9203544140.";

      setIsLoading(false);
      setRobotState("talking");

      const assistantMessageId = `ai-${Date.now()}`;
      const initialAssistantMessage: ChatMessage = {
        id: assistantMessageId,
        role: "assistant",
        content: "",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, initialAssistantMessage]);

      // Typing streaming animation
      let currentLength = 0;
      const totalLength = replyText.length;
      // Step size so long messages finish typing smoothly in ~1.5 - 2.5s
      const step = Math.max(3, Math.ceil(totalLength / 55));
      const intervalMs = 22;

      typingIntervalRef.current = setInterval(() => {
        currentLength = Math.min(totalLength, currentLength + step);
        const partialText = replyText.slice(0, currentLength);

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? { ...msg, content: partialText }
              : msg
          )
        );

        if (currentLength >= totalLength) {
          if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
            typingIntervalRef.current = null;
          }
          setTimeout(() => {
            setRobotState("idle");
          }, 600);
        }
      }, intervalMs);
    } catch (error) {
      console.error("Chat error:", error);
      setIsLoading(false);
      setRobotState("idle");
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content:
          "I experienced a slight connection delay. You can also chat directly with our head agronomist on WhatsApp at **+91 9203544140**.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const copyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const resetChat = () => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }
    setRobotState("idle");
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        content:
          "Chat reset! What would you like to know about commercial mushroom cultivation, spawn booking, or farm setup?",
        timestamp: "Just now",
      },
    ]);
  };

  return (
    <>
      {/* ================= FLOATING STICKY ROBOT LAUNCHER BUTTON ================= */}
      <div className="relative z-50 pointer-events-auto flex items-center gap-2">
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-linear-to-tr from-slate-950 via-indigo-950 to-purple-950 text-white shadow-[0_8px_32px_rgba(99,102,241,0.5)] border flex items-center justify-center cursor-pointer group transition-all duration-300 ${
            robotState === "thinking"
              ? "border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.7)]"
              : robotState === "talking"
              ? "border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.7)]"
              : "border-purple-500/40 hover:border-purple-400"
          }`}
          aria-label="Open AI Mushroom Advisor"
        >
          {/* Ambient Glow Aura */}
          <div
            className={`absolute inset-0 rounded-2xl sm:rounded-3xl transition-opacity duration-300 ${
              robotState === "thinking"
                ? "bg-cyan-500/25 animate-pulse opacity-100"
                : robotState === "talking"
                ? "bg-purple-500/25 animate-pulse opacity-100"
                : "bg-purple-500/10 opacity-60 group-hover:opacity-100"
            }`}
          />

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close-icon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="relative z-10 flex flex-col items-center justify-center"
              >
                <X size={26} className="text-white" />
                <span className="text-[9px] font-bold text-slate-400 tracking-wider">
                  CLOSE
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="robot-icon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="relative z-10 w-full h-full flex items-center justify-center p-1.5"
              >
                {/* Full Interactive Animated Robot Avatar on the Sticky Button */}
                <RobotAvatar state={robotState} size="sticky" showRings={true} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Dynamic State Bubble (Visible next to Sticky Button when closed) */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            className="hidden sm:flex items-center"
          >
            {robotState === "thinking" ? (
              <div className="px-3 py-1.5 rounded-full bg-slate-950/95 border border-cyan-400/60 text-cyan-300 text-xs font-semibold shadow-[0_4px_20px_rgba(34,211,238,0.4)] backdrop-blur-md flex items-center gap-2 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Antenna Active: Thinking & Calculating...</span>
              </div>
            ) : robotState === "talking" ? (
              <div className="px-3 py-1.5 rounded-full bg-slate-950/95 border border-purple-400/60 text-purple-200 text-xs font-semibold shadow-[0_4px_20px_rgba(168,85,247,0.4)] backdrop-blur-md flex items-center gap-2">
                <span className="flex items-center gap-0.5">
                  <span className="w-1 h-3 bg-purple-400 animate-bounce" />
                  <span className="w-1 h-4 bg-purple-300 animate-bounce [animation-delay:0.15s]" />
                  <span className="w-1 h-2 bg-purple-400 animate-bounce [animation-delay:0.3s]" />
                </span>
                <span>Answering: Visor Voice Wave Active...</span>
              </div>
            ) : (
              <button
                onClick={() => setIsOpen(true)}
                className="px-3 py-1.5 rounded-full bg-slate-950/85 hover:bg-slate-900 border border-purple-500/30 hover:border-purple-400/60 text-slate-300 hover:text-white text-xs font-medium shadow-md backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles size={13} className="text-purple-400" />
                <span>Ask MycoBot AI 🍄</span>
              </button>
            )}
          </motion.div>
        )}
      </div>

      {/* ================= FLOATING CHAT WINDOW ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30, originX: 0, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`fixed z-50 left-3 sm:left-6 bottom-36 md:bottom-24 bg-slate-950/95 backdrop-blur-2xl border border-purple-500/30 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden transition-all duration-300 ${
              isExpanded
                ? "w-[calc(100vw-24px)] sm:w-[600px] h-[80vh] max-h-[700px]"
                : "w-[calc(100vw-24px)] sm:w-[400px] h-[540px]"
            }`}
          >
            {/* Header with Live Synchronized Robot Avatar */}
            <div className="p-3.5 bg-linear-to-r from-purple-950/80 via-slate-900/90 to-slate-950 border-b border-purple-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-2xl bg-purple-900/40 border border-purple-400/30 flex items-center justify-center p-1">
                  <RobotAvatar state={robotState} size="md" showRings={false} />
                  <span
                    className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-slate-900 ${
                      robotState === "thinking"
                        ? "bg-cyan-400 animate-ping"
                        : robotState === "talking"
                        ? "bg-purple-400 animate-bounce"
                        : "bg-emerald-400"
                    }`}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-black text-white">
                      MycoBot Advisor
                    </h4>
                    <span className="px-1.5 py-0.2 rounded bg-purple-500/20 text-[9px] font-bold text-purple-300 uppercase tracking-wider">
                      Gemini 3.8
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1">
                    {robotState === "thinking" ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
                        <span className="text-cyan-300 font-medium">
                          Thinking & Calculating...
                        </span>
                      </>
                    ) : robotState === "talking" ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block animate-pulse" />
                        <span className="text-purple-300 font-medium">
                          Explaining with Voice Waves...
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                        <span>Online • Jabalpur Farm Agronomist</span>
                      </>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={resetChat}
                  title="Reset Chat"
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <RefreshCw size={15} />
                </button>
                <button
                  onClick={() => setIsExpanded((prev) => !prev)}
                  title={isExpanded ? "Collapse" : "Expand"}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors hidden sm:block"
                >
                  {isExpanded ? (
                    <Minimize2 size={15} />
                  ) : (
                    <Maximize2 size={15} />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Quick Prompt Chips */}
            <div className="p-2 bg-purple-950/20 border-b border-purple-500/10 overflow-x-auto scrollbar-hide flex items-center gap-1.5">
              {QUICK_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isLoading}
                  className="shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 text-slate-300 hover:text-purple-200 transition-all active:scale-95 disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-thin text-xs sm:text-sm">
              {messages.map((msg) => {
                const isUser = msg.role === "user";
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2.5 ${
                      isUser ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs overflow-hidden ${
                        isUser
                          ? "bg-indigo-600 text-white"
                          : "bg-purple-950/60 border border-purple-500/30 p-0.5"
                      }`}
                    >
                      {isUser ? (
                        <User size={14} />
                      ) : (
                        <RobotAvatar
                          state={robotState}
                          size="sm"
                          showRings={false}
                        />
                      )}
                    </div>

                    <div
                      className={`max-w-[82%] relative group ${
                        isUser ? "text-right" : "text-left"
                      }`}
                    >
                      <div
                        className={`p-3 rounded-2xl leading-relaxed ${
                          isUser
                            ? "bg-indigo-600 text-white rounded-tr-xs"
                            : "bg-white/5 border border-white/10 text-slate-200 rounded-tl-xs"
                        }`}
                      >
                        {msg.content === "" && !isUser ? (
                          /* Initial typing pulse cursor */
                          <div className="flex items-center gap-1 py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse [animation-delay:0.2s]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse [animation-delay:0.4s]" />
                          </div>
                        ) : (
                          <div className="markdown-body text-xs sm:text-[13px] text-slate-100 dark:text-slate-100">
                            <Markdown>{msg.content}</Markdown>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mt-1 px-1 text-[10px] text-slate-500">
                        <span>{msg.timestamp}</span>
                        {!isUser && msg.content && (
                          <button
                            onClick={() => copyMessage(msg.id, msg.content)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-slate-300"
                            title="Copy reply"
                          >
                            {copiedId === msg.id ? (
                              <Check size={11} className="text-emerald-400" />
                            ) : (
                              <Copy size={11} />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Thinking State Loading Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-full bg-cyan-950/40 border border-cyan-400/40 flex items-center justify-center p-0.5">
                    <RobotAvatar state="thinking" size="sm" showRings={false} />
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900/80 border border-cyan-500/30 rounded-tl-xs flex items-center gap-2 text-xs text-cyan-300 font-medium shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    </span>
                    <span>Calculating parameters & bio-efficiency...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* WhatsApp Agronomist Direct Helpline */}
            <div className="px-3 py-1.5 bg-emerald-950/30 border-t border-emerald-500/10 flex items-center justify-between text-[11px]">
              <span className="text-emerald-300 font-medium">
                Need instant human agronomist?
              </span>
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20was%20chatting%20with%20AI%20Advisor%20and%20need%20farm%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-bold underline flex items-center gap-1"
              >
                <span>WhatsApp (+91 9203544140)</span>
              </a>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-slate-900/90 border-t border-white/10 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about spawn, cost, setup, climate..."
                disabled={isLoading}
                className="flex-1 bg-white/5 border border-white/10 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className={`w-10 h-10 rounded-xl text-white flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                  isLoading
                    ? "bg-cyan-600/50 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-500 active:scale-95"
                }`}
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;
