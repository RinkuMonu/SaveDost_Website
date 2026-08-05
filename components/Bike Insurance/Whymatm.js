"use client";
import React from "react";
import { ShieldCheck, IndianRupee, Headphones, Zap, Users, LineChart } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "RBI & NPCI Compliant",
    desc: "SaveDost Micro ATM services follow strict RBI and NPCI regulations, guaranteeing safe, secure, and fully compliant transactions.",
  },
  {
    icon: IndianRupee,
    title: "Attractive Commission Structure",
    desc: "Earn generous commissions on every cash withdrawal, balance check, and mini statement transaction.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable Transactions",
    desc: "Experience instant transactions with high success rates and minimal downtime across all banks.",
  },
  {
    icon: Headphones,
    title: "24×7 Technical Support",
    desc: "Our dedicated team is available around the clock to assist with any transaction or device-related issues.",
  },
  {
    icon: Users,
    title: "Wide Bank Coverage",
    desc: "Serve customers from multiple banks using a single Micro ATM device with secure Aadhaar-based authentication.",
  },
  {
    icon: LineChart,
    title: "Business Growth Opportunity",
    desc: "Boost footfall and expand your retail business by providing essential banking services in your area.",
  },
];

export default function WhyMicroATM() {
  return (
    <section className="bg-[#F5FAFB] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C3D4C]">
            Why Choose SaveDost for Micro ATM?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Empower your retail business with secure, profitable, and reliable Micro ATM services
            backed by SaveDost.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#EAF4F6] text-[#0C3D4C] group-hover:bg-[#0C3D4C] group-hover:text-white transition">
                <item.icon size={26} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-800">{item.title}</h3>

              <p className="mt-3 text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
