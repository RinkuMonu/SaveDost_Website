"use client";

import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import {
  ArrowRightLeft,
  Fingerprint,
  CreditCard,
  ScrollText,
  Smartphone,
  Satellite,
  Bolt,
  Flame,
  FilePlus,
  ShieldCheck,
  Landmark,
  Banknote,
  Building2,
  Home,
  Wallet,
  IdCard,
  CalendarDays,
  ArrowRight,
  Car,
  Zap,
} from "lucide-react";
import Link from "next/link";

const serviceIcons = {
  // aeps: <Fingerprint className="w-5 h-5" />,
  microAtm: <CreditCard className="w-5 h-5" />,
  miniStatement: <ScrollText className="w-5 h-5" />,
  mobileRecharge: <Smartphone className="w-5 h-5" />,
  xpress: <Zap className="w-5 h-5" />,

  // Loan-related
  personalloan: <Wallet className="w-5 h-5" />,
  businessloan: <Banknote className="w-5 h-5" />,
  carloan: <Car className="w-5 h-5" />,
  homeloan: <Home className="w-5 h-5" />,
  constructionloan: <Building2 className="w-5 h-5" />,
  mortgageloan: <Landmark className="w-5 h-5" />,

  // Insurance
  BI: <ShieldCheck className="w-5 h-5" />,
  PCI: <ShieldCheck className="w-5 h-5" />,
  TCI: <ShieldCheck className="w-5 h-5" />,
  CVI: <ShieldCheck className="w-5 h-5" />,

  // Credit Card (generalized for all cards)
  SCB1: <IdCard className="w-5 h-5" />,
  SCB2: <IdCard className="w-5 h-5" />,
  Axis1: <IdCard className="w-5 h-5" />,
  Axis2: <IdCard className="w-5 h-5" />,
  Axis3: <IdCard className="w-5 h-5" />,
  Axis4: <IdCard className="w-5 h-5" />,
  IDFC1: <IdCard className="w-5 h-5" />,
  IDFC2: <IdCard className="w-5 h-5" />,
  AU1: <IdCard className="w-5 h-5" />,
  SBI1: <IdCard className="w-5 h-5" />,
  HSBC1: <IdCard className="w-5 h-5" />,
  RBL1: <IdCard className="w-5 h-5" />,
  Indus1: <IdCard className="w-5 h-5" />,
  Indus2: <IdCard className="w-5 h-5" />,
  Indus3: <IdCard className="w-5 h-5" />,
  HDFC1: <IdCard className="w-5 h-5" />,
  HDFC2: <IdCard className="w-5 h-5" />,
  HDFC3: <IdCard className="w-5 h-5" />,
  BOB1: <IdCard className="w-5 h-5" />,
  BOB2: <IdCard className="w-5 h-5" />,
  BOB3: <IdCard className="w-5 h-5" />,
  Kotak1: <IdCard className="w-5 h-5" />,
  Kotak2: <IdCard className="w-5 h-5" />,
  Amex1: <IdCard className="w-5 h-5" />,
  Amex2: <IdCard className="w-5 h-5" />,
  Amex3: <IdCard className="w-5 h-5" />,
  Amex4: <IdCard className="w-5 h-5" />,
};

