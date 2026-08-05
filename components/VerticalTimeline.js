"use client";
import React, { useRef, useEffect, useState } from "react";

const steps = [
  { id: 1, description: "Apply Online", position: "right" },
  { id: 2, description: "Redirect to Protean Portal", position: "left" },
  { id: 3, description: "Enter Application Details", position: "right" },
  { id: 4, description: "Generate Token Number", position: "left" },
  { id: 5, description: "Give Personal and Income Information.", position: "right" },
  { id: 6, description: "Upload Documents", position: "left" },
  { id: 7, description: "Verify & Confirm", position: "right" },
  { id: 8, description: "Payment & Fees", position: "left" },
  { id: 9, description: "Track Application Status", position: "right" },
];

const VerticalTimeline = () => {
  const containerRef = useRef(null);
  const lastStepRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current && lastStepRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const lastStepTop = lastStepRef.current.getBoundingClientRect().top;
      setLineHeight(lastStepTop - containerTop + 0);
    }
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto text-center px-4 lg:px-0 pt-32 ">
        <h3 className="text-[#0C3D4C] text-2xl lg:text-4xl font-bold">
          Har Step Ka Experience, Smooth Aur Smart!
        </h3>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et
          accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos
          At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus
          odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio
          dignissimos ducimus odio dignissimos
        </p>
      </div>
      <div
        ref={containerRef}
        className="relative px-4 md:px-0 pt-8 pb-16  overflow-hidden md:max-w-lg  lg:max-w-4xl mx-auto"
      >
        {/* Dynamic dashed line */}
        <div
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 border-l-2 border-dashed border-[#24576C]"
          style={{ height: `${lineHeight}px` }}
        ></div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            ref={index === steps.length - 1 ? lastStepRef : null}
            className={`mb-10 lg:flex items-center w-full ${step.position === "right" ? "justify-end" : ""}`}
          >
            {step.position === "left" && (
              <div className="lg:flex justify-end md:pl-8">
                <div className="flex items-center justify-end gap-2 bg-[#E6F6FF] rounded-full shadow-md lg:w-md text-[#0C3D4C] font-semibold">
                  <p className="ps-4 break-words text-base">{step.description}</p>
                  <div className="relative z-10 bg-[#24576C] text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg flex-shrink-0">
                    <span className="font-semibold text-2xl">{step.id}</span>
                  </div>
                </div>
              </div>
            )}

            {step.position === "right" && (
              <div className="lg:flex justify-start md:pr-8">
                <div className="bg-[#E6F6FF] flex items-center gap-2 rounded-full shadow-md lg:w-md text-[#0C3D4C] font-semibold">
                  <div className="relative z-10 bg-[#24576C] text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg flex-shrink-0">
                    <span className="font-semibold text-2xl">{step.id}</span>
                  </div>
                  <p className="pe-4 break-words text-base">{step.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default VerticalTimeline;
