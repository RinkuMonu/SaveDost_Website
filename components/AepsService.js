import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Cash Withdrawal",
    description:
      "Withdraw money instantly using your Aadhaar and fingerprint. No debit card or PIN needed—quick, safe, and convenient.",
    icon: "/icons/a1.png",
  },
  {
    title: "Cash Deposit",
    description:
      "Deposit money directly into your Aadhaar-linked bank account using just your fingerprint. It’s a safe, simple way to pay without needing cash, cards, or PINs.",
    icon: "/icons/a5.png",
  },
  {
    title: "Balance Enquiry",
    description:
      "Know your bank balance instantly with Aadhaar verification. Get real-time balance information without cards, PINs, or bank visits.",
    icon: "/icons/a2.png",
  },
  {
    title: "Mini Statement",
    description:
      "View your last 10 bank transactions instantly through AePS. This helps you easily check and track your recent account activity anytime.",
    icon: "/icons/a3.png",
  },
  {
    title: "Fund Transfer",
    description:
      "Transfer money instantly to any Aadhaar-linked bank account using biometric verification. The process is quick, secure, and works across different banks.",
    icon: "/icons/a4.png",
  },
];

const AepsService = () => {
  return (
    <section className="bg-[#E6F4FA] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 text-center">
        <p className="text-lg font-semibold text-[#0C3D4C] tracking-wide">Services</p>
        <h2 className="mt-2 text-2xl md:text-4xl font-bold text-[#0C3D4C] leading-snug">
          Enjoy quick and secure banking and payments every time.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <div className="shape p-8 text-left h-full">
                <h3 className="text-2xl font-semibold text-[#0C3D4C]">{service.title}</h3>
                <hr className="my-4 h-px text-cyan-100" />
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
              </div>

              <div className="absolute w-16 h-16 top-0 -right-1 bg-white rounded-full p-3 z-[10] shadow-md">
                <Image
                  width={40}
                  height={40}
                  src={service.icon}
                  alt={service.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AepsService;
