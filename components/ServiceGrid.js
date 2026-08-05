"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const services = [
  {
    category: "Digital & Communication Utilities",
    services: [
      {
        title: "Mobile Prepaid",
        icon: "/icons/mp.png",
        hoverIcon: "/white/mp.png",
        description: "Instant mobile recharge with great offers.",
      },
      {
        title: "Mobile Postpaid",
        icon: "/icons/mpo.png",
        hoverIcon: "/white/mpo.png",
        description: "Settle your postpaid mobile bills easily and stay connected without delays.",
      },
      {
        title: "Broadband Postpaid",
        icon: "/icons/bp.png",
        hoverIcon: "/white/bp.png",
        description: "Fast and secure broadband bill payments for seamless internet.",
      },
      {
        title: "Cable TV",
        icon: "/icons/tv.png",
        hoverIcon: "/white/tv.png",
        description: "Settle your cable TV bills easily and never miss your favorite shows.",
      },
      {
        title: "DTH",
        icon: "/icons/dth.png",
        hoverIcon: "/white/dth.png",
        description: "Fast and secure DTH payments with zero last-minute hassle.",
      },
      {
        title: "Landline Postpaid",
        icon: "/icons/lp.png",
        hoverIcon: "/white/lp.png",
        description: "Pay your landline bills online quickly and securely.",
      },
    ],
  },
  {
    category: "Basic Household Utilities",
    services: [
      {
        title: "Electricity",
        icon: "/icons/lightbulb.png",
        hoverIcon: "/white/elsecricity.png",
        description:
          "Quick and secure electricity bill payments with real-time updates, available 24/7",
      },
      {
        title: "Water Supply",
        icon: "/icons/water.png",
        hoverIcon: "/white/water.png",
        description: "Quick and convenient online water bill payments, anytime.",
      },
      {
        title: "Gas Supply",
        icon: "/icons/gas.png",
        hoverIcon: "/white/gas.png",
        description: "Fast and secure LPG and gas bill payments made easy.",
      },
      {
        title: "Prepaid Meter",
        icon: "/icons/meter.png",
        hoverIcon: "/white/meter.png",
        description: "Quick prepaid meter recharges to keep electricity uninterrupted.",
      },
    ],
  },
  {
    category: "Financial & Payment Utilities",
    services: [
      {
        title: "Credit Card Bill Payment",
        icon: "/icons/cc.png",
        hoverIcon: "/white/cc.png",
        description: "Pay your credit card bills on time and safeguard your credit score.",
      },
      {
        title: "Loan Repayment",
        icon: "/icons/lr.png",
        hoverIcon: "/white/lr.png",
        description: "Settle your loan EMIs easily and stay worry-free about your credit score.",
      },
      {
        title: "Recurring Deposit",
        icon: "/icons/rd.png",
        hoverIcon: "/white/rd.png",
        description: "Easily pay into your RD and grow your savings steadily.",
      },
      {
        title: "Rental Payment",
        icon: "/icons/rent.png",
        hoverIcon: "/white/rent.png",
        description: "Pay your rent online quickly and securely, without any delays.",
      },
      {
        title: "Subscription Payment",
        icon: "/icons/sub.png",
        hoverIcon: "/white/sub.png",
        description: "Renew your subscriptions online easily and stay uninterrupted.",
      },
      {
        title: "Education Fees",
        icon: "/icons/ef.png",
        hoverIcon: "/white/ef.png",
        description: "Quick and secure payments for school and college fees.",
      },
      {
        title: "NPS",
        icon: "/icons/nps.png",
        hoverIcon: "/white/nps.png",
        description: "Fast and convenient NPS payments to plan a financially secure future",
      },
      {
        title: "NCMC",
        icon: "/icons/ncmc.png",
        hoverIcon: "/white/ncmc.png",
        description: "Fast and easy NCMC top-ups for seamless commuting.",
      },
    ],
  },
  {
    category: "Insurance & Health Utilities",
    services: [
      {
        title: "Insurance",
        icon: "/icons/insurance.png",
        hoverIcon: "/white/insurance.png",
        description: "Pay your general insurance premiums online and keep your policies active.",
      },
      {
        title: "Life Insurance",
        icon: "/icons/li.png",
        hoverIcon: "/white/li.png",
        description: "Renew your life insurance policies easily and secure your family’s future.",
      },
      {
        title: "Health Insurance",
        icon: "/icons/hi.png",
        hoverIcon: "/white/hi.png",
        description:
          "Pay your health insurance premiums on time and ensure uninterrupted coverage.",
      },
    ],
  },
  {
    category: "Government & Municipal Utilities",
    services: [
      {
        title: "Fastag",
        icon: "/icons/fastag.png",
        hoverIcon: "/white/fastag.png",
        description: "Recharge your FASTag online for smooth and hassle-free toll payments",
      },
      {
        title: "Housing Society Payments",
        icon: "/icons/hsp.png",
        hoverIcon: "/white/hsp.png",
        description: "Pay your maintenance charges online with ease and transparency",
      },
      {
        title: "Clubs & Associations Fees",
        icon: "/icons/caf.png",
        hoverIcon: "/white/caf.png",
        description: "Fast, secure payments for memberships without any hassle.",
      },
      {
        title: "Municipal Services",
        icon: "/icons/ms.png",
        hoverIcon: "/white/ms.png",
        description: "Settle municipal charges quickly from the comfort of your home",
      },
      {
        title: "Municipal Taxes",
        icon: "/icons/tax.png",
        hoverIcon: "/white/tax.png",
        description: "Pay your property taxes online easily and avoid fines or penalties",
      },
      {
        title: "E-Challan",
        icon: "/icons/e-chalan.png",
        hoverIcon: "/white/e-chalan.png",
        description: "Pay your traffic e-challans online quickly and easily.",
      },
      {
        title: "Donation",
        icon: "/icons/donate.png",
        hoverIcon: "/white/donate.png",
        description: "Make secure donations to trusted charitable organizations online.",
      },
    ],
  },
];

