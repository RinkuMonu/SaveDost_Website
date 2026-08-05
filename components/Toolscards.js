import React from "react";

const ToolscardsContent = ({ cardsData }) => {
  return (
    <section className="mx-auto max-w-7xl">
      {/* REDESIGNED LOAN TOOL BENEFITS: mapping and card content remain unchanged. */}
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
          Plan With Confidence
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c3d4c] sm:text-4xl">
          A clearer way to understand your EMI
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {cardsData.map((card, index) => (
          <article
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-[#d3e8ec] bg-white p-7 shadow-[0_10px_28px_rgba(12,61,76,0.07)] transition duration-300 hover:-translate-y-1.5 hover:border-[#8ed2df] hover:shadow-[0_18px_38px_rgba(12,61,76,0.12)]"
          >
            <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[#e1f4f7] text-lg font-extrabold text-[#0289ad]">
              0{index + 1}
            </span>
            <div className="w-full">
              <h3 className="mb-3 text-xl font-extrabold text-[#0c3d4c]">{card.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ToolscardsContent;
