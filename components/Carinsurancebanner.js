"use client";
import Image from "next/image";
import Link from "next/link";

export default function CarInsuranceBannerSection() {
  return (
    /* REDESIGNED CAR INSURANCE HERO: visual-only update; destination behavior is unchanged. */
    <section
      className="relative isolate w-full overflow-hidden border-b border-[#0c3d4c]/10 bg-cover bg-center lg:min-h-[560px]"
      style={{
        backgroundImage: "url('/image/2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "560px",
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-12 lg:min-h-[560px] lg:grid-cols-2 lg:py-16">
        {/* Left Content */}
        <div className="max-w-2xl py-6 max-md:self-end max-md:pb-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8beaf2]">
            CAR INSURANCE
          </p>

          <h1 className="mb-5 max-w-[610px] text-balance text-[clamp(2.15rem,9vw,3rem)] font-bold leading-[1.08] tracking-[-0.04em] text-white lg:text-[clamp(2.65rem,4.4vw,4.15rem)] lg:leading-[1.04] lg:tracking-[-0.045em]">
            Protect Your Car. Drive With Confidence.
          </h1>

          <p className="mb-8 max-w-xl text-base leading-7 text-white/90">
            Choose reliable coverage for accidents, theft, natural events, and third-party
            liabilities—all through a simple online process.
          </p>

          <Link href="/service-payment/car-insurance" className="pan-hero-button">
            Pay Car Insurance Premium
            <span className="ml-2 text-lg" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        {/* Right Image */}
        {/* <div className="relative w-full h-[230px] md:h-[300px] lg:h-[370px]">
          <Image
            src="/image/car-insurance.jpg"
            alt="FASTag Recharge"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div> */}
      </div>
    </section>
  );
}
