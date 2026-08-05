"use client";
import React from "react";
import Image from "next/image";
import FastagBannerSection from "../../../components/FastagBanner";
import WhySaveDostFastag from "../../../components/WhyFastag";
import Process from "../../../components/Bike Insurance/Process";
import { Shield, Clock, DollarSign, FileText, Headphones, Award } from "lucide-react";
import { Search, CreditCard, CheckCircle } from "lucide-react";
import { BadgeCheck, Wallet, FileCheck } from "lucide-react";

function page() {
  const fastagData = {
    subheading: "What is Fastag Recharge",
    heading: "Instant FASTag Top-Up, Hassle-Free!",
    description:
      "With FASTag recharge, you can quickly add balance to your FASTag and enjoy seamless, cashless toll payments across national highways. Easily recharge online, track your transactions in real-time, and travel without stopping at toll plazas. FASTag makes your journeys smooth, convenient, and completely stress-free.",
  };

  const processdata = {
    title1: "Simple and Fast Process",
    title2: "Recharge FASTag in 4 Easy Steps",
    desc: "Quick, secure, and hassle-free top up your FASTag and stay toll-ready in minutes.",
    steps: [
      {
        number: "1",
        icon: FileText,
        title: "Enter Vehicle Number Details",
        description:
          "Provide your vehicle number to start the FASTag recharge. Make sure the details are accurate for a smooth process.",
      },
      {
        number: "2",
        icon: Search,
        title: "Add Banking Details",
        description:
          " Enter your preferred payment method securely. We support multiple payment options for your convenience.",
      },
      {
        number: "3",
        icon: CreditCard,
        title: "Fetch the Bill",
        description:
          "Get a real-time summary of your recharge amount and details before making the payment.",
      },
      {
        number: "4",
        icon: CheckCircle,
        title: "Make the Payment",
        description:
          "Complete your FASTag recharge instantly. Once done, you’ll receive confirmation, and your FASTag is ready to use across all toll plazas.",
      },
    ],
  };
  return (
    <>
      <FastagBannerSection />
      <section className="bg-white py-4 md:pt-6 md:pb-16 my-10">
        <div className="bg-blue-50 shadow-lg rounded-lg max-w-6xl mx-auto px-8 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left Column */}
          <div className="mt-6 md:mt-0 relative">
            <Image
              src="/aeps/matm3d.png"
              alt="Example image"
              width={400}
              height={400}
              className="mx-auto object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="md:pl-16 py-10">
            <p className="text-base font-semibold text-[#0C3D4C] tracking-wider">
              {fastagData?.subheading}
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0C3D4C]">
              {fastagData.heading}
            </h2>
            <p className="mt-6 text-[#5D5D5D] leading-relaxed">{fastagData.description}</p>
          </div>
        </div>
      </section>
      <Process processdata={processdata} />
      <WhySaveDostFastag />
    </>
  );
}

export default page;
