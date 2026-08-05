"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const stepsData = [
  {
    step: 1,
    title: "Complete the Application",
    description:
      "Provide your basic personal, contact, employment, and income information through the bank's application process.",
    image: "/credit/credits1.png",
  },
  {
    step: 2,
    title: "Submit Required Documents",
    description:
      "Share valid identity, address, and income documents requested by the issuing bank for verification.",
    image: "/credit/credits2.png",
  },
  {
    step: 3,
    title: "Bank Review & Decision",
    description:
      "The issuing bank reviews eligibility and documents before communicating its decision and applicable card terms.",
    image: "/credit/credits3.png",
  },
];

export default function CreditSlider() {
  const [activeStep, setActiveStep] = useState(1);
  const active = stepsData.find((item) => item.step === activeStep);

  return (
    <section className="bg-[#f3f9fb] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
            Application Process
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
            Three simple application stages
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Actual eligibility, approval, limits, and processing times are determined by the issuing
            bank.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[.38fr_.62fr]">
          <div className="space-y-3">
            {stepsData.map((item) => (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveStep(item.step)}
                className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition sm:p-5 ${activeStep === item.step ? "border-[#66bfd2] bg-[#026381] text-white shadow-lg" : "border-[#d7e9ed] bg-white text-[#0C3D4C] hover:border-[#9ed6e1]"}`}
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-extrabold ${activeStep === item.step ? "bg-white text-[#026381]" : "bg-[#dff3f7] text-[#027f9f]"}`}
                >
                  {item.step}
                </span>
                <span className="font-extrabold">{item.title}</span>
              </button>
            ))}
          </div>

          <div className="grid min-h-[390px] overflow-hidden rounded-[26px] border border-[#d7e9ed] bg-white sm:grid-cols-2">
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#e3f4f7] px-3 py-1.5 text-xs font-bold text-[#027f9f]">
                <CheckCircle2 size={15} /> Step {active.step}
              </span>
              <h3 className="mt-5 text-2xl font-extrabold text-[#0C3D4C]">{active.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{active.description}</p>
            </div>
            <div className="relative min-h-[260px] bg-[#eaf6f9] sm:min-h-full">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-contain object-bottom p-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
