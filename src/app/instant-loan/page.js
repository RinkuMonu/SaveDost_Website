import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Headphones,
  IndianRupee,
  Landmark,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WalletCards,
} from "lucide-react";
import FAQ from "../../../components/Bike Insurance/FAQ";
import ScrollReveal from "../../../components/ScrollReveal";

export const metadata = {
  title: "Instant Loan Online | Quick Digital Loan Assistance | SaveDost",
  description:
    "Learn how SaveDost helps you explore instant loan options through a simple digital journey, clear eligibility guidance, document support, and secure assistance.",
};

const benefits = [
  {
    icon: Clock3,
    title: "Quick digital journey",
    text: "Start your request online and move through each step without unnecessary paperwork.",
  },
  {
    icon: FileCheck2,
    title: "Simple documentation",
    text: "Get clear guidance about the identity, income, and bank documents generally needed.",
  },
  {
    icon: LockKeyhole,
    title: "Secure information handling",
    text: "Your information is submitted through a protected digital process designed for privacy.",
  },
  {
    icon: Headphones,
    title: "Helpful assistance",
    text: "SaveDost helps you understand the journey and connect with suitable lending options.",
  },
];

const steps = [
  {
    number: "01",
    title: "Share your requirements",
    text: "Tell us the amount you may need, your purpose, employment type, and basic details.",
    icon: Smartphone,
  },
  {
    number: "02",
    title: "Check available options",
    text: "Review suitable options based on eligibility, lender criteria, and the information provided.",
    icon: BadgeCheck,
  },
  {
    number: "03",
    title: "Complete verification",
    text: "Submit the requested KYC, income, and bank documents for assessment by the lender.",
    icon: FileCheck2,
  },
  {
    number: "04",
    title: "Receive a decision",
    text: "If approved, carefully review the lender’s final rate, charges, tenure, and repayment terms.",
    icon: Banknote,
  },
];

const eligibility = [
  "Indian resident meeting the lender’s age criteria",
  "Salaried or self-employed with a regular source of income",
  "Active bank account and valid KYC documents",
  "Credit profile that meets the selected lender’s policy",
];

const documents = [
  "PAN card and Aadhaar or another accepted identity proof",
  "Recent bank statements",
  "Salary slips or income proof",
  "Additional documents requested by the lender",
];

const offerBenefits = [
  {
    label: "SMART CHOICE",
    title: "Compare before you commit",
    text: "Review available loan options and understand repayment details before choosing.",
    benefit: "Better-informed borrowing",
    icon: WalletCards,
    theme: "from-[#063d57] to-[#0789ad]",
  },
  {
    label: "TIME BENEFIT",
    title: "Complete the journey online",
    text: "Prepare details and documents digitally to reduce avoidable visits and delays.",
    benefit: "Save valuable time",
    icon: Clock3,
    theme: "from-[#11684d] to-[#28a879]",
  },
  {
    label: "EMI PLANNING",
    title: "Plan before borrowing",
    text: "Use the EMI calculator to estimate repayments and choose a comfortable tenure.",
    benefit: "Protect your monthly budget",
    icon: IndianRupee,
    theme: "from-[#714313] to-[#d48825]",
  },
];

const trustHighlights = [
  { value: "100%", label: "Digital guidance", icon: Smartphone },
  { value: "4 steps", label: "Simple journey", icon: FileCheck2 },
  { value: "Secure", label: "Protected process", icon: LockKeyhole },
  { value: "Clear", label: "Repayment planning", icon: WalletCards },
];

const relatedLoanOptions = [
  {
    title: "For a new home",
    text: "A dedicated home loan may be more suitable for buying, building, or renovating property.",
    image: "/loan/per3.png",
    href: "/loan/home-loan",
    linkLabel: "Explore home loan",
  },
  {
    title: "For your next car",
    text: "Explore vehicle-focused finance with repayment options designed around a car purchase.",
    image: "/loan/1.jpg",
    href: "/loan/car-loan",
    linkLabel: "Explore car loan",
  },
  {
    title: "For business growth",
    text: "Use a business loan journey for working capital, equipment, inventory, or expansion needs.",
    image: "/loan/2.jpg",
    href: "/loan/business-loan",
    linkLabel: "Explore business loan",
  },
];

