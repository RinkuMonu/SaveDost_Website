"use client";

import React from "react";
import {
  Zap,
  Droplets,
  Flame,
  Gauge,
  Router,
  Tv,
  SatelliteDish,
  Phone,
  GraduationCap,
  Landmark,
  CreditCard,
  Shield,
  HeartHandshake,
  Stethoscope,
  Car,
  Home,
} from "lucide-react";
import Image from "next/image";

// const billCategories = {
//   left: [
//     {
//       icon: "/icons/elsecricity.png",
//       title: "Electricity",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/water.png",
//       title: "Water Supply",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/gas.png",
//       title: "Gas Supply",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/meter.png",
//       title: "Prepaid Meter",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/bp.png",
//       title: "Broadband Postpaid",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/tv.png",
//       title: "Cable TV",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/dth.png",
//       title: "DTH",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/lp.png",
//       title: "Landline Postpaid",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/mp.png",
//       title: "Mobile Prepaid",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/mpo.png",
//       title: "Mobile Postpaid",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//      {
//       icon: "/icons/cc.png",
//       title: "Credit Card Bill Payment",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/lr.png",
//       title: "Loan Repayment",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/rd.png",
//       title: "Recurring Deposit",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/rent.png",
//       title: "Rental Payment",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//   ],
//   right: [

//     {
//       icon: "/icons/sub.png",
//       title: "Subscription Payment",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/ef.png",
//       title: "Education Fees",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/nps.png",
//       title: "NPS",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/ncmc.png",
//       title: "NCMC",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/insurance.png",
//       title: "Insurance",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/li.png",
//       title: "Life Insurance",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/hi.png",
//       title: "Health Insurance",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/fastag.png",
//       title: "Fastag",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/hsp.png",
//       title: "Housing Society Payments",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/caf.png",
//       title: "Clubs & Associations Fees",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/ms.png",
//       title: "Municipal Services",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/tax.png",
//       title: "Municipal Taxes",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/e-chalan.png",
//       title: "E-Challan",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//     {
//       icon: "/icons/donate.png",
//       title: "Donation",
//       description:
//         "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
//     },
//   ],
// };

// Reusable component for each bill item

