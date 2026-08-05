"use client";

import Instructions from "../../../../components/Pancard/Instructions";

export default function InstructionsIndianCitizens() {
  const instructionsData = [
    {
      title: "Follow Community Rules",
      desc: "Always follow the community rules and maintain a positive, courteous attitude.",
    },
    {
      title: "Respect Others",
      desc: "Treat all users kindly and respect their opinions, even when you disagree.",
    },
    {
      title: "Be Clear & Concise",
      desc: "Use simple, direct language to make your messages easy to understand.",
    },
    {
      title: "Protect Privacy",
      desc: "Do not share personal or sensitive information in public discussions.",
    },
    {
      title: "Report Responsibly",
      desc: "If you find inappropriate content, report it calmly and responsibly.",
    },
    {
      title: "Stay On Topic",
      desc: "Ensure that your posts and replies are relevant to the topic being discussed.",
    },

    // PAN Instructions
    {
      title: "PAN Instructions (Form 49A)",
      desc: "Only Indian citizens can apply using Form 49A, including Indian citizens residing outside India.",
    },
    {
      title: "Language & Mandatory Fields",
      desc: "The form must be filled in English only. Fields marked with an asterisk (*) are mandatory. Leave a space after each word, number, or punctuation mark.",
    },
    {
      title: "Multiple PAN Restriction",
      desc: "Applicants who already have a PAN cannot reapply. Requests for a new PAN or corrections should be made through the corresponding forms.",
    },
    {
      title: "AO Code",
      desc: "Enter the AO code of the Jurisdictional Assessing Officer. These can be obtained from the Income Tax Office or via form search options.",
    },
    {
      title: "Full Name – Individual",
      desc: "Name: Vivek Kumar Singh\nLast Name/Surname: S I N G H\nFirst Name: V I V E K\nMiddle Name: K U M A R",
    },
    {
      title: "Full Name – Company",
      desc: "Name: Finunique Small Private Limited\nLast Name/Surname: F I N U N I Q U E S M A L L P R I V A T E L I M I T E D\nFirst Name: P R I V A T E\nMiddle Name: L I M I T E D\nAvoid abbreviations like Pvt Ltd or P. Ltd. Do not use titles like Shri, Smt., or Dr.",
    },
    {
      title: "Name on PAN Card",
      desc: "Individuals: V I V E K K U M A R S I N G H, V. K. S I N G H, or V I V E K K. S I N G H\nCompany: F I N U N I Q U E S M A L L P R I V A T E L I M I T E D",
    },
    {
      title: "Previous Names",
      desc: "If you have used another name previously, select Yes and provide details in the same format.",
    },
    {
      title: "Gender",
      desc: "For individuals: Male, Female, or Transgender. Leave blank for non-individual applicants.",
    },
    {
      title: "Date of Birth / Incorporation",
      desc: "Individual: Enter date of birth (e.g., 02/08/1975). Company: Enter date of incorporation.",
    },
    {
      title: "Parents' Information",
      desc: "Father’s name is compulsory: R A M E S H P R A S A D S I N G H. Mother’s name is optional: K A M L E S H K U M A R I S I N G H.",
    },
    {
      title: "Address",
      desc: "Residential address is mandatory for individuals, HUFs, BOIs, and AOPs. Include town/city/district, state, and PIN. For foreign addresses, select “Outside India” and provide country and ZIP code.",
    },
    {
      title: "Office Address",
      desc: "Mandatory for businesses. Fill at least two of the first four fields. For foreign offices, select “Outside India” and provide country and ZIP code.",
    },
    {
      title: "Address for Communication",
      desc: "Select either Residential (R) or Office (O). All communications will be sent to this address.",
    },
    {
      title: "Telephone & Email",
      desc: "Include country code. Examples: Delhi landline 91-11-23555705, mobile 91-91025111111.",
    },
    {
      title: "Status of Applicant",
      desc: "Required for all applicants. LLPs are considered firms.",
    },
    {
      title: "Registration Number",
      desc: "Mandatory for companies. Not applicable for HUFs or individuals.",
    },
    {
      title: "Aadhaar Number (Individuals Only)",
      desc: "Provide Aadhaar number and attach a copy. The name must exactly match the Aadhaar card.",
    },
    {
      title: "Source of Income",
      desc: "Select one or more sources. Business or profession applicants must provide the relevant code (e.g., 12 – Information Technology for Finunique Small Private Limited).",
    },
    {
      title: "Representative Assessee",
      desc: "Applicable for minors, deceased, mentally challenged, or non-resident applicants without an office in India. Valid ID and address proof must be provided.",
    },
    {
      title: "Evidence",
      desc: "Submit proof of identity, address, and date of birth in the applicant’s name. For minors, parent or guardian proof is sufficient.",
    },
    {
      title: "Payment Details",
      desc: "Payments can be made via demand draft, credit card, debit card, or net banking.",
    },
    {
      title: "Signature / Thumb Impression",
      desc: "To be signed by the applicant or authorized person (Karta, Director, Partner, Trustee, or Representative Assessee). Include name, designation, and place of verification.",
    },
  ];

  return (
    <>
      <Instructions items={instructionsData} />
    </>
  );
}
