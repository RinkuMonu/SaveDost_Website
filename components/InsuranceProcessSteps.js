"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Select Insurance",
    text: "Choose the vehicle insurance category relevant to your needs.",
    image: "/aeps/onlineapply.svg",
  },
  {
    number: "02",
    title: "Share Documents",
    text: "Provide the details and documents requested for verification.",
    image: "/aeps/document.svg",
  },
  {
    number: "03",
    title: "Review & Proceed",
    text: "Review the available policy information before making your decision.",
    image: "/aeps/payment.svg",
  },
];

export default function InsuranceProcessSteps() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
            A straightforward insurance journey
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Move from selecting a category to reviewing an insurance option in three clear stages.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="relative rounded-2xl border border-[#d7e9ed] bg-[#f7fbfc] p-6 text-center"
            >
              <span className="absolute left-5 top-5 text-xs font-extrabold text-[#0289ad]">
                STEP {step.number}
              </span>
              <div className="relative mx-auto mt-5 h-36 w-36">
                <Image src={step.image} alt="" fill className="object-contain" />
              </div>
              <h3 className="mt-4 text-xl font-extrabold text-[#0C3D4C]">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#026381] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0C3D4C]"
          >
            Talk to Our Team <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
