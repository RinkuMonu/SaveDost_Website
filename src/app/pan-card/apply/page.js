import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, Globe2, ShieldCheck } from "lucide-react";

const applicationTypes = [
  {
    icon: FileText,
    form: "Form 49A",
    title: "Indian citizens",
    description:
      "For Indian individuals, Hindu Undivided Families (HUFs), companies, firms and other entities formed in India.",
    links: [
      { label: "Read guidelines", href: "/pan-card/guidelines" },
      { label: "View instructions", href: "/pan-card/instructions" },
      { label: "Documents required", href: "/pan-card/documents-required" },
    ],
  },
  {
    icon: Globe2,
    form: "Form 49AA",
    title: "Foreign citizens and entities",
    description:
      "For foreign individuals and entities incorporated outside India that need a new PAN.",
    links: [
      { label: "Read guidelines", href: "/pan-card/guideline-foreign" },
      { label: "View instructions", href: "/pan-card/instruction-foreign" },
      { label: "Documents required", href: "/pan-card/documents-foreign" },
    ],
  },
];

export default function ApplyNow() {
  return (
    <main className="min-h-screen bg-[#f6fafb]">
      <header className="border-b border-[#d8e8ec] bg-gradient-to-br from-[#e8f6f8] via-white to-[#fff8e8]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <Link
            href="/pan-card"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#167895] hover:text-[#0c3d4c]"
          >
            <ArrowLeft size={17} /> Back to PAN services
          </Link>
          <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-[#0289ad]">
            New PAN application
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c3d4c] sm:text-4xl lg:text-5xl">
            Choose the correct PAN application form
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Your citizenship and applicant category determine which form and documents you need.
            Select the relevant option before starting.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {applicationTypes.map(({ icon: Icon, form, title, description, links }) => (
            <article
              key={form}
              className="rounded-2xl border border-[#dce9ec] bg-white p-6 shadow-[0_8px_24px_rgba(12,61,76,0.06)] sm:p-8"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#e5f5f7] text-[#087f9f]">
                <Icon size={23} />
              </span>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.18em] text-[#0289ad]">
                {form}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-[#0c3d4c]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
              <div className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-bold text-[#167895] hover:text-[#0c3d4c]"
                  >
                    <CheckCircle2 size={16} /> {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#0c3d4c] p-6 text-white sm:flex-row sm:items-center sm:p-8">
          <div className="flex gap-4">
            <ShieldCheck className="mt-1 shrink-0 text-[#70cad8]" />
            <div>
              <h2 className="text-xl font-extrabold">Have your documents ready?</h2>
              <p className="mt-1 text-sm leading-6 text-white/75">
                Sign in to continue securely through the SaveDost PAN application journey.
              </p>
            </div>
          </div>
          <Link
            href="/pan-card?panApply=1#pan-apply"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[#0c3d4c] hover:bg-[#e8f6f8]"
          >
            Continue application <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