// Service data structure
const serviceGroups = [
  {
    title: "Banking Services",
    items: [
      // { label: "Aadhaar ATM - AePS", key: "aeps", avgT: 5000 },
      { label: "Micro ATM", key: "microAtm", avgT: 5000 },
      // { label: "Mini Statement", key: "miniStatement", avgT: 5000 },
      // { label: "Money Transfer X-press DMT", key: "xpress", avgT: 250000 },
    ],
  },
  {
    title: "Recharge Services",
    items: [{ label: "Mobile Recharge", key: "mobileRecharge", avgT: 500 }],
  },

  // {
  //   title: "Insurance",
  //
  //   items: [
  //     { label: "Bike Insurance", key: "BI", avgT: 5000 },
  //     { label: "Private Car Insurance", key: "PCI", avgT: 5000 },
  //     { label: "Taxi Car Insurance", key: "TCI", avgT: 5000 },
  //     { label: "Commercial Vehicle Insurance", key: "CVI", avgT: 5000 },

  //   ],
  // },
  {
    title: "Loan",
    items: [
      { label: "Personal Loan", key: "personalloan", avgT: 1000000 },
      { label: "Business Loan", key: "businessloan", avgT: 1000000 },
      { label: "Car Loan", key: "carloan", avgT: 1000000 },
      { label: "Home Loan", key: "homeloan", avgT: 1000000 },
      { label: "Construction Loan", key: "constructionloan", avgT: 1000000 },
      { label: "Mortgage Loan", key: "mortgageloan", avgT: 1000000 },
    ],
  },
  {
    title: "Credit Card",
    items: [
      {
        label: "SCB Credit Cards - Platinum Rewards, Simply Cash, Rewards",
        key: "SCB1",
        avgT: 2700,
      },
      { label: "SCB Credit Cards - EaseMyTrip", key: "SCB2", avgT: 3700 },

      { label: "Axis Bank Credit Cards - True Affluent ", key: "Axis1", avgT: 2000 },
      { label: "Axis Bank Credit Cards - Emerging Affluent", key: "Axis2", avgT: 1500 },
      { label: "Axis Bank Credit Cards - Retail Card ", key: "Axis3", avgT: 1300 },
      { label: "Axis Bank Credit Cards - Lifetime Free ", key: "Axis4", avgT: 900 },

      { label: "IDFC First Bank Credit Cards", key: "IDFC1", avgT: 950 },
      { label: "IDFC First Bank WOW Secured", key: "IDFC2", avgT: 300 },

      { label: "AU Bank", key: "AU1", avgT: 1200 },
      { label: "SBI Credit Cards", key: "SBI1", avgT: 1750 },
      { label: "HSBC Credit Cards", key: "HSBC1", avgT: 2500 },
      { label: "Bajaj RBL Credit Card", key: "RBL1", avgT: 1300 },

      { label: "IndusInd Bank - Platinum Aura", key: "Indus1", avgT: 1200 },
      { label: "IndusInd Bank - Signature Legend", key: "Indus2", avgT: 1400 },
      { label: "IndusInd Bank - Nexxt / Eazy Diner", key: "Indus3", avgT: 1900 },

      { label: "HDFC Bank Credit Cards - Entry Level", key: "HDFC1", avgT: 1600 },
      { label: "HDFC Bank Credit Cards - Premium ", key: "HDFC2", avgT: 2100 },
      { label: "HDFC Bank Credit Cards - Super Premium ", key: "HDFC3", avgT: 2800 },

      {
        label: "Bank of Baroda Credit Cards - Easy, Select, Premier, Defence, Professional",
        key: "BOB1",
        avgT: 550,
      },
      { label: "Bank of Baroda Credit Cards - Cobrands", key: "BOB2", avgT: 750 },
      { label: "Bank of Baroda Credit Cards - Eterna", key: "BOB3", avgT: 1500 },

      {
        label: "Kotak Bank Credit Cards - Lifetime Free (League Platinum)",
        key: "Kotak1",
        avgT: 1100,
      },
      { label: "Kotak Bank Credit Cards - IOCL RuPay", key: "Kotak2", avgT: 1200 },

      { label: "Amex Bank Credit Cards - SmartEarn", key: "Amex1", avgT: 1100 },
      { label: "Amex Bank Credit Cards - Membership Rewards (MRCC)", key: "Amex2", avgT: 2100 },
      { label: "Amex Bank Credit Cards - Platinum Travel", key: "Amex3", avgT: 2800 },
      { label: "Amex Bank Credit Cards - Platinum RCP", key: "Amex4", avgT: 3700 },
    ],
  },
];
// Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const rowListVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const cardsData = [
  {
    title: "Accurate Income Estimation",
    description:
      "Get a clear estimate of your expected earnings based on your transactions and services.",
    image: "/images/money-transfer.jpg",
  },
  {
    title: "Real-Time Calculation",
    description: "Instantly calculate your income and plan your business growth more effectively..",
    image: "/images/recharge-bills.jpg",
  },
  {
    title: "Easy & Smart Planning",
    description:
      "Track your potential earnings and make better financial decisions with smart calculations.",
    image: "/images/verification.jpg",
  },
];

