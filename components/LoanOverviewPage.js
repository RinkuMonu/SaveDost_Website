import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Calculator,
  Car,
  CheckCircle2,
  Clock3,
  FileCheck2,
  HardHat,
  House,
  IndianRupee,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import FAQ from "./Bike Insurance/FAQ";
import ScrollReveal from "./ScrollReveal";

const loanCategories = [
  {
    title: "Instant Loan",
    description: "A guided digital journey for shorter-term, urgent financial requirements.",
    href: "/instant-loan",
    image: "/loan/generated/personal-loan-hero.png",
    icon: Clock3,
    tag: "Quick digital guidance",
  },
  {
    title: "Personal Loan",
    description: "Flexible unsecured finance for eligible personal and family priorities.",
    href: "/loan/personal-loan",
    image: "/loan/personal3d.png",
    icon: UserRound,
    tag: "Flexible end use",
  },
  {
    title: "Home Loan",
    description: "Property-focused funding for purchase, construction, or renovation.",
    href: "/loan/home-loan",
    image: "/loan/generated/home-loan-hero.png",
    icon: House,
    tag: "Long-term planning",
  },
  {
    title: "Car Loan",
    description: "Vehicle finance for eligible new and used cars with EMI planning.",
    href: "/loan/car-loan",
    image: "/loan/generated/car-loan-hero.png",
    icon: Car,
    tag: "New and used cars",
  },
  {
    title: "Business Loan",
    description: "Capital for working needs, inventory, equipment, and expansion.",
    href: "/loan/business-loan",
    image: "/loan/generated/business-loan-hero.png",
    icon: BriefcaseBusiness,
    tag: "Business growth",
  },
  {
    title: "Construction Equipment Loan",
    description: "Purpose-built finance for eligible heavy machinery and equipment.",
    href: "/loan/construction-equipment-loan",
    image: "/loan/generated/construction-equipment-loan-hero.png",
    icon: HardHat,
    tag: "Asset-focused funding",
  },
];

const selectionGuide = [
  {
    need: "A flexible personal expense",
    answer: "Personal Loan",
    href: "/loan/personal-loan",
    icon: UserRound,
  },
  {
    need: "A home purchase or construction",
    answer: "Home Loan",
    href: "/loan/home-loan",
    icon: House,
  },
  { need: "A new or eligible used car", answer: "Car Loan", href: "/loan/car-loan", icon: Car },
  {
    need: "Business capital or expansion",
    answer: "Business Loan",
    href: "/loan/business-loan",
    icon: Building2,
  },
];

const faqs = [
  {
    question: "How do I choose the right loan category?",
    answer:
      "Start with the actual purpose, required amount, expected repayment period, and whether the purchase is linked to an asset. A dedicated home, car, business, or equipment loan may be more suitable than general-purpose credit.",
  },
  {
    question: "Does SaveDost approve or disburse loans?",
    answer:
      "SaveDost helps users understand and explore loan journeys. The lending institution makes the final decision on eligibility, approval, rate, fees, tenure, and disbursal.",
  },
  {
    question: "What documents should I prepare first?",
    answer:
      "Most journeys begin with PAN, accepted KYC documents, bank statements, and income records. Asset and business loans also require product-specific documents such as property papers, vehicle quotations, business financials, or equipment details.",
  },
  {
    question: "Why should I calculate EMI before applying?",
    answer:
      "An EMI estimate helps compare amounts and tenures against your monthly budget. The final repayment is based on the lender’s approved rate, fees, and terms.",
  },
];

