import { CornerUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

// Reusable component for each step in the process
const ProcessStep = ({ icon, text }) => (
  <div className="flex flex-col items-center text-center">
    <div className="p-1.5 border-2 border-dashed border-[#018EDE] rounded-full relative w-62 h-62">
      <div className="bg-[#018EDE] w-52 h-52 rounded-full flex flex-col items-center justify-center p-4 text-white  absolute left-0 top-5">
        <Image src={icon} width={60} height={60} alt="icons" className="pb-2" />
        <span className="font-medium ">{text}</span>
      </div>
      <CornerUpRight className=" hidden lg:block text-[#018EDE] absolute top-28 -right-8 lg:-right-10" />
    </div>
  </div>
);

const steps = [
  { icon: "/dmt/dw1.png", text: "Visit Agent" },
  { icon: "/dmt/dw2.png", text: "Share Details" },
  { icon: "/dmt/dw3.png", text: "Initiate Transfer" },
  { icon: "/dmt/dw4.png", text: "Instant Success" },
];

export default function DmtWork() {
  return (
    <section className="bg-[#f0f8ff]">
      <div className="px-4 lg:px-0 py-16">
        <div className="w-full max-w-7xl mx-auto text-center">
          {/* Header Section */}
          <div className="mb-12">
            <p className="text-[#0C3D4C] uppercase font-semibold text-sm">How it work</p>
            <h3 className="text-2xl lg:text-4xl font-bold text-[#0C3D4C] mt-2">
              Transparent Steps, Seamless Service
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-8 md:gap-4">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <ProcessStep icon={step.icon} text={step.text} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
