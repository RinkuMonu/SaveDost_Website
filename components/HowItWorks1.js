import Image from "next/image";
import React from "react";

const timelineData = [
  {
    stepNumber: 1,
    title: "Visit an AEPS Agent",
    description:
      "Go to a nearby AEPS agent. Share your bank name and Aadhaar number to start the transaction.",
    imageUrl: "/aeps/p1.png",
  },
  {
    stepNumber: 2,
    title: "Enter Transaction Details",
    description: "Select the type of transaction (such as cash withdrawal) and enter the amount.",
    imageUrl: "/aeps/p2.png",
  },
  {
    stepNumber: 3,
    title: "Fingerprint Verification",
    description: "Place your finger on the biometric scanner to confirm your identity securely.",
    imageUrl: "/aeps/p3.png",
  },
  {
    stepNumber: 4,
    title: "Transaction Approval",
    description: "The bank system verifies your details and approves the transaction instantly.",
    imageUrl: "/aeps/p4.png",
  },
  {
    stepNumber: 5,
    title: "Receive Cash",
    description:
      "Once approved, the agent gives you the cash, and the transaction is completed successfully.",
    imageUrl: "/aeps/p5.png",
  },
];
const TimelineStep = ({ stepNumber, title, description, imageUrl, isReversed, isLast }) => {
  return (
    <div className={`flex flex-col lg:flex-row  gap-6 lg:gap-0 lastSvg `}>
      <div
        className={` lg:w-5/12 items-start ${isReversed ? "flex justify-end align-top " : "flex justify-start"}`}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={400}
          className="rounded-xl object-contain"
        />
      </div>
      <div className="w-full lg:w-2/12 flex lg:flex-col items-center justify-center gap-y-10 lg:gap-y-0">
        <div className="w-12 h-12 shrink-0 bg-slate-800 text-white font-bold text-xl rounded-full flex items-center justify-center z-10">
          {stepNumber}
        </div>
        {!isLast && (
          <div
            className={`hidden lg:block h-64 lg:h-56 w-32 lg:w-auto grow  svg1 ${isReversed ? "lg:-scale-x-100" : ""}`}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 250 350"
              preserveAspectRatio="none"
              className=""
            >
              <path
                d="M 125 0 Q 300 175, 125 350"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray="2 12"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-5/12 text-center lg:text-left">
        <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
        <p className="mt-2 text-slate-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks1 = () => {
  return (
    <section className="bg-slate-50 pt-20 px-4 sm:px-6 lg:px-24">
      <div className="text-center pb-10 pt-6">
        <p className="text-2xl font-semibold text-[#24576C] tracking-widest uppercase">
          HOW DOES AEPS WORKS ?
        </p>
        {/* <h3 className="mt-2 text-4xl font-bold text-[#175369] pb-10">
       Aadhaar Enabled Payment System works ?
      </h3> */}
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 mb-20">
          <div className="">
            <h2 className=" text-[#0C3D4C] text-lg font-semibold">How AePS Works</h2>
            <p className="text-4xl text-[#0C3D4C] font-bold">
              Easy Banking with Aadhaar – Fast, Safe, and Simple
            </p>
          </div>
          <div>
            <p>
              AEPS makes basic banking services available near you through a simple 5-step process.
              It uses your Aadhaar number and fingerprint to complete transactions securely and
              quickly.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-10 lg:gap-0">
          {timelineData.map((step, index) => (
            <TimelineStep
              key={step.stepNumber}
              {...step}
              isReversed={index % 2 !== 0}
              // isLast={index === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks1;
