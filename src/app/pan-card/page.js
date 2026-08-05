import React from "react";
import ServiceBanner from "../../../components/ServiceBanner";
import Image from "next/image";
import OnboardingProcess from "../../../components/OnboardingProcess";
import BenefitsSection2 from "../../../components/BenefitsSection2";
import PartnersSection from "../../../components/PartnersSection";
import TestimonialSlider from "../../../components/TestimonialSlider";
import ContactBanner from "../../../components/ContactBanner";
import PancardApplyOnline from "../../../components/PancardApplyOnline";
import PancardAllotment from "../../../components/PancardAllotment";
import PancardAllotment2 from "../../../components/PancardAllotment2";
import PanMoreinfo from "../../../components/PanMoreinfo";
import ReprintOfPANCard from "../../../components/ReprintOfPANCard";
import PanCorrectionCard from "../../../components/PanCorrectionCard";

function page() {
  const data = {
    id: 1,
    subheading: "PAN Card Services",
    heading: "Apply, Update, or Reprint Your PAN Card",
    description:
      "Access convenient PAN services for new applications, corrections, and reprints with clear guidance throughout the process.",
    bgImage: "/pan/panbg.png",
    centerImage: "/pan/pan1.png",
    buttonText: "Explore PAN Services",
    buttonHref: "#pan-apply",
  };
  const LetterCircle = ({ letter, index }) => (
    <div
      className="flex  items-center justify-center rounded-full  lg:p-1 lg:h-12 lg:w-12"
      key={index}
    >
      <div className="flex h-full w-full items-center justify-center">
        <span className="font-aboreto  md:text-4xl font-medium lg:text-6xl">{letter}</span>
      </div>
    </div>
  );
  const info = [
    {
      title: "Apply now and get your PAN instantly",
      description:
        "Apply online with SaveDost, submit your details and documents quickly, and receive your acknowledgment in seconds. Our streamlined process makes it easy to complete your application, upload identity and address proofs, and track your PAN status in real time. Get your PAN delivered conveniently to your registered address.",
      image: "/image/pan-sideimg13d.png",
    },
    {
      title: "Your Identity, Your Power",
      description:
        "Applying for your PAN Card with SaveDost is simple, secure, and fully online. Submit your details, upload the required documents, and receive instant acknowledgment. Our reliable verification process ensures accuracy while real-time tracking keeps you informed at every step. Get your PAN delivered quickly to your registered address and manage your financial and tax activities with confidence.",
      image: "/image/panimg-23d.png",
    },
  ];
  const text = "PAN Card";
  return (
    <>
      <ServiceBanner data={data} />
      <section>
        <div
          className={`relative py-5 lg:pb-0 lg:pt-20 overflow-y-visible`}
          style={{ backgroundColor: "#F9EBDF" }}
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-0 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="relative ">
                <div className="flex flex-wrap gap-6">
                  {text.split(" ").map((word, wordIndex) => (
                    <div key={wordIndex} className="flex space-x-1 amiri-quran-regular">
                      {word.split("").map((char, index) => (
                        <LetterCircle key={index} letter={char} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:block relative h-[200px] mt-10 md:mt-0 ">
                <div
                  className=" lg:absolute bottom-0 right-0 lg:w-[700px] lg:h-[400px] z-20  "
                  style={{ overflow: "hidden" }}
                >
                  <Image
                    src={"/pan/pan2.png"}
                    alt="loan-section"
                    fill
                    className=" lg:right-0"
                    style={{ objectPosition: "right" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white px-4 sm:px-6 lg:px-8">
        <OnboardingProcess />
      </div>
      <BenefitsSection2 compact />
      {/* <VerticalTimeline /> */}
      {/* <PancardFeatures /> */}
      <section className="strippps bg-[#f3f9fb] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
            PAN Services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
            Simple, secure, and convenient PAN support
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Understand the application process and the importance of PAN for identity and financial
            transactions.
          </p>
        </div>
        <div className="mx-auto max-w-7xl space-y-7">
          {info.map((item, index) => (
            <div
              key={index}
              className={`grid items-center gap-7 overflow-hidden rounded-[26px] border border-[#d7e9ed] bg-white p-6 shadow-[0_12px_30px_rgba(12,61,76,0.07)] sm:p-8 lg:grid-cols-[1fr_.42fr] ${
                index % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
              }`}
            >
              {/* Text Content */}
              <div>
                <h3 className="text-2xl font-extrabold text-[#0C3D4C] mb-4">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{item.description}</p>
              </div>

              {/* Image Section */}
              <div className="flex min-h-[230px] items-center justify-center rounded-2xl bg-[#eaf6f9] p-4">
                <Image
                  width={200}
                  height={200}
                  src={item.image}
                  alt={item.title}
                  className="h-[210px] w-auto max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <PancardApplyOnline />
      <section className="bg-[#f3f9fb] px-4 py-8 sm:px-6 lg:px-8">
        <PancardAllotment />
      </section>
      <section className="bg-[#f3f9fb] px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <PancardAllotment2 />
      </section>

      {/* <DocumentsRequired2/> */}
      <ReprintOfPANCard />
      <section className="py-16">
        <PanCorrectionCard />
      </section>
      <PanMoreinfo />

      <PartnersSection />

      <TestimonialSlider />

      <ContactBanner />
    </>
  );
}

export default page;
