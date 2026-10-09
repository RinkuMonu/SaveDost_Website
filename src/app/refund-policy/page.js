import LegalPolicyPage from "../../../components/LegalPolicyPage";

import saveDostData from "../../../save_dost.json";

const formatTitle = (key) => key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

const sections = Object.entries(saveDostData.policies.refund_and_cancellation_policy.sections).map(([key, value]) => ({
  id: key.replace(/_/g, '-'),
  title: formatTitle(key),
  paragraphs: Array.isArray(value) ? [] : [value],
  items: Array.isArray(value) ? value : undefined,
}));

export default function RefundPolicyPage() {
  return (
    <LegalPolicyPage
      title={saveDostData.policies.refund_and_cancellation_policy.title}
      eyebrow="Customer protection"
      description="Clear information about cancellations, failed transactions, refund eligibility, and processing timelines."
      effectiveDate={saveDostData.document.effective_date}
      sections={sections}
      summary="Successful real-time services are generally non-refundable. Failed, duplicate, or undelivered transactions may qualify after verification, with approved refunds returned to the original payment method."
    />
  );
}

