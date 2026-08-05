"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PancardAllotment2() {
  const menuItems = [
    { label: "Read Guidelines", link: "/pan-card/guideline-foreign" },
    { label: "Read Instructions", link: "/pan-card/instruction-foreign" },
    { label: "Documents Required", link: "/pan-card/documents-foreign" },
    { label: "Do’s & Don’ts", link: "/pan-card/do's" },
  ];

  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-[#d7e9ed] bg-white shadow-[0_12px_30px_rgba(12,61,76,0.07)]">
      <div className="mx-auto grid items-center gap-8 p-6 sm:p-9 md:grid-cols-2 lg:p-12">
        {/* Left Image */}
        <div className="relative z-10 flex min-h-[330px] w-full items-center justify-center rounded-2xl bg-[#eaf6f9]">
          <Image
            src="/image/newpan.png"
            width={360}
            height={160}
            alt="image"
            className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]   hidden md:block"
          />
        </div>

        {/* Right Content */}
        <div className="w-full relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
            For Foreign Citizens
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-snug text-[#0C3D4C] sm:text-3xl md:text-4xl">
            Application for Allotment of New PAN (Form 49AA) <br />
          </h2>

          <p className="relative mt-5 text-sm leading-7 text-slate-600">
            Form 49AA is intended for foreign individuals and entities who have not previously been
            allotted a PAN.
            <br />
            With SaveDost’s e-PAN service, you can apply online, upload your documents, and receive
            your PAN number without visiting any office. Our online process is simple, secure, and
            reliable for international applicants.
          </p>

          {/* Buttons */}
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="flex w-full items-center justify-between rounded-xl border border-[#d7e9ed] bg-[#f7fbfc] px-4 py-3 text-sm font-bold text-[#0C3D4C] transition hover:border-[#8fcbd8] hover:bg-[#eaf6f9]"
              >
                {item.label}
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
