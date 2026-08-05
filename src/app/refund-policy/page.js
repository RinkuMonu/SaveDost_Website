import LegalPolicyPage from "../../../components/LegalPolicyPage";

// Refund rules written for customers using SaveDost services.
const sections = [
  {
    id: "scope",
    title: "Policy Scope",
    paragraphs: [
      "This policy explains when a user may request a refund for a payment made through SaveDost. It applies to supported recharges, bill payments, bookings, applications, and other digital or financial services.",
    ],
  },
  {
    id: "eligible",
    title: "Refund-Eligible Transactions",
    items: [
      "Payment was deducted but the transaction failed and was not automatically reversed.",
      "The same transaction was charged more than once.",
      "The service provider confirms that the requested service was not delivered.",
      "SaveDost or the provider approves a refund after investigating a verified technical error.",
    ],
  },
  {
    id: "not-eligible",
    title: "Non-Refundable Transactions",
    items: [
      "A recharge, bill payment, or other real-time service was completed successfully.",
      "The user entered an incorrect mobile number, account number, biller, beneficiary, or amount.",
      "An application or service was rejected because the user did not meet third-party eligibility requirements.",
      "A disclosed processing, convenience, or service fee has already been incurred.",
      "The request falls outside the applicable provider’s cancellation or refund period.",
    ],
  },
  {
    id: "request",
    title: "How to Request a Refund",
    paragraphs: [
      "Email support@savedost.in and provide the registered mobile number, transaction ID, date, amount, service type, and a clear explanation of the issue. Additional proof may be requested when needed for verification.",
    ],
  },
  {
    id: "review",
    title: "Review and Verification",
    paragraphs: [
      "SaveDost will review internal records and may seek confirmation from the payment gateway, bank, biller, or service provider. Acknowledgement is generally provided within 24–48 business hours, although final verification may take longer when a third party is involved.",
    ],
  },
  {
    id: "processing",
    title: "Refund Processing",
    paragraphs: [
      "An approved refund is normally returned to the original payment method. Processing commonly takes 5–10 business days after approval, but the user’s bank or payment provider may require additional time to post the credit.",
    ],
  },
  {
    id: "pending",
    title: "Pending Transactions",
    paragraphs: [
      "A pending status does not mean that a transaction has failed. Users should not make the same payment again until the original status is confirmed. Pending cases may be automatically completed or reversed after reconciliation.",
    ],
  },
  {
    id: "cancellation",
    title: "Cancellations",
    paragraphs: [
      "A request may be cancelled only before it is submitted to or accepted by the relevant provider. Successfully processed real-time services generally cannot be cancelled or reversed.",
    ],
  },
  {
    id: "support",
    title: "Support and Escalation",
    paragraphs: [
      "If a refund is delayed beyond the communicated timeline, contact support with the original case reference. Users should contact SaveDost before initiating a bank chargeback so the transaction can first be investigated through the normal resolution process.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPolicyPage
      title="Cancellation and Refund Policy"
      eyebrow="Customer protection"
      description="Clear information about cancellations, failed transactions, refund eligibility, and processing timelines."
      effectiveDate="23 July 2026"
      sections={sections}
      summary="Successful real-time services are generally non-refundable. Failed, duplicate, or undelivered transactions may qualify after verification, with approved refunds returned to the original payment method."
    />
  );
}
