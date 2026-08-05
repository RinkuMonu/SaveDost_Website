import Image from "next/image";

const VerticalSlider = ({ slide }) => {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-tr from-[#014D78] to-[#1DADFF] text-white shadow-[0_20px_50px_rgba(1,77,120,0.22)] lg:sticky lg:top-24">
          <div className="relative min-h-[360px] p-7 sm:min-h-[430px] sm:p-10">
            <h2 className="relative z-20 max-w-sm text-3xl font-extrabold leading-snug sm:text-4xl">
              {slide.heading}
            </h2>
            <Image
              src={slide.image}
              width={480}
              height={480}
              alt="Customer exploring loan options"
              className="absolute -bottom-8 right-[-35px] z-10 h-auto w-[78%] max-w-[420px] object-contain sm:right-[-10px]"
            />
          </div>
        </div>

        <div className="grid gap-5">
          {slide.sliderData.map((step) => (
            <article
              key={step.step}
              className="relative min-h-[280px] overflow-hidden rounded-3xl border border-[#d7edf5] bg-[#eaf7fc] p-6 shadow-[0_12px_30px_rgba(36,87,108,0.08)] sm:p-8"
            >
              <div className="relative z-10 max-w-[85%]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-t from-[#018EDE] to-[#8FD7FF] text-3xl font-extrabold text-white shadow-md">
                  {step.step}
                </div>
                <h3 className="mb-3 mt-5 text-2xl font-extrabold text-[#24576C] sm:text-3xl">
                  {step.title}
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 sm:text-base">
                  {step.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <Image
                src={step.image}
                width={140}
                height={140}
                alt=""
                aria-hidden="true"
                className="absolute bottom-5 right-5 h-auto w-20 object-contain opacity-15 sm:w-28"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalSlider;
