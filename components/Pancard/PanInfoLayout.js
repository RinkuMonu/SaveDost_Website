import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

const pages = [
  { label: "Guidelines", href: "/pan-card/guideline-foreign" },
  { label: "Instructions", href: "/pan-card/instruction-foreign" },
  { label: "Documents", href: "/pan-card/documents-foreign" },
  { label: "Do's & Don'ts", href: "/pan-card/do's" },
];

export default function PanInfoLayout({ eyebrow, title, description, items }) {
  return (
    <main className="min-h-screen bg-[#f6fafb] text-[#0c3d4c]">
      <section className="relative overflow-hidden border-b border-[#d8e8ec] bg-gradient-to-br from-[#e8f6f8] via-white to-[#fff8e8]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#70cad8]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <Link
            href="/pan-card"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#167895] transition hover:text-[#0c3d4c]"
          >
            <ArrowLeft size={17} /> Back to PAN services
          </Link>

          <div className="mt-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0289ad]">
                {eyebrow}
              </p>
              <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                {description}
              </p>
            </div>
          </div>

          <nav className="mt-9 flex gap-2 overflow-x-auto pb-1" aria-label="PAN information pages">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="whitespace-nowrap rounded-full border border-[#cfe4e9] bg-white/80 px-4 py-2 text-sm font-bold text-[#0c3d4c] shadow-sm transition hover:border-[#70bdcd] hover:bg-[#e9f6f8]"
              >
                {page.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="space-y-5">
          {items.map((item, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-2xl border border-[#dce9ec] bg-white shadow-[0_8px_24px_rgba(12,61,76,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(12,61,76,0.10)]"
            >
              <div className="flex items-start gap-4 p-5 sm:p-7">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e5f5f7] text-sm font-extrabold text-[#087f9f]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-extrabold leading-snug text-[#0c3d4c] sm:text-xl">
                    {item.title}
                  </h2>
                  <div className="mt-3 text-[15px] leading-7 text-slate-600">
                    {Array.isArray(item.desc) ? (
                      <ul className="space-y-2">
                        {item.desc.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-2.5">
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#18a0b8]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : typeof item.desc === "string" ? (
                      <p>{item.desc}</p>
                    ) : (
                      item.desc
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#0c3d4c] p-6 text-white sm:flex-row sm:p-8">
          <div>
            <h2 className="text-xl font-extrabold">Ready to apply for a PAN?</h2>
            <p className="mt-1 text-sm text-white/75">
              Review your details and documents before starting.
            </p>
          </div>
          <Link
            href="/pan-card/apply"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[#0c3d4c] transition hover:bg-[#e8f6f8]"
          >
            Start application <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
