"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// --- Data for the Bank Logos ---
const banks = [
  { id: 1, name: "Axis", logoUrl: "/credit/axis.png", link: "https://www.axisbank.com/" },
  {
    id: 2,
    name: "IDFC First Bank",
    logoUrl: "/credit/idfc.png",
    link: "https://www.idfcfirstbank.com/",
  },
  { id: 3, name: "AU Bank", logoUrl: "/credit/au.png", link: "https://www.aubank.in/" },
  { id: 4, name: "HSBC Bank", logoUrl: "/credit/hsbc.png", link: "https://www.hsbc.co.in/" },
];

const BankLogoGrid = () => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-8">
          {banks.map((bank) => (
            <Link
              key={bank.id}
              href={bank.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-start text-center focus:outline-none"
            >
              <div
                className={`w-20 h-20 md:w-24 md:h-24 p-1.5 rounded-full border-2 flex items-center justify-center 
                  transition-all duration-300 transform hover:scale-110 border-gray-200 hover:border-blue-500 hover:shadow-lg
                `}
              >
                <Image
                  width={200}
                  height={200}
                  src={bank.logoUrl}
                  alt={`${bank.name} logo`}
                  className="h-10 w-10 md:h-12 md:w-12 object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-700 hover:text-blue-600">
                {bank.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BankLogoGrid;
