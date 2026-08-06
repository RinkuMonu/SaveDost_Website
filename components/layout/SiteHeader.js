"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import { clearClientSession, getClientSession } from "../auth/sessionClient";
import {
  ArrowRight,
  ChevronDown,
  CircleUserRound,
  Download,
  LogOut,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";

const navGroups = [
  {
    label: "Recharge & Bills",
    links: [
      { label: "Mobile Recharge", href: "/service-payment/mobile" },
      { label: "DTH Recharge", href: "/service-payment/dth" },
      { label: "FASTag Recharge", href: "/service-payment/fastag" },
      { label: "Electricity Bill", href: "/service-payment/electricity" },
      { label: "Water Bill", href: "/service-payment/water" },
      { label: "Piped Gas Bill", href: "/service-payment/piped-gas" },
      { label: "Broadband / Landline", href: "/service-payment/broadband" },
      { label: "Book LPG Cylinder", href: "/service-payment/cylinder" },
      { label: "Gift Cards", href: "/service-payment/gift-card" },
      { label: "BBPS Services", href: "/bbps" },
    ],
  },
  {
    label: "Ticket Booking",
    links: [
      { label: "Booking Overview", href: "/booking" },
      { label: "Bus Booking", href: "/service-payment/bus-booking" },
      { label: "Train Booking", href: "/service-payment/train-booking" },
      { label: "Flight Booking", href: "/service-payment/flight-booking" },
      { label: "Hotel Booking", href: "/service-payment/hotel-booking" },
    ],
  },
  {
    label: "Payment Services",
    links: [
      { label: "Financial Payments", href: "/financial-payments" },
      { label: "Credit Card", href: "/credit-card" },
      { label: "PAN Card", href: "/pan-card" },
    ],
  },
  {
    label: "Loans",
    links: [
      { label: "Loan Overview", href: "/loan" },
      { label: "Instant Loan", href: "/instant-loan" },
      { label: "Personal Loan", href: "/loan/personal-loan" },
      { label: "Home Loan", href: "/loan/home-loan" },
      { label: "Car Loan", href: "/loan/car-loan" },
      { label: "Business Loan", href: "/loan/business-loan" },
      { label: "Construction Equipment Loan", href: "/loan/construction-equipment-loan" },
    ],
  },
  {
    label: "Insurance",
    links: [
      { label: "Insurance Overview", href: "/insurance" },
      { label: "Car Insurance", href: "/insurance/car-insurance" },
      { label: "Bike Insurance", href: "/insurance/bike-insurance" },
      { label: "Taxi Insurance", href: "/insurance/taxi-insurance" },
      { label: "Commercial Vehicle", href: "/insurance/commercial-vehicle" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "Refer & Earn", href: "/refer-earn" },
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

function DesktopDropdown({ group, activeMenu, setActiveMenu, startNavigation }) {
  const isOpen = activeMenu === group.label;

  return (
    <div
      className="relative flex h-full items-center"
      onMouseEnter={() => setActiveMenu(group.label)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <button
        type="button"
        className="flex items-center gap-1.5 whitespace-nowrap py-6 text-sm font-semibold text-black transition-colors hover:text-[#003a80] xl:text-base"
        aria-expanded={isOpen}
        onClick={() => setActiveMenu(isOpen ? null : group.label)}
      >
        {group.label}
        <ChevronDown
          size={15}
          strokeWidth={1.8}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute left-0 top-17 min-w-56 overflow-hidden rounded-lg border border-gray-100 bg-white py-2 shadow-[0_12px_35px_rgba(0,38,91,0.16)] transition-all duration-150 ${
          isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        {group.links.map((link) => (
          <Link
            key={link.href + link.label}
            href={link.href}
            onClick={startNavigation}
            className="block whitespace-nowrap px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-[#eff8ff] hover:text-[#003a80]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [session, setSession] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigationTimer = useRef(null);

  useEffect(() => {
    setIsNavigating(false);
    setActiveMenu(null);
    setMobileMenu(false);
    setMobileDropdown(null);
    if (navigationTimer.current) clearTimeout(navigationTimer.current);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenu) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => event.key === "Escape" && closeMobileMenu();

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenu]);

  useEffect(() => {
    let active = true;
    getClientSession({ force: true }).then((data) => {
      if (active) setSession(data);
    });
    return () => {
      active = false;
    };
  }, [pathname]);

  useEffect(
    () => () => {
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
    },
    []
  );

  const startNavigation = (event) => {
    const targetPath = event?.currentTarget?.getAttribute("href")?.split(/[?#]/)[0];
    if (targetPath === pathname) return;

    setIsNavigating(true);
    setActiveMenu(null);
    if (navigationTimer.current) clearTimeout(navigationTimer.current);
    navigationTimer.current = setTimeout(() => setIsNavigating(false), 8000);
  };

  useEffect(() => {
    if (!downloadOpen) return undefined;

    const closeOnEscape = (event) => event.key === "Escape" && setDownloadOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [downloadOpen]);

  useEffect(() => {
    if (!profileOpen) return undefined;

    const closeOnEscape = (event) => event.key === "Escape" && setProfileOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [profileOpen]);

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setMobileDropdown(null);
  };

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    clearClientSession();
    setSession({ authenticated: false });
    setProfileOpen(false);
    closeMobileMenu();
    window.location.href = "/";
  };

  const accountInitial = session?.user?.name?.trim()?.charAt(0)?.toUpperCase();
  const accountName = session?.user?.name?.trim() || "SaveDost User";

  return (
    <header
      className={`sticky top-0 border-b border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${profileOpen || downloadOpen ? "z-2000" : "z-50"}`}
      aria-busy={isNavigating}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 h-0.75 overflow-hidden transition-opacity ${isNavigating ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
      >
        <span className="header-navigation-progress block h-full w-1/3 rounded-r-full bg-[#00a8e8]" />
      </div>
      <div className="mx-auto flex h-18 max-w-385 items-center justify-between gap-3 px-5 lg:px-7 xl:gap-5">
        <Link
          href="/"
          onClick={startNavigation}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="SaveDost home"
        >
          <Image
            src="/image/SaveDost logo.png"
            width={1686}
            height={933}
            alt="SaveDost Logo"
            priority
            className="h-auto w-38 object-contain sm:w-42"
          />
        </Link>

        <nav
          className="ml-auto hidden h-full min-w-0 items-center justify-end gap-2 lg:flex xl:gap-5"
          aria-label="Main navigation"
        >
          <div className="flex h-full min-w-0 items-center gap-2 xl:gap-6">
            {navGroups.map((group) => (
              <DesktopDropdown
                key={group.label}
                group={group}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                startNavigation={startNavigation}
              />
            ))}
          </div>

          <div className="ml-1 flex shrink-0 items-center gap-2 border-l border-slate-200 pl-2 xl:ml-2 xl:gap-5 xl:pl-6">
            <button
              type="button"
              onClick={() => setDownloadOpen(true)}
              aria-label="Download App"
              title="Download App"
              className="flex items-center gap-1.5 whitespace-nowrap p-1 text-sm font-semibold text-[#002f6c] transition-colors hover:text-[#00a8e8] xl:p-0 xl:text-[15px]"
            >
              <Download size={17} strokeWidth={1.8} />
              <span>Download App</span>
            </button>
            {session?.authenticated ? (
              <button
                type="button"
                onClick={() => setProfileOpen(true)}
                aria-label="Open my account"
                title="My account"
                className="group relative grid h-11 w-11 place-items-center rounded-full bg-linear-to-br from-[#00a8e8] to-[#0C3D4C] p-0.75 shadow-[0_6px_18px_rgba(2,99,129,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_9px_22px_rgba(2,99,129,0.3)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#00a8e8]"
              >
                <span className="grid h-full w-full place-items-center rounded-full bg-white text-sm font-extrabold text-[#026381] transition-colors group-hover:bg-[#eff9fb]">
                  {accountInitial || <CircleUserRound size={21} strokeWidth={2} />}
                </span>
                <span
                  className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500"
                  aria-hidden="true"
                />
              </button>
            ) : (
              <Link
                href="/login"
                onClick={startNavigation}
                className="group flex items-center gap-2 rounded-lg border border-[#026381] bg-[#026381] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(2,99,129,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0C3D4C] hover:shadow-[0_6px_16px_rgba(2,99,129,0.25)]"
              >
                <CircleUserRound size={19} strokeWidth={2} /> Sign In
              </Link>
            )}
          </div>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-[#003a80] lg:hidden"
          onClick={() => setMobileMenu((current) => !current)}
          aria-label={mobileMenu ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenu}
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenu &&
        createPortal(
          <div
            className="fixed inset-0 lg:hidden"
            style={{ zIndex: 2147483000 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onMouseDown={(event) => event.target === event.currentTarget && closeMobileMenu()}
          >
            <motion.button
              type="button"
              aria-label="Close navigation"
              className="absolute inset-0 h-full w-full bg-[#071c2a]/55 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={closeMobileMenu}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative ml-auto flex h-full w-[min(92vw,410px)] flex-col overflow-hidden bg-[#f5fafb] shadow-[-22px_0_60px_rgba(7,28,42,.28)]"
            >
              <div className="relative overflow-hidden bg-linear-to-br from-[#073f58] to-[#0C3D4C] px-4 pb-4 pt-[max(1rem,env(safe-area-inset-top))] text-white">
                <span className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border-24px border-white/5" />
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  aria-label="Close navigation"
                  className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
                >
                  <X size={21} />
                </button>

                {session?.authenticated ? (
                  <Link
                    href="/profile"
                    onClick={(event) => {
                      closeMobileMenu();
                      startNavigation(event);
                    }}
                    className="group relative flex w-full items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 pr-16 text-left shadow-sm transition hover:bg-white/15"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white font-extrabold text-[#026381] shadow-sm">
                      {accountInitial || <CircleUserRound size={21} />}
                    </span>
                    <span className="min-w-0">
                      <strong className="block truncate text-sm">{accountName}</strong>
                      <small className="mt-0.5 block truncate text-[10px] text-white/65">
                        {session.user?.mobile || "View your account"}
                      </small>
                      <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold text-[#7dd3fc] transition group-hover:bg-white/15 group-hover:text-white">
                        View account <ArrowRight size={12} />
                      </span>
                    </span>
                    <span
                      className="absolute bottom-4 right-4 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,.12)]"
                      aria-label="Account active"
                    />
                  </Link>
                ) : (
                  <div className="flex min-h-10 items-center pr-14">
                    <p className="text-sm font-extrabold uppercase tracking-[0.14em]">Navigation</p>
                  </div>
                )}
              </div>

              <nav
                className="profile-drawer-scrollbar flex-1 overflow-y-auto overscroll-contain px-4 py-4"
                aria-label="Mobile navigation links"
              >
                <div className="space-y-2">
                  {navGroups.map((group) => {
                    const isOpen = mobileDropdown === group.label;
                    const groupActive = group.links.some(
                      (link) => pathname === link.href || pathname.startsWith(`${link.href}/`)
                    );
                    return (
                      <div
                        key={group.label}
                        className="overflow-hidden rounded-2xl border border-[#dcebee] bg-white shadow-[0_5px_16px_rgba(12,61,76,.04)]"
                      >
                        <button
                          type="button"
                          className={`flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-bold transition ${
                            isOpen || groupActive ? "text-[#026381]" : "text-[#173f4b]"
                          }`}
                          onClick={() => setMobileDropdown(isOpen ? null : group.label)}
                          aria-expanded={isOpen}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`h-2.5 w-2.5 rounded-full ${groupActive ? "bg-[#00a8e8]" : "bg-[#b8d7dd]"}`}
                            />
                            {group.label}
                          </span>
                          <span
                            className={`grid h-8 w-8 place-items-center rounded-full transition ${isOpen ? "rotate-180 bg-[#026381] text-white" : "bg-[#edf7f9] text-[#026381]"}`}
                          >
                            <ChevronDown size={16} />
                          </span>
                        </button>

                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-250 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                        >
                          <div className="overflow-hidden">
                            <div className="mx-3 mb-3 grid gap-1 border-t border-[#e4eff1] pt-2">
                              {group.links.map((link) => {
                                const linkActive = pathname === link.href;
                                return (
                                  <Link
                                    key={link.href + link.label}
                                    href={link.href}
                                    onClick={(event) => {
                                      closeMobileMenu();
                                      startNavigation(event);
                                    }}
                                    className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-semibold transition ${
                                      linkActive
                                        ? "bg-[#e3f6f9] text-[#026381]"
                                        : "text-slate-600 hover:bg-[#f0f8f9] hover:text-[#026381]"
                                    }`}
                                  >
                                    {link.label}
                                    {linkActive && (
                                      <span className="h-1.5 w-1.5 rounded-full bg-[#00a8e8]" />
                                    )}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </nav>

              <div className="border-t border-[#dcebee] bg-white px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4">
                <button
                  type="button"
                  onClick={() => {
                    closeMobileMenu();
                    setDownloadOpen(true);
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#b9dce3] bg-[#eef9fb] px-4 py-3 text-sm font-bold text-[#026381]"
                >
                  <Download size={18} /> Download App
                </button>
                {session?.authenticated ? (
                  <button
                    type="button"
                    onClick={logout}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-3 text-sm font-bold text-red-600"
                  >
                    <LogOut size={18} /> Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    onClick={(event) => {
                      closeMobileMenu();
                      startNavigation(event);
                    }}
                    className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#026381] px-4 py-3 text-sm font-bold text-white shadow-[0_6px_16px_rgba(2,99,129,.2)]"
                  >
                    <CircleUserRound size={19} /> Sign In
                  </Link>
                )}
              </div>
            </motion.aside>
          </div>,
          document.body
        )}

      {profileOpen &&
        session?.authenticated &&
        createPortal(
          <div
            className="fixed inset-0 bg-transparent"
            style={{ zIndex: 2147483647 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-drawer-title"
            onMouseDown={(event) => event.target === event.currentTarget && setProfileOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="ml-auto flex h-full w-full max-w-md flex-col text-slate-900 shadow-[-20px_0_60px_rgba(7,25,45,.3)]"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#00a8e8]">
                    Your account
                  </p>
                  <h2
                    id="profile-drawer-title"
                    className="mt-1 text-xl font-extrabold text-[#0C3D4C]"
                  >
                    My Profile
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setProfileOpen(false)}
                  aria-label="Close profile"
                  className="grid h-10 w-10 place-items-center rounded-full bg-[#eef7f9] text-[#0C3D4C] transition hover:bg-[#dceff3]"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="profile-drawer-scrollbar flex-1 overflow-y-auto px-6 py-7">
                <div className="flex items-center gap-4">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[#e2f5f8] text-[#026381]">
                    <CircleUserRound size={35} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xl font-extrabold text-[#0C3D4C]">
                      {session.user?.name || "SaveDost User"}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">SaveDost account</p>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <ProfileDrawerItem
                    icon={Phone}
                    label="Mobile number"
                    value={session.user?.mobile || "Verified mobile"}
                  />
                  <ProfileDrawerItem
                    icon={Mail}
                    label="Email address"
                    value={session.user?.email || "Not available"}
                  />
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#eff9fb] p-4 text-sm leading-6 text-[#315a67]">
                  <ShieldCheck size={20} className="mt-0.5 shrink-0 text-[#026381]" />
                  Your account is protected by mobile OTP authentication.
                </div>
                <Link
                  href="/profile"
                  onClick={() => setProfileOpen(false)}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#026381] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0C3D4C]"
                >
                  View Full Account
                </Link>
              </div>

              <div className="border-t border-slate-100 p-6">
                <button
                  type="button"
                  onClick={logout}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 px-5 py-3.5 text-sm font-bold text-red-600 transition hover:bg-red-50"
                >
                  <LogOut size={18} /> Logout
                </button>
              </div>
            </motion.aside>
          </div>,
          document.body
        )}

      {downloadOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-3000 flex items-center justify-center overflow-y-auto bg-[#132238]/75 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="header-download-title"
            onMouseDown={(event) => event.target === event.currentTarget && setDownloadOpen(false)}
          >
            <div className="relative my-auto w-full max-w-190 overflow-hidden rounded-2xl bg-white shadow-[0_26px_80px_rgba(0,0,0,0.35)]">
              <button
                type="button"
                onClick={() => setDownloadOpen(false)}
                aria-label="Close download app popup"
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-[#101820] text-white transition hover:bg-[#026381] sm:right-6 sm:top-5"
              >
                <X size={20} strokeWidth={3} />
              </button>

              <div className="px-5 pb-6 pt-7 sm:px-8 sm:pb-8 sm:pt-8">
                <h2
                  id="header-download-title"
                  className="pr-12 text-center text-xl font-extrabold text-[#0C3D4C] sm:pr-0 sm:text-2xl"
                >
                  Download the SaveDost App
                </h2>

                <div className="mt-7 grid items-center gap-6 rounded-2xl bg-[#f2f7fb] p-5 sm:grid-cols-[1fr_230px] sm:p-7">
                  <div className="text-[#132238]">
                    <h3 className="text-lg font-extrabold">Scan to download</h3>
                    <ol className="mt-5 space-y-4 text-sm leading-5 sm:text-base">
                      <li className="flex gap-3">
                        <span className="font-bold text-[#0289ad]">1.</span>
                        <span>Open your phone camera</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-[#0289ad]">2.</span>
                        <span>Point it at the QR code</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-[#0289ad]">3.</span>
                        <span>Open the link and install the app</span>
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

                <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-58.75 text-sm font-semibold leading-5 text-[#132238] sm:text-base">
                    Choose your app store and start using SaveDost.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://apps.apple.com/in/app/finunique/id6760808229"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-w-35.5 items-center justify-center gap-2 rounded-lg border border-slate-400 bg-white px-3 py-2 text-black transition hover:bg-slate-50"
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
                      className="flex min-w-37.5 items-center justify-center gap-2 rounded-lg border border-slate-400 bg-white px-3 py-2 text-black transition hover:bg-slate-50"
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
    </header>
  );
}

function ProfileDrawerItem({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-[#dcebee] p-4">
      <p className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Icon size={15} /> {label}
      </p>
      <p className="mt-2 wrap-break-words font-bold text-[#0C3D4C]">{value}</p>
    </div>
  );
}
