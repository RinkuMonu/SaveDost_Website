"use client";

import Link from "next/link";
import React from "react";

export default function PreFooterSection() {
  const columns = [
    // {
    //   title: "Money Transfer & other Services",
    //   links: [
    //     // { name: "AePS", href: "/aeps" },
    //     // { name: "Money Transfer", href: "/dmt" },
    //     { name: "Credit Card", href: "/credit-card" },
    //     { name: "PAN Card", href: "/pan-card" },
    //   ],
    // },
    {
      title: "Financial Services",
      links: [
        // { name: "Business Loan", href: "/loan/business-loan" },
        // { name: "Home Loan", href: "/loan/home-loan" },
        // { name: "Personal Loan", href: "/loan/personal-loan" },
        // { name: "Construction Loan", href: "/loan/construction-equipment-loan" },
        // { name: "Car Loan", href: "/loan/car-loan" },
        // { name: "Instant Loan", href: "/instant-loan" },
        { name: "Car Insurance", href: "/insurance/car-insurance" },
        { name: "Bike Insurance", href: "/insurance/bike-insurance" },
        { name: "Taxi Insurance", href: "/insurance/taxi-insurance" },
      ],
    },
    {
      title: "Recharge & Bills",
      links: [
        { name: "Mobile Recharge", href: "/recharge" },
        { name: "FasTag Recharge", href: "/fastag" },
        { name: "Mobile Bill Payment", href: "/recharge#mobile" },
        { name: "Book Cylinder", href: "/recharge#lpg" },
        { name: "Landline", href: "/recharge#landline" },
        { name: "Broadband", href: "/recharge#broadband" },
        { name: "Electricity", href: "/recharge#electricity" },
      ],
    },
    {
      title: "Booking Services",
      links: [
        { name: "Bus Booking", href: "/booking#bus-booking" },
        // { name: "Train Booking", href: "/booking#train-booikng" },
        // { name: "Hotel Booking", href: "/booking#hotel-booking" },
        // { name: "Flight Booking", href: "/booking#flight-booking" },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-10">
        {columns.map((col, i) => (
          <div key={i} className="space-y-3">
            <h3 className="font-semibold text-gray-900">{col.title}</h3>
            <ul className="space-y-2">
              {col.links.map((link, j) => (
                <li key={j}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-[#5cacc4] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
