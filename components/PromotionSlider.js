"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function PromotionSlider({ sliderImages }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, dots: true } },
    ],
  };

  return (
    <section className="bg-[#FFF2D5] w-full pt-8 pb-0">
      <div className="  px-4 lg:px-8">
        <Slider {...settings}>
          {sliderImages.map((image) => (
            <div key={image.id} className="p-2 flex items-center h-full justify-center">
              <Image
                src={image.url}
                alt={image.alt}
                width={400}
                height={200}
                className="w-full h-auto   shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
