import React from "react";
import {
  ShieldCheck,
  SmartphoneNfc,
  CheckSquare,
  ArrowDownUp,
  Network,
  History,
} from "lucide-react";

const benefitItems = [
  {
    icon: SmartphoneNfc,
    title: "Quick Settlements",
    desc: "Instant credits so your business cashflow stays smooth and predictable.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    desc: "Bank-grade security with encrypted, fully compliant transactions.",
  },
  {
    icon: CheckSquare,
    title: "User-Friendly",
    desc: "Simple flows that work for you, your staff, and your customers.",
  },
  {
    icon: ArrowDownUp,
    title: "Low Fees",
    desc: "Competitive pricing to keep more of every transaction in your pocket.",
  },
  {
    icon: Network,
    title: "Wide Reach",
    desc: "Accept payments from customers across a strong, pan-India network.",
  },
  {
    icon: History,
    title: "24x7 Availability",
    desc: "Always-on services so you never miss a payment opportunity.",
  },
];

const BenefitCard = ({ icon: Icon, title, desc }) => (
  <div className="group flex flex-col gap-3 rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm shadow-sky-100 backdrop-blur transition hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-lg">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition group-hover:bg-sky-100 group-hover:text-sky-700">
      <Icon size={26} strokeWidth={1.6} />
    </div>
    <h3 className="text-base font-semibold text-slate-900">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const BenefitsDMT = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-16">
      {/* subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.10),transparent_55%),radial-gradient(circle_at_bottom,rgba(37,99,235,0.06),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-lg font-medium uppercase tracking-[0.18em] text-sky-700">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            Benefits
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Make every digital transaction work harder for your business
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Designed for merchants who want fast, secure and always-on payments without adding
            complexity to their day-to-day operations.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefitItems.map((item) => (
            <BenefitCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsDMT;
