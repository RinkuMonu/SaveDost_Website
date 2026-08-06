"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

export default function ChatSection() {
  const [open, setOpen] = useState(false);

  const suggestions = useMemo(
    () => ["Special Offers", "Summer Outfits", "Buy a Gift Card", "New Collection"],
    []
  );

  const [messages, setMessages] = useState([
    {
      id: "m1",
      role: "bot",
      text: "Hi There,\nHow can I help you today?",
    },
  ]);

  const [text, setText] = useState("");
  const endRef = useRef(null);

  // track typing bubble id so it can be removed later
  const typingIdRef = useRef(null);

  const scrollToBottom = () => endRef.current?.scrollIntoView({ behavior: "smooth" });

  const addTypingBubble = () => {
    const id = crypto.randomUUID();
    typingIdRef.current = id;
    setMessages((prev) => [...prev, { id, role: "bot", typing: true }]);
    setTimeout(scrollToBottom, 50);
    return id;
  };

  const removeTypingBubble = () => {
    const typingId = typingIdRef.current;
    if (!typingId) return;
    setMessages((prev) => prev.filter((m) => m.id !== typingId));
    typingIdRef.current = null;
  };

  const send = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    // add user msg
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "user", text: trimmed }]);
    setText("");
    setTimeout(scrollToBottom, 50);

    // typing...
    addTypingBubble();

    // bot reply after delay
    const delay = 700 + Math.floor(Math.random() * 900);
    setTimeout(() => {
      removeTypingBubble();

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "bot",
          text: "This is demo reply. Connect API later for real chatbot replies.",
        },
      ]);

      setTimeout(scrollToBottom, 70);
    }, delay);
  };

  return (
    <div className="fixed bottom-3 right-3 z-50 sm:bottom-5 sm:right-5">
      {open && (
        <div className="mb-3 w-[calc(100vw-24px)] max-w-[360px] overflow-hidden rounded-[22px] bg-white shadow-2xl sm:rounded-[32px]">
          {/* Header */}
          <div className="bg-[#4c7ab2]  px-4 py-4 text-white">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-sm font-semibold">F</span>
                </div>

                <div>
                  <p className="text-base font-semibold leading-tight">SaveDost</p>
                  <p className="text-xs text-white/80">You can ask me anything</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setOpen(false)}
                  className="h-8 w-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center"
                  aria-label="Minimize"
                  type="button"
                >
                  <MinusIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[min(360px,52dvh)] overflow-y-auto px-4 py-4 space-y-3 bg-white">
            <div className="text-center text-[11px] text-gray-400">Today, 04:20</div>

            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={[
                    "max-w-[78%] whitespace-pre-line rounded-2xl px-3 py-2 text-sm",
                    m.role === "user"
                      ? "bg-indigo-600 text-white rounded-br-md"
                      : "bg-gray-100 text-gray-900 rounded-bl-md",
                  ].join(" ")}
                >
                  {m.typing ? <TypingDots /> : m.text}
                </div>
              </div>
            ))}

            <div ref={endRef} />
          </div>

          {/* Suggestions */}
          <div className="px-4 pb-3 bg-white">
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs text-indigo-700 hover:bg-indigo-50"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <form
            className="flex items-center gap-2 border-t border-[#cccc] px-4 py-3 bg-white"
            onSubmit={(e) => {
              e.preventDefault();
              send(text);
            }}
          >
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type and press [enter]"
              className="h-11 flex-1 rounded-full bg-gray-50 px-4 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
            />

            <button
              type="submit"
              className="h-11 w-11 rounded-full bg-[#4c7ab2] text-white flex items-center justify-center"
              aria-label="Send"
            >
              ➤
            </button>
          </form>
        </div>
      )}

      {/* Floating launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full float-end bg-[#4c7ab2] text-white shadow-lg"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          "✕"
        ) : (
          <Image src="/aeps/ai-language-model.png" alt="Chat" width={28} height={28} priority />
        )}
      </button>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 py-1">
      <span className="h-2 w-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.2s]" />
      <span className="h-2 w-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.1s]" />
      <span className="h-2 w-2 rounded-full bg-gray-500 animate-bounce" />
    </div>
  );
}

function DotsIcon() {
  return <span className="text-lg leading-none">⋯</span>;
}

function MinusIcon() {
  return <span className="text-lg leading-none">x</span>;
}
