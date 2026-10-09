"use client";

import { useState, useRef, useEffect } from "react";
import {
  Shield,
  Database,
  UserCheck,
  Share2,
  Lock,
  Clock,
  User,
  Cookie,
  Link,
  Baby,
  Phone,
  RefreshCw,
  FileText,
} from "lucide-react";

const InfoIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

import saveDostData from "../../../save_dost.json";

// ==== PRIVACY SECTIONS WITH SVG ICONS ====

const getIcon = (key) => {
  if (key.includes('security') || key.includes('privacy')) return <Shield />;
  if (key.includes('information') || key.includes('data') || key.includes('kyc')) return <Database />;
  if (key.includes('services') || key.includes('bbps') || key.includes('insurance') || key.includes('loan') || key.includes('travel') || key.includes('invest') || key.includes('credit_card') || key.includes('gift_cards') || key.includes('wallet')) return <RefreshCw />;
  if (key.includes('rights') || key.includes('communications')) return <UserCheck />;
  if (key.includes('sharing') || key.includes('third_party')) return <Share2 />;
  if (key.includes('children')) return <Baby />;
  if (key.includes('changes')) return <Clock />;
  return <FileText />;
};

const formatTitle = (key) => key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

const privacySections = Object.entries(saveDostData.policies.privacy_policy.sections).map(([key, value]) => ({
  id: key.replace(/_/g, '-'),
  icon: getIcon(key),
  title: formatTitle(key),
  content: Array.isArray(value) ? value : [value]
}));

