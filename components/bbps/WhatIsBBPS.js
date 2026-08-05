"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, FileCheck2, LayoutGrid, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: LayoutGrid,
    title: "Multiple Bill Categories",
    text: "Access supported utilities and recurring bill-payment categories.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Framework",
    text: "Payments are processed through the applicable BBPS ecosystem.",
  },
  {
    icon: FileCheck2,
    title: "Digital Confirmation",
    text: "Receive transaction details for successfully completed payments.",
  },
  {
    icon: BadgeCheck,
    title: "Convenient Access",
    text: "Use supported digital channels to initiate eligible payments.",
  },
];

export default function WhatIsBBPS() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[28px] border border-[#d7e9ed] bg-[#f4fafb] p-6 shadow-[0_12px_30px_rgba(12,61,76,0.07)] sm:p-9 lg:grid-cols-[1.08fr_.92fr] lg:p-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
            What Is BBPS?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#0C3D4C] sm:text-4xl">
            One system for supported bill payments
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Bharat Bill Payment System provides an interoperable framework for paying eligible bills
            through supported banks, digital platforms, and authorized outlets.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-[#d7e9ed] bg-white p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#dff3f7] text-[#027f9f]">
                  <Icon size={21} />
                </span>
                <h3 className="mt-4 font-extrabold text-[#0C3D4C]">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
          <Link
            href="/service-payment/electricity"
            className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#026381] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0C3D4C]"
          >
            Explore Bill Payments{" "}
            <ArrowRight size={17} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="relative min-h-[330px] overflow-hidden rounded-2xl bg-[#eaf6f9] sm:min-h-[460px]">
          <Image
            src="/bbps/Crafting3d.png"
            alt="BBPS digital bill payment"
            fill
            className="object-contain p-5"
            priority
          />
        </div>
      </div>
    </section>
  );
}
