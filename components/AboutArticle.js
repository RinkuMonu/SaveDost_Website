import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

const ReadMoreIcon = () => (
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

const ArticleCard = ({ imgSrc, category, date, title, description }) => {
  return (
    <div className="md:px-2">
      <div className="duration-300 overflow-hidden">
        <div className="relative group">
          <Image
            width={200}
            height={200}
            src={imgSrc}
            alt={title}
            className="w-full h-64 rounded-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <Link
              href="/blog/blog-details"
              className="flex shadow-[2px_2px_20px_0px_#8AADB] items-center gap-2 bg-[#018EDE] text-white py-2 px-3 rounded-lg font-semibold duration-200"
            >
              <span>Read more</span>
              <ReadMoreIcon />
            </Link>
          </div>
        </div>
        <div className="py-3 px-1">
          <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
            <a href="#" className="text-[#018EDE] font-semibold hover:underline text-base">
              {category}
            </a>
            <span className="text-[#515151]">{date}</span>
          </div>
          <h3 className="font-bold text-xl text-[#39464F] mb-2 truncate" title={title}>
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

const AboutArticle = () => {
  const sliderRef = useRef(null);

  const articles = [
    {
      imgSrc: "/home/RA.avif",
      category: "Debitis Aut",
      date: "October 1, 2025",
      title: "How Digital Payments Are Changing India",
      description:
        " Explore the rise of BBPS and and how they are simplifying payments for millions.",
    },
    // {
    //     imgSrc: "/home/RA.avif",
    //     category: "Debitis Aut",
    //     date: "September 25, 2025",
    //     title: "Tips to Secure Personal and Business Loans",
    //     description: "Learn practical strategies for faster loan approvals and managing repayments efficiently."
    // },
    {
      imgSrc: "/home/RA.avif",
      category: "Technology",
      date: "18 April 2025",
      title: "Exploring the Future of Retro Gaming and Development",
      description:
        "A deep dive into the resurgence of pixel art and classic game mechanics in the modern era.",
    },
    {
      imgSrc: "/home/RA.avif",
      category: "Debitis Aut",
      date: "September 18, 2025",
      title: "Streamlining Retail Operations with Technology",
      description:
        "Discover how tech solutions help retailers optimize inventory, billing, and customer management.",
    },
    {
      imgSrc: "/home/RA.avif",
      category: "Debitis Aut",
      date: "September 10, 2025",
      title: "Understanding Insurance for Your Family and Business",
      description:
        "A guide to choosing the right insurance plans to ensure security and financial stability.",
    },
    {
      imgSrc: "/home/RA.avif",
      category: "Debitis Aut",
      date: "September 5, 2025",
      title: "Expanding Your Business with Distributor Networks",
      description:
        "How leveraging a strong distribution network can boost sales and operational efficiency.",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="lg:pt-16 px-4 lg:px-16 sm:p-8">
      <div className="w-full max-w-7xl mx-auto space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl lg:text-4xl font-bold text-[#0C3D4C] leading-tight">
              Recent Articles
            </h3>
          </div>
          <div>
            <p className="text-[#5D5D5D] mb-5 md:text-base leading-relaxed">
              Stay updated with our latest insights and industry trends. Explore expert articles,
              tips, and thought leadership to gain knowledge and make informed decisions.
            </p>
          </div>
        </div>
        <Slider ref={sliderRef} {...sliderSettings}>
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </Slider>
        <div className="flex gap-2 justify-end py-5">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="w-12 h-12 rounded-full bg-[#018EDE] text-white hover:bg-white hover:text-[#018EDE] transition-colors duration-300 flex items-center justify-center shadow-md"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="w-12 h-12 rounded-full bg-[#018EDE] text-white hover:bg-white hover:text-[#018EDE] transition-colors duration-300 flex items-center justify-center shadow-md"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutArticle;
