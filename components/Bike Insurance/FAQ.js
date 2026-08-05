"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({
  faqs = [],
  subheading = "Clear answers to common questions about SaveDost and supported services.",
  label = "Help Centre",
  title = "Frequently Asked Questions",
}) {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionId = useId().replace(/:/g, "");

  return (
    <section id="faq" className="bg-[#f6fafb] px-4 py-10 sm:px-8 sm:py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-7 sm:gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#0289ad]">
            {label}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-[#0C3D4C] sm:mt-3 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">{subheading}</p>
        </div>

        <div className="divide-y divide-[#dcebed] border-y border-[#dcebed]">
          {faqs.map(({ question, answer }, index) => {
            const open = openIndex === index;
            const buttonId = `${sectionId}-faq-button-${index}`;
            const panelId = `${sectionId}-faq-panel-${index}`;

            return (
              <div key={question}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-3 py-4 text-left text-sm font-extrabold text-[#0C3D4C] transition hover:text-[#0289ad] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0289ad] sm:gap-5 sm:py-5 sm:text-base"
                  >
                    <span>{question}</span>
                    <ChevronDown
                      size={19}
                      className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-[#0289ad]" : ""}`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-8 text-sm leading-7 text-slate-600">{answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
