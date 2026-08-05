import { FileText, BookOpen, ClipboardList, Info } from "lucide-react";
import PanGuidelines from "../../../../components/PanGuidelines";

export default function Page() {
  const sections = [
    {
      icon: <FileText size={20} />,
      title: "I. For Individuals and Hindu Undivided Families (HUF)",
      content: (
        <>
          <p className="py-2">
            <strong>A. Proof of Identity (POI)</strong>
          </p>
          <p>
            Submit any one of the following documents, showing the applicant’s full name as
            mentioned in the application form:
          </p>
          <ul className="list-decimal pl-6">
            <li>Aadhaar Card issued by UIDAI</li>
            <li>Voter ID (Elector’s Photo Identity Card)</li>
            <li>Driving License</li>
            <li>Passport</li>
            <li>Ration Card with applicant’s photograph</li>
            <li>Arms License</li>
            <li>
              Photo ID Card issued by:
              <ul className="list-disc pl-6">
                <li>Central/State Government, or</li>
                <li>
                  Public Sector Undertaking
                  <br />
                  (In case of Transgender applicants, Transgender Certificate issued by the District
                  Magistrate)
                </li>
              </ul>
            </li>
            <li>Pensioner Card with applicant’s photo</li>
            <li>CGHS or ECHS Photo Card</li>
            <li>
              Certificate of Identity signed by:
              <ul className="list-disc pl-6">
                <li>Member of Parliament (MP)</li>
                <li>Member of Legislative Assembly (MLA)</li>
                <li>Municipal Councillor, or</li>
                <li>Gazetted Officer</li>
              </ul>
            </li>
            <li>
              Bank Certificate (in original) on letterhead, with:
              <ul className="list-disc pl-6">
                <li>Duly attested photograph,</li>
                <li>Bank account number, and</li>
                <li>Name & stamp of the issuing officer</li>
              </ul>
            </li>
          </ul>

          <p className="py-2">
            <strong>B. Proof of Address (POA)</strong>
          </p>
          <p>Submit any one document showing the address mentioned in your application:</p>
          <ul className="list-decimal pl-6">
            <li>Aadhaar Card issued by UIDAI</li>
            <li>Voter ID</li>
            <li>Driving License</li>
            <li>Passport</li>
            <li>Spouse’s Passport</li>
            <li>Post Office Passbook showing applicant’s address</li>
            <li>Latest Property Tax Assessment Order</li>
            <li>Domicile Certificate issued by the Government</li>
            <li>Allotment Letter of Government Accommodation (not older than 3 years)</li>
            <li>Property Registration Document</li>
            <li>Pension Payment Order</li>
          </ul>
          <p className="py-2">Or any of the following (not older than 3 months):</p>
          <ul className="list-disc pl-6">
            <li>Electricity Bill</li>
            <li>Landline Telephone or Broadband Bill</li>
            <li>Water Bill</li>
            <li>Gas Connection Card/Book or Piped Gas Bill</li>
            <li>Bank Account Statement</li>
            <li>Depository Account Statement</li>
            <li>Credit Card Statement</li>
          </ul>
          <p className="py-2">Additional acceptable proofs:</p>
          <ul className="list-disc pl-6">
            <li>Certificate of Address signed by MP/MLA/Municipal Councillor/Gazetted Officer</li>
            <li>Employer Certificate (original, on letterhead)</li>
          </ul>

          <p className="py-2">
            <strong>C. Proof of Date of Birth (PODB)</strong>
          </p>
          <p>Submit any one document showing your name and full date of birth (DD-MM-YYYY):</p>
          <ul className="list-decimal pl-6">
            <li>Aadhaar Card issued by UIDAI</li>
            <li>Voter ID</li>
            <li>Driving License</li>
            <li>Passport</li>
            <li>Matriculation Certificate or Mark Sheet</li>
            <li>
              Birth Certificate issued by:
              <ul className="list-disc pl-6">
                <li>Registrar of Births and Deaths, or</li>
                <li>Authorized Indian Consulate (for foreign-born citizens)</li>
              </ul>
            </li>
            <li>
              Photo ID issued by Central/State Government or PSU
              <br />
              (In case of Transgender applicants, Transgender Certificate issued by the District
              Magistrate)
            </li>
            <li>Domicile Certificate issued by the Government</li>
            <li>CGHS or ECHS Photo Card</li>
            <li>Pension Payment Order</li>
            <li>Marriage Certificate (issued by Registrar of Marriages)</li>
            <li>Affidavit before a Magistrate declaring date of birth</li>
          </ul>

          <p className="py-2">
            <strong>Special Notes:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>
              For Minors: Any of the above documents in the name of the parent or guardian will be
              accepted as POI and POA.
            </li>
            <li>
              For HUFs:
              <ul className="list-disc pl-6">
                <li>
                  An affidavit by the Karta declaring the name, father’s name, and address of all
                  coparceners as of the application date.
                </li>
                <li>Copy of any valid POI/POA/PODB document in the Karta’s name.</li>
              </ul>
            </li>
            <li>
              Proof of Address: Must correspond to the residential address provided in the form.
            </li>
            <li>
              For Indian citizens residing abroad:
              <ul className="list-disc pl-6">
                <li>Copy of bank account statement in the country of residence, or</li>
                <li>Copy of NRE bank account statement in India (not older than 3 months).</li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <FileText size={20} />,
      title: "II. For Other Applicants (Entities Other than Individuals & HUF)",
      content: (
        <>
          <p className="py-2">
            <strong>
              (Firms, Companies, Trusts, LLPs, AOPs, BOIs, Local Authorities, and Artificial
              Juridical Persons)
            </strong>
          </p>
          <p className="py-2">
            <strong>A. Proof of Identity</strong>
          </p>
          <p className="py-2">
            <strong>Applicants Having Office in India</strong>
          </p>
          <p className="py-2">
            <strong>Applicants Having Office in India</strong>
          </p>
          <table className="w-full border border-gray-300 mt-3 text-sm rounded-lg overflow-hidden shadow-sm my-5">
            <thead className="bg-[#eaf4f5] text-[#0C3D4C]">
              <tr>
                <th className="p-3 text-left border-b border-gray-200 w-1/3 font-semibold">
                  Type of Applicant
                </th>
                <th className="p-3 text-left border-b border-gray-200 w-1/3 font-semibold">
                  Document to be Submitted
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-gray-100 space-y-2">Company</td>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Certificate of Registration issued by Registrar of Companies
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100 space-y-2">Partnership Firm</td>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Certificate of Registration from Registrar of Firms or copy of Partnership Deed
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Limited Liability Partnership (LLP)
                </td>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Certificate of Registration issued by Registrar of LLPs
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100 space-y-2">Trust (AOP - Trust)</td>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Copy of Trust Deed or Registration Certificate issued by Charity Commissioner
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  AOP, BOI, Local Authority, Artificial Juridical Person
                </td>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Copy of Agreement, or Registration Certificate issued by Charity Commissioner,
                  Registrar of Cooperative Society, or any Central/State Government authority
                  establishing identity and address
                </td>
              </tr>
            </tbody>
          </table>

          <p className="py-2">
            <strong>Applicants Having No Office in India</strong>
          </p>
          <p>
            {" "}
            Copy of Registration Certificate issued in the country of location, duly attested by any
            of the following:
          </p>
          <ul className="list-disc pl-6">
            <li>Apostille (for countries part of the Hague Convention, 1961)</li>
            <li>Indian Embassy/High Commission/Consulate in that country</li>
            <li>Authorized official of overseas branch of a Scheduled Bank registered in India</li>
          </ul>

          <p className="py-2">
            <strong>B. Proof of Address (for Entities)</strong>
          </p>
          <p>Must match the address in the PAN application form.</p>
          <p>Documents Accepted (No Attestation Required):</p>

          <ul className="list-disc pl-6">
            <li>Passport</li>
            <li>Person of Indian Origin (PIO) Card issued by Govt. of India</li>
            <li>Overseas Citizen of India (OCI) Card</li>
            <li>Bank Account Statement in the country of residence</li>
            <li>NRE Bank Account Statement in India</li>
            <li>Certificate of Residence or Residential Permit issued by State Police</li>
            <li>
              Visa Copy along with Appointment Letter or Employment Contract from Indian Company,
              and
            </li>
            <li>Certificate of Indian Address (original) issued by Employer</li>
          </ul>

          <p>If office address in India is mentioned:</p>
          <ul className="list-disc pl-6">
            <li>Appointment Letter or Contract from Indian Company</li>
            <li>
              Certificate of Address in India issued by Employer (original, on letterhead,
              mentioning Employer’s PAN)
            </li>
            <li>Copy of PAN Card of the Employer</li>
          </ul>
        </>
      ),
    },
    {
      icon: <FileText size={20} />,
      title: "III. Supporting Documents for Change Requests",
      content: (
        <>
          <p className="py-2">
            <strong>Supporting Documents for Change Requests</strong>
          </p>
          <table className="w-full border border-gray-300 mt-3 text-sm rounded-lg overflow-hidden shadow-sm my-5">
            <thead className="bg-[#eaf4f5] text-[#0C3D4C]">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Case / Applicant Type</th>
                <th className="border border-gray-300 px-4 py-2">
                  Acceptable Documents for Name/Father’s Name Change
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Married Women (Name Change after Marriage)
                </td>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Marriage Certificate, or Marriage Invitation Card, or Passport showing Husband’s
                  Name, or Gazette Notification, or Certificate from Gazetted Officer
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Other Individuals (Legal Name Change)
                </td>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Gazette Notification, or Certificate from Gazetted Officer
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Transgender Applicants (Name/Gender Change)
                </td>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Certificate issued by District Magistrate
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100 space-y-2">Companies</td>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Certificate of Name Change issued by Registrar of Companies
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100 space-y-2">Firms / LLPs</td>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Revised Partnership Deed or ROC Certificate for Name Change
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Trusts / AOP / BOI / Local Authorities
                </td>
                <td className="p-3 border-b border-gray-100 space-y-2">
                  Revised Trust Deed, Agreement, or Registration Certificate
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      icon: <ClipboardList size={20} />,
      title: "Submission & Support",
      content: <p>Contact support@savedost.in for current submission instructions.</p>,
    },
  ];

  return (
    <PanGuidelines
      sub="Prepare the applicable identity, address, date-of-birth and correction-supporting documents before submission."
      title="Documents Required for PAN Reprint / Change / Correction"
      sections={sections}
    />
  );
}
