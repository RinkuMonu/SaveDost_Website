"use client";
import React from "react";
import ServiceBanner from "../../../components/ServiceBanner";
import ServicesSection2 from "../../../components/ServicesSection2";
import ServicesSection3 from "../../../components/ServicesSection3";
import BenefitsDMT from "../../../components/BenefitsDMT";
import Link from "next/link";
import Image from "next/image";
import AdvantageDMT from "../../../components/AdvantageDMT";
import ContactBanner from "../../../components/ContactBanner";
import DmtWork from "../../../components/DmtWork";
import FAQ from "../../../components/Bike Insurance/FAQ";

const StepCard = ({ number, title, text, icon }) => (
  <div className="bg-sky-100/50 border border-sky-200/60  p-6 relative overflow-hidden">
    <div className="shadow-md rounded bg-white w-fit px-6 py-3">
      <p className="font-bold text-[#24576C] text-3xl">{number}</p>
    </div>
    <div className="relative z-10">
      <h3 className="font-semibold text-sky-800 text-lg my-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
    <Image
      src={icon}
      width={80}
      height={80}
      alt="Happy professional with a tablet"
      className="rounded-lg  absolute top-2 right-2"
    />
  </div>
);

// Data for the steps
const steps = [
  {
    number: 1,
    title: "Basic Detail Verification",
    text: "Beginning with your basic details verification. This action will guarantee a trouble-free account establishment.",
    icon: "/dmt/e1.png",
  },
  {
    number: 2,
    title: "Document Upload and Checking",
    text: "Post the identity and address verification documents. We will test them within a short period of time so as to make sure they are safe and legal.",
    icon: "/dmt/e2.png",
  },
  {
    number: 3,
    title: "Video KYC",
    text: "Authentication is simple and secure as you complete your Video KYC and verify your identity. This is to help secure your account and make certain it is authentic",
    icon: "/dmt/e3.png",
  },
  {
    number: 4,
    title: "Select Plan",
    text: "Select the plan that fits you well. We provide flexible packages that would allow you to commence providing services easily",
    icon: "/dmt/e4.png",
  },
];

