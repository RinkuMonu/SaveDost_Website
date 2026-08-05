import React from "react";

const benefitsTop = [
  { label: "Instant Transfer", icon: "🚀" },
  { label: "High Security", icon: "🔒" },
  { label: "Easy Access", icon: "🎯" },
];
const benefitsBottom = [
  { label: "Low Cost", icon: "💵" },
  { label: "Wide Reach", icon: "🌐" },
  { label: "24/7 Service", icon: "⏰" },
];

export default function BenefitsDiagram() {
  return (
    <div className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-3 py-8 sm:gap-4 lg:relative lg:flex lg:min-h-[520px] lg:items-center lg:justify-center lg:py-20">
      {/* Top row of cards */}
      <div className="contents lg:absolute lg:left-0 lg:top-0 lg:flex lg:w-full lg:justify-between lg:px-6">
        {benefitsTop.map((b, i) => (
          <div
            key={b.label}
            className="relative flex min-h-24 w-full flex-col items-center justify-center rounded-xl bg-blue-100 p-3 text-center shadow-md lg:h-28 lg:w-40 lg:p-0"
          >
            <span className="text-2xl mb-2">{b.icon}</span>
            <span className="font-medium text-blue-700">{b.label}</span>
            {/* Line to center */}
            <div className="absolute left-1/2 top-full hidden h-12 w-0 border-l-2 border-blue-300 lg:block"></div>
          </div>
        ))}
      </div>
      {/* Center round label */}
      <div className="relative z-10 col-span-2 mx-auto flex h-20 w-full max-w-[280px] items-center justify-center p-2 lg:left-0 lg:top-1/2 lg:my-8 lg:h-[100px] lg:w-[340px] lg:max-w-none lg:p-4">
        {/* Top left curve */}

        {/* Main button */}
        <button
          className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-xl font-bold text-white shadow lg:text-2xl"
          style={{ letterSpacing: "1px" }}
        >
          BENEFITS
        </button>
      </div>
      {/* Bottom row of cards */}
      <div className="contents lg:absolute lg:bottom-0 lg:left-0 lg:flex lg:w-full lg:justify-between lg:px-6">
        {benefitsBottom.map((b, i) => (
          <div
            key={b.label}
            className="relative flex min-h-24 w-full flex-col items-center justify-center rounded-xl bg-blue-100 p-3 text-center shadow-md lg:h-28 lg:w-40 lg:p-0"
          >
            <span className="text-2xl mb-2">{b.icon}</span>
            <span className="font-medium text-blue-700">{b.label}</span>
            {/* Line to center */}
            <div className="absolute bottom-full left-1/2 hidden h-12 w-0 border-l-2 border-blue-300 lg:block"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
