"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Smartphone } from "lucide-react";

export default function InstantLoanHeroForm() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (!/^[0-9]{10}$/.test(phone)) return;

    const params = new URLSearchParams({
      product: "instant",
      mode: "enquiry",
      phone,
    });
    router.push(`/loan/request?${params.toString()}`);
  };

  return (
    <form
      onSubmit={submit}
      className="mt-7 max-w-[540px] rounded-2xl bg-white p-5 text-[#0C3D4C] shadow-[0_18px_50px_rgba(0,0,0,0.2)] sm:mt-8 sm:rounded-3xl sm:p-7"
    >
      <h2 className="text-xl font-extrabold sm:text-2xl">Start your loan enquiry</h2>
      <p className="mt-1 text-sm text-slate-600">
        Enter your mobile number to continue with your request.
      </p>
      <label className="mt-5 block">
        <span className="sr-only">10-digit mobile number</span>
        <span className="flex items-center rounded-xl border border-slate-300 bg-white focus-within:border-[#026381] focus-within:ring-2 focus-within:ring-[#026381]/15">
          <span className="border-r border-slate-200 px-3 py-3 text-sm font-semibold text-slate-600">
            +91
          </span>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value.replace(/[^0-9]/g, "").slice(0, 10))}
            inputMode="numeric"
            autoComplete="tel-national"
            pattern="[0-9]{10}"
            maxLength={10}
            minLength={10}
            required
            aria-describedby="instant-loan-phone-help"
            placeholder="10-digit mobile number"
            className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-[#0C3D4C] outline-none placeholder:text-slate-400"
          />
          <Smartphone size={18} aria-hidden="true" className="mr-4 shrink-0 text-slate-500" />
        </span>
      </label>
      <p id="instant-loan-phone-help" className="mt-2 text-xs text-slate-500">
        Use numbers only; your number must be exactly 10 digits.
      </p>
      <button
        type="submit"
        disabled={phone.length !== 10}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#026381] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0C3D4C] disabled:cursor-not-allowed disabled:opacity-60"
      >
        Apply now <ArrowRight size={17} />
      </button>
      <p className="mt-3 text-center text-[11px] leading-5 text-slate-500">
        By continuing, you agree to be contacted about your loan enquiry.
      </p>
    </form>
  );
}
