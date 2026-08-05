"use client";
import Image from "next/image";
import Link from "next/link";

export default function FastagBannerSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="uppercase tracking-widest text-sm font-semibold text-sky-700 mb-3">
            FASTag Recharge
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
            Pay Fast, <br className="hidden md:block" />
            Travel Smart
          </h1>

          <p className="text-slate-600 max-w-xl mb-8">
            Top up your FASTag instantly and experience hassle-free, cashless toll payments on all
            national highways. Skip the queues, monitor your transactions in real time, and make
            every journey smooth and convenient.
          </p>

          <Link href="/fastag-recharge" className="pan-hero-button">
            Recharge Now
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[280px] md:h-[360px] lg:h-[420px]">
          <Image
            src="/fastag/fastag-banner.jpg"
            alt="FASTag Recharge"
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
