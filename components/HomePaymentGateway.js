// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { CheckCircle2, ArrowRight } from "lucide-react";

// export default function HomePaymentGatewaySection() {
//   const benefits = [
//     "Get detailed insights",
//     "Check overdues",
//     "View active loans",
//     "Access better deals",
//   ];

//   return (
//     <section className="bg-white py-14">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
//           <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-2">
//             {/* Left visual */}
//             <div className="hidden lg:block">
//               <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-fuchsia-800 p-8">
//                 <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
//                 <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-400/10 blur-2xl" />

//                 <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
//                   <Image
//                     src="/home/easy-payment3d.png"
//                     alt="Easy payment illustration"
//                     width={520}
//                     height={520}
//                     className="h-auto w-full object-contain"
//                     style={{ width: "100%", height: "auto" }}
//                     priority
//                   />
//                 </div>

//                 <p className="mt-6 text-sm text-white/75">
//                   Fast checkout • Secure payments • Real-time tracking
//                 </p>
//               </div>
//             </div>

//             {/* Right content */}
//             <div>
//               <span className="inline-flex w-fit rounded-full bg-orange-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700">
//                 Payment Gateway
//               </span>

//               <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
//                 Collecting payments made easy
//               </h2>

//               <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
//                 Receive payments from customers anytime, anywhere. Simplify transactions
//                 and keep your cash flow smooth and hassle-free.
//               </p>

//               <div className="mt-6 grid gap-3 sm:grid-cols-2">
//                 {benefits.map((item) => (
//                   <div key={item} className="flex items-center gap-2 text-slate-700">
//                     <CheckCircle2 className="h-5 w-5 text-emerald-600" />
//                     <span className="text-sm sm:text-base">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-8 flex flex-wrap gap-3">
//                 <Link
//                   href="https://play.google.com/store/apps/details?id=com.utility.finunique"
//                   target="_blank"
//                   className="inline-flex items-center gap-2 rounded-xl bg-[#f56600] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e35b00]"
//                 >
//                   Download app
//                   <Image
//                     src="/image/logoplaystore.png"
//                     width={18}
//                     height={18}
//                     alt="Play Store"
//                     className="h-[18px] w-[18px] object-contain invert"
//                   />
//                 </Link>

//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
//                 >
//                   Know more
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </div>

//               {/* Mobile visual (optional) */}
//               <div className="mt-10 rounded-2xl bg-slate-50 p-6 lg:hidden">
//                 <Image
//                   src="/home/easy-payment3d.png"
//                   alt="Easy payment illustration"
//                   width={520}
//                   height={520}
//                   className="h-auto w-full object-contain"
//                   style={{ width: "100%", height: "auto" }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PaymentHeroSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-8">
      <div className="mx-auto grid  items-center gap-12 px-6 md:px-12 lg:grid-cols-12 lg:px-20">
        {/* Left content */}
        <div className="lg:col-span-6">
          <span className="inline-flex w-fit rounded-full bg-orange-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700">
            Payment Gateway
          </span>
          <h1 className="text-4xl mt-2 font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Collecting payments made easy
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Receive payments from customers anytime, anywhere. Simplify transactions and keep your
            cash flow smooth and hassle-free.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            {/* Primary CTA */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.utility.finunique"
              style={{ background: "linear-gradient(90deg,#358EBA  0%, #24576C 100%)" }}
              className="rounded-full  px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-indigo-500/35"
            >
              Download App
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/contact"
              className="text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700"
            >
              Know More
            </Link>
          </div>
        </div>

        {/* Right visual (overlapping cards) */}
        <div className="lg:col-span-6">
          <Image
            src="/image/payment.png"
            alt="Cards"
            width={900}
            height={600}
            className="h-auto w-full object-contain"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
