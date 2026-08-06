"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, ChevronLeft, Trash2 } from "lucide-react";

/**
 * Service menu — mirrors the site's "Services" nav:
 *   Utility Services   -> Bill Payments, Recharges, BBPS Services
 *   Financial Services  -> Insurance (Car, Bike, Taxi, Commercial)
 *   Travels & Booking   -> Bus Booking
 *
 * Each leaf has:
 *   - label: shown on the button
 *   - prompt: the message actually sent to the assistant when clicked
 *
 * Shown AFTER the lead-capture flow (name/email/service/callback) is done.
 */
const SERVICE_MENU = [
  {
    id: "utility",
    label: "Utility Services",
    children: [
      { id: "bill-payments", label: "Bill Payments", prompt: "How do I pay a bill?" },
      { id: "recharges", label: "Recharges", prompt: "How do I do a mobile/DTH recharge?" },
      { id: "bbps", label: "BBPS Services", prompt: "What is BBPS and what can I pay through it?" },
    ],
  },
  {
    id: "financial",
    label: "Insurance",
    children: [
      {
        id: "car-insurance",
        label: "Car Insurance",
        prompt: "Tell me about your Car Insurance plans.",
      },
      {
        id: "bike-insurance",
        label: "Bike Insurance",
        prompt: "Tell me about your Bike Insurance plans.",
      },
      {
        id: "taxi-insurance",
        label: "Taxi Insurance",
        prompt: "Tell me about your Taxi Insurance plans.",
      },
      {
        id: "commercial-insurance",
        label: "Commercial Insurance",
        prompt: "Tell me about your Commercial Insurance plans.",
      },
    ],
  },
  {
    id: "travel",
    label: "Travels & Booking",
    children: [{ id: "bus-booking", label: "Bus Booking", prompt: "How do I book a bus ticket?" }],
  },
  {
    id: "human",
    label: "Talk to a human agent",
    prompt: "I'd like to talk to a human agent.",
  },
];

// 👇 EDIT THESE to your real company contact details — shown at the end of the lead flow
const COMPANY_CONTACT = {
  email: "support@savedost.com",
};

// Ordered steps for the lead-capture flow. This now runs automatically
// as soon as the chat window is opened for the first time.
const LEAD_STEPS = [
  {
    key: "name",
    question: "Hi there! I'm the SaveDost assistant. Let's get you sorted — what's your name?",
  },
  {
    key: "email",
    question: "What's the best email address to reach you at?",
    validate: (value) => {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
      return ok ? null : "That doesn't look like a valid email. Could you re-enter it?";
    },
  },
  {
    key: "service",
    question:
      "Which service(s) are you interested in? (e.g. Bill Payments, Recharges, BBPS, Car/Bike/Taxi/Commercial Insurance, Bus Booking)",
  },
  {
    key: "callbackTime",
    question: "When's a good time to call you back? (e.g. today 5pm, tomorrow morning)",
  },
];