function page() {
  const data = {
    id: 1,
    subheading: "DMT",
    heading: "Paisa pohchaaye, rishton ko jode",
    description:
      "Send money to your loved ones in any part of India. Our domestic money transfer service is safe and secure and will always keep the transactions quick and safe",
    bgImage: "/dmt/dmtbg.png",
    centerImage: "/dmt/Newdmt.png",
  };

  const section2data = {
    img1: "/dmt/dmt.png",
    img2: "/dmt/Newdmt1.png",
    color: "#CDFFEF",
  };
  // const dmtData = {
  //   subheading: 'DMT',
  //   heading: 'Domestic money transfer',
  //   description: 'The Domestic Money Transfer (DMT) is a way of taking banking nearer to all. Customers do not have to come to the bank branch anymore; they can come to the closest assigned retailer or e-Mitra shop and transfer money to their loved ones in a safe, quick, and reliable way. This simplifies finances for both rural and urban users.',
  //   features: [
  //     'Customers using our Normal DMT service are allowed to transfer up to ₹ 25,000 per month, but in ₹5,000 slabs per transaction. It implies that a customer can send  ₹5,000 at a time, with a maximum of five times, giving a total monthly limit of ₹25,000. This is an ideal choice when it comes to regular family maintenance, utility bills, or minor financial requirements.',
  //     'To serve the higher value needs, we provide transfers up to ₹ 500,000 within one month through our X-Press DMT service with immediate settlement. This renders it the appropriate option when making business payments, emergency costs, or transfers in bulk. Big or small, all transactions are executed in a fast, secure, and trustworthy manner over our retailer network.',
  //   ]
  // };
  const faqs = [
    {
      question: "What is DMT?",
      answer: "DMT lets you send money instantly to any Indian bank account safely and securely.",
    },
    {
      question: "How fast is the transfer?",
      answer: "Most transfers are instant; some may take a few minutes depending on the bank.",
    },
    {
      question: "Is it safe to use SaveDost for DMT?",
      answer: "Yes, all transfers are encrypted and verified through bank IFSC codes.",
    },
    {
      question: "Do I need an account to transfer money?",
      answer:
        "Yes, registering allows you to manage transfers, save beneficiaries, and track history.",
    },
    {
      question: "Are there limits on transfers?",
      answer:
        "Yes, limits depend on your KYC and bank. They are displayed before confirming any transfer.",
    },
    {
      question: "What happens if the transfer fails?",
      answer:
        "Failed transfers are refunded automatically, or our support team assists immediately.",
    },
  ];
  return (
    <>
      <ServiceBanner data={data} />
      {/* <ServicesSection2 section2data={section2data} /> */}
      {/* <ServicesSection3 data={dmtData} /> */}
      <BenefitsDMT />
      <section>
        <div className="px-4 lg:px-0 py-16 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 ">
            <Image
              src="/dmt/earnbg.png"
              width={600}
              height={500}
              alt="Happy professional with a tablet"
              className="rounded-lg absolute top-53 -left-10 object-contain  h-3/4"
            />

            <div className="relative md:col-span-3">
              <div className="relative z-10 h-full">
                <div className="max-w-xl">
                  <h3 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                    Earn More, Grow More With Religare
                  </h3>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                    Collaborate with Religare and open new sources of income with our Domestic Money
                    Transfer (DMT) services. You can also make commissions as a DMT retailer by
                    assisting your customers in sending money in a safe and reliable manner.
                  </p>
                </div>
                <div className=" max-w-md mx-auto lg:mx-0">
                  <Image
                    src="/dmt/earn.png"
                    width={600}
                    height={600}
                    alt="Happy professional with a tablet"
                    className="rounded-lg md:absolute bottom-10 left-0  flex align-bottom  items-baseline"
                  />
                  <div className="hidden  absolute top-1/3 right-40 w-16 h-16 bg-white rounded-lg shadow-lg md:flex items-center justify-center animate-bounce">
                    {" "}
                    <Image
                      src="/icons/dmt1.png"
                      width={70}
                      height={70}
                      alt="icons"
                      className="pb-2"
                    />
                  </div>
                  <div className="absolute top-1/2 right-20 w-16 h-16 bg-white rounded-lg shadow-lg hidden md:flex items-center justify-center animate-pulse">
                    {" "}
                    <Image
                      src="/icons/dmt2.png"
                      width={70}
                      height={70}
                      alt="icons"
                      className="pb-2"
                    />
                  </div>
                  <div className="absolute bottom-1/3 right-50 w-16 h-16 bg-white rounded-lg shadow-lg hidden md:flex  items-center justify-center animate-bounce">
                    {" "}
                    <Image
                      src="/icons/dmt3.png"
                      width={70}
                      height={70}
                      alt="icons"
                      className="pb-2"
                    />
                  </div>
                  <div className="absolute top-1/2 left-0 w-16 h-16 bg-white rounded-lg shadow-lg hidden md:flex  items-center justify-center animate-pulse">
                    {" "}
                    <Image
                      src="/icons/dmt4.png"
                      width={70}
                      height={70}
                      alt="icons"
                      className="pb-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 md:col-span-2 bg-white z-10 pb-10">
              {steps.map((step) => (
                <StepCard
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  text={step.text}
                  icon={step.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <div
        className="w-full "
        style={{
          background: "linear-gradient(90deg, #01202A 0%, #01202A 25%, #0B4051 50%, #095C8C 75%, #095C8C 100%)"
        }}
      >
        <div className='grid md:grid-cols-2 max-w-7xl mx-auto px-4 md:px-0'>
          <div className=" text-white flex items-center justify-center " >
            <div className="container mx-auto py-12 max-w-4xl">
              <div className="text-left mb-12">
                <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                  Paise bhejo instantly, <br />kahin bhi kabhi bhi
                </h3>
                <p className="mt-6 max-w-2xl text-gray-400">
                  Remit funds safely and in real time to your family members anywhere, anytime. Our Domestic Money Transfer (DMT) service makes it easy, secure, and quick to transfer funds.
                </p>
              </div>
              <div className="mb-12">
                <Link href="/signup" className=" text-white font-bold py-3 px-8 rounded-full transition-colors duration-300" style={{
                  background: "linear-gradient(90deg,#358EBA  0%, #24576C 100%)"
                }}>
                  Register now
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Image src="/dmt/dmtbanner.png" width={400} height={400} alt="Money transfer service" className="object-contain w-full h-full pt-8" />
          </div>
        </div>

      </div> */}

      <DmtWork />
      <AdvantageDMT />
      {/* <ContactBanner /> */}
      <FAQ
        faqs={faqs}
        subheading="Find answers to common questions about domestic money transfers and transaction support."
      />
    </>
  );
}

export default page;
