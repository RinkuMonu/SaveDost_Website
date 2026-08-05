import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Herobannerbike({ data }) {
  return (
    <>
      <div className="relative isolate flex min-h-145 flex-col items-center justify-between overflow-hidden border-b border-[#0c3d4c]/10 md:min-h-[min(680px,78svh)] md:flex-row lg:h-[70vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data?.bgImage})` }}
        ></div>
        <div className="absolute inset-0 z-0 bg-linear-to-t from-[#026381]/65 to-[#026381]/20 md:bg-[linear-gradient(270deg,rgba(2,99,129,0.6)_0%,rgba(2,99,129,0.28)_48%,rgba(0,168,232,0.03)_78%)]" />
        <div className="z-10 mx-auto">
          {/* <div className="path-container absolute -left-32 -top-36 -rotate-45 z-40">
                        <svg width="100%" height="300" viewBox="0 0 1000 300">
                            <path id="flightPath" d="M 0 100 C 300 -150, 300 250, 450 200 S 600 -150, 750 100" stroke="black" strokeWidth="3" fill="none" strokeDasharray="10,10" />
                        </svg>
                        <div className="plane">
                            <div className="light"></div>
                            <Image width={40} height={40} src="/booking/plane.png" alt="Plane" className="planeimg" />
                        </div>
                    </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center">
            <div></div>

            <div className="ml-auto w-full max-w-2xl px-6 py-10 md:px-10 lg:py-16">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8beaf2]">
                {data?.subheading}
              </p>

              <h2 className="mt-2 max-w-162.5 text-balance text-[clamp(2.7rem,5vw,4.7rem)] font-bold leading-[1.02] tracking-[-0.045em] text-white drop-shadow-[0_2px_10px_rgba(0,35,46,0.12)]">
                {data.heading}
              </h2>

              <p className="mt-4 mb-8 text-base text-white/90 max-w-md">{data.description}</p>

              {data?.paymentHref && (
                <Link href={data.paymentHref} className="pan-hero-button">
                  {data.paymentLabel || "Pay Insurance Premium"}
                  <span className="ml-2 text-lg" aria-hidden="true">
                    →
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
