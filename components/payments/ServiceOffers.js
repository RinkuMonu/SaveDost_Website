"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  BadgePercent,
  CalendarCheck2,
  Gift,
  Sparkles,
  WalletCards,
  X,
} from "lucide-react";
import { FaApple } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal";

const offerGroups = {
  recharge: [
    [
      "First recharge offer",
      "Eligible new users can check the app for a promotional first-recharge discount.",
      BadgePercent,
      "Explore plans",
      "Up to 50% off*",
    ],
    [
      "App-only rewards",
      "Check the SaveDost app for rewards available on eligible recharges.",
      Gift,
      "View app offers",
      "Bonus rewards*",
    ],
    [
      "Payment deals",
      "Look for eligible bank, card or payment-method promotions before paying.",
      WalletCards,
      "Check payment deals",
      "Bank offers*",
    ],
  ],
  utility: [
    [
      "First bill-payment offer",
      "Eligible new users can check for a promotional discount on their first bill payment.",
      CalendarCheck2,
      "View bill offers",
      "Up to 25% off*",
    ],
    [
      "App rewards",
      "Check for service-specific rewards available through the SaveDost app.",
      Gift,
      "View app rewards",
      "Reward bonus*",
    ],
    [
      "Payment-method deals",
      "Compare eligible card, bank and payment-method promotions at checkout.",
      WalletCards,
      "Check payment deals",
      "Extra savings*",
    ],
  ],
  finance: [
    [
      "Payment rewards",
      "Check for eligible rewards before completing this financial payment.",
      Gift,
      "View rewards",
      "Reward points*",
    ],
    [
      "Partner offers",
      "Explore promotions that may be available from participating institutions.",
      BadgePercent,
      "Explore partner deals",
      "Partner deal*",
    ],
    [
      "Payment-method benefits",
      "Review eligible bank, card or payment-method benefits before confirming.",
      WalletCards,
      "Check benefits",
      "Bank benefit*",
    ],
  ],
  insurance: [
    [
      "Policy payment offers",
      "Check for eligible rewards when paying a supported insurance premium.",
      ShieldOfferIcon,
      "View policy offers",
      "Premium rewards*",
    ],
    [
      "Partner promotions",
      "Explore promotions that may be available from participating insurance providers.",
      BadgePercent,
      "Explore promotions",
      "Partner deal*",
    ],
    [
      "Payment benefits",
      "Review eligible bank, card or payment-method benefits before paying.",
      WalletCards,
      "Check benefits",
      "Bank benefit*",
    ],
  ],
  travel: [
    [
      "First booking offer",
      "Eligible new users can check for a promotional discount on their first booking.",
      BadgePercent,
      "View booking deals",
      "Up to 20% off*",
    ],
    [
      "Seasonal offers",
      "Explore travel rewards that may be available for selected dates or destinations.",
      Gift,
      "Explore seasonal offers",
      "Seasonal deal*",
    ],
    [
      "Payment-method deals",
      "Review eligible card, bank and payment-method promotions at checkout.",
      WalletCards,
      "Check payment deals",
      "Bank offers*",
    ],
  ],
  lifestyle: [
    [
      "Welcome offer",
      "Eligible new users can discover introductory promotions available for this service.",
      Sparkles,
      "Explore offers",
      "Welcome deal*",
    ],
    [
      "Partner deals",
      "Check deals from eligible brands, institutions or service partners.",
      BadgePercent,
      "View partner deals",
      "Partner offer*",
    ],
    [
      "Payment rewards",
      "Look for eligible rewards linked to your selected payment method.",
      Gift,
      "Check rewards",
      "Bonus rewards*",
    ],
  ],
};

const dealThemes = [
  {
    card: "border-[#a9deea] bg-[linear-gradient(145deg,#e6f8fc,#ffffff_72%)]",
    icon: "bg-[#cceff6] text-[#027a99]",
    badge: "bg-[#cceff6] text-[#027a99]",
    glow: "bg-[#00a8e8]/14",
    link: "text-[#027f9f]",
  },
  {
    card: "border-[#cbe4b8] bg-[linear-gradient(145deg,#f0fae9,#ffffff_72%)]",
    icon: "bg-[#dff1d2] text-[#4f8c25]",
    badge: "bg-[#dff1d2] text-[#4f8c25]",
    glow: "bg-[#82c950]/16",
    link: "text-[#57932d]",
  },
  {
    card: "border-[#f1d4aa] bg-[linear-gradient(145deg,#fff5e5,#ffffff_72%)]",
    icon: "bg-[#ffe6bd] text-[#b86b08]",
    badge: "bg-[#ffe6bd] text-[#a85f05]",
    glow: "bg-[#f59e0b]/14",
    link: "text-[#b86b08]",
  },
];

