import Image from "next/image";
import React from "react";

// Reusable Benefit Card
const BenefitCard = ({ text }) => (
  <div className="flex justify-center ">
    <div className="bg-white/30 p-4 w-md rounded-xl border border-white/20 ">
      <p className="text-white font-semibold text-center md:text-left ">{text}</p>
    </div>
  </div>
);

export default function LoanBenefits({ title, description, image, benefits }) {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-[#0C3D4C] tracking-tight">{title}</h3>
        <p className="mt-4 max-w-6xl mx-auto text-gray-600">{description}</p>
      </div>

      <div className="relative shadow-2xl min-h-[70vh]">
        <Image
          width={200}
          height={200}
          src={image}
          alt="Car loan benefits"
          className="w-full h-full object-cover absolute inset-0"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10 "></div>

        {/* Grid of Benefits */}
        <div className="max-w-7xl mx-auto">
          <div className="relative p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} text={benefit} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
