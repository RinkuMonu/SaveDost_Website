"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function PancardAllotment() {
  const links = [
    { label: "Read Guidelines", href: "/pan-card/guidelines" },
    { label: "Read Instructions", href: "/pan-card/instructions" },
    { label: "Documents Required", href: "/pan-card/documents-required" },
  ];

  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-[#d7e9ed] bg-white shadow-[0_12px_30px_rgba(12,61,76,0.07)]">
      <div className="mx-auto grid items-center gap-8 p-6 sm:p-9 md:grid-cols-2 lg:p-12">
        {/* Left Side */}
        <div className="w-full z-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
            For Indian Citizens
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-snug text-[#0C3D4C] sm:text-3xl md:text-4xl">
            Allotment of new PAN (Form 49A) <br />
          </h2>

          <p className="relative mt-5 text-sm leading-7 text-slate-600">
            This form should be used if you have not previously applied for a PAN or do not
            currently possess one. You can also verify whether a PAN has already been allotted to
            you through the official Income Tax Department portal.
            <br />
            SaveDost offers a seamless online PAN application service, providing a digital PAN
            within a short turnaround time. The entire submission process is paperless, secure, and
            completed through our online PAN service portal for a smooth and hassle-free experience.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3 md:grid-cols-1">
            {links.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center justify-between rounded-xl border border-[#d7e9ed] bg-[#f7fbfc] px-4 py-3 text-sm font-bold text-[#0C3D4C] transition hover:border-[#8fcbd8] hover:bg-[#eaf6f9]"
              >
                {item.label}
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative z-10 flex min-h-[330px] w-full items-center justify-center rounded-2xl bg-[#eaf6f9]">
          <Image
            src="/image/pan-img1.png"
            width={360}
            height={360}
            alt="image"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
