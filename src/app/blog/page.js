import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CreditCard,
  Lightbulb,
  ReceiptText,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import BlogC from "../../../components/BlogC";
import FAQ from "../../../components/Bike Insurance/FAQ";
import ContactBanner from "../../../components/ContactBanner";
import ScrollReveal from "../../../components/ScrollReveal";

export const metadata = {
  title: "SaveDost Blog | Payment Guides & Financial Insights",
  description:
    "Read practical SaveDost guides about digital payments, utility bills, recharges, financial awareness and safer everyday transactions.",
};

const topics = [
  { icon: Smartphone, label: "Recharge Guides" },
  { icon: ReceiptText, label: "Bill Payments" },
  { icon: CreditCard, label: "Financial Awareness" },
  { icon: ShieldCheck, label: "Payment Safety" },
];

const faqData = [
  {
    question: "What topics does the SaveDost blog cover?",
    answer:
      "The blog covers digital payments, recharges, utility bills, financial awareness, payment safety and updates about supported SaveDost services.",
  },
  {
    question: "How can I find a specific article?",
    answer:
      "Use the search box, category filter or publication-date filter in the article section.",
  },
  {
    question: "How often are new articles published?",
    answer:
      "New articles are published when we have useful guidance, service information or important updates to share.",
  },
  {
    question: "Can I get help with a SaveDost service here?",
    answer:
      "Articles provide general guidance. For assistance with your account or a transaction, please use the Contact Us page.",
  },
];

export default function BlogPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative bg-[#edf8fa] px-5 py-14 sm:px-8 lg:py-20">
        <div className="pointer-events-none absolute top-8 -left-24 h-64 w-64 rounded-full bg-[#00a8e8]/8 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#b9dfe7] bg-white px-4 py-2 text-xs font-extrabold tracking-widest text-[#026381] uppercase">
              <BookOpen size={15} /> SaveDost Blog
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl leading-tight font-extrabold tracking-tight text-[#0C3D4C] sm:text-5xl lg:text-6xl">
              Clear answers for smarter financial decisions.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Practical guides and useful information about payments, recharges, bills and everyday
              digital finance—written to help you understand what to do next.
            </p>
            <Link href="#blog-articles" className="pan-hero-button mt-8 gap-2">
              Browse Articles <ArrowRight size={17} />
            </Link>
          </ScrollReveal>
          <ScrollReveal
            direction="right"
            delay={0.12}
            className="relative mx-auto h-80 w-full max-w-xl sm:h-105"
          >
            <div className="absolute inset-6 rounded-4xl bg-white/75 shadow-xl" />
            <Image
              src="/blog/blog2.png"
              alt="SaveDost financial learning and blog illustration"
              fill
              priority
              className="relative object-contain p-5"
            />
            <div className="absolute bottom-5 left-4 rounded-xl border border-white bg-white/95 px-5 py-4 shadow-lg backdrop-blur sm:left-8">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#e8f6f8] text-[#0289ad]">
                  <Lightbulb size={18} />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-[#0C3D4C]">Learn with confidence</p>
                  <p className="mt-0.5 text-xs text-slate-500">Simple language. Useful guidance.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-[#e0edef] px-5 py-8 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map(({ icon: Icon, label }, index) => (
            <ScrollReveal key={label} delay={index * 0.07}>
              <a
                href="#blog-articles"
                className="flex items-center gap-3 rounded-xl border border-[#dcebed] bg-white px-4 py-3.5 text-sm font-bold text-[#315a67] transition hover:-translate-y-0.5 hover:border-[#9ed3de] hover:text-[#026381]"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#eaf7f9] text-[#0289ad]">
                  <Icon size={18} />
                </span>
                {label}
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="blog-articles" className="scroll-mt-20 bg-[#f7fafb]">
        <BlogC />
      </section>

      <FAQ
        faqs={faqData}
        subheading="Quick answers about SaveDost articles and service guidance."
      />

      <ContactBanner />
    </main>
  );
}
