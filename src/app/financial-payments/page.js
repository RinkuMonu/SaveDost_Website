import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeIndianRupee,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  CreditCard,
  FileCheck2,
  Landmark,
  LockKeyhole,
  ReceiptText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ContactBanner from "../../../components/ContactBanner";
import FAQ from "../../../components/Bike Insurance/FAQ";
import ScrollReveal from "../../../components/ScrollReveal";

export const metadata = {
  title: "Financial Payments | SaveDost",
  description:
    "Explore supported financial payment categories including loan EMI, credit-card bills, insurance premiums, NPS contributions, recurring deposits and rent.",
};

const paymentCategories = [
  {
    icon: BadgeIndianRupee,
    title: "Loan EMI",
    eyebrow: "Loan repayment",
    text: "Review and pay an eligible loan instalment using the lender and loan-account details linked to your borrowing.",
    href: "/service-payment/loan-emi",
    image: "/financial-payments/loan-emi.png",
    points: [
      "Select the supported lender",
      "Enter loan-account details",
      "Review the fetched instalment",
      "Continue through the payment flow",
    ],
    tone: "bg-[#e9f7fb]",
  },
  {
    icon: CreditCard,
    title: "Credit Card Bill",
    eyebrow: "Card payment",
    text: "Pay an eligible credit-card bill through a guided flow using the details requested by the selected card issuer.",
    href: "/service-payment/credit-card-bill",
    image: "/financial-payments/credit-card-bill.png",
    points: [
      "Choose the card issuer",
      "Provide the requested card details",
      "Confirm bill information",
      "Complete the available payment method",
    ],
    tone: "bg-[#f2efff]",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Premium",
    eyebrow: "Policy payment",
    text: "Fetch and pay a supported insurance or LIC premium with the policy and customer information requested by the insurer.",
    href: "/service-payment/insurance",
    image: "/financial-payments/insurance-premium.png",
    points: [
      "Select an available insurer",
      "Enter policy information",
      "Check policyholder and premium details",
      "Save the payment confirmation",
    ],
    tone: "bg-[#eef8ed]",
  },
  {
    icon: Landmark,
    title: "NPS Contribution",
    eyebrow: "Retirement planning",
    text: "Make an eligible National Pension System contribution using your PRAN and the verification details required in the form.",
    href: "/service-payment/nps",
    image: "/financial-payments/nps-contribution.png",
    points: [
      "Keep your PRAN ready",
      "Enter contributor details carefully",
      "Choose the contribution amount",
      "Verify before authorising payment",
    ],
    tone: "bg-[#fff6e6]",
  },
  {
    icon: CalendarCheck2,
    title: "Recurring Deposit",
    eyebrow: "Scheduled savings",
    text: "Pay a supported recurring-deposit instalment using the account information associated with your deposit.",
    href: "/service-payment/recurring-deposit",
    image: "/financial-payments/recurring-deposit.png",
    points: [
      "Select the supported institution",
      "Provide deposit-account details",
      "Review the due instalment",
      "Keep the transaction reference",
    ],
    tone: "bg-[#eaf6f7]",
  },
  {
    icon: Building2,
    title: "Rental Payment",
    eyebrow: "Monthly rent",
    text: "Complete an eligible rental payment after entering the required tenant, property and recipient information.",
    href: "/service-payment/rental-payment",
    image: "/financial-payments/rental-payment.png",
    points: [
      "Add tenant information",
      "Provide property and recipient details",
      "Confirm the payment amount",
      "Review everything before proceeding",
    ],
    tone: "bg-[#fff0f2]",
  },
];

const benefits = [
  {
    icon: LockKeyhole,
    title: "Guided and secure",
    text: "Each category requests only the details needed to identify and process the selected payment.",
  },
  {
    icon: FileCheck2,
    title: "Review before paying",
    text: "Check the fetched account, policy, bill or instalment information before you authorise payment.",
  },
  {
    icon: ReceiptText,
    title: "Clear payment record",
    text: "Retain the confirmation and transaction reference displayed after a successful payment.",
  },
];

const steps = [
  { title: "Choose a category", text: "Select the financial obligation you want to manage." },
  {
    title: "Enter your details",
    text: "Provide the requested account, policy, PRAN or recipient information.",
  },
  {
    title: "Verify the information",
    text: "Check the fetched name, amount and other important details carefully.",
  },
  {
    title: "Complete the payment",
    text: "Continue with an available method and retain your transaction reference.",
  },
];

const faqs = [
  {
    question: "Which financial payments are available?",
    answer:
      "The page provides entry points for supported loan EMI, credit-card bill, insurance premium, NPS, recurring-deposit and rental-payment services.",
  },
  {
    question: "What details should I keep ready?",
    answer:
      "Requirements vary by category. You may need a loan account number, card details, policy number, PRAN, deposit account information or rental-payment details.",
  },
  {
    question: "Can I review the amount before paying?",
    answer:
      "Where bill fetching is supported, review the displayed customer and amount information before continuing. For manually entered amounts, check the value carefully.",
  },
  {
    question: "What should I do after a successful payment?",
    answer:
      "Save the payment confirmation and transaction reference. These details are useful if you later need help with the transaction.",
  },
  {
    question: "What if my institution or biller is unavailable?",
    answer:
      "Availability depends on the category and participating provider. Try the relevant form to view supported options or contact the SaveDost support team.",
  },
  {
    question: "What if a payment is pending or unsuccessful?",
    answer:
      "Avoid immediately repeating a pending transaction. Check its status first and contact support with the transaction reference if you need assistance.",
  },
];

