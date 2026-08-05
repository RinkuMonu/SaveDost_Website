"use client";
import React from "react";
import ServiceBanner from "../../../components/ServiceBanner";
import Image from "next/image";
import WhyMicroATM from "../../../components/Bike Insurance/Whymatm";
import FAQ from "../../../components/Bike Insurance/FAQ";

const WrenchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-[#0C3D4C]"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const TagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-[#0C3D4C]"
  >
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
    <path d="M7 7h.01"></path>
  </svg>
);

const RefreshCwIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-[#0C3D4C]"
  >
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
    <path d="M21 3v5h-5"></path>
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
    <path d="M3 21v-5h5"></path>
  </svg>
);

const PackageCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-[#0C3D4C]"
  >
    <path d="m16 16 2 2 4-4"></path>
    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
    <path d="M16.5 9.4 7.55 4.24"></path>
    <path d="M3.29 7 12 12l8.71-5"></path>
    <path d="M12 22V12"></path>
  </svg>
);

const FeatureCard = ({ icon, title, children }) => (
  <div className="flex flex-col items-center md:items-start text-center md:text-left">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-zinc-800 mb-2">{title}</h3>
    <p className="text-zinc-600 max-w-xs">{children}</p>
  </div>
);
function page() {
  const data = {
    id: 1,
    subheading: "Micro ATM",
    heading: "Chhoti Machine, Badi Banking power!",
    description:
      "Withdraw cash, transfer money, and check your balance easily using secure Aadhaar-based banking, anytime, anywhere.",
    bgImage: "/image/matmbg.png",
    // centerImage: '/image/matm-img.png',
  };

  const matmData = {
    subheading: "mATM",
    heading: "Instant Banking at Your Location",
    description:
      "mATM enables customers to perform basic banking transactions using a debit card and secure authentication. Easily withdraw cash, check account balance, and complete quick transactions through authorized service points, making banking simple, fast, and accessible everywhere.",
  };

  const section2data = {
    title: "Micro ATM",
    img2: "/image/matm22.png",
    color: "#F7FFDE",
  };

  const features = [
    {
      icon: <WrenchIcon />,
      title: "Clear & Transparent Process",
      description: "Enjoy straightforward commission plans with timely and reliable settlements.",
      align: "right",
    },
    {
      icon: <RefreshCwIcon />,
      title: "Easy & Fast Onboarding",
      description:
        "Get started quickly with a smooth activation process operating directly from your shop.",
      align: "right",
    },
    {
      icon: <TagIcon />,
      title: "Cost-Effective Micro ATM Solutions",
      description:
        "Access Micro ATM devices at an affordable price of just ₹1,300 + GST, making digital banking simple and accessible.",
      align: "right",
    },
    {
      icon: <PackageCheckIcon />,
      title: "Round-the-Clock Support",
      description: "Our dedicated team is available 24/7 to help you whenever you need assistance.",
      align: "left",
    },
    {
      icon: <TagIcon />,
      title: "Reliable & Secure Technology",
      description:
        "Experience smooth and safe digital transactions powered by cutting-edge technology.",
      align: "left",
    },
    {
      icon: <PackageCheckIcon />,
      title: "Trusted Nationwide",
      description:
        "Join thousands of retailers and distributors across India who trust SaveDost for seamless banking services.",
      align: "left",
    },
  ];

  const faqs = [
    {
      question: "What is M.ATM?",
      answer:
        "M.ATM allows you to perform banking services like cash withdrawal, balance enquiry, and fund transfers through a mini ATM device.",
    },
    {
      question: " Do I need a bank account?",
      answer: "Yes, you need an Aadhaar-linked bank account to use M.ATM services.",
    },
    {
      question: "Is it safe to use M.ATM?",
      answer:
        "Yes, all transactions are secure and authenticated using Aadhaar or biometric verification.",
    },
    {
      question: "Can I transfer money using M.ATM?",
      answer: "Yes, you can transfer funds to other Aadhaar-linked bank accounts instantly.",
    },
    {
      question: "What are the transaction limits?",
      answer:
        "Transaction limits depend on your bank and KYC details; they are displayed before you confirm any operation.",
    },
    {
      question: "What if a transaction fails?",
      answer:
        "Failed transactions are refunded automatically, or our support team will help resolve it quickly.",
    },
  ];

  return (
    <>
      <ServiceBanner data={data} />
      <div style={{ backgroundColor: section2data.color }}>
        <div className="max-w-7xl mx-auto lg:pt-8 lg:px-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex items-center">
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-aboreto text-4xl md:text-5xl lg:text-6xl font-medium">
                  {section2data.title}
                </span>
              </div>
            </div>

            <div className="flex">
              <Image
                src={section2data.img2}
                width={500}
                height={200}
                alt=" image"
                className="ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white py-4 md:pt-6 md:pb-16">
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
              {matmData?.subheading}
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0C3D4C]">
              {matmData.heading}
            </h2>
            <p className="mt-6 text-[#5D5D5D] leading-relaxed">{matmData.description}</p>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-18 py-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-[#0C3D4C] leading-tight mb-4">
              Benefits of Micro ATM with SaveDost
            </h2>
            <p className="text-lg text-zinc-600 mt-2 max-w-2xl mx-auto">
              We help you expand your digital services business with reliable technology, secure
              transactions, and dedicated support you can trust for everyday banking services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-y-8 md:gap-x-8 lg:gap-x-16">
            {/* Left Features */}
            <div className="flex flex-col gap-6 ">
              {features
                .filter((f) => f.align === "right")
                .map((feature) => (
                  <FeatureCard key={feature.title} icon={feature.icon} title={feature.title}>
                    {feature.description}
                  </FeatureCard>
                ))}
            </div>

            {/* Center Image */}
            <div className="relative w-full max-w-sm mx-auto px-6 py-8">
              <div className="bg-yellow-100 p-5 rounded-2xl h-[40vh] w-[50vh] relative">
                <Image
                  src="/image/matmimg2.jpg"
                  alt="High-performance sports car"
                  width={700}
                  height={700}
                  className="absolute top-10 left-10 w-full h-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Right Features */}
            <div className="flex flex-col gap-12 lg:ms-auto pl-14">
              {features
                .filter((f) => f.align === "left")
                .map((feature) => (
                  <FeatureCard key={feature.title} icon={feature.icon} title={feature.title}>
                    {feature.description}
                  </FeatureCard>
                ))}
            </div>
          </div>
        </div>
      </section>
      <WhyMicroATM />
      <FAQ
        faqs={faqs}
        subheading="Find answers to common questions about micro-ATM services, transactions and support."
      />
    </>
  );
}

export default page;
