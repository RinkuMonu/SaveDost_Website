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

export default function page() {
  const data = {
    subheading: "TAXI INSURANCE",
    heading: "Har Ride Secure, Tension Bilkul Door",
    description:
      "Your taxi works hard every day to make sure it’s protected. Get reliable taxi insurance that covers damages, liabilities, and risks so your income never stops.",
    bgImage: "/image/4-1.jpg",
    paymentHref: "/service-payment/taxi-insurance",
    paymentLabel: "Pay Taxi Insurance Premium",
    // centerImage: '/image/taxi.png',
  };
  const aboutData = {
    badge: "About Us",
    heading: "Insurance That Protects Your Daily Earnings",
    paragraphs: [
      "Your taxi works hard every day, and so do you. At SaveDost, we provide reliable taxi insurance that safeguards your vehicle and your income from unexpected risks like accidents, theft, and legal liabilities.",
      "We aim to make insurance easy to understand and quick to access, helping drivers stay protected while focusing on their rides and earnings.",
    ],
    stats: [
      { value: "3.5 Lakh+", label: "Happy Users" },
      { value: "98%", label: "Claim Success Rate" },
      { value: "24/7", label: "Support Available" },
    ],
    image: {
      src: "/insurance/about.jpg",
      alt: "Bike Insurance",
    },
    floatingCard: {
      iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Instant Policy Activation",
      desc: "Get covered in minutes with our streamlined digital process",
    },
  };

  // const featuresData = {
  //     sectionTitle: "Comprehensive Bike Insurance Features",
  //     sectionDesc:
  //         "Protect your bike with our extensive coverage options designed to give you complete peace of mind on every ride.",
  //     features: [
  //         {
  //             icon: Shield,
  //             title: "Comprehensive Coverage",
  //             description:
  //                 "Complete protection against theft, accidents, natural disasters, and third-party liabilities.",
  //         },
  //         {
  //             icon: Clock,
  //             title: "Instant Policy Issuance",
  //             description:
  //                 "Get your bike insured in minutes with our quick and hassle-free digital process.",
  //         },
  //         {
  //             icon: DollarSign,
  //             title: "Affordable Premiums",
  //             description:
  //                 "Competitive pricing with flexible payment options and attractive discounts for safe riders.",
  //         },
  //         {
  //             icon: FileText,
  //             title: "Easy Claims Process",
  //             description:
  //                 "Simple, transparent claims settlement with minimal documentation and quick approvals.",
  //         },
  //         {
  //             icon: Headphones,
  //             title: "24/7 Customer Support",
  //             description:
  //                 "Round-the-clock assistance for policy queries, claims, and roadside emergencies.",
  //         },
  //         {
  //             icon: Award,
  //             title: "Cashless Repairs",
  //             description:
  //                 "Access to 5000+ network garages across India for hassle-free cashless repairs.",
  //         },
  //     ],
  // };

  const whydata = {
    title1: "Why Choose TaxiSecure",
    title2: "India's Most Trusted Taxi Insurance Partner",
    desc: "We provide comprehensive bike insurance solutions with unmatched benefits and customer service. Join over 1 million satisfied riders.",
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
    // title1: "Fast Insurance in 4 Steps",
    title2: "Get Insured in 4 Easy Steps",
    desc: "Paperless, quick, and simple get full four-wheeler coverage online in minutes",
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
          "Receive your insurance policy immediately via email and SMS. Ride safely and confidently from day one.",
      },
    ],
  };

  const faqs = [
    {
      question: "Is taxi insurance mandatory in India?",
      answer:
        "Yes, third-party insurance is legally mandatory for all commercial taxis under the Motor Vehicles Act. It protects against liabilities arising from injury, death, or property damage to third parties.",
    },
    {
      question: "How is the premium calculated?",
      answer:
        "Taxi insurance premium is calculated based on factors such as vehicle type, age, Insured Declared Value (IDV), location, selected add-on covers, and previous claim history.",
    },
    {
      question: "What is IDV in taxi insurance?",
      answer:
        "IDV (Insured Declared Value) is the current market value of your taxi. It represents the maximum amount payable by the insurer in case of total loss or theft of the vehicle.",
    },
    {
      question: "How do I file a claim?",
      answer:
        "You can file a claim online through our website or by contacting our customer support helpline. Cashless repairs are available at our network garages for a smooth claim experience.",
    },
    {
      question: "What are add-on covers?",
      answer:
        "Add-on covers are optional protections such as zero depreciation, engine protection, roadside assistance, and return to invoice. These enhance coverage beyond the standard policy.",
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
      rep: "Kailash Singh",
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
      <Herobanner data={data} />
      <AboutSection aboutData={aboutData} />
      {/* <Features data={featuresData} /> */}
      <Process processdata={processdata} />
      <WhyChooseUs whydata={whydata} />
      <FAQ faqs={faqs} />
      <DynamicTable headers={headers} rows={rows} />
      <ContactBanner />
    </main>
  );
}
