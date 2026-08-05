"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, X } from "lucide-react";
import { FaApple } from "react-icons/fa";

export default function ReferAppButton({ children, className = "" }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children} <ArrowRight size={17} />
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[1100] flex items-center justify-center overflow-y-auto bg-[#132238]/75 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="refer-download-title"
            onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}
          >
            <div className="relative my-auto w-full max-w-[760px] overflow-hidden rounded-3xl bg-white shadow-[0_28px_80px_rgba(0,0,0,.35)]">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close download app popup"
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-[#101010] text-white transition hover:bg-[#026381] sm:right-6 sm:top-5"
              >
                <X size={19} />
              </button>
              <div className="px-5 pb-6 pt-7 sm:px-8 sm:pb-8">
                <p className="text-center text-xs font-extrabold uppercase tracking-[.18em] text-[#0289ad]">
                  Refer & Earn ₹99
                </p>
                <h2
                  id="refer-download-title"
                  className="mt-2 pr-10 text-center text-2xl font-extrabold text-[#0C3D4C] sm:pr-0"
                >
                  Start referring with the SaveDost app
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-slate-600">
                  Download the app, sign in and open Refer & Earn to share your unique referral
                  link.
                </p>
                <div className="mt-7 grid items-center gap-6 rounded-2xl bg-[#f2f7fb] p-5 sm:grid-cols-[1fr_230px] sm:p-7">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#132238]">Scan to download</h3>
                    <ol className="mt-5 space-y-4 text-sm leading-5 text-slate-700 sm:text-base">
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
                        <span>Install the app and start referring</span>
                      </li>
                    </ol>
                  </div>
                  <div className="mx-auto rounded-2xl border border-[#d7e9ed] bg-white p-3 shadow-lg">
                    <Image
                      src="/MainQR.jpeg"
                      alt="QR code to download the SaveDost app"
                      width={210}
                      height={210}
                      className="h-44 w-44 object-contain sm:h-52 sm:w-52"
                    />
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[240px] text-sm font-semibold leading-5 text-[#132238]">
                    Download SaveDost and access your referral code.
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
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
