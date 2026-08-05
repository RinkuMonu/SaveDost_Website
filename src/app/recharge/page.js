import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesSection3 from "../../../components/ServicesSection3";
import ContactBanner from "../../../components/ContactBanner";
import { IoMdDownload } from "react-icons/io";
import RechargeInfo from "../../../components/RechargeInfo";
import RechargeServicesSection from "../../../components/Rechargesbillpayments";

function page() {
  const data = {
    id: 1,
    subheading: "RECHARGE",
    heading: "Mobile Recharge Bina Tension",
    description:
      "Fill up your mobile immediately with SaveDost! Get the most popular plans and offers of all the major operators. Quick, safe, and dependable mobile recharge services.",
    bgImage: "/recharge/rbg.png",
    centerImage: "/MainQR.jpeg",
  };

  const aepsData = {
    subheading: "Mobile Recharge",
    heading: "Service Bina Interruption, Recharge Bina Tension.",
    description:
      "Be in touch with convenient mobile top-ups on SaveDost. Top up your prepaid account or postpaid bills within seconds using our secure system. Activate instantly and the top plans of all major operators.",
    features: [
      "Receive unique cashback and discounts on all recharges. We have a 24/7 service, so you will never experience a shortage of time or even data. Fuss-free, quick, and convenient recharge services for all your mobile requirements.",
      "Install the SaveDost app to have a smooth recharge and bill payment. Feel the ease of recharging at any time and location with a few taps on your phone.",
    ],
  };

  const logos = [
    { name: "VI", src: "/recharge/r2.png" },
    { name: "Airtel", src: "/recharge/r3.png" },
    { name: "Jio", src: "/recharge/r4.png" },
    { name: "BSNL", src: "/recharge/r6.png" },
  ];

  return (
    <>
      <div className="relative flex flex-col md:flex-row items-center justify-between pt-10">
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url(${data?.bgImage})` }}
        ></div>
        <div className=" z-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full space-y-6 md:space-y-0 items-center">
            <div className="w-full max-w-2xl overflow-hidden rounded-2xl px-4 py-8 sm:px-10 sm:py-10 lg:py-16">
              <div className=" z-10">
                <p className="text-sm font-bold uppercase tracking-widest text-white">
                  {data?.subheading}
                </p>
                <h2 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                  {data.heading}
                </h2>
                <p className="mt-4 my-8 text-base text-white max-w-md">{data.description}</p>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.utility.finunique"
                  target="blank"
                  className="pan-hero-button gap-2"
                >
                  Download App <IoMdDownload className="text-2xl animate-bounce" />
                </Link>
              </div>
            </div>

            <div className="h-full pt-16 relative hidden md:block">
              <Image
                src={data.centerImage}
                height={300}
                width={300}
                alt="center image"
                className="flex items-center justify-center absolute right-30 z-10"
              />
              <Image
                src="/recharge/br.png"
                height={300}
                width={300}
                alt="center image"
                className="flex items-center justify-center absolute top-5 right-15 animate-pulse"
              />
              <Image
                src="/recharge/br.png"
                height={300}
                width={300}
                alt="center image"
                className="flex items-center justify-center absolute right-45 bottom-5 animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 ">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0C3D4C] mb-10">
            Our Trusted Prepaid Partners
          </h2>
          <div className="flex flex-wrap gap-6 md:gap-12">
            {logos.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center w-32 h-32  border-2 border-blue-400 rounded-full bg-white transition-transform hover:scale-105"
              >
                <Image
                  src={partner.src}
                  width={100}
                  height={100}
                  alt={`${partner.name} logo`}
                  className="max-h-12  object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <RechargeServicesSection />
      <ServicesSection3 data={aepsData} />

      <RechargeInfo />

      <ContactBanner />
    </>
  );
}

export default page;
