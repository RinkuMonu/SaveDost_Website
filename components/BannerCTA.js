"use client";
import Link from "next/link";
import React from "react";

const BannerCTA = ({ title, description }) => {
  return (
    <div className="w-full max-w-2xl pb-12 space-y-2 text-left">
      <h3 className="text-xl  text-[#24576C] font-semibold">{title}</h3>
      <p className=" text-gray-600 max-w-md pt-2 text-base">{description}</p>
      <div className="pt-4">
        <Link
          href="/signup"
          className="bg-[#0C3D4C] text-white font-semibold py-2 px-10 rounded-full shadow-lg hover:bg-teal-900 focus:outline-none focus:ring-4 focus:ring-teal-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Register now
        </Link>
      </div>
    </div>
  );
};

export default BannerCTA;
