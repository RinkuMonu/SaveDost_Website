import React from "react";

// This component represents a single document requirement circle.
const DocumentItem = ({ title, description }) => (
  <div className="flex flex-col items-center text-center max-w-[180px] md:max-w-[200px]">
    <div
      className="w-40 h-40 md:w-44 md:h-44 bg-[#00A9E7] rounded-full flex items-center justify-center p-4 mb-4
      shadow-[0_0_25px_8px_rgba(0,169,231,0.6)]
      animate-glow"
    >
      <h3 className="text-white text-xl font-bold leading-tight">{title}</h3>
    </div>
    <p className="text-[#0C3D4C] font-semibold">{description}</p>
  </div>
);

// This is the main section component.
const DocumentsRequired = () => {
  const documents = [
    { title: "ID Evidence", description: "Aadhaar Card, pancard, Passport, or Voter ID." },
    { title: "Address Proof", description: "Aadhaar, passport, ration card, or utility bill." },
    { title: "Income Proof", description: "Salary slips, ITR, or bank statements." },
    { title: "Employment Evidence", description: "Company ID card or employment certificate" },
    { title: "Photographs", description: "Passport-size photographs." },
  ];

  return (
    <section className=" py-10">
      <div className="max-w-6xl mx-auto px-4  lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#0C3D4C]">
            Documents Ready, Loan Easy
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-4 lg:gap-4">
          {documents.map((doc, index) => (
            <DocumentItem key={index} title={doc.title} description={doc.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsRequired;
