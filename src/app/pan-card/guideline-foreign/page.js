import React from "react";
import Guide from "../../../../components/Pancard/Guide";

export default function Guidelineforeign() {
  const guidelinesData = [
    {
      title: "Proof of Identity (POI) – Attestation Not Required",
      desc: [
        "Clear copy of a valid Passport.",
        "Photograph and copy of the Person of Indian Origin (PIO) card issued by the Government of India.",
        "Copy of the Overseas Citizen of India (OCI) card issued by the Government of India.",
      ],
    },
    {
      title: "Proof of Identity (POI) – Attestation Required",
      desc: [
        "Copy of any other national or citizenship identification number or Taxpayer Identification Number, duly attested either by an Apostille (for countries that are signatories to the Hague Convention, 1961) or by the Indian Embassy, High Commission, or Consulate in the country where the applicant resides.",
        "Alternatively, attestation may be done by authorized officials of overseas branches of scheduled banks registered in India, in the prescribed format.",
      ],
    },
    {
      title: "Proof of Address (POA) – Attestation Not Required",
      desc: [
        "Copy of a valid Passport.",
        "Copy of the Person of Indian Origin (PIO) card issued by the Government of India.",
        "Copy of the Overseas Citizen of India (OCI) card issued by the Government of India.",
        "Copy of a bank account statement from the applicant’s country of residence.",
        "Copy of an Indian Non-Resident External (NRE) bank account statement.",
        "Copy of the Certificate of Residence in India or Residential Permit issued by State Police Authorities.",
        "Copy of the registration certificate issued by the Foreigners Registration Office showing the Indian address.",
        "Copy of a valid visa along with the appointment letter or employment contract with an Indian company, and the original Indian address certificate issued by the employer.",
      ],
    },
    {
      title: "Proof of Address (POA) – Attestation Required",
      desc: [
        "Copy of any other national or citizenship identification number or Taxpayer Identification Number, duly attested either through Apostille or by the Indian Embassy, High Commission, or Consulate in the applicant’s country of residence.",
        "Alternatively, attestation may be provided by authorized officials of overseas branches of scheduled banks registered in India, as per the prescribed format.",
      ],
    },
    {
      title: "Further Information for Foreign Citizens",
      desc: [
        "Copy of the appointment letter or employment contract with the Indian company.",
        "Original Indian address certificate signed by the authorized signatory of the employer on the company’s letterhead, mentioning the PAN of the employer.",
        "Copy of the employer’s PAN as referenced in the address certificate.",
      ],
    },
    {
      title:
        "Non-Individuals (Company, Firm, LLP, AOP, Trust, Local Authority, Artificial Juridical Person)",
      desc: [
        "Applicants having an office in India:",
        "Proof of Identity: Copy of the registration certificate issued in India or approval granted by Indian authorities to open or operate an office in India.",
        "Proof of Address: Copy of the registration certificate issued in India or authorization provided by the Government of India to establish an office in India.",
        "Applicants not having an office in India:",
        "Proof of Identity: Certificate of Registration issued in the country of residence of the applicant, duly attested by Apostille or by the Indian Embassy, High Commission, or Consulate, or by authorized officials of overseas branches of scheduled banks registered in India (in prescribed format).",
        "Proof of Address: Same as Proof of Identity mentioned above.",
        "Example: Finunique Small Private Limited must submit a Certificate of Incorporation issued by the Registrar of Companies as Proof of Identity (POI) and Proof of Address (POA) when its office is located in India.",
      ],
    },
  ];

  return (
    <>
      <Guide guidelines={guidelinesData} />
    </>
  );
}
