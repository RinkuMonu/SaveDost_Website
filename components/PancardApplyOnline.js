"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { ArrowRight, LockKeyhole, X } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { getClientSession } from "./auth/sessionClient";

const PancardApplyOnline = () => {
  const [showDownload, setShowDownload] = useState(false);

  useEffect(() => {
    const continueApply = new URLSearchParams(window.location.search).get("panApply") === "1";
    if (!continueApply) return;
    getClientSession().then((session) => {
      if (session?.authenticated) {
        setShowDownload(true);
        window.history.replaceState({}, "", "/pan-card#pan-apply");
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

  const startApplication = async () => {
    const session = await getClientSession({ force: true });
    if (!session?.authenticated) {
      window.location.href = `/login?returnTo=${encodeURIComponent("/pan-card?panApply=1#pan-apply")}`;
      return;
    }
    setShowDownload(true);
  };

  return (
    <>
      <section id="pan-apply" className="scroll-mt-24 bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[28px] border border-[#d7e9ed] bg-[#f7fbfc] p-6 sm:p-9 lg:grid-cols-[1fr_.55fr] lg:p-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center text-[#133845]">
                <Image
                  src="/image/thumbprint.png"
                  alt="Thumbprint Icon"
                  width={50}
                  height={50}
                  className="-ml-2 "
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
                  Online Application
                </p>
                <h3 className="mt-2 text-3xl font-extrabold text-[#0C3D4C] sm:text-4xl">
                  Apply for PAN with the correct form
                </h3>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              PAN applications must be submitted using the prescribed forms issued by the Income Tax
              Department (ITD). Indian citizens are required to apply using Form 49A, while foreign
              citizens must apply through Form 49AA.
            </p>

            <p className="text-sm leading-7 text-slate-600">
              For individual and HUF applicants who select an office address as the communication
              address, both office address proof and residential address proof must be submitted to
              SaveDost.
            </p>

            <p className="text-sm leading-7 text-slate-600">
              As per RBI guidelines, all online payments require PIN authentication. Please ensure
              that your debit or credit card PIN is activated with your bank before making any
              payment.
            </p>

            <button
              type="button"
              onClick={startApplication}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#026381] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(2,99,129,.2)] transition hover:-translate-y-0.5 hover:bg-[#0C3D4C] sm:w-auto"
            >
              Apply for a New PAN <ArrowRight size={17} />
            </button>
          </div>

          {/* Right Graphic */}
          <div className="relative flex min-h-[300px] items-center justify-center rounded-2xl bg-[#eaf6f9] p-5">
            <Image
              src="/image/apllyonline3d.png"
              alt="apply online"
              width={300}
              height={300}
              className="h-[280px] w-auto object-contain"
            />
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
            aria-labelledby="pan-app-title"
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
                  id="pan-app-title"
                  className="mt-2 pr-10 text-center text-2xl font-extrabold text-[#0C3D4C] sm:pr-0"
                >
                  Apply through the SaveDost app
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-center text-sm leading-5 text-slate-600">
                  Scan the QR code or use an app-store link to continue your new PAN application.
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
                        <span>Install the app and start your PAN application</span>
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
                    Download SaveDost to complete your PAN application securely.
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
                  <LockKeyhole size={13} /> Secure signed-in PAN application journey
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default PancardApplyOnline;
