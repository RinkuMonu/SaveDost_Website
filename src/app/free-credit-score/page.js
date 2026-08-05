"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, BarChart3, CheckCircle2, LockKeyhole, ShieldCheck, Zap } from "lucide-react";

import CreditScoreReport from "../../../components/CreditScoreReport";

export default function FreeCreditScorePage() {
  const data = [
    {
      title: "Instant Credit Score Check",
      description:
        "Check your credit score instantly from trusted credit bureau data with a secure and simple process.",
      image: "/images/money-transfer.jpg",
    },
    {
      title: "Detailed Credit Insights",
      description:
        "Understand your credit health, score factors, and improvement suggestions easily.",
      image: "/images/recharge-bills.jpg",
    },
    {
      title: "Safe & Secure Access",
      description:
        "Your data stays fully protected with encrypted and secure verification systems.",
      image: "/images/verification.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f9fb]">
      {/* UI REDESIGN: Trust-focused hero; no credit-score logic is handled here. */}
      <section className="overflow-hidden bg-[#eaf6f9] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_.92fr]">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#b9e1e9] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#026381] shadow-sm">
              <ShieldCheck size={16} /> Free and secure credit check
            </span>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#0C3D4C] sm:text-4xl lg:text-[52px] lg:leading-[1.1]">
              Know your credit health. <span className="text-[#0289ad]">Plan your next move.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 lg:mx-0 lg:text-lg">
              Check your credit score for free, understand the factors behind it, and make more
              informed financial decisions with SaveDost.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
              {["No hidden charges", "Quick verification", "Secure details"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700"
                >
                  <CheckCircle2 size={17} className="text-[#00a8e8]" /> {item}
                </span>
              ))}
            </div>

            <a href="#check-credit-score" className="pan-hero-button mt-8 gap-2">
              Check My Score <ArrowRight size={18} />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -left-5 top-12 h-24 w-24 rounded-full bg-[#8bd7e7]/35" />
            <div className="absolute -right-8 bottom-5 h-36 w-36 rounded-full border-[24px] border-white/60" />
            <div className="relative rounded-[30px] border border-white bg-white/75 p-5 shadow-[0_22px_55px_rgba(12,61,76,0.12)] backdrop-blur-sm sm:p-7">
              <div className="relative h-[260px] sm:h-[330px]">
                <Image
                  src="/image/credit-score-img.png"
                  alt="SaveDost credit score overview"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-[#d9edf2] bg-white px-4 py-3 shadow-lg sm:bottom-7 sm:left-7">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#e8f6f9] text-[#026381]">
                  <LockKeyhole size={20} />
                </span>
                <span>
                  <span className="block text-xs font-extrabold text-[#0C3D4C]">
                    Privacy protected
                  </span>
                  <span className="text-[11px] text-slate-500">Your details stay secure</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI REDESIGN: Existing interactive component is preserved below. */}
      <section id="check-credit-score" className="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <CreditScoreReport />
      </section>

      {/* UI REDESIGN: Page-specific benefit cards replace the generic shared card layout. */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0289ad]">
              Why check with SaveDost
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0C3D4C] sm:text-3xl">
              A clearer view of your credit profile
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {data.map((card, index) => {
              const Icon = [Zap, BarChart3, LockKeyhole][index];
              return (
                <article
                  key={card.title}
                  className="rounded-2xl border border-[#dceef2] bg-[#f8fbfc] p-6 transition hover:-translate-y-1 hover:border-[#afdce5] hover:shadow-[0_14px_32px_rgba(12,61,76,0.08)]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#e4f5f8] text-[#026381]">
                    <Icon size={23} />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold text-[#0C3D4C]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
