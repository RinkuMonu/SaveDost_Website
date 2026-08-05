import React from "react";

const ServiceCard = ({ service, isFeatured }) => {
  const baseClasses =
    "flex items-center justify-center h-24 sm:h-28 rounded-2xl font-bold text-2xl cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl";

  const featuredClasses = "bg-[#018EDE] text-white shadow-lg";
  const defaultClasses =
    "bg-white text-[#018EDE] border-2 border-[#018EDE] hover:bg-sky-50 hover:border-sky-400";

  return (
    <div
      style={{ cursor: "default" }}
      className={`${baseClasses} ${isFeatured ? featuredClasses : defaultClasses}`}
    >
      {service}
    </div>
  );
};

const AboutService = () => {
  // An array of service names to be displayed in the grid.
  const services = [
    "BBPS",
    "Bill Payments",
    "Recharges ",
    "Insurances ",
    "Booking ",
    "Credit Card",
    "pancard ",
  ];

  return (
    <div className="pb-16 px-4 lg:px-0">
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl lg:text-4xl font-bold text-[#0C3D4C] leading-tight">
              Your Need,
              <br />
              Our Service
            </h3>
          </div>

          {/* Right Section: Description and Services Grid */}
          <section className="lg:col-span-3">
            <p className="text-[#5D5D5D] mb-10 md:text-base  leading-relaxed">
              We deliver reliable and tailored solutions to meet your business needs, streamline
              operations, and help you achieve growth and success.
            </p>
          </section>
        </div>
        {/* Grid of Service Cards */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} isFeatured={index === 0} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AboutService;
