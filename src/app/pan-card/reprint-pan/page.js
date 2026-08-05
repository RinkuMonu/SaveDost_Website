"use client";
import React from "react";
import { Share2 } from "lucide-react";
import Link from "next/link";

const page = () => {
  const cards = [
    {
      title: "PAN Reprint Now — Easy and Secure",
      desc: "Applications are done online. Get your PAN card reprinted in a matter of minutes. Provide information, file documents, and receive e-PAN at the comfort of your place.",
    },
    {
      title: "Reprint PAN Card Online",
      desc: "Reprint your PAN card easily through our secure online platform. Our step-by-step procedure guarantees you that you can replace or update your PAN card all by yourself without any form of hassle at all. Abide by the guidelines in order to get your reprint request accomplished.",
    },
    {
      title: "Fill a PAN Reprint Application",
      desc: "Fill in your reprint request forms by providing accurate details on your PAN number, full name, date of birth, and contact details. To prevent delays, be sure that you have all the information that is equivalent to your original PAN card records. Our web-based system offers a safe and easy method of presenting your application and being updated in due time.",
    },
    {
      title: "Fill out the PAN Reprint Form Accurately",
      desc: "Submit correct personal information and make sure that your full name, date of birth, and other necessary fields are the same as in your official documents. Submission mistakes can lead to delays in processing, and therefore, close attention should be paid to detail to facilitate a smooth PAN reprinting process.",
    },
    {
      title: "Upload Valid Documents",
      desc: "Attach your original identity and address documents, like Aadhaar Card, Passport, or Driving License. Make sure that the documents are readable, understandable, and in line with the information provided in your application. Correct submission ensures your PAN reprint is processed quickly.",
    },
    {
      title: "Make Secure Payment",
      desc: "Pay the processing fee online via UPI, debit/credit card, or net banking. Online payment is safe and registers your application immediately, preventing delays caused by offline methods. Charges may vary slightly based on payment method.",
    },
    {
      title: "Processing PAN Reprint Application",
      desc: "After submission, your PAN reprint order will be checked and executed within 10-15 working days. Status updates will be sent via email or SMS so you can track your application. Your reprinted PAN card will be delivered on time without interfering with banking or tax services.",
    },
    {
      title: "Required Documents for Reprint",
      desc: "Keep digital copies of identity and address proof ready before applying. Acceptable documents include Aadhaar Card, Passport, Driving License, or other government-approved proofs. Submitting valid documents ensures a smooth and fast reprint process.",
    },
    {
      title: "Fees for PAN Card Reprint",
      desc: "The reprint processing fee is approximate, with additional convenience charges depending on your online payment method. Your request will be recognized and processed promptly and safely with assurance of timely payment.",
    },
    {
      title: "PAN Card Reprint Assistance",
      desc: "If you encounter problems while applying for a reprint, our support team can help. We guide you step-by-step to fill the form, upload documents, and make payment to have your PAN card reprinted properly.",
    },
    {
      title: "Apply for PAN Reprint Now",
      desc: "Start your PAN card reprint application today and receive your revised PAN card at your communication address within minutes, safely and securely. Our web-based service ensures all processes are efficient, easy, and trustworthy.",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="mb-3 text-3xl font-bold text-[#0C3D4C] sm:text-4xl">Reprint PAN Card</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apply for your PAN card effortlessly with our simplified online process. Each step below
            helps you understand the procedure better.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 bg-[#deebf2] px-5 py-4 border-b border-gray-100">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#deebf2] text-black">
                  <Share2 className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{card.title}</h2>
              </div>

              {/* Paragraph */}
              <div className="px-6 py-5">
                <p className="text-gray-700 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Partner with Us</h2>
          <p className="text-gray-600 mb-6">
            Start your PAN card application today and get it delivered to your doorstep quickly and
            securely.
          </p>
          <Link href="/signup" className="pan-hero-button">
            Register
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
