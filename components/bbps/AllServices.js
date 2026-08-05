"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Recharges",
    text: "SaveDost BBPS makes supported mobile and DTH recharges quick and convenient, helping users maintain access to essential communication and entertainment services.",
    image: "/allservices/recharge.png",
    href: "/service-payment/mobile",
  },
  {
    title: "Utility Payments",
    text: "Access supported electricity, water, gas, broadband, and other recurring bill categories through a clear digital payment experience.",
    image: "/allservices/Banking.PNG",
    href: "/service-payment/electricity",
  },
  {
    title: "Booking",
    text: "Explore available travel and booking categories with simple navigation, relevant information, and access to the SaveDost booking platform.",
    image: "/allservices/booking.png",
    href: "/booking",
  },
  {
    title: "Financial Payments",
    text: "Review supported financial payment categories and keep eligible obligations organized through available digital services.",
    image: "/allservices/finance.png",
    href: "/financial-payments",
  },
];

export default function AllServices() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
            Available Categories
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
            Services available through SaveDost
          </h2>
        </div>

        {services.map((service, index) => (
          <article
            key={service.title}
            className={`grid items-center gap-8 border-b border-[#e0eef1] py-12 last:border-b-0 lg:grid-cols-2 lg:gap-14 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0289ad]">
                BBPS Service
              </p>
              <h3 className="mt-3 text-3xl font-extrabold text-[#0C3D4C] sm:text-4xl">
                {service.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">{service.text}</p>
              <Link
                href={service.href}
                className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-[#026381] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0C3D4C]"
              >
                Explore Service{" "}
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-[26px] bg-[#eaf6f9] sm:min-h-[430px]">
              <span className="absolute left-[12%] top-[18%] h-24 w-24 rounded-3xl bg-[#cfeaf0]" />
              <span className="absolute bottom-[15%] right-[12%] h-28 w-28 rounded-full bg-[#d8f1f5]" />
              <div className="relative z-10 w-[220px] rounded-[32px] border-[6px] border-[#0C3D4C] bg-[#0C3D4C] p-1 shadow-[0_24px_55px_rgba(12,61,76,0.22)] sm:w-[250px]">
                <Image
                  src={service.image}
                  alt={`${service.title} service screen`}
                  width={500}
                  height={850}
                  className="h-[330px] w-full rounded-[24px] bg-white object-cover object-top sm:h-[380px]"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
