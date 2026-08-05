"use client";
import Image from "next/image";
import React from "react";

const logos = [
  { src: "/bank/instantpay.png", width: 120, height: 60 },
  // { src: "/bank/nsdl.png", width: 150, height: 70 },
  { src: "/bank/paysprint.png", width: 100, height: 50 },
  { src: "/bank/irctc.png", width: 70, height: 60 },
  { src: "/bank/ISERVEU-MAIN-LOGO.png", width: 150, height: 70 },
];

const APi = () => {
  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <p className="text-sm font-semibold text-[#24576C] tracking-widest uppercase">
          Our Network
        </p>
        <h3 className="mt-2 text-3xl font-bold text-[#0C3D4C] sm:text-4xl">Our API Partners</h3>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-2 md:grid-cols-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={logo.src}
              alt={`API Partner ${index + 1}`}
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Optional decorative circles */}
      {/* <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-200 rounded-full opacity-20"></div> */}
    </section>
  );
};

export default APi;
