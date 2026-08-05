import React from "react";
import Herobanner from "../../../../components/Bike Insurance/Herobanner";
import Features from "../../../../components/Bike Insurance/Features";
import WhyChooseUs from "../../../../components/Bike Insurance/WhyChooseUs";
import FAQ from "../../../../components/Bike Insurance/FAQ";
import Process from "../../../../components/Bike Insurance/Process";
import ContactBanner from "../../../../components/ContactBanner";
import AboutSection from "../../../../components/Bike Insurance/AboutSection";
import { Shield, Clock, DollarSign, FileText, Headphones, Award } from "lucide-react";
import { Search, CreditCard, CheckCircle } from "lucide-react";
import { BadgeCheck, Wallet, FileCheck } from "lucide-react";
import DynamicTable from "../../../../components/DynamicTable";
import CarInsuranceBannerSection from "../../../../components/Carinsurancebanner";

export default function page() {
  const aboutData = {
    badge: "About Us",
    heading: "Your Trusted Partner in Car Insurance",
    paragraphs: [
      "We know your car is more than just a vehicle, it’s your comfort, freedom, and daily companion. That’s why we provide comprehensive car insurance solutions to protect what matters most.",
      "With decades of experience, we’ve helped thousands of drivers buy and renew car insurance online, selecting plans that fit their needs. Our focus on transparency, fast claim settlements, and customer satisfaction has made us a preferred choice for online car insurance.",
    ],
    stats: [
      { value: "3.5 Lakh+", label: "Happy Users" },
      { value: "98%", label: "Claim Success Rate" },
      { value: "24/7", label: "Support Available" },
    ],
    image: {
      src: "/insurance/about.jpg",
      alt: "Car Insurance",
    },
    floatingCard: {
      iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Instant Policy Issuance",
      desc: "The process of getting your car insurance policy online takes minutes to achieve the goal in a hassle-free manner.",
    },
  };

  // const featuresData = {
  //     sectionTitle: "Comprehensive Automobile Insurance Bundle",
  //     sectionDesc: "Guard your vehicle against all damages and enjoy a wide variety of car covers, which aim at providing total relaxation whenever you are driving.",
  //     features: [
  //         {
  //             icon: Shield,
  //             title: "Comprehensive Coverage",
  //             description: "Complete coverage of accidents, theft, fire, natural disasters, and liabilities by third parties.",
  //         },
  //         {
  //             icon: Clock,
  //             title: "Instant Policy Issuance",
  //             description: "The process of getting your car insurance policy online takes minutes to achieve the goal in a hassle-free manner.",
  //         },
  //         {
  //             icon: DollarSign,
  //             title: "Affordable Premiums",
  //             description: "Competitive rates and payments and discounts for safe drivers.",
  //         },
  //         {
  //             icon: FileText,
  //             title: "Easy Claims Process",
  //             description: "Minimal documentation and simple and transparent claims settlement.",
  //         },
  //         {
  //             icon: Headphones,
  //             title: "24/7 Customer Support",
  //             description: "Policy inquiries, claims, and emergency roadside assistance.",
  //         },
  //         {
  //             icon: Award,
  //             title: "Cashless Repairs",
  //             description: "Use the local garage to get hassle-free cashless repairs throughout the nation.",
  //         },
  //     ],
  // };

  const whydata = {
    title1: "Why Choose Us",
    title2: "Why Choose SaveDost Insurance ",
    desc: "Protect your vehicle from all major risks with flexible coverage options designed for stress-free driving.",
    features: [
      {
        icon: Shield,
        title: "Comprehensive Coverage",
        description:
          "Safeguard your bike from accidents, theft, natural events, and third-party liabilities.",
      },
      {
        icon: Clock,
        title: "Instant Policy Issuance",
        description:
          "Get your bike insured online in minutes through a quick, simple, and paperless process",
      },
      {
        icon: Headphones,
        title: "24/7 Customer Support",
        description:
          "Quick and dependable assistance for claims, policies, and roadside emergencies 24/7.",
      },
      {
        icon: BadgeCheck,
        title: "Cashless Claims",
        description:
          "Get your bike repaired at 5000+ network garages across India without paying cash.",
      },
      {
        icon: Wallet,
        title: "Affordable Premiums",
        description: "Get competitive rates with flexible payment options and zero hidden charges.",
      },
      {
        icon: FileCheck,
        title: "Quick Claim Settlement",
        description: "Get your claims processed quickly with a 95% settlement rate within 7 days.",
      },
    ],
  };

  const processdata = {
    title1: "Simple & Fast Process",
    title2: "Get Insured in 4 Easy Steps",
    desc: "Paperless, quick, and simple get full four-wheeler coverage online in minutes.",
    steps: [
      {
        number: "1",
        icon: FileText,
        title: "Enter Vehicle Details",
        description:
          "Provide your Vehicle registration number and basic information in our simple, user-friendly form.",
      },
      {
        number: "2",
        icon: Search,
        title: "Compare Plans",
        description:
          "Explore and compare various vehicle insurance plans to choose the one that best fits your needs, whether it’s a new policy or renewal.",
      },
      {
        number: "3",
        icon: CreditCard,
        title: "Make Payment",
        description:
          "Select your preferred plan and complete a secure online payment using multiple convenient options.",
      },
      {
        number: "4",
        icon: CheckCircle,
        title: "Get Instant Policy",
        description:
          "Receive your insurance policy immediately via email and SMS. Ride safely and confidently from day one",
      },
    ],
  };

  const faqs = [
    {
      question: "What does car insurance cover?",
      answer: "Accidents, theft, fire, natural disasters, and third-party damages",
    },
    {
      question: "Is car insurance mandatory in India?",
      answer: "Yes, third-party insurance is compulsory by law.",
    },
    {
      question: "How is the premium calculated?",
      answer: "Based on IDV, car age, engine size, location, and add-ons.",
    },
    {
      question: "What is IDV?",
      answer: "The maximum amount paid if the car is stolen or totally damaged.",
    },
    {
      question: "How do I file a claim?",
      answer: "Report the incident and claim through a network garage or online.",
    },
  ];
  const headers = [
    { key: "rep", label: "Sales Rep" },
    { key: "dealId", label: "Deal ID" },
    { key: "amount", label: "Amount" },
    { key: "payout", label: "Payout" },
    { key: "status", label: "Status" },
  ];
  const rows = [
    {
      id: 1,
      rep: "Raghu Sharma",
      dealId: "D-9A3BEE",
      amount: "₹1000",
      payout: "₹2000",
      status: "Paid",
    },
    {
      id: 2,
      rep: "Ramkesh Meena",
      dealId: "D-8C1FDD",
      amount: "₹720",
      payout: "₹1400",
      status: "Paid",
    },
    {
      id: 3,
      rep: "Kelash Singh",
      dealId: "D-7G2HFF",
      amount: "₹680",
      payout: "₹2200",
      status: "Pending",
    },
    {
      id: 4,
      rep: "Ramesh Jaat",
      dealId: "D-6K5LMM",
      amount: "₹900",
      payout: "₹1300",
      status: "Unpaid",
    },
    {
      id: 5,
      rep: "Rajesh Yadav",
      dealId: "D-5N4PQR",
      amount: "₹1370",
      payout: "₹615",
      status: "Paid",
    },
  ];

  return (
    // REDESIGN SCOPE: Presentation wrapper only; component data and behavior remain unchanged.
    <main className="overflow-hidden bg-gradient-to-b from-[#f7fcfd] via-white to-[#f4fafb] text-[#0c3d4c]">
      <CarInsuranceBannerSection />
      <AboutSection aboutData={aboutData} />
      {/* <Features data={featuresData} /> */}

      <WhyChooseUs whydata={whydata} />
      <FAQ faqs={faqs} />
      <DynamicTable headers={headers} rows={rows} />
      <ContactBanner />
    </main>
  );
}
