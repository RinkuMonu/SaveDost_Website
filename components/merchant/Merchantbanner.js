"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeIndianRupee, ShieldCheck, Users } from "lucide-react";

const highlights = [
  { icon: BadgeIndianRupee, label: "Multiple earning opportunities" },
  { icon: Users, label: "Retailer and distributor network" },
  { icon: ShieldCheck, label: "Reliable technology and support" },
];

export default function MerchantBannerSection() {
  return (
    <section className="overflow-hidden bg-[#eaf6f9] px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
        <div className="text-center lg:text-left">
          <span className="inline-flex rounded-full border border-[#b9e1e9] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#026381] shadow-sm">
            SaveDost Merchant Network
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#0C3D4C] sm:text-5xl lg:text-[58px] lg:leading-[1.08]">
            Grow your business with <span className="text-[#0289ad]">digital services.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 lg:mx-0 lg:text-lg">
            Join SaveDost as a retailer or distributor and offer trusted payment, recharge, banking,
            and utility services to customers in your area.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link href="/signup" className="pan-hero-button group gap-2">
              Become a Merchant{" "}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="pan-hero-button">
              Talk to Our Team
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[300px] overflow-hidden rounded-[28px] border-4 border-white shadow-[0_22px_50px_rgba(12,61,76,0.16)] sm:h-[390px] lg:h-[440px]">
            <Image
              src="/image/merchant-banner.jpg"
              alt="SaveDost merchant services"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10 mx-4 -mt-7 grid gap-2 rounded-2xl border border-[#d8edf2] bg-white p-3 shadow-xl sm:mx-8 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl bg-[#f2fafb] px-3 py-3 text-left text-xs font-bold leading-5 text-[#0C3D4C]"
              >
                <Icon size={19} className="shrink-0 text-[#0297bd]" /> {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
