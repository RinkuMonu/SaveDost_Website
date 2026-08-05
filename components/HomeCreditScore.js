"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeIndianRupee, CheckCircle2, Gift, Trophy, Wallet } from "lucide-react";

const creditFeatures = [
  { icon: Gift, title: "Live score", text: "View your latest report" },
  { icon: Wallet, title: "Track loans", text: "Monitor active EMIs" },
  { icon: Trophy, title: "Better offers", text: "Deals matched to you" },
];

const loanDetails = ["Loan amount", "Interest rate", "Tenure"];

export default function HomeCreditScoreSection() {
  return (
    <section className="bg-[#f4f7fb] py-7 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-10">
        <div className="grid items-stretch gap-4 sm:gap-6 lg:grid-cols-2">
          <article className="relative flex flex-col overflow-hidden rounded-[22px] border border-[#d8edf6] bg-gradient-to-br from-[#eefaff] via-[#e6f6ff] to-[#d9effa] p-5 shadow-[0_14px_35px_rgba(12,61,76,0.08)] sm:min-h-[440px] sm:rounded-[28px] sm:p-8">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/45" />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#026381] ring-1 ring-[#c9e8f2]">
                  <CheckCircle2 size={14} /> Financial Health
                </span>
                <h2 className="mt-3 text-xl font-extrabold tracking-tight text-[#0C3D4C] sm:mt-4 sm:text-[30px]">
                  Know your Credit Score
                </h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
                  Stay informed, understand your credit health, and discover offers suited to you.
                </p>
              </div>

              <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white shadow-sm sm:grid">
                <Image src="/image/creditscoreimg2.png" alt="Credit score" width={28} height={28} />
              </span>
            </div>

            <div className="relative z-10 mt-5 grid flex-1 items-center gap-4 sm:mt-7 sm:grid-cols-[160px_1fr] sm:gap-6">
              <div className="relative mx-auto w-full max-w-[135px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#5735a5] to-[#8fbbec] p-2.5 shadow-[0_12px_25px_rgba(70,61,145,0.2)] sm:max-w-[180px] sm:p-3">
                <Image
                  src="/image/ccs2.png"
                  alt="Credit score preview"
                  width={220}
                  height={220}
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="space-y-3">
                {creditFeatures.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="flex items-center gap-3 rounded-xl bg-white/70 p-2.5 ring-1 ring-white sm:p-3"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#e7f5fa] text-[#026381] sm:h-10 sm:w-10 sm:rounded-xl">
                      <Icon size={19} />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#173f4b]">{title}</p>
                      <p className="text-xs text-slate-500">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-5 flex items-center gap-2 sm:mt-7 sm:gap-3">
              <Link
                href="https://play.google.com/store/apps/details?id=com.utility.finunique"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0C3D4C] px-4 py-3 text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#026381] sm:flex-none sm:px-5 sm:text-sm"
              >
                Check on App <ArrowRight size={17} />
              </Link>
              <Link
                href="/free-credit-score"
                className="rounded-xl px-3 py-3 text-xs font-bold text-[#026381] transition-colors hover:bg-white/70 sm:px-4 sm:text-sm"
              >
                Learn more
              </Link>
            </div>
          </article>

          <article className="relative flex flex-col overflow-hidden rounded-[22px] border border-[#ccebe5] bg-gradient-to-br from-[#f0fbf8] via-[#e3f7f3] to-[#d5f0eb] p-5 text-[#0C3D4C] shadow-[0_14px_35px_rgba(12,61,76,0.08)] sm:min-h-[440px] sm:rounded-[28px] sm:p-8">
            <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full border-[45px] border-white/35" />
            <div className="absolute right-12 top-12 h-20 w-20 rounded-full bg-[#58d7ed]/20 blur-xl" />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#027569] ring-1 ring-[#b9e3db]">
                  <BadgeIndianRupee size={14} /> Smart Borrowing
                </span>
                <h2 className="mt-3 text-xl font-extrabold tracking-tight sm:mt-4 sm:text-[30px]">
                  Loan EMI Calculator
                </h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
                  Calculate your monthly loan instalment and plan repayments with confidence.
                </p>
              </div>

              <div className="hidden h-16 w-16 shrink-0 overflow-hidden rounded-2xl shadow-md ring-1 ring-white/70 sm:block">
                <Image
                  src="/image/loan-img.png"
                  alt="Loan EMI calculator"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative z-10 my-5 rounded-2xl border border-white bg-white/70 p-4 shadow-sm sm:my-8 sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#027569]">
                    Plan your repayment
                  </p>
                  <p className="mt-1 text-lg font-extrabold sm:text-2xl">
                    Estimate your monthly EMI
                  </p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#c7eee7] text-[#027569]">
                  <BadgeIndianRupee size={24} />
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-1.5 sm:mt-5 sm:gap-2">
                {loanDetails.map((detail) => (
                  <div
                    key={detail}
                    className="rounded-xl bg-[#e6f6f2] px-2 py-3 text-center text-[11px] font-semibold text-[#245b55] sm:text-xs"
                  >
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-auto grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <CheckCircle2 size={17} className="text-[#027569]" /> Instant repayment estimate
              </p>
              <Link
                href="/loan-emi"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0C3D4C] px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#027569]"
              >
                Calculate EMI <ArrowRight size={17} />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
