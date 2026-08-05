import React from "react";
import Image from "next/image";

const LetterCircle = ({ letter }) => (
  <div className="flex h-20 w-20 items-center justify-center rounded-full  p-1  shadow-inner md:h-24 md:w-24">
    <div className="flex h-full w-full items-center justify-center rounded-full border-4 border-[#9D734A]">
      <span className="font-sans text-6xl font-medium text-[#9D734A] md:text-6xl">{letter}</span>
    </div>
  </div>
);

const letters = ["L", "O", "A", "N"];

function LoanS2({ imageSrc, bgColor }) {
  return (
    <section>
      <div className={`relative lg:pt-20`} style={{ backgroundColor: bgColor }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-0 ">
          <div className="lg:grid grid-cols-1 lg:grid-cols-2 ">
            <div className=" ">
              <div className="flex justify-center space-y-5 pt-3 lg:space-y-0 lg:pt-0 space-x-4 md:space-x-6 ">
                {letters.map((char) => (
                  <LetterCircle key={char} letter={char} />
                ))}
              </div>
            </div>

            <div className="hidden lg:block  h-[200px] mt-10 md:mt-0 ">
              <div className=" lg:absolute bottom-0  w-[40%] lg:h-[500px] ">
                <Image src={imageSrc} alt="loan-section" fill className="z-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoanS2;
