"use client";

import React from "react";
import EMICal2 from "../../../components/EMICal2";
import ToolscardsContent from "../../../components/Toolscards";
import ServiceBanner from "../../../components/ServiceBanner";
export default function LoanEMIPage() {
  // Loan-specific content rendered through the same hero used on the Credit Card page.
  const heroData = {
    subheading: "Loan EMI Calculator",
    heading: "Plan Your Loan With a Clear Monthly EMI",
    description:
      "Enter the loan amount, interest rate, and tenure to estimate your monthly EMI and understand the total repayment before making a decision.",
    bgImage: "/loan/loanbg.png",
    centerImage: "/image/loan-img.png",
    buttonText: "Calculate EMI",
    buttonHref: "#emi-calculator",
  };

  const data = [
    {
      title: "Accurate EMI Calculation",
      description:
        "Get precise EMI results based on loan amount, interest rate, and tenure for better financial planning.",
      image: "/images/money-transfer.jpg",
    },
    {
      title: "Instant EMI Results",
      description:
        "Calculate your monthly loan EMI instantly and plan your budget without confusion.",
      image: "/images/recharge-bills.jpg",
    },
    {
      title: "Smart Loan Planning",
      description:
        "Compare different loan options and choose the best EMI plan as per your financial needs.",
      image: "/images/verification.jpg",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-[#f7fbfc]">
      {/* CREDIT-CARD-STYLE LOAN HERO: shared visual structure with loan-specific content. */}
      <ServiceBanner data={heroData} />

      {/* REDESIGNED CALCULATOR AREA: existing EMI state and calculations remain intact. */}
      <section id="emi-calculator" className="scroll-mt-24 bg-white px-4 sm:px-6 lg:px-12">
        <EMICal2 />
      </section>

      {/* REDESIGNED BENEFIT CARDS: content is unchanged, only presentation is updated. */}
      <section className="bg-[#eff8fa] px-4 py-14 sm:px-6 lg:px-12 lg:py-20">
        <ToolscardsContent cardsData={data} />
      </section>
    </main>
  );
}