function LoginPopup({ open, onClose, onLogin }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-100 flex justify-center">
              <Image src={"/login.png"} width={300} height={300} alt="loginfirst" />
            </div>
            <h3 className="text-xl font-bold text-[#0C3D4C]">Please login first</h3>
            <p className="mt-2 text-sm text-gray-600">You need to login to use this service.</p>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="rounded-lg bg-[#0C3D4C] px-4 py-2 text-sm text-white"
                onClick={onLogin}
              >
                Login
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const ServiceGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [pendingService, setPendingService] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  // TODO: replace with your real auth check (NextAuth / cookie / API)
  const isLoggedIn = useMemo(() => false, []);

  const openLoginPopup = (service) => {
    setPendingService(service);
    setShowLoginPopup(true);
  };

  const handleServiceClick = (service) => {
    if (!isLoggedIn) {
      openLoginPopup(service);
      return;
    }

    // If logged in, navigate (customize per service)
    router.push("/recharge");
  };

  const goToLogin = () => {
    // Optional: include service name in query too
    const redirect = encodeURIComponent(pathname);
    router.push("/login");
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-10 space-y-8">
        <h3 className="text-3xl font-bold text-[#0C3D4C] sm:text-4xl">
          Bharat Bill Payment System - BBPS
        </h3>

        {services.map((category, catIdx) => (
          <div key={catIdx} className="space-y-6">
            <h3 className="text-xl font-bold text-[#0C3D4C]">{category.category}</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-3 gap-y-10 my-10 relative">
              {category.services.map((service, idx) => {
                const isHovered = hoveredCard === `${catIdx}-${idx}`;

                return (
                  <motion.div
                    key={idx}
                    className="relative h-40 cursor-pointer"
                    onHoverStart={() => setHoveredCard(`${catIdx}-${idx}`)}
                    onHoverEnd={() => setHoveredCard(null)}
                    // onClick={handleClick} // Redirect on click
                    onClick={() => handleServiceClick(service)}
                  >
                    {/* Top-left triangle */}
                    <motion.div
                      className="absolute w-18 h-18 bg-[#3CB4F8] rounded-tl-xl z-10"
                      style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                      initial={{ x: "50%", y: 20, opacity: 0 }}
                      animate={
                        isHovered
                          ? { x: 0, y: 0, opacity: 1, transition: { duration: 0.4 } }
                          : { x: "50%", y: 20, opacity: 0, transition: { duration: 0.4 } }
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
                      style={{ background: "linear-gradient(to bottom, #066191, #01202A)" }}
                    >
                      <motion.div
                        animate={
                          isHovered ? { rotateY: 360, scale: 1.1 } : { rotateY: 0, scale: 1 }
                        }
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
      </div>

      <LoginPopup
        open={showLoginPopup}
        onClose={() => {
          setShowLoginPopup(false);
          setPendingService(null);
        }}
        onLogin={goToLogin}
      />
    </>
  );
};

export default ServiceGrid;
