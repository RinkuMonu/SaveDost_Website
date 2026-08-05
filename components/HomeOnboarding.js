"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";

const onboardingData = {
  User: {
    image: [
      "/home/download1.png",
      "/home/create2.png",
      "/home/link3.png",
      "/home/transacting4.png",
    ],
    steps: [
      {
        id: 1,
        title: "Download App",
        description:
          "Install the SaveDost app in a few seconds in either the Play Store or the App Store.",
      },
      {
        id: 2,
        title: "Create Account",
        description: "Create your account using just your mobile number.",
      },
      {
        id: 3,
        title: "Link Bank Account",
        description: "Link your bank account safely and start transacting.",
      },
      {
        id: 4,
        title: "Start Transacting",
        description: "Pay bills, transfer money, and recharge easily.",
      },
    ],
  },
  Retailer: {
    image: ["/home/ret1.png", "/home/verify2.png", "/home/ret3.png", "/home/serve4.png"],
    steps: [
      {
        id: 1,
        title: "Easy Sign-up",
        description: "Join our network with a smooth mobile-friendly system.",
      },
      {
        id: 2,
        title: "Instant Verification",
        description: "Verify yourself quickly through your distributor.",
      },
      { id: 3, title: "Load Wallet", description: "Keep your wallet loaded and ready to serve." },
      { id: 4, title: "Serve & Earn", description: "Offer services and grow your revenues." },
    ],
  },
  Distributor: {
    image: ["/home/dis3d1.png", "/home/dis3d3.png", "/home/dis3d2.png", "/home/dis3d4.png"],
    steps: [
      {
        id: 1,
        title: "Register Online",
        description: "Sign up easily through our distributor portal.",
      },
      { id: 2, title: "Complete KYC", description: "Confirm your identity with our fast system." },
      { id: 3, title: "Add Funds", description: "Pay securely using multiple options." },
      { id: 4, title: "Start Transacting", description: "Offer services and earn commissions." },
    ],
  },
  WhiteLabel: {
    image: ["/home/dis1.png", "/home/dis2.png", "/home/dis3.png", "/home/dis4.png"],
    steps: [
      { id: 1, title: "Initial Consultation", description: "Connect with our representative." },
      { id: 2, title: "Requirement Analysis", description: "Panel demo & requirement analysis." },
      { id: 3, title: "Documentation", description: "Documents and compliance verification." },
      { id: 4, title: "Service Activation", description: "Payment and platform activation." },
    ],
  },
};

const tabs = Object.keys(onboardingData);

const StepCard = ({ number, title, description }) => (
  <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg relative w-full max-w-sm mx-auto">
    <div className="absolute -top-3 -right-3 bg-[#0C3D4C] text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-base sm:text-lg">
      {number}
    </div>

    <h3 className="font-bold text-lg sm:text-xl mb-1 text-[#0C3D4C]">{title}</h3>
    <p className="text-gray-500 text-sm sm:text-base">{description}</p>
  </div>
);

const HomeOnboarding = () => {
  const [activeTab, setActiveTab] = useState("User");
  const activeData = onboardingData[activeTab];

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <p className="text-xs sm:text-sm font-semibold text-[#24576C] tracking-widest uppercase text-center">
          PRODUCT & ONBOARDING
        </p>

        <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-[#0C3D4C] text-center leading-snug">
          Integration, infinite possibilities, and onboarding.
        </h3>

        {/* Tabs */}
        <div className="my-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 sm:px-6 rounded-md text-sm sm:text-base font-semibold transition-all
              ${
                activeTab === tab
                  ? "bg-[#3080A6] text-white shadow-md"
                  : "bg-white text-[#0C3D4C] border hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-gray-100 rounded-2xl p-4 sm:p-6 lg:p-10">
          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {activeData.steps.map((step) => (
              <StepCard key={step.id} {...step} number={step.id} />
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="flex justify-center">
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380px] lg:h-[380px]">
              <Slider
                infinite
                speed={700}
                autoplay
                autoplaySpeed={2500}
                slidesToShow={1}
                slidesToScroll={1}
                arrows={false}
                fade
              >
                {activeData.image.map((img, index) => (
                  <div key={index} className="flex justify-center">
                    <Image
                      src={img}
                      alt="onboarding"
                      width={350}
                      height={380}
                      className="w-full h-auto lg:h-[380px] object-contain"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOnboarding;
