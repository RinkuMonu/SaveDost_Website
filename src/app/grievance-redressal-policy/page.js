import saveDostData from "../../../save_dost.json";
import LegalPolicyPage from "../../../components/LegalPolicyPage";

const formatTitle = (key) => key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

const sections = Object.entries(saveDostData.policies.grievance_redressal_policy.sections).map(([key, value]) => ({
  id: key.replace(/_/g, '-'),
  title: formatTitle(key),
  paragraphs: Array.isArray(value) ? [] : [value],
  items: Array.isArray(value) ? value : undefined,
}));

export default function GrievancePolicyPage() {
  return (
    <LegalPolicyPage
      title={saveDostData.policies.grievance_redressal_policy.title}
      eyebrow="Support & Resolution"
      description="Our transparent mechanism for addressing your complaints and concerns."
      effectiveDate={saveDostData.document.effective_date}
      sections={sections}
      summary="We provide a transparent grievance redressal mechanism to resolve complaints regarding our services. Ensure you contact us promptly and provide necessary transaction details."
    />
  );
}
