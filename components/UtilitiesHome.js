"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  { name: "Gas Bill", src: "/home/gasbill3d.png", position: "top-20 right-12" },
  {
    name: "Electricity Bill",
    src: "/home/bulb3d.png",
    position: "bottom-1/4 -right-14 -translate-y-1/2",
  },
  {
    name: "Broadband Bill",
    src: "/home/broad3d.png",
    position: "bottom-8 left-1/2 -translate-x-1/3",
  },
  { name: "Water Bill", src: "/home/water3d.png", position: "bottom-40 left-[42.8%]" },
  {
    name: "Health Insurance",
    src: "/home/health3d.png",
    position: "top-4 left-3/5 -translate-x-1/2",
  },
  { name: "DTH", src: "/home/dth3d.png", position: "top-1 right-20 -translate-x-1/2" },
  { name: "Mobile Recharge", src: "/home/mobile3d.png", position: "bottom-12 -right-12" },
  { name: "Education", src: "/home/edu3d.png", position: "top-[15%] left-[46.1%]" },
  { name: "Credit", src: "/home/credit3d.png", position: "top-50 -right-10 -translate-x-1/3" },
  { name: "Money", src: "/home/money3d.png", position: "-top-14 right-80" },
  { name: "Telephone", src: "/home/tele3d.png", position: "top-1/3 left-[42.1%]" },
];

const UtilitiesHome = () => {
  return (
    <section className="bg-[#eaf5ff] pt-14 pb-10 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block">
          {services.map((service) => (
            <div
              key={service.name}
              className={`absolute ${service.position} group z-20 transition-transform duration-300 hover:scale-110`}
            >
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-sm text-white font-semibold bg-[#0C3D4C]
                rounded-md shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300"
              >
                {service.name}
              </span>

              <div className="hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-pulse">
                <Image
                  src={service.src}
                  width={80}
                  height={80}
                  alt={`${service.name} icon`}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 lg:gap-16 relative z-10">
          <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d3d57] leading-tight">
              Fast Utilities, Zero Hassle
            </h2>
            <h4 className="text-2xl font-bold">Quick Services, No Stress</h4>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              At SaveDost, we make digital payments simple and hassle-free. Whether you’re at home,
              traveling, or anywhere on the go, our platform ensures fast, secure, and reliable
              transactions. Enjoy a seamless experience with services designed to save you time and
              give you peace of mind.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2 sm:pt-4">
              {["Easy", "Fast", "Connectivity"].map((text) => (
                <p
                  key={text}
                  className="py-3 text-center text-sm sm:text-lg border border-[#0063A2] text-[#0C3D4C]
                  rounded-lg font-semibold hover:bg-[#0C3D4C] hover:text-white transition-all duration-300"
                >
                  {text}
                </p>
              ))}
            </div>

            <div className="pt-6 pb-8">
              <Link
                href="/bbps"
                className="inline-block bg-[#0C3D4C] text-white font-semibold py-3 px-8 rounded-2xl
                shadow-md hover:bg-[#124068] transition-all duration-300"
              >
                View more
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
              <Image
                src="/image/men-home.png"
                width={600}
                height={500}
                alt="Happy person using phone for utility services"
                className="w-full h-auto object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UtilitiesHome;
