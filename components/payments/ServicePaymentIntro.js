"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeIndianRupee,
  Bike,
  BookOpen,
  Building2,
  BusFront,
  Cable,
  CalendarDays,
  CarFront,
  Check,
  CircleDollarSign,
  CircleEllipsis,
  Coins,
  CreditCard,
  Droplets,
  Fuel,
  Gift,
  GraduationCap,
  HandHeart,
  Hotel,
  House,
  IndianRupee,
  Landmark,
  Lightbulb,
  LockKeyhole,
  PlaneTakeoff,
  RadioTower,
  ReceiptIndianRupee,
  Router,
  SatelliteDish,
  ShieldCheck,
  Sparkles,
  Smartphone,
  TrainFront,
  Tv,
  UsersRound,
  WalletCards,
} from "lucide-react";

const serviceIconSets = {
  mobile: [Smartphone, RadioTower, IndianRupee, WalletCards],
  fastag: [CarFront, RadioTower, IndianRupee, WalletCards],
  dth: [SatelliteDish, Tv, IndianRupee, RadioTower],
  electricity: [Lightbulb, ReceiptIndianRupee, IndianRupee, Building2],
  "loan-emi": [BadgeIndianRupee, CalendarDays, Landmark, WalletCards],
  insurance: [ShieldCheck, ReceiptIndianRupee, UsersRound, WalletCards],
  "piped-gas": [Fuel, ReceiptIndianRupee, IndianRupee, Building2],
  cylinder: [Fuel, House, IndianRupee, CalendarDays],
  water: [Droplets, ReceiptIndianRupee, IndianRupee, Building2],
  broadband: [Router, RadioTower, ReceiptIndianRupee, Smartphone],
  challan: [CarFront, Landmark, ReceiptIndianRupee, IndianRupee],
  nps: [Landmark, Coins, CalendarDays, BadgeIndianRupee],
  "cable-tv": [Cable, Tv, ReceiptIndianRupee, RadioTower],
  "prepaid-meter": [Lightbulb, WalletCards, IndianRupee, ReceiptIndianRupee],
  "credit-card-bill": [CreditCard, ReceiptIndianRupee, CalendarDays, WalletCards],
  "recurring-deposit": [Landmark, CalendarDays, Coins, BadgeIndianRupee],
  "rental-payment": [House, Building2, CalendarDays, IndianRupee],
  subscription: [CalendarDays, CreditCard, ReceiptIndianRupee, Smartphone],
  "education-fees": [GraduationCap, BookOpen, ReceiptIndianRupee, IndianRupee],
  ncmc: [CreditCard, TrainFront, BusFront, IndianRupee],
  "housing-society": [Building2, House, UsersRound, ReceiptIndianRupee],
  "club-fees": [UsersRound, CalendarDays, ReceiptIndianRupee, WalletCards],
  municipal: [Landmark, Building2, ReceiptIndianRupee, IndianRupee],
  donation: [HandHeart, Gift, CircleDollarSign, ReceiptIndianRupee],
  "gift-card": [Gift, CreditCard, IndianRupee, WalletCards],
  "car-insurance": [CarFront, ShieldCheck, ReceiptIndianRupee, WalletCards],
  "bike-insurance": [Bike, ShieldCheck, ReceiptIndianRupee, WalletCards],
  "taxi-insurance": [CarFront, ShieldCheck, UsersRound, ReceiptIndianRupee],
  "commercial-vehicle-insurance": [CarFront, ShieldCheck, Building2, ReceiptIndianRupee],
  "bus-booking": [BusFront, CalendarDays, WalletCards, ReceiptIndianRupee],
  "train-booking": [TrainFront, CalendarDays, WalletCards, ReceiptIndianRupee],
  "flight-booking": [PlaneTakeoff, CalendarDays, WalletCards, ReceiptIndianRupee],
  "hotel-booking": [Hotel, CalendarDays, WalletCards, ReceiptIndianRupee],
  more: [CircleEllipsis, Smartphone, WalletCards, ShieldCheck],
};

const orbitStyles = [
  { position: "left-[8%] top-[18%]", color: "bg-[#e5f5f8] text-[#026381]", delay: 0 },
  { position: "right-[8%] top-[20%]", color: "bg-[#edf7e8] text-[#57932d]", delay: 0.7 },
  { position: "bottom-[13%] left-[15%]", color: "bg-[#fff4df] text-[#c27a12]", delay: 1.2 },
  { position: "bottom-[14%] right-[13%]", color: "bg-[#eeeafd] text-[#6650b8]", delay: 0.35 },
];

