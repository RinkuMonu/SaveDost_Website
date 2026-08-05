import Image from "next/image";
import Link from "next/link";
import React from "react";
import WhatIsBBPS from "../../../components/bbps/WhatIsBBPS";
import HowItWorks from "../../../components/bbps/HowItWorks";
import BBPSFeatures from "../../../components/bbps/BBPSFeatures";
import FAQ from "../../../components/Bike Insurance/FAQ";
import AllServices from "../../../components/bbps/AllServices";
import ContactBanner from "../../../components/ContactBanner";

function page() {
  const logos = [
    { src: "/bank/instantpay.png", width: 120, height: 60 },
    { src: "/bank/nsdl.png", width: 150, height: 70 },
    { src: "/bank/paysprint.png", width: 100, height: 50 },
    // { src: "/bank/irctc.png", width: 70, height: 60 },
    { src: "/bank/ISERVEU-MAIN-LOGO.png", width: 150, height: 70 },
  ];

  const data = {
    id: 1,
    subheading: "BHARAT BILL PAYMENT SYSTEM",
    heading: "Pay Everyday Bills with Greater Convenience",
    description:
      "Explore a unified bill-payment experience for eligible utility and recurring bills through supported payment channels.",
    bgImage: "/bbps/bbpsbg.png",
    centerImage: "/bbps/billpayment.png",
  };

  const faqs = [
    {
      question: "What is BBPS?",
      answer:
        "BBPS is a secure bill payment system by NPCI that lets you pay all types of bills through banks, apps, and agent outlets.",
    },
    {
      question: "How do I know if my biller is available?",
      answer:
        "Supported billers appear in the list while selecting a biller. Most utilities, telecom, DTH, broadband, and loan billers are already covered.",
    },
    {
      question: "Is paying bills online safe?",
      answer:
        "Yes. BBPS uses NPCI-backed secure systems and provides instant digital receipts for every payment.",
    },
    {
      question: "What if my payment fails?",
      answer:
        "You’ll see the payment status instantly. If needed, refunds or reversals are processed as per BBPS guidelines.",
    },
    {
      question: "How do I get a receipt?",
      answer:
        "A digital receipt with a unique transaction ID is generated instantly and can be viewed anytime in payment history.",
    },
    {
      question: "Where can I use BBPS?",
      answer:
        "You can pay bills via BBPS using banks, authorized agents, and popular payment apps.",
    },
  ];
  return (
    <>
      <div className="relative flex flex-col md:flex-row items-center justify-between ">
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url(${data?.bgImage})` }}
        ></div>
        <div className=" z-10 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full space-y-6 md:space-y-0 items-center">
            <div className="w-full max-w-2xl overflow-hidden rounded-2xl px-4 py-8 sm:px-10 sm:py-10 lg:py-16">
              <div className=" z-10">
                <p className="text-sm font-bold uppercase tracking-widest text-[#0C3D4C]">
                  {data?.subheading}
                </p>
                <h2 className="mt-2 text-3xl font-bold leading-tight text-[#0C3D4C] sm:text-4xl md:text-5xl">
                  {data.heading}
                </h2>
                <p className="mt-4 my-8 text-base text-[#5D5D5D] max-w-md">{data.description}</p>
                <Link href="/service-payment/electricity" className="pan-hero-button">
                  Pay a Bill
                </Link>
              </div>
            </div>

            <div className="w-full  flex justify-center items-end">
              {data.centerImage && (
                <Image
                  src={data.centerImage}
                  alt="center image"
                  width={380}
                  height={500}
                  className="md:pt-4 lg:pt-16 w-auto h-auto max-h-[70vh] object-contain z-20"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFE9DE] relative pt-20 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 lg:px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="relative z-10 ">
              <Image src="/bbps/bbps.png" alt="logo-bbps" width={400} height={400} />
            </div>
            <div className="hidden md:block relative h-[200px] mt-10 md:mt-0 ">
              <div className="bg-[#E6F6FF] border-8 border-white absolute -top-44  left-10 md:right-1/2 rounded-xl w-[220px] h-[240px] z-20 shadow-lg overflow-visible">
                <Image
                  src="/bbps/bbps2.png"
                  alt="logo-bbps"
                  fill
                  className="object-cover scale-105 top-0 left-0"
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div className="bg-[#E6F6FF] border-8 border-white rounded-xl absolute -top-28 right-10 md:right-8 w-[220px] h-[240px] z-20 shadow-md overflow-visible">
                <Image
                  src="/bbps/bbps3.png"
                  alt="logo-bbps"
                  fill
                  className="object-cover right-0"
                  style={{ objectPosition: "right" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatIsBBPS />
      <AllServices />
      <div className="w-full bg-[#f3f9fb]">
        <FAQ
          faqs={faqs}
          subheading="Find answers to common questions about BBPS bill payments and support."
        />
      </div>
      <ContactBanner />
    </>
  );
}

export default page;
