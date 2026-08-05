import { FileText, BookOpen, ClipboardList, Info } from "lucide-react";
import PanGuidelines from "../../../../components/PanGuidelines";

export default function Page() {
  const sections = [
    {
      icon: <FileText size={20} />,
      title: "General Guidelines",
      content: (
        <>
          <p>
            Form should be filled in English only and preferably in capital letters using black ink.
          </p>
          <ul className="list-disc pl-6">
            <li>Fields marked with an asterisk (*) are mandatory.</li>
            <li>Mention your 10-digit PAN correctly.</li>
            <li>
              Do not tick boxes on the left side if you only require a reprint of PAN card (without
              any change).
            </li>
            <li>
              Tick the box only beside the field(s) where you wish to make a change or correction.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <BookOpen size={20} />,
      title: "Full Name & Name to be Printed",
      content: (
        <>
          <p>1. Full Name</p>
          <ul className="list-disc pl-6">
            <li>Choose the correct title (Mr./Mrs./Ms./M/s, etc.).</li>
            <li>
              Individuals must write their full name expanded — initials or abbreviations are not
              allowed.
            </li>
          </ul>
          <table className="w-full border border-gray-300 mt-3 text-sm rounded-lg overflow-hidden shadow-sm my-5">
            <thead className="bg-[#eaf4f5] text-[#0C3D4C]">
              <tr>
                <th className="p-3 text-left border-b border-gray-200 w-1/3 font-semibold">
                  Example Name
                </th>
                <th className="p-3 text-left border-b border-gray-200 w-1/3 font-semibold">
                  How to Fill in the Form
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b hover:bg-[#e0f7fa] transition-colors">
                <td className="p-3 border-b border-gray-100 space-y-2">Ravikant</td>
                <td className="p-3 border-b border-gray-100 space-y-2">Last Name: RAVIKANT</td>
              </tr>
              <tr className="bg-[#f9fafb] border-b hover:bg-[#d0efff] transition-colors">
                <td className="p-3 border-b border-gray-100 space-y-2">Suresh Sarda</td>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Last Name: SARDA, First Name: SURESH
                </td>
              </tr>
              <tr className="border-b hover:bg-[#e0f7fa] transition-colors">
                <td className="p-3 border-b border-gray-100 space-y-2">Poonam Ravi Narayan</td>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Last Name: NARAYAN, First Name: POONAM, Middle Name: RAVI
                </td>
              </tr>
              <tr className="bg-[#f9fafb] border-b hover:bg-[#d0efff] transition-colors">
                <td className="p-3 border-b border-gray-100 space-y-2">Satyam Venkat M.K. Rao</td>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Last Name: RAO, First Name: SATYAM, Middle Name: VENKAT M K
                </td>
              </tr>
              <tr className="border-b hover:bg-[#e0f7fa] transition-colors">
                <td className="p-3 border-b border-gray-100 space-y-2">
                  M.S. Kandaswamy (Madurai Somasundram Kandaswamy)
                </td>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Last Name: KANDASWAMY, First Name: MADURAI, Middle Name: SOMASUNDRAM
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            Non-individuals (Companies, Firms, Trusts, etc.) should write their full registered name
            starting in the “Last Name/Surname” field and continue in the next fields if the name
            exceeds the space. Use the full form of words like “Private Limited” — do not abbreviate
            as Pvt. Ltd., P. Ltd., etc. Sole proprietors should apply in their own name, not in the
            name of the business. Do not prefix titles like Shri, Smt., Kumari, Dr., Major, M/s,
            etc.
          </p>
          <p>2. Name to be Printed on the PAN Card</p>
          <p>
            Individuals may choose to have a full or abbreviated name, but it must include the last
            name.
          </p>
          <p>Example:</p>
          <ul className="list-disc pl-6">
            <li>Full Name: SATYAM VENKAT M. K. RAO</li>
            <li>
              Printed Name (any acceptable version):
              <ul className="list-disc pl-6">
                <li>SATYAM VENKAT M. K. RAO</li>
                <li> S. V. M. K. RAO</li>
                <li>SATYAM V. M. K. RAO</li>
              </ul>{" "}
            </li>
            <li>
              For non-individuals, the printed name must match the full name given in Item No. 1.
            </li>
            <li>Do not use prefixes like Shri, Smt., Kumari, Dr., etc</li>
          </ul>
        </>
      ),
    },
    {
      icon: <Info size={20} />,
      title: "3. Details of Parents (For Individuals Only)",
      content: (
        <>
          <ul className="list-disc pl-6">
            <li>Same name guidelines as in Item No. 1 apply.</li>
            <li>Mention Father’s Name (mandatory, even for married women).</li>
            <li>Mother’s Name is optional.</li>
            <li>
              Select the appropriate option for which parent’s name should be printed on the PAN
              card.
            </li>
            <li>If no option is selected, father’s name will be printed by default.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <FileText size={20} />,
      title: "4. Date of Birth / Incorporation / Formation",
      content: (
        <>
          <ul className="list-disc pl-6">
            <li>Date cannot be a future date.</li>
            <li>Format: DD-MM-YYYY (e.g. 02-08-1975).</li>
            <li>Relevant dates by category:</li>
          </ul>
          <ul className="list-decimal pl-10">
            <li>Individual – Date of Birth</li>
            <li>Company – Date of Incorporation</li>
            <li>Trust – Date of Trust Deed</li>
            <li>Partnership/LLP – Date of Partnership Deed/Registration</li>
            <li>HUF – Date of Creation of HUF (use 01-01-0001 if not known)</li>
          </ul>
        </>
      ),
    },
    {
      icon: <ClipboardList size={20} />,
      title: "5. Gender",
      content: <p> Mandatory for Individuals only. Leave blank for non-individuals.</p>,
    },
    {
      icon: <ClipboardList size={20} />,
      title: "6. Photo Mismatch",
      content: (
        <>
          <ul className="list-disc pl-6">
            <li>Select this option if your issued PAN card has someone else’s photo.</li>
            <li>Attach the original PAN card with incorrect photo.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <ClipboardList size={20} />,
      title: "7. Signature Mismatch",
      content: (
        <>
          <ul className="list-disc pl-6">
            <li>Select this option if your issued PAN card has incorrect signature.</li>
            <li>Attach the original PAN card with incorrect signature.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <ClipboardList size={20} />,
      title: "8. Address for Communication",
      content: (
        <>
          <ul className="list-disc pl-6">
            <li>Choose Residential or Office address.</li>
            <li>For Companies, Firms, Trusts, etc., Office Address is mandatory.</li>
            <li>If “Office” is selected, provide complete office name and address.</li>
            <li>
              Fill at least two address fields and mention Town/City/District, State, and PIN code
              (mandatory).
            </li>
            <li>
              For foreign addresses, select “Outside India,” then choose country and ZIP code.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <ClipboardList size={20} />,
      title: "9. Update Other Address",
      content: (
        <p>
          Tick this option if you want to update an additional address besides the communication
          address.
        </p>
      ),
    },
    {
      icon: <ClipboardList size={20} />,
      title: "10. Telephone Number and Email ID",
      content: (
        <>
          <p> Mention at least one valid contact detail — either mobile number or email ID.</p>
          <ul className="list-disc pl-6">
            <li>Include country and STD codes (e.g., +91 for India).</li>
          </ul>
          <p>Example:</p>
          <ul className="list-disc pl-6">
            <li>Landline (Delhi): +91 11 23555705</li>
            <li>Mobile (India): +91 9102511111</li>
          </ul>
          <p>
            NRI/Foreign applicants must use their country’s ISD and city code. PAN updates and
            notifications will be sent via SMS and email.
          </p>
        </>
      ),
    },
    {
      icon: <ClipboardList size={20} />,
      title: "11.Aadhaar Number",
      content: (
        <ul className="list-disc pl-6">
          <li>If Aadhaar is allotted, provide Aadhaar number and name as per Aadhaar.</li>
          <li>Attach a copy of the Aadhaar card or letter. </li>
          <li>
            If there’s any mismatch between PAN and Aadhaar details, provide supporting documents
            such as Proof of Identity, Address, and Date of Birth.
          </li>
        </ul>
      ),
    },
    {
      icon: <ClipboardList size={20} />,
      title: "12. Mention Other PANs (if allotted)",
      content: (
        <ul className="list-disc pl-6">
          <li> Mention all PANs that have been inadvertently allotted to you.</li>
          <li> Attach the corresponding PAN cards for cancellation. </li>
          <li> The PAN to be cancelled must not be the same as the one currently in use.</li>
        </ul>
      ),
    },
    {
      icon: <ClipboardList size={20} />,
      title: "13.Signature / Thumb Impression",
      content: (
        <>
          <ul className="list-disc pl-6">
            <li> Must be signed by:</li>
            <li>
              <ul className="list-decimal pl-6">
                <li>Applicant (Individual)</li>
                <li>Karta (for HUF)</li>
                <li>Director (for Company)</li>
                <li>Partner (for Firm/LLP)</li>
                <li>Trustee (for Trust)</li>
                <li>Authorized Signatory (for AOP, BOI, Local Authority, etc.)</li>
                <li>Representative Assessee (for Minor/Deceased/Persons of Unsound Mind)</li>
              </ul>
            </li>
            <li>
              Thumb impression must be attested by a Magistrate, Notary Public, or Gazetted Officer.
            </li>
            <li> Provide Verifier’s Name, Capacity, and Place in the form.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <ClipboardList size={20} />,
      title: "Documents to be Submitted",
      content: (
        <>
          <p>Documents to be Submitted</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Proof of Identity & Address</strong>{" "}
              <ul className="list-disc pl-6">
                <li>Documents must match the full name mentioned in the application.</li>
                <li>For minors, documents of parent or guardian are accepted.</li>
                <li>Proof of spouse/parent/sibling as address is not accepted.</li>
                <li>
                  Proof of address must correspond to the address mentioned in Item No. 8 (and Item
                  No. 9, if applicable).
                </li>
              </ul>
            </li>
            <li>
              <strong>Proof of PAN</strong>
              <ul className="list-disc pl-6">
                <li>Submit one of the following:</li>
              </ul>
              <ul className="list-decimal pl-10">
                <li>Copy of existing PAN card, or</li>
                <li>Copy of PAN allotment letter.</li>
              </ul>
              <ul className="list-disc pl-6">
                <li>If unavailable, attach FIR for lost PAN card.</li>
                <li>If PAN proof is missing, processing will be done on a best-effort basis.</li>
              </ul>
            </li>
            <li>
              <strong>Proof for Change/Correction</strong> – Provide documentary evidence supporting
              the correction requested.
              <p>Examples:</p>
              <ul className="list-disc pl-6">
                <li>Name correction (minor): Any ID with correct spelling.</li>
                <li>
                  Name change (major):
                  <ul className="list-disc pl-6">
                    <li>
                      For Married Women: Marriage certificate, Gazette publication, Passport with
                      husband’s name, etc.
                    </li>
                    <li>
                      For Individuals (others): Gazette publication or certificate from Gazetted
                      Officer.
                    </li>
                    <li>
                      For Companies: Registrar of Companies (ROC) certificate for name change.
                    </li>
                    <li>For Firms: Revised Partnership Deed.</li>
                    <li>For Trusts/AOPs: Revised Deed or Registration Certificate.</li>
                    <li>
                      Date of Birth/ Incorporation correction: Document from competent authority
                      with correct date.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
          <p>
            The address for communication will always be updated in the database based on the latest
            application, even
          </p>
        </>
      ),
    },
    {
      icon: <ClipboardList size={20} />,
      title: "Submission Support",
      content: <p>Contact support@savedost.in for current submission instructions.</p>,
    },
  ];

  return (
    <PanGuidelines
      sub="Follow these field-by-field instructions to complete a PAN correction request accurately."
      title="Instructions for Filling PAN Change or Correction Application"
      sections={sections}
    />
  );
}