export default function ServicePaymentIntro({
  serviceSlug = "more",
  serviceTitle = "SaveDost service",
}) {
  const reduceMotion = useReducedMotion();
  const serviceIcons = serviceIconSets[serviceSlug] || [
    CircleEllipsis,
    CreditCard,
    IndianRupee,
    LockKeyhole,
  ];
  const orbitIconOrder = [serviceIcons[1], serviceIcons[0], serviceIcons[2], serviceIcons[3]];
  const orbitItems = orbitStyles.map((item, index) => ({
    ...item,
    icon: orbitIconOrder[index],
    isActive: index === 1,
  }));
  const PrimaryServiceIcon = serviceIcons[0];

  return (
    <div className="relative hidden min-h-[510px] overflow-hidden rounded-[26px] border border-white/70 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.96),rgba(220,246,249,.56)_48%,rgba(240,250,245,.72)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,.9)] lg:block">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-35 [background-image:radial-gradient(#7ccbd8_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]"
      />
      <div className="absolute left-1/2 top-5 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/80 bg-white/75 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-[#026381] shadow-[0_8px_24px_rgba(12,61,76,.08)] backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#82c950] shadow-[0_0_0_4px_rgba(130,201,80,.14)]" />
        {serviceTitle}
      </div>
      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { opacity: [0.3, 0.8, 0.3], scale: [0.92, 1.06, 0.92] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8ee2ef]/20 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#69c7d7]/45"
      />
      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 21, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#82c950]/30"
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#82c950] shadow-[0_0_18px_rgba(130,201,80,.8)]" />
        <span className="absolute bottom-[9%] right-[10%] h-2.5 w-2.5 rounded-full bg-[#00a8e8] shadow-[0_0_18px_rgba(0,168,232,.75)]" />
      </motion.div>

      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -12, 0], scale: [1, 1.035, 1] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[38px] border border-[#9eddea] bg-[linear-gradient(145deg,#ffffff,#dff5fb)] text-[#026381] shadow-[0_24px_55px_rgba(2,99,129,.2),inset_0_1px_0_rgba(255,255,255,.9)]"
      >
        <motion.span
          animate={reduceMotion ? undefined : { rotate: [0, 8, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="grid h-28 w-28 place-items-center overflow-hidden rounded-[30px] bg-transparent"
        >
          <Image
            src="/image/SaveDost-initial.png"
            alt="SaveDost"
            width={346}
            height={405}
            className="h-24 w-auto object-contain"
          />
        </motion.span>
        <span className="absolute -bottom-3 -right-3 grid h-12 w-12 place-items-center rounded-2xl border-4 border-[#edf9fa] bg-white text-[#026381] shadow-[0_10px_24px_rgba(12,61,76,.18)]">
          <PrimaryServiceIcon size={22} strokeWidth={1.9} />
        </span>
      </motion.div>

      <div className="absolute bottom-[17%] left-1/2 z-10 -translate-x-1/2 rounded-full border border-[#d3eaee] bg-white/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.14em] text-slate-500 shadow-sm backdrop-blur">
        Fast <span className="px-1 text-[#82c950]">•</span> Guided{" "}
        <span className="px-1 text-[#00a8e8]">•</span> Secure
      </div>

      {orbitItems.map(({ icon: Icon, position, color, delay, isActive }) => (
        <motion.div
          key={position}
          aria-label={isActive ? `${serviceTitle} selected` : undefined}
          animate={
            reduceMotion
              ? undefined
              : isActive
                ? { y: [0, -10, 0], scale: [1.08, 1.16, 1.08] }
                : { y: [0, -10, 0], rotate: [0, 3, 0] }
          }
          transition={{
            duration: isActive ? 2.6 : 4.2,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${position} grid h-16 w-16 place-items-center rounded-2xl border backdrop-blur-md transition-all ${
            isActive
              ? "z-20 scale-110 border-[#00a8e8] bg-[linear-gradient(145deg,#00a8e8,#026381)] text-white shadow-[0_0_0_6px_rgba(0,168,232,.14),0_18px_38px_rgba(2,99,129,.32)]"
              : `border-white/90 ${color} opacity-70 shadow-[0_15px_32px_rgba(12,61,76,.11),inset_0_1px_0_rgba(255,255,255,.9)] hover:opacity-100 hover:shadow-[0_18px_38px_rgba(12,61,76,.2)]`
          }`}
        >
          <Icon size={27} strokeWidth={1.7} />
          {isActive && (
            <motion.span
              aria-hidden="true"
              animate={reduceMotion ? undefined : { opacity: [0.65, 0], scale: [1, 1.65] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 -z-10 rounded-2xl border-2 border-[#00a8e8]"
            />
          )}
          <span
            className={`absolute -bottom-1 -right-1 grid h-4 w-4 place-items-center rounded-full border-2 border-white ${isActive ? "bg-[#82c950]" : "bg-[#82c950]"}`}
          >
            {isActive && <Check size={9} strokeWidth={4} className="text-white" />}
          </span>
        </motion.div>
      ))}

      <motion.div
        animate={reduceMotion ? undefined : { x: [0, 8, 0], y: [0, -5, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[18%] top-[46%] grid h-10 w-10 place-items-center rounded-full bg-white text-[#65ae31] shadow-[0_10px_24px_rgba(12,61,76,.12)]"
      >
        <Check size={20} strokeWidth={3} />
      </motion.div>

      {[
        ["left-[25%] top-[10%]", 0],
        ["right-[25%] bottom-[7%]", 0.8],
        ["left-[7%] top-[52%]", 1.5],
      ].map(([position, delay]) => (
        <motion.span
          key={position}
          animate={reduceMotion ? undefined : { opacity: [0.25, 1, 0.25], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${position} text-[#00a8e8]`}
        >
          <Sparkles size={18} />
        </motion.span>
      ))}

      <motion.span
        aria-hidden="true"
        animate={reduceMotion ? undefined : { x: [0, 18, 0], y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#00a8e8]/10 blur-xl"
      />
      <motion.span
        aria-hidden="true"
        animate={reduceMotion ? undefined : { x: [0, -15, 0], y: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-[#82c950]/13 blur-xl"
      />
    </div>
  );
}
