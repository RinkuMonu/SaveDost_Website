import Link from "next/link";
import React, { useState } from "react";

// --- Data for the cards ---
const cardData = [
  {
    id: 1,
    title: "Personal",
    mainTitle: "Personal Banking",
    description:
      "Get customized banking support for your unique needs. Our team will help you with account services, transactions, and all your personal banking requests.",
    img: "/aeps/s1.jpg",
  },
  {
    id: 2,
    title: "Business",
    mainTitle: "Business Solutions",
    description:
      "Grow your business with our complete range of business banking services. We offer customized solutions for businesses of all sizes, from small shops to large stores.",
    img: "/aeps/s2.png",
  },
  {
    id: 3,
    title: "Freelance",
    mainTitle: "Freelancer Hub",
    description:
      "A dedicated financial support center for freelancers and professionals. Our system helps you easily manage your income, taxes, and business finances.",
    img: "/aeps/s3.png",
  },
];

// --- Arrow Icon Component ---
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const Video = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4  lg:px-20 pb-10">
      <div className="w-full max-w-7xl mx-auto">
        <header className="mb-8 md:mb-12 px-4 lg:px-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-4xl font-bold leading-tight text-[#0C3D4C]">
                Your data and money are protected with advanced authentication
              </h3>
            </div>
            <div className="md:w-1/3 mt-4 flex flex-col items-start">
              <p className="text-base max-w-sm mb-4">
                To protect you at all times, we use strong security measures and Aadhaar
                authentication to ensure every transaction is fully secured and protected.
              </p>
              <Link
                href="/contact"
                className="bg-[#018EDE] w-full text-center hover:bg-[#018EDE]/90 cursor-pointer text-white font-semibold py-3 px-6 rounded-full  transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </header>
        <main className="flex w-full md:gap-4 h-[400px]">
          {cardData.map((card, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={card.id}
                className={`
                  relative rounded-3xl overflow-hidden
                  transition-all duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)] 
                  ${isActive ? "md:flex-[4] shape1" : "flex-[1] cursor-pointer "}
                `}
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                onClick={() => !isActive && setActiveIndex(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="relative w-full h-full p-6 flex flex-col justify-end">
                  <div
                    className={`
                      absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                      transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                      ${isActive ? "opacity-0 scale-90" : "opacity-100 rotate-270 scale-100"}
                    `}
                  >
                    <h2 className=" md:text-3xl font-bold whitespace-nowrap text-white/80">
                      {card.title}
                    </h2>
                  </div>
                  <div
                    className={`w-full h-full flex flex-col justify-end transition-opacity duration-800 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="mb-auto pt-8">
                      <h2 className="text-xl md:text-4xl font-bold text-white mb-2">
                        {card.mainTitle}
                      </h2>
                      <p className="text-gray-200 max-w-md">{card.description}</p>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={handleNext}
                        className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-[#018EDE] hover:bg-[#018EDE]/90 cursor-pointer flex items-center justify-center text-white transition-colors duration-300"
                      >
                        <ArrowIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default Video;