export default function IncomeCalculator() {
  const [selectedTab, setSelectedTab] = useState("retailer");

  const [data, setData] = useState({
    // aeps: 1,
    microAtm: 1,
    // miniStatement: 1,
    mobileRecharge: 1,
    xpress: 1,
    personalloan: 1,
    businessloan: 1,
    carloan: 1,
    homeloan: 1,
    constructionloan: 1,
    mortgageloan: 1,
    BI: 1,
    PCI: 1,
    TCI: 1,
    CVI: 1,
    SCB1: 1,
    SCB2: 1,
    Axis1: 1,
    Axis2: 1,
    Axis3: 1,
    Axis4: 1,
    IDFC1: 1,
    IDFC2: 1,
    AU1: 1,
    SBI1: 1,
    HSBC1: 1,
    RBL1: 1,
    Indus1: 1,
    Indus2: 1,
    Indus3: 1,
    HDFC1: 1,
    HDFC2: 1,
    HDFC3: 1,
    BOB1: 1,
    BOB2: 1,
    BOB3: 1,
    Kotak1: 1,
    Kotak2: 1,
    Amex1: 1,
    Amex2: 1,
    Amex3: 1,
    Amex4: 1,
  });

  const retailerRates = {
    // aeps: 11,
    microAtm: 11,
    // miniStatement: 2,
    mobileRecharge: 20,
    xpress: 125,
    personalloan: 13500,
    businessloan: 9000,
    carloan: 18000,
    homeloan: 8500,
    constructionloan: 8500,
    mortgageloan: 8500,
    BI: 1,
    PCI: 1,
    TCI: 1,
    CVI: 1,
    SCB1: 2700,
    SCB2: 3700,
    Axis1: 2000,
    Axis2: 1500,
    Axis3: 1300,
    Axis4: 900,
    IDFC1: 950,
    IDFC2: 300,
    AU1: 1200,
    SBI1: 1750,
    HSBC1: 2500,
    RBL1: 1300,
    Indus1: 1200,
    Indus2: 1400,
    Indus3: 1900,
    HDFC1: 1600,
    HDFC2: 2100,
    HDFC3: 2800,
    BOB1: 550,
    BOB2: 750,
    BOB3: 1500,
    Kotak1: 1100,
    Kotak2: 1200,
    Amex1: 1100,
    Amex2: 2100,
    Amex3: 2800,
    Amex4: 3700,
  };

  const distributorRates = {
    // aeps: 2,
    microAtm: 2,
    // miniStatement: 3,
    mobileRecharge: 1,
    xpress: 12.5,
    personalloan: 13500,
    businessloan: 9000,
    carloan: 18000,
    homeloan: 8500,
    constructionloan: 8500,
    mortgageloan: 8500,
    BI: 1,
    PCI: 1,
    TCI: 1,
    CVI: 1,
    SCB1: 2200,
    SCB2: 3000,
    Axis1: 1600,
    Axis2: 1100,
    Axis3: 900,
    Axis4: 600,
    IDFC1: 650,
    IDFC2: 220,
    AU1: 900,
    SBI1: 1350,
    HSBC1: 2000,
    RBL1: 900,
    Indus1: 800,
    Indus2: 1000,
    Indus3: 1500,
    HDFC1: 1250,
    HDFC2: 1700,
    HDFC3: 2400,
    BOB1: 300,
    BOB2: 500,
    BOB3: 1100,
    Kotak1: 800,
    Kotak2: 900,
    Amex1: 800,
    Amex2: 1700,
    Amex3: 2400,
    Amex4: 3000,
  };

  const incomeRates = selectedTab === "retailer" ? retailerRates : distributorRates;

  const dailyIncome = Object.keys(data).reduce((sum, key) => sum + data[key] * incomeRates[key], 0);
  const monthlyIncome = dailyIncome * 30;

  const handleChange = (key, value) => {
    const numValue = Math.max(0, Number(value));
    setData((prev) => ({ ...prev, [key]: numValue }));
  };

  return (
    <main className="min-h-screen bg-[#f5f9fb]">
      {/* UI REDESIGN: Business-focused hero; calculator logic is unchanged. */}
      <section className="overflow-hidden bg-[#eaf6f9] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_.92fr]">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#b9e1e9] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#026381] shadow-sm">
              <Wallet size={16} /> Smart earning estimator
            </span>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#0C3D4C] sm:text-4xl lg:text-[52px] lg:leading-[1.1]">
              See how much your business <span className="text-[#0289ad]">can earn.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 lg:mx-0 lg:text-lg">
              Estimate daily and monthly income across SaveDost services. Adjust transaction volumes
              and plan your growth with a clearer earning picture.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
              {["Instant estimates", "Multiple services", "Retailer & distributor views"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <ShieldCheck size={17} className="text-[#00a8e8]" /> {item}
                  </span>
                )
              )}
            </div>
            <a href="#income-calculator" className="pan-hero-button mt-8 gap-2">
              Calculate My Income <ArrowRight size={18} />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-[#8bd7e7]/30" />
            <div className="absolute -right-8 bottom-5 h-36 w-36 rounded-full border-[24px] border-white/60" />
            <div className="relative rounded-[30px] border border-white bg-white/75 p-5 shadow-[0_22px_55px_rgba(12,61,76,0.12)] backdrop-blur-sm sm:p-7">
              <div className="relative h-[260px] sm:h-[330px]">
                <Image
                  src="/image/income-calc-img.png"
                  alt="SaveDost income calculator overview"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-[#d9edf2] bg-white px-4 py-3 shadow-lg sm:bottom-7 sm:left-7">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#e8f6f9] text-[#026381]">
                  <Bolt size={20} />
                </span>
                <span>
                  <span className="block text-xs font-extrabold text-[#0C3D4C]">
                    Live calculation
                  </span>
                  <span className="text-[11px] text-slate-500">Updates with every entry</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI REDESIGN: Existing role selection and income calculations are preserved. */}
      <section id="income-calculator" className="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            className="max-w-3xl text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Estimate your <span className="text-[#0289ad]">earning potential</span>
            <p className="mt-3 max-w-2xl text-sm font-normal leading-6 text-slate-600">
              Select your partner type and enter expected daily transactions. Your projected
              earnings update automatically.
            </p>
          </motion.h2>
          {/* UI REDESIGN: Segmented selector; existing onClick handlers are unchanged. */}
          <div className="mt-7 inline-flex rounded-xl border border-[#cfe5eb] bg-white p-1.5 shadow-sm">
            <button
              onClick={() => setSelectedTab("retailer")}
              className={`rounded-lg px-6 py-2.5 text-sm font-bold transition-all ${
                selectedTab === "retailer"
                  ? "bg-[#026381] text-white shadow-sm"
                  : "text-[#026381] hover:bg-[#edf8fa]"
              }`}
            >
              Retailer
            </button>
            <button
              onClick={() => setSelectedTab("distributor")}
              className={`rounded-lg px-6 py-2.5 text-sm font-bold transition-all ${
                selectedTab === "distributor"
                  ? "bg-[#026381] text-white shadow-sm"
                  : "text-[#026381] hover:bg-[#edf8fa]"
              }`}
            >
              Distributor
            </button>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-5">
            {/* LEFT SECTION */}
            <motion.div
              className="space-y-6 lg:col-span-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {serviceGroups.map((group) => (
                <motion.div
                  key={group.title}
                  variants={itemVariants}
                  className="overflow-hidden rounded-[22px] border border-[#d9edf2] bg-white shadow-[0_12px_32px_rgba(12,61,76,0.06)]"
                >
                  <div className="flex items-center gap-3 border-b border-[#e4f0f3] px-5 py-4 sm:px-6">
                    <span className="h-6 w-1 rounded-full bg-[#00a8e8]" />
                    <h3 className="text-lg font-extrabold text-[#0C3D4C]">{group.title}</h3>
                    {/* <p className="text-sm text-gray-700 py-1">
                    {group.desc}
                  </p> */}
                  </div>

                  {/* Table Version */}
                  <div className="overflow-x-auto w-full">
                    <table className="w-full min-w-[620px] border-collapse text-sm">
                      <thead className="border-b border-[#e4f0f3] bg-[#f3f9fa] text-[11px] uppercase tracking-wider text-slate-500">
                        <tr>
                          <th className="px-6 py-3 text-left font-semibold">Service</th>
                          <th className="px-6 py-3 text-center font-semibold">
                            Daily Transactions
                          </th>
                          <th className="px-6 py-3 text-right font-semibold">Daily Income</th>
                        </tr>
                      </thead>
                      <motion.tbody
                        variants={rowListVariants}
                        initial="hidden"
                        animate="visible"
                        className="divide-y divide-slate-100"
                      >
                        {group.items.map((item) => (
                          <motion.tr
                            key={item.key}
                            variants={rowVariants}
                            className="border-b-0 transition-colors hover:bg-[#f8fcfd]"
                          >
                            <td className="px-6 py-3">
                              <div className="flex items-center gap-3">
                                {/* --- COLOR CHANGE HERE --- */}
                                <span className="rounded-xl bg-[#e8f6f9] p-2.5 text-[#026381]">
                                  {serviceIcons[item.key]}
                                </span>
                                <p className="font-medium text-slate-700 text-sm md:text-base">
                                  {item.label}
                                  <br />
                                  {group.title === "Credit Card" ? (
                                    ""
                                  ) : (
                                    <span className="text-slate-500 text-sm">
                                      Avg transaction of ₹{item.avgT.toLocaleString("en-IN")}
                                    </span>
                                  )}
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <input
                                type="number"
                                min="0"
                                value={data[item.key]}
                                onChange={(e) => {
                                  const value = e.target.value.slice(0, 3); // limit to 3 digits
                                  handleChange(item.key, value);
                                }}
                                className="w-20 rounded-lg border border-[#cfe5eb] bg-[#fbfdfe] py-2 text-center text-sm font-semibold text-slate-700 outline-none transition-all focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/15"
                              />
                            </td>
                            <td className="px-6 py-4 text-right text-lg font-extrabold text-[#026381]">
                              ₹{(data[item.key] * incomeRates[item.key]).toLocaleString()}
                            </td>
                          </motion.tr>
                        ))}
                      </motion.tbody>
                    </table>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* RIGHT SECTION */}
            <motion.div
              className="sticky top-24 h-fit rounded-[24px] border border-[#cce7ed] bg-white p-6 shadow-[0_18px_45px_rgba(12,61,76,0.1)] md:p-8 lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-5 text-center">
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0289ad]">
                    Estimated earnings
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-[#0C3D4C]">
                    Your income summary
                  </h3>
                </div>
                {/* Per Day Income */}
                <div className="flex items-center justify-between rounded-xl border border-[#cfe8ed] bg-[#edf8fa] px-5 py-4">
                  <div className="flex items-center gap-3 font-semibold text-[#026381]">
                    <CalendarDays className="h-6 w-6" />
                    <span>Per Day Income</span>
                  </div>
                  <span className="text-2xl font-extrabold text-[#026381]">
                    ₹{dailyIncome.toLocaleString()}
                  </span>
                </div>

                {/* Monthly Income */}
                <div>
                  <p className="mb-1 text-sm text-slate-500">Estimated Monthly Income</p>
                  <h3 className="text-4xl font-extrabold tracking-tight text-[#0C3D4C] md:text-5xl">
                    ₹{monthlyIncome.toLocaleString("en-IN")}
                  </h3>
                </div>

                {/* Wallet Icon */}
                <div className="flex justify-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-[#e8f6f9]">
                    <Wallet size={44} strokeWidth={1.4} className="text-[#026381]" />
                  </span>
                </div>

                {/* CTA Button */}
                <Link
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#026381] py-3.5 font-bold text-white shadow-[0_9px_20px_rgba(2,99,129,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0C3D4C]"
                  href="/signup"
                >
                  Become a Partner
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UI REDESIGN: Benefit cards only; calculator data and rates are untouched. */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0289ad]">
              Plan with confidence
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0C3D4C] sm:text-3xl">
              Turn daily activity into a growth plan
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {cardsData.map((card, index) => {
              const Icon = [ArrowRightLeft, Bolt, FilePlus][index];
              return (
                <article
                  key={card.title}
                  className="rounded-2xl border border-[#dceef2] bg-[#f8fbfc] p-6 transition hover:-translate-y-1 hover:border-[#afdce5] hover:shadow-[0_14px_32px_rgba(12,61,76,0.08)]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#e4f5f8] text-[#026381]">
                    <Icon size={23} />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold text-[#0C3D4C]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
