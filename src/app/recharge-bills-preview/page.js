"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Building2,
  BusFront,
  CarFront,
  ChevronLeft,
  ChevronRight,
  Droplets,
  FileSpreadsheet,
  Fuel,
  Gauge,
  Gamepad2,
  Gift,
  Grid2X2,
  Hotel,
  Landmark,
  Lightbulb,
  ReceiptIndianRupee,
  Router,
  Plane,
  SatelliteDish,
  ShieldCheck,
  Smartphone,
  TrainFront,
  Truck,
  WalletCards,
  Users,
  X,
} from "lucide-react";

const services = [
  {
    label: "Mobile Recharge/Bill",
    href: "/service-payment/mobile",
    icon: Smartphone,
  },
  {
    label: "Electricity Bill",
    href: "/service-payment/electricity",
    icon: Lightbulb,
  },
  {
    label: "FASTag Recharge",
    href: "/service-payment/fastag",
    icon: CarFront,
  },
  {
    label: "DTH Recharge",
    href: "/service-payment/dth",
    icon: SatelliteDish,
  },
  {
    label: "Insurance Premium",
    href: "/service-payment/insurance",
    icon: ShieldCheck,
  },
  {
    label: "View All Products",
    action: "view-all",
    icon: Grid2X2,
  },
];

const allProducts = [
  {
    title: "Travel & Booking",
    products: [
      { label: "Bus Booking", href: "/service-payment/bus-booking", icon: BusFront },
      { label: "Train Booking", href: "/service-payment/train-booking", icon: TrainFront },
      { label: "Flight Booking", href: "/service-payment/flight-booking", icon: Plane },
      { label: "Hotel Booking", href: "/service-payment/hotel-booking", icon: Hotel },
    ],
  },
  {
    title: "Recharges",
    products: [
      { label: "Mobile Recharge", href: "/service-payment/mobile", icon: Smartphone },
      { label: "FASTag Recharge", href: "/service-payment/fastag", icon: CarFront },
      { label: "DTH Recharge", href: "/service-payment/dth", icon: SatelliteDish },
      { label: "NCMC Recharge", href: "/service-payment/more", icon: BusFront },
      { label: "Prepaid Meter", href: "/service-payment/more", icon: Gauge },
    ],
  },
  {
    title: "Digital & Communication Utilities",
    products: [
      { label: "Mobile Prepaid", href: "/service-payment/mobile", icon: Smartphone },
      { label: "Mobile Postpaid", href: "/service-payment/mobile", icon: Smartphone },
      { label: "Broadband/Landline", href: "/service-payment/broadband", icon: Router },
      { label: "Cable TV", href: "/service-payment/more", icon: Gamepad2 },
      { label: "DTH", href: "/service-payment/dth", icon: SatelliteDish },
      { label: "Landline Postpaid", href: "/service-payment/broadband", icon: Router },
    ],
  },
  {
    title: "Basic Household Utilities",
    products: [
      { label: "Electricity", href: "/service-payment/electricity", icon: Lightbulb },
      { label: "Water Supply", href: "/service-payment/water", icon: Droplets },
      { label: "Gas Supply", href: "/service-payment/piped-gas", icon: Fuel },
      { label: "Prepaid Meter", href: "/service-payment/more", icon: Gauge },
      { label: "LPG Cylinder Booking", href: "/service-payment/cylinder", icon: Fuel },
    ],
  },
  {
    title: "Financial & Payment Utilities",
    products: [
      { label: "Credit Card Bill", href: "/service-payment/more", icon: WalletCards },
      { label: "Loan Repayment", href: "/service-payment/loan-emi", icon: Landmark },
      { label: "Recurring Deposit", href: "/service-payment/more", icon: ReceiptIndianRupee },
      { label: "Rental Payment", href: "/service-payment/more", icon: Building2 },
      { label: "Subscription Payment", href: "/service-payment/more", icon: ReceiptIndianRupee },
      { label: "Education Fees", href: "/service-payment/more", icon: Landmark },
      { label: "NPS", href: "/service-payment/more", icon: ReceiptIndianRupee },
      { label: "NCMC", href: "/service-payment/more", icon: BusFront },
      { label: "Gift Cards", href: "/service-payment/gift-card", icon: Gift },
    ],
  },
  {
    title: "Insurance & Health Utilities",
    products: [
      { label: "General Insurance", href: "/service-payment/insurance", icon: ShieldCheck },
      { label: "Life Insurance", href: "/service-payment/insurance", icon: ShieldCheck },
      { label: "Health Insurance", href: "/service-payment/insurance", icon: ShieldCheck },
      { label: "Car Insurance", href: "/service-payment/car-insurance", icon: CarFront },
      { label: "Bike Insurance", href: "/service-payment/bike-insurance", icon: Bike },
      { label: "Taxi Insurance", href: "/service-payment/taxi-insurance", icon: CarFront },
      {
        label: "Commercial Vehicle Insurance",
        href: "/service-payment/commercial-vehicle-insurance",
        icon: Truck,
      },
    ],
  },
  {
    title: "Government & Municipal Utilities",
    products: [
      { label: "FASTag", href: "/service-payment/fastag", icon: CarFront },
      { label: "Housing Society", href: "/service-payment/more", icon: Building2 },
      { label: "Clubs & Association Fees", href: "/service-payment/more", icon: Users },
      { label: "Municipal Services", href: "/service-payment/more", icon: Building2 },
      { label: "Municipal Taxes", href: "/service-payment/more", icon: ReceiptIndianRupee },
      { label: "E-Challan", href: "/service-payment/challan", icon: CarFront },
      { label: "Donation", href: "/service-payment/more", icon: ShieldCheck },
    ],
  },
];

