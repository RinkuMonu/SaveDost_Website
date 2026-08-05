"use client";
import React from "react";
import Image from "next/image";

const advantages = [
  {
    id: 1,
    title: "Easy Cash Withdrawal",
    description:
      "Withdraw cash from your bank account using your Aadhaar number and fingerprint—no ATM card required.",
    icon: "/image/aeps1.png",
  },
  {
    id: 2,
    title: "Instant Balance Check",
    description:
      "Check your bank account balance instantly with Aadhaar and biometric verification.",
    icon: "/image/aeps2.png",
  },
  {
    id: 3,
    title: "Quick Fund Transfer",
    description:
      "Send money securely between bank accounts using Aadhaar authentication in just a few steps.",
    icon: "/image/aeps3.png",
  },
  {
    id: 4,
    title: "Mini Statement",
    description: "View your recent bank transactions instantly through service points.",
    icon: "/image/aeps4.png",
  },
  {
    id: 5,
    title: "Banking for Rural Areas",
    description:
      "Brings essential banking services to rural and semi-urban areas without the need to visit a bank branch.",
    icon: "/image/aeps5.png",
  },
  {
    id: 6,
    title: "Safe & Paperless Transactions",
    description:
      "All AEPS transactions are biometric-based, making them secure, fast, and completely paperless.",
    icon: "/image/aeps6.png",
  },
];

const AepsAdvantages = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#e8f0f7] to-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0C3D4C] mb-4">
          Benefits of AEPS Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Aadhaar Enabled Payment System (AEPS) makes everyday banking easy, safe, and accessible
          for everyone across India.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-16 h-16 mb-4 transform transition-transform duration-500 group-hover:rotate-30">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#033f7e] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AepsAdvantages;
