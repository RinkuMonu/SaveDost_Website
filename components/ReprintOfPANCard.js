"use client";

import React from "react";
import Link from "next/link";
import { FileText, CreditCard, FileCheck, Edit3, ArrowRight, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function ReprintOfpancard() {
  const sections = [
    {
      id: "A",
      icon: <FileText size={28} className="text-[#0077b6]" />,
      color: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      id: "B",
      icon: <CreditCard size={28} className="text-[#00b4d8]" />,
      color: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      id: "C",
      icon: <FileCheck size={28} className="text-[#007f5f]" />,
      color: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      id: "D",
      icon: <Edit3 size={28} className="text-[#9b5de5]" />,
      color: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ];

  const contentData = [
    {
      content:
        "Request a reprint of your PAN Card easily through SaveDost’s online PAN services. This option is available if you do not need to make any changes to your PAN information.",
    },
    {
      content:
        "A nominal fee applies for PAN services to Indian addresses. For foreign addresses, applicable charges will be levied.",
    },
    {
      content:
        "When using our digital PAN Card service, no physical forms or supporting documents are required.",
    },
    {
      content:
        "By default, only the “Address for Communication” checkbox should be selected in this form",
    },
  ];

  const combinedSections = sections.map((section, index) => ({
    ...section,
    ...contentData[index],
  }));

  const links = [
    "Read Guidelines",
    "Read Instructions",
    "Documents to be Submitted",
    "Do’s & Don’ts",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-gradient-to-br from-white via-[#f9fcfd] to-[#f1f9fa] px-4 py-12 sm:py-16 lg:px-0 lg:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-[#0C3D4C] relative inline-block">
            Reprint of PAN Card
          </h3>
          <p className="text-lg mt-5 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            If you already have a PAN and need a duplicate or replacement, you can apply for a PAN
            card reprint. A new card with your existing PAN details will be issued quickly and
            securely.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid items-start gap-7 sm:gap-9 lg:grid-cols-3 lg:gap-12">
          {/* Left Column */}

          <motion.div
            className="lg:col-span-2 space-y-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {combinedSections.map((section) => (
              <motion.div
                key={section.id}
                className={`flex gap-5 items-start p-6 bg-white border ${section.borderColor} rounded-2xl shadow-sm hover:shadow-md transition-all duration-300`}
                variants={itemVariants}
              >
                <div
                  className={`p-3 rounded-xl shadow-sm ${section.color} flex items-center justify-center`}
                >
                  {section.icon}
                </div>
                <p className="text-base text-gray-700 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Sidebar */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
              <Info size={22} className="text-[#0096c7]" /> Quick Links
            </h3>

            <motion.ul
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { name: "Read Guidelines", href: "/pan-card/reprint-guideline" },
                { name: "Read Instructions", href: "/pan-card/reprint-instructions" },
                { name: "Documents to be Submitted", href: "/pan-card/reprint-documents" },
                { name: "Do’s & Don’ts", href: "/pan-card/reprint-donts" },
              ].map((item, idx) => (
                <motion.li key={idx} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-gray-700 font-medium hover:text-[#0077b6] cursor-pointer px-2 py-2 rounded-lg transition-all duration-200 group hover:bg-[#f0f8fa]"
                  >
                    <span>{item.name}</span>
                    <motion.div transition={{ ease: "easeOut" }} whileHover={{ x: 5 }}>
                      <ArrowRight
                        size={20}
                        className="text-gray-400 group-hover:text-[#0077b6] transition-colors duration-200"
                      />
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
