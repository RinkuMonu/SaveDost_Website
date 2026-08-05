"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

// Customer-only content for the About Us service-access section.
const content = {
  title: "Everyday services in one convenient place",
  description:
    "Use SaveDost to explore and access essential digital and financial services with a simple, customer-friendly experience.",
  image: "/about/custom.jpg",
  imageAlt: "Customer using SaveDost digital services",
  benefits: [
    "Recharge mobiles and pay supported utility bills.",
    "Explore booking, insurance, PAN, credit, and loan services.",
    "Find clear information before continuing with a service.",
    "Get help from our customer support team when needed.",
  ],
};

export default function GrowthOpportunities() {
  return (
    <section className="bg-[#f3f9fb] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
            Made for Users
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
            Simplifying your everyday needs
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Access useful services through one clear and convenient digital experience.
          </p>
        </div>

        <div className="mt-8 grid overflow-hidden rounded-[28px] border border-[#d7e9ed] bg-white shadow-[0_14px_35px_rgba(12,61,76,0.08)] lg:grid-cols-2">
          <div className="relative min-h-[300px] sm:min-h-[400px]">
            <Image src={content.image} alt={content.imageAlt} fill className="object-cover" />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0289ad]">For You</p>
            <h3 className="mt-3 text-2xl font-extrabold text-[#0C3D4C] sm:text-3xl">
              {content.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">{content.description}</p>
            <ul className="mt-6 space-y-3">
              {content.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                >
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#0297bd]" /> {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
