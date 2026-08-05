"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";

const BenefitsSection2 = ({ compact = false }) => {
  const [mobile, setMobile] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;

    // Remove all non-digit characters
    value = value.replace(/\D/g, "");

    // Limit to 10 digits
    if (value.length > 10) value = value.slice(0, 10);

    setMobile(value);
  };

  const isValidIndianNumber = /^[6-9]\d{9}$/.test(mobile);

  return (
    <section
      className={`relative px-4 lg:px-0 ${compact ? "py-6" : "py-10"}`}
      style={{
        background:
          "linear-gradient(90deg, #01202A 0%, #01202A 25%, #0B4051 50%, #095C8C 75%, #095C8C 100%)",
      }}
    >
      <div
        className={`${compact ? "max-w-6xl gap-6" : "max-w-7xl gap-10"} mx-auto grid grid-cols-1 items-center lg:grid-cols-2`}
      >
        {/* Left Content */}
        <div
          className={`flex flex-col items-center text-center text-white lg:items-start lg:text-left ${compact ? "space-y-4 md:pl-8" : "space-y-6 md:pl-12"}`}
        >
          <h3
            className={`${compact ? "text-2xl sm:text-3xl" : "text-2xl sm:text-3xl md:text-4xl"} font-bold leading-tight`}
          >
            Download the SaveDost App, <br /> Get Started in Minutes.
          </h3>

          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <Link
              href="https://apps.apple.com/in/app/finunique/id6760808229"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download SaveDost on the App Store"
            >
              <Image
                src="/loan/image7.png"
                alt="logo-bbps"
                width={compact ? 130 : 160}
                height={compact ? 130 : 160}
              />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.utility.finunique"
              target="blank"
              aria-label="Get it on Google Play"
            >
              <Image
                src="/loan/image8.png"
                alt="logo-bbps"
                width={compact ? 130 : 160}
                height={compact ? 130 : 160}
              />
            </Link>
          </div>

          <p className="text-lg text-gray-200">Or receive the app link on your phone</p>

          <div className="flex w-full max-w-sm bg-white p-1 rounded-full items-center">
            <div className="relative flex-grow">
              <input
                type="tel"
                value={mobile}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                className={`w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none  ${
                  mobile && !isValidIndianNumber
                    ? "border-red-500"
                    : "border-gray-300 focus:border-blue-500"
                }`}
              />
              <IoCallOutline className="absolute text-black top-1/2 left-3 -translate-y-1/2" />
            </div>

            <Link
              href="/coming-soon"
              className="px-6 py-2 text-white font-semibold rounded-full transition-colors whitespace-nowrap"
              style={{
                background: "linear-gradient(90deg,#358EBA 0%, #24576C 100%)",
              }}
            >
              Get App
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className={`relative mx-auto w-full ${compact ? "max-w-[310px]" : "max-w-md"}`}>
          <Image
            src="/MainQR.jpeg"
            width={600}
            height={260}
            alt="Mobile App Interface"
            className="w-full h-auto"
          />

          {/* Download button below the image for mobile */}
          <div className={`${compact ? "mt-4" : "mt-4"} flex justify-center`}>
            <Link
              href="https://play.google.com/store/apps/details?id=com.utility.finunique"
              target="blank"
              className={
                compact
                  ? "inline-flex items-center justify-center"
                  : "absolute left-1/2 top-[60%] inline-flex -translate-x-1/2 items-center justify-center sm:top-[62%] md:top-[65%] lg:top-[51%]"
              }
            >
              <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-t from-[#A10000] to-[#F40000] px-6 py-2 text-sm font-semibold text-white sm:px-4 sm:text-md md:text-md">
                Download App <IoMdDownload className="text-2xl animate-bounce" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection2;
