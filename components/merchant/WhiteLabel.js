"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Rocket, Settings, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Your Own Brand",
    text: "Launch a digital service platform with your identity and market presence.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Infrastructure",
    text: "Build on technology designed for secure and dependable service delivery.",
  },
  {
    icon: Settings,
    title: "Centralized Control",
    text: "Manage your retailer and distributor network from one organized system.",
  },
  {
    icon: BarChart3,
    title: "Business Visibility",
    text: "Review network activity and make informed decisions as your business grows.",
  },
];

export default function WhiteLabelSection() {
  return (
    <section
      id="whitelabelsection"
      className="overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[30px] border border-[#cfe6eb] bg-[#e8f5f7] px-6 py-8 sm:px-9 sm:py-10 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:py-12">
        <div>
          <span className="inline-flex rounded-full border border-[#b7dce4] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#027f9f]">
            White Label Solution
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#0C3D4C] sm:text-4xl">
            Build a digital service brand designed for growth
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Launch your own branded platform with the technology and operational support needed to
            develop a strong merchant network.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#d4e9ee] bg-white p-5 shadow-[0_8px_22px_rgba(12,61,76,0.06)]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#dff3f7] text-[#027f9f]">
                  <Icon size={21} />
                </span>
                <h3 className="mt-4 font-extrabold text-[#0C3D4C]">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#026381] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0C3D4C]"
          >
            Discuss White Label Solutions{" "}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative mx-auto h-[330px] w-full max-w-[520px] sm:h-[430px] lg:h-[520px]">
          <Image
            src="/image/white-label-man.PNG"
            alt="SaveDost white label business solution"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
