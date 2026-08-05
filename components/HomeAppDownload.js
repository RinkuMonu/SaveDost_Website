import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Download, QrCode, Smartphone } from "lucide-react";
import { FaApple } from "react-icons/fa";

const appBenefits = [
  "Recharge and pay utility bills in seconds",
  "Book bus tickets from one convenient app",
  "Fast, secure and reliable transactions",
];

export default function HomeAppDownload() {
  return (
    <section className="bg-[#f4f7fb] px-3 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
      <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[22px] bg-white shadow-[0_16px_45px_rgba(12,61,76,0.08)] sm:rounded-[30px] lg:grid-cols-[1.15fr_.85fr]">
        <div className="relative z-10 px-4 py-6 sm:px-10 sm:py-10 lg:px-14 lg:py-14">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Image
              src="/image/SaveDost-initial.png"
              alt="SaveDost"
              width={58}
              height={58}
              className="h-10 w-auto object-contain sm:h-12"
              style={{ width: "auto" }}
            />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#026381] sm:text-sm sm:tracking-[0.18em]">
              SaveDost App
            </span>
          </div>

          <h2 className="mt-4 max-w-2xl text-[23px] font-extrabold leading-[1.15] tracking-tight text-[#0C3D4C] sm:mt-6 sm:text-4xl sm:leading-tight lg:text-[46px]">
            Your everyday payments, <span className="text-[#00a8e8]">all in one app</span>
          </h2>
          <p className="mt-3 max-w-xl text-[13px] leading-5 text-slate-600 sm:mt-5 sm:text-lg sm:leading-7">
            Download the SaveDost app to manage recharges, bills and travel services anytime,
            anywhere.
          </p>

          <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
            {appBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-2.5 text-xs font-medium leading-5 text-slate-700 sm:items-center sm:gap-3 sm:text-base"
              >
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#00a8e8] sm:mt-0 sm:h-[19px] sm:w-[19px]" />
                {benefit}
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-2.5 min-[390px]:grid-cols-2 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="https://play.google.com/store/apps/details?id=com.utility.finunique"
              className="inline-flex min-w-0 items-center justify-center gap-2 rounded-xl bg-[#0C3D4C] px-3 py-2.5 text-white shadow-[0_8px_18px_rgba(12,61,76,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#026381] sm:gap-3 sm:px-5 sm:py-3"
            >
              <Image
                src="/image/playstorelogo.png"
                alt="Google Play"
                width={27}
                height={27}
                className="h-7 w-7 object-contain"
              />
              <span className="text-left">
                <span className="block text-[10px] uppercase leading-none text-white/70">
                  Get it on
                </span>
                <span className="mt-1 block text-sm font-bold leading-none">Google Play</span>
              </span>
            </Link>

            <Link
              href="https://apps.apple.com/in/app/finunique/id6760808229"
              className="inline-flex min-w-0 items-center justify-center gap-2 rounded-xl bg-black px-3 py-2.5 text-white shadow-[0_8px_18px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-0.5 hover:bg-[#222] sm:gap-3 sm:px-5 sm:py-3"
            >
              <FaApple size={30} aria-hidden="true" />
              <span className="text-left">
                <span className="block text-[10px] leading-none text-white/70">
                  Download on the
                </span>
                <span className="mt-1 block text-sm font-bold leading-none">App Store</span>
              </span>
            </Link>

            <span className="mt-1 hidden items-center justify-center gap-2 text-xs font-semibold text-[#026381] sm:inline-flex sm:text-sm">
              <Download size={18} /> Scan QR to download
            </span>
          </div>
        </div>

        <div className="relative hidden min-h-[420px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#d9f6fb] via-[#bcebf4] to-[#8ed9e8] px-6 py-10 sm:flex">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/30" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border-[45px] border-white/20" />
          <Smartphone
            className="absolute right-7 top-7 text-[#026381]/15"
            size={85}
            strokeWidth={1.2}
          />

          <div className="relative z-10 rounded-[22px] border border-white/80 bg-white/90 p-4 text-center shadow-[0_20px_45px_rgba(12,61,76,0.18)] backdrop-blur-sm sm:rounded-[26px] sm:p-7">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-[#e9f8fb] px-3 py-1.5 text-xs font-bold text-[#026381]">
              <QrCode size={15} /> Scan with your phone
            </div>
            <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-3 shadow-inner">
              <Image
                src="/MainQR.jpeg"
                alt="QR code to download the SaveDost app"
                width={220}
                height={220}
                className="h-[160px] w-[160px] sm:h-[220px] sm:w-[220px]"
              />
            </div>
            <p className="mt-4 text-base font-extrabold text-[#0C3D4C]">Download SaveDost App</p>
            <p className="mt-1 text-xs text-slate-500">Available for Android devices</p>
          </div>
        </div>
      </div>
    </section>
  );
}
