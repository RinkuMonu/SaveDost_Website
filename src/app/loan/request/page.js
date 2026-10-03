import LoanEnquiryForm from "../../../../components/LoanEnquiryForm";

export const metadata = {
  title: "Loan Eligibility & Enquiry | SaveDost",
  description: "Submit a SaveDost loan eligibility request or product enquiry.",
};

export default async function LoanRequestPage({ searchParams }) {
  const params = await searchParams;
  return (
    <LoanEnquiryForm
      initialProduct={params?.product || "instant"}
      mode={params?.mode === "eligibility" ? "eligibility" : "enquiry"}
      initialPhone={params?.phone || ""}
    />
  );
}
