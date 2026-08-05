"use client";

import { BadgePercent, Clock3, CreditCard, ShieldCheck } from "lucide-react";
import ServiceBanner from "../../../components/ServiceBanner";
import CreditSlider from "../../../components/CreditSlider";
import CardGrid from "../../../components/CardGrid";
import CreditComp from "../../../components/CreditComp";
import ContactBanner from "../../../components/ContactBanner";

const features = [
  {
    icon: Clock3,
    title: "Simple Application",
    text: "Complete the application with basic details and required documents through a clear process.",
  },
  {
    icon: BadgePercent,
    title: "Rewards & Offers",
    text: "Explore cards offering cashback, reward points, travel privileges, and lifestyle benefits.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    text: "Use convenient payment options and convert eligible purchases into manageable EMIs.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Card Usage",
    text: "Benefit from security controls and assistance provided by the issuing bank.",
  },
];

export default function CreditCardPage() {
  const data = {
    id: 1,
    subheading: "Credit Card Solutions",
    heading: "Find a Credit Card That Fits Your Lifestyle",
    description:
      "Compare credit-card options for rewards, cashback, travel, shopping, and everyday spending—then choose benefits that match your needs.",
    bgImage: "/credit/creditbg.png",
    centerImage: "/credit/credit2.png",
    buttonText: "Explore Cards",
    buttonHref: "#credit-cards",
  };

  return (
    <main>
      {/* Existing top-section design and image remain unchanged; only copy is updated. */}
      <ServiceBanner data={data} />
      <CreditComp />
      <CreditSlider />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
              Card Benefits
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
              Features designed for everyday convenience
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Understand the common advantages available across different credit-card options.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-[#d7e9ed] bg-[#f7fbfc] p-6 transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(12,61,76,0.1)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#dff3f7] text-[#027f9f]">
                  <Icon size={23} />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-[#0C3D4C]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="credit-cards"
        className="scroll-mt-24 bg-[#f3f9fb] px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
      >
        <CardGrid />
      </section>
      <ContactBanner />
    </main>
  );
}
