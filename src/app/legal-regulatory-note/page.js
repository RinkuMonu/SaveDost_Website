import saveDostData from "../../../save_dost.json";
import LegalPolicyPage from "../../../components/LegalPolicyPage";

const sections = [
  {
    id: "legal-note",
    title: "Important Legal & Regulatory Note",
    paragraphs: [],
    items: saveDostData.legal_regulatory_note,
  }
];

export default function LegalRegulatoryNotePage() {
  return (
    <LegalPolicyPage
      title="Important Legal / Regulatory Note"
      eyebrow="Compliance"
      description="Important regulatory notes and compliance information."
      effectiveDate={saveDostData.document.effective_date}
      sections={sections}
      summary="These are important legal and regulatory notes regarding the operation and compliance of SaveDost."
    />
  );
}
