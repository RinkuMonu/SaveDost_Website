import Image from "next/image";
import React from "react";

const InfoCard = ({ label, value }) => (
  <div className="rounded-lg border border-[#0063A2] px-4 py-3 w-full text-center hover:shadow-lg transition-shadow duration-300">
    <p className=" font-semibold text-[#0C3D4C] py-2">{label}</p>
    <p className="font-bold text-lg text-[#0C3D4C]">{value}</p>
  </div>
);

const Eligibility = ({ title, infoData, image, scale }) => {
  return (
    <div className="bg-[#EFF9FF] mb-20 relative">
      <div className=" px-4 lg:px-0 max-w-6xl mx-auto py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side Content */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-4xl font-bold text-[#0C3D4C] max-w-lg">{title}</h3>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {infoData.map((item, index) => (
                <InfoCard key={index} label={item.label} value={item.value} />
              ))}
            </div>
          </div>

          {/* Right Side Image */}
          <div className="hidden md:flex justify-center">
            <Image
              src={image}
              width={400}
              height={400}
              alt="Eligibility section illustration"
              className={`absolute bottom-0 right-10 `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
