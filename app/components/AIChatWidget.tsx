"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useDragControls } from "motion/react";
import Markdown from "react-markdown";
import { X, Send, Bot, User, RefreshCw, Copy, Check, Minimize2, Maximize2 } from "lucide-react";

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
  "📦 How to buy F1 Spawn?"
];

export const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userIsTyping, setUserIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Drag state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hasMounted, setHasMounted] = useState(false);
  const dragControls = useDragControls();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content: "**Namaste! Welcome to Organic Mushrooms Farm AI Advisor.** 🍄\n\nI can assist you with:\n- 📋 Commercial Farm Setup & Cost Estimates\n- 🌡️ Temperature, Humidity & Climate Controls\n- 🎓 Live Training Enrollment (₹199 / ₹499)\n- 🌾 High-Yield F1 Spawn Supply\n\nHow can I help you today?",
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setHasMounted(true);
    const savedPos = localStorage.getItem("chatWidgetPosition_v2");
    if (savedPos) {
      try {
        setPosition(JSON.parse(savedPos));
      } catch (e) {
        // ignore JSON parse error
      }
    }
  }, []);

  const handleDragEnd = (event: any, info: any) => {
    const newPos = { x: position.x + info.offset.x, y: position.y + info.offset.y };
    setPosition(newPos);
    localStorage.setItem("chatWidgetPosition_v2", JSON.stringify(newPos));
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || inputMessage).trim();
    if (!messageContent || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setUserIsTyping(false);
    setIsLoading(true);

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
      const replyText = data.reply || data.text || "Thank you for reaching out. Please connect directly on WhatsApp: +91 9203544140.";

      const assistantMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        content: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content:
          "I experienced a slight connection delay. You can also chat directly with our head agronomist on WhatsApp at **+91 9203544140**.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const resetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        content: "Chat reset! What would you like to know about commercial mushroom cultivation, spawn booking, or farm setup?",
        timestamp: "Just now",
      },
    ]);
  };

  if (!hasMounted) return null;

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false} // Only allow drag via pointer down (hold)
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      initial={{ x: position.x, y: position.y }}
      animate={{ x: position.x, y: position.y }}
      className="relative z-50 pointer-events-auto touch-none"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30, originX: 0, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className={`absolute bottom-20 left-0 bg-slate-950/95 backdrop-blur-2xl border border-emerald-500/30 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden transition-all duration-300 ${
              isExpanded
                ? "w-[calc(100vw-24px)] sm:w-[600px] h-[80vh] max-h-[700px]"
                : "w-[calc(100vw-24px)] sm:w-[390px] h-[540px]"
            }`}
            onPointerDownCapture={(e) => e.stopPropagation()} // Prevent drag when clicking inside chat
          >
            {/* Header with Liquid Glass Circle */}
            <div className="relative p-4 flex items-center justify-between text-white overflow-hidden bg-gradient-to-r from-emerald-900 via-slate-900 to-slate-950 border-b border-emerald-500/20">
              {/* LIQUID GLASS CIRCLE BACKGROUND FOR TEXT (The user specifically asked for this) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-3 w-[220px] h-10 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] pointer-events-none" />
               
              <div className="relative flex items-center gap-2 pl-3">
                <span className="font-bold text-sm tracking-wide">Organic Mushroom Farm AI</span>
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              </div>
              
              <div className="relative flex items-center gap-1">
                <button
                  onClick={resetChat}
                  title="Reset Chat"
                  className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <RefreshCw size={15} />
                </button>
                <button
                  onClick={() => setIsExpanded((prev) => !prev)}
                  title={isExpanded ? "Collapse" : "Expand"}
                  className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors hidden sm:block"
                >
                  {isExpanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Quick Prompt Chips */}
            <div className="p-2.5 bg-emerald-950/20 border-b border-emerald-500/10 overflow-x-auto scrollbar-hide flex items-center gap-1.5">
              {QUICK_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isLoading}
                  className="shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-200 transition-all active:scale-95 disabled:opacity-50"
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
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs ${
                        isUser
                          ? "bg-emerald-600 text-white"
                          : "bg-emerald-900/50 border border-emerald-500/30 text-emerald-300"
                      }`}
                    >
                      {isUser ? <User size={14} /> : <Bot size={14} />}
                    </div>

                    <div className={`max-w-[82%] relative group ${isUser ? "text-right" : "text-left"}`}>
                      <div
                        className={`p-3 rounded-2xl leading-relaxed ${
                          isUser
                            ? "bg-emerald-600 text-white rounded-tr-[4px]"
                            : "bg-white/5 border border-white/10 text-slate-200 rounded-tl-[4px]"
                        }`}
                      >
                        <div className="markdown-body text-xs sm:text-[13px] text-slate-100 dark:text-slate-100">
                          <Markdown>{msg.content}</Markdown>
                        </div>
                      </div>

                      <div className={`flex items-center gap-2 mt-1 px-1 text-[10px] text-slate-500 ${isUser ? "justify-end" : "justify-start"}`}>
                        <span>{msg.timestamp}</span>
                        {!isUser && (
                          <button
                            onClick={() => copyMessage(msg.id, msg.content)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-slate-300"
                            title="Copy reply"
                          >
                            {copiedId === msg.id ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-300 flex items-center justify-center">
                    <Bot size={14} />
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 rounded-tl-[4px] flex items-center gap-1.5">
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }} className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.15 }} className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.3 }} className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* WhatsApp Fallback */}
            <div className="px-3 py-1.5 bg-emerald-950/30 border-t border-emerald-500/10 flex items-center justify-between text-[11px]">
              <span className="text-emerald-300/80 font-medium">Need instant human support?</span>
              <a
                href="https://wa.me/919203544140"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-bold underline"
              >
                WhatsApp Us
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
                onChange={(e) => {
                  setInputMessage(e.target.value);
                  setUserIsTyping(e.target.value.length > 0);
                }}
                placeholder="Ask about mushroom farming..."
                disabled={isLoading}
                className="flex-1 bg-white/5 border border-white/10 focus:border-emerald-500 rounded-full px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
              />
              <motion.button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                animate={inputMessage.length > 0 ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                transition={{ repeat: inputMessage.length > 0 ? Infinity : 0, duration: 1.5 }}
                className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-white/10 disabled:text-white/30 text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
              >
                <Send size={16} className={inputMessage.length > 0 ? "ml-0.5" : ""} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* THE STICKY BUTTON: Face Animation & Hold to Drag (iPhone Style) */}
      <motion.div
        onPointerDown={(e) => {
          // Allow dragging only via holding (like iPhone lock screen)
          dragControls.start(e);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }} // Squeeze effect on hold indicating drag/open
        onClick={() => !isOpen && setIsOpen(true)}
        className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-tr from-emerald-600 to-teal-500 border border-emerald-400/30 rounded-full shadow-[0_8px_30px_rgba(16,185,129,0.5)] flex items-center justify-center cursor-pointer relative"
      >
        {/* Glow behind */}
        <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20 pointer-events-none" />
        
        {isOpen ? (
          <motion.div initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
            <X size={26} className="text-white" />
          </motion.div>
        ) : (
          <motion.svg viewBox="0 0 100 100" className="w-10 h-10 text-white relative z-10 pointer-events-none">
            {/* Eyes */}
            <motion.circle 
              cx="35" cy="40" r="5.5" fill="currentColor"
              animate={
                isLoading ? { cx: [30, 40, 35, 30], cy: [35, 35, 45, 35] } : // AI thinking (Darting eyes)
                userIsTyping ? { cx: 35, cy: 45 } : // User typing (Looking down)
                { scaleY: [1, 0.1, 1], transition: { repeat: Infinity, repeatDelay: 3.5 } } // Normal blinking
              }
            />
            <motion.circle 
              cx="65" cy="40" r="5.5" fill="currentColor"
              animate={
                isLoading ? { cx: [60, 70, 65, 60], cy: [35, 35, 45, 35] } :
                userIsTyping ? { cx: 65, cy: 45 } :
                { scaleY: [1, 0.1, 1], transition: { repeat: Infinity, repeatDelay: 3.5 } }
              }
            />
            
            {/* Mouth */}
            <motion.path
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              d={isLoading ? "M 42 68 Q 50 68 58 68" : "M 35 65 Q 50 78 65 65"}
              animate={{ d: isLoading ? "M 42 68 Q 50 68 58 68" : "M 35 65 Q 50 78 65 65" }}
            />
          </motion.svg>
        )}
      </motion.div>
    </motion.div>
  );
};

export default AIChatWidget;
