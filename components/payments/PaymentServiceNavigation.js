"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  BadgeIndianRupee,
  Building2,
  BusFront,
  CarFront,
  CircleEllipsis,
  CreditCard,
  Droplets,
  Fuel,
  Gauge,
  GraduationCap,
  Gift,
  Hotel,
  HandHeart,
  Home,
  Landmark,
  Lightbulb,
  ReceiptIndianRupee,
  Repeat2,
  Router,
  SatelliteDish,
  ShieldCheck,
  Smartphone,
  PlaneTakeoff,
  TrainFront,
  Tv,
  Users,
} from "lucide-react";

const mainServices = [
  ["mobile", "Mobile", Smartphone],
  ["fastag", "Fastag", CarFront],
  ["dth", "DTH", SatelliteDish],
  ["electricity", "Electricity", Lightbulb],
  ["loan-emi", "Loan EMI", BadgeIndianRupee],
  ["insurance", "Insurance / LIC", ShieldCheck],
  ["piped-gas", "Piped Gas Bill", Fuel],
  ["cylinder", "Book a Cylinder", Fuel],
  ["water", "Water Supply", Droplets],
  ["broadband", "Broadband/Landline", Router],
  ["challan", "E-Challan", Landmark],
];

const moreServices = [
  ["mobile-prepaid", "Mobile Prepaid", Smartphone, "mobile"],
  ["mobile-postpaid", "Mobile Postpaid", Smartphone, "mobile"],
  ["broadband-postpaid", "Broadband Postpaid", Router, "broadband"],
  ["landline-postpaid", "Landline Postpaid", Router, "broadband"],
  ["nps", "NPS", BadgeIndianRupee],
  ["cable-tv", "Cable TV", Tv],
  ["prepaid-meter", "Prepaid Meter", Gauge],
  ["credit-card-bill", "Credit Card Bill Payment", CreditCard],
  ["loan-repayment", "Loan Repayment", BadgeIndianRupee, "loan-emi"],
  ["recurring-deposit", "Recurring Deposit", Repeat2],
  ["rental-payment", "Rental Payment", Home],
  ["subscription", "Subscription Payment", ReceiptIndianRupee],
  ["education-fees", "Education Fees", GraduationCap],
  ["ncmc", "NCMC", BusFront],
  ["life-insurance", "Life Insurance", ShieldCheck, "insurance"],
  ["health-insurance", "Health Insurance", ShieldCheck, "insurance"],
  ["gas-supply", "Gas Supply", Fuel, "piped-gas"],
  ["housing-society", "Housing Society Payments", Building2],
  ["club-fees", "Clubs & Associations Fees", Users],
  ["municipal", "Municipal Services", Building2],
  ["municipal-taxes", "Municipal Taxes", Building2, "municipal"],
  ["donation", "Donation", HandHeart],
  ["gift-card", "Gift Cards", Gift],
  ["car-insurance", "Car Insurance", CarFront],
  ["bike-insurance", "Bike Insurance", ShieldCheck],
  ["taxi-insurance", "Taxi Insurance", CarFront],
  ["commercial-vehicle-insurance", "Commercial Vehicle Insurance", ShieldCheck],
  ["bus-booking", "Bus Booking", BusFront],
  ["train-booking", "Train Booking", TrainFront],
  ["flight-booking", "Flight Booking", PlaneTakeoff],
  ["hotel-booking", "Hotel Booking", Hotel],
];

const mobileMainServices = mainServices.slice(0, 3);
const mobileMoreServices = [...mainServices.slice(3), ...moreServices];

