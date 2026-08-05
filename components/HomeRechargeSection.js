"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomeRechargeSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter();

  const handleClick = () => {
    router.push("http://localhost:3000/recharge");
  };

  const services = [
    {
      services: [
        {
          title: "Mobile Recharge",
          icon: "/icons/mp.png",
          hoverIcon: "/white/mp.png",
          link: "/bill-payments",
          description: "Fast mobile recharges with great deals and savings.",
        },
        {
          title: "Mobile Postpaid",
          icon: "/icons/mpo.png",
          hoverIcon: "/white/mpo.png",
          link: "/bill-payments",
          description: "Pay your postpaid bills instantly.",
        },
        {
          title: "Electricity",
          icon: "/icons/bp.png",
          hoverIcon: "/white/bp.png",
          link: "/bill-payments",
          description: "Pay Electricity Bills Quickly, Stay Always Powered.",
        },
        {
          title: "FasTag",
          icon: "/icons/tv.png",
          hoverIcon: "/white/tv.png",
          link: "/bill-payments",
          description: "No delayed cable television.",
        },
        {
          title: "DTH",
          icon: "/icons/dth.png",
          hoverIcon: "/white/dth.png",
          link: "/bill-payments",
          description: "Instantly recharge your DTH services.",
        },
        {
          title: "Landline",
          icon: "/icons/lp.png",
          hoverIcon: "/white/lp.png",
          link: "/bill-payments",
          description: "Pay with ease the landline bills.",
        },
      ],
    },
  ];

  return (
    <section className=" py-12 px-6 md:px-16 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
        Recharges & Bill Payments
      </h2>
      <p className="text-gray-600 mt-2 max-w-2xl text-lg mx-auto">
        Boost your earnings with recharges, bill payments & special offers Fast services, smooth
        transactions, and extra benefits for every user
      </p>

      {services.map((category, catIdx) => (
        <div key={catIdx} className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-3 gap-y-10 my-14 relative">
            {category.services.map((service, idx) => {
              const isHovered = hoveredCard === `${catIdx}-${idx}`;

              return (
                <motion.div
                  key={idx}
                  className="relative h-40 cursor-pointer"
                  onHoverStart={() => setHoveredCard(`${catIdx}-${idx}`)}
                  onHoverEnd={() => setHoveredCard(null)}
                  onClick={() => router.push(service.link)}
                >
                  {/* Top-left triangle */}
                  <motion.div
                    className="absolute w-18 h-18 bg-[#3CB4F8] rounded-tl-xl z-10"
                    style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                    initial={{ x: "50%", y: 20, opacity: 0 }}
                    animate={
                      isHovered
                        ? {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.4 },
                          }
                        : {
                            x: "50%",
                            y: 20,
                            opacity: 0,
                            transition: { duration: 0.4 },
                          }
                    }
                  />

                  {/* Card Body */}
                  <div className="relative z-10 w-full h-full rounded-2xl border border-[#226787] group-hover:border-[#3CB4F8] flex flex-col items-center justify-center p-4 text-center">
                    <p className="text-md font-semibold">{service.title}</p>
                    {isHovered && (
                      <p className="text-sm text-gray-700 mt-2">{service.description}</p>
                    )}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="absolute z-10 -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md"
                    style={{
                      background: "linear-gradient(to bottom, #066191, #01202A)",
                    }}
                  >
                    <motion.div
                      animate={isHovered ? { rotateY: 360, scale: 1.1 } : { rotateY: 0, scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Image
                        src={isHovered ? service.hoverIcon : service.icon}
                        alt={service.title}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Right Triangle */}
                  <motion.div
                    className="absolute w-18 h-18 bg-[#3CB4F8] rounded-br-xl z-10"
                    style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 0)" }}
                    initial={{
                      top: "0%",
                      left: "50%",
                      opacity: 0,
                      translateX: "-50%",
                      translateY: "-50%",
                    }}
                    animate={
                      isHovered
                        ? {
                            top: "78%",
                            left: "100%",
                            opacity: 1,
                            translateX: "-100%",
                            translateY: "-50%",
                            transition: { duration: 0.4 },
                          }
                        : {
                            top: "0%",
                            left: "50%",
                            opacity: 0,
                            translateX: "-50%",
                            translateY: "-50%",
                            transition: { duration: 0.4 },
                          }
                    }
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}

      {/* View All Button */}
      <div className="mt-10">
        <Link
          href="/bill-payments"
          className="border border-[#1f7caa] text-[#1f7caa] px-6 py-2 rounded-lg bg-white font-medium hover:bg-[#1f7caa] hover:text-white transition-colors duration-200"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
