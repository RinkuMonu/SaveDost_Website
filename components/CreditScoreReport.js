"use client";
import React, { useState } from "react";
import CircularScoreIndicator from "./CircularScoreIndicator";
import { ArrowRight, CreditCard, LockKeyhole, Phone, ShieldCheck, UserRound } from "lucide-react";

// ✅ Form Component (moved outside to fix React Hooks nesting error)
function ValidationForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pancard: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "name") {
      // Allow only alphabets and spaces
      value = value.replace(/[^A-Za-z\s]/g, "");
    }

    if (name === "mobile") {
      // Allow only numbers and limit to 10 digits
      value = value.replace(/[^0-9]/g, "").slice(0, 10);
    }

    if (name === "pancard") {
      // Allow alphanumeric and uppercase automatically
      value = value
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "")
        .slice(0, 10);
    }

    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (formData.mobile.length !== 10) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (formData.pancard.length !== 10) {
      newErrors.pancard = "pancard number must be 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    /* UI REDESIGN ONLY: Form fields and all validation/submit handlers are unchanged. */
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="rounded-[24px] border border-[#d9edf2] bg-white p-5 shadow-[0_18px_45px_rgba(12,61,76,0.09)] sm:p-7"
      >
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e8f6f9] text-[#026381]">
            <ShieldCheck size={22} />
          </span>
          <div>
            <h2 className="text-xl font-extrabold text-[#0C3D4C]">Check your credit score</h2>
            <p className="mt-1 text-sm leading-5 text-slate-500">
              Enter your details exactly as they appear on your PAN card.
            </p>
          </div>
        </div>

        {/* Full Name */}
        <div className="mt-6">
          <label className="mb-2 block text-sm font-semibold text-slate-700">Full Name</label>
          <div
            className={`flex items-center rounded-xl border bg-[#fbfdfe] px-3 transition focus-within:ring-2 focus-within:ring-[#00a8e8]/15 ${errors.name ? "border-red-400" : "border-[#cfe5eb] focus-within:border-[#00a8e8]"}`}
          >
            <UserRound size={18} className="shrink-0 text-[#6c98a5]" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full bg-transparent px-3 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />
          </div>
          {errors.name && <p className="mt-1.5 text-xs font-medium text-red-500">{errors.name}</p>}
        </div>

        {/* Mobile Number */}
        <div className="mt-4">
          <label className="mb-2 block text-sm font-semibold text-slate-700">Mobile Number</label>
          <div
            className={`flex items-center rounded-xl border bg-[#fbfdfe] px-3 transition focus-within:ring-2 focus-within:ring-[#00a8e8]/15 ${errors.mobile ? "border-red-400" : "border-[#cfe5eb] focus-within:border-[#00a8e8]"}`}
          >
            <Phone size={18} className="shrink-0 text-[#6c98a5]" />
            <span className="ml-3 border-r border-[#d9e7ea] pr-3 text-sm font-semibold text-slate-600">
              +91
            </span>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              inputMode="numeric"
              className="w-full bg-transparent px-3 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />
          </div>
          {errors.mobile && (
            <p className="mt-1.5 text-xs font-medium text-red-500">{errors.mobile}</p>
          )}
        </div>

        {/* pancard Number */}
        <div className="mt-4">
          <label className="mb-2 block text-sm font-semibold text-slate-700">PAN Card Number</label>
          <div
            className={`flex items-center rounded-xl border bg-[#fbfdfe] px-3 transition focus-within:ring-2 focus-within:ring-[#00a8e8]/15 ${errors.pancard ? "border-red-400" : "border-[#cfe5eb] focus-within:border-[#00a8e8]"}`}
          >
            <CreditCard size={18} className="shrink-0 text-[#6c98a5]" />
            <input
              type="text"
              name="pancard"
              value={formData.pancard}
              onChange={handleChange}
              placeholder="ABCDE1234F"
              className="w-full bg-transparent px-3 py-3 text-sm uppercase tracking-wider text-slate-800 outline-none placeholder:text-slate-400"
            />
          </div>
          {errors.pancard && (
            <p className="mt-1.5 text-xs font-medium text-red-500">{errors.pancard}</p>
          )}
        </div>

        <button
          type="submit"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#026381] px-5 py-3.5 text-sm font-bold text-white shadow-[0_9px_20px_rgba(2,99,129,0.2)] transition hover:-translate-y-0.5 hover:bg-[#0C3D4C]"
        >
          Check My Credit Score <ArrowRight size={18} />
        </button>

        <p className="mt-4 flex items-center justify-center gap-2 text-center text-[11px] leading-4 text-slate-500">
          <LockKeyhole size={14} className="shrink-0 text-[#0289ad]" /> Your information is
          encrypted and securely processed.
        </p>
      </form>
    </div>
  );
}

// ✅ Main Component
const CreditScoreReport = () => {
  const [score, setScore] = useState(0);
  const [instant, setInstant] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setInstant(true);
    setScore(calculateScore());
    setTimeout(() => setInstant(false), 0);
  };

  const creditFactors = [
    { label: "Credit Card Utilization", value: 25 },
    { label: "Payment History", value: 99 },
    { label: "Age of Credit History", value: 45 },
    { label: "Total Accounts", value: 81 },
  ];

  return (
    /* UI REDESIGN ONLY: Existing score state and submission behavior remain unchanged. */
    <div className="mx-auto w-full max-w-7xl">
      <div className="grid items-stretch gap-7 lg:grid-cols-[1.08fr_.92fr]">
        {/* Redesigned score preview */}
        <div className="overflow-hidden rounded-[28px] border border-[#d9edf2] bg-white p-6 shadow-[0_18px_45px_rgba(12,61,76,0.07)] sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0289ad]">
            Your credit overview
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-[#0C3D4C] sm:text-3xl">
            Check your score in a few simple steps
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
            A healthy credit profile can improve your chances of getting suitable loan and credit
            offers.
          </p>

          <div className="mt-2 flex justify-center overflow-hidden">
            <div className="scale-[.76] sm:scale-[.86]">
              <CircularScoreIndicator score={score} maxScore={1000} instant={instant} />
            </div>
          </div>

          <div className="-mt-10 grid grid-cols-2 gap-3 sm:-mt-7 sm:grid-cols-4">
            {creditFactors.map((factor) => (
              <div key={factor.label} className="rounded-xl bg-[#f2f8fa] px-3 py-3 text-center">
                <span className="block text-base font-extrabold text-[#026381]">
                  {factor.value}%
                </span>
                <span className="mt-1 block text-[10px] leading-4 text-slate-500">
                  {factor.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Redesigned form shell; logic lives in ValidationForm unchanged. */}
        <div className="flex items-center">
          <ValidationForm />
        </div>
      </div>
    </div>
  );
};

export default CreditScoreReport;