export default function SupportChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  // Chat starts empty — the first lead-flow question is injected once the panel opens
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Lead-capture flow state
  // null      = flow finished (or not applicable), normal AI chat / menu is active
  // 0..N-1    = currently on that step of LEAD_STEPS
  const [leadStepIndex, setLeadStepIndex] = useState(0);
  const [leadData, setLeadData] = useState({});
  const [leadComplete, setLeadComplete] = useState(false);

  const scrollRef = useRef(null);

  // Kick off the lead-capture flow the first time the chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: "assistant", content: LEAD_STEPS[0].question }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  function pushMessage(msg) {
    setMessages((prev) => [...prev, msg]);
  }

  async function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMessage = { role: "user", content: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Request failed");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      // Rollback the user message so it doesn't appear as an orphan
      setMessages((prev) => prev.slice(0, -1));
      setError(err.message || "Couldn't reach the assistant. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  // Handles one answer inside the lead-capture flow
  function handleLeadAnswer(rawValue) {
    const value = rawValue.trim();
    if (!value) return;

    const step = LEAD_STEPS[leadStepIndex];

    if (step.validate) {
      const errorMsg = step.validate(value);
      if (errorMsg) {
        pushMessage({ role: "user", content: value });
        pushMessage({ role: "assistant", content: errorMsg });
        setInput("");
        return;
      }
    }

    const updatedData = { ...leadData, [step.key]: value };
    setLeadData(updatedData);
    pushMessage({ role: "user", content: value });
    setInput("");

    const nextIndex = leadStepIndex + 1;

    if (nextIndex < LEAD_STEPS.length) {
      setLeadStepIndex(nextIndex);
      pushMessage({ role: "assistant", content: LEAD_STEPS[nextIndex].question });
    } else {
      finishLeadFlow(updatedData);
    }
  }

  // Final step: show a summary + your company's contact details, then hand off
  // to the normal service menu / AI chat.
  async function finishLeadFlow(finalData) {
    setLeadStepIndex(null);
    setLeadComplete(true);

    const summary =
      `Thanks, ${finalData.name}! Here's what I've noted:\n` +
      `• Name: ${finalData.name}\n` +
      `• Email: ${finalData.email}\n` +
      `• Service(s): ${finalData.service}\n` +
      `• Preferred callback time: ${finalData.callbackTime}\n\n` +
      `Our team will call you back at the requested time. You can also reach us directly:\n` +
      `📧 Email: ${COMPANY_CONTACT.email}`;

    pushMessage({ role: "assistant", content: summary });
    pushMessage({
      role: "assistant",
      content:
        "Is there anything else I can help you with? Pick a topic below, or just type your question.",
    });

    // Optional: send the captured lead to your backend.
    // Create an /api/lead route on your server to store/email this data.
    // This is wrapped in try/catch so a failed request never blocks the UI.
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });
    } catch (err) {
      // Silently ignore — the user has already seen the contact details either way.
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (leadStepIndex !== null) {
      handleLeadAnswer(input);
    } else {
      sendMessage(input);
    }
  }

  function handleMenuClick(item) {
    if (item.children) {
      setActiveCategory(item.id);
      return;
    }
    sendMessage(item.prompt);
    setActiveCategory(null);
  }

  function handleClearChat() {
    setMessages([{ role: "assistant", content: LEAD_STEPS[0].question }]);
    setActiveCategory(null);
    setError(null);
    setInput("");
    setLeadStepIndex(0);
    setLeadData({});
    setLeadComplete(false);
    setShowClearConfirm(false);
  }

  const currentCategory = SERVICE_MENU.find((c) => c.id === activeCategory);
  // Service menu only appears once the lead-capture flow has finished
  // Keep menu visible during loading so layout doesn't jump, but buttons are disabled
  const showMenu = leadComplete;
  const hasConversation = messages.length > 1;

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        className={`group fixed right-3 bottom-4 z-50 flex h-13 w-13 items-center justify-center rounded-full border-3 border-white text-white shadow-[0_10px_30px_rgba(12,61,76,0.38)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(12,61,76,0.48)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00a8e8]/30 sm:right-8 sm:bottom-8 sm:h-15.5 sm:w-15.5 ${isOpen ? "rotate-90 bg-[#0C3D4C]" : "bg-[#026381]"}`}
      >
        {!isOpen && (
          <span
            className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#00a8e8]/25 [animation-duration:2.4s]"
            aria-hidden="true"
          />
        )}
        {!isOpen && (
          <span className="pointer-events-none absolute right-13 hidden whitespace-nowrap rounded-lg bg-white px-3 py-2 text-xs font-bold text-[#0C3D4C] opacity-0 shadow-[0_6px_20px_rgba(12,61,76,0.18)] transition-all duration-200 group-hover:-translate-x-1 group-hover:opacity-100 sm:block">
            Need help? Chat with us
          </span>
        )}
        <span className="grid h-9.5 w-9.5 place-items-center rounded-full border border-white/25 bg-white/10 sm:h-11.5 sm:w-11.5">
          {isOpen ? (
            <X className="h-5.5 w-5.5 sm:h-[25px] sm:w-[25px]" strokeWidth={2.4} />
          ) : (
            <MessageCircle className="h-6 w-6 sm:h-[29px] sm:w-[29px]" strokeWidth={2.1} />
          )}
        </span>
        {!isOpen && (
          <span
            className="absolute right-0.5 top-0.5 h-3.5 w-3.5 rounded-full border-3 border-white bg-emerald-400"
            aria-label="Online"
          />
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed right-3 bottom-20 z-50 flex h-[min(34rem,calc(100dvh-6rem))] w-[calc(100vw-1.5rem)] max-w-95 flex-col overflow-hidden rounded-2xl bg-[#FAFAF8] shadow-[0_20px_60px_rgba(30,27,75,0.25)] ring-1 ring-black/5 sm:right-8 sm:bottom-28 sm:h-140 sm:max-h-[calc(100dvh-8rem)] sm:w-95 sm:rounded-3xl">
          {/* Header */}
          <div className="relative overflow-hidden bg-[#0C3D4C] px-4 py-4 text-white">
            {/* subtle decorative dot-grid accent */}
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 opacity-15"
              style={{
                backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
              }}
            />
            <div className="relative flex items-center gap-3">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 font-bold ring-1 ring-white/25">
                F
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-[#3730A3]" />
              </div>
              <div>
                <p className="font-semibold leading-tight tracking-tight">SaveDost</p>
                <p className="text-xs text-indigo-100/90">
                  {isLoading ? "Typing…" : "Online · You can ask me anything"}
                </p>
              </div>

              <div className="ml-auto flex items-center gap-1">
                {hasConversation && (
                  <button
                    onClick={() => setShowClearConfirm(true)}
                    aria-label="Clear chat"
                    title="Clear chat"
                    className="rounded-full p-1.5 transition-colors hover:bg-white/10"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  className="rounded-full p-1.5 transition-colors hover:bg-white/10"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Clear-chat confirmation banner */}
          {showClearConfirm && (
            <div className="flex items-center justify-between gap-3 bg-amber-50 px-4 py-2 text-xs text-amber-900">
              <span>Clear this conversation?</span>
              <div className="flex gap-2">
                <button
                  onClick={handleClearChat}
                  className="rounded-full bg-amber-500 px-3 py-1 font-medium text-white transition-colors hover:bg-amber-600"
                >
                  Clear
                </button>
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="rounded-full border border-amber-300 px-3 py-1 font-medium text-amber-800 transition-colors hover:bg-amber-100"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex animate-[fadeIn_0.25s_ease-out] ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-4/5 whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-md bg-[#0C3D4C] text-white shadow-sm"
                      : "rounded-bl-md border border-black/5 bg-white text-gray-800 shadow-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl rounded-bl-md border border-black/5 bg-white px-4 py-3 shadow-sm">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#4338CA]/50 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#4338CA]/50 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#4338CA]/50" />
                </div>
              </div>
            )}

            {error && <p className="text-center text-xs text-red-500">{error}</p>}

            {/* Service menu — shown only after the lead-capture flow is complete */}
            {showMenu && (
              <div className="pt-2">
                {currentCategory ? (
                  <>
                    <button
                      onClick={() => setActiveCategory(null)}
                      className="mb-2 flex items-center gap-1 text-xs font-medium text-[#4338CA] transition-colors hover:text-[#312E81]"
                    >
                      <ChevronLeft size={14} />
                      Back
                    </button>
                    <div className="flex flex-wrap gap-2">
                      {currentCategory.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => handleMenuClick(child)}
                          disabled={isLoading}
                          className="rounded-full border border-[#4338CA]/20 bg-white px-3 py-1.5 text-xs font-medium text-[#3730A3] shadow-sm transition-colors hover:border-[#4338CA]/40 hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_MENU.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleMenuClick(item)}
                        disabled={isLoading}
                        className="rounded-full border border-[#4338CA]/20 bg-white px-3 py-1.5 text-xs font-medium text-[#3730A3] shadow-sm transition-colors hover:border-[#4338CA]/40 hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {item.label}
                        {item.children ? " ›" : ""}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-black/5 bg-white px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={leadStepIndex !== null ? "Type your answer…" : "Type and press enter"}
              disabled={isLoading}
              className="flex-1 rounded-full border border-gray-200 bg-[#FAFAF8] px-4 py-2 text-sm text-gray-800 outline-none transition-colors focus:border-[#4338CA]/50 focus:bg-white disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F59E0B] text-white shadow-sm transition-all hover:scale-105 hover:bg-[#D97706] disabled:scale-100 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
