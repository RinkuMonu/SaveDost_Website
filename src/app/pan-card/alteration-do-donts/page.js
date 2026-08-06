import { FileText, BookOpen, ClipboardList, Info } from "lucide-react";
import PanGuidelines from "../../../../components/PanGuidelines";

export default function Page() {
  const sections = [
    {
      icon: <Info size={20} />,
      title: "Do’s",
      content: (
        <ul className="list-decimal pl-6">
          <li>
            Use the form “Request for New PAN Card or/and Changes or Correction in PAN Data” for PAN
            reprint or for making any corrections in PAN details.
          </li>
          <li>Fill the application form in block letters using black ink only.</li>
          <li>
            Affix two recent colour passport-size photographs (3.5 cm x 2.5 cm) in the space
            provided.
          </li>
          <li>
            Ensure that your signature or thumb impression is strictly within the box provided.
          </li>
          <li>Always mention your correct existing PAN number.</li>
          <li>
            If a thumb impression is used, it must be attested by a Magistrate, Notary Public, or
            Gazetted Officer, along with their official seal and stamp.
          </li>
          <li>
            Attach valid Proof of Identity (POI), Proof of Address (POA), and Proof of Date of Birth
            (PODB) (for Individuals & HUFs) as per Income Tax Rules, 1962.
          </li>
          <li>
            Ensure that the name on your application matches exactly with your name on POI and POA
            documents. The POA must contain the same address as mentioned in the form.
          </li>
          <li>
            Clearly tick the box against the field(s) where a change or correction is required.
          </li>
          <li>Attach supporting documents for each requested correction.</li>
          <li>Write your complete postal address, including landmarks and correct PIN code.</li>
          <li>
            Mention your active mobile number and email ID for communication and e-PAN delivery.
          </li>
          <li>Attach a copy of your existing PAN card or PAN allotment letter, if available.</li>
        </ul>
      ),
    },
    {
      icon: <Info size={20} />,
      title: "Don’ts",
      content: (
        <ul className="list-decimal pl-6">
          <li>Do not overwrite or make corrections on the form.</li>
          <li>Do not pin or staple the photograph to the application.</li>
          <li>
            Do not sign across the photograph — your signature must remain within the box only.
          </li>
          <li>Do not provide POI or POA documents that are not in the applicant’s name.</li>
          <li>Do not add extra details (like date, designation, or rank) in the signature box.</li>
          <li>Do not write your husband’s name in the Father’s Name column.</li>
          <li>Do not use initials or abbreviated names — always write your full name.</li>
          <li>
            Do not apply for a new PAN if you already possess one. Duplicate PANs are not permitted.
          </li>
        </ul>
      ),
    },
    {
      icon: <Info size={20} />,
      title: "Need Assistance?",
      content: (
        <p>
          For guidance or help with your PAN reprint or correction application:
          <br />
          Email: support@savedost.com
          <br />
          Track your application:{" "}
          <a href="https://www.7unique.in/pan-status" className="text-blue-600 underline">
            www.7unique.in/pan-status
          </a>{" "}
          (custom link can be configured)
        </p>
      ),
    },
  ];

  return (
    <PanGuidelines
      sub="Use this checklist to avoid the most common errors in PAN reprint and correction requests."
      title="Important Information for Applicants Requesting PAN Reprint or Data Correction"
      sections={sections}
    />
  );
}

