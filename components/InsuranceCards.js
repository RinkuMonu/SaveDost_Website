import Image from "next/image";
import React from "react";

// Data for the insurance cards
// You can easily add or remove items from this array.
const insuranceCategories = [
  {
    title: "Bike Insurance",
    imageUrl: "/insurance/v1.jpg",
  },
  {
    title: "Private Car",
    imageUrl: "/insurance/v2.jpg",
  },
  {
    title: "Taxi Car",
    imageUrl: "/insurance/v3.jpg",
  },
  {
    title: "Commercial Vehicle",
    imageUrl: "/insurance/v4.jpg",
  },
];

// Reusable Card Component
const InsuranceCard = ({ title, imageUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg shadow-[#018EDE]/15 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      {/* Header Section */}
      {/* <div className="bg-[#018EDE] p-4 text-center">
      <h3 className="text-white font-semibold text-lg">{title}</h3>
    </div> */}

      {/* Image Section */}
      <div className="flex justify-center items-center lg:h-48 relative overflow-hidden">
        {/* Image */}
        <Image src={imageUrl} alt={title} fill className="max-h-full object-cover" />
        {/* Backdrop with Title */}
        <div className="absolute inset-0 bg-black/50 bg-opacity-10 flex justify-center items-center">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function InsuranceCards() {
  return (
    <div className=" px-4 lg:px-0 py-16">
      <div className=" max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {insuranceCategories.map((category, index) => (
            <InsuranceCard key={index} title={category.title} imageUrl={category.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InsuranceCards;
