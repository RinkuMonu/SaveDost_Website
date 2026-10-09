import LegalPolicyPage from "../../../components/LegalPolicyPage";

import saveDostData from "../../../save_dost.json";

const formatTitle = (key) => key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

const sections = Object.entries(saveDostData.policies.terms_and_conditions.sections).map(([key, value]) => ({
  id: key.replace(/_/g, '-'),
  title: formatTitle(key),
  paragraphs: Array.isArray(value) ? [] : [value],
  items: Array.isArray(value) ? value : undefined,
}));

export default function TermsOfUsePage() {
  return (
    <LegalPolicyPage
      title={saveDostData.policies.terms_and_conditions.title}
      eyebrow="User agreement"
      description="The terms that apply when you access SaveDost and use its supported services."
      effectiveDate={saveDostData.document.effective_date}
      sections={sections}
      summary="Use SaveDost lawfully, provide accurate details, review transactions before confirming, protect your credentials, and contact support promptly if something goes wrong."
    />
  );
}

