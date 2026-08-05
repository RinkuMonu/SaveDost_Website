import LegalPolicyPage from "../../../components/LegalPolicyPage";

// Identity-verification rules for individual users.
const sections = [
  {
    id: "purpose",
    title: "Purpose of KYC",
    paragraphs: [
      "Know Your Customer verification helps SaveDost and its regulated service providers confirm a user’s identity, prevent fraud, meet legal obligations, and provide eligible financial or digital services safely.",
    ],
  },
  {
    id: "when-required",
    title: "When KYC May Be Required",
    items: [
      "When a service is subject to identity or regulatory checks.",
      "When transaction activity requires additional verification.",
      "When information appears incomplete, inconsistent, or potentially unauthorized.",
      "When a bank, insurer, lender, payment network, or government service requires verification.",
    ],
  },
  {
    id: "information",
    title: "Information We May Request",
    items: [
      "Full name, date of birth, address, mobile number, and email address.",
      "Government-issued identification and proof of address.",
      "PAN, Aadhaar-based verification, photograph, or live verification where legally permitted and required.",
      "Additional eligibility or income documents for specific financial products.",
    ],
  },
  {
    id: "user-duty",
    title: "User Responsibilities",
    items: [
      "Provide genuine, complete, and current information.",
      "Submit only documents belonging to you or that you are authorized to provide.",
      "Keep OTPs and account credentials private.",
      "Inform support when verified information changes.",
      "Cooperate with lawful reverification requests.",
    ],
  },
  {
    id: "verification",
    title: "Verification Process",
    paragraphs: [
      "Submitted information may be checked against authorized databases or shared with the regulated provider responsible for the selected service. Verification time varies based on document quality, provider systems, and additional checks.",
    ],
  },
  {
    id: "failure",
    title: "Incomplete or Failed Verification",
    paragraphs: [
      "SaveDost may pause, restrict, or decline access to a service when required information is missing, cannot be verified, appears fraudulent, or does not satisfy the relevant provider’s eligibility rules.",
    ],
  },
  {
    id: "security",
    title: "Data Security and Use",
    paragraphs: [
      "KYC information is used for verification, fraud prevention, service delivery, legal compliance, and support. Reasonable technical and organizational safeguards are used, and access is limited to authorized purposes.",
    ],
  },
  {
    id: "retention",
    title: "Data Retention",
    paragraphs: [
      "Verification records may be retained for the period required by applicable law, regulatory directions, contractual obligations, fraud prevention, and dispute resolution. Data is deleted or anonymized when retention is no longer required, subject to legal obligations.",
    ],
  },
  {
    id: "rights",
    title: "User Rights and Corrections",
    paragraphs: [
      "Users may request correction of inaccurate personal information or ask questions about its use by contacting support. Some records cannot be changed or deleted while a legal retention obligation applies.",
    ],
  },
  {
    id: "support",
    title: "KYC Support",
    paragraphs: [
      "For help, email support@savedost.in. Never send OTPs, passwords, or payment PINs to anyone.",
    ],
  },
];

export default function KycPolicyPage() {
  return (
    <LegalPolicyPage
      title="KYC Policy"
      eyebrow="Identity and security"
      description="How identity verification works for users accessing eligible SaveDost services."
      effectiveDate="23 July 2026"
      sections={sections}
      summary="Users must provide accurate identity information when required. KYC data is used for verification, fraud prevention, service eligibility, and compliance with applicable obligations."
    />
  );
}