const promotions = [
  {
    eyebrow: "SaveDost Business",
    title: "Manage every payment in one place",
    description: "Simple, secure and convenient utility payments for your everyday needs.",
    button: "Explore Services",
    href: "/bbps",
    icon: FileSpreadsheet,
    gradient: "from-[#c8f2fb] via-[#a9e5f2] to-[#7ed2e5]",
  },
  {
    eyebrow: "Quick & Secure",
    title: "Pay your bills without the wait",
    description: "Complete recharges and bill payments quickly through one trusted platform.",
    button: "Pay Bills Now",
    href: "/bill-payments",
    icon: ShieldCheck,
    gradient: "from-[#d8f6ef] via-[#ace9dc] to-[#78d5c4]",
  },
  {
    eyebrow: "Everyday Payments",
    title: "Recharge anytime, from anywhere",
    description: "Keep your mobile, DTH and FASTag services active with easy online payments.",
    button: "Recharge Now",
    href: "/recharge",
    icon: WalletCards,
    gradient: "from-[#dbeafe] via-[#bddcf8] to-[#91c5ee]",
  },
];

export default function RechargeBillsPreviewPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % promotions.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!productsOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setProductsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [productsOpen]);

  const showPrevious = () => {
    setActiveSlide((current) => (current === 0 ? promotions.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % promotions.length);
  };

  return (
    <main className="bg-[#f4f7fb] px-3 py-3 sm:px-6 sm:py-4 lg:px-8">
      <section className="mx-auto grid max-w-[1760px] gap-4 lg:grid-cols-[minmax(0,1fr)_390px]">
        <div className="rounded-[20px] bg-white px-4 py-5 shadow-[0_10px_35px_rgba(12,61,76,0.04)] sm:rounded-[24px] sm:px-9 sm:py-7 lg:min-h-[310px] lg:px-10 lg:py-7">
          <h1 className="text-xl font-bold tracking-tight text-[#111827] sm:text-[28px]">
            Recharges &amp; Bill Payments
          </h1>

          <div className="mt-5 grid grid-cols-3 gap-x-2 gap-y-5 sm:mt-8 sm:gap-x-4 sm:gap-y-8 lg:mt-9 lg:grid-cols-6 lg:gap-8">
            {services.map(({ label, href, action, icon: Icon }) => {
              const tileContent = (
                <>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#eef8ff] text-[#075db7] shadow-[inset_0_0_0_1px_rgba(7,93,183,0.06)] transition-transform duration-200 group-hover:-translate-y-1 sm:h-16 sm:w-16 sm:bg-transparent sm:shadow-none">
                    <Icon className="h-7 w-7 sm:h-10 sm:w-10" strokeWidth={1.55} />
                  </span>
                  <span className="mt-2 max-w-[105px] text-[11px] font-semibold leading-4 text-[#183042] transition-colors group-hover:text-[#026381] sm:mt-4 sm:max-w-[145px] sm:text-[17px] sm:font-medium sm:leading-6 sm:text-black">
                    {label}
                  </span>
                </>
              );

              return action === "view-all" ? (
                <button
                  key={label}
                  type="button"
                  onClick={() => setProductsOpen(true)}
                  className="group flex min-w-0 flex-col items-center text-center"
                >
                  {tileContent}
                </button>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className="group flex min-w-0 flex-col items-center text-center"
                >
                  {tileContent}
                </Link>
              );
            })}
          </div>
        </div>

        <aside className="relative min-h-[245px] overflow-hidden rounded-[20px] bg-[#a9e5f2] sm:min-h-[310px] sm:rounded-[24px]">
          {promotions.map((slide, index) => {
            const PromoIcon = slide.icon;
            return (
              <div
                key={slide.title}
                aria-hidden={activeSlide !== index}
                className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} px-5 py-5 transition-all duration-700 sm:px-7 sm:py-7 ${
                  activeSlide === index
                    ? "visible translate-x-0 opacity-100"
                    : "invisible translate-x-8 opacity-0"
                }`}
              >
                <div className="relative z-10 max-w-[155px] sm:max-w-[190px]">
                  <span className="inline-flex rounded-full bg-white/70 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.11em] text-[#026381] sm:px-3 sm:text-[10px] sm:tracking-[0.13em]">
                    {slide.eyebrow}
                  </span>
                  <h2 className="mt-2 text-[16px] font-extrabold leading-[1.12] tracking-tight text-[#073b7a] sm:mt-3 sm:text-[23px] sm:leading-[1.08]">
                    {slide.title}
                  </h2>
                  <p className="mt-1.5 max-w-[150px] text-[10px] font-medium leading-[1.35] text-[#164c5c] sm:mt-3 sm:max-w-[185px] sm:text-[13px] sm:leading-[1.4]">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.href}
                    className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-[#0C3D4C] px-3 py-1.5 text-[9px] font-semibold text-white shadow-[0_8px_18px_rgba(12,61,76,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#026381] sm:mt-4 sm:gap-2 sm:px-4 sm:py-2 sm:text-[11px]"
                  >
                    {slide.button} <ArrowRight size={15} className="sm:h-[17px] sm:w-[17px]" />
                  </Link>
                </div>

                <div className="absolute -bottom-12 -right-12 h-56 w-56 rounded-full bg-white/20" />

                <div className="absolute -bottom-52 right-2 h-[410px] w-[140px] rounded-[30px] border-[5px] border-[#26343b] bg-white shadow-[0_12px_28px_rgba(12,61,76,0.28)]">
                  <div className="mx-auto mt-2 h-2 w-14 rounded-full bg-[#26343b]" />
                  <div className="mt-4 flex items-center justify-center gap-1 text-[11px] font-extrabold text-[#026381]">
                    SAVEDOST
                  </div>
                  <div className="mt-6 grid place-items-center text-[#026381]">
                    <PromoIcon size={38} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="absolute bottom-[50px] right-1 z-10 hidden w-[145px] items-center gap-2 rounded-lg bg-white px-2.5 py-2 shadow-[0_5px_16px_rgba(12,61,76,0.18)] min-[410px]:flex sm:bottom-[58px] sm:w-[160px]">
                  <FileSpreadsheet size={22} className="shrink-0 text-[#075db7]" />
                  <div>
                    <div className="text-[10px] font-bold text-gray-800">Payment summary</div>
                    <div className="mt-0.5 text-[8px] text-gray-500">Secure digital record</div>
                  </div>
                </div>
                <div className="absolute bottom-[12px] right-1 z-10 hidden w-[145px] items-center gap-2 rounded-lg bg-white px-2.5 py-2 shadow-[0_5px_16px_rgba(12,61,76,0.18)] min-[410px]:flex sm:bottom-[17px] sm:w-[160px]">
                  <ShieldCheck size={22} className="shrink-0 text-[#075db7]" />
                  <div>
                    <div className="text-[10px] font-bold text-gray-800">Payment protected</div>
                    <div className="mt-0.5 text-[8px] text-gray-500">Fast and reliable</div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="absolute bottom-5 left-8 z-20 flex items-center gap-3">
            {promotions.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === index ? "w-7 bg-[#0C3D4C]" : "w-2 bg-white/80 hover:bg-white"
                }`}
                aria-label={`Show promotion ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute right-5 top-5 z-20 flex gap-3">
            <button
              type="button"
              onClick={showPrevious}
              className="grid h-8 w-8 place-items-center rounded-full bg-white/75 text-[#0C3D4C] transition-colors hover:bg-white"
              aria-label="Previous promotion"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="grid h-8 w-8 place-items-center rounded-full bg-white/75 text-[#0C3D4C] transition-colors hover:bg-white"
              aria-label="Next promotion"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </aside>
      </section>

      {productsOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-hidden bg-black/70 px-3 pb-3 pt-16 sm:px-20 sm:pb-6 sm:pt-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setProductsOpen(false);
          }}
          role="presentation"
        >
          <button
            type="button"
            onClick={() => setProductsOpen(false)}
            className="fixed right-3 top-3 z-[102] grid h-11 w-11 place-items-center rounded-full border-2 border-white bg-[#111827] text-white shadow-[0_8px_24px_rgba(0,0,0,0.32)] transition-transform hover:scale-105 sm:right-5 sm:top-6"
            aria-label="Close all products"
          >
            <X size={23} strokeWidth={2.5} />
          </button>

          <div
            className="relative w-full max-w-[1100px] overflow-hidden rounded-[24px] bg-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="all-products-title"
          >
            <div className="finunique-scrollbar max-h-[calc(100dvh-4.75rem)] overflow-y-auto px-6 py-9 sm:max-h-[calc(100dvh-3rem)] sm:px-8 lg:px-10">
              <h2 id="all-products-title" className="sr-only">
                All recharge and bill payment products
              </h2>

              <div className="space-y-14 pr-4 sm:pr-10">
                {allProducts.map((category) => (
                  <section key={category.title}>
                    <h3 className="text-2xl font-bold text-[#111827] sm:text-[28px]">
                      {category.title}
                    </h3>
                    <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                      {category.products.map(({ label, href, icon: ProductIcon }) => (
                        <Link
                          key={label}
                          href={href}
                          onClick={() => setProductsOpen(false)}
                          className="group flex flex-col items-center text-center"
                        >
                          <span className="grid h-16 w-16 place-items-center text-[#075db7] transition-transform duration-200 group-hover:-translate-y-1">
                            <ProductIcon size={43} strokeWidth={1.45} />
                          </span>
                          <span className="mt-4 max-w-[150px] text-[16px] font-medium leading-6 text-[#111827] group-hover:text-[#026381]">
                            {label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