const offerImages = {
  recharge: ["/allservices/recharge.png", "/home/easy-payment3d.png", "/image/easy-payment.png"],
  utility: ["/image/electricity-vect.webp", "/home/water3d.png", "/home/gasbill3d.png"],
  finance: [
    "/financial-payments/loan-emi.png",
    "/financial-payments/credit-card-bill.png",
    "/financial-payments/nps-contribution.png",
  ],
  insurance: ["/insurance/i1.png", "/insurance/i2.png", "/insurance/i3.png"],
  travel: [
    "/service-providers/booking/bus-booking.jpg",
    "/service-providers/booking/train-booking.jpg",
    "/service-providers/booking/flight-booking.jpg",
  ],
  lifestyle: ["/about/gift.jpg", "/home/education.png", "/financial-payments/rental-payment.png"],
};

const serviceOfferImages = {
  mobile: ["/allservices/recharge.png", "/home/easy-payment3d.png", "/recharge/br.png"],
  fastag: ["/fastag/fastag-banner.jpg", "/image/car-insurance.jpg", "/home/easy-payment3d.png"],
  dth: ["/home/dth3d.png", "/home/dth.png", "/allservices/recharge.png"],
  electricity: ["/image/electricity-vect.webp", "/home/bill-payments.png", "/bbps/billpayment.png"],
  "loan-emi": ["/financial-payments/loan-emi.png", "/loan/loan2.png", "/image/loan-img.png"],
  insurance: [
    "/financial-payments/insurance-premium.png",
    "/insurance/i2.png",
    "/insurance/i3.png",
  ],
  "piped-gas": ["/home/gasbill3d.png", "/home/gashome.png", "/allservices/mahanagar-gas.jpeg"],
  cylinder: ["/home/gasbill3d.png", "/allservices/bharat-gas.png", "/allservices/hp-gas.jpg"],
  water: ["/home/water3d.png", "/home/waterhome.png", "/bbps/billpayment.png"],
  broadband: ["/recharge/br.png", "/home/easy-payment3d.png", "/bbps/billpayment.png"],
  challan: ["/fastag/fastag-banner.jpg", "/image/car-insurance.jpg", "/bbps/billpayment.png"],
  nps: [
    "/financial-payments/nps-contribution.png",
    "/financial-payments-hero-v2.png",
    "/home/easy-payment3d.png",
  ],
  "cable-tv": ["/home/dth3d.png", "/home/dth.png", "/allservices/recharge.png"],
  "prepaid-meter": [
    "/image/electricity-vect.webp",
    "/home/bill-payments.png",
    "/home/easy-payment3d.png",
  ],
  "credit-card-bill": [
    "/financial-payments/credit-card-bill.png",
    "/credit/creditcard.png",
    "/credit/credit2.png",
  ],
  "recurring-deposit": [
    "/financial-payments/recurring-deposit.png",
    "/financial-payments-hero-v2.png",
    "/home/easy-payment3d.png",
  ],
  "rental-payment": [
    "/financial-payments/rental-payment.png",
    "/home/easy-payment3d.png",
    "/bbps/billpayment.png",
  ],
  subscription: [
    "/financial-payments-hero-v2.png",
    "/home/easy-payment3d.png",
    "/bbps/billpayment.png",
  ],
  "education-fees": ["/home/education.png", "/home/easy-payment3d.png", "/bbps/billpayment.png"],
  ncmc: ["/booking/bus.png", "/booking/train.png", "/home/easy-payment3d.png"],
  "housing-society": [
    "/financial-payments/rental-payment.png",
    "/home/easy-payment3d.png",
    "/bbps/billpayment.png",
  ],
  "club-fees": ["/about/gift.jpg", "/home/easy-payment3d.png", "/financial-payments-hero-v2.png"],
  municipal: ["/bbps/billpayment.png", "/home/bill-payments.png", "/home/easy-payment3d.png"],
  donation: ["/about/gift.jpg", "/home/easy-payment3d.png", "/financial-payments-hero-v2.png"],
  "gift-card": ["/about/gift.jpg", "/home/easy-payment3d.png", "/financial-payments-hero-v2.png"],
  "car-insurance": ["/image/car-insurance.jpg", "/insurance/v1.jpg", "/insurance/i2.png"],
  "bike-insurance": ["/insurance/b1.png", "/insurance/b2.png", "/insurance/i2.png"],
  "taxi-insurance": [
    "/insurance/v3.jpg",
    "/insurance/v4.jpg",
    "/financial-payments/insurance-premium.png",
  ],
  "commercial-vehicle-insurance": [
    "/insurance/v2.jpg",
    "/insurance/v4.jpg",
    "/financial-payments/insurance-premium.png",
  ],
  "bus-booking": [
    "/service-providers/booking/bus-booking.jpg",
    "/booking/bus.png",
    "/booking/bus1.png",
  ],
  "train-booking": [
    "/service-providers/booking/train-booking.jpg",
    "/booking/train.png",
    "/booking/train1.png",
  ],
  "flight-booking": [
    "/service-providers/booking/flight-booking.jpg",
    "/aeps/flight-booking.png",
    "/financial-payments-hero-v2.png",
  ],
  "hotel-booking": [
    "/service-providers/booking/hotel-booking.jpg",
    "/booking/hotel.png",
    "/booking/hotel1.png",
  ],
  more: ["/financial-payments-hero-v2.png", "/home/easy-payment3d.png", "/bbps/billpayment.png"],
};

