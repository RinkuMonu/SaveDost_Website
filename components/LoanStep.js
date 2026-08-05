import Image from "next/image";
import React from "react";

const FeatureCard = ({ number, text }) => (
  <div className="flex items-center p-5 space-x-4 bg-[#e0f2ff] shadow-sm w-full ">
    <div className="flex items-center justify-center w-12 h-12 text-3xl font-semibold text-[#0C3D4C] bg-white  ">
      {number}
    </div>
    <p className="text-[#0C3D4C] text-lg font-semibold">{text}</p>
  </div>
);

const LoanStep = ({ data }) => {
  return (
    <div className="px-4 lg:px-0 pt-16 pb-20">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="">
            <h3 className="text-2xl sm:text-4xl font-bold leading-tight mb-6 text-[#0C3D4C]">
              {data.heading}
            </h3>
            <p className="text-gray-500 leading-relaxed mb-8 ">{data.desc}</p>
            <Image
              src="/loan/loan53d.png"
              className="object-cover w-full lg:pe-4"
              width={400}
              height={400}
              alt=""
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-start space-y-4">
            {data.loanFeatures.map((feature) => (
              <FeatureCard key={feature.number} number={feature.number} text={feature.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanStep;
