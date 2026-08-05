"use client";
import React from "react";
import { motion } from "framer-motion";
import { Dna, Package, FileLock2 } from "lucide-react";
import Image from "next/image";

import {
  Zap,
  Droplet,
  Smartphone,
  Wifi,
  Wallet,
  CheckCircle,
  ShieldCheck,
  Clock,
  MapPin,
} from "lucide-react";

const services = [
  { name: "Electricity", Icon: Zap },
  { name: "Water", Icon: Droplet },
  { name: "Mobile Recharge", Icon: Smartphone },
  { name: "Broadband", Icon: Wifi },
  { name: "Wallet", Icon: Wallet },
  { name: "Instant Confirmation", Icon: CheckCircle },
];
// Data for the steps - easy to update or add more
const steps = [
  {
    title: "Order Your Test Kit",
    description: "Choose a DNA, BP, or wellness kit. We'll deliver it straight to your doorstep.",
    Icon: Dna,
  },
  {
    title: "Collect & Return",
    description:
      "Follow easy instructions to collect your sample. Use the prepaid mailer to send it back.",
    Icon: Package,
  },
  {
    title: "Get Secure Results Online",
    description:
      "Your results are reviewed by certified labs and shared securely via your personal dashboard.",
    Icon: FileLock2,
  },
];

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="px-4 lg:px-0">
      <div className="mx-auto max-w-6xl ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-base font-semibold text-[#0C3D4C] ">Simple Steps</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            How it works
          </h2>
          <p className="mt-2 max-w-2xl mx-auto  text-gray-600">
            No confusion or delays. Just fast and reliable testing.
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Column: Image with UI elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            {/* Main Image */}
            <Image
              src="/bbps/How3d.png"
              width={300}
              height={400}
              alt="Professional scientist at a computer"
              className="rounded-3xl  w-full max-w-lg h-auto object-cover z-10"
            />
            {/* Decorative UI Card */}
            <div className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg z-20 hidden sm:block">
              <p className="font-semibold text-gray-800">Test Kits</p>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {services.map(({ name, Icon }, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center w-12 h-12  text-[#0C3D4C]   rounded-lg shadow-md  duration-300"
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative "Order" Tag */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 bg-[#0C3D4C]/30   text-[#0C3D4C]  text-sm font-medium px-4 py-2 rounded-full shadow-md z-20">
              Order Your Kit
            </div>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-green-200/30 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Right Column: Steps with Animated Line */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* The Animated Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="absolute left-6 top-0 w-0.5 h-full bg-gray-200"
              style={{ transformOrigin: "top" }}
            />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start gap-5 pl-12"
                >
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#0C3D4C]/20  ring-8 ring-white z-10">
                    <step.Icon className="h-6 w-6 text-[#0C3D4C]  " />
                  </div>
                  <div className="ps-5">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-1 text-base text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