export default function LoanOverviewPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-[#e2eef1] bg-white px-4 py-10 sm:min-h-[650px] sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#00a8e8]/8 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#8ac954]/10 blur-3xl" />
        <Image
          src="/loan/loanbg.png"
          fill
          alt=""
          aria-hidden="true"
          className="pointer-events-none object-cover opacity-[0.12]"
        />
        <div className="pointer-events-none absolute -left-[8%] top-14 h-72 w-[116%] rounded-[50%] border-t-2 border-dashed border-[#7bc8d8]/60" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-7 sm:gap-12 lg:grid-cols-[1fr_.9fr]">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#b9e1e9] bg-[#eff9fb] px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-[#026381]">
              <Sparkles size={15} /> SaveDost loan solutions
            </span>
            <h1 className="mt-4 max-w-3xl text-3xl font-black leading-[1.1] tracking-tight text-[#0C3D4C] sm:mt-6 sm:text-5xl lg:text-6xl">
              One place to explore a loan for
              <span className="text-[#0289ad]"> every important goal.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-7">
              Compare personal, home, car, business, construction equipment, and instant loan
              journeys with clear product-focused guidance.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <a
                href="#loan-options"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#026381] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#0C3D4C] hover:shadow-xl sm:w-auto sm:px-6 sm:py-3.5"
              >
                Explore loan options <ArrowRight size={18} />
              </a>
              <Link
                href="/loan-emi"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#b9dce3] bg-[#eff9fb] px-5 py-3 text-sm font-bold text-[#026381] transition hover:bg-[#e1f4f7] sm:w-auto sm:px-6 sm:py-3.5"
              >
                Calculate EMI <Calculator size={18} />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative mx-auto h-[300px] w-full max-w-[620px] sm:h-[420px] lg:h-[500px]">
              <div className="absolute inset-x-10 bottom-0 h-[78%] rounded-[48%_48%_12%_12%] bg-gradient-to-t from-[#dff3f7] to-[#f4fbfc]" />
              <div className="absolute right-1 top-2 h-40 w-40 animate-pulse rounded-full bg-[#8ac954]/10 blur-2xl" />

              <div className="group absolute right-[-2%] top-[5%] z-20 h-32 w-36 rounded-3xl border border-[#d7e9ed] bg-white/95 p-2 shadow-xl transition duration-300 hover:-translate-y-2 hover:rotate-2">
                <Image
                  src="/loan/Home-vec3d.png"
                  fill
                  alt="Home loan"
                  className="object-contain p-2"
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#026381] px-3 py-1 text-[9px] font-bold text-white">
                  HOME LOAN
                </span>
              </div>

              <div className="group absolute left-[-2%] top-[24%] z-20 h-28 w-36 rounded-3xl border border-[#d7e9ed] bg-white/95 p-2 shadow-xl transition duration-300 hover:-translate-y-2 hover:-rotate-2">
                <Image
                  src="/loan/carloan3d.png"
                  fill
                  alt="Car loan"
                  className="object-contain p-2"
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#0289ad] px-3 py-1 text-[9px] font-bold text-white">
                  CAR LOAN
                </span>
              </div>

              <div className="group absolute bottom-[4%] right-[-1%] z-30 h-28 w-36 rounded-3xl border border-[#d7e9ed] bg-white/95 p-2 shadow-xl transition duration-300 hover:-translate-y-2 hover:rotate-2">
                <Image
                  src="/loan/const3d.png"
                  fill
                  alt="Equipment loan"
                  className="object-contain p-2"
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#579d32] px-3 py-1 text-[9px] font-bold text-white">
                  EQUIPMENT
                </span>
              </div>

              <Image
                src="/loan/loan3.png"
                fill
                priority
                alt="SaveDost loan guidance"
                className="relative z-10 object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="loan-options"
        className="scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#0289ad]">
              Explore all loan types
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0C3D4C] sm:mt-3 sm:text-4xl">
              Choose the product built for your purpose
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Each category has its own assessment, documents, use cases, and repayment
              considerations.
            </p>
          </ScrollReveal>
          <div className="mt-7 grid gap-4 sm:mt-11 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {loanCategories.map(({ title, description, href, image, icon: Icon, tag }) => (
              <article
                key={href}
                className="group overflow-hidden rounded-3xl border border-[#d9e9ed] bg-white shadow-[0_14px_34px_rgba(12,61,76,.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_52px_rgba(12,61,76,.16)]"
              >
                <div className="relative h-40 overflow-hidden bg-[#eaf7fb] sm:h-52">
                  <Image
                    src={image}
                    fill
                    alt={title}
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C3D4C]/65 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#026381] backdrop-blur">
                    {tag}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e5f5f8] text-[#026381] transition group-hover:rotate-6 group-hover:bg-[#026381] group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-[#0C3D4C]">{title}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{description}</p>
                  <Link
                    href={href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0289ad] transition group-hover:gap-3"
                  >
                    View details <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f8fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <ScrollReveal direction="left">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#0289ad]">
              Quick selection guide
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0C3D4C] sm:mt-3 sm:text-4xl">
              Start with what you need the loan for
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Purpose is the simplest way to narrow the options. Then compare eligibility,
              contribution, security, tenure, and total repayment.
            </p>
            <div className="relative mt-6 h-[210px] sm:mt-8 sm:h-[290px]">
              <Image
                src="/loan/loan2.png"
                fill
                alt="Loan planning illustration"
                className="object-contain"
              />
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {selectionGuide.map(({ need, answer, href, icon: Icon }) => (
              <Link
                key={answer}
                href={href}
                className="group rounded-2xl border border-[#d6e9ed] bg-white p-6 shadow-sm transition hover:-translate-y-1.5 hover:border-[#8fcfdb] hover:shadow-xl"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e5f5f8] text-[#026381] transition group-hover:rotate-6 group-hover:bg-[#026381] group-hover:text-white">
                  <Icon size={21} />
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-400">
                  {need}
                </p>
                <h3 className="mt-2 flex items-center justify-between text-lg font-extrabold text-[#0C3D4C]">
                  {answer}
                  <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#0289ad]">
              Prepare, compare, decide
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0C3D4C] sm:mt-3 sm:text-4xl">
              A better loan decision in four steps
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:mt-11 sm:gap-5 md:grid-cols-4">
            {[
              [
                "01",
                "Define the purpose",
                "Choose the correct category and estimate the genuine amount needed.",
              ],
              [
                "02",
                "Check affordability",
                "Compare the proposed EMI with income and existing obligations.",
              ],
              [
                "03",
                "Prepare documents",
                "Keep KYC, banking, income, and product-specific records ready.",
              ],
              [
                "04",
                "Review final terms",
                "Check rate, fees, tenure, conditions, and total repayment.",
              ],
            ].map(([number, title, text]) => (
              <article
                key={number}
                className="group rounded-2xl border border-[#d9e9ed] p-6 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-3xl font-black text-[#00a8e8]/30">{number}</span>
                <h3 className="mt-5 font-extrabold text-[#0C3D4C]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/loan-emi"
              className="inline-flex items-center gap-2 rounded-xl bg-[#026381] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#0C3D4C]"
            >
              <IndianRupee size={17} /> Estimate your EMI
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0C3D4C] px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            [
              BadgeCheck,
              "Product-focused details",
              "Each page explains relevant uses, eligibility, documents, and assessment.",
            ],
            [
              ShieldCheck,
              "Transparent guidance",
              "Understand the journey without guaranteed approval or misleading rate claims.",
            ],
            [
              FileCheck2,
              "Ready-document support",
              "Know what to prepare before beginning a lender assessment.",
            ],
          ].map(([Icon, title, text]) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <Icon className="text-[#8ac954]" />
              <h3 className="mt-4 font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <FAQ
        faqs={faqs}
        label="Loan Help Centre"
        title="Loan Overview Frequently Asked Questions"
        subheading="Clear answers about selecting a loan, preparing documents, EMI planning and lender decisions."
      />
    </>
  );
}
