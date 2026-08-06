import LegalPolicyPage from "../../../components/LegalPolicyPage";

// Consumer-facing terms for people using SaveDost services.
const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing SaveDost’s website or using a supported service, you agree to these Terms of Use and the policies referenced here. If you do not agree, please do not use the service.",
    ],
  },
  {
    id: "services",
    title: "Services",
    paragraphs: [
      "SaveDost provides access to supported digital and financial services, including utility payments, recharges, bookings, insurance assistance, PAN services, credit support, and loan-related services. Some services are fulfilled by banks, billers, payment networks, or other regulated third parties.",
    ],
    items: [
      "Service availability may vary by provider, location, eligibility, and system status.",
      "Displayed information may be updated when a service provider changes its terms.",
      "Submitting a request does not guarantee approval of a financial product.",
    ],
  },
  {
    id: "eligibility",
    title: "User Eligibility and Account Information",
    paragraphs: [
      "You must be legally capable of entering into a contract and must provide complete, current, and accurate information. Services requiring age, identity, or eligibility checks may only be used when those requirements are met.",
    ],
  },
  {
    id: "responsibilities",
    title: "User Responsibilities",
    items: [
      "Verify mobile numbers, account numbers, bill details, beneficiary information, and amounts before confirming.",
      "Keep account credentials, OTPs, and payment information confidential.",
      "Use the platform only for lawful, personal purposes.",
      "Notify support promptly if you suspect unauthorized access or an incorrect transaction.",
    ],
  },
  {
    id: "payments",
    title: "Payments and Charges",
    paragraphs: [
      "Applicable amounts, taxes, convenience fees, or service charges will be shown before confirmation where required. A payment is considered complete only after confirmation from the relevant payment or service provider.",
    ],
    items: [
      "Do not refresh or repeat a payment while its status is pending.",
      "Keep the transaction reference for support and reconciliation.",
      "Failed, reversed, or duplicate payments are handled under the Refund Policy.",
    ],
  },
  {
    id: "third-parties",
    title: "Third-Party Services",
    paragraphs: [
      "Certain services rely on third-party providers. Their eligibility rules, processing times, cancellation conditions, privacy practices, and service terms may also apply. SaveDost is not responsible for delays or failures outside its reasonable control, but will assist users with available status information.",
    ],
  },
  {
    id: "prohibited-use",
    title: "Prohibited Use",
    items: [
      "Do not provide false or misleading information.",
      "Do not attempt fraud, unauthorized transactions, system interference, scraping, or reverse engineering.",
      "Do not use another person’s identity or payment method without authorization.",
      "Do not misuse support, refund, or chargeback processes.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy and Security",
    paragraphs: [
      "Personal information is handled according to the Privacy Policy and applicable law. Reasonable safeguards are used, but users must also protect their devices, credentials, and communications.",
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation and Refunds",
    paragraphs: [
      "Real-time services may become non-cancellable after successful processing. Eligibility for a refund depends on transaction status, service delivery, provider confirmation, and the Refund Policy.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    paragraphs: [
      "To the extent permitted by law, SaveDost is not liable for indirect or consequential losses, user input errors, provider outages, bank delays, network failures, or events beyond reasonable control. Nothing in these terms limits rights that cannot legally be excluded.",
    ],
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    paragraphs: [
      "These terms may be updated for legal, regulatory, security, or service changes. The revised version becomes effective when published with its updated date.",
    ],
  },
  {
    id: "law-support",
    title: "Governing Law and Support",
    paragraphs: [
      "These terms are governed by Indian law. Subject to applicable consumer law, disputes fall under the jurisdiction of Jaipur, Rajasthan. For assistance, email support@savedost.com.",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPolicyPage
      title="Terms of Use"
      eyebrow="User agreement"
      description="The terms that apply when you access SaveDost and use its supported services."
      effectiveDate="23 July 2026"
      sections={sections}
      summary="Use SaveDost lawfully, provide accurate details, review transactions before confirming, protect your credentials, and contact support promptly if something goes wrong."
    />
  );
}

