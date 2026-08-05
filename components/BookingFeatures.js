"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// This helper component remains unchanged
const TextRenderer = ({ text = "", boldWords = [] }) => {
  return (
    <div className="font-semibold text-lg leading-snug text-end pt-5">
      {text.split("\n").map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {lineIndex > 0 && <br />}
          {line.split(" ").map((word, wordIndex) => {
            const isBold = boldWords.includes(word);
            return (
              <span key={wordIndex} className={isBold ? "font-bold" : ""}>
                {word}{" "}
              </span>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default function BookingFeatures({ title = "Default Title\nSecond Line", features = [] }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: features.length > 2,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const [titleLine1, titleLine2] = title.split("\n");

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C3D4C] leading-tight">
            {titleLine1}
            <br />
            {titleLine2}
          </h2>
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              aria-label="Previous Slide"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#0C3D4C] text-[#0C3D4C] hover:bg-[#0C3D4C]/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              aria-label="Next Slide"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#0C3D4C] text-[#0C3D4C] hover:bg-[#0C3D4C]/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {features.map((feature, index) => (
              <div key={index} className="px-3 py-4">
                {/* highlight-start */}
                <div className="relative h-36 overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                  <Image
                    src={feature.cardBgImageUrl}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="relative flex z-20  items-center justify-around  px-6  py-5 h-full">
                    <div className="flex-shrink-0 w-18 h-18">
                      <Image
                        src={feature.iconUrl}
                        width={200}
                        height={200}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-[#0C3D4C]">
                      <TextRenderer text={feature.text} boldWords={feature.boldWords} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
