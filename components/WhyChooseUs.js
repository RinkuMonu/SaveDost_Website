"use client";

import { Clock3, Grid2X2, Headphones, RefreshCw, ShieldCheck, Smartphone } from "lucide-react";

// Benefits are written exclusively for customers using SaveDost services.
const features = [
  {
    icon: RefreshCw,
    title: "Simple Experience",
    text: "Clear steps make it easy to find and use the service you need.",
  },
  {
    icon: Smartphone,
    title: "Everyday Convenience",
    text: "Access useful digital and financial services from one convenient place.",
  },
  {
    icon: Grid2X2,
    title: "Multiple Services",
    text: "Manage recharges, payments, bookings, insurance, and more with SaveDost.",
  },
  {
    icon: Headphones,
    title: "Helpful Support",
    text: "Get assistance Monday to Saturday, from 9:30 AM to 6:30 PM.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Technology",
    text: "Reliable technology is designed to protect your information and transactions.",
  },
  {
    icon: Clock3,
    title: "Available When Needed",
    text: "Explore and access supported digital services whenever it is convenient for you.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
            Why users choose SaveDost
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Useful services, secure technology, and helpful support brought together for your
            everyday needs.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-[#d7e9ed] bg-[#f7fbfc] p-6 transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(12,61,76,0.1)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#dff3f7] text-[#027f9f]">
                <Icon size={23} />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-[#0C3D4C]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