const billCategories = {
  left: [
    {
      icon: "/home/lightbulb.png",
      title: "Electricity",
      description:
        "Be sure to pay your electricity bills on time and not to be disconnected. Real-time confirmation and 24/7 service.",
    },
    {
      icon: "/icons/water.png",
      title: "Water Supply",
      description: "Pure water bills online. No longer parting in long lines.",
    },
    {
      icon: "/icons/gas.png",
      title: "Gas Supply",
      description: "Pay for LPG and piped gas without any hassles. Fast and secure.",
    },
    {
      icon: "/icons/meter.png",
      title: "Prepaid Meter",
      description:
        "Rechargeable prepaid electricity meters are automatically recharged and prevent power cuts.",
    },
    {
      icon: "/icons/bp.png",
      title: "Broadband Postpaid",
      description: "Always pay a broadband bill. Have access to unlimited internet services.",
    },
    {
      icon: "/icons/tv.png",
      title: "Cable TV",
      description:
        "You can also pay the cable TV bills online and watch your favorite shows without any discontinuities.",
    },
    {
      icon: "/icons/dth.png",
      title: "DTH",
      description: "Top up your DTH services within seconds. No more last-minute hassles.",
    },
    {
      icon: "/icons/lp.png",
      title: "Landline Postpaid",
      description: "Pay phone bills easily. Quick and easy payments.",
    },
    {
      icon: "/icons/mp.png",
      title: "Mobile Prepaid",
      description: "Top up any cell phone in real time. Best offers and discounts.",
    },
    {
      icon: "/icons/mpo.png",
      title: "Mobile Postpaid",
      description: "Meet bills on time on Pay postpaid mobile. Eliminate late charges and outages.",
    },
    {
      icon: "/icons/cc.png",
      title: "Credit Card Bill Payment",
      description: "Clarity in the payment of credit cards. Protect your credit score.",
    },
    // {
    //   icon: "/icons/lr.png",
    //   title: "Loan Repayment",
    //   description:
    //     "Make payments on EMIs of pay loans on time and ensure a good financial credit history.",
    // },
    {
      icon: "/icons/rd.png",
      title: "Recurring Deposit",
      description: "Pay your RDs easily. Accumulate your savings easily.",
    },
    {
      icon: "/icons/rent.png",
      title: "Rental Payment",
      description: "Pay rent online with ease. Clear and prompt payments.",
    },
  ],
  right: [
    {
      icon: "/icons/sub.png",
      title: "Subscription Payment",
      description: "Easily renew your subscriptions. Never miss a service.",
    },
    {
      icon: "/icons/ef.png",
      title: "Education Fees",
      description:
        "Make online payments of school and college fees. Guaranteed and instant payments.",
    },
    {
      icon: "/icons/nps.png",
      title: "NPS",
      description:
        "Make investments to your National Pension Scheme with ease. Plan for your future.",
    },
    {
      icon: "/icons/ncmc.png",
      title: "NCMC",
      description: "Top up your National Common Mobility Card to travel freely.",
    },
    {
      icon: "/icons/insurance.png",
      title: "Insurance",
      description:
        "Make online payments in respect of general insurance. Keep your policies active.",
    },
    {
      icon: "/icons/li.png",
      title: "Life Insurance",
      description: "Life insurance policies are easily renewed. Secure your family's future.",
    },
    {
      icon: "/icons/hi.png",
      title: "Health Insurance",
      description: "Pay the clear health insurance time. Make sure coverage is continuous.",
    },
    {
      icon: "/icons/fastag.png",
      title: "Fastag",
      description: "Fastag recharge to make smooth payments on tolls. Avoid delays on the road.",
    },
    {
      icon: "/icons/hsp.png",
      title: "Housing Society Payments",
      description: "Pay maintenance charges online. Open and transparent transactions.",
    },
    {
      icon: "/icons/caf.png",
      title: "Clubs & Associations Fees",
      description: "Easy club membership payments. Get uninterrupted services.",
    },
    {
      icon: "/icons/ms.png",
      title: "Municipal Services",
      description: "Municipality services Pay online. No more long waits at offices.",
    },
    {
      icon: "/icons/tax.png",
      title: "Municipal Taxes",
      description: "Pay property taxes without difficulty. Avoid receiving fines & penalties.",
    },
    {
      icon: "/icons/e-chalan.png",
      title: "E-Challan",
      description: "Payment via clear traffic e-challans, fast and easy payments.",
    },
    {
      icon: "/icons/donate.png",
      title: "Donation",
      description: "Donations to reliable charitable organizations. Donations make you care.",
    },
  ],
};

const BillItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-2 px-5 lg:px-10">
    <Image src={icon} alt="images" width={40} height={40} className="flex-shrink-0 mt-1" />
    <div className="flex-1">
      <h3 className="text-base font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

const BillManagement = () => {
  return (
    <section className="py-10 ">
      <div className="max-w-6xl mx-auto px-2">
        <h3 className="text-3xl font-bold text-[#0C3D4C] sm:text-4xl">Easy Monthly Billing</h3>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className=" border border-[#226787] rounded-2xl p-4 sm:p-6 divide-y divide-[#B5D8E8]">
            {billCategories.left.map((item, index) => (
              <div key={index} className="py-5 sm:py-6 first:pt-0 last:pb-0">
                <BillItem icon={item.icon} title={item.title} description={item.description} />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className=" border border-[#226787] rounded-2xl p-4 sm:p-6 divide-y divide-[#B5D8E8]">
            {billCategories.right.map((item, index) => (
              <div key={index} className="py-5 sm:py-6 first:pt-0 last:pb-0">
                <BillItem icon={item.icon} title={item.title} description={item.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillManagement;
