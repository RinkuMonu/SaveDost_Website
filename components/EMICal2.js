"use client";
import React, { useState, useEffect } from "react";

// SVG Icon for the donut chart's center
const EMICenterIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#0C3D4C]"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill="currentColor"
    />
    <path d="M13 7h-2v6h2V7zm0 8h-2v2h2v-2z" fill="currentColor" />
  </svg>
);

// Reusable Input Slider Component
const InputSlider = ({ label, value, min, max, step, onChange, unit, displayFormat }) => {
  const handleInputChange = (e) => {
    onChange(parseFloat(e.target.value));
  };

  const handleButtonClick = (increment) => {
    let newValue = value + increment;
    if (newValue < min) newValue = min;
    if (newValue > max) newValue = max;
    onChange(newValue);
  };

  // Calculate the completion percentage to style the slider track
  const progressPercent = ((value - min) / (max - min)) * 100;
  const sliderStyle = { "--progress-percent": `${progressPercent}%` };

  return (
    <div className="w-full rounded-xl border border-[#d9eaed] bg-[#f9fcfd] p-3 sm:rounded-2xl sm:p-4">
      <div className="mb-3 flex flex-col gap-2 min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between">
        <label className="text-base font-bold text-[#0C3D4C]">{label}</label>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleButtonClick(-step)}
            className="grid h-8 w-8 place-items-center rounded-full border border-[#b9dce3] bg-white text-lg font-bold text-[#0C3D4C] transition hover:bg-[#e5f5f8]"
          >
            -
          </button>
          <span className="min-w-24 rounded-lg border border-[#b9dce3] bg-white px-3 py-1.5 text-center font-bold text-[#0C3D4C] shadow-sm">
            {displayFormat(value)}
          </span>
          <button
            onClick={() => handleButtonClick(step)}
            className="grid h-8 w-8 place-items-center rounded-full border border-[#b9dce3] bg-white text-lg font-bold text-[#0C3D4C] transition hover:bg-[#e5f5f8]"
          >
            +
          </button>
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleInputChange}
        className="w-full bg-transparent rounded-lg appearance-none cursor-pointer slider-thumb"
        style={sliderStyle}
      />
      <div className="flex justify-between text-sm text-gray-500 mt-1">
        <span>{displayFormat(min)}</span>
        <span>{displayFormat(max)}</span>
      </div>
    </div>
  );
};

