import Image from "next/image";
import React from "react";

const PartnersSection = () => {
  const partnerLogos = [
    "/bank/idfc-first.png",
    "/bank/bandhan.png",
    "/bank/rbl.png",
    "/bank/au-sfb.png",
    "/bank/kotak.png",
    "/bank/axisbank.png",
    "/bank/bajaj-finserv.png",
    "/bank/yes-bank.png",
    "/bank/tata-capital.png",
    "/bank/jana-sfb.png",
  ];

  // Define the explicit row pattern for inverted triangle
  const rowPattern = [4, 3, 2, 1];
  const triangleRows = [];
  let startIndex = 0;

  for (let count of rowPattern) {
    const row = partnerLogos.slice(startIndex, startIndex + count);
    if (row.length) triangleRows.push(row);
    startIndex += count;
    if (startIndex >= partnerLogos.length) break;
  }

  return (
    <section
      className="w-full bg-cover bg-center mt-10 mb-20 px-4 lg:px-0"
      style={{
        backgroundImage: "url('/loan/partnerbg.png')",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg font-semibold text-[#0C3D4C]">Partners</p>
        <h2 className="mt-2 text-3xl font-bold text-[#0C3D4C] md:text-4xl">
          Strengthened through powerful partnerships
        </h2>

        <div className="mt-12 flex flex-col items-center gap-6">
          {triangleRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
              {row.map((logo, index) => (
                <div
                  key={index}
                  className="flex w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] 
                             h-auto items-center justify-center rounded-lg 
                             border border-gray-200 px-2 shadow-sm 
                             transition-shadow duration-300 hover:shadow-md bg-white"
                >
                  <Image
                    src={logo}
                    width={200}
                    height={200}
                    alt={`Partner Logo ${rowIndex}-${index}`}
                    className="w-full h-24 object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
