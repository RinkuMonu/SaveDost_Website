"use client";
import React from "react";
import ServiceBanner from "../../../components/ServiceBanner";
import ServicesSection2 from "../../../components/ServicesSection2";
import ServicesSection3 from "../../../components/ServicesSection3";
import AepsService from "../../../components/AepsService";
import HowItWorks1 from "../../../components/HowItWorks1";
import ComplianceSection from "../../../components/ComplianceSection";
import AepsFeatures from "../../../components/AepsFeatures";
import EligibilityAeps from "../../../components/EligibilityAeps";
import Video from "../../../components/Video";
import Empowering from "../../../components/Empowering";
import ContactBanner from "../../../components/ContactBanner";
import AepsAdvantages from "../../../components/AepsAdvantages";
import Aepskeyfeatures from "../../../components/Aepskeyfeatures";
import Aepstransaction from "../../../components/Aepstransaction";
import Image from "next/image";
import FAQ from "../../../components/Bike Insurance/FAQ";

function page() {
  const data = {
    id: 1,
    subheading: "AEPS",
    // heading: 'Angootha Lagao, Transaction Pao',
    heading: "Bas Angootha Lagao , Paise Turant Pao",
    // description: 'Quickly transfer funds to your loved ones anytime, anywhere with our secure and reliable Domestic Money Transfer service.',
    description: "Withdraw cash, transfer money and check balance anytime, anywhere using Aadhaar.",
    bgImage: "/aeps/aepsbg.png",
    centerImage: "/aeps/aeps1.png",
  };
  const section2data = {
    img1: "/aeps/aeps.png",
    img2: "/aeps/aeps2.png",
    color: "#FADDE1",
  };

  const aepsData = {
    subheading: "What is AePS ",
    heading: "Aadhaar Enabled Payment System",
    description:
      "AePS allows you to use banking services with just your Aadhaar number and fingerprint no card or PIN required. You can withdraw cash, check your balance, transfer funds, and deposit money safely through authorized service points.",
    features: [
      "SaveDost enables retailers to offer AePS services, making banking easier for customers and creating income opportunities for distributors. Our system ensures fast, secure, and reliable transactions.",
      "By expanding AePS services in remote areas, SaveDost helps reduce bank dependency and supports digital and financial inclusion across India.",
    ],
  };

  const aepsData2 = {
    subheading: "AePS",
    heading: "Aadhaar Enabled Payment System",
    description:
      "AePS allows you to make secure cash withdrawals, balance checks, transfers, and deposits using Aadhaar authentication at authorized agents.",
    retailer: {
      title: "Aadhaar Enabled Payment System—Retailer Partnership Program",
      features: [
        "Become an AePS retailer and turn your shop into a mini banking point. As an authorized SaveDost agent, you can offer essential banking services and earn attractive commissions on every transaction.",
        "Start with minimal investment with just a smartphone and a biometric device. Provide services like cash withdrawal, balance enquiry, fund transfer, and bill payments, making your store the go-to banking hub in your area.",
        "Our retailer program is designed for maximum profit and ease of use. Earn commissions and increase daily footfall with complete training, technical assistance, and secure RBI-approved systems for total peace of mind.",
        "Join thousands of successful retailers across India who are growing their business with AEPS. Enjoy real-time transactions and daily settlements to focus on expanding your business while we manage the technology. Register today as a SaveDost AePS retailer and start your journey.",
      ],
      image: "/aeps/e1.png",
    },
    distributor: {
      title: "Aadhaar Enabled Payment System—partnership with Distributors Program",
      features: [
        "Grow a strong and profitable banking network with SaveDost’s AePS Distributor Program. As a distributor, you can onboard retailers in your area and earn attractive commissions on every transaction made through your network. This opportunity allows you to expand your reach while becoming a key contributor to digital banking services.",
        "SaveDost supports you at every step with professional training, marketing assistance, and reliable technical support. Our proven business model helps you build a steady income while promoting financial inclusion in your region. All you need to get started is basic business understanding and a smartphone.",
        "Boost your business visibility by enabling local retailers to offer essential AePS banking services. By supporting shop owners in serving their customers better, you also grow your own distribution network through a transparent commission structure and real-time performance tracking.",
        "Join SaveDost’s trusted network of distributors across India and be part of the digital banking transformation. Take the first step toward financial independence and leadership by becoming an authorized AePS distributor today.",
      ],
      image: "/aeps/e2.png",
    },
  };

  const faqs = [
    {
      question: "What is AEPS?",
      answer:
        "AEPS lets you use your Aadhaar number and fingerprint to do basic banking like cash withdrawal, balance checks, deposits, and fund transfers without a card or PIN.",
    },
    {
      question: " What services can I do through AEPS?",
      answer:
        "You can withdraw cash, deposit money, check balance, view mini statements, and transfer funds to Aadhaar‑linked bank accounts.",
    },
    {
      question: "Do I need a bank card or PIN?",
      answer:
        "No, only your Aadhaar number and biometric (fingerprint) verification are required for AEPS transactions.",
    },
    {
      question: " Is AEPS safe to use?",
      answer:
        "Yes. Transactions use Aadhaar biometric authentication and secure verification, making them safe and simple.",
    },
    {
      question: " Where can I use AEPS?",
      answer:
        "You can use it at AEPS‑enabled service points/agents nearby & no need to visit a bank branch.",
    },
  ];
  return (
    <>
      <ServiceBanner data={data} />
      {/* <div style={{ backgroundColor: section2data.color }}>
                      <div className='max-w-7xl mx-auto lg:pt-8 px-4 lg:px-0'>
                          <div className='grid grid-cols-1 sm:grid-cols-2'>
                              <div className='flex items-center'>
                                  <Image src={section2data.img1} width={400} height={0} alt=' logo' />
                              </div>
                              <div>
                                  <Image src={section2data.img2} width={600} height={400} alt=' image' className=' ' />
                              </div>
                          </div>
                      </div>
                  </div> */}

      {/* <section className='pt-10 px-0 max-w-7xl mx-auto '>
        <div className="text-left pt-6">
          <p className="text-sm font-semibold text-[#24576C] tracking-widest uppercase">
            WHAT IS
          </p>
          <h3 className="mt-2 pb-6 text-3xl font-bold text-[#175369] sm:text-4xl">
            Aadhaar Enabled Payment System
          </h3>
        </div>
      </section> */}
      {/* <ServicesSection3 data={aepsData} /> */}
      <AepsService />
      <HowItWorks1 />
      <ComplianceSection />
      {/* <AepsAdvantages /> */}
      {/* <AepsFeatures /> */}
      {/* <Aepskeyfeatures /> */}
      {/* <EligibilityAeps data={aepsData}/> */}
      <EligibilityAeps data={aepsData2} />

      <Video />

      <Aepstransaction />
      <ContactBanner />
      <FAQ
        faqs={faqs}
        subheading="Find answers to common questions about AePS services, transactions and support."
      />
    </>
  );
}

export default page;
