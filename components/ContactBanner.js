import Link from "next/link";
import { ArrowRight, Clock3, Headphones, Mail, MessageCircle, ShieldCheck } from "lucide-react";

export default function ContactBanner() {
  return (
    <section className="bg-white px-3 py-9 sm:px-8 sm:py-14 lg:py-18">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[22px] bg-[#123e62] text-white shadow-[0_22px_55px_rgba(12,61,76,.2)] sm:rounded-[30px]">
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[52px] border-[#8ac954]/10" />
        <div className="pointer-events-none absolute -bottom-10 left-[45%] h-28 w-28 rounded-full border-[22px] border-[#00a8e8]/10" />

        <div className="relative grid items-center gap-6 px-5 py-7 sm:gap-10 sm:px-10 sm:py-10 lg:grid-cols-[1fr_290px] lg:px-14 lg:py-14">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-[#9de4ef]">
                <Headphones size={24} />
              </span>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#9de4ef]">
                SaveDost Support
              </p>
            </div>

            <h2 className="mt-5 max-w-3xl text-[26px] font-extrabold leading-tight tracking-tight sm:mt-6 sm:text-4xl">
              Need help? Let&apos;s find the right answer together.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Contact our support team for guidance about your SaveDost account, available services
              or a transaction concern.
            </p>

            <div className="mt-5 grid gap-2 sm:mt-7 sm:flex sm:flex-wrap sm:gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/7 px-3 py-2 text-[11px] font-semibold text-white/80 sm:rounded-full sm:px-4 sm:text-xs">
                <Clock3 size={15} className="text-[#8ac954]" /> Mon–Sat, 9:30 AM–6:30 PM
              </span>
              <a
                href="mailto:support@savedost.in"
                className="inline-flex min-w-0 items-center gap-2 break-all rounded-xl border border-white/12 bg-white/7 px-3 py-2 text-[11px] font-semibold text-white/80 transition hover:bg-white/12 sm:rounded-full sm:px-4 sm:text-xs"
              >
                <Mail size={15} className="text-[#8ac954]" /> support@savedost.in
              </a>
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/7 px-3 py-2 text-[11px] font-semibold text-white/80 sm:rounded-full sm:px-4 sm:text-xs">
                <ShieldCheck size={15} className="text-[#8ac954]" /> Secure account guidance
              </span>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/12 bg-white/8 p-5 backdrop-blur-sm sm:p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#8ac954] text-white shadow-lg">
              <MessageCircle size={23} />
            </span>
            <h3 className="mt-5 text-xl font-extrabold">How can we help?</h3>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Share your question with our team and include any relevant service details.
            </p>
            <Link
              href="/contact"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#123e62] transition hover:-translate-y-0.5 hover:bg-[#eef8fa] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Contact Support
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
