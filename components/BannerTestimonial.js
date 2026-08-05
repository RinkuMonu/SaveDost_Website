"use client";

import Image from "next/image";
import React from "react";

const SvgStar = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.594 2.866c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * Renders a star rating component.
 * @param {object} props - The component props.
 * @param {number} props.rating - The current rating.
 * @param {number} props.maxRating - The maximum possible rating.
 * @param {string} props.filledColor - The color of filled stars.
 * @param {string} props.emptyColor - The color of empty stars.
 */
const StarRating = ({
  rating,
  maxRating = 5,
  filledColor = "text-[#24576C]",
  emptyColor = "text-gray-300",
}) => {
  return (
    <div className="flex items-center space-x-1 mb-4">
      {Array.from({ length: maxRating }, (_, index) => (
        <SvgStar
          key={index}
          className={`w-7 h-7 ${index < Math.floor(rating) ? filledColor : emptyColor}`}
        />
      ))}
    </div>
  );
};

/**
 * Renders overlapping circular avatars of reviewers.
 * @param {object} props - The component props.
 * @param {Array<object>} props.reviewers - An array of reviewer objects.
 */
const ReviewerAvatars = ({ reviewers }) => {
  return (
    <div className="flex space-x-2">
      {reviewers.map((reviewer) => (
        <Image
          width={200}
          height={200}
          key={reviewer.id}
          className="w-10 h-10 rounded-full  shadow-md object-cover transition-transform transform hover:scale-110"
          src={reviewer.imageUrl}
          alt={`Reviewer ${reviewer.name}`}
          // Fallback image in case the random user API fails
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/60x60/e2e8f0/64748b?text=${reviewer.name.charAt(0)}`;
          }}
        />
      ))}
    </div>
  );
};

const BannerTestimonial = ({ reviewers, reviewData }) => {
  return (
    <div className="w-full max-w-lg ps-32 space-y-2">
      <StarRating rating={reviewData.rating} maxRating={reviewData.maxRating} />
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <p className="text-4xl font-bold text-[#24576C] tracking-tighter">
          {reviewData.rating.toFixed(1)}
        </p>
        <p className=" text-left font-light text-gray-600 max-w-xs">{reviewData.text}</p>
      </div>
      <ReviewerAvatars reviewers={reviewers} />
    </div>
  );
};

export default BannerTestimonial;
