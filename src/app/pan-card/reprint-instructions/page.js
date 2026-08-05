"use client";
import React from "react";
import Reprintguide from "../../../../components/Reprint/Reprintguidelines";
import { Zap, Lightbulb, PenTool } from "lucide-react";

export default function Reprintguideline() {
  const instructionpoints = [
    {
      icon: <Zap size={22} className="text-[#0077b6]" />,
      question: "Instructions",
      answer: (
        <>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>The form must be completed in English only.</li>
            <li>Fields marked with an asterisk (*) are mandatory</li>
            <li>Enter the correct 10-digit PAN.</li>
            <li>
              Do not tick checkboxes on the left if you are requesting only a new PAN. For any
              change/correction, mark the box corresponding to the field that requires updating
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <Lightbulb size={22} className="text-[#00b4d8]" />,
      question: "1. Full Name",
      answer: (
        <>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Choose the correct title</li>
            <li>
              Individuals should write full names in expanded form, avoiding abbreviations or
              initials.
            </li>
          </ul>
          <br />
          Example:
          <table className="table-auto  mt-2">
            <thead>
              <tr className="bg-gray-100">
                <th className=" px-6 py-2">Last Name/Surname</th>
                <th className=" px-6 py-2">First Name</th>
                <th className=" px-6 py-2">Middle Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" px-6 py-2">SINGH</td>
                <td className=" px-6 py-2">VIVEK</td>
                <td className=" px-6 py-2">KUMAR</td>
              </tr>
            </tbody>
          </table>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>
              Non-individuals must write the full entity name starting from the Last Name/Surname
              field. If the name is too long, continue in First Name and Middle Name fields.
            </li>
          </ul>
          <br />
          Example: XYZ DATA CORPORATION (INDIA) PRIVATE LIMITED
          <table className="table-auto  mt-2">
            <thead>
              <tr className="bg-gray-100">
                <th className=" px-6 py-2">Last Name/Surname</th>
                <th className=" px-6 py-2">First Name</th>
                <th className=" px-6 py-2">Middle Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" px-6 py-2">X Y Z D A T A C O R P O R A T I O N ( I N D</td>
                <td className=" px-6 py-2">I A )</td>
                <td className=" px-6 py-2">P R I V A T E L I M I T E D</td>
              </tr>
            </tbody>
          </table>
          <br />
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>
              Avoid abbreviations in company names. Use “Private Limited” instead of Pvt Ltd, P.
              Ltd., etc
            </li>
            <li>Sole proprietors must apply in their own full name.</li>
            <li>Do not use prefixes such as Shri, Smt, Kumari, Dr., Major, M/s, etc</li>
          </ul>
        </>
      ),
    },

    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "2. Name to be Printed on pancard",
      answer: (
        <>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>
              Individuals may provide full or abbreviated name, but the last name must appear.
            </li>
          </ul>
          <br />
          Example: Vivek Kumar Singh
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>
              <strong>Full:</strong> VIVEK KUMAR SINGH
            </li>
            <li>
              <strong>Abbreviated:</strong> V. K. SINGH
            </li>
            <li>Non-individuals should use the same name as in Item 1.</li>
            <li>
              Avoid titles like <strong>Shri, Smt, Dr., M/s</strong>
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <Zap size={22} className="text-[#0077b6]" />,
      question: "3. Details of Parents (Individuals Only)",
      answer: (
        <>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Father&#39;s name is mandatory; mother&#39;s name is optional.</li>
            <li>Married women must provide their father&#39;s name, not husband&#39;s.</li>
            <li>
              Choose which parent&#39;s name appears on PAN; if not selected, father&#39;s name is
              the default.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <Lightbulb size={22} className="text-[#00b4d8]" />,
      question: "4. Date",
      answer: (
        <>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Cannot be a future date</li>
            <li>Format: DD MM YYYY</li>
          </ul>
          <br />
          Example: 15th March 1990 → 1 5 0 3 1 9 9 0
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Date varies by applicant type:</li>
            <ul className="list-decimal list-outside ml-6 space-y-1 marker:text-[#0077b6]">
              <li>Individual – Date of Birth</li>
              <li>Company – Date of Incorporation</li>
              <li>Partnership Firm/LLP – Date of Partnership Deed or Registration</li>
              <li>Trust – Date of Trust Deed or Registration</li>
              <li>Association/Body of Individuals – Date of Formation</li>
            </ul>
          </ul>
        </>
      ),
    },
    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "Gender",
      answer: (
        <>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Required for Individuals.</li>
            <li>Leave blank for other categories.</li>
          </ul>
        </>
      ),
    },

    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "6 & 7. Photo / Signature Mismatch",
      answer: (
        <>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Tick if the existing pancard has the wrong photo/signature.</li>
            <li>Enclose original pancard with acknowledgment.</li>
          </ul>
        </>
      ),
    },

    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "8. Address for Communication",
      answer: (
        <>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Select Residential or Office.</li>
            <li>Individuals/HUF/AOP may choose either.</li>
            <li>Companies, LLPs, Trusts, Local Authorities: Office address mandatory.</li>
            <li>Fill at least two of the first four address fields.</li>
            <li>Town/City, State/UT, and PIN are mandatory.</li>
            <li>For foreign addresses, select “Outside India”, provide country, and ZIP code.</li>
          </ul>
        </>
      ),
    },

    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "9. Update Other Address",
      answer: (
        <>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Tick box if updating additional addresses and provide details.</li>
          </ul>
        </>
      ),
    },

    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "10. Telephone Number and Email",
      answer: (
        <>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Include country code for mobile/STD numbers.</li>
          </ul>
          <br />
          Example (Delhi landline): 91-11-23555705
          <br />
          Example (Mobile): 91-9102511111
          <ul className="list-disc list-outside mt-3 text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>NRIs/foreign nationals must include appropriate ISD and city codes.</li>
            <li>At least one telephone or email is required for communication.</li>
            <li>SMS updates are sent to Indian mobile numbers.</li>
          </ul>
        </>
      ),
    },

    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "11. Aadhaar Number (Individuals Only)",
      answer: (
        <>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Provide Aadhaar number if allotted.</li>
            <li>The name must match exactly with Aadhaar.</li>
            <li>Attach Aadhaar copy.</li>
            <li>Minors should provide a minor&#39;s Aadhaar.</li>
          </ul>
        </>
      ),
    },

    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "12. Other PANs (if any)",
      answer: (
        <>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Mention any PANs allotted inadvertently.</li>
            <li>Attach pancard(s) for cancellation.</li>
          </ul>
        </>
      ),
    },

    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "13. Signature / Thumb Impression",
      answer: (
        <>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>
              Sign by: applicant, Karta (HUF), Director (Company), Authorized Signatory
              (AOP/BOI/Local Authority/Artificial Juridical Person), Partner (Firm/LLP), Trustee
              (Trust), Representative Assessee (Minor/Deceased/Mentally Challenged).
            </li>
            <li>Verifier&#39;s name, capacity, and place are mandatory.</li>
          </ul>
        </>
      ),
    },

    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "Documents to Submit",
      answer: (
        <>
          <p className="font-semibold text-gray-800 mb-2">Proof of Identity and Address:</p>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Must match name in PAN form.</li>
            <li>Minors may submit parents/guardian documents.</li>
            <li>
              Address must match communication address; additional updated addresses require proof.
            </li>
          </ul>

          <br />
          <p className="font-semibold text-gray-800 mb-2">Proof of PAN:</p>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Required for current PAN and PAN(s) to be cancelled.</li>
            <li>
              Acceptable:
              <ul className="list-decimal list-inside ml-6 space-y-1 marker:text-[#0077b6]">
                <li>pancard copy</li>
                <li>Intimation letter from ITD</li>
                <li>FIR if lost</li>
              </ul>
            </li>
          </ul>

          <br />
          <p className="font-semibold text-gray-800 mb-2">Proof for Changes:</p>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Minor corrections: identity proof with updated data.</li>
            <li>
              Name changes:
              <ul className="list-decimal list-inside ml-6 space-y-1 marker:text-[#0077b6]">
                <li>Marriage certificate</li>
                <li>Gazette notification</li>
                <li>Passport</li>
                <li>ROC certificate (company)</li>
                <li>Revised partnership deed (firm)</li>
                <li>Revised registration/deed (AOP/Trust/BOI/AJP)</li>
              </ul>
            </li>
            <li>DOB/date of incorporation corrections: valid government-issued document.</li>
          </ul>

          <br />
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>
              The ITD database will update addresses for communication even if no change is
              requested.
            </li>
            <li>
              Any discrepancies between PAN application and ITD data may require additional
              documents.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-[#f9fcfd]">
        <div className="p-15">
          <h1 className="mb-8 text-center text-3xl font-bold text-[#0C3D4C] sm:mb-12 sm:text-4xl">
            Guidance for Completing the Form
          </h1>
          <Reprintguide points={instructionpoints} />
        </div>
      </main>
    </>
  );
}
