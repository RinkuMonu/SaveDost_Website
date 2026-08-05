import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  FileCheck2,
  IndianRupee,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import FAQ from "./Bike Insurance/FAQ";
import ScrollReveal from "./ScrollReveal";

export default function LoanProductPage({ product }) {
  return (
    <>
      <section className="relative isolate min-h-[500px] overflow-hidden bg-[#082f3e] sm:min-h-[560px] lg:min-h-[610px]">
        <Image
          src={product.heroImage}
          fill
          priority
          alt={product.heroAlt}
          className="object-cover object-[68%_center] sm:object-center"
          sizes="100vw"
        />
        <div
          className={`absolute inset-0 bg-[#082f3e]/58 sm:bg-transparent sm:bg-gradient-to-r ${product.heroOverlay}`}
        />
        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-4 py-10 sm:min-h-[560px] sm:px-6 sm:py-14 lg:min-h-[610px] lg:px-8 lg:py-16">
          <ScrollReveal className="max-w-2xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.15em] backdrop-blur">
              <Sparkles size={15} /> {product.eyebrow}
            </span>
            <h1 className="mt-4 text-3xl font-black leading-[1.1] tracking-tight sm:mt-6 sm:text-5xl lg:text-6xl">
              {product.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:mt-5 sm:text-lg sm:leading-7">
              {product.description}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link
                href={`/loan/request?product=${product.slug}&mode=eligibility`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#026381] shadow-lg transition hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:px-6 sm:py-3.5"
              >
                Check eligibility <ArrowRight size={17} />
              </Link>
              <Link
                href="/loan-emi"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto sm:px-6 sm:py-3.5"
              >
                Calculate EMI <IndianRupee size={17} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative z-10 -mt-4 px-3 sm:-mt-7 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-4 overflow-hidden rounded-xl border border-[#d8e9ed] bg-white shadow-[0_10px_24px_rgba(12,61,76,.1)] sm:rounded-2xl sm:shadow-[0_18px_45px_rgba(12,61,76,.14)]">
          {product.highlights.map((item, index) => (
            <div
              key={item.label}
              className={`group min-w-0 px-1 py-2.5 text-center transition hover:bg-[#eff9fb] sm:p-5 sm:text-left ${index ? "border-l border-[#e2eef1]" : ""}`}
            >
              <p className="break-words text-xs font-black leading-tight text-[#026381] sm:text-xl">
                {item.value}
              </p>
              <p className="mt-0.5 break-words text-[8px] font-semibold leading-[1.15] text-slate-500 sm:mt-1 sm:text-xs sm:leading-normal">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#0289ad]">
              {product.benefitLabel}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0C3D4C] sm:mt-3 sm:text-4xl">
              {product.benefitTitle}
            </h2>
            <p className="mt-4 leading-7 text-slate-600">{product.benefitIntro}</p>
          </ScrollReveal>
          <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
            {product.benefits.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-[#d8ebef] bg-white p-5 shadow-[0_12px_30px_rgba(12,61,76,.07)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(12,61,76,.14)] sm:rounded-3xl sm:p-7"
              >
                <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00a8e8]/5 transition duration-500 group-hover:scale-150" />
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-[#e5f5f8] text-lg font-black text-[#026381] transition group-hover:rotate-6 group-hover:bg-[#026381] group-hover:text-white">
                  0{index + 1}
                </span>
                <h3 className="relative mt-5 text-xl font-extrabold text-[#0C3D4C]">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {product.assistanceBanners.map((banner, index) => (
            <article
              key={banner.title}
              className={`group relative overflow-hidden rounded-2xl p-5 text-white shadow-[0_16px_38px_rgba(12,61,76,.14)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(12,61,76,.22)] sm:rounded-3xl sm:p-8 ${
                index === 0
                  ? "bg-gradient-to-br from-[#026381] to-[#0C3D4C]"
                  : "bg-gradient-to-br from-[#367928] to-[#79a92f]"
              }`}
            >
              <span className="absolute -right-10 -top-12 h-40 w-40 rounded-full border-[30px] border-white/5 transition duration-500 group-hover:scale-125" />
              <div className="relative flex items-start gap-3 sm:gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/15 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                  {index === 0 ? <ShieldCheck size={24} /> : <BadgeCheck size={24} />}
                </span>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-white/65">
                    {banner.label}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold sm:text-2xl">{banner.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/75">{banner.text}</p>
                  <Link
                    href={banner.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold transition group-hover:gap-3"
                  >
                    {banner.cta} <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-[#f1f8fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="relative h-[240px] overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(12,61,76,.12)] sm:h-[320px] sm:rounded-[32px] lg:h-[390px]">
              <Image
                src={product.featureImage}
                fill
                alt={product.featureAlt}
                className="object-contain p-6 transition duration-700 hover:scale-105"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#0289ad]">
              {product.useCaseLabel}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0C3D4C] sm:mt-3 sm:text-4xl">
              {product.useCaseTitle}
            </h2>
            <p className="mt-4 leading-7 text-slate-600">{product.useCaseIntro}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {product.useCases.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#d8e9ed] bg-white p-4 text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-[#8bcfdb] hover:shadow-md"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-[#0289ad]" /> {item}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#0289ad]">
              Simple application journey
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0C3D4C] sm:mt-3 sm:text-4xl">
              {product.processTitle}
            </h2>
          </div>
          <div className="relative mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-4">
            {product.steps.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-[#d9e9ed] bg-white p-5 shadow-sm transition hover:-translate-y-2 hover:shadow-xl sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#00a8e8]/30">0{index + 1}</span>
                  <Clock3 size={21} className="text-[#026381] transition group-hover:rotate-12" />
                </div>
                <h3 className="mt-5 font-extrabold text-[#0C3D4C]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0C3D4C] px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:rounded-3xl sm:p-9">
            <BadgeCheck size={30} className="text-[#8ac954]" />
            <h2 className="mt-5 text-2xl font-extrabold">{product.eligibilityTitle}</h2>
            <ul className="mt-6 space-y-4">
              {product.eligibility.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/75">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#8ac954]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl bg-white p-5 text-[#0C3D4C] sm:rounded-3xl sm:p-9">
            <FileCheck2 size={30} className="text-[#0289ad]" />
            <h2 className="mt-5 text-2xl font-extrabold">{product.documentsTitle}</h2>
            <ul className="mt-6 space-y-4">
              {product.documents.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#0289ad]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            [
              LockKeyhole,
              "Secure digital support",
              "Submit information through a protected journey.",
            ],
            [
              ShieldCheck,
              "Clear lender terms",
              "Review rates, fees, tenure and conditions before accepting.",
            ],
            [BadgeCheck, "Product-focused guidance", product.guidanceText],
          ].map(([Icon, title, text]) => (
            <div key={title} className="flex gap-3 rounded-2xl bg-[#edf8fa] p-5 sm:gap-4 sm:p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[#026381]">
                <Icon size={21} />
              </span>
              <div>
                <h3 className="font-extrabold text-[#0C3D4C]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQ
        faqs={product.faqs}
        label={product.faqLabel}
        title={product.faqTitle}
        subheading={product.faqIntro}
      />
    </>
  );
}
