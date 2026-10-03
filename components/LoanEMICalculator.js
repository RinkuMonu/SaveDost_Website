"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, CircleHelp } from "lucide-react";

const amountLimits = { min: 5000, max: 6000000, step: 5000 };
const rateLimits = { min: 6, max: 36, step: 0.25 };
const tenureLimits = { min: 3, max: 72, step: 1 };

const formatCurrency = (value, fractionDigits = 0) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value);

function calculateLoan(principal, annualRate, months) {
  const monthlyRate = annualRate / 1200;
  const emi =
    monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate * (1 + monthlyRate) ** months) /
        ((1 + monthlyRate) ** months - 1);
  const totalPayment = emi * months;

  return { emi, totalInterest: totalPayment - principal, totalPayment };
}

function CalculatorSlider({ label, hint, value, min, max, step, onChange, formatValue, inputLabel }) {
  const progress = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <label className="block text-sm font-bold text-[#0C3D4C]">{label}</label>
          <p className="mt-0.5 text-xs text-slate-500">{hint}</p>
        </div>
        <label className="flex items-center gap-2 rounded-lg border border-[#cfe4e9] bg-white px-3 py-2">
          <span className="sr-only">{inputLabel}</span>
          <input
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(event) => {
              const next = Number(event.target.value);
              if (Number.isFinite(next)) onChange(Math.min(max, Math.max(min, next)));
            }}
            className="w-28 bg-transparent text-right text-sm font-semibold text-[#0C3D4C] outline-none"
          />
          <span className="text-xs text-slate-500">{formatValue(value, true)}</span>
        </label>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label={label}
        style={{ "--range-progress": `${progress}%` }}
        className="loan-calculator-range mt-4 w-full"
      />
      <div className="mt-1 flex justify-between text-xs text-slate-500">
        <span>{formatValue(min)}</span>
        <span>{formatValue(max)}</span>
      </div>
    </div>
  );
}

