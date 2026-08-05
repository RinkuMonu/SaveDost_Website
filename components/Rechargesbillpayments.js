"use client";
import Image from "next/image";
import { Smartphone, Flame, PhoneCall, Wifi, Lightbulb, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "mobile",
    title: "Mobile Recharge & Bill Payments",
    desc: "Provide instant prepaid recharges and postpaid bill payments for all major operators with real-time confirmation.",
    points: ["All operators supported", "Instant confirmation", "Prepaid & postpaid"],
    image: "/image/mobile-vec.jpg",
    icon: Smartphone,
    bgcolor: "bg-blue-100",
    badge: "bg-sky-600",
  },
  {
    id: "lpg",
    title: "LPG Gas Cylinder Booking",
    desc: "Book your LPG cylinders instantly from HP, Indane, or Bharat Gas. Quick, secure, and convenient making utility services hassle-free for your customers.",
    points: ["HP, Indane & Bharat Gas Supported", "Fast booking", "Safe & Secure payments"],
    image: "/image/lpg-cylinder.jpg",
    icon: Flame,
    bgcolor: "bg-orange-100",
    badge: "bg-orange-500",
  },
  {
    id: "landline",
    title: "Landline Bill Payments",
    desc: "Enable customers to pay landline bills instantly with live bill fetch and secure digital settlement. Simple, fast, and reliable.",
    points: ["Covers all major operators", "Live bill fetch", "Instant receipt"],
    image: "/image/landline-vec.JPG",
    icon: PhoneCall,
    bgcolor: "bg-purple-100",
    badge: "bg-fuchsia-600",
  },
  {
    id: "broadband",
    title: "Broadband Bill Payments",
    desc: "Help customers stay connected by offering instant broadband bill payments for top ISPs fast, secure, and hassle-free.",
    points: ["Supports all major ISPs", "Quick processing", "High success rate"],
    image: "/image/broadband-vec.jpg",
    icon: Wifi,
    bgcolor: "bg-emerald-100",
    badge: "bg-emerald-600",
  },
  {
    id: "electricity",
    title: "Electricity Bill Payments",
    desc: "Enable customers to pay electricity bills instantly for multiple DISCOMs with real-time bill fetch and secure settlements.",
    points: ["Covers all major boards", "Live bill fetch", "Instant settlement"],
    image: "/image/electricity-vect.webp",
    icon: Lightbulb,
    bgcolor: "bg-yellow-100",
    badge: "bg-yellow-500",
  },
];

export default function RechargeServicesSection() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 space-y-28">
        {services.map((item, index) => {
          const reverse = index % 2 !== 0;
          const Icon = item.icon;

          return (
            <div key={item.id} id={item.id} className="relative scroll-mt-28">
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.bgcolor}  blur-xl opacity-70`}
              />

              <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className={`${reverse ? "lg:order-2" : ""}`}>
                  <div className="relative w-full h-[160px] md:h-[240px] lg:h-[280px] rounded-xl overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                </div>
                <div className={`${reverse ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${item.badge} flex items-center justify-center `}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">{item.title}</h3>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">{item.desc}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