export default function Privacy() {
  const [activeSection, setActiveSection] = useState("introduction");
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    const observedSections = sectionRefs.current.filter(Boolean);
    observedSections.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observedSections.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <>
      <section className="privacy-policy-page min-h-screen bg-[linear-gradient(180deg,#eef9fb_0%,#ffffff_22%,#f6fafb_100%)]">
        <div>
          <div className="relative overflow-hidden bg-[#0C3D4C] px-4 py-14 text-white sm:py-18">
            <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#00a8e8]/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#79d5df]/15 blur-3xl" />
            <div className="relative mx-auto max-w-7xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#bcecf4] backdrop-blur-sm">
                <Shield className="h-4 w-4" /> Trust &amp; Transparency
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                Learn how SaveDost collects, protects, and responsibly uses your information.
              </p>
            </div>
          </div>
          <section>
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                <aside className="lg:w-[30%] xl:w-[27%]">
                  <div className="sticky top-24 rounded-2xl border border-[#d7e9ed] bg-white p-4 shadow-[0_12px_35px_rgba(12,61,76,0.08)] [scrollbar-color:#c4c4c4_#f1f1f1] [scrollbar-width:thin] sm:p-5 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#c4c4c4] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#f1f1f1]">
                    <h2 className="mb-4 hidden items-center border-b border-slate-100 pb-4 text-lg font-extrabold text-[#0C3D4C] lg:flex">
                      <InfoIcon className="w-5 h-5 mr-2" />
                      On this page
                    </h2>
                    <ul className="flex touch-pan-x gap-2 overflow-x-auto pb-2 [scrollbar-color:#c4c4c4_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:block [&::-webkit-scrollbar]:h-[5px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#c4c4c4] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent lg:grid lg:grid-cols-1 lg:gap-1.5 lg:overflow-visible lg:pb-0 lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden">
                      {privacySections.map((section, index) => (
                        <li key={index} className="shrink-0 lg:w-full">
                          <button
                            onClick={() => scrollToSection(section.id)}
                            className={`flex w-auto items-center whitespace-nowrap rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-200 lg:w-full lg:whitespace-normal ${
                              activeSection === section.id
                                ? "bg-[#0C3D4C] font-bold text-white shadow-[0_6px_15px_rgba(12,61,76,0.18)]"
                                : "font-medium text-slate-600 hover:bg-[#edf8fa] hover:text-[#026381]"
                            }`}
                          >
                            <span
                              className={`mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg [&>svg]:h-4 [&>svg]:w-4 ${
                                activeSection === section.id
                                  ? "bg-white/15 text-white"
                                  : "bg-[#e7f5f7] text-[#0289ad]"
                              }`}
                            >
                              {section.icon}
                            </span>
                            {section.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>

                {/* Main Content */}
                <main className="min-w-0 lg:w-[70%] xl:w-[73%]">
                  <div className="mb-8 overflow-hidden rounded-3xl border border-[#d7e9ed] bg-white shadow-[0_16px_45px_rgba(12,61,76,0.08)]">
                    <div className="border-b border-[#dcecef] bg-[#f0f9fa] p-6 sm:p-8">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#0C3D4C] shadow-[0_10px_25px_rgba(12,61,76,0.22)]">
                          <FileText className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
                            Official document
                          </p>
                          <h2 className="mt-1 text-2xl font-extrabold text-[#0C3D4C] sm:text-3xl">
                            Your privacy matters to us
                          </h2>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            Please review the details below to understand your choices and our
                            responsibilities.
                          </p>
                        </div>
                      </div>
                    </div>
                    <dl className="grid gap-px bg-slate-100 sm:grid-cols-2">
                      <div className="bg-white p-5 sm:p-6">
                        <dt className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Effective Date
                        </dt>
                        <dd className="mt-2 font-bold text-[#0C3D4C]">28-09-2025</dd>
                      </div>
                      <div className="bg-white p-5 sm:p-6">
                        <dt className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Brand &amp; operator
                        </dt>
                        <dd className="mt-2 font-bold text-[#0C3D4C]">SaveDost</dd>
                        <dd className="mt-1 text-xs text-slate-500">
                          Powered and operated by Finunique Small Private Limited
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {privacySections.map((section, index) => (
                    <div
                      key={index}
                      id={section.id}
                      ref={(el) => (sectionRefs.current[index] = el)}
                      className={`scroll-mt-28 mb-5 rounded-2xl border bg-white p-5 transition-all duration-300 sm:p-7 ${activeSection === section.id ? "border-[#80cbd8] shadow-[0_14px_35px_rgba(2,99,129,0.11)]" : "border-[#e1ecee] shadow-[0_7px_22px_rgba(12,61,76,0.05)] hover:border-[#b9dce3] hover:shadow-[0_12px_30px_rgba(12,61,76,0.09)]"}`}
                    >
                      <div className="mb-5 flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e6f5f7] text-[#026381] [&_svg]:h-6 [&_svg]:w-6">
                          <span>{section.icon}</span>
                        </div>
                        <h2 className="text-xl font-extrabold text-[#0C3D4C] sm:text-2xl">
                          {section.title}
                        </h2>
                      </div>
                      {Array.isArray(section.content) ? (
                        <ul className="space-y-3 text-[15px] leading-7 text-slate-600">
                          {section.content.map((item, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#00a8e8]" />{" "}
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="text-[15px] leading-7 text-slate-600">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </main>
              </div>

              {/* Additional Info Card */}
              <div className="relative mt-10 grid w-full overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#0C3D4C_0%,#07566b_100%)] text-white shadow-[0_20px_50px_rgba(12,61,76,0.22)] md:grid-cols-[1.35fr_0.65fr]">
                <div
                  className="absolute -left-16 -top-20 h-56 w-56 rounded-full border-[35px] border-white/[0.035]"
                  aria-hidden="true"
                />
                <div className="relative flex gap-5 p-7 sm:p-9 lg:p-10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-inner backdrop-blur-sm">
                    <InfoIcon className="h-6 w-6 text-[#8ee3ee]" />
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8ee3ee]">
                      Privacy support
                    </p>
                    <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                      Need More Information?
                    </h3>
                    <p className="mt-3 max-w-2xl leading-7 text-slate-200">
                      If you have any questions about our privacy practices or how we handle your
                      data, please do not hesitate to contact our privacy team.
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center border-t border-white/10 bg-black/10 p-7 md:border-l md:border-t-0 sm:p-9 lg:p-10">
                  <div className="w-full">
                    <p className="mb-4 text-sm leading-6 text-slate-300">
                      Our team is ready to help with privacy-related questions.
                    </p>
                    <button className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 font-bold text-[#0C3D4C] shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e9f7f9] hover:shadow-[0_14px_30px_rgba(0,0,0,0.22)]">
                      Contact Privacy Team
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
