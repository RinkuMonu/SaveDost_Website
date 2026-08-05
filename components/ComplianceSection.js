"use client";

import Image from "next/image";

const licences = [
  { src: "/home/iaf-logo.png", alt: "IAF certification", title: "Globally Accredited" },
  { src: "/home/iso-logo.png", alt: "ISO certification", title: "ISO Certified" },
  { src: "/home/kab-logo.png", alt: "KAB accreditation", title: "Quality Accredited" },
  { src: "/home/EGAC-logo.png", alt: "EGAC accreditation", title: "Internationally Accredited" },
  { src: "/home/CERTIFIED-logo.png", alt: "Certified business", title: "Certified Organisation" },
  { src: "/home/eu-logo.png", alt: "EU certification", title: "International Presence" },
  { src: "/home/msme-logo.png", alt: "Ministry of MSME registration", title: "Certified Business" },
  {
    src: "/home/startupindia-logo.png",
    alt: "Startup India recognition",
    title: "Recognised Startup",
  },
];

function LicenceCard({ licence, duplicate = false }) {
  return (
    <article
      className="flex h-[210px] w-[220px] shrink-0 flex-col rounded-[22px] border border-[#d9e1e5] bg-white p-5 shadow-[0_8px_24px_rgba(12,61,76,.035)] transition duration-300 hover:-translate-y-1 hover:border-[#a9d4dc] hover:shadow-[0_18px_40px_rgba(12,61,76,.10)] sm:h-[230px] sm:w-[250px] sm:p-6"
      aria-hidden={duplicate ? "true" : undefined}
    >
      <div className="flex min-h-0 flex-1 items-center justify-center px-4">
        <Image
          src={licence.src}
          alt={duplicate ? "" : licence.alt}
          width={210}
          height={120}
          className="max-h-[82px] w-auto max-w-[155px] object-contain sm:max-h-[96px] sm:max-w-[175px]"
        />
      </div>
      <div className="border-t border-[#dfe5e8] pt-4 text-center">
        <h3 className="text-base font-extrabold tracking-tight text-[#111827] sm:text-lg">
          {licence.title}
        </h3>
      </div>
    </article>
  );
}

export default function ComplianceSection() {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0289ad]">
          Key licences
        </p>
        <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
          Certified, recognised and trusted
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Recognised by government initiatives and leading national and international certification
          bodies.
        </p>
      </div>

      <div
        className="compliance-marquee group relative mt-10 overflow-hidden py-4 sm:mt-14"
        aria-label="SaveDost licences and certifications"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-28" />

        <div className="compliance-marquee-track flex w-max gap-6 pr-6">
          {licences.map((licence) => (
            <LicenceCard key={licence.src} licence={licence} />
          ))}
          {licences.map((licence) => (
            <LicenceCard key={`duplicate-${licence.src}`} licence={licence} duplicate />
          ))}
        </div>
      </div>
    </section>
  );
}