// Donut Chart Component
const DonutChart = ({ principal, interest, emi }) => {
  const total = principal + interest;
  if (total === 0) return null;

  const principalPercentage = (principal / total) * 100;
  const interestPercentage = (interest / total) * 100;

  const strokeWidth = 18;
  const radius = 100;
  const circumference = 2 * Math.PI * radius;

  const principalStrokeDashoffset = circumference - (principalPercentage / 100) * circumference;

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(" ");
  };

  const interestAngle = (interest / total) * 360;

  return (
    <div className="relative flex items-center justify-center">
      <svg width="230" height="230" viewBox="0 0 230 230">
        <g transform="translate(110, 110)">
          {/* Principal Amount Arc */}
          <path
            d={describeArc(0, 0, radius, interestAngle, 360)}
            fill="none"
            stroke="#24576C"
            strokeWidth={strokeWidth}
          />
          {/* Interest Payable Arc */}
          <path
            d={describeArc(0, 0, radius, 0, interestAngle)}
            fill="none"
            stroke="#C1E9FF"
            strokeWidth={strokeWidth}
          />
        </g>
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center ">
        <span className="text-gray-500 text-lg">EMI</span>
        <span className="text-3xl font-bold text-gray-800">
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 0,
          }).format(emi)}
        </span>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(5); // in years by default
  const [isTermInYears, setIsTermInYears] = useState(true);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  useEffect(() => {
    const principal = loanAmount;
    const annualRate = interestRate;
    const termInMonths = isTermInYears ? loanTerm * 12 : loanTerm;

    if (principal > 0 && annualRate > 0 && termInMonths > 0) {
      const monthlyRate = annualRate / 12 / 100;
      const emiCalc =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, termInMonths)) /
        (Math.pow(1 + monthlyRate, termInMonths) - 1);

      const totalPayment = emiCalc * termInMonths;
      const totalInt = totalPayment - principal;

      setEmi(emiCalc);
      setTotalPayable(totalPayment);
      setTotalInterest(totalInt);
    } else {
      setEmi(0);
      setTotalPayable(0);
      setTotalInterest(0);
    }
  }, [loanAmount, interestRate, loanTerm, isTermInYears]);

  const formatCurrency = (value) => {
    if (value >= 10000000) return `${(value / 10000000).toFixed(2)} Cr`;
    if (value >= 100000) return `${(value / 100000).toFixed(2)} L`;
    if (value >= 1000) return `${(value / 1000).toFixed(2)} K`;
    return value.toFixed(0);
  };

  const termConfig = isTermInYears
    ? { min: 1, max: 30, step: 1, label: "Years" }
    : { min: 12, max: 360, step: 1, label: "Months" };

  const loanTermProgress = ((loanTerm - termConfig.min) / (termConfig.max - termConfig.min)) * 100;
  const loanTermStyle = { "--progress-percent": `${loanTermProgress}%` };

  return (
    <div className="mx-auto max-w-7xl px-0 py-10 sm:py-14 md:py-20">
      <style>{`
                .slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    background-color: transparent;
                    width: 100%;
                    height: 8px;
                }

                /* Webkit track */
                .slider-thumb::-webkit-slider-runnable-track {
                    width: 100%;
                    height: 8px;
                    cursor: pointer;
                    background: linear-gradient(to right, #24576C var(--progress-percent, 0%), #ADD7EF var(--progress-percent, 0%));
                    border-radius: 5px;
                }

                /* Webkit thumb */
                .slider-thumb::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 24px;
                    height: 24px;
                    background: #fff;
                    border: 5px solid #24576C;
                    cursor: pointer;
                    border-radius: 50%;
                    margin-top: -8px; 
                }

                /* Mozilla track */
                .slider-thumb::-moz-range-track {
                    width: 100%;
                    height: 8px;
                    cursor: pointer;
                    background: linear-gradient(to right, #24576C var(--progress-percent, 0%), #ADD7EF var(--progress-percent, 0%));
                    border-radius: 5px;
                }
                
                /* Mozilla thumb */
                .slider-thumb::-moz-range-thumb {
                    width: 14px;
                    height: 14px;
                    background: #fff;
                    border: 5px solid #24576C;
                    cursor: pointer;
                    border-radius: 50%;
                }
            `}</style>
      {/* REDESIGNED EMI CALCULATOR: calculations and controls are unchanged. */}
      <div className="relative grid w-full grid-cols-1 overflow-hidden rounded-2xl border border-[#d7e9ed] bg-white shadow-[0_20px_55px_rgba(12,61,76,0.1)] sm:rounded-[2rem] lg:grid-cols-2">
        {/* Left Side: Inputs */}
        <div className="flex flex-col space-y-4 p-4 sm:space-y-6 sm:p-9 lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
              Adjust Your Details
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-3xl">
              Calculate your monthly EMI
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Use the controls below to compare repayment scenarios.
            </p>
          </div>

          <InputSlider
            label="Loan Amount"
            value={loanAmount}
            min={50000}
            max={5000000}
            step={10000}
            onChange={setLoanAmount}
            unit="₹"
            displayFormat={(v) => `₹ ${formatCurrency(v)}`}
          />

          <InputSlider
            label="Interest Rate (p.a)"
            value={interestRate}
            min={1.0}
            max={20.0}
            step={0.1}
            onChange={setInterestRate}
            unit="%"
            displayFormat={(v) => `${v.toFixed(1)} %`}
          />

          <div className="rounded-xl border border-[#d9eaed] bg-[#f9fcfd] p-3 sm:rounded-2xl sm:p-4">
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <div className=" mb-2">
                <label className="font-semibold text-[#0C3D4C] text-lg">Loan Term</label>
                <div className="flex bg-[#E6F6FF] rounded-lg p-1 w-fit mt-3">
                  <button
                    onClick={() => {
                      setIsTermInYears(false);
                      setLoanTerm((prev) => Math.max(12, prev * 12));
                    }}
                    className={`px-4 py-1 text-sm font-semibold rounded-lg transition-colors ${!isTermInYears ? "bg-[#24576C] text-white shadow" : "text-[#0C3D4C]"}`}
                  >
                    Months
                  </button>
                  <button
                    onClick={() => {
                      setIsTermInYears(true);
                      setLoanTerm((prev) => Math.round(prev / 12));
                    }}
                    className={`px-4 py-1 text-sm font-semibold rounded-lg transition-colors ${isTermInYears ? "bg-[#24576C] text-white shadow" : "text-[#0C3D4C]"}`}
                  >
                    Years
                  </button>
                </div>
              </div>
              <div className="flex h-fit w-full items-center gap-2 rounded-lg min-[400px]:ml-auto min-[400px]:w-40">
                <button
                  onClick={() => setLoanTerm((p) => Math.max(termConfig.min, p - termConfig.step))}
                  className="px-3 py-1 border border-[#ADD7EF] text-lg font-bold  text-gray-600  rounded-full  hover:bg-gray-200 transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-1 font-bold border border-[#ADD7EF] rounded  text-[#0C3D4C] bg-white w-full text-center">
                  {loanTerm}
                </span>
                <button
                  onClick={() => setLoanTerm((p) => Math.min(termConfig.max, p + termConfig.step))}
                  className="px-3 py-1 border border-[#ADD7EF] text-lg font-bold text-gray-600  rounded-full hover:bg-gray-200 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            <input
              type="range"
              min={termConfig.min}
              max={termConfig.max}
              step={termConfig.step}
              value={loanTerm}
              onChange={(e) => setLoanTerm(parseFloat(e.target.value))}
              className="w-full bg-transparent rounded-lg appearance-none cursor-pointer slider-thumb"
              style={loanTermStyle}
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>
                {termConfig.min} {termConfig.label}
              </span>
              <span>
                {termConfig.max} {termConfig.label}
              </span>
            </div>
          </div>
        </div>
        {/* Right Side: Results */}
        <div className="flex flex-col justify-center space-y-8 border-t border-[#d7e9ed] bg-gradient-to-br from-[#f2fafb] to-[#e5f5f8] p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
          <div className="overflow-x-auto rounded-xl border border-[#d2e7eb] bg-white p-3 shadow-sm sm:rounded-2xl sm:p-4">
            <div className="mb-3 flex min-w-[430px] rounded-xl bg-[#dff3f7] p-3">
              <div className="w-2/4 font-semibold text-[#0C3D4C]">EMI</div>
              <div className="w-1/4 text-center font-semibold text-[#0C3D4C]">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0,
                }).format(emi)}
              </div>
              <div className="w-1/4 text-center font-semibold text-[#0C3D4C]">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0,
                }).format(emi)}
              </div>
            </div>
            <table className="w-full min-w-[430px] text-sm border border-gray-200 rounded-xl ">
              <tbody>
                <tr className="border-b border-gray-200 ">
                  <td className="p-3 w-2/4 text-gray-600 border-r border-gray-200">
                    Principal Amount
                  </td>
                  <td className="p-3 w-1/4 text-center font-semibold text-gray-800 border-r border-gray-200">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                    }).format(loanAmount)}
                  </td>
                  <td className="p-3 w-1/4 text-center font-semibold text-gray-800">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                    }).format(loanAmount)}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 w-2/4 text-gray-600 border-r border-gray-200">
                    Interest Payable
                  </td>
                  <td className="p-3 w-1/4 text-center font-semibold text-gray-800 border-r border-gray-200">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                    }).format(totalInterest)}
                  </td>
                  <td className="p-3 w-1/4 text-center font-semibold text-gray-800">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                    }).format(totalInterest)}
                  </td>
                </tr>
                <tr className="bg-[#F7FCFF]">
                  <td className="p-3 w-2/4 font-semibold text-[#0C3D4C] border-r border-gray-200">
                    Total Amount Payable
                  </td>
                  <td className="p-3 w-1/4 text-center font-semibold text-[#0C3D4C] border-r border-gray-200">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                    }).format(totalPayable)}
                  </td>
                  <td className="p-3 w-1/4 text-center font-semibold text-[#0C3D4C]">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                    }).format(totalPayable)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            <DonutChart principal={loanAmount} interest={totalInterest} emi={emi} />
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:flex-col md:items-start">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#24576C]"></div>
                <span className="text-gray-600">Principal Amount</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#C1E9FF]"></div>
                <span className="text-gray-600">Interest Payable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
