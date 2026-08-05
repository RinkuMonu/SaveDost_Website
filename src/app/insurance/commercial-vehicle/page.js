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
    subheading: "Commercial Vehicle Insurance",
    heading: "Jab Gadi Safe, To Business Safe",
    description:
      "Protect your business vehicles with reliable insurance coverage that safeguards against accidents, damages, theft, and third-party liabilities so your operations never slow down.",
    bgImage: "/image/1.jpg",
    paymentHref: "/service-payment/commercial-vehicle-insurance",
    paymentLabel: "Pay Commercial Vehicle Premium",
    // centerImage: '/image/truck.png',
  };
  const aboutData = {
    badge: "About Us",
    heading: "Your Reliable Partner in Commercial Vehicle Insurance",
    paragraphs: [
      "We know your commercial vehicle is more than just a means of transport as it is the backbone of your business. That’s why we focus on providing comprehensive insurance solutions that safeguard your vehicles, your cargo, and your livelihood.",
      "With years of experience in the insurance sector, we’ve supported countless businesses in finding coverage that fits their specific needs. Our commitment to transparent policies, fast claim settlements, and exceptional customer service makes us a trusted partner for commercial vehicle owners across India.",
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
    title1: "Why Choose CommercialSecure",
    title2: "India's Most Trusted Commercial Insurancess Partner",
    desc: "We provide comprehensive commercial insurance solutions with unmatched benefits and customer service. Join over 1 million satisfied riders.",
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
    desc: "Paperless, quick, and simple get full coverage online in minutes for your Business Vehicle.",
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
      question: "How is the premium calculated?",
      answer:
        "The premium is calculated based on factors such as vehicle type, age, location, usage, selected add-on covers, and your previous claim history.",
    },
    {
      question: "What is IDV?",
      answer:
        "Insured Declared Value (IDV) is your vehicle’s current market value. It represents the maximum amount you can claim in case of total loss or theft.",
    },
    {
      question: "How do I file a claim?",
      answer:
        "You can file a claim through our 24/7 helpline, mobile app, or website. Cashless claims are available at 5000+ network garages.",
    },
    {
      question: "Can I transfer my insurance to a new vehicle?",
      answer:
        "No, insurance policies are vehicle-specific and cannot be transferred to a new vehicle. However, the policy can be transferred to a new owner if you sell the vehicle.",
    },
    {
      question: "What are add-on covers?",
      answer:
        "Add-on covers are optional protections such as zero depreciation, engine cover, roadside assistance, and return-to-invoice that enhance your basic policy coverage.",
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
      <Herobanner data={data} />
      <AboutSection aboutData={aboutData} />
      {/* <Features data={featuresData} /> */}
      <Process processdata={processdata} />
      <WhyChooseUs whydata={whydata} />
      <DynamicTable headers={headers} rows={rows} />
      <FAQ faqs={faqs} />
      <ContactBanner />
    </main>
  );
}