export default function PaymentServiceNavigation({ activeSlug }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 16 });
  const moreButtonRef = useRef(null);
  const moreMenuRef = useRef(null);
  const desktopMoreActive =
    activeSlug === "more" || moreServices.some(([slug]) => slug === activeSlug);
  const mobileMoreActive =
    activeSlug === "more" || mobileMoreServices.some(([slug]) => slug === activeSlug);

  const closeAfterLeavingButton = (event) => {
    if (!moreMenuRef.current?.contains(event.relatedTarget)) {
      setMoreOpen(false);
    }
  };

  const closeAfterLeavingMenu = (event) => {
    if (!moreButtonRef.current?.contains(event.relatedTarget)) {
      setMoreOpen(false);
    }
  };

  useEffect(() => {
    if (!moreOpen) return undefined;

    const closeMenu = () => setMoreOpen(false);
    const closeOnEscape = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    const closeOnOutsideClick = (event) => {
      if (
        !moreButtonRef.current?.contains(event.target) &&
        !moreMenuRef.current?.contains(event.target)
      ) {
        closeMenu();
      }
    };

    window.addEventListener("scroll", closeMenu);
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);

    return () => {
      window.removeEventListener("scroll", closeMenu);
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [moreOpen]);

  const toggleMore = (event) => {
    moreButtonRef.current = event.currentTarget;
    const bounds = event.currentTarget.getBoundingClientRect();
    setMenuPosition({
      top: Math.round(bounds.bottom),
      right: Math.max(16, Math.round(window.innerWidth - bounds.right)),
    });
    setMoreOpen((open) => !open);
  };

  return (
    <div className="relative mx-auto max-w-7xl">
      <nav className="hidden gap-3 pb-2 lg:flex lg:justify-between">
        {mainServices.map(([slug, label, Icon]) => {
          const active = activeSlug === slug;
          return (
            <Link
              key={slug}
              href={`/service-payment/${slug}`}
              className={`flex min-w-max flex-col items-center gap-1.5 border-b-2 px-1 pb-1.5 text-xs transition sm:text-sm ${active ? "border-[#58d7ed] text-white" : "border-transparent text-white/80 hover:text-white"}`}
            >
              <Icon
                size={22}
                strokeWidth={1.7}
                className={active ? "text-[#58d7ed]" : "text-white"}
              />
              {label}
            </Link>
          );
        })}

        <button
          type="button"
          onClick={toggleMore}
          onMouseLeave={closeAfterLeavingButton}
          aria-expanded={moreOpen}
          className={`flex min-w-[58px] flex-col items-center gap-1.5 border-b-2 px-1 pb-1.5 text-sm transition ${desktopMoreActive ? "border-[#58d7ed] text-white" : "border-transparent text-white/80 hover:text-white"}`}
        >
          <CircleEllipsis size={22} strokeWidth={1.7} />
          More
        </button>
      </nav>

      <nav className="flex items-start justify-between gap-2 pb-2 lg:hidden">
        {mobileMainServices.map(([slug, label, Icon]) => {
          const active = activeSlug === slug;
          return (
            <Link
              key={slug}
              href={`/service-payment/${slug}`}
              className={`flex min-w-0 flex-1 flex-col items-center gap-1.5 border-b-2 px-1 pb-1.5 text-center text-[11px] leading-4 transition sm:text-sm ${active ? "border-[#58d7ed] text-white" : "border-transparent text-white/80 hover:text-white"}`}
            >
              <Icon
                size={21}
                strokeWidth={1.7}
                className={active ? "text-[#58d7ed]" : "text-white"}
              />
              {label}
            </Link>
          );
        })}

        <button
          type="button"
          onClick={toggleMore}
          aria-expanded={moreOpen}
          className={`flex min-w-0 flex-1 flex-col items-center gap-1.5 border-b-2 px-1 pb-1.5 text-[11px] leading-4 transition sm:text-sm ${mobileMoreActive ? "border-[#58d7ed] text-white" : "border-transparent text-white/80 hover:text-white"}`}
        >
          <CircleEllipsis size={21} strokeWidth={1.7} />
          More
        </button>
      </nav>

      {moreOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={moreMenuRef}
            onMouseLeave={closeAfterLeavingMenu}
            className="more-services-scrollbar fixed z-[3000] max-h-[300px] w-[min(250px,calc(100vw-32px))] overflow-y-auto rounded-lg border border-slate-200 bg-white py-1 text-slate-800 shadow-[0_14px_35px_rgba(0,0,0,0.18)]"
            style={{ top: menuPosition.top, right: menuPosition.right }}
          >
            <div className="lg:hidden">
              {mobileMoreServices.map(([slug, label, Icon, targetSlug]) => (
                <Link
                  key={slug}
                  href={`/service-payment/${targetSlug || slug}`}
                  onClick={() => setMoreOpen(false)}
                  className="flex items-center gap-4 border-b border-[#d9edf2] px-4 py-3 text-sm font-medium transition last:border-0 hover:bg-[#e9f8fb] hover:text-[#026381]"
                >
                  <Icon size={22} className="shrink-0 text-[#026381]" strokeWidth={1.6} />
                  {label}
                </Link>
              ))}
            </div>
            <div className="hidden lg:block">
              {moreServices.map(([slug, label, Icon, targetSlug]) => (
                <Link
                  key={slug}
                  href={`/service-payment/${targetSlug || slug}`}
                  onClick={() => setMoreOpen(false)}
                  className="flex items-center gap-4 border-b border-[#d9edf2] px-4 py-3 text-sm font-medium transition last:border-0 hover:bg-[#e9f8fb] hover:text-[#026381]"
                >
                  <Icon size={22} className="shrink-0 text-[#026381]" strokeWidth={1.6} />
                  {label}
                </Link>
              ))}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
