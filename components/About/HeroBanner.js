import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[#fdfeff] pt-12 pb-20 md:pt-20 md:pb-28 lg:h-[85vh]">
      {/* Customer service cards surrounding the About Us introduction. */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-36 top-12 hidden md:block z-1">
          <div className="w-44 -rotate-3 rounded-md bg-white p-4 shadow-[0_20px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
            <div className="flex items-center justify-start my-10">
              <Image
                src="/about/Utility3d.png"
                alt="Utility payments"
                width={40}
                height={40}
                className="h-18 w-18 object-cover "
              />
            </div>
            <h6 className="text-sm font-semibold text-zinc-900">Bill Payments</h6>
            <p className="mt-1 text-[11px] tracking-wide text-zinc-500 leading-tight">
              Pay supported everyday utility bills through one convenient platform.
            </p>
          </div>
        </div>

        <div className="absolute left-20 bottom-20 hidden md:block">
          <div className="w-52 rotate-8 rounded-md bg-linear-to-r from-[#8bd3ff] to-[#5eb6f4] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
            <div className="flex items-center justify-start my-10">
              <Image
                src="/about/Digital3d.png"
                alt="Mobile recharge"
                width={40}
                height={40}
                className="h-18 w-18 object-cover "
              />
            </div>
            <div className="text-sm font-semibold text-black">Mobile Recharge</div>
            <p className="mt-1 text-[11px] tracking-wide text-black/85 leading-tight">
              Recharge supported mobile numbers with a simple digital experience.
            </p>
          </div>
        </div>

        <div className="absolute right-12 top-16 hidden md:block z-1">
          <div className="w-56 rotate-12 rounded-md bg-[#efe4da] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
            <div className="flex items-center justify-start my-10">
              <Image
                src="/about/user.png"
                alt="User"
                width={40}
                height={40}
                className="h-18 w-18 object-cover"
              />
            </div>
            <div className="text-sm font-semibold text-zinc-900">Financial Services</div>
            <p className="mt-1 text-[11px] tracking-wide text-zinc-600 leading-tight">
              Explore credit, loan, PAN, and other useful financial services.
            </p>
          </div>
        </div>

        <div className="absolute right-6 bottom-16 hidden md:block">
          <div className="w-56 -rotate-2 rounded-md bg-linear-to-r from-[#ffe2ee] to-[#f8b8d0] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
            <div className="flex items-center justify-start my-10">
              <Image
                src="/about/cc3d.png"
                alt="Secure digital services"
                width={40}
                height={40}
                className="h-18 w-18 object-cover "
              />
            </div>
            <div className="text-sm font-semibold text-zinc-900">Secure Access</div>
            <p className="mt-1 text-[11px] tracking-wide text-zinc-700 leading-tight">
              Access supported services with clear steps and secure technology.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto  px-6">
        <div className="relative mx-auto text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-[#0C3D4C] md:text-[3.5rem] lg:text-6xl leading-[0.9]">
            Technology that makes
            <br className="hidden md:block" />
            <span className="bg-linear-to-r from-[#0C3D4C] to-[#018EDE] bg-clip-text text-transparent">
              everyday life easier.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-zinc-600 md:text-xl">
            SaveDost combines practical technology, useful services, and helpful support
            <br className="hidden md:block" />
            to make everyday digital and financial needs simpler for users across India.
          </p>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="mx-auto mt-10 flex max-w-md items-stretch gap-2 rounded-full bg-white p-1 shadow-xl ring-1 ring-black/10"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-3xl bg-transparent px-6 text-lg text-zinc-900 placeholder:text-zinc-400 outline-none"
            />
            <Link href="/contact" className="pan-hero-button min-w-[140px]">
              <span className="flex h-full items-center justify-center">Contact Us</span>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}
