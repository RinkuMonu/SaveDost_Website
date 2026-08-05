import Image from "next/image";
import Link from "next/link";
import React from "react";

const loanOptions = [
  {
    title: "Instant Loan",
    description: "Explore a fast, guided digital journey for urgent financial needs.",
    imageUrl: "/loan/loan53d.png",
    link: "/instant-loan",
  },
  {
    title: "Personal Loan",
    description: "Flexible funding for planned expenses and urgent personal needs.",
    imageUrl: "/loan/personal3d.png",
    link: "/loan/personal-loan",
  },
  {
    title: "Home Loan",
    description: "Finance a new home, property purchase, or renovation with confidence.",
    imageUrl: "/loan/Home-vec3d.png",
    link: "/loan/home-loan",
  },
  {
    title: "Car Loan",
    description: "Explore convenient finance options for your next car.",
    imageUrl: "/loan/carloan3d.png",
    link: "/loan/car-loan",
  },
  {
    title: "Business Loan",
    description: "Access capital to operate, expand, and strengthen your business.",
    imageUrl: "/loan/loan53d.png",
    link: "/loan/business-loan",
  },
  {
    title: "Construction Equipment Loan",
    description: "Finance machinery and equipment for construction projects.",
    imageUrl: "/image/construction-vector.png",
    link: "/loan/construction-equipment-loan",
  },
];

const LoanCard = ({ title, description, imageUrl, link }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#cfe8ef] bg-white p-5 shadow-[0_12px_35px_rgba(12,61,76,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(12,61,76,0.14)]">
      <div className="mb-4 flex h-44 w-full items-center justify-center rounded-xl bg-[#eff8fa]">
        <Image
          width={220}
          height={180}
          src={imageUrl}
          alt={title}
          className="h-40 w-full object-contain p-3 transition duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-extrabold text-[#0C3D4C]">{title}</h3>
      <p className="mt-2 grow text-sm leading-6 text-slate-600">{description}</p>
      <Link
        href={link}
        className="mt-5 inline-flex w-fit items-center rounded-full bg-[#026381] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0C3D4C]"
      >
        Explore loan
      </Link>
    </article>
  );
};

const LoanOptions = () => {
  return (
    <section className="bg-[#f6fafb] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0289ad]">
            Loan solutions
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0C3D4C] lg:text-4xl">
            Find a loan for every goal
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            Compare our loan categories and choose the option that best matches your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loanOptions.map((loan, index) => (
            <LoanCard key={loan.link} {...loan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanOptions;
