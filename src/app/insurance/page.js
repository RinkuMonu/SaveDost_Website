import ServiceBanner from "../../../components/ServiceBanner";
import GetInsurance from "../../../components/GetInsurance";
import InsuranceProcessSteps from "../../../components/InsuranceProcessSteps";
import InsuranceDocumentsSection from "../../../components/InsuranceDocumentsSection";
import InsuranceBenefitsSection from "../../../components/InsuranceBenefitsSection";
import PartnersSection from "../../../components/PartnersSection";
import ContactBanner from "../../../components/ContactBanner";
import FAQ from "../../../components/Bike Insurance/FAQ";

const faqs = [
  {
    question: "What types of insurance can I explore?",
    answer:
      "You can explore bike, car, taxi, and commercial vehicle insurance options through SaveDost.",
  },
  {
    question: "How do I request insurance assistance?",
    answer:
      "Choose the relevant insurance category and contact our team with the required vehicle and personal details.",
  },
  {
    question: "Are my documents handled securely?",
    answer:
      "Documents are handled through secure verification processes and used for the relevant insurance request.",
  },
  {
    question: "Can I insure more than one vehicle?",
    answer:
      "Yes. Separate policies can be considered for each eligible vehicle according to insurer requirements.",
  },
  {
    question: "How is the right coverage selected?",
    answer:
      "Coverage depends on the vehicle, usage, insurer options, and your requirements. Review policy terms carefully before purchase.",
  },
  {
    question: "How can I get help with a claim?",
    answer:
      "Contact the insurer or our support team for guidance on the applicable claim process and required documents.",
  },
];

export default function InsurancePage() {
  const data = {
    id: 1,
    subheading: "Insurance Solutions",
    heading: "Protection for Every Journey",
    description:
      "Explore vehicle insurance options designed to protect your car, bike, taxi, or commercial vehicle against eligible risks.",
    bgImage: "/insurance/ibg.png",
    centerImage: "/insurance/i2.png",
    buttonText: "Explore Insurance",
    buttonHref: "#insurance-options",
  };

  return (
    <main>
      <ServiceBanner data={data} />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-[#d7e9ed] bg-[#f4fafb] px-6 py-10 text-center shadow-[0_12px_30px_rgba(12,61,76,0.07)] sm:px-10 lg:px-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
            Understanding Insurance
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
            Financial protection for life&apos;s unexpected moments
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-slate-600">
            The right insurance policy can help reduce the financial impact of covered loss or
            damage. SaveDost helps customers explore vehicle insurance options through a clear and
            convenient process.
          </p>
        </div>
      </section>

      <section id="insurance-options" className="scroll-mt-24">
        <GetInsurance />
      </section>
      <InsuranceProcessSteps />
      <InsuranceDocumentsSection />
      <InsuranceBenefitsSection />
      <PartnersSection />
      <div className="bg-white lg:px-16">
        <FAQ
          faqs={faqs}
          subheading="Find answers to common questions about vehicle insurance and support."
        />
      </div>
      <ContactBanner />
    </main>
  );
}
