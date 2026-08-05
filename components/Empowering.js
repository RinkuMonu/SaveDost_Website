import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const merchantTypes = [
  {
    id: "retailersection",
    eyebrow: "For Local Businesses",
    title: "Become a SaveDost Retailer",
    description:
      "Turn your shop into a convenient service point for customers in your neighborhood.",
    imageUrl: "/aeps/retailer.png",
    imageAlt: "Retailer serving customers at a local shop",
    benefits: [
      "Earn commissions on eligible customer transactions",
      "Offer multiple banking, recharge, and utility services",
      "Attract new customers and increase store visits",
      "Start with a simple onboarding and support process",
    ],
  },
  {
    id: "distributorsection",
    eyebrow: "For Network Builders",
    title: "Grow as a SaveDost Distributor",
    description:
      "Build and support a network of retailers while creating a scalable business in your region.",
    imageUrl: "/aeps/distributor.png",
    imageAlt: "Distributor managing a growing merchant network",
    benefits: [
      "Onboard and manage retailers in your network",
      "Earn from eligible transactions across the network",
      "Monitor activity through a centralized dashboard",
      "Access business, training, and technical assistance",
    ],
  },
];

export default function Empowering() {
  return (
    <section className="bg-[#f3f9fb] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0289ad]">
            Choose Your Opportunity
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
            Empowering retailers and distributors
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Select the partnership model that fits your goals and grow with SaveDost&apos;s platform
            and support.
          </p>
        </div>

        <div className="mt-11 grid gap-7 lg:grid-cols-2">
          {merchantTypes.map((item) => (
            <article
              id={item.id}
              key={item.id}
              className="overflow-hidden rounded-[26px] border border-[#d4e9ee] bg-white shadow-[0_14px_35px_rgba(12,61,76,0.08)]"
            >
              <div className="relative h-56 bg-[#e7f4f7] sm:h-64">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  fill
                  className="object-contain object-bottom"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0289ad]">
                  {item.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-[#0C3D4C]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                <ul className="mt-5 space-y-3">
                  {item.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                    >
                      <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#0297bd]" /> {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#026381] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0C3D4C]"
                >
                  Join SaveDost{" "}
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
