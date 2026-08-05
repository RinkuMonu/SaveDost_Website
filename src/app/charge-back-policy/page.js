import LegalPolicyPage from "../../../components/LegalPolicyPage";

// Chargeback guidance written for individual customers.
const sections = [
  {
    id: "purpose",
    title: "Purpose and Scope",
    paragraphs: [
      "This policy explains how SaveDost handles transaction disputes and chargebacks raised by users for supported digital, financial, recharge, bill-payment, booking, and application services.",
    ],
  },
  {
    id: "contact-first",
    title: "Contact SaveDost First",
    paragraphs: [
      "Before filing a chargeback with a bank or card issuer, contact SaveDost so the transaction can be reviewed. Many failed or pending transactions are resolved through provider reconciliation or an automatic reversal.",
    ],
  },
  {
    id: "valid-reasons",
    title: "Reasons for a Dispute",
    items: [
      "A payment was made without the user’s authorization.",
      "The same payment was charged more than once.",
      "The payment succeeded but the confirmed service was not delivered.",
      "A technical failure caused an incorrect charge that was not reversed.",
    ],
  },
  {
    id: "information",
    title: "Information Required",
    items: [
      "Transaction ID, date, amount, and service type.",
      "Registered mobile number and payment reference.",
      "A description of the issue and any relevant screenshots or statements.",
      "Any additional evidence reasonably required for verification.",
    ],
  },
  {
    id: "investigation",
    title: "Investigation Process",
    paragraphs: [
      "SaveDost reviews transaction logs, payment confirmation, service-delivery status, and communication records. Information may be requested from the bank, payment gateway, biller, or service provider before a decision is made.",
    ],
  },
  {
    id: "timelines",
    title: "Resolution Timelines",
    paragraphs: [
      "A dispute is generally acknowledged within 24–48 business hours. Investigation commonly takes 5–10 business days, but complex cases or third-party response times may require longer. The user will be informed when material updates are available.",
    ],
  },
  {
    id: "successful",
    title: "Successfully Delivered Services",
    paragraphs: [
      "A chargeback is generally not valid when the requested service was successfully delivered to the details entered by the user. Real-time recharges and bill payments may be irreversible after provider confirmation.",
    ],
  },
  {
    id: "unauthorized",
    title: "Unauthorized Transactions",
    paragraphs: [
      "Users should immediately contact their bank or payment provider and SaveDost if they suspect unauthorized activity. Credentials, OTPs, PINs, and passwords must never be shared. Account access may be temporarily restricted to protect the user during investigation.",
    ],
  },
  {
    id: "misuse",
    title: "Chargeback Misuse",
    paragraphs: [
      "False, duplicate, or malicious chargeback claims may lead to service restrictions and recovery of losses where permitted by law. This does not limit a user’s legitimate rights under applicable consumer or payment laws.",
    ],
  },
  {
    id: "outcome",
    title: "Outcome and Refund",
    paragraphs: [
      "If a dispute is approved, the refund or reversal will be processed through the applicable payment channel. If denied, SaveDost will provide the available reason and supporting transaction status.",
    ],
  },
  {
    id: "support",
    title: "Support",
    paragraphs: [
      "Submit disputes to support@savedost.in. Include complete transaction information to avoid delays.",
    ],
  },
];

export default function ChargebackPolicyPage() {
  return (
    <LegalPolicyPage
      title="Chargeback Policy"
      eyebrow="Transaction disputes"
      description="The process users should follow when disputing an unauthorized, duplicate, failed, or undelivered transaction."
      effectiveDate="23 July 2026"
      sections={sections}
      summary="Contact SaveDost before raising a bank chargeback, provide complete transaction evidence, and allow the payment and service status to be verified through the relevant providers."
    />
  );
}
