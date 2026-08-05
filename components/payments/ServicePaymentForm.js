"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CircleUserRound, LockKeyhole, X } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { getClientSession } from "../auth/sessionClient";

export default function ServicePaymentForm({
  slug,
  title,
  fields,
  action,
  modes,
  remainingServices,
}) {
  const [showDownload, setShowDownload] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    getClientSession().then(setSession);
  }, []);

  const requireSignin = async () => {
    let currentSession = session;
    if (!currentSession) {
      currentSession = await getClientSession();
      setSession(currentSession);
    }

    if (!currentSession?.authenticated) setShowSignin(true);
  };

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

  return (
    <>
      <div className="w-full max-w-[450px] rounded-[22px] border border-[#d9edf2] bg-white p-5 shadow-[0_16px_38px_rgba(12,61,76,0.12)] sm:p-7 lg:p-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#026381]">
          SaveDost Payments
        </p>
        <h1 className="mt-2 text-xl font-extrabold tracking-tight text-[#0C3D4C]">{title}</h1>

        {modes && (
          <div className="mt-4 flex gap-5">
            {modes.map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-2 text-sm text-slate-700"
              >
                <input
                  type="radio"
                  name="payment-mode"
                  value={item}
                  defaultChecked={item === modes[0]}
                  className="h-4 w-4 accent-[#00a8e8]"
                />
                {item}
              </label>
            ))}
          </div>
        )}

        <form
          className="mt-6 space-y-5"
          onSubmit={(event) => {
            event.preventDefault();
            setShowDownload(true);
          }}
        >
          {fields.map((field, index) => (
            <label key={field} className="block">
              <span className="text-xs font-medium text-slate-500">{field}</span>
              {slug === "more" && field === "Select Service" ? (
                <select
                  id={`${slug}-service`}
                  name="service"
                  aria-label="Select Service"
                  defaultValue=""
                  onChange={(event) => index === 0 && event.target.value && requireSignin()}
                  className="mt-2 w-full rounded-lg border border-[#cfe5eb] bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/10"
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  {remainingServices.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={`${slug}-field-${index}`}
                  name={`serviceField${index + 1}`}
                  type="text"
                  aria-label={field}
                  onChange={(event) => index === 0 && event.target.value && requireSignin()}
                  className="mt-1.5 w-full border-0 border-b border-[#cfe5eb] bg-transparent px-0 py-1.5 text-sm text-slate-900 outline-none transition focus:border-[#00a8e8]"
                />
              )}
            </label>
          ))}

          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#00a8e8] to-[#026381] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(2,99,129,0.24)] transition hover:-translate-y-0.5 hover:from-[#18b6ec] hover:to-[#0C3D4C]"
          >
            {action}
          </button>
        </form>

        <p className="mt-4 text-center text-[11px] leading-4 text-slate-400">
          Secure payments powered by FinUnique. Your details are protected.
        </p>
      </div>

      {showSignin &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[1100] flex items-center justify-center bg-[#132238]/75 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="signin-required-title"
            onMouseDown={(event) => event.target === event.currentTarget && setShowSignin(false)}
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-7 text-center shadow-[0_28px_80px_rgba(0,0,0,.35)] sm:p-9">
              <button
                type="button"
                onClick={() => setShowSignin(false)}
                aria-label="Close sign in popup"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-[#e4f5f8] hover:text-[#026381]"
              >
                <X size={18} />
              </button>
              <span className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-[linear-gradient(145deg,#e5f7fa,#ccecf3)] text-[#026381]">
                <CircleUserRound size={42} />
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-[.17em] text-[#00a8e8]">
                Account required
              </p>
              <h2
                id="signin-required-title"
                className="mt-2 text-2xl font-extrabold text-[#0C3D4C]"
              >
                Please sign in first
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Sign in with your registered mobile number before continuing with this payment
                service.
              </p>
              <Link
                href={`/login?returnTo=/service-payment/${slug}`}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,#00a8e8,#026381)] px-5 py-3.5 text-sm font-bold text-white shadow-[0_9px_22px_rgba(2,99,129,.22)] transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <LockKeyhole size={18} /> Sign In to Continue
              </Link>
              <button
                type="button"
                onClick={() => setShowSignin(false)}
                className="mt-3 text-sm font-semibold text-slate-500 hover:text-[#026381]"
              >
                Cancel
              </button>
            </div>
          </div>,
          document.body
        )}

      {showDownload &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-[#132238]/75 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-app-title"
            onMouseDown={(event) => event.target === event.currentTarget && setShowDownload(false)}
          >
            <div className="relative my-auto w-full max-w-[760px] overflow-hidden rounded-2xl bg-white shadow-[0_26px_80px_rgba(0,0,0,0.35)]">
              <button
                type="button"
                onClick={() => setShowDownload(false)}
                aria-label="Close download app popup"
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-[#101010] text-white transition hover:bg-[#026381] sm:right-6 sm:top-5"
              >
                <X size={20} strokeWidth={3} />
              </button>

              <div className="px-5 pb-6 pt-7 sm:px-8 sm:pb-8 sm:pt-8">
                <h2
                  id="download-app-title"
                  className="pr-12 text-center text-xl font-extrabold text-[#0C3D4C] sm:pr-0 sm:text-2xl"
                >
                  Continue with the SaveDost App
                </h2>

                <div className="mt-7 grid items-center gap-6 rounded-2xl bg-[#f2f7fb] p-5 sm:grid-cols-[1fr_230px] sm:p-7">
                  <div className="text-[#132238]">
                    <h3 className="text-lg font-extrabold">Steps to scan QR Code</h3>
                    <ol className="mt-5 space-y-4 text-sm leading-5 sm:text-base">
                      <li className="flex gap-3">
                        <span className="font-bold">1.</span>
                        <span>Open your phone camera</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">2.</span>
                        <span>Point the camera at the QR code</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">3.</span>
                        <span>Open the link and download the SaveDost app</span>
                      </li>
                    </ol>
                  </div>
                  <div className="mx-auto rounded-xl bg-white p-3 shadow-[0_8px_24px_rgba(12,61,76,0.14)]">
                    <Image
                      src="/MainQR.jpeg"
                      alt="QR code to download the SaveDost app"
                      width={210}
                      height={210}
                      className="h-44 w-44 object-contain sm:h-52 sm:w-52"
                    />
                  </div>
                </div>

                <p className="mt-6 text-sm leading-6 text-slate-700 sm:text-base">
                  By continuing, you agree to our{" "}
                  <Link href="/privacy-policy" className="font-bold text-[#00a8e8] hover:underline">
                    privacy policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms-of-use" className="font-bold text-[#00a8e8] hover:underline">
                    terms of use
                  </Link>
                  .
                </p>

                <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[225px] text-sm font-semibold leading-5 text-[#132238] sm:text-base">
                    To complete your payment, download the SaveDost App
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://apps.apple.com/in/app/finunique/id6760808229"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-w-[142px] items-center justify-center gap-2 rounded-lg border border-slate-400 bg-white px-3 py-2 text-black transition hover:bg-slate-50"
                    >
                      <FaApple size={28} aria-hidden="true" />
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
                      className="flex min-w-[150px] items-center justify-center gap-2 rounded-lg border border-slate-400 bg-white px-3 py-2 text-black transition hover:bg-slate-50"
                    >
                      <Image
                        src="/image/playstorelogo.png"
                        alt="Google Play"
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                      />
                      <span className="text-left">
                        <span className="block text-[9px] uppercase leading-none">Get it on</span>
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
