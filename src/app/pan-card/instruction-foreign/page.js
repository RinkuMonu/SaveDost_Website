// import React from 'react';
// import Instructions from '../../../../components/pancard/Instructions';

// export default function Instructionforeign () {
// const instructionsData = [
//     {
//         title: "Follow Community Rules",
//         desc: "Always adhere to the community rules and maintain a positive, respectful attitude.",
//     },
//     {
//         title: "Respect Others",
//         desc: "Treat all users kindly and respect their opinions, even when you disagree.",
//     },
//     {
//         title: "Be Clear & Concise",
//         desc: "Use simple and direct language to make your messages easy to understand.",
//     },
//     {
//         title: "Protect Privacy",
//         desc: "Never share personal or sensitive information in public discussions.",
//     },
//     {
//         title: "Report Responsibly",
//         desc: "If you encounter inappropriate content, report it calmly and responsibly.",
//     },
//     {
//         title: "Stay On Topic",
//         desc: "Keep your posts and replies relevant to the topic being discussed.",
//     },
// ];

//     return (

//                 <Instructions items={instructionsData} />
//     );
// }

import React from "react";
import Instructions from "../../../../components/Pancard/Instructions";

export default function Instructionforeign() {
  const instructionsData = [
    // General Instructions
    {
      title: "Eligibility",
      desc: [
        "This form is exclusively for individuals and entities who are not Indian citizens.",
        "Qualified Foreign Investors (QFI) must submit Form 49AA through an authorized Depository Participant.",
      ],
    },
    {
      title: "Language & Mandatory Fields",
      desc: [
        "The application form must be filled in English only.",
        "All fields marked with an asterisk (*) are mandatory.",
        "Leave a space after each word, number, or punctuation mark while filling the form.",
      ],
    },
    {
      title: "Multiple PAN Restriction",
      desc: [
        "Applicants who already hold a valid 10-digit PAN must not apply again.",
        "For corrections or re-issue, the PAN Correction / Reprint form must be used.",
      ],
    },
    {
      title: "AO Code",
      desc: [
        "AO Code (Area Code, AO Type, Range Code, AO Number) is mandatory.",
        "If unknown, applicants may use the default International Taxation AO Code under Delhi RCC: DLC-C-35-1.",
      ],
    },

    // Name Instructions
    {
      title: "Full Name – Individuals",
      desc: [
        "Enter the complete name without initials, abbreviations, or short forms.",
        "Example: RAVIKANT → Last Name: R A V I K A N T",
        "Example: POONAM RAVI NARAYAN → Last: N A R A Y A N, First: P O O N A M, Middle: R A V I",
      ],
    },
    {
      title: "Full Name – Non-Individuals",
      desc: [
        "Enter the complete legal name starting from the Last Name field.",
        "Example: XYZ DATA CORPORATION (INDIA) PRIVATE LIMITED.",
        "Words like 'Private Limited' must be written in full. Abbreviations such as Pvt. Ltd. are not allowed.",
      ],
    },
    {
      title: "Name to be Printed on PAN Card",
      desc: [
        "Individuals may use abbreviated names, but the last name must be included.",
        "Example: SATYAM VENKAT M. K. RAO → S. V. M. K. RAO",
        "For non-individuals, the printed name must exactly match the full name entered.",
        "Do not use prefixes such as Shri, Smt., Dr., or M/s.",
      ],
    },
    {
      title: "Other Names",
      desc: [
        "If the applicant has used any other name earlier, select 'Yes'.",
        "Provide complete details in the same format as the full name.",
      ],
    },

    // Personal Details
    {
      title: "Gender",
      desc: [
        "Mandatory only for individual applicants.",
        "Non-individual applicants should leave this field blank.",
      ],
    },
    {
      title: "Date of Birth / Incorporation",
      desc: [
        "Date must be entered in DD MM YYYY format and should not be a future date.",
        "Individuals: Date of Birth.",
        "Company: Date of Incorporation.",
        "HUF: Date of creation (if unknown, enter 01-01-0001).",
        "Trust: Date as mentioned in the Trust Deed.",
        "Firm / LLP: Date of registration.",
      ],
    },
    {
      title: "Parents’ Details (Individuals Only)",
      desc: [
        "Father’s name is mandatory unless the mother-only option is selected.",
        "Mother’s name is required only for single-parent cases.",
        "Married female applicants must provide their father’s name.",
        "Applicants must choose whether the father’s or mother’s name is to be printed on the PAN card.",
      ],
    },

    // Address Details
    {
      title: "Residential Address",
      desc: [
        "Mandatory for Individuals, HUFs, BOIs, AOPs, and Artificial Juridical Persons.",
        "For foreign addresses, select 'Outside India' and provide country name and ZIP/postal code.",
      ],
    },
    {
      title: "Office Address",
      desc: [
        "Mandatory for Companies, Firms, Trusts, and applicants with business income.",
        "For foreign offices, select 'Outside India' and provide country name and ZIP/postal code.",
      ],
    },
    {
      title: "Address for Communication",
      desc: [
        "Select 'R' for Residential or 'O' for Office address.",
        "All official communication will be sent to the selected address.",
      ],
    },

    // Contact Details
    {
      title: "Telephone & Email",
      desc: [
        "Country code is mandatory for telephone and mobile numbers.",
        "Example: Delhi landline – 91 11 23555705.",
        "Example: Mobile number – 91 9102511111.",
      ],
    },

    // Applicant Status
    {
      title: "Status of Applicant",
      desc: [
        "Mandatory for all applicants.",
        "Limited Liability Partnerships (LLPs) are considered as Firms for PAN purposes.",
      ],
    },
    {
      title: "Registration Number",
      desc: ["Mandatory for Companies.", "Not applicable for Individuals or HUFs."],
    },
    {
      title: "Country of Citizenship",
      desc: ["Mandatory for all applicants.", "ISD country code must be provided."],
    },

    // Income Details
    {
      title: "Source of Income",
      desc: [
        "At least one source of income must be selected.",
        "If Business or Profession is selected, the appropriate profession code must be mentioned.",
        "Example: Code 12 – Information Technology.",
      ],
    },

    // Representative Assessee
    {
      title: "Representative Assessee",
      desc: [
        "Mandatory for minors, deceased persons, mentally incapacitated individuals, or cases under Section 160.",
        "Proof of Identity and Address of the representative must be submitted.",
        "Foreign non-individual applicants without an office in India may provide an Indian tax consultant’s address with a notarized Power of Attorney.",
      ],
    },

    // Proof & Payment
    {
      title: "Proof of Identity & Address",
      desc: [
        "Documents must exactly match the name entered in the application.",
        "For minors, parent or guardian documents are acceptable.",
        "For HUFs, an affidavit from the Karta along with identity and address proof is required.",
      ],
    },
    {
      title: "Payment Details",
      desc: ["Payment can be made via Demand Draft, Credit Card, Debit Card, or Net Banking."],
    },
    {
      title: "Signature / Thumb Impression",
      desc: [
        "Must be signed by the applicant or authorized person (Director, Partner, Trustee, Karta, or Representative Assessee).",
        "Verifier’s name, designation, and place must be clearly mentioned.",
      ],
    },
  ];

  return <Instructions items={instructionsData} />;
}
