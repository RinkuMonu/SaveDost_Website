"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Gift, X } from "lucide-react";

export default function GiftCardTrigger() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="group fixed bottom-3 left-2 z-40 overflow-hidden rounded-xl border border-white/70 bg-linear-to-b from-[#073f58] to-[#071c2a] text-white shadow-[0_12px_32px_rgba(7,28,42,0.28)] ring-1 ring-[#00a8e8]/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_16px_38px_rgba(2,99,129,0.34)] sm:bottom-5 sm:left-5 sm:rounded-2xl">
      <span className="pointer-events-none absolute -top-5 -right-5 h-12 w-12 rounded-full bg-[#58d7ed]/20 blur-xl" />
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Hide gift card shortcut"
        className="absolute top-1.5 right-1.5 z-10 grid h-5 w-5 place-items-center rounded-full bg-white/15 text-white/85 transition hover:bg-white hover:text-[#0C3D4C]"
      >
        <X size={12} strokeWidth={2.5} />
      </button>
      <Link
        href="/service-payment/gift-card"
        aria-label="Explore gift cards"
        className="flex flex-col items-center p-2 sm:p-3"
      >
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-linear-to-br from-white to-[#dff6fa] text-[#026381] shadow-[0_7px_18px_rgba(0,0,0,0.18)] ring-1 ring-white sm:h-15 sm:w-15 sm:rounded-xl">
          <Gift
            className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 sm:h-[29px] sm:w-[29px]"
            strokeWidth={1.9}
          />
        </span>
        <span className="mt-1.5 text-[7px] font-bold tracking-widest text-[#8ee5f2] uppercase sm:mt-2 sm:text-[9px]">
          Send a smile
        </span>
        <span className="mt-0.5 flex items-center gap-1 whitespace-nowrap text-[9px] font-extrabold sm:text-xs">
          Gift Cards{" "}
          <ArrowUpRight
            size={12}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </Link>
    </div>
  );
}
