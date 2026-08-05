import React from "react";

// You can move this data to a separate file or fetch it from an API
const processSteps = [
  {
    step: 1,
    title: "NDA Signing",
    description:
      "The entity is required to sign a Non-Disclosure Agreement (NDA) before initiating the onboarding process.",
    eta: "1 day",
  },
  {
    step: 2,
    title: "Draft Agreement",
    description:
      "The entity reviews the draft agreement shared and provides feedback or suggested modifications, if required.",
    eta: "2 days",
  },
  {
    step: 3,
    title: "Agreement Sign-Off",
    description:
      "Authorized representatives from both parties sign the agreement, officially confirming and formalizing the partnership.",
    eta: "2 days",
  },
  {
    step: 4,
    title: "Service Integration",
    description:
      "The PAN Redirection Service is tested and technically integrated to ensure smooth and seamless functionality.",
    eta: "3 days",
  },
  {
    step: 5,
    title: "Launch Of The Service",
    description:
      "The PAN Redirection Service is formally launched and made live, becoming accessible to end users.",
    eta: "3 days",
  },
];

const ProcessStepCard = ({ step, title, description, eta }) => (
  <div className="flex h-full flex-col rounded-2xl border border-[#d7e9ed] bg-[#f7fbfc] p-6 transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(12,61,76,0.1)]">
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#026381] text-xl font-extrabold text-white">
      {step}
    </div>
    <div className="flex-grow">
      <h3 className="text-lg font-extrabold text-[#0C3D4C]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
    <p className="mt-5 w-fit rounded-full bg-[#e1f3f6] px-3 py-1.5 text-xs font-bold text-[#027f9f]">
      Estimated time: {eta}
    </p>
  </div>
);

const OnboardingProcess = () => {
  return (
    <div className="flex items-center justify-center py-14 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
            Partner Onboarding
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
            A clear path from agreement to service launch
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Follow a structured onboarding process designed for smooth integration and activation.
          </p>
        </div>

        {/* Using a more robust grid layout that handles wrapping and centering */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.slice(0, 3).map((item) => (
            <ProcessStepCard key={item.step} {...item} />
          ))}
        </div>
        <div className="mt-5 flex justify-center">
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:max-w-[67%]">
            {processSteps.slice(3, 5).map((item) => (
              <ProcessStepCard key={item.step} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingProcess;
