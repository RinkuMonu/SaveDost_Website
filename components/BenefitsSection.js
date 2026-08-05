// BenefitsSection.jsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCallOutline } from "react-icons/io5";

const BenefitsSection = () => {
  return (
    <section
      className=" px-4 lg:px-0 py-10 relative"
      style={{
        background:
          "linear-gradient(90deg, #01202A 0%, #01202A 25%, #0B4051 50%, #095C8C 75%, #095C8C 100%)",
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="text-white flex flex-col items-center lg:items-start md:pl-12 text-center lg:text-left">
          <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-8 ">
            One App, Endless <br /> Benefits
          </h3>

          <div className="flex sm:flex-row flex-col space-y-4 mb-8">
            <Link
              href="https://apps.apple.com/in/app/finunique/id6760808229"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download SaveDost on the App Store"
            >
              <Image src="/loan/image7.png" alt="logo-bbps" width={200} height={200} />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.utility.finunique"
              target="blank"
              aria-label="Get it on Google Play"
            >
              <Image src="/loan/image8.png" alt="logo-bbps" width={200} height={200} />
            </Link>
          </div>

          <p className="text-lg text-gray-200 mb-4">Or Get The Link On Your Phone</p>

          <div className="flex w-full max-w-sm bg-white p-1 rounded-4xl   items-center">
            <div className="relative flex-grow">
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="w-full pl-3 md:pl-12 pr-4  rounded-4xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <IoCallOutline className="absolute text-black top-1 left-2.5" />
            </div>
            <Link
              href="/coming-soon"
              className="px-6 py-3 text-white font-semibold rounded-4xl transition-colors"
              style={{
                background: "linear-gradient(90deg,#358EBA  0%, #24576C 100%)",
              }}
            >
              Get app
            </Link>
          </div>
        </div>

        <Image
          src="/loan/loan6.png"
          width={300}
          height={400}
          alt="Mobile App Interface"
          className=" z-10 mx-auto  lg:absolute -top-0 right-20 h-[64vh] w-auto"
        />
      </div>
    </section>
  );
};

export default BenefitsSection;