function ShieldOfferIcon(props) {
  return <Sparkles {...props} />;
}

const rechargeServices = new Set(["mobile", "fastag", "dth", "cylinder", "prepaid-meter", "ncmc"]);
const utilityServices = new Set([
  "electricity",
  "piped-gas",
  "water",
  "broadband",
  "cable-tv",
  "challan",
  "municipal",
  "housing-society",
]);
const financeServices = new Set([
  "loan-emi",
  "nps",
  "credit-card-bill",
  "recurring-deposit",
  "rental-payment",
]);
const insuranceServices = new Set([
  "insurance",
  "car-insurance",
  "bike-insurance",
  "taxi-insurance",
  "commercial-vehicle-insurance",
]);
const travelServices = new Set(["bus-booking", "train-booking", "flight-booking", "hotel-booking"]);

function getOfferCategory(slug) {
  if (rechargeServices.has(slug)) return "recharge";
  if (utilityServices.has(slug)) return "utility";
  if (financeServices.has(slug)) return "finance";
  if (insuranceServices.has(slug)) return "insurance";
  if (travelServices.has(slug)) return "travel";
  return "lifestyle";
}

export default function ServiceOffers({ serviceSlug, serviceName }) {
  const [showDownload, setShowDownload] = useState(false);
  const category = getOfferCategory(serviceSlug);
  const offers = offerGroups[category];
  const images = serviceOfferImages[serviceSlug] || offerImages[category];

  useEffect(() => {
    if (!showDownload) return undefined;
    const closeOnEscape = (event) => event.key === "Escape" && setShowDownload(false);
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [showDownload]);

  return (
    <>
      <section className="mt-8 overflow-hidden rounded-[26px] border border-[#d4e9ed] bg-[linear-gradient(135deg,#f0fafb,#ffffff_52%,#f2f9ed)] px-4 py-8 shadow-[0_14px_34px_rgba(12,61,76,.07)] sm:px-7 sm:py-10">
        <ScrollReveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.17em] text-[#0289ad]">
              <Sparkles size={15} /> Offers & deals
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-3xl">
              Save more on {serviceName}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Explore rewards and partner promotions that may be available for eligible
              transactions.
            </p>
          </div>
          <span className="w-fit rounded-full border border-[#cce5d8] bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#4f8830]">
            Updated in the app
          </span>
        </ScrollReveal>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {offers.map(([title, text, Icon, cta, promo], index) => {
            const theme = dealThemes[index];
            return (
              <ScrollReveal key={title} delay={index * 0.07} className="h-full">
                <article
                  className={`group relative h-full overflow-hidden rounded-2xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(12,61,76,.13)] ${theme.card}`}
                >
                  <span
                    className={`absolute -right-7 -top-7 h-20 w-20 rounded-full transition duration-500 group-hover:scale-150 ${theme.glow}`}
                  />
                  <div className="relative -mx-5 -mt-5 mb-5 h-36 overflow-hidden bg-[radial-gradient(circle_at_center,#ffffff,#eaf6f8)] p-3">
                    <Image
                      src={images[index]}
                      alt={`${serviceName} offer`}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0C3D4C]/45 to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1.5 text-xs font-black text-[#026381] shadow-lg">
                      {promo}
                    </span>
                  </div>
                  <div className="relative flex items-start justify-between gap-3">
                    <span className={`grid h-10 w-10 place-items-center rounded-xl ${theme.icon}`}>
                      <Icon size={20} />
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider ${theme.badge}`}
                    >
                      Deal 0{index + 1}
                    </span>
                  </div>
                  <h3 className="relative mt-4 font-extrabold text-[#0C3D4C]">{title}</h3>
                  <p className="relative mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  <button
                    type="button"
                    onClick={() => setShowDownload(true)}
                    className={`relative mt-4 inline-flex items-center gap-1.5 text-xs font-bold transition group-hover:gap-2.5 ${theme.link}`}
                  >
                    {cta} <ArrowRight size={14} />
                  </button>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <p className="mt-5 text-[10px] leading-5 text-slate-500">
          Offers are subject to eligibility, partner availability and applicable terms. Review the
          final offer details in the SaveDost app before payment.
        </p>
      </section>

      {showDownload &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[1100] flex items-center justify-center overflow-y-auto bg-[#132238]/75 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="offers-download-title"
            onMouseDown={(event) => event.target === event.currentTarget && setShowDownload(false)}
          >
            <div className="relative my-auto w-full max-w-[760px] overflow-hidden rounded-2xl bg-white shadow-[0_26px_80px_rgba(0,0,0,.35)]">
              <button
                type="button"
                onClick={() => setShowDownload(false)}
                aria-label="Close download app popup"
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-[#101010] text-white transition hover:bg-[#026381] sm:right-6 sm:top-5"
              >
                <X size={20} strokeWidth={3} />
              </button>

              <div className="px-5 pb-6 pt-7 sm:px-8 sm:pb-8 sm:pt-8">
                <h2
                  id="offers-download-title"
                  className="pr-12 text-center text-xl font-extrabold text-[#0C3D4C] sm:pr-0 sm:text-2xl"
                >
                  Continue with the SaveDost App
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-center text-sm leading-6 text-slate-600">
                  Open the app to check current eligibility and terms for this {serviceName} offer.
                </p>

                <div className="mt-7 grid items-center gap-6 rounded-2xl bg-[#f2f7fb] p-5 sm:grid-cols-[1fr_230px] sm:p-7">
                  <div className="text-[#132238]">
                    <h3 className="text-lg font-extrabold">Steps to scan QR Code</h3>
                    <ol className="mt-5 space-y-4 text-sm leading-5 sm:text-base">
                      <li className="flex gap-3">
                        <span className="font-bold">1.</span>
                        <span>Open your phone camera</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">2.</span>
                        <span>Point the camera at the QR code</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">3.</span>
                        <span>Open the link and download the SaveDost app</span>
                      </li>
                    </ol>
                  </div>
                  <div className="mx-auto rounded-xl bg-white p-3 shadow-[0_8px_24px_rgba(12,61,76,.14)]">
                    <Image
                      src="/MainQR.jpeg"
                      alt="QR code to download the SaveDost app"
                      width={210}
                      height={210}
                      className="h-44 w-44 object-contain sm:h-52 sm:w-52"
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[245px] text-sm font-semibold leading-5 text-[#132238] sm:text-base">
                    Download the app to view and claim eligible offers.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://apps.apple.com/in/app/finunique/id6760808229"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-w-[142px] items-center justify-center gap-2 rounded-lg border border-slate-400 bg-white px-3 py-2 text-black transition hover:bg-slate-50"
                    >
                      <FaApple size={28} aria-hidden="true" />
                      <span className="text-left">
                        <span className="block text-[9px] leading-none">Download on the</span>
                        <span className="mt-1 block text-base font-bold leading-none">
                          App Store
                        </span>
                      </span>
                    </Link>
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.utility.finunique"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-w-[150px] items-center justify-center gap-2 rounded-lg border border-slate-400 bg-white px-3 py-2 text-black transition hover:bg-slate-50"
                    >
                      <Image
                        src="/image/playstorelogo.png"
                        alt="Google Play"
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                      />
                      <span className="text-left">
                        <span className="block text-[9px] uppercase leading-none">Get it on</span>
                        <span className="mt-1 block text-base font-bold leading-none">
                          Google Play
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
