"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, Camera, FileText, IdCard } from "lucide-react";

const documents = [
  {
    icon: IdCard,
    title: "Identity & Address",
    text: "Valid identity and address proof requested by the insurer.",
  },
  {
    icon: FileText,
    title: "Vehicle Documents",
    text: "Registration certificate, driving licence, and previous policy where applicable.",
  },
  {
    icon: Camera,
    title: "Vehicle Information",
    text: "Vehicle details or photographs if required during verification.",
  },
  {
    icon: BadgeCheck,
    title: "Additional Records",
    text: "Any further documents requested for the selected policy or vehicle type.",
  },
];

export default function InsuranceDocumentsSection() {
  return (
    <section className="bg-[#f3f9fb] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.82fr_1.18fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
            Document Checklist
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#0C3D4C] sm:text-4xl">
            Keep the necessary details ready
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Document requirements vary by insurer and policy. Keeping common records ready can help
            make verification smoother.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#026381] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0C3D4C]"
          >
            Request Assistance <ArrowRight size={17} />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {documents.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-[#d7e9ed] bg-white p-6 shadow-[0_8px_22px_rgba(12,61,76,0.06)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#dff3f7] text-[#027f9f]">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-[#0C3D4C]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
