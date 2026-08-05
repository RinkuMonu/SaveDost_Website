import Image from "next/image";
import React from "react";

const FeatureCard = ({ icon, text }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col items-center justify-center text-center ">
    <Image src={icon} width={70} height={70} alt="icons" className="pb-2" />
    <p className="text-[#0C3D4C] font-medium">{text}</p>
  </div>
);

const features = [
  { icon: "/icons/ad1.png", text: "Transfer money instantly within seconds" },
  { icon: "/icons/ad2.png", text: "Trusted and secure transactions every time" },
  { icon: "/icons/ad3.png", text: "Send money easily without visiting banks" },
  { icon: "/icons/ad4.png", text: "Works across multiple banks and locations" },
  { icon: "/icons/ad5.png", text: "Clear charges and instant confirmation" },
  { icon: "/icons/ad6.png", text: "Simple process anyone can use" },
];

export default function AdvantageDMT() {
  return (
    <div className=" my-16 px-4 lg:p-0">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-left mb-8 md:mb-12">
          <h3 className="text-2xl sm:text-4xl font-bold text-[#0C3D4C]">
            Your Edge, Our Advantage
          </h3>
          <p className="mt-4  text-gray-500">
            Open, Trustworthy, and Fast Services. Transfer Funds in Seconds. <br />
            Transfer money quickly and easily, anywhere in India.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} text={feature.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
