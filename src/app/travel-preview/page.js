"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRightLeft,
  BusFront,
  CalendarDays,
  Clock3,
  Globe2,
  MapPin,
  Plane,
  PlaneTakeoff,
  TrainFront,
  Users,
} from "lucide-react";

const travelOptions = [
  { id: "bus", label: "Bus", icon: BusFront, available: false },
  { id: "trains", label: "Trains", icon: TrainFront, available: false },
  { id: "flights", label: "Flights", icon: PlaneTakeoff, available: false },
  { id: "international", label: "Intl. Flights", icon: Globe2, available: false },
];

export default function TravelPreviewPage() {
  const [activeOption, setActiveOption] = useState("bus");
  const selectedOption = travelOptions.find((option) => option.id === activeOption);

  return (
    <section className="bg-[#f4f7fb] px-3 py-3 sm:px-6 sm:py-5 lg:px-8">
      <div className="mx-auto max-w-[1760px] overflow-hidden rounded-[20px] bg-white px-4 py-5 shadow-[0_10px_35px_rgba(12,61,76,0.04)] sm:rounded-[24px] sm:px-8 sm:py-6">
        <div className="flex flex-col gap-5 border-b border-gray-200 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-full gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-10">
            {travelOptions.map(({ id, label, icon: Icon, available }) => {
              const isActive = activeOption === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveOption(id)}
                  className={`relative flex min-w-[60px] flex-col items-center gap-1.5 pb-3 text-xs font-semibold transition-colors sm:min-w-[70px] sm:gap-2 sm:pb-4 sm:text-base ${
                    isActive ? "text-[#026381]" : "text-gray-700 hover:text-[#026381]"
                  }`}
                >
                  <span className="flex h-7 items-start gap-1 sm:h-8 sm:gap-1.5">
                    <span className="relative">
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.6} />
                      {id === "international" && (
                        <Plane
                          size={14}
                          strokeWidth={1.8}
                          className="absolute -bottom-1 -right-2 rotate-[-12deg] rounded-full bg-white text-[#075db7]"
                        />
                      )}
                    </span>
                    {!available && (
                      <span className="mt-0.5 rounded-full bg-[#e8f6fa] px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wide text-[#026381]">
                        Soon
                      </span>
                    )}
                  </span>
                  {label}
                  {isActive && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#00a8e8]" />}
                </button>
              );
            })}
          </div>

          <div className="hidden pb-5 text-right lg:block">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#00a8e8]">SaveDost</p>
            <p className="text-xl font-extrabold text-[#0C3D4C]">Travel</p>
          </div>
        </div>

        {selectedOption?.available ? (
          <div className="mt-5 rounded-2xl border border-gray-200 px-5 py-5 sm:px-7">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold">
              <label className="flex items-center gap-2 text-[#0C3D4C]">
                <input type="radio" name="bus-trip" defaultChecked className="accent-[#00a8e8]" />
                One Way
              </label>
              <label className="flex items-center gap-2 text-gray-600">
                <input type="radio" name="bus-trip" className="accent-[#00a8e8]" />
                Round Trip
              </label>
            </div>

            <div className="mt-5 grid items-stretch gap-3 md:grid-cols-2 xl:grid-cols-[1fr_44px_1fr_.8fr_.8fr_auto]">
              <label className="rounded-xl bg-[#f7fafb] px-4 py-3">
                <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                  <MapPin size={14} /> From
                </span>
                <input
                  type="text"
                  defaultValue="Delhi"
                  aria-label="Bus departure city"
                  className="mt-1 w-full bg-transparent text-lg font-bold text-[#111827] outline-none"
                />
              </label>

              <button
                type="button"
                className="hidden place-items-center self-center rounded-full border border-[#00a8e8] p-2 text-[#00a8e8] xl:grid"
                aria-label="Swap departure and destination"
              >
                <ArrowRightLeft size={18} />
              </button>

              <label className="rounded-xl bg-[#f7fafb] px-4 py-3">
                <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                  <MapPin size={14} /> To
                </span>
                <input
                  type="text"
                  defaultValue="Jaipur"
                  aria-label="Bus destination city"
                  className="mt-1 w-full bg-transparent text-lg font-bold text-[#111827] outline-none"
                />
              </label>

              <label className="rounded-xl bg-[#f7fafb] px-4 py-3">
                <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                  <CalendarDays size={14} /> Departure
                </span>
                <input
                  type="date"
                  aria-label="Bus departure date"
                  className="mt-1 w-full bg-transparent text-sm font-bold text-[#111827] outline-none"
                />
              </label>

              <div className="rounded-xl bg-[#f7fafb] px-4 py-3">
                <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                  <Users size={14} /> Travellers
                </span>
                <p className="mt-1 text-sm font-bold text-[#111827]">1 Traveller</p>
              </div>

              <Link
                href="/booking"
                className="flex min-h-[64px] items-center justify-center rounded-xl bg-[#00a8e8] px-7 text-base font-bold text-white shadow-[0_7px_18px_rgba(0,168,232,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#026381]"
              >
                Search Buses
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-4 flex min-h-[118px] flex-col items-center justify-center rounded-xl border border-dashed border-[#8acddd] bg-[#f4fbfd] px-4 py-4 text-center sm:mt-5 sm:min-h-[150px] sm:rounded-2xl">
            <Clock3 className="h-7 w-7 text-[#026381] sm:h-8 sm:w-8" />
            <h3 className="mt-2 text-base font-bold text-[#0C3D4C] sm:mt-3 sm:text-lg">
              {selectedOption?.label} booking is coming soon
            </h3>
            <p className="mt-1 text-xs leading-5 text-gray-600 sm:text-sm">
              We are preparing a fast and convenient booking experience.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
