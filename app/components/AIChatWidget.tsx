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
import { RobotAvatar, type BotAnimationState } from "./RobotAvatar";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  isTyping?: boolean;
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
  const [botState, setBotState] = useState<BotAnimationState>("idle");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);
  const [displayedTypingText, setDisplayedTypingText] = useState<string>("");

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
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isLoading, displayedTypingText]);

  // Clean up any ongoing typing timers on unmount
  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current);
      }
    };
  }, []);

  // Typewriter effect function for streaming response text with mouth wave
  const startTypewriterEffect = (fullText: string, messageId: string) => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
    }

    setTypingMessageId(messageId);
    setDisplayedTypingText("");
    setBotState("talking"); // Talking / Answering state: Visor lip/mouth wave activates!

    let currentIndex = 0;
    const chunkSize = 3; // Type 3 characters per tick for smooth fast typing
    const intervalMs = 18; // 18ms per tick for natural speech rhythm

    typingTimerRef.current = setInterval(() => {
      currentIndex += chunkSize;
      if (currentIndex >= fullText.length) {
        // Typing finished!
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
        setDisplayedTypingText(fullText);
        setTypingMessageId(null);
        setBotState("idle"); // Returns to idle friendly state

        // Finalize message content in state
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId ? { ...msg, content: fullText, isTyping: false } : msg
          )
        );
      } else {
        setDisplayedTypingText(fullText.slice(0, currentIndex));
      }
    }, intervalMs);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || inputMessage).trim();
    if (!messageContent || isLoading) return;

    // If currently typing, instantly complete it before sending new one
    if (typingMessageId && typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      setTypingMessageId(null);
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
    setBotState("thinking"); // Thinking State: Antenna glows brightly & eyes start calculating!

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageContent,
          history: [...messages, userMessage].map((m) => ({
            role: m.role,
            text: m.content,
          })),
        }),
      });

      const data = await response.json();
      const replyText =
        data.text ||
        data.reply ||
        "Thank you for reaching out. Please connect directly on WhatsApp: +91 9203544140.";

      setIsLoading(false);

      const assistantMsgId = `ai-${Date.now()}`;
      const assistantMessage: ChatMessage = {
        id: assistantMsgId,
        role: "assistant",
        content: replyText,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isTyping: true,
      };

      // Add to messages list
      setMessages((prev) => [...prev, assistantMessage]);

      // Start the dynamic typewriter typing display and mouth animation!
      startTypewriterEffect(replyText, assistantMsgId);
    } catch (error) {
      console.error("Chat error:", error);
      setIsLoading(false);
      setBotState("idle");

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
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    setTypingMessageId(null);
    setBotState("idle");
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
      {/* ================= STICKY LAUNCHER BUTTON WITH ROBOT ANIMATIONS ================= */}
      <div className="relative z-50 pointer-events-auto flex items-center gap-2.5">
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className={`relative w-13 h-13 sm:w-15 sm:h-15 rounded-full text-white shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 ${
            botState === "thinking"
              ? "bg-gradient-to-tr from-cyan-900 via-slate-900 to-indigo-900 border-2 border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.65)]"
              : botState === "talking"
              ? "bg-gradient-to-tr from-purple-900 via-indigo-900 to-pink-900 border-2 border-purple-400 shadow-[0_0_35px_rgba(168,85,247,0.65)]"
              : "bg-gradient-to-tr from-purple-700 via-indigo-700 to-slate-950 border border-purple-400/50 shadow-[0_8px_30px_rgba(147,51,234,0.5)]"
          }`}
          aria-label="Open AI Mushroom Advisor"
        >
          {/* Subtle Energy Halo */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-300 pointer-events-none ${
              botState === "thinking"
                ? "bg-cyan-500/25 animate-ping"
                : botState === "talking"
                ? "bg-purple-500/25 animate-pulse"
                : "bg-purple-500/15"
            }`}
          />

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close-icon"
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                className="text-white"
              >
                <X size={26} />
              </motion.div>
            ) : (
              <motion.div
                key="robot-icon"
                initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -45, opacity: 0, scale: 0.8 }}
                className="flex items-center justify-center"
              >
                {/* Custom Animated Robot Avatar on the Sticky Button */}
                <RobotAvatar state={botState} size="lg" showAntenna={true} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Dynamic Status Badges Floating Beside the Sticky Button */}
        {!isOpen && (
          <AnimatePresence mode="wait">
            {botState === "thinking" ? (
              <motion.div
                key="status-thinking"
                initial={{ opacity: 0, x: -10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 0.9 }}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/95 border border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
                <span className="text-[11px] font-bold text-cyan-200 tracking-wide">
                  Calculating parameters...
                </span>
              </motion.div>
            ) : botState === "talking" ? (
              <motion.div
                key="status-talking"
                initial={{ opacity: 0, x: -10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 0.9 }}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/95 border border-purple-400/80 shadow-[0_0_20px_rgba(168,85,247,0.4)] backdrop-blur-md"
              >
                <div className="flex items-end gap-[2px] h-3 shrink-0">
                  <span className="w-0.5 h-3 bg-purple-400 rounded-full animate-bounce" />
                  <span className="w-0.5 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:0.15s]" />
                  <span className="w-0.5 h-3.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.3s]" />
                </div>
                <span className="text-[11px] font-bold text-purple-200 tracking-wide">
                  Answering your query...
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="status-idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-slate-200 border border-purple-500/30 text-xs shadow-lg backdrop-blur-md transition-all cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse shrink-0" />
                <span className="font-semibold text-[11px]">Ask AI Agronomist</span>
              </motion.div>
            )}
          </AnimatePresence>
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
            className={`fixed z-50 left-3 sm:left-6 bottom-36 md:bottom-24 bg-slate-950/95 backdrop-blur-2xl border rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden transition-all duration-300 ${
              botState === "thinking"
                ? "border-cyan-500/40"
                : botState === "talking"
                ? "border-purple-500/40"
                : "border-slate-800"
            } ${
              isExpanded
                ? "w-[calc(100vw-24px)] sm:w-[600px] h-[80vh] max-h-[700px]"
                : "w-[calc(100vw-24px)] sm:w-[400px] h-[540px]"
            }`}
          >
            {/* Header with Robot Avatar displaying Live Animation State */}
            <div className="p-3.5 sm:p-4 bg-gradient-to-r from-purple-950/70 via-slate-900/90 to-slate-950 border-b border-purple-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                {/* Robot Avatar in Header */}
                <div className="relative p-1 rounded-2xl bg-purple-950/40 border border-purple-400/30 flex items-center justify-center shrink-0">
                  <RobotAvatar state={botState} size="md" showAntenna={true} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-black text-white">MycoBot Advisor</h4>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider transition-colors ${
                        botState === "thinking"
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
                          : botState === "talking"
                          ? "bg-purple-500/20 text-purple-300 border border-purple-400/40"
                          : "bg-emerald-500/20 text-emerald-300"
                      }`}
                    >
                      {botState === "thinking"
                        ? "Thinking..."
                        : botState === "talking"
                        ? "Talking..."
                        : "Online"}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
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
                      ? "Calculating formula & genetics..."
                      : botState === "talking"
                      ? "Speaking & delivering answer..."
                      : "Jabalpur Head Agronomist AI"}
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
                  {isExpanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
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
            <div className="p-2.5 bg-purple-950/20 border-b border-purple-500/10 overflow-x-auto scrollbar-hide flex items-center gap-1.5">
              {QUICK_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isLoading || botState === "talking"}
                  className="shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 text-slate-300 hover:text-purple-200 transition-all active:scale-95 disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3.5 scrollbar-thin text-xs sm:text-sm">
              {messages.map((msg) => {
                const isUser = msg.role === "user";
                const isCurrentlyTyping = msg.id === typingMessageId;
                const messageText = isCurrentlyTyping
                  ? displayedTypingText
                  : msg.content;

                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2.5 ${
                      isUser ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    {/* Message Avatar */}
                    <div className="shrink-0">
                      {isUser ? (
                        <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                          <User size={14} />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-slate-900 border border-purple-500/40 flex items-center justify-center">
                          <RobotAvatar
                            state={isCurrentlyTyping ? "talking" : "idle"}
                            size="sm"
                            showAntenna={false}
                          />
                        </div>
                      )}
                    </div>

                    <div
                      className={`max-w-[84%] relative group ${
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
                        <div className="markdown-body text-xs sm:text-[13px] text-slate-100 dark:text-slate-100">
                          <Markdown>{messageText}</Markdown>
                          {/* Blinking Typewriter Cursor during streaming */}
                          {isCurrentlyTyping && (
                            <span className="inline-block w-1.5 h-3.5 bg-purple-400 ml-1 animate-pulse align-middle" />
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-1 px-1 text-[10px] text-slate-500">
                        <span>{msg.timestamp}</span>
                        {!isUser && !isCurrentlyTyping && (
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

              {/* Thinking State Indicator Bubble inside Chat Body */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2.5"
                >
                  <div className="w-7 h-7 rounded-full bg-slate-900 border border-cyan-400/50 flex items-center justify-center shrink-0">
                    <RobotAvatar state="thinking" size="sm" showAntenna={false} />
                  </div>
                  <div className="p-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 rounded-tl-xs flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse [animation-delay:0.2s]" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse [animation-delay:0.4s]" />
                    </div>
                    <span className="text-xs text-cyan-200 font-medium">
                      Calculating & analyzing farm parameters...
                    </span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* WhatsApp Fallback Bar */}
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
                disabled={isLoading || botState === "talking"}
                className="flex-1 bg-white/5 border border-white/10 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading || botState === "talking"}
                className="w-10 h-10 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
                aria-label="Send message"
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
