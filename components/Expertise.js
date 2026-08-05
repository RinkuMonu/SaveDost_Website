"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Utility & Bill Payments",
    text: "Convenient digital payment services for everyday customer needs.",
    image: "/about/Utility3d.png",
    href: "/bbps",
  },
  {
    title: "Credit Card Solutions",
    text: "Helpful credit-card services designed around accessibility and support.",
    image: "/about/cc3d.png",
    href: "/credit-card",
  },
];

export default function Expertise() {
  return (
    <section className="bg-[#f3f9fb] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
            Our Expertise
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
            Digital services made more accessible
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Solutions designed to help customers and partners complete important everyday tasks with
            greater convenience.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex items-center gap-5 rounded-2xl border border-[#d7e9ed] bg-white p-6 shadow-[0_10px_25px_rgba(12,61,76,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(12,61,76,0.11)]"
            >
              <span className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-[#eaf6f9]">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={78}
                  height={78}
                  className="h-20 w-20 object-contain"
                />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-[#0C3D4C]">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.text}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#0289ad]">
                  Learn More{" "}
                  <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
