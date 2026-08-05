"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import {
  FileText,
  CreditCard,
  FileCheck,
  Info,
  ChevronRight,
  Clock,
  Shield,
  Truck,
  BookOpen,
  CheckSquare,
  MapPin,
  ArrowRight,
  LockKeyhole,
  X,
} from "lucide-react";
import { MdIntegrationInstructions } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { getClientSession } from "./auth/sessionClient";

export default function PanCorrectionCard() {
  const [showDownload, setShowDownload] = useState(false);

  useEffect(() => {
    const continueAmendment =
      new URLSearchParams(window.location.search).get("panAmendment") === "1";
    if (!continueAmendment) return;

    getClientSession().then((session) => {
      if (session?.authenticated) {
        setShowDownload(true);
        window.history.replaceState({}, "", "/pan-card#pan-amendment");
      }
    });
  }, []);

  useEffect(() => {
    if (!showDownload) return undefined;
    const closeOnEscape = (event) => event.key === "Escape" && setShowDownload(false);
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [showDownload]);

  const startAmendment = async () => {
    const session = await getClientSession({ force: true });
    if (!session?.authenticated) {
      const returnTo = "/pan-card?panAmendment=1#pan-amendment";
      window.location.href = `/login?returnTo=${encodeURIComponent(returnTo)}`;
      return;
    }
    setShowDownload(true);
  };

  const features = [
    {
      icon: <Clock className="h-6 w-6 text-[#0C3D4C]" />,
      title: "Quick Process",
      description: "Get your PAN card reprinted in minutes.",
    },
    {
      icon: <Shield className="h-6 w-6 text-[#0C3D4C]" />,
      title: "Secure & Safe",
      description: "Your data is protected with top-level security.",
    },
    {
      icon: <Truck className="h-6 w-6 text-[#0C3D4C]" />,
      title: "Home Delivery",
      description: "Receive your PAN card at your doorstep.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-[#0C3D4C]" />,
      title: "Easy Payment",
      description: "Convenient and secure online payments.",
    },
  ];

  const links = [
    {
      name: "Read Guidelines",
      icon: <BookOpen size={16} />,
      link: "/pan-card/alteration-guidelines",
    },
    {
      name: "Read Instructions",
      icon: <MdIntegrationInstructions size={16} />,
      link: "/pan-card/alteration-instruction",
    },
    {
      name: "Documents Required",
      icon: <FileCheck size={16} />,
      link: "/pan-card/alteration-documents",
    },
    {
      name: "Do’s & Don’ts",
      icon: <CheckSquare size={16} />,
      link: "/pan-card/alteration-do-donts",
    },
  ];

  return (
    <>
      <section
        id="pan-amendment"
        className="scroll-mt-24 bg-amber-50 px-4 py-12 sm:py-16 lg:px-0 lg:py-20"
      >
        <div className="max-w-6xl mx-auto ">
          {/* Heading */}
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0C3D4C] leading-snug">
              Alteration or Amendment of PAN Data
            </h3>
            <p className="mt-3 text-gray-600 text-base">
              Easily update or correct your PAN details with our secure and efficient process.
            </p>
          </div>

          {/* Main Layout */}
          <div className="flex flex-col md:flex-row gap-10 items-stretch">
            <div className="grid md:grid-cols-2 md:w-full bg-gradient-to-br from-white to-[#F8FAFB] border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 gap-4">
              <div className="">
                <p className="text-gray-700  text-lg leading-relaxed mb-8">
                  Choose this option if you already have a PAN and need to update or correct your
                  details, such as your name, father’s name, or date of birth. <br />
                  A new PAN card will be issued with the same PAN number and the updated
                  information. <br />
                  With the SaveDost PAN service portal, the entire process is fully online, secure,
                  and verified digitally to ensure fast and accurate results.
                </p>

                <button
                  type="button"
                  onClick={startAmendment}
                  className="inline-flex items-center justify-center gap-3 bg-[#0C3D4C] text-white font-semibold px-7 py-3 rounded-xl shadow-md hover:bg-[#094657] hover:shadow-lg transition-all duration-300"
                >
                  Update PAN Details
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
              {/* Right Section (Quick Links) */}
              <div className=" rounded-2xl ">
                <h3 className="font-semibold text-gray-900 mb-6 flex items-center gap-2 text-lg">
                  <Info size={20} className="text-[#0C3D4C]" /> Quick Links
                </h3>

                <div className="divide-y divide-gray-100">
                  {links.map((link, i) => (
                    <Link
                      href={link.link}
                      key={i}
                      className="w-full flex items-center justify-between py-3 px-2 rounded-lg hover:bg-[#F3FAFB] text-gray-700 font-medium transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#0C3D4C]">{link.icon}</span>
                        <span>{link.name}</span>
                      </div>
                      <ChevronRight
                        size={16}
                        className="text-gray-400 group-hover:text-[#0C3D4C] group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showDownload &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[1100] flex items-center justify-center overflow-y-auto bg-[#132238]/75 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pan-amendment-app-title"
            onMouseDown={(event) => event.target === event.currentTarget && setShowDownload(false)}
          >
            <div className="relative my-auto w-full max-w-[680px] overflow-hidden rounded-2xl bg-white shadow-[0_28px_80px_rgba(0,0,0,.35)]">
              <button
                type="button"
                onClick={() => setShowDownload(false)}
                aria-label="Close app download"
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-[#101010] text-white transition hover:bg-[#026381] sm:right-6 sm:top-5"
              >
                <X size={19} />
              </button>
              <div className="px-5 pb-5 pt-5 sm:px-7 sm:pb-6">
                <p className="text-center text-xs font-extrabold uppercase tracking-[.18em] text-[#0289ad]">
                  Continue securely
                </p>
                <h2
                  id="pan-amendment-app-title"
                  className="mt-2 pr-10 text-center text-2xl font-extrabold text-[#0C3D4C] sm:pr-0"
                >
                  Continue PAN amendment in the app
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-center text-sm leading-5 text-slate-600">
                  Scan the QR code or use an app-store link to update or correct your PAN details.
                </p>
                <div className="mt-4 grid items-center gap-4 rounded-xl bg-[#f2f7fb] p-4 sm:grid-cols-[1fr_180px]">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#132238]">Scan to download</h3>
                    <ol className="mt-3 space-y-2 text-sm leading-5 text-slate-700">
                      <li className="flex gap-3">
                        <span className="font-black text-[#026381]">1.</span>
                        <span>Open your phone camera</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-black text-[#026381]">2.</span>
                        <span>Point it at the QR code</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-black text-[#026381]">3.</span>
                        <span>Install the app and open PAN correction</span>
                      </li>
                    </ol>
                  </div>
                  <div className="mx-auto rounded-2xl border border-[#d7e9ed] bg-white p-3 shadow-lg">
                    <Image
                      src="/MainQR.jpeg"
                      alt="QR code to download the SaveDost app"
                      width={160}
                      height={160}
                      className="h-36 w-36 object-contain sm:h-40 sm:w-40"
                    />
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[245px] text-sm font-semibold leading-5 text-[#132238]">
                    Download SaveDost to complete your PAN amendment securely.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://apps.apple.com/in/app/finunique/id6760808229"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-w-[142px] items-center justify-center gap-2 rounded-lg bg-black px-3 py-2 text-white"
                    >
                      <FaApple size={28} />
                      <span className="text-left">
                        <span className="block text-[9px] leading-none">Download on the</span>
                        <span className="mt-1 block text-base font-bold leading-none">
                          App Store
                        </span>
                      </span>
                    </Link>
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.utility.finunique"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-w-[150px] items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-black"
                    >
                      <Image
                        src="/image/playstorelogo.png"
                        alt="Google Play"
                        width={28}
                        height={28}
                      />
                      <span className="text-left">
                        <span className="block text-[9px] leading-none">GET IT ON</span>
                        <span className="mt-1 block text-base font-bold leading-none">
                          Google Play
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
                <p className="mt-3 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                  <LockKeyhole size={13} /> Secure signed-in PAN amendment journey
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