const faqs = [
  {
    question: "What is an instant loan?",
    answer:
      "An instant loan generally refers to a loan with a digital application and faster assessment process. Approval and disbursal times still depend on lender verification, eligibility, and documentation.",
  },
  {
    question: "Does SaveDost directly approve the loan?",
    answer:
      "SaveDost helps users explore and navigate loan options. The lending institution makes the final eligibility, approval, interest-rate, and disbursal decision.",
  },
  {
    question: "How quickly can funds be received?",
    answer:
      "Timelines vary by lender and applicant. Complete, accurate documents may help avoid delays, but no approval or disbursal time is guaranteed.",
  },
  {
    question: "What should I review before accepting an offer?",
    answer:
      "Review the annual interest rate, processing fee, other charges, EMI, repayment tenure, late-payment terms, and the lender’s complete agreement.",
  },
];

export default function InstantLoanPage() {
  return (
    <>
      <section className="relative isolate min-h-[500px] overflow-hidden bg-[#082f3e] sm:min-h-[560px] lg:min-h-[610px]">
        <Image
          src="/loan/generated/instant-loan-hero.png"
          fill
          priority
          alt="Woman using SaveDost digital instant loan assistance"
          className="object-cover object-[68%_center] sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#082f3e]/58 sm:bg-transparent sm:bg-gradient-to-r sm:from-[#082f3e]/96 sm:via-[#082f3e]/76 sm:to-transparent" />
        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-4 py-10 sm:min-h-[560px] sm:px-6 sm:py-14 lg:min-h-[610px] lg:px-8 lg:py-16">
          <ScrollReveal className="max-w-2xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-sm backdrop-blur">
              <Sparkles size={15} /> Fast, guided and digital
            </span>
            <h1 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:mt-6 sm:text-5xl lg:text-6xl">
              Instant loan help for life&apos;s
              <span className="text-[#9de4ef]"> urgent moments.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:mt-6 sm:text-lg sm:leading-7">
              SaveDost simplifies the loan discovery journey with digital guidance, clear document
              support, and access to options that may match your needs.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link
                href="/loan/request?product=instant&mode=enquiry"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#026381] shadow-lg transition hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:px-6 sm:py-3.5"
              >
                Start your enquiry <ArrowRight size={18} />
              </Link>
              <Link
                href="/loan-emi"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto sm:px-6 sm:py-3.5"
              >
                Calculate EMI <IndianRupee size={17} />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-white/75">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#8ac954]" /> Online assistance
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#8ac954]" /> Transparent guidance
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#8ac954]" /> Secure process
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative z-10 -mt-4 px-3 sm:-mt-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-4 overflow-hidden rounded-xl border border-[#d9edf2] bg-white shadow-[0_10px_24px_rgba(12,61,76,0.1)] sm:rounded-2xl sm:shadow-[0_16px_40px_rgba(12,61,76,0.12)]">
          {trustHighlights.map(({ value, label, icon: Icon }, index) => (
            <div
              key={label}
              className={`group flex min-w-0 flex-col items-center gap-0.5 px-1 py-2 text-center transition duration-300 hover:bg-[#eff9fb] sm:flex-row sm:gap-4 sm:p-5 sm:text-left ${index ? "border-l border-[#e1eef1]" : ""}`}
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[#e5f5f8] text-[#026381] transition duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#026381] group-hover:text-white sm:h-11 sm:w-11 sm:rounded-xl">
                <Icon size={15} />
              </span>
              <div className="min-w-0">
                <p className="break-words text-[11px] font-extrabold leading-tight text-[#0C3D4C] sm:text-lg">
                  {value}
                </p>
                <p className="break-words text-[8px] leading-[1.15] text-slate-500 sm:mt-0.5 sm:text-xs sm:leading-normal">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0289ad]">
              How SaveDost helps
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0C3D4C] sm:text-4xl">
              A simpler way to explore instant credit
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              From understanding requirements to reviewing the next step, our platform keeps the
              journey clear and convenient.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-[#d9edf2] bg-white p-6 shadow-[0_12px_30px_rgba(12,61,76,0.07)] transition duration-300 hover:-translate-y-2 hover:border-[#85cfde] hover:shadow-[0_22px_46px_rgba(12,61,76,0.14)]"
              >
                <span className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#00a8e8]/5 transition duration-500 group-hover:scale-150" />
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-[#e3f5f8] text-[#026381] transition duration-300 group-hover:rotate-6 group-hover:bg-[#026381] group-hover:text-white">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-[#0C3D4C]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f9fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0289ad]">
                Four clear steps
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0C3D4C] sm:text-4xl">
                How the instant loan journey works
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                SaveDost helps you prepare and navigate the journey; the lender completes assessment
                and makes the final decision.
              </p>
              <div className="relative mt-6 h-[210px] sm:mt-8 sm:h-[280px]">
                <Image
                  src="/loan/loan2.png"
                  fill
                  alt="Digital instant loan process"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {steps.map(({ number, title, text, icon: Icon }) => (
                <article
                  key={number}
                  className="group rounded-2xl border border-[#d5eaee] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-[#8fd0dd] hover:shadow-[0_16px_34px_rgba(12,61,76,0.12)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-[#00a8e8]/35">{number}</span>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#026381] text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={20} />
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-[#0C3D4C]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="group rounded-3xl bg-[#0C3D4C] p-7 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-9">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-[#9de4ef]">
              <Landmark size={24} />
            </span>
            <h2 className="mt-5 text-2xl font-extrabold">General eligibility</h2>
            <ul className="mt-6 space-y-4">
              {eligibility.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/80">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#8ac954]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="group rounded-3xl border border-[#d5eaee] bg-[#eaf7fb] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-[#026381]">
              <WalletCards size={24} />
            </span>
            <h2 className="mt-5 text-2xl font-extrabold text-[#0C3D4C]">Documents to keep ready</h2>
            <ul className="mt-6 space-y-4">
              {documents.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#0289ad]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="overflow-hidden bg-[#eef8fb] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0289ad]">
                SaveDost advantages
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0C3D4C] sm:text-4xl">
                Benefits that help you borrow smarter
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                These benefits help users save time and make clearer financial decisions. They are
                not cash-profit or guaranteed-loan offers.
              </p>
            </div>
            <Link
              href="/loan-emi"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#add5de] bg-white px-5 py-3 text-sm font-bold text-[#026381] shadow-sm"
            >
              Try EMI calculator <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {offerBenefits.map(({ label, title, text, benefit, icon: Icon, theme }) => (
              <article
                key={title}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${theme} p-7 text-white shadow-[0_18px_40px_rgba(12,61,76,0.16)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_55px_rgba(12,61,76,0.24)] sm:p-8`}
              >
                <span className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-[26px] border-white/5 transition duration-500 group-hover:scale-125" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-extrabold tracking-[0.15em]">
                      {label}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={22} />
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-extrabold leading-tight">{title}</h3>
                  <p className="mt-3 min-h-18 text-sm leading-6 text-white/75">{text}</p>
                  <div className="mt-6 flex items-center gap-2 border-t border-white/15 pt-5 text-sm font-bold">
                    <BadgeCheck size={18} className="text-[#b9f17d]" /> {benefit}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0289ad]">
              Choose the right product
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0C3D4C] sm:text-4xl">
              A dedicated loan may fit a bigger goal better
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Instant loans can help with shorter-term needs. For a specific major purchase, compare
              a purpose-built loan option too.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {relatedLoanOptions.map((option) => (
              <article
                key={option.title}
                className="group overflow-hidden rounded-3xl border border-[#d9e9ed] bg-white shadow-[0_14px_35px_rgba(12,61,76,0.09)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(12,61,76,0.16)]"
              >
                <div className="relative h-56 overflow-hidden bg-[#eaf7fb]">
                  <Image
                    src={option.image}
                    fill
                    alt={option.title}
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C3D4C]/45 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-[#0C3D4C]">{option.title}</h3>
                  <p className="mt-2 min-h-18 text-sm leading-6 text-slate-600">{option.text}</p>
                  <Link
                    href={option.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0289ad] transition group-hover:gap-3"
                  >
                    {option.linkLabel} <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#0C3D4C] px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="relative mx-auto h-[250px] max-w-[520px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 sm:h-[320px] sm:rounded-[32px] lg:h-[390px]">
              <span className="absolute left-7 top-7 rounded-full bg-[#8ac954] px-4 py-2 text-xs font-extrabold text-[#173d26] shadow-lg">
                Simple digital journey
              </span>
              <Image
                src="/loan/per2.png"
                fill
                alt="Digital instant loan application checklist"
                className="object-contain p-8 pt-16 transition duration-500 hover:scale-105"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9de4ef]">
              Prepare before you apply
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              A stronger application starts with complete details
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-white/70">
              Accurate information helps the lender assess your application and may reduce avoidable
              follow-ups.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Match your KYC details",
                "Use an active bank account",
                "Keep income proof ready",
                "Review the final repayment",
              ].map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#8ac954] text-sm font-black text-[#173d26] transition group-hover:rotate-6">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold text-white/85">{item}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#026381] transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get application help <ArrowRight size={17} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <FAQ
        faqs={faqs}
        label="Instant Loan Help"
        title="Instant Loan Frequently Asked Questions"
        subheading="Clear answers about eligibility, lender decisions, timelines, documents and responsible borrowing."
      />
    </>
  );
}
