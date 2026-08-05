"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  WalletCards,
} from "lucide-react";
import FAQ from "../Bike Insurance/FAQ";
import {
  benefits,
  faqs,
  journey,
  missionVision,
  securityPoints,
  services,
  statistics,
  storyPoints,
  values,
} from "./aboutData";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } },
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ label, title, text, centered = false, light = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`text-xs font-extrabold uppercase tracking-[.18em] ${light ? "text-[#9de4ef]" : "text-[#0289ad]"}`}
      >
        {label}
      </p>
      <h2
        className={`mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${light ? "text-white" : "text-[#0C3D4C]"}`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-7 ${light ? "text-white/70" : "text-slate-600"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

function PaymentVisual() {
  return (
    <div
      className="relative mx-auto h-[420px] w-full max-w-[500px]"
      aria-label="Illustration of a secure SaveDost mobile payment"
    >
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a9dbe4] bg-white/55" />
      <div className="absolute left-[8%] top-[20%] rounded-2xl border border-white bg-white p-4 shadow-[0_16px_35px_rgba(12,61,76,.12)]">
        <ReceiptText className="text-[#0289ad]" size={23} />
        <p className="mt-3 text-xs font-bold text-[#0C3D4C]">Utility bill</p>
        <p className="mt-1 text-[10px] text-slate-400">Ready to pay</p>
      </div>
      <div className="absolute right-[4%] top-[13%] rounded-2xl border border-white bg-white p-4 shadow-[0_16px_35px_rgba(12,61,76,.12)]">
        <WalletCards className="text-[#65b828]" size={23} />
        <p className="mt-3 text-xs font-bold text-[#0C3D4C]">Digital wallet</p>
      </div>
      <div className="absolute bottom-[12%] right-[2%] rounded-2xl border border-white bg-white px-4 py-3 shadow-[0_16px_35px_rgba(12,61,76,.12)]">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={18} className="text-[#65b828]" />
          <span className="text-xs font-bold text-[#0C3D4C]">Payment confirmed</span>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] border-[7px] border-[#163d63] bg-white p-4 shadow-[0_25px_60px_rgba(12,61,76,.24)]">
        <div className="mx-auto h-1.5 w-16 rounded-full bg-[#163d63]" />
        <Image
          src="/image/SaveDost-initial.png"
          alt="SaveDost"
          width={52}
          height={52}
          className="mx-auto mt-5 h-12 w-12 object-contain"
        />
        <p className="mt-3 text-center text-xs font-bold text-[#0C3D4C]">Pay electricity bill</p>
        <div className="mt-5 rounded-xl bg-[#f1f8fa] p-3">
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Amount</span>
            <span>Due today</span>
          </div>
          <p className="mt-2 text-xl font-extrabold text-[#0C3D4C]">₹2,450</p>
        </div>
        <div className="mt-4 rounded-xl bg-[#026381] py-3 text-center text-xs font-bold text-white">
          Pay securely
        </div>
        <div className="mt-4 flex items-center justify-center gap-1 text-[9px] text-slate-400">
          <LockKeyhole size={10} /> Protected payment
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-[#f2f9fb] px-5 pb-24 pt-10 sm:px-8 lg:pb-32 lg:pt-14">
      <div className="pointer-events-none absolute -left-28 top-12 h-72 w-72 rounded-full bg-[#00a8e8]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#75bd36]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_.98fr]">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={container}
          >
            <motion.p
              variants={item}
              className="text-xs font-extrabold uppercase tracking-[.18em] text-[#0289ad]"
            >
              About SaveDost
            </motion.p>
            <motion.h1
              variants={item}
              className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0C3D4C] sm:text-5xl lg:text-[58px]"
            >
              Making Everyday Payments Simple, Secure and Accessible.
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              SaveDost brings essential financial and utility services together in one secure
              platform, helping customers manage payments, recharges, bills and everyday
              transactions with confidence.
            </motion.p>
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <Link href="/bill-payments" className="pan-hero-button gap-2">
                Explore Our Services <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="pan-hero-button">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, delay: 0.12 }}
          >
            <PaymentVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ value, suffix, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduceMotion) {
      setDisplay(value);
      return undefined;
    }
    let frame;
    const start = performance.now();
    const duration = 1100;
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(value * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function StatisticsSection() {
  return (
    <section className="relative z-10 -mt-12 px-5 sm:px-8" aria-label="SaveDost statistics">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-[#d6e8ec] bg-white shadow-[0_18px_45px_rgba(12,61,76,.1)] sm:grid-cols-2 lg:grid-cols-4"
      >
        {statistics.map(({ icon: Icon, value, suffix, label, decimals }) => (
          <motion.div
            variants={item}
            key={label}
            className="flex items-center gap-4 border-b border-[#e4eff1] p-6 last:border-0 sm:border-r lg:border-b-0"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#eaf7f9] text-[#026381]">
              <Icon size={21} />
            </span>
            <div>
              <p className="text-2xl font-extrabold text-[#0C3D4C]">
                <AnimatedNumber value={value} suffix={suffix} decimals={decimals} />
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-500">{label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <Image
            src="/about/about.jpg"
            alt="A customer using digital financial services"
            width={900}
            height={650}
            className="h-[360px] w-full rounded-[24px] object-cover sm:h-[470px]"
          />
          <div className="absolute -bottom-5 right-5 rounded-xl border border-[#dbeaed] bg-white px-5 py-4 shadow-xl sm:right-8">
            <p className="text-sm font-extrabold text-[#0C3D4C]">Fast. Secure. SaveDost.</p>
          </div>
        </Reveal>
        <Reveal>
          <SectionHeading label="Our Story" title="Fintech Built Around Everyday Needs" />
          <p className="mt-6 text-base leading-8 text-slate-600">
            SaveDost was created with a simple goal: to make digital financial services easier to
            understand and more convenient to use.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            From mobile recharges and utility bill payments to secure digital transactions, we help
            users complete everyday financial activities from one reliable platform.
          </p>
          <ul className="mt-7 space-y-4">
            {storyPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-bold text-[#315a67]">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#edf8e7] text-[#63ae2c]">
                  <Check size={14} strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  return (
    <section className="bg-[#f5fafb] px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        {missionVision.map(({ icon: Icon, eyebrow, title, text }, index) => (
          <Reveal key={eyebrow} delay={index * 0.08}>
            <article className="group h-full rounded-[24px] border border-[#d9e9ec] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#98d0db] hover:shadow-[0_18px_40px_rgba(12,61,76,.09)] sm:p-9">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#eaf7f9] text-[#026381] transition group-hover:bg-[#026381] group-hover:text-white">
                <Icon size={23} />
              </span>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[.17em] text-[#0289ad]">
                {eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#0C3D4C]">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function LeadershipSection() {
  const leadershipPoints = [
    "Everyday financial services in one place",
    "Technology designed around trust and clarity",
    "Simple experiences for users across India",
    "Responsible progress guided by real needs",
  ];

  return (
    <section id="leadership" className="border-y border-[#ebe7e2] bg-[#fbf8f4]">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1.42fr_.58fr]">
        <Reveal className="flex items-center px-6 py-12 sm:px-10 lg:px-14 lg:py-14 xl:px-16">
          <div className="max-w-4xl">
            <p className="text-xs font-extrabold uppercase tracking-[.32em] text-[#0289ad]">
              Leadership &amp; Vision
            </p>
            <h2 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#101827] sm:text-5xl lg:text-[54px] xl:text-[60px]">
              A clear vision for simpler digital finance.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Under the leadership of founder Mr. Dinesh Kumar, SaveDost is working to make
              essential payments and financial services easier for people to access and understand.
            </p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              The company&apos;s direction is shaped by a simple belief: technology should reduce
              effort, create confidence and help users complete everyday financial tasks without
              unnecessary complexity.
            </p>
            <ul className="mt-7 space-y-3.5">
              {leadershipPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-4 text-base font-bold text-[#172033] sm:text-lg"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#026381] text-white">
                    <Check size={17} strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="relative min-h-[400px] lg:min-h-[550px]">
          <Image
            src="/about/founder.jpeg"
            alt="Mr. Dinesh Kumar, Founder of SaveDost"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-top"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/70 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-sm">
            <p className="text-sm font-extrabold text-[#0C3D4C]">Mr. Dinesh Kumar</p>
            <p className="mt-1 text-xs font-semibold text-[#0289ad]">Founder, SaveDost</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            label="Our Services"
            title="One Platform for Everyday Financial Needs"
            centered
          />
        </Reveal>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ icon: Icon, title, text, href }) => (
            <motion.article
              variants={item}
              key={title}
              className="group rounded-2xl border border-[#dcebed] bg-white p-6 transition hover:-translate-y-1 hover:border-[#9bd3de] hover:shadow-[0_16px_34px_rgba(12,61,76,.09)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#eaf7f9] text-[#0289ad]">
                <Icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-[#0C3D4C]">{title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{text}</p>
              <Link
                href={href}
                aria-label={`Explore ${title}`}
                className="mt-5 grid h-9 w-9 place-items-center rounded-full border border-[#b9dce3] text-[#026381] transition group-hover:border-[#026381] group-hover:bg-[#026381] group-hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0289ad]"
              >
                <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="bg-[#eaf5f7] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            label="Why SaveDost"
            title="Designed for Secure and Effortless Payments"
            centered
          />
        </Reveal>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-11 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map(({ icon: Icon, title, text }) => (
            <motion.article
              variants={item}
              key={title}
              className="flex gap-4 rounded-2xl bg-white/80 p-5 ring-1 ring-[#d4e6e9]"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#026381] text-white">
                <Icon size={19} />
              </span>
              <div>
                <h3 className="font-extrabold text-[#0C3D4C]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-[28px] bg-[#0C3D4C] px-6 py-10 text-white sm:px-10 lg:grid-cols-[1.05fr_.95fr] lg:px-14 lg:py-14">
        <Reveal>
          <SectionHeading
            label="Security First"
            title="Your Trust Is at the Centre of Every Transaction"
            light
          />
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">
            SaveDost follows secure technology practices to provide a reliable digital payment
            experience. Our platform is designed to protect sensitive information and maintain
            transparency throughout the transaction journey.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {securityPoints.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/6 p-3"
              >
                <Icon size={18} className="text-[#8fd253]" />
                <span className="text-sm font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="mx-auto grid h-44 w-44 place-items-center rounded-full border border-white/15 bg-white/7">
            <ShieldCheck size={82} strokeWidth={1.4} className="text-[#8fd253]" />
          </div>
          <div className="relative -mt-5 rounded-2xl bg-white p-5 text-[#0C3D4C] shadow-[0_20px_45px_rgba(0,0,0,.25)]">
            <div className="flex items-center gap-2 text-sm font-extrabold">
              <CheckCircle2 size={20} className="text-[#65b828]" /> Payment Successful
            </div>
            <div className="mt-4 flex items-end justify-between border-t border-slate-100 pt-4">
              <div>
                <p className="text-xs text-slate-400">Electricity Bill</p>
                <p className="mt-1 text-2xl font-extrabold">₹2,450</p>
              </div>
              <div className="text-right">
                <LockKeyhole size={16} className="ml-auto text-[#026381]" />
                <p className="mt-1 text-[10px] text-slate-400">Secured by SaveDost</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="bg-[#f7fafb] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading label="Our Values" title="Principles That Guide SaveDost" centered />
        </Reveal>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map(({ number, icon: Icon, title, text }) => (
            <motion.article
              variants={item}
              key={title}
              className="relative overflow-hidden rounded-2xl border border-[#dcebed] bg-white p-6"
            >
              <span className="absolute right-4 top-2 text-5xl font-black text-[#edf5f6]">
                {number}
              </span>
              <Icon size={22} className="relative text-[#0289ad]" />
              <h3 className="relative mt-6 text-lg font-extrabold text-[#0C3D4C]">{title}</h3>
              <p className="relative mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading label="Our Journey" title="Building SaveDost Step by Step" centered />
        </Reveal>
        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-12 grid gap-0 lg:grid-cols-4"
        >
          <div
            className="absolute left-4 top-0 h-full w-px bg-[#b8dce3] lg:left-[12.5%] lg:top-4 lg:h-px lg:w-3/4"
            aria-hidden="true"
          />
          {journey.map(({ title, text }, index) => (
            <motion.li
              variants={item}
              key={title}
              className="relative grid grid-cols-[34px_1fr] gap-4 pb-9 last:pb-0 lg:block lg:px-4 lg:pb-0 lg:text-center"
            >
              <span className="relative z-10 grid h-8 w-8 place-items-center rounded-full border-4 border-white bg-[#026381] text-[10px] font-bold text-white shadow lg:mx-auto">
                {index + 1}
              </span>
              <div className="lg:mt-5">
                <h3 className="font-extrabold text-[#0C3D4C]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="px-5 pb-20 sm:px-8 lg:pb-28">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[28px] bg-[#153f67] px-7 py-11 text-white sm:px-11 lg:px-14 lg:py-14">
          <div className="absolute -right-14 -top-14 h-56 w-56 rounded-full border-[35px] border-[#86c64c]/15" />
          <div className="absolute bottom-5 right-[28%] hidden rotate-6 rounded-xl border border-white/10 bg-white/7 p-4 lg:block">
            <CreditCard size={26} className="text-[#91d05a]" />
          </div>
          <div className="relative max-w-3xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Ready to Experience Simpler Digital Payments?
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Explore SaveDost and manage your everyday financial services from one secure platform.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-[#80bd48] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#6ba638] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Get Started <ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <main className="overflow-hidden bg-white">
      <HeroSection />
      <StatisticsSection />
      <StorySection />
      <LeadershipSection />
      <MissionVisionSection />
      <ServicesSection />
      <BenefitsSection />
      <SecuritySection />
      <ValuesSection />
      <JourneySection />
      <CtaSection />
      <FAQ
        faqs={faqs}
        subheading="Clear answers to common questions about SaveDost and supported payment services."
      />
    </main>
  );
}
