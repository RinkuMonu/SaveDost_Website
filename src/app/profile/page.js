"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BadgeIndianRupee,
  BadgeCheck,
  Bell,
  Building2,
  CircleUserRound,
  CreditCard,
  Download,
  Fingerprint,
  Gauge,
  Headphones,
  HelpCircle,
  History,
  Home,
  IdCard,
  KeyRound,
  LockKeyhole,
  LogOut,
  Mail,
  Phone,
  ReceiptText,
  Repeat2,
  ShieldCheck,
  Smartphone,
  UserRound,
  Users,
  WalletCards,
} from "lucide-react";
import { clearClientSession, getClientSession } from "../../../components/auth/sessionClient";

const identityRecords = [
  {
    label: "PAN Card",
    description: "Required for eligible financial services and tax identification.",
    icon: IdCard,
  },
  {
    label: "Aadhaar Card",
    description: "Used for identity verification and supported KYC processes.",
    icon: Fingerprint,
  },
  {
    label: "Bank Account",
    description: "Link a verified bank account for supported payments and settlements.",
    icon: Building2,
  },
];

const paymentOptions = [
  {
    label: "UPI IDs",
    description: "Manage verified UPI payment addresses.",
    icon: BadgeIndianRupee,
  },
  {
    label: "Debit & Credit Cards",
    description: "View tokenized cards saved through the payment provider.",
    icon: CreditCard,
  },
  {
    label: "Bank Accounts",
    description: "Manage linked accounts and preferred payment accounts.",
    icon: Building2,
  },
  {
    label: "Beneficiaries",
    description: "Manage verified recipients for supported transfers.",
    icon: Users,
  },
  {
    label: "AutoPay & Mandates",
    description: "Review recurring payment approvals and mandates.",
    icon: Repeat2,
  },
  {
    label: "Transaction Limits",
    description: "Review applicable daily and service-level limits.",
    icon: Gauge,
  },
  {
    label: "Bills & Receipts",
    description: "Access payment receipts when transaction history is connected.",
    icon: ReceiptText,
  },
  {
    label: "Payment PIN & Security",
    description: "Manage payment authentication through secure backend flows.",
    icon: KeyRound,
  },
  {
    label: "Notifications",
    description: "Choose payment, account, and security alert preferences.",
    icon: Bell,
  },
];

