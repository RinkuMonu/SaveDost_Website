"use client";

import Link from "next/link";
import { ArrowRight, Bike, Car, CarFront, Truck } from "lucide-react";

const options = [
  {
    icon: Bike,
    title: "Bike Insurance",
    text: "Explore protection for your two-wheeler against eligible accidents, damage, theft, and third-party liabilities.",
    href: "/insurance/bike-insurance",
  },
  {
    icon: Car,
    title: "Car Insurance",
    text: "Review insurance options designed for private cars, everyday travel, and applicable third-party protection.",
    href: "/insurance/car-insurance",
  },
  {
    icon: CarFront,
    title: "Taxi Insurance",
    text: "Discover coverage suited to commercial taxis and passenger vehicles used for business operations.",
    href: "/insurance/taxi-insurance",
  },
  {
    icon: Truck,
    title: "Commercial Vehicle",
    text: "Explore insurance options for eligible goods carriers and other commercial vehicles.",
    href: "/insurance/commercial-vehicle",
  },
];

export default function GetInsurance() {
  return (
    <section className="bg-[#f3f9fb] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
            Insurance Options
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
            Choose protection for your vehicle
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Select a category to learn about available coverage and the information needed to
            proceed.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {options.map(({ icon: Icon, title, text, href }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-[#d7e9ed] bg-white p-6 shadow-[0_10px_25px_rgba(12,61,76,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(12,61,76,0.11)]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#dff3f7] text-[#027f9f]">
                <Icon size={27} />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-[#0C3D4C]">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{text}</p>
              <Link
                href={href}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0289ad]"
              >
                View Details{" "}
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
