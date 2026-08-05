"use client";
import React from "react";
import { Share2 } from "lucide-react";
import Link from "next/link";

const page = () => {
  const cards = [
    {
      title: "Online Address Update PAN Card - Easy and Safe",
      desc: "Make changes to your PAN Card address in the most convenient way. Send documents, authenticate information, and get your fixed PAN without any trouble.",
    },
    {
      title: "PAN Card Address Update Online",
      desc: "The update of the PAN Card address is done online. Change your PAN Card address conveniently through our safe web-based system. This is a procedure that enables individuals and HUFs to rectify or alter their address of communication in a short time without having to visit offices. Make sure that everything is in line with official documents so that your PAN Card update request can be approved and processed on time.",
    },
    {
      title: "Ensure the Form is Filled Accurately",
      desc: "Complete name, PAN number, date of birth, and the new address in the PAN update form are to be entered correctly. Ensure that the information is a match with your identity proof and address documents. Correct submission will make it easier to receive approval sooner, avoid delays, and make sure that your updated PAN Card will show the correct address according to the government registry.",
    },
    {
      title: "Post Proof Documents",
      desc: "Include scanned copies of valid address documents as proof of Aadhaar cards, passports, driving licenses, OCI/PIO cards, or other legitimately accepted proofs. Make sure that uploaded files are clear and legible and that they correspond with a new address given. By means of proper documentation, your PAN Card address update application can be handled effectively and without being rejected.",
    },
    {
      title: "Secure Payment",
      desc: "The processing fee can be paid online either through UPI, debit/credit card, or net banking to update your PAN Card address. The online payment is secure, which means that your application is captured instantly and delays by manual payments are eliminated. Clear fees can be used to enjoy a hassle-free moment in updating your PAN Card address.",
    },
    {
      title: "Processing PAN Address Update",
      desc: "After this, your update on the PAN address will be checked and done within 10-15 working days. Status updates will be sent to you via email or SMS so that you can monitor your application without any trouble. Immediate processing can be done to make sure that your PAN Card is updated with the new address without interrupting the current banking or taxation processes.",
    },
    {
      title: "Documents Required",
      desc: "Prepare electronic copies of documents. The acceptable proofs are Aadhaar Card, Passport, Driving License, OCI/PIO card, or any other governmentally approved documents indicating your new address. By transferring valid and matching documents, you will minimize the errors during the verification process and make sure that your PAN Card address is changed without any needless delays.",
    },
    {
      title: "Fees and Charges",
      desc: "The convenience transaction fee to update your PAN Card address is approx and any other convenience fee based on your payment mode. There is an immediately recognized application when you use online payment and easy verification of your application, and therefore, updating your address on your PAN Card is a fast and secure process.",
    },
    {
      title: "PAN Address Update Assistance",
      desc: "In case you have any problems with updating your PAN Card address, we have a support team that can assist you. Whether it is about filling out the form and uploading documents and safe payment, we will guide you so that your application to update the address on the PAN Card is done properly and effectively.",
    },
    {
      title: "Update PAN Now",
      desc: "You can now update your PAN Card address online and be in receipt of the updated card in a very short time and at your communication address with utmost security. Our web-based solution is convenient in all the ways of collecting the form up to checking the documents; it is hassle-free and reliable.",
    },
    // Original step-wise cards can be appended here if needed
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            PAN Card Address Update
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apply for your PAN Card effortlessly with our simplified online process. Each step below
            helps you understand the procedure better.
          </p>
        </div>
        {/* Cards rendered via map */}
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
            Start your PAN Card application today and get it delivered to your doorstep quickly and
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
