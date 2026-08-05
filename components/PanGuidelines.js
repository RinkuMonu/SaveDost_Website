import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const amendmentPages = [
  { label: "Guidelines", href: "/pan-card/alteration-guidelines" },
  { label: "Instructions", href: "/pan-card/alteration-instruction" },
  { label: "Documents", href: "/pan-card/alteration-documents" },
  { label: "Do's & Don'ts", href: "/pan-card/alteration-do-donts" },
];

export default function PanGuidelines({ title, sub, sections }) {
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
            PAN Change or Correction
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-[#0c3d4c] sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {sub ? (
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{sub}</p>
          ) : null}
          <nav
            className="mt-8 flex gap-2 overflow-x-auto pb-1"
            aria-label="PAN correction information"
          >
            {amendmentPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="whitespace-nowrap rounded-full border border-[#cfe4e9] bg-white/80 px-4 py-2 text-sm font-bold text-[#0c3d4c] shadow-sm transition hover:border-[#70bdcd] hover:bg-[#e9f6f8]"
              >
                {page.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="space-y-5">
          {sections.map((item, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-2xl border border-[#dce9ec] bg-white shadow-[0_8px_24px_rgba(12,61,76,0.06)]"
            >
              <div className="flex items-start gap-4 p-5 sm:p-7">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e5f5f7] text-[#087f9f]">
                  {item.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-extrabold leading-snug text-[#0c3d4c] sm:text-xl">
                    {item.title}
                  </h2>
                  <div className="pan-info-content mt-4 text-[15px] leading-7 text-slate-600">
                    {item.content}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