export default function LoanEMICalculator({
  loanType = "Personal",
  initialAmount = 500000,
  initialRate = 12,
  initialMonths = 36,
  amountMax = amountLimits.max,
  exampleAmount = 100000,
  exampleRate = 15,
  exampleMonths = 12,
}) {
  const [amount, setAmount] = useState(initialAmount);
  const [rate, setRate] = useState(initialRate);
  const [months, setMonths] = useState(initialMonths);
  const result = calculateLoan(amount, rate, months);
  const principalShare = (amount / result.totalPayment) * 100;
  const example = calculateLoan(exampleAmount, exampleRate, exampleMonths);
  const configuredAmountLimits = { ...amountLimits, max: amountMax };

  return (
    <section className="bg-[#eaf4f6] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[#026381] text-white shadow-md">
            <Calculator size={23} />
          </span>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#0289ad]">
            Plan your repayments
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#0C3D4C] sm:text-4xl">
            {loanType} Loan Calculator
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Adjust the amount, interest rate, and tenure to estimate your monthly EMI and total
            repayment.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-[#d5e9ed] bg-white shadow-[0_18px_50px_rgba(12,61,76,0.11)] lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-8 p-5 sm:p-8 lg:p-10">
            <CalculatorSlider
              label="Loan amount"
              hint="How much do you need?"
              value={amount}
              min={configuredAmountLimits.min}
              max={configuredAmountLimits.max}
              step={configuredAmountLimits.step}
              onChange={setAmount}
              inputLabel="Loan amount in rupees"
              formatValue={(value, compact) =>
                compact ? "₹" : formatCurrency(value)
              }
            />
            <CalculatorSlider
              label="Interest rate"
              hint="Annual interest rate"
              value={rate}
              min={rateLimits.min}
              max={rateLimits.max}
              step={rateLimits.step}
              onChange={setRate}
              inputLabel="Annual interest rate percentage"
              formatValue={(value, compact) => (compact ? "%" : `${value}%`)}
            />
            <CalculatorSlider
              label="Loan tenure"
              hint="Repayment period"
              value={months}
              min={tenureLimits.min}
              max={tenureLimits.max}
              step={tenureLimits.step}
              onChange={setMonths}
              inputLabel="Loan tenure in months"
              formatValue={(value, compact) => (compact ? "months" : `${value} months`)}
            />
          </div>

          <aside className="flex flex-col bg-[#f2f8f9]">
            <div className="flex-1 space-y-4 p-5 sm:p-8">
              <div className="flex justify-between gap-4 border-b border-[#d5e3e6] pb-3 text-sm">
                <span className="text-slate-600">Principal amount</span>
                <strong className="text-right text-[#0C3D4C]">{formatCurrency(amount)}</strong>
              </div>
              <div className="flex justify-between gap-4 border-b border-[#d5e3e6] pb-3 text-sm">
                <span className="text-slate-600">Total interest</span>
                <strong className="text-right text-[#0C3D4C]">
                  {formatCurrency(result.totalInterest)}
                </strong>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-slate-600">Total repayment</span>
                <strong className="text-right text-[#026381]">
                  {formatCurrency(result.totalPayment)}
                </strong>
              </div>
              <div className="flex items-center justify-center gap-5 py-2">
                <div
                  role="img"
                  aria-label={`Repayment composition: ${Math.round(principalShare)} percent principal and ${Math.round(100 - principalShare)} percent interest`}
                  className="h-28 w-28 rounded-full"
                  style={{
                    background: `conic-gradient(#026381 0% ${principalShare}%, #9de4ef ${principalShare}% 100%)`,
                  }}
                >
                  <div className="m-3 grid h-20 w-20 place-items-center rounded-full bg-[#f2f8f9] text-center text-[10px] font-bold text-[#0C3D4C]">
                    Total
                    <br />
                    repayment
                  </div>
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  <p>
                    <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#026381]" />
                    Principal {Math.round(principalShare)}%
                  </p>
                  <p>
                    <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#9de4ef]" />
                    Interest {Math.round(100 - principalShare)}%
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#026381] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div>
                <p className="text-sm text-white/80">Estimated monthly EMI</p>
                <p className="mt-1 text-3xl font-extrabold sm:text-4xl">
                  {formatCurrency(result.emi)}
                </p>
                <p className="mt-1 text-xs text-white/75">
                  At {rate}% per year for {months} months
                </p>
              </div>
              <Link
                href={`/loan/request?product=${loanType.toLowerCase()}&mode=enquiry`}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#9de4ef] px-5 py-3 text-sm font-bold text-[#0C3D4C] transition hover:bg-white"
              >
                Apply now <ArrowRight size={17} />
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-5 rounded-3xl border border-[#d5e9ed] bg-white p-5 shadow-sm sm:p-8">
          <h3 className="text-xl font-extrabold text-[#0C3D4C] sm:text-2xl">
            A quick {loanType.toLowerCase()} loan example
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            For a loan of {formatCurrency(exampleAmount)} at {exampleRate}% annual interest over{" "}
            {exampleMonths} months:
          </p>
          <div className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            <p className="text-sm text-slate-700">
              <span className="mr-2 text-[#0289ad]">•</span>
              Loan amount (principal): <strong>{formatCurrency(exampleAmount)}</strong>
            </p>
            <p className="text-sm text-slate-700">
              <span className="mr-2 text-[#0289ad]">•</span>
              Annual interest rate: <strong>{exampleRate}%</strong>
            </p>
            <p className="text-sm text-slate-700">
              <span className="mr-2 text-[#0289ad]">•</span>
              Tenure: <strong>{exampleMonths} months</strong>
            </p>
            <p className="text-sm text-slate-700">
              <span className="mr-2 text-[#0289ad]">•</span>
              Estimated monthly EMI: <strong>{formatCurrency(example.emi, 2)}</strong>
            </p>
            <p className="text-sm text-slate-700">
              <span className="mr-2 text-[#0289ad]">•</span>
              Estimated total interest: <strong>{formatCurrency(example.totalInterest, 2)}</strong>
            </p>
            <p className="text-sm text-slate-700">
              <span className="mr-2 text-[#0289ad]">•</span>
              Estimated total repayment: <strong>{formatCurrency(example.totalPayment, 2)}</strong>
            </p>
          </div>
          <p className="mt-5 flex items-start gap-2 border-t border-[#e3eef0] pt-4 text-xs leading-5 text-slate-500">
            <CircleHelp size={15} className="mt-0.5 shrink-0 text-[#0289ad]" />
            Estimates use a standard reducing-balance EMI formula and exclude lender-specific
            fees, taxes, and other charges. Actual terms and repayment amounts may vary by lender.
          </p>
        </div>
      </div>
      <style jsx>{`
        .loan-calculator-range {
          appearance: none;
          height: 8px;
          border-radius: 9999px;
          background: linear-gradient(
            to right,
            #026381 0%,
            #026381 var(--range-progress),
            #dce8ea var(--range-progress),
            #dce8ea 100%
          );
          cursor: pointer;
        }
        .loan-calculator-range::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border: 4px solid #026381;
          border-radius: 50%;
          background: white;
          box-shadow: 0 1px 4px rgb(12 61 76 / 20%);
        }
        .loan-calculator-range::-moz-range-thumb {
          width: 13px;
          height: 13px;
          border: 4px solid #026381;
          border-radius: 50%;
          background: white;
          box-shadow: 0 1px 4px rgb(12 61 76 / 20%);
        }
        .loan-calculator-range:focus-visible {
          outline: 2px solid #0289ad;
          outline-offset: 4px;
        }
      `}</style>
    </section>
  );
}