export default function ProfilePage() {
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    let active = true;
    getClientSession({ force: true }).then((data) => {
      if (!active) return;
      if (!data.authenticated) {
        router.replace("/login?returnTo=/profile");
        return;
      }
      setSession(data);
    });
    return () => {
      active = false;
    };
  }, [router]);

  const logout = async () => {
    setLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      clearClientSession();
      router.replace("/");
      router.refresh();
    } finally {
      setLoggingOut(false);
    }
  };

  if (!session?.user) {
    return (
      <main className="grid min-h-[65vh] place-items-center bg-[#f4f8fa] px-4">
        <div className="text-center">
          <span className="mx-auto grid h-14 w-14 animate-pulse place-items-center rounded-2xl bg-[#dff3f7] text-[#026381]">
            <CircleUserRound size={29} />
          </span>
          <p className="mt-4 text-sm font-bold text-[#026381]">Loading your account…</p>
        </div>
      </main>
    );
  }

  const { user } = session;
  const initial = user.name?.trim()?.charAt(0)?.toUpperCase() || "F";

  return (
    <main className="min-h-screen bg-[#f2f7f9] pb-10 sm:pb-16">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_88%_12%,rgba(138,201,84,.2),transparent_26%),linear-gradient(135deg,#073f58,#0C3D4C_58%,#026381)] px-4 pb-12 pt-7 text-white sm:px-6 sm:pb-14 sm:pt-10 lg:px-8 lg:py-14">
        <span className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[42px] border-white/5" />
        <span className="pointer-events-none absolute -bottom-24 left-[38%] h-48 w-48 rounded-full bg-[#00a8e8]/10 blur-2xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 sm:gap-5">
            <span className="grid h-18 w-18 shrink-0 place-items-center rounded-[22px] border border-white/30 bg-white text-2xl font-extrabold text-[#026381] shadow-xl sm:h-24 sm:w-24 sm:rounded-[28px] sm:text-3xl">
              {initial}
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#8ee5f2] sm:text-xs">
                SaveDost account
              </p>
              <h1 className="mt-1.5 truncate text-2xl font-extrabold tracking-tight sm:mt-2 sm:text-4xl">
                {user.name || "SaveDost User"}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px] text-white/80 sm:mt-3 sm:gap-2 sm:text-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 sm:px-3 sm:py-1.5">
                  <BadgeCheck size={14} className="text-[#8bd351]" /> Mobile verified
                </span>
                <span className="hidden items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 min-[390px]:inline-flex">
                  <ShieldCheck size={14} /> OTP protected
                </span>
              </div>
            </div>
          </div>
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-bold transition hover:bg-white/15 sm:px-5 sm:py-3 sm:text-sm"
            >
              <Home size={16} /> Back to Home
            </Link>
            <button type="button" onClick={logout} disabled={loggingOut} className="hidden">
              <LogOut size={17} /> {loggingOut ? "Signing out…" : "Sign out"}
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-5 px-3 pt-4 sm:gap-7 sm:px-6 sm:pt-7 lg:grid-cols-[240px_1fr] lg:px-8">
        <aside className="profile-drawer-scrollbar sticky top-2 z-20 -mx-1 flex h-fit gap-1.5 overflow-x-auto rounded-2xl border border-[#d8e9ed] bg-white/95 p-2 shadow-[0_10px_28px_rgba(12,61,76,.08)] backdrop-blur lg:top-24 lg:mx-0 lg:block lg:overflow-visible lg:p-3">
          <AccountNav href="#overview" icon={UserRound} label="Account overview" />
          <AccountNav href="#identity" icon={IdCard} label="Identity & KYC" />
          <AccountNav href="#payments" icon={WalletCards} label="Payment methods" />
          <AccountNav href="#security" icon={LockKeyhole} label="Security" />
          <AccountNav href="#activity" icon={History} label="Activity" />
          <AccountNav href="#support" icon={HelpCircle} label="Help & support" />
        </aside>

        <div className="min-w-0 space-y-4 sm:space-y-7">
          <section
            id="overview"
            className="scroll-mt-24 rounded-[22px] border border-[#d8e9ed] bg-white p-4 shadow-[0_12px_30px_rgba(12,61,76,.06)] sm:rounded-3xl sm:p-8"
          >
            <SectionHeading
              eyebrow="Account details"
              title="Your profile information"
              text="Details currently available from your authenticated SaveDost session."
            />
            <div className="mt-5 grid gap-3 sm:mt-7 sm:gap-4 md:grid-cols-2">
              <DetailCard
                icon={CircleUserRound}
                label="Full name"
                value={user.name || "SaveDost User"}
              />
              <DetailCard
                icon={Phone}
                label="Mobile number"
                value={user.mobile || "Verified mobile"}
                status="Verified"
              />
              <DetailCard
                icon={Mail}
                label="Email address"
                value={user.email || "Not added"}
                status={user.email ? "Available" : "Not available"}
              />
              <DetailCard
                icon={ShieldCheck}
                label="Account protection"
                value="Mobile OTP authentication"
                status="Active"
              />
            </div>
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#cce9ef] bg-[#eff9fb] p-3 text-xs leading-5 text-[#315a67] sm:mt-5 sm:rounded-2xl sm:p-4 sm:text-sm sm:leading-6">
              <LockKeyhole size={18} className="mt-0.5 shrink-0 text-[#026381]" />
              Your verified account details are shown securely. Profile editing will be available
              soon.
            </div>
          </section>

          <section
            id="identity"
            className="scroll-mt-24 rounded-[22px] border border-[#d8e9ed] bg-white p-4 shadow-[0_12px_30px_rgba(12,61,76,.06)] sm:rounded-3xl sm:p-8"
          >
            <SectionHeading
              eyebrow="Identity & KYC"
              title="Verification documents"
              text="Manage your identity and verification records securely."
            />
            <div className="mt-5 grid gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
              {identityRecords.map(({ label, description, icon: Icon }) => (
                <article
                  key={label}
                  className="rounded-xl border border-[#dcebee] bg-[#f8fbfc] p-4 sm:rounded-2xl sm:p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#dff3f7] text-[#027f9f]">
                      <Icon size={21} />
                    </span>
                    <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-amber-700">
                      Not linked
                    </span>
                  </div>
                  <h3 className="mt-4 font-extrabold text-[#0C3D4C]">{label}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                  <p className="mt-4 border-t border-[#e0ecef] pt-3 text-xs font-bold text-slate-400">
                    Secure verification coming soon
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-900 sm:mt-5 sm:rounded-2xl sm:p-4 sm:text-sm sm:leading-6">
              <ShieldCheck size={18} className="mt-0.5 shrink-0" />
              Never share PAN, Aadhaar, bank details, passwords, or OTPs with anyone outside a
              secure verification flow.
            </div>
          </section>

          <section
            id="payments"
            className="scroll-mt-24 rounded-[22px] border border-[#d8e9ed] bg-white p-4 shadow-[0_12px_30px_rgba(12,61,76,.06)] sm:rounded-3xl sm:p-8"
          >
            <SectionHeading
              eyebrow="Payments"
              title="Payment methods & controls"
              text="Your saved payment options and account controls will appear here."
            />
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-4 xl:grid-cols-3">
              {paymentOptions.map(({ label, description, icon: Icon }) => (
                <article
                  key={label}
                  className="rounded-xl border border-[#dcebee] bg-white p-3.5 transition hover:border-[#a9d8e1] hover:shadow-[0_10px_24px_rgba(12,61,76,.07)] sm:rounded-2xl sm:p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#e7f5f8] text-[#027f9f] sm:h-11 sm:w-11 sm:rounded-xl">
                      <Icon size={19} />
                    </span>
                    <span className="rounded-full bg-[#eef4f6] px-2 py-1 text-[8px] font-extrabold uppercase tracking-wide text-slate-500 sm:px-2.5 sm:text-[10px]">
                      Soon
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-extrabold leading-5 text-[#0C3D4C] sm:mt-4 sm:text-base">
                    {label}
                  </h3>
                  <p className="mt-2 hidden text-sm leading-6 text-slate-600 sm:block">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <div className="grid gap-4 sm:gap-7 xl:grid-cols-2">
            <section
              id="security"
              className="scroll-mt-24 rounded-[22px] border border-[#d8e9ed] bg-white p-4 shadow-[0_12px_30px_rgba(12,61,76,.06)] sm:rounded-3xl sm:p-7"
            >
              <SectionHeading eyebrow="Security" title="Account protection" />
              <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                <StatusRow
                  icon={Smartphone}
                  label="Mobile authentication"
                  value="Verified with OTP"
                  active
                />
                <StatusRow
                  icon={LockKeyhole}
                  label="Session security"
                  value="Protected session cookie"
                  active
                />
                <StatusRow icon={Bell} label="Account alerts" value="Backend connection required" />
              </div>
            </section>

            <section
              id="activity"
              className="scroll-mt-24 rounded-[22px] border border-[#d8e9ed] bg-white p-4 shadow-[0_12px_30px_rgba(12,61,76,.06)] sm:rounded-3xl sm:p-7"
            >
              <SectionHeading eyebrow="Activity" title="Transactions & history" />
              <div className="mt-5 rounded-xl border border-dashed border-[#bfdde4] bg-[#f7fbfc] p-4 text-center sm:mt-6 sm:rounded-2xl sm:p-6">
                <History className="mx-auto text-[#0289ad]" size={29} />
                <h3 className="mt-3 font-extrabold text-[#0C3D4C]">
                  No web activity available yet
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Transaction history will appear here after the account backend is connected.
                </p>
              </div>
            </section>
          </div>

          <section className="overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#e8f6f9,#f7fbfc)] p-4 sm:rounded-3xl sm:p-8">
            <div className="grid items-center gap-5 md:grid-cols-[1fr_190px] md:gap-7">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[.17em] text-[#0289ad]">
                  SaveDost mobile app
                </p>
                <h2 className="mt-2 text-xl font-extrabold text-[#0C3D4C] sm:mt-3 sm:text-2xl">
                  Manage services from your phone
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                  Scan the QR code to download the app and continue with supported payments,
                  recharges, and account services.
                </p>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.utility.finunique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#026381] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0C3D4C]"
                >
                  <Download size={17} /> Download App
                </Link>
              </div>
              <div className="mx-auto hidden rounded-2xl bg-white p-3 shadow-[0_10px_28px_rgba(12,61,76,.12)] sm:block">
                <Image
                  src="/MainQR.jpeg"
                  alt="QR code to download the SaveDost app"
                  width={165}
                  height={165}
                  className="h-40 w-40 object-contain"
                />
              </div>
            </div>
          </section>

          <section
            id="support"
            className="scroll-mt-24 rounded-[22px] border border-[#d8e9ed] bg-white p-4 shadow-[0_12px_30px_rgba(12,61,76,.06)] sm:rounded-3xl sm:p-8"
          >
            <SectionHeading
              eyebrow="Need help?"
              title="Account support"
              text="Use the support channel that works best for you."
            />
            <div className="mt-5 grid gap-3 sm:mt-7 sm:gap-4 md:grid-cols-3">
              <SupportLink
                icon={Headphones}
                label="Contact support"
                text="Send a request to our support team."
                href="/contact"
              />
              <SupportLink
                icon={Mail}
                label="Email us"
                text="support@savedost.com"
                href="mailto:support@savedost.com"
              />
            </div>
          </section>

          <section className="flex flex-col gap-4 rounded-[22px] border border-red-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:rounded-3xl sm:p-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.16em] text-red-500">
                Session controls
              </p>
              <h2 className="mt-2 text-xl font-extrabold text-[#0C3D4C]">
                Sign out of this device
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                You will need to verify your mobile number again to access the account.
              </p>
            </div>
            <button
              type="button"
              onClick={logout}
              disabled={loggingOut}
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-red-200 px-5 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
            >
              <LogOut size={17} /> {loggingOut ? "Signing out…" : "Sign out"}
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}

function AccountNav({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-[#f3f8fa] px-3 py-2.5 text-xs font-bold text-slate-600 transition hover:bg-[#e5f5f7] hover:text-[#026381] lg:mb-1 lg:w-full lg:gap-3 lg:bg-transparent lg:py-3 lg:text-sm"
    >
      <Icon className="h-4 w-4 lg:h-[18px] lg:w-[18px]" /> {label}
    </a>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div>
      <p className="text-[10px] font-extrabold uppercase tracking-[.17em] text-[#0289ad] sm:text-xs">
        {eyebrow}
      </p>
      <h2 className="mt-1.5 text-xl font-extrabold tracking-tight text-[#0C3D4C] sm:mt-2 sm:text-2xl">
        {title}
      </h2>
      {text && (
        <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">
          {text}
        </p>
      )}
    </div>
  );
}

function DetailCard({ icon: Icon, label, value, status }) {
  return (
    <div className="rounded-xl border border-[#dcebee] p-4 sm:rounded-2xl sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Icon size={16} /> {label}
        </p>
        {status && (
          <span className="rounded-full bg-[#eaf7ed] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-emerald-700">
            {status}
          </span>
        )}
      </div>
      <p className="mt-2.5 break-words text-sm font-extrabold text-[#0C3D4C] sm:mt-3 sm:text-base">
        {value}
      </p>
    </div>
  );
}

function StatusRow({ icon: Icon, label, value, active = false }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[#e0ecef] p-3 sm:rounded-2xl sm:p-4">
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg sm:h-10 sm:w-10 sm:rounded-xl ${active ? "bg-[#e4f6e8] text-emerald-700" : "bg-[#eef5f7] text-slate-500"}`}
      >
        <Icon size={18} />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-extrabold text-[#0C3D4C]">{label}</p>
        <p className="mt-1 text-xs text-slate-500">{value}</p>
      </div>
    </div>
  );
}

function SupportLink({ icon: Icon, label, text, href }) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-[#dcebee] p-4 transition hover:border-[#a9d8e1] hover:bg-[#f8fbfc] sm:rounded-2xl sm:p-5"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#dff3f7] text-[#027f9f] sm:h-11 sm:w-11">
        <Icon size={20} />
      </span>
      <p className="mt-3 font-extrabold text-[#0C3D4C] sm:mt-4">{label}</p>
      <p className="mt-1.5 break-words text-sm leading-5 text-slate-600 sm:mt-2 sm:leading-6">
        {text}
      </p>
      <span className="mt-3 inline-flex items-center gap-1 text-xs font-extrabold text-[#0289ad] sm:mt-4">
        Continue <ArrowRight size={14} className="transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
