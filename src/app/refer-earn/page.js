import Image from "next/image";
import {
  ArrowDown,
  BadgeIndianRupee,
  Check,
  CheckCircle2,
  Gift,
  IndianRupee,
  Link2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserCheck,
} from "lucide-react";
import FAQ from "../../../components/Bike Insurance/FAQ";
import ReferAppButton from "../../../components/ReferAppButton";
import ScrollReveal from "../../../components/ScrollReveal";

export const metadata = {
  title: "Refer & Earn ₹99 | SaveDost",
  description:
    "Invite eligible friends to SaveDost and earn a ₹99 referral reward after they complete the qualifying steps.",
};

const steps = [
  {
    icon: Smartphone,
    number: "01",
    title: "Open SaveDost",
    text: "Sign in and open Refer & Earn from your account.",
  },
  {
    icon: Link2,
    number: "02",
    title: "Share your link",
    text: "Invite a friend using your unique referral link or code.",
  },
  {
    icon: UserCheck,
    number: "03",
    title: "Friend qualifies",
    text: "Your friend registers and completes the activity shown in the app.",
  },
  {
    icon: IndianRupee,
    number: "04",
    title: "You earn ₹99",
    text: "The reward is credited after successful verification.",
  },
];

const terms = [
  "Your friend must be a new and eligible SaveDost user.",
  "Your referral code or link must be used during registration.",
  "Registration, verification and the qualifying activity must be completed.",
  "Duplicate, self, fraudulent or incomplete referrals are not eligible.",
  "Reward status and credit timing are subject to verification.",
  "Programme availability is governed by the current in-app offer terms.",
];

const faqs = [
  {
    question: "How much can I earn for an eligible referral?",
    answer:
      "The current reward is ₹99 for each referral that completes all qualifying steps and passes verification.",
  },
  {
    question: "Who can I refer?",
    answer:
      "You can refer an eligible friend who is new to SaveDost and has not registered previously using the same mobile number or identity details.",
  },
  {
    question: "When will I receive the reward?",
    answer:
      "The reward is processed after the referred user completes the qualifying journey and the referral passes verification. Check the app for its current status and expected timeline.",
  },
  {
    question: "Where can I find my referral link?",
    answer:
      "Sign in to the SaveDost app and open Refer & Earn to view and share your unique referral link or code.",
  },
  {
    question: "Why might a referral be ineligible?",
    answer:
      "Common reasons include an existing user, incomplete verification, incorrect tracking, duplicate details, or a missing qualifying activity.",
  },
];

