"use client";

import React from "react";
import Image from "next/image";

export default function HomeTrustedSecureSection() {
  const logos = [
    { src: "/image/pci-dss-logo.png", alt: "PCI DSS Compliant" },
    { src: "/image/iso-logo.png", alt: "100% Secured" },
    { src: "/image/axis-bank-logo.png", alt: "Axis Bank" },
    { src: "/image/certified-logo.png", alt: "ISO 27001 Certified" },
  ];

  return (
    // <section className="bg-gradient-to-r from-purple-900 to via-pink-800 bg-pink-500 py-2 px-6 md:px-12 lg:px-24 my-6 lg:my-10">
    //   <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

    //     <div className="flex-shrink-0">
    //       <Image
    //         src="/image/check-mark3d.png"
    //         alt="Security Shield"
    //         width={400}
    //         height={400}
    //         className="w-40 sm:w-56 md:w-72 lg:w-76 h-auto drop-shadow-2xl"
    //       />
    //     </div>

    //     <div className="text-center md:text-left">
    //       <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
    //         Trusted, Safe & Secure
    //       </h2>
    //       <p className="text-lg text-white/90 mb-6">
    //         Bank Grade Security, Fully Encrypted, 24x7 Customer Support, App
    //         Lock
    //       </p>
    //       <div className="flex flex-wrap justify-center md:justify-center items-center gap-6 bg-white rounded-2xl shadow-md px-8 py-4">
    //         <Image
    //           src="/image/pci-dss-logo.png"
    //           alt="PCI DSS Compliant"
    //           width={70}
    //           height={25}
    //         />
    //         <Image
    //           src="/image/iso-logo.png"
    //           alt="100% Secured"
    //           width={70}
    //           height={25}
    //         />
    //         <Image
    //           src="/image/certified-logo.png"
    //           alt="ISO 27001 Certified"
    //           width={70}
    //           height={25}
    //         />

    //         <div className="flex items-center gap-2">
    //           <span className="text-sm font-semibold">Powered by</span>
    //           <Image
    //             src="/image/axis-bank-logo.png"
    //             alt="Axis Bank"
    //             width={80}
    //             height={50}
    //             className="object-contain"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto grid items-center gap-10 px-6 md:px-12 lg:grid-cols-12 lg:px-38">
        {/* Left text (like screenshot) */}
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Trusted, Safe & Secure
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            Bank Grade Security, Fully Encrypted, 24x7 Customer Support, App Lock
          </p>
        </div>

        {/* Right logos */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-4">
            {logos.map((logo) => (
              <div key={logo.src} className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={78}
                  className="h-16 w-auto object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
