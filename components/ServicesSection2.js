import Image from "next/image";
import React from "react";

function ServicesSection2({ section2data }) {
  return (
    <>
      <div style={{ backgroundColor: section2data.color }}>
        <div className="max-w-7xl mx-auto md:py-8 px-4 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex items-center">
              <Image src={section2data.img1} width={400} height={0} alt=" logo" />
            </div>
            <div>
              <Image
                src={section2data.img2}
                width={400}
                height={400}
                alt=" image"
                className=" md:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesSection2;