export default function ReferEarnPage() {
  return (
    <main className="overflow-hidden bg-[#f7fbfc] text-[#0C3D4C]">
      <section className="relative isolate min-h-[650px] overflow-hidden bg-[linear-gradient(135deg,#eaf9fb_0%,#f8fdf8_52%,#e8f6ed_100%)] px-4 pb-20 pt-14 sm:px-6 sm:pt-18 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#00a8e8,#026381,#82c950)]" />
        <div className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-[#00a8e8]/12 blur-3xl" />
        <div className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-[#82c950]/16 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(#72bfd0_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_right,black,transparent_45%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <ScrollReveal direction="left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#bfe2e8] bg-white/80 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.18em] text-[#027f9f] shadow-sm backdrop-blur">
              <Gift size={15} /> Invite a dost. Get rewarded.
            </div>
            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.04] tracking-[-.04em] sm:text-5xl lg:text-[64px]">
              Your circle grows.
              <span className="mt-1 block text-[#0289ad]">Your rewards do too.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Share SaveDost with an eligible friend. When they complete the qualifying journey, you
              earn a <strong className="font-extrabold text-[#0C3D4C]">₹99 referral reward.</strong>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ReferAppButton className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#026381] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(2,99,129,.24)] transition hover:-translate-y-0.5 hover:bg-[#0C3D4C] hover:shadow-xl">
                Refer now
              </ReferAppButton>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#b9dce3] bg-white/75 px-6 py-3.5 text-sm font-bold text-[#0C3D4C] transition hover:bg-white"
              >
                How it works <ArrowDown size={16} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Simple sharing", "Verified rewards", "Track in app"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-600"
                >
                  <CheckCircle2 size={16} className="text-[#82b943]" />
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <div className="relative mx-auto h-[440px] max-w-[560px] sm:h-[500px]">
              <div className="absolute inset-x-6 bottom-0 top-10 overflow-hidden rounded-[42px] border border-white bg-[linear-gradient(155deg,#0b708b_0%,#0C3D4C_68%)] shadow-[0_30px_70px_rgba(12,61,76,.24)]">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[42px] border-white/5" />
                <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-[#82c950]/18 blur-2xl" />
                <div className="absolute left-6 top-6 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur">
                  <p className="text-[9px] font-bold uppercase tracking-[.18em] text-white/60">
                    Reward per referral
                  </p>
                  <p className="mt-1 text-3xl font-black">₹99</p>
                </div>
                <Image
                  src="/dmt/earn.png"
                  alt="SaveDost user inviting a friend"
                  fill
                  priority
                  className="object-contain object-bottom pt-16"
                  sizes="(max-width: 1024px) 90vw, 540px"
                />
              </div>
              <div className="absolute right-0 top-0 rounded-2xl border border-[#cfe8d6] bg-white p-4 shadow-[0_18px_40px_rgba(12,61,76,.16)] sm:right-[-8px] sm:p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#ebf7e4] text-[#67a532]">
                  <BadgeIndianRupee size={22} />
                </span>
                <p className="mt-3 text-xs font-bold text-slate-400">Reward unlocked</p>
                <p className="mt-1 text-xl font-black text-[#0C3D4C]">+ ₹99</p>
              </div>
              <div className="absolute bottom-8 left-0 flex items-center gap-3 rounded-2xl border border-[#d5e8ec] bg-white p-4 shadow-[0_18px_40px_rgba(12,61,76,.17)]">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#e3f5f8] text-[#0289ad]">
                  <Check size={20} strokeWidth={3} />
                </span>
                <div>
                  <p className="text-xs font-extrabold">Referral verified</p>
                  <p className="mt-0.5 text-[10px] text-slate-500">Reward ready</p>
                </div>
              </div>
              <Sparkles className="absolute left-2 top-16 text-[#00a8e8]" size={25} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-[#d8eaed] bg-white shadow-[0_18px_50px_rgba(12,61,76,.10)] sm:grid-cols-3">
          {[
            ["₹99", "Per eligible referral"],
            ["4 steps", "From share to reward"],
            ["In-app", "Simple status tracking"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`p-5 text-center sm:p-7 ${index ? "border-t border-[#e2edef] sm:border-l sm:border-t-0" : ""}`}
            >
              <p className="text-2xl font-black text-[#0289ad] sm:text-3xl">{value}</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0289ad]">
              One link. Four simple steps.
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              From invite to ₹99
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Everything happens through the SaveDost app, so sharing and tracking stay simple.
            </p>
          </ScrollReveal>

          <div className="relative mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-12 hidden border-t-2 border-dashed border-[#b9dce3] lg:block" />
            {steps.map(({ icon: Icon, number, title, text }, index) => (
              <ScrollReveal key={title} delay={index * 0.07} className="relative h-full">
                <article className="group relative h-full rounded-3xl border border-[#dcebed] bg-white p-6 shadow-[0_10px_30px_rgba(12,61,76,.06)] transition duration-300 hover:-translate-y-1.5 hover:border-[#8bcbd6] hover:shadow-[0_18px_42px_rgba(12,61,76,.12)]">
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="grid h-13 w-13 place-items-center rounded-2xl bg-[#e6f5f7] text-[#027f9f] ring-8 ring-[#f7fbfc] transition group-hover:bg-[#026381] group-hover:text-white">
                      <Icon size={23} />
                    </span>
                    <span className="text-xs font-black tracking-[.15em] text-[#82b943]">
                      STEP {number}
                    </span>
                  </div>
                  <h3 className="mt-7 text-lg font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[36px] bg-[#0C3D4C] text-white shadow-[0_24px_60px_rgba(12,61,76,.2)] lg:grid-cols-[.82fr_1.18fr]">
          <ScrollReveal direction="left" className="relative overflow-hidden p-7 sm:p-10 lg:p-12">
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#00a8e8]/15 blur-3xl" />
            <span className="relative grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/10 text-[#9de4ef]">
              <ShieldCheck size={28} />
            </span>
            <p className="relative mt-6 text-xs font-extrabold uppercase tracking-[.2em] text-[#9de4ef]">
              Fair &amp; transparent
            </p>
            <h2 className="relative mt-3 max-w-md text-3xl font-black leading-tight sm:text-4xl">
              Genuine referrals deserve genuine rewards.
            </h2>
            <p className="relative mt-4 max-w-md text-sm leading-7 text-white/65">
              A few simple checks keep the programme safe and rewarding for everyone.
            </p>
          </ScrollReveal>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {terms.map((term) => (
              <ScrollReveal key={term}>
                <div className="flex h-full gap-3 bg-[#104858] p-5 text-sm leading-6 text-white/75 transition hover:bg-[#145367] sm:p-6">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#91d05b]" /> {term}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <ScrollReveal className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-7 overflow-hidden rounded-[32px] border border-[#cae5e9] bg-[linear-gradient(120deg,#e8f7f9,#f5fbef)] p-7 text-center sm:p-10 lg:flex-row lg:p-12 lg:text-left">
          <div className="absolute -right-12 -top-20 h-52 w-52 rounded-full border-[32px] border-white/50" />
          <div className="relative">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0289ad]">
              Ready to share?
            </p>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              Your next dost could unlock ₹99.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Open the app, copy your unique referral link and start sharing.
            </p>
          </div>
          <ReferAppButton className="relative inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#82b943] px-7 py-4 text-sm font-extrabold text-white shadow-[0_12px_26px_rgba(101,157,55,.25)] transition hover:-translate-y-0.5 hover:bg-[#6da331] hover:shadow-xl">
            Get my referral link
          </ReferAppButton>
        </ScrollReveal>
      </section>

      <FAQ
        faqs={faqs}
        label="Referral Help"
        title="Refer & Earn FAQs"
        subheading="Clear answers about eligibility, tracking and the ₹99 referral reward."
      />
    </main>
  );
}
