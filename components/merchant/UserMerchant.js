"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, UserRound } from "lucide-react";

const benefits = [
  "Access useful payment, recharge, and financial services in one place",
  "Complete everyday transactions through a nearby SaveDost merchant",
  "Receive assistance from trained retailers when you need it",
  "Enjoy a simple and convenient digital service experience",
];

export default function UserMerchantSection() {
  return (
    <section id="usersection" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="relative h-[300px] overflow-hidden rounded-[26px] border border-[#d8edf2] shadow-[0_18px_40px_rgba(12,61,76,0.12)] sm:h-[420px]">
          <Image
            src="/image/user-image.JPG"
            alt="SaveDost service user"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#b9e1e9] bg-[#eef8fa] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#027f9f]">
            <UserRound size={16} /> User
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
            Everyday services made easier for every user
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            SaveDost connects users with a growing merchant network, making essential digital and
            financial services easier to access within their community.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-xl bg-[#f4fafb] p-4 text-sm leading-6 text-slate-700"
              >
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#0297bd]" />
                {benefit}
              </li>
            ))}
          </ul>

          <Link
            href="/service-payment/mobile"
            className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#026381] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0C3D4C]"
          >
            Explore Services
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
