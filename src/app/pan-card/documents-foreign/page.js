// import React from 'react';
// import Documents from '../../../../components/pancard/Documents';

// export default function documentsforeign() {

//     const documentList = [
//         {
//             title: "pancard",
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

//         <Documents items={documentList} />
//     );
// }

import React from "react";
import Documents from "../../../../components/Pancard/Documents";

export default function documentsforeign() {
  const documentList = [
    {
      title: "For Individuals & HUF - Proof of Identity (POI)",
      desc: (
        <div className="text-gray-600 text-base leading-relaxed">
          <strong>Attestation Not Required:</strong>
          <ul className="list-disc ml-5 mt-2">
            <li>Copy of Passport</li>
            <li>Copy of Person of Indian Origin (PIO) Card issued by Government of India</li>
            <li>Copy of Overseas Citizen of India (OCI) Card issued by Government of India</li>
          </ul>
          <strong className="mt-3 block">Attestation Required:</strong>
          <ul className="list-disc ml-5 mt-2">
            <li>
              Copy of other national/citizenship Identification Number or Taxpayer Identification
              Number (TIN), duly attested by:
              <ul className="list-disc ml-5 mt-1">
                <li>Apostille (for countries signatory to Hague Convention, 1961)</li>
                <li>Indian Embassy/High Commission/Consulate</li>
                <li>Authorised officials of overseas branches of Scheduled Banks in India</li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "For Individuals & HUF - Proof of Address (POA)",
      desc: (
        <div className="text-gray-600 text-base leading-relaxed">
          <strong>Attestation Not Required:</strong>
          <ul className="list-disc ml-5 mt-2">
            <li>Copy of Passport</li>
            <li>Copy of PIO Card</li>
            <li>Copy of OCI Card</li>
          </ul>
          <strong className="mt-3 block">Attestation Required:</strong>
          <ul className="list-disc ml-5 mt-2">
            <li>Copy of Bank account statement in country of residence</li>
            <li>Copy of Non-Resident External (NRE) bank account statement in India</li>
            <li>
              Copy of Certificate of Residence in India or Residential Permit issued by State Police
              Authorities
            </li>
            <li>
              Copy of Registration Certificate issued by the Foreigner&#39;s Registration Office
              showing Indian address
            </li>
            <li>
              Copy of Visa granted + appointment letter/contract from Indian company + certificate
              of Indian address issued by employer
            </li>
            <li>
              Copy of other national/citizenship Identification Number or TIN, duly attested (as
              mentioned above)
            </li>
          </ul>
          <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded">
            <strong>Note:</strong> If an Indian office address is mentioned by foreign citizens,
            then additionally submit:
            <ul className="list-disc ml-5 mt-1">
              <li>Copy of appointment letter/contract from Indian company</li>
              <li>
                Certificate of Indian address issued by employer on company letterhead, mentioning
                employer&#39;s PAN
              </li>
              <li>Copy of pancard mentioned in the employer&#39;s certificate</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title:
        "For Non-Individuals (Firm, BOI, AOP, Trust, Local Authority, Company, LLP, Artificial Juridical Person) - Proof of Identity & Address",
      desc: (
        <div className="text-gray-600 text-base leading-relaxed">
          <strong>1. Office outside India:</strong>
          <ul className="list-disc ml-5 mt-2">
            <li>
              <strong>POI:</strong> Copy of Certificate of Registration issued in the country where
              the applicant is located, duly attested by Apostille / Indian Embassy / High
              Commission / Consulate / authorized bank officials
            </li>
            <li>
              <strong>POA:</strong> Same as POI
            </li>
          </ul>
          <strong className="mt-3 block">2. Office in India:</strong>
          <ul className="list-disc ml-5 mt-2">
            <li>
              <strong>POI:</strong> Copy of registration certificate issued in India or approval
              granted to set up office by Indian authorities
            </li>
            <li>
              <strong>POA:</strong> Same as POI
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return <Documents items={documentList} />;
}
