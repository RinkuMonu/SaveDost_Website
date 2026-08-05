"use client";

import Image from "next/image";

const benefits = [
  {
    image: "/insurance/b1.png",
    title: "Financial Protection",
    text: "Support against eligible covered loss or damage.",
  },
  {
    image: "/insurance/b2.png",
    title: "Peace of Mind",
    text: "Greater confidence for every insured journey.",
  },
  {
    image: "/insurance/b3.png",
    title: "Business Continuity",
    text: "Protection for eligible commercial operations.",
  },
  {
    image: "/insurance/b4.png",
    title: "Useful Add-ons",
    text: "Optional benefits with selected policy offerings.",
  },
];

export default function InsuranceBenefitsSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div
        className="relative mx-auto min-h-[620px] max-w-7xl overflow-hidden rounded-[30px] bg-cover bg-center shadow-[0_18px_45px_rgba(12,61,76,0.16)]"
        style={{ backgroundImage: "url('/insurance/ibbg.png')" }}
      >
        <div className="absolute inset-0 bg-[#012f3d]/25" />
        <div className="relative z-10 flex min-h-[620px] items-center px-6 py-10 sm:px-9 lg:px-12">
          <div className="w-full max-w-[620px]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7ee4f6]">
              Insurance Benefits
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Protection that supports every journey
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              Policy benefits depend on the insurer, selected coverage, exclusions, and applicable
              terms.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <article
                  key={item.title}
                  className="flex items-center gap-4 rounded-2xl border border-white/30 bg-white/95 p-4 shadow-lg backdrop-blur-sm"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#eaf6f9]">
                    <Image
                      src={item.image}
                      alt=""
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  </span>
                  <div>
                    <h3 className="font-extrabold text-[#0C3D4C]">{item.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-600">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
