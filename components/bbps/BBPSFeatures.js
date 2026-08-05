"use client";
import React from "react";
import { ShieldCheck, Clock, Zap, Wallet, Radio } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Secure & Reliable",
    description: "Built on NPCI's trusted network with robust security controls.",
    Icon: ShieldCheck,
  },
  {
    title: "Multiple Payment Options",
    description: "Use UPI, Net Banking, Cards, or Wallets for maximum flexibility.",
    Icon: Wallet,
  },
  {
    title: "Instant Confirmation",
    description: "Get immediate digital receipts with a unique BBPS transaction ID.",
    Icon: Zap,
  },
  {
    title: "Available 24x7",
    description: "Pay your bills anytime, anywhere—no more queues or branch timings.",
    Icon: Clock,
  },
  {
    title: "Nationwide Access",
    description: "Accessible via thousands of banks, agent outlets, and online apps.",
    Icon: Radio,
  },
];

export default function BBPSFeatures() {
  return (
    <section className="overflow-hidden py-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-16 lg:grid-cols-2">
          {/* Left Column: Image */}

          {/* Right Column: Key Benefits List */}
          <div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0C3D4C]  sm:text-4xl">
                The BBPS Advantage
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Experience a payment system built for trust, speed, and ultimate convenience—backed
                by NPCI.
              </p>
            </div>

            <div className="mt-5 space-y-5">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <motion.div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0C3D4C]/20  text-[#0C3D4C] "
                    animate={{ y: [0, -6, 0] }} // subtle float animation
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <feature.Icon className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/image/aeps-vec3d.png"
              width={500}
              height={500}
              alt="Digital interface showing secure payment and data connections."
              className="w-full max-w-md "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
