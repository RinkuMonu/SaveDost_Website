"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import {
  ArrowLeft,
  BadgeCheck,
  BriefcaseBusiness,
  IndianRupee,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";

const productLabels = {
  instant: "Instant Loan",
  personal: "Personal Loan",
  home: "Home Loan",
  car: "Car Loan",
  business: "Business Loan",
  construction: "Construction Equipment Loan",
};

export default function LoanEnquiryForm({
  initialProduct = "instant",
  mode = "enquiry",
  initialPhone = "",
}) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: initialPhone.replace(/[^0-9]/g, "").slice(0, 10),
    product: productLabels[initialProduct] ? initialProduct : "instant",
    employment: "",
    monthlyIncome: "",
    amount: "",
    message: "",
    terms: false,
  });

  const update = (event) => {
    const { name, value, type, checked } = event.target;
    const nextValue =
      name === "phone"
        ? value.replace(/\D/g, "").slice(0, 10)
        : type === "checkbox"
          ? checked
          : value;
    setForm((current) => ({ ...current, [name]: nextValue }));
  };

  const submit = async (event) => {
    event.preventDefault();
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      form.phone.length !== 10 ||
      !form.employment ||
      !form.amount ||
      !form.terms
    ) {
      Swal.fire({
        icon: "warning",
        title: "Complete the required fields",
        text: "Please enter valid contact and loan details before submitting.",
        confirmButtonColor: "#026381",
      });
      return;
    }

    setLoading(true);
    try {
      const product = productLabels[form.product];
      const details = [
        `${mode === "eligibility" ? "Eligibility request" : "Loan enquiry"} for ${product}.`,
        `Employment: ${form.employment}.`,
        form.monthlyIncome ? `Monthly income: ₹${form.monthlyIncome}.` : "",
        `Requested amount: ₹${form.amount}.`,
        form.message ? `Message: ${form.message}` : "",
      ]
        .filter(Boolean)
        .join(" ");

      const response = await axios.post(
        "https://cms.sevenunique.com/apis/contact-query/set-contact-details.php",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: details,
          service: product,
          website_id: 6,
        },
        {
          headers: {
            Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status !== "success") throw new Error("Submission failed");
      await Swal.fire({
        icon: "success",
        title: "Request submitted",
        text: "The SaveDost team will review your details and follow up with the next steps.",
        confirmButtonColor: "#026381",
      });
      setForm((current) => ({
        ...current,
        name: "",
        email: "",
        phone: "",
        employment: "",
        monthlyIncome: "",
        amount: "",
        message: "",
        terms: false,
      }));
    } catch {
      Swal.fire({
        icon: "error",
        title: "Unable to submit",
        text: "Please try again after a few moments.",
        confirmButtonColor: "#026381",
      });
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    {
      name: "name",
      label: "Full name",
      type: "text",
      placeholder: "Enter your full name",
      icon: UserRound,
      required: true,
    },
    {
      name: "email",
      label: "Email address",
      type: "email",
      placeholder: "Enter your email",
      icon: Mail,
      required: true,
    },
    {
      name: "phone",
      label: "Mobile number",
      type: "tel",
      placeholder: "Enter 10-digit mobile number",
      icon: Phone,
      required: true,
    },
    {
      name: "amount",
      label: "Required loan amount",
      type: "number",
      placeholder: "Enter required amount",
      icon: IndianRupee,
      required: true,
    },
  ];

  return (
    <section className="bg-[#f3f9fa] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-18">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/loan"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#026381]"
        >
          <ArrowLeft size={17} /> Back to loan overview
        </Link>
        <div className="mt-5 grid overflow-hidden rounded-2xl border border-[#d5e9ed] bg-white shadow-[0_20px_55px_rgba(12,61,76,.12)] sm:mt-7 sm:rounded-[30px] lg:grid-cols-[.72fr_1.28fr]">
          <aside className="relative overflow-hidden bg-gradient-to-br from-[#026381] to-[#0C3D4C] p-5 text-white sm:p-9">
            <span className="absolute -right-16 -top-16 h-52 w-52 rounded-full border-[38px] border-white/5" />
            <BadgeCheck size={38} className="text-[#8ac954]" />
            <p className="mt-8 text-xs font-bold uppercase tracking-[.17em] text-[#9de4ef]">
              {mode === "eligibility" ? "Eligibility request" : "Loan enquiry"}
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight">
              {mode === "eligibility"
                ? "Share a few details to start your eligibility review."
                : "Tell us which loan you want to explore."}
            </h1>
            <p className="mt-4 text-sm leading-6 text-white/70">
              This request starts an assistance journey. The lender makes the final eligibility and
              approval decision after verification.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/80">
              {[
                "Product-specific follow-up",
                "Clear document guidance",
                "No guaranteed approval claims",
              ].map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <BadgeCheck size={17} className="text-[#8ac954]" />
                  {item}
                </p>
              ))}
            </div>
          </aside>

          <form onSubmit={submit} className="p-4 sm:p-9">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-bold text-slate-700">Loan type</span>
                <select
                  name="product"
                  value={form.product}
                  onChange={update}
                  className="w-full rounded-xl border border-[#cfe4e9] bg-[#fbfdfe] px-4 py-3 text-sm outline-none focus:border-[#00a8e8]"
                >
                  {Object.entries(productLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
              {fields.map(({ name, label, type, placeholder, icon: Icon, required }) => (
                <label key={name}>
                  <span className="mb-2 block text-sm font-bold text-slate-700">
                    {label}
                    {required && " *"}
                  </span>
                  <span className="relative block">
                    <Icon
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0289ad]"
                    />
                    <input
                      name={name}
                      value={form[name]}
                      onChange={update}
                      type={type}
                      placeholder={placeholder}
                      required={required}
                      {...(name === "phone"
                        ? {
                            inputMode: "numeric",
                            autoComplete: "tel-national",
                            pattern: "[0-9]{10}",
                            minLength: 10,
                            maxLength: 10,
                          }
                        : {})}
                      className="w-full rounded-xl border border-[#cfe4e9] bg-[#fbfdfe] py-3 pl-11 pr-4 text-sm outline-none focus:border-[#00a8e8]"
                    />
                  </span>
                </label>
              ))}
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  Employment type *
                </span>
                <span className="relative block">
                  <BriefcaseBusiness
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0289ad]"
                  />
                  <select
                    name="employment"
                    value={form.employment}
                    onChange={update}
                    required
                    className="w-full appearance-none rounded-xl border border-[#cfe4e9] bg-[#fbfdfe] py-3 pl-11 pr-4 text-sm outline-none focus:border-[#00a8e8]"
                  >
                    <option value="">Select employment type</option>
                    <option>Salaried</option>
                    <option>Self-employed</option>
                    <option>Business owner</option>
                    <option>Professional</option>
                    <option>Other</option>
                  </select>
                </span>
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-bold text-slate-700">Monthly income</span>
                <input
                  name="monthlyIncome"
                  value={form.monthlyIncome}
                  onChange={update}
                  type="number"
                  placeholder="Enter monthly income"
                  className="w-full rounded-xl border border-[#cfe4e9] bg-[#fbfdfe] px-4 py-3 text-sm outline-none focus:border-[#00a8e8]"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  Additional details
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update}
                  rows="3"
                  placeholder="Tell us anything helpful about your requirement"
                  className="w-full resize-none rounded-xl border border-[#cfe4e9] bg-[#fbfdfe] px-4 py-3 text-sm outline-none focus:border-[#00a8e8]"
                />
              </label>
            </div>
            <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-600">
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={update}
                className="mt-1 accent-[#026381]"
              />
              I agree to the terms and consent to being contacted regarding this loan request.
            </label>
            <button
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#026381] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0C3D4C] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Submitting..."
                : mode === "eligibility"
                  ? "Submit eligibility request"
                  : "Submit loan enquiry"}{" "}
              <ArrowLeft size={17} className="rotate-180" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
