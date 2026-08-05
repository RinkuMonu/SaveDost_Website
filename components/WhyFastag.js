"use client";
import { ShieldCheck, Zap, Headphones, Users, IndianRupee, LineChart } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "NPCI & Bank Authorized",
    desc: "SaveDost FASTag recharge is fully integrated with NPCI and authorized banks, ensuring safe, secure, and trusted transactions every time.",
  },
  {
    icon: Zap,
    title: "Instant FASTag Recharges",
    desc: "Recharge FASTag in real-time with high success rates, so your customers can breeze through tolls without any payment issues.",
  },
  {
    icon: IndianRupee,
    title: "Attractive Commission",
    desc: "Earn high commissions on every FASTag recharge and boost your daily income effortlessly.",
  },
  {
    icon: Headphones,
    title: "24×7 Technical Support",
    desc: "Our expert team is available anytime to help with FASTag recharges, transactions, or settlement issues.",
  },
  {
    icon: Users,
    title: "Multiple Bank FASTags",
    desc: "Recharge FASTags from all major banks on a single platform, making your store a convenient one-stop toll solution.",
  },
  {
    icon: LineChart,
    title: "Boost Your Business Growth",
    desc: "Attract more customers, increase footfall, and expand your digital services with FASTag recharges.",
  },
];

export default function WhySaveDostFastag() {
  return (
    <section className="bg-yellow-50 py-16 my-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose SaveDost for FASTag Recharges?
          </h2>
          <p className="text-slate-600 text-lg">
            Fast, secure, and profitable, SaveDost helps retailers offer seamless FASTag recharges
            while boosting business and keeping customers happy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-yellow-700" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>

              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
