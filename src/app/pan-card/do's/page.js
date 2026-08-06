// import React from 'react';
// import Dos from '../../../../components/pancard/Dos';

// export default function dosforeign() {

//     const dosList = [
//         {
//             title: "PAN C",
//             desc: "A valid pancard is required for identity verification.",
//         },
//         {
//             title: "Aadhaar Card",
//             desc: "Aadhaar card is needed for address verification.",
//         },
//         {
//             title: "Bank Statement",
//             desc: "Recent bank statements to verify financial details.",
//         },
//         {
//             title: "Passport Photo",
//             desc: "A recent passport-sized photograph.",
//         },
//         {
//             title: "Utility Bill",
//             desc: "Proof of address such as electricity or water bill.",
//         },
//         {
//             title: "Signature Proof",
//             desc: "A scanned copy of your signature for documentation purposes.",
//         },
//     ];

//     return (

//         <Dos items={dosList} />
//     );
// }

import React from "react";
// import Dos from '../../../../components/pancard/Dos';
import Dos from "../../../../components/Pancard/Dos";

export default function dosforeign() {
  const dosList = [
    {
      title: "Important Guidelines for PAN Application (Form 49AA)",
      desc: "Before proceeding with the PAN application, applicants are advised to read all instructions carefully.",
    },
    {
      title: "Do’s",
      desc: [
        "Use Form 49AA for submitting an application for PAN allotment.",
        "Fill the application using English block letters only.",
        "Affix two latest colour photographs measuring 3.5 cm × 2.5 cm in the space provided.",
        "Ensure the signature is placed strictly within the designated box.",
        "If a left thumb impression is used instead of a signature, it must be duly attested by a Magistrate, Notary Public, or Gazetted Officer with official seal and stamp.",
        "Enter the correct Assessing Officer (AO) code in the application form.",
        "Attach valid Proof of Identity (POI) and Proof of Address (POA) as prescribed under Rule 114(4) of the Income Tax Rules, 1962.",
        "Ensure the POA reflects the same address as mentioned in the application.",
        "Verify that the name on POI and POA exactly matches the name filled in the application form.",
        "If applicable under Section 160 of the Income Tax Act, 1961, provide complete Representative Assessee details in column 14.",
        "Submit POI and POA documents of the Representative Assessee, if one is appointed.",
        "Mention the complete postal address, including nearby landmarks, for accurate delivery.",
        "Ensure the correct ZIP / PIN code is entered in the address section.",
        "Provide a valid telephone number and email ID for communication purposes.",
      ],
    },
    {
      title: "Don’ts",
      desc: [
        "Avoid overwriting or making any manual corrections on the application form.",
        "Do not attach photographs using pins or staples.",
        "Do not sign outside the specified signature box.",
        "Do not submit Proof of Identity (POI) or Proof of Address (POA) documents that are not in the applicant’s own name.",
        "Do not add extra information such as date, designation, or rank along with the signature.",
        "Female applicants should not mention their husband’s name in the father’s name field.",
        "Do not shorten your name or use initials; always write the full name.",
        "If a PAN has already been allotted, do not apply again; use the PAN correction or reprint form instead.",
      ],
    },
    {
      title: "For Assistance",
      desc: [
        "Finunique Small Private Limited",
        "Email: support@savedost.com",
        "Website: www.savedost.com",
      ],
    },
  ];

  return <Dos items={dosList} />;
}


