"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ClipboardList, FileText, ShieldCheck } from "lucide-react";

export default function LegalPolicyPage({
  title,
  eyebrow,
  description,
  effectiveDate,
  sections,
  summary,
}) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );

    const nodes = sectionRefs.current.filter(Boolean);
    nodes.forEach((node) => observer.observe(node));
    return () => nodes.forEach((node) => observer.unobserve(node));
  }, []);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eef9fb_0%,#ffffff_22%,#f6fafb_100%)]">
      <header className="relative overflow-hidden bg-[#0C3D4C] px-4 py-14 text-white sm:py-18">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#00a8e8]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#bcecf4]">
            <ShieldCheck size={16} /> {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            {description}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 grid gap-px overflow-hidden rounded-2xl border border-[#d7e9ed] bg-slate-100 shadow-sm sm:grid-cols-3">
          <div className="bg-white p-5">
            <p className="text-xs font-bold uppercase text-slate-400">Brand &amp; operator</p>
            <p className="mt-2 font-bold text-[#0C3D4C]">SaveDost</p>
            <p className="mt-1 text-xs text-slate-500">
              Powered and operated by Finunique Small Private Limited
            </p>
          </div>
          <div className="bg-white p-5">
            <p className="text-xs font-bold uppercase text-slate-400">Effective date</p>
            <p className="mt-2 font-bold text-[#0C3D4C]">{effectiveDate}</p>
          </div>
          <div className="bg-white p-5">
            <p className="text-xs font-bold uppercase text-slate-400">Support</p>
            <p className="mt-2 text-slate-600">support@savedost.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <aside className="lg:w-[29%]">
            <nav className="sticky top-24 rounded-2xl border border-[#d7e9ed] bg-white p-3 shadow-[0_12px_35px_rgba(12,61,76,0.08)] sm:p-4">
              <h2 className="hidden items-center gap-2 border-b border-slate-100 pb-4 text-lg font-extrabold text-[#0C3D4C] lg:flex">
                <ClipboardList size={19} /> Policy sections
              </h2>
              <ul className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-3 lg:block lg:space-y-1.5 lg:overflow-visible">
                {sections.map((section) => (
                  <li key={section.id} className="shrink-0 lg:w-full">
                    <button
                      type="button"
                      onClick={() =>
                        document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
                      }
                      className={`w-auto whitespace-nowrap rounded-xl px-4 py-2.5 text-left text-sm transition lg:w-full lg:whitespace-normal lg:px-3 ${activeSection === section.id ? "bg-[#0C3D4C] font-bold text-white" : "font-medium text-slate-600 hover:bg-[#edf8fa]"}`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="min-w-0 space-y-5 lg:w-[71%]">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                ref={(element) => {
                  sectionRefs.current[index] = element;
                }}
                className="scroll-mt-28 rounded-2xl border border-[#e1ecee] bg-white p-5 shadow-[0_7px_22px_rgba(12,61,76,0.05)] sm:p-7"
              >
                <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0C3D4C] sm:text-2xl">
                  <FileText size={22} className="text-[#0289ad]" /> {section.title}
                </h2>
                <div className="mt-4 space-y-3 text-[15px] leading-7 text-slate-600">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.items && (
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 size={17} className="mt-1.5 shrink-0 text-[#0297bd]" />{" "}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            <section className="rounded-2xl bg-[#0C3D4C] p-6 text-white sm:p-8">
              <h2 className="text-2xl font-extrabold">Policy summary</h2>
              <p className="mt-3 leading-7 text-white/80">{summary}</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
