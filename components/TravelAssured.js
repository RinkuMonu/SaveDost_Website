"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TravelAssured({ data }) {
  const { title = "Air Travel Assured", cards = [], imageUrl = "/booking/air1.png" } = data || {};

  return (
    <section
      className="relative w-full py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #01202A 0%, #01202A 25%, #0B4051 50%, #095C8C 75%, #095C8C 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Section: Text and Cards */}
        <div className="flex-1 text-white text-center md:text-left">
          <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">{title}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-10 mb-10 max-w-lg md:max-w-none mx-auto md:mx-0">
            {cards.map((card, index) => (
              <div
                key={index}
                className="backdrop-blur-sm border border-[#3080A6] rounded-lg p-5 text-center"
              >
                <h3 className="text-xl font-bold mb-1 leading-tight whitespace-pre-line">
                  {card.title}
                </h3>
                <p className="text-sm opacity-80">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Book Now Button */}
          <Link
            href="/coming-soon"
            className="bg-[#0C3D4C] hover:bg-[#082A34] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors"
            style={{
              background: "linear-gradient(90deg,#358EBA 0%, #24576C 100%)",
            }}
          >
            Book now
          </Link>
        </div>

        {/* Right Section: Image */}
        <div className=" flex justify-center md:justify-end">
          <div className=" ">
            <Image
              src={imageUrl}
              alt="Airplane flying over a globe with a location pin and paper plane"
              width={600}
              height={600}
              quality={100}
              className="lg:absolute bottom-0 right-0 hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
