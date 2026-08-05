export default function WhyChooseUs({ whydata }) {
  return (
    /* REDESIGNED INSURANCE BENEFITS: data mapping and behavior are unchanged. */
    <section
      id="why-choose"
      className="bg-gradient-to-b from-[#eff9fb] to-[#e7f5f7] px-5 py-18 md:py-26"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#00b4d8] font-semibold mb-2 uppercase tracking-wide text-sm">
            {whydata.title1}
          </p>
          <h2 className="mb-4 text-balance text-3xl font-[850] tracking-[-0.035em] text-[#0c3d4c] md:text-4xl">
            {whydata.title2}
          </h2>
          <p className="text-gray-600 leading-relaxed">{whydata.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whydata.features.map((feature, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[1.35rem] border border-[#d1e8ec] bg-white shadow-[0_10px_28px_rgba(12,61,76,0.07)] transition duration-300 hover:-translate-y-1.5 hover:border-[#7ac9d6] hover:shadow-[0_20px_42px_rgba(12,61,76,0.13)]"
            >
              <div className="p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e2f6f8] to-[#effbfc]">
                  <feature.icon className="h-7 w-7 text-[#00b4d8]" />
                </div>
                <h3 className="text-xl font-bold text-[#0d3b4f] mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
