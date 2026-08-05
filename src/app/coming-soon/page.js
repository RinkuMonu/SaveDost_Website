"use client";
import React, { useEffect, useState } from "react";

export default function ComingSoon() {
  const text = "Coming Soon";
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prev) => (prev < text.length ? prev + 1 : prev));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className=" flex items-center justify-center  px-6 relative overflow-hidden pt-16 bg-gradient-to-b from-[#E6F6FF] to-[#bce2f7] ">
        <div className="relative max-w-2xl w-full text-center space-y-1">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-[#0C3D4C] flex flex-wrap justify-center">
            {text.split("").map((char, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-300 ${
                  i < visibleLetters ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-gray-600 text-lg md:text-xl font-medium opacity-0 animate-fade-in delay-[1600ms]">
            Something exciting is on the way. Stay tuned!
          </p>

          <div className="flex flex-col items-center justify-center ">
            <iframe
              src="https://lottie.host/embed/5a2a7c49-10f0-4b5f-9402-906c8963249c/CKJ8qXXbCr.lottie"
              height={500}
              width={500}
            ></iframe>
          </div>
        </div>

        <style jsx>{`
          .animate-fadeIn {
            animation: fadeIn 2s ease-in forwards;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
        <style jsx>{`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fadeIn 1.5s ease-in-out forwards;
          }
        `}</style>
      </div>
    </>
  );
}
