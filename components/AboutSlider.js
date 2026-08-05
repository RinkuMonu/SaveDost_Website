import Image from "next/image";
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-arrow-up-right"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
    />
  </svg>
);

const StoryCard = ({ imgSrc, title, text }) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden cursor-pointer h-96 md:mx-2">
      <Image
        width={200}
        height={200}
        src={imgSrc}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent "></div>
      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 text-white bg-white/10 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
      </div>
      {/* <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm border border-white text-white py-1 px-2 rounded-xl transform transition-all duration-300 group-hover:bg-white group-hover:text-black scale-90  group-hover:scale-100 ">
                <ArrowIcon />
            </div> */}
    </div>
  );
};

const AboutSlider = () => {
  const sliderRef = useRef(null);

  // Sample data for the story cards
  const stories = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2070&auto=format&fit=crop",
      title: "Empowering Small Businesses",
      text: "Discover how SaveDost helped a local retailer streamline operations and grow revenue through our innovative solutions.",
    },
    // {
    //     imgSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop",
    //     title: "Seamless Loan Approval",
    //     text: "Read about a young entrepreneur who secured a business loan effortlessly and expanded their startup across multiple districts."
    // },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
      title: "Transforming Digital Payments",
      text: "Learn how our BBPS services simplified bill payments and recharges for thousands of customers nationwide.",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
      title: "Reliable Insurance Solutions",
      text: "See how SaveDost guided a family in choosing the right insurance plan, ensuring security and peace of mind.",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      title: "Connecting Communities",
      text: "Explore the story of a distributor who leveraged our network to reach more retailers and create a stronger business ecosystem.",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className=" p-4 lg:p-0 ">
      <div className="w-full max-w-7xl mx-auto lg:py-16">
        {/* Header Section */}
        <header className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <h3 className="text-2xl lg:text-4xl font-bold text-[#0C3D4C] leading-tight">
              Har Kahani,
              <br /> Ek Nayi Shuruaat.
            </h3>
          </div>
          <div className="flex md:justify-end items-center gap-x-4">
            <p className="text-[#5D5D5D]  max-w-md hidden lg:block">
              Discover inspiring stories, expert insights, and the latest industry trends. Each
              article brings fresh perspectives to help you learn, grow, and stay informed.
            </p>
          </div>
        </header>

        <div className="flex gap-2 justify-end py-5">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="w-12 h-12 rounded-full bg-[#018EDE] text-white hover:bg-white  hover:text-[#018EDE] transition-colors duration-300 flex items-center justify-center shadow-md"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="w-12 h-12 rounded-full bg-[#018EDE] text-white hover:bg-white  hover:text-[#018EDE] transition-colors duration-300 flex items-center justify-center shadow-md"
          >
            <IoIosArrowForward />
          </button>
        </div>
        <Slider ref={sliderRef} {...sliderSettings}>
          {stories.map((story, index) => (
            <div key={index}>
              <StoryCard {...story} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutSlider;
