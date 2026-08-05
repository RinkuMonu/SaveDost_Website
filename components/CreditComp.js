import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  CreditCard,
  HandCoins,
  ShieldCheck,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

const benefits = [
  { icon: BadgePercent, label: "Rewards & cashback" },
  { icon: CreditCard, label: "Cashless payments" },
  { icon: HandCoins, label: "Flexible credit" },
  { icon: ShoppingBag, label: "Shopping & EMI options" },
  { icon: TrendingUp, label: "Responsible credit building" },
  { icon: ShieldCheck, label: "Bank security controls" },
];

export default function CreditComp() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[28px] border border-[#d7e9ed] bg-[#eaf6f9] p-6 sm:p-9 lg:grid-cols-[.9fr_1.1fr] lg:p-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
            Why Explore With SaveDost
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#0C3D4C] sm:text-4xl">
            Compare benefits before choosing your card
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Review card features in one place and identify options suited to your spending habits,
            financial goals, and preferred rewards.
          </p>
          <Link
            href="#credit-cards"
            className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#026381] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0C3D4C]"
          >
            View Card Options{" "}
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-[#d2e7eb] bg-white p-5 shadow-[0_8px_20px_rgba(12,61,76,0.06)]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#dff3f7] text-[#027f9f]">
                <Icon size={21} />
              </span>
              <p className="text-sm font-extrabold text-[#0C3D4C]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
