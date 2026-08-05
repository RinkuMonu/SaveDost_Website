"use client";
import React from "react";
import ServiceBanner from "../../../components/ServiceBanner";
import Image from "next/image";
import ServiceGrid from "../../../components/ServiceGrid";
import { Droplets, Lightbulb } from "lucide-react";
import BillManagement from "../../../components/BillManagement";
import Link from "next/link";
import FAQ from "../../../components/Bike Insurance/FAQ";

function page() {
  const data = {
    id: 1,
    subheading: "Ek Click me hoga Bhugtan vo bhi Bina kisi Uljhan ",
    heading: "Ek System, Har Bill Ka Solution",
    description:
      "Make all your payments hassle-free using the integrated bill payment system in India. Safe, quick, and hassle-free",
    bgImage: "/image/services-bbps-bg.png",
    centerImage: "/image/service-img.png",
  };
  const faqs = [
    {
      question: "What bills can I pay here",
      answer:
        "You can pay for electricity, water, gas, broadband, DTH, mobile, credit cards, loans, and more.",
    },
    {
      question: "Is it safe to make payments?",
      answer: "Yes. All transactions are secured with encrypted payment gateways.",
    },
    {
      question: "How fast is the payment confirmed?",
      answer: "Most payments are instant, and you get real-time updates.",
    },
    {
      question: "Can I pay bills anytime?",
      answer: "Yes, our service is available 24/7 for your convenience.",
    },
    {
      question: "Can I schedule recurring payments?",
      answer: "Absolutely! Set up automatic payments for regular bills to avoid late fees.",
    },
    {
      question: "What if my payment fails?",
      answer:
        "Failed payments are refunded automatically, or our support team can assist you quickly.",
    },
  ];
  return (
    <>
      <div
        className=" bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${data?.bgImage})` }}
      >
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-0 px-4 lg:px-0">
          <div className=" py-10 lg:py-16 rounded-2xl w-full md:pl-10">
            <div className=" z-10">
              <p className="text-sm font-bold uppercase tracking-widest text-[#0C3D4C]">
                {data?.subheading}
              </p>
              <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#0C3D4C] leading-tight">
                {data.heading}
              </h2>
              <p className="mt-4 my-8 text-base text-[#5D5D5D] max-w-md">{data.description}</p>
              <Link href="/signup" className="pan-hero-button">
                Register now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EEF2F5] relative py-10 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 lg:px-0 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="relative z-10 ">
              <Image
                src="/image/bharat-bill-pay-logo.png"
                alt="logo-bbps"
                width={400}
                height={400}
              />
            </div>
            <div className="lg:block relative md:h-[200px] mt-10 md:mt-0 ">
              <div className="absolute -top-96 left-0 rounded-xl w-[350px] md:w-[400px] lg:w-[600px] h-[604px] z-20 hidden md:block ">
                <Image
                  src="/image/service-img.png"
                  alt="center image"
                  fill
                  className="  top-0 left-0 "
                />
              </div>
              {/* <div className="bg-[#E6F6FF] border-8 border-white rounded-xl absolute -top-28 right-10 md:right-8 w-[220px] h-[240px] z-20 shadow-md overflow-visible">
                                <Image
                                    src="/bbps/bs3.png"
                                    alt="logo-bbps"
                                    fill
                                    className="object-cover right-0"
                                    style={{ objectPosition: 'right' }}
                                />
                            </div> */}
            </div>
          </div>
        </div>
      </div>

      <ServiceGrid />
      <BillManagement />
      <FAQ
        faqs={faqs}
        subheading="Find answers to common questions about utility bill payments, transaction status and support."
      />
    </>
  );
}

export default page;