export default function FinancialPaymentsPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative isolate overflow-hidden bg-linear-to-br from-[#eaf8fa] via-white to-[#dff3f7] px-5 py-16 sm:px-8 lg:py-24">
        <div className="pointer-events-none absolute -top-36 -right-28 -z-10 h-96 w-96 rounded-full border border-[#00a8e8]/15" />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 -z-10 h-80 w-80 rounded-full bg-[#00a8e8]/8 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#bfe3e9] bg-white/85 px-4 py-2 text-xs font-extrabold tracking-widest text-[#0289ad] uppercase">
              <Sparkles size={14} /> Financial Payments
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl leading-tight font-extrabold tracking-tight text-[#0c3d4c] sm:text-5xl lg:text-6xl">
              Important payments, organised in one place.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Find the right flow for eligible loan instalments, card bills, insurance premiums,
              pension contributions, deposits and rent.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#payment-categories" className="pan-hero-button group gap-2">
                Explore Payments{" "}
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </Link>
              <Link href="#how-it-works" className="pan-hero-button">
                How it works
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
              {["Guided forms", "Detail verification", "Transaction reference"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#0297bd]" /> {item}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.12} className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-8 rounded-full bg-[#bdebf2]/55 blur-3xl" />
            <div className="relative overflow-hidden rounded-4xl border border-white/80 bg-white/65 p-3 shadow-2xl backdrop-blur">
              <Image
                src="/financial-payments-hero-v2.png"
                alt="Financial payment dashboard with a receipt and payment card"
                width={1536}
                height={1024}
                priority
                className="aspect-3/2 w-full rounded-3xl object-cover mix-blend-multiply"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-[#dcebed] bg-white px-5 py-7 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 text-center sm:grid-cols-3">
          {[
            ["6", "Payment categories"],
            ["4", "Simple steps"],
            ["1", "Convenient overview"],
          ].map(([value, label], index) => (
            <ScrollReveal
              key={label}
              delay={index * 0.07}
              className="rounded-2xl bg-[#f6fafb] px-5 py-4"
            >
              <p className="text-2xl font-extrabold text-[#026381]">{value}</p>
              <p className="mt-1 text-xs font-bold tracking-wide text-slate-500 uppercase">
                {label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section
        id="payment-categories"
        className="scroll-mt-24 bg-[#f4f9fa] px-5 py-16 sm:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold tracking-widest text-[#0289ad] uppercase">
              Payment Categories
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c3d4c] sm:text-4xl">
              Choose the payment you need
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Each option takes you to a focused form with details relevant to that financial
              payment.
            </p>
          </ScrollReveal>

          <div className="mt-12 space-y-6">
            {paymentCategories.map(
              ({ icon: Icon, title, eyebrow, text, href, image, points, tone }, index) => (
                <ScrollReveal
                  key={title}
                  direction={index % 2 ? "right" : "left"}
                  className="overflow-hidden rounded-4xl border border-[#d7e9ed] bg-white p-6 shadow-sm sm:p-8 lg:p-10"
                >
                  <div className="grid items-center gap-9 md:grid-cols-2 lg:gap-16">
                    <div className={index % 2 ? "md:order-2" : ""}>
                      <div
                        className={`group/image relative aspect-3/2 overflow-hidden rounded-3xl ${tone}`}
                      >
                        <Image
                          src={image}
                          alt={`${title} payment illustration`}
                          fill
                          sizes="(max-width: 767px) 100vw, 50vw"
                          className="object-cover transition duration-500 group-hover/image:scale-[1.025]"
                        />
                        <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-2xl border border-white/80 bg-white/90 text-[#027f9f] shadow-lg backdrop-blur">
                          <Icon size={23} strokeWidth={1.8} />
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-extrabold tracking-widest text-[#0289ad] uppercase">
                        {eyebrow}
                      </p>
                      <h3 className="mt-2 text-3xl font-extrabold text-[#0c3d4c]">{title}</h3>
                      <p className="mt-4 text-base leading-7 text-slate-600">{text}</p>
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
                          >
                            <CheckCircle2 size={17} className="mt-1 shrink-0 text-[#0297bd]" />{" "}
                            {point}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={href}
                        className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#026381] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0c3d4c]"
                      >
                        Continue to {title}{" "}
                        <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              )
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#0c3d4c] px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs font-extrabold tracking-widest text-[#63d4e8] uppercase">
              Designed for clarity
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              A more confident way to complete financial payments
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <ScrollReveal
                key={title}
                delay={index * 0.08}
                className="rounded-3xl border border-white/15 bg-white/7 p-6"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#63d4e8]/15 text-[#63d4e8]">
                  <Icon size={23} />
                </span>
                <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <ScrollReveal direction="left" className="lg:sticky lg:top-28">
            <p className="text-xs font-extrabold tracking-widest text-[#0289ad] uppercase">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c3d4c] sm:text-4xl">
              From selection to confirmation in four clear steps
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The fields differ by category, but the overall process stays easy to follow.
            </p>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map(({ title, text }, index) => (
              <ScrollReveal
                key={title}
                delay={(index % 2) * 0.08}
                className="rounded-3xl border border-[#d7e9ed] bg-[#f8fcfd] p-6"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#026381] text-sm font-extrabold text-white">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-[#0c3d4c]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal>
        <FAQ
          faqs={faqs}
          label="Payment Help"
          title="Financial payment questions"
          subheading="Helpful answers before you begin a financial payment."
        />
      </ScrollReveal>
      <ContactBanner />
    </main>
  );
}
