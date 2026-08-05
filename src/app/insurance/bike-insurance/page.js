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
import Herobannerbike from "../../../../components/Bike Insurance/Herobannerbike";

export default function page() {
  const data = {
    subheading: "Best Bike Insurance Online",
    heading: "Har Ride Ke Liye Smart Protection",
    description:
      "Insure your bike online quickly. Get protection against accidents, theft, or natural disasters. Compare plans, enjoy instant approval, and ride confidently without any hassle or worry",
    bgImage: "/image/3-1.jpg",
    paymentHref: "/service-payment/bike-insurance",
    paymentLabel: "Pay Bike Insurance Premium",
    // centerImage: '/image/bike-ins-banner.JPG',
  };
  const aboutData = {
    badge: "About Us",
    heading: "Your Trusted Bike Insurance Partner",
    paragraphs: [
      "Your bike is more than just a vehicle as it’s your freedom, your passion, and your everyday companion. That’s why we focus on providing bike insurance that truly protects what matters most to you.",
      "With over 10 years of experience in the insurance industry, we’ve assisted thousands of riders in getting the coverage they need. Our commitment to transparency, fast claim settlements, and customer satisfaction has made us a preferred choice for online bike insurance.",
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
  //   sectionTitle: "Elaborated Bike Insurance Plans",
  //   sectionDesc:
  //     "Get our wide range of two-wheeler insurance to cover your bike, a policy that would ensure utmost peace of mind when riding your bike.",
  //   features: [
  //     {
  //       icon: Shield,
  //       title: "Comprehensive Coverage",
  //       description:
  //         "Complete coverage against accidents, theft, natural disasters, and third-party cover.",
  //     },
  //     {
  //       icon: Clock,
  //       title: "Instant Policy Issuance",
  //       description:
  //         "In a few minutes, you can get your bike insured online in the most convenient and simple way.",
  //     },
  //     {
  //       icon: DollarSign,
  //       title: "Affordable Premiums",
  //       description:
  //         "Low charges and captivating discounts to save riders with flexibility in payment.",
  //     },
  //     {
  //       icon: FileText,
  //       title: "Easy Claims Process",
  //       description:
  //         "Uncomplicated and clear claims settlement having minimum documentation and quick approvals.",
  //     },
  //     {
  //       icon: Headphones,
  //       title: "24/7 Customer Support",
  //       description:
  //         "24/7 customer support for policy questions, claims, and roadside emergencies.",
  //     },
  //     {
  //       icon: Award,
  //       title: "Cashless Repairs",
  //       description:
  //         "Get 5000+ network garages in India to shop painlessly without cash.",
  //     },
  //   ],
  // };

  const whydata = {
    title1: "Why Choose BikeSecure?",
    title2: "India’s Most Trusted Bike Insurance Partner",
    desc: "We offer comprehensive two-wheeler insurance plans with unmatched benefits and dedicated customer support. Join over 1 million satisfied riders who trust us to protect their bikes.",
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
    title2: "Fast Insurance in 4 Steps",
    desc: "Paperless, quick, and simple get full two-wheeler coverage online in minutes.",
    steps: [
      {
        number: "1",
        icon: FileText,
        title: "Enter Vechile Details",
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
      question: "What does bike insurance cover?",
      answer: "Accidents, theft, fire, natural disasters, and third-party liabilities.",
    },
    {
      question: "Is bike insurance mandatory in India?",
      answer: "Yes, third-party bike insurance is compulsory by law.",
    },
    {
      question: "How is the bike insurance premium calculated?",
      answer: "Based on IDV, bike age, engine capacity, location, claims history, and add-ons.",
    },
    {
      question: "What is IDV in bike insurance?",
      answer: "IDV is the maximum amount paid if your bike is stolen or totally damaged.",
    },
    {
      question: "How can I file a bike insurance claim?",
      answer: "Report the incident and claim through a network garage or online process.",
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
    <main className="overflow-hidden bg-linear-to-b from-[#f7fcfd] via-white to-[#f4fafb] text-[#0c3d4c]">
      <Herobannerbike data={data} />
      <AboutSection aboutData={aboutData} />
      {/* <Features data={Features} /> */}
      <Process processdata={processdata} />
      <WhyChooseUs whydata={whydata} />
      <DynamicTable headers={headers} rows={rows} />
      <FAQ faqs={faqs} />
      <ContactBanner />
    </main>
  );
}
