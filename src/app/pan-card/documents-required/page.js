"use client";

import Documents from "../../../../components/Pancard/Documents";

// import Documents from "../../../../components/Pancard/Documents";

export default function DocumentsRequired() {
  const documentList = [
    {
      title: "Documents Required for PAN Application",
      desc: "For Indian citizens applying for the digital PAN service through SaveDost, it is mandatory to provide valid proof of identity, address, and date of birth. Single applicants must submit documents that clearly show their residential address. In the case of minors (under 18 years of age), documents of parents or guardians are accepted as valid proof of both identity and address.",
    },
    {
      title: "For Individuals and Hindu Undivided Family (HUF)",
      desc: (
        <>
          <strong>Proof of Identity:</strong> Aadhaar card, voter ID, driving license, passport,
          ration card with photograph, or any government-issued photo ID.
          <br />
          <br />
          <strong>Proof of Address:</strong> Aadhaar card, voter ID, driving license, passport,
          spouse’s passport, post office passbook, property tax receipt, domicile certificate, or
          recent utility bills such as electricity, water, or broadband bills (not older than three
          months). Bank statements or credit card statements are also accepted.
          <br />
          <br />
          <strong>Proof of Date of Birth:</strong> Aadhaar card, voter ID, passport, birth
          certificate, matriculation certificate, marriage certificate, or any government-issued
          photo ID.
          <br />
          <br />
          In the case of minors, documents of parents or guardians are considered valid proof. For
          Hindu Undivided Family (HUF) applicants, an affidavit signed by the Karta is required,
          listing the names and addresses of all family members.
          <br />
          <br />
          Indian citizens residing outside India may submit a recent foreign bank account statement
          or a Non-Resident External (NRE) account statement (not older than three months) as proof
          of address.
        </>
      ),
    },
    {
      title: "For Companies, Firms, and Other Entities",
      desc: (
        <>
          Companies, firms, trusts, and other organizations applying through the online PAN service
          portal are required to submit a registration certificate issued by the respective
          government authority.
          <br />
          <br />
          Companies must provide a certificate of incorporation issued by the Registrar of
          Companies. Partnership firms must submit a partnership deed or a registration certificate
          issued by the Registrar of Firms. Limited Liability Partnerships (LLPs) are required to
          submit a registration certificate issued by the Registrar of LLPs. Trusts must provide a
          trust deed or a registration certificate issued by the Charity Commissioner.
          <br />
          <br />
          Other entities such as associations, local authorities, or artificial juridical persons
          must submit a document or certificate issued by a competent government authority that
          establishes their identity and address.
          <br />
          <br />
          Entities not registered in India must submit an attested copy of their registration
          certificate issued in their country of origin. This document must be apostilled (for Hague
          Convention countries) or attested by the Indian Embassy, High Commission, or Consulate in
          that country. Additionally, a copy of the permission granted by Indian authorities to open
          an office in India must also be provided.
        </>
      ),
    },
  ];

  return (
    <>
      <Documents items={documentList} />
    </>
  );
}
