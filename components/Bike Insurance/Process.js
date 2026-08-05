import { ChevronRight } from "lucide-react";

export default function Process({ processdata }) {
  return (
    /* REDESIGNED INSURANCE PROCESS: all presentation stays local in Tailwind utilities. */
    <section
      id="process"
      className="relative overflow-hidden bg-linear-to-br from-[#f8fdfe] to-[#eaf8fa] py-14 text-[#113c49] md:py-16"
    >
      <div className="pointer-events-none absolute -right-20 -top-36 h-72 w-72 rounded-full border border-[#0a9fbb]/10" />
      <div className="pointer-events-none absolute -bottom-48 -left-20 h-88 w-88 rounded-full border border-[#0a9fbb]/10" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#009fc0]">
            {processdata.title1}
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold text-[#113c49] md:text-4xl">
            {processdata.title2}
          </h2>
          <p className="leading-relaxed text-[#55727a]">{processdata.desc}</p>
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-10">
          {processdata.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="group relative h-full min-h-61 overflow-hidden rounded-2xl border border-[#d7ebef] bg-white px-5 pb-6 pt-5 text-center shadow-[0_10px_26px_rgba(21,92,108,0.075)] transition-shadow duration-500 before:absolute before:inset-x-0 before:top-0 before:z-20 before:h-1 before:bg-linear-to-r before:from-[#08a7c7] before:to-[#62d9c5] after:absolute after:inset-0 after:z-0 after:bg-linear-to-tl after:from-[#073c4b] after:to-[#096a7d] after:[clip-path:circle(0%_at_100%_100%)] after:transition-[clip-path] after:duration-700 after:ease-out hover:border-[#0a7286] hover:shadow-[0_18px_38px_rgba(7,60,75,0.18)] hover:after:[clip-path:circle(150%_at_100%_100%)]">
                <span className="relative z-10 mx-auto mb-4 block w-max rounded-full border border-[#cae9ee] bg-[#effafb] px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-[0.09em] text-[#087f99] transition-colors duration-500 group-hover:border-white/25 group-hover:bg-white/12 group-hover:text-[#8beaf2]">
                  Step 0{step.number}
                </span>
                <div className="relative z-10 mb-5 inline-block">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#bde9ef] bg-linear-to-br from-[#08a7c7] to-[#047c9a] shadow-[0_10px_22px_rgba(0,146,177,0.2)]">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="relative z-10 mb-2.5 text-lg font-bold text-[#123e4b] transition-colors duration-500 group-hover:text-white">
                  {step.title}
                </h3>
                <p className="relative z-10 text-sm leading-relaxed text-[#5a737a] transition-colors duration-500 group-hover:text-white/80">
                  {step.description}
                </p>
              </div>
              {index < processdata.steps.length - 1 && (
                <div
                  className="absolute -right-9 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-[#cce8ed] bg-white text-[#0795b1] shadow-[0_5px_14px_rgba(15,101,119,0.12)] lg:grid"
                  aria-hidden="true"
                >
                  <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
