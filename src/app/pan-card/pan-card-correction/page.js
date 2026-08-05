import Link from "next/link";
import { ArrowLeft, ArrowRight, FileCheck2 } from "lucide-react";

const steps = [
  {
    title: "Confirm that you need a correction",
    desc: "Use a PAN Change Request when an existing PAN holder needs to update a name, date of birth, father’s name, photograph, signature, address or contact details. Do not apply for another PAN.",
  },
  {
    title: "Complete the change request",
    desc: "Enter your existing 10-character PAN and complete all mandatory fields. Select only the fields that need correction and ensure the information matches your supporting records.",
  },
  {
    title: "Attach supporting documents",
    desc: "Provide proof of PAN, identity, address and date of birth, plus documentary evidence for each requested change. Uploaded copies must be clear and legible.",
  },
  {
    title: "Verify and submit",
    desc: "Review spellings, dates, contact details and the communication address before payment. Save the acknowledgment number after submission for tracking.",
  },
];

const quickLinks = [
  { label: "Correction guidelines", href: "/pan-card/alteration-guidelines" },
  { label: "Detailed instructions", href: "/pan-card/alteration-instruction" },
  { label: "Documents required", href: "/pan-card/alteration-documents" },
  { label: "Do's & Don'ts", href: "/pan-card/alteration-do-donts" },
];

export default function PanCardCorrectionPage() {
  return (
    <main className="min-h-screen bg-[#f6fafb]">
      <header className="border-b border-[#d8e8ec] bg-gradient-to-br from-[#e8f6f8] via-white to-[#fff8e8]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <Link
            href="/pan-card"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#167895] hover:text-[#0c3d4c]"
          >
            <ArrowLeft size={17} /> Back to PAN services
          </Link>
          <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-[#0289ad]">
            Existing PAN holders
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c3d4c] sm:text-4xl lg:text-5xl">
            Change or correct PAN details
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Request an amendment while keeping your existing PAN number. Review the process and
            supporting-document requirements before continuing.
          </p>
          <nav className="mt-8 flex gap-2 overflow-x-auto pb-1">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap rounded-full border border-[#cfe4e9] bg-white/80 px-4 py-2 text-sm font-bold text-[#0c3d4c] shadow-sm hover:bg-[#e9f6f8]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="space-y-5">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="flex gap-4 rounded-2xl border border-[#dce9ec] bg-white p-5 shadow-[0_8px_24px_rgba(12,61,76,0.06)] sm:p-7"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e5f5f7] text-sm font-extrabold text-[#087f9f]">
                {index + 1}
              </span>
              <div>
                <h2 className="text-lg font-extrabold text-[#0c3d4c] sm:text-xl">{step.title}</h2>
                <p className="mt-2 text-[15px] leading-7 text-slate-600">{step.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#0c3d4c] p-6 text-white sm:flex-row sm:items-center sm:p-8">
          <div className="flex gap-4">
            <FileCheck2 className="mt-1 shrink-0 text-[#70cad8]" />
            <div>
              <h2 className="text-xl font-extrabold">Check your documents first</h2>
              <p className="mt-1 text-sm text-white/75">
                A matching proof is required for every detail you want to change.
              </p>
            </div>
          </div>
          <Link
            href="/pan-card/alteration-documents"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[#0c3d4c] hover:bg-[#e8f6f8]"
          >
            Review documents <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
