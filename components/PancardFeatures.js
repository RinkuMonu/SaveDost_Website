"use client";
import React from "react";
import Link from "next/link";
import { FaAddressCard } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";
import { MdOutlineTrackChanges, MdOutlineBrowserUpdated } from "react-icons/md";
import { IoIosPrint } from "react-icons/io";

const features = [
  {
    id: 1,
    icon: <FaAddressCard className="w-10 h-10 text-orange-800" />,
    title: "PAN Card Correction",
    description:
      "Correct your PAN Card details quickly with online verification and simplified documentation.",
    link: "/pan-card/pan-card-correction",
  },
  {
    id: 2,
    icon: <IoNewspaperSharp className="w-10 h-10 text-orange-800" />,
    title: "Apply for New",
    description:
      "All new PAN card applications are processed securely through official government channels.",
    link: "/pan-card/pan-card-Apply-New",
  },
  {
    id: 4,
    icon: <MdOutlineBrowserUpdated className="w-10 h-10 text-orange-800" />,
    title: "Address Update",
    description: "Enjoy seamless and speedy PAN processing with real-time status updates.",
    link: "/pan-card/pan-card-address-update",
  },
  {
    id: 5,
    icon: <IoIosPrint className="w-10 h-10 text-orange-800" />,
    title: "Reprint PAN",
    description:
      "Apply for a PAN Card reprint easily using Aadhaar-based verification, available across both rural and urban areas.",
    link: "/pan-card/reprint-pan",
  },
];

const pancardFeatures = () => {
  return (
    <section className="py-16 bg-[#F9EBDF] lg:px-0 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
          PAN Card Service Features
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Experience a seamless, secure, and fully digital PAN card application process tailored for
          all users.
        </p>

        <div className="flex flex-wrap justify-center gap-8 lg:px-0">
          {features.map((feature) => (
            <Link
              key={feature.id}
              href={feature.link}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transform transition-transform duration-500 hover:scale-105 p-6 flex flex-col items-center text-center w-full sm:w-[45%] lg:w-[30%] max-w-sm"
            >
              <div className="mb-4 transform transition-transform duration-500 group-hover:rotate-[40deg]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
              <span className="text-orange-700 font-semibold mt-3 group-hover:underline">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default pancardFeatures;
