import { FileText, BookOpen, ClipboardList, Info } from "lucide-react";
import PanGuidelines from "../../../../components/PanGuidelines";

export default function Page() {
  const sections = [
    {
      icon: <FileText size={20} />,
      title: "1. Online Application",
      content: (
        <>
          <ul className="list-disc pl-6">
            <li>
              Applicant fills the PAN Change Request Form online. This form is applicable for both
              citizens and non-citizens of India.
            </li>
            <li>
              Start by selecting PAN Change Request, along with citizenship, category, and title.
              Enter the required details and submit.
            </li>
            <li>
              A token number is generated for reference, displayed on screen and sent to the
              applicant’s email. This token allows saving and reviewing the application before final
              submission.
            </li>
            <li>Applicants can choose one of the four options while filling the application.</li>
            <li>
              If the form fails format-level validation, error messages will appear. Correct errors
              and resubmit.
            </li>
            <li>
              If there are no errors, a confirmation screen will appear. Applicant can either edit
              or confirm the details.
            </li>
            <li>
              For changes or correction in PAN data, fill all mandatory fields (*) and tick the
              checkbox for the relevant field(s) needing correction.
            </li>
            <li>
              For re-issuance of PAN without changes, fill all fields but do not select any
              checkbox.
            </li>
            <li>
              Address for communication will always be updated in the official database using the
              address provided in the application.
            </li>
            <li>
              For PAN cancellation, fill all mandatory fields, mention the PAN to be cancelled, and
              select the relevant checkbox. The PAN to be cancelled must not be the same as the
              currently used PAN.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <BookOpen size={20} />,
      title: "2. Payment",
      content: (
        <>
          <ul className="list-disc pl-6">
            <li>
              Applicant indicates whether a physical PAN card is required. If yes, the card will be
              printed and sent to the communication address. An e-PAN will also be sent to the email
              provided, if any.
            </li>
            <li>
              Payment can be made via credit card, debit card, net banking, or demand draft,
              depending on applicant type and address location.
            </li>
            <li>
              For paperless application modes (e-KYC, e-Sign, DSC), payment is accepted via
              credit/debit card or net banking only.
            </li>
            <li>Authorized persons for making payment:</li>
            <ul className="list-disc ml-6">
              <li>Individuals – self or immediate family members</li>
              <li>HUF – Karta</li>
              <li>Companies – Any director</li>
              <li>Firms/LLPs – Any partner</li>
              <li>Other registered entities – Authorized signatory</li>
            </ul>
            <li>
              On successful payment, an acknowledgment will be displayed. Save and print this
              acknowledgment for submission.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <Info size={20} />,
      title: "3. Acknowledgment",
      content: (
        <>
          <ul className="list-disc pl-6">
            <li>
              Upon confirmation and payment, an acknowledgment screen with a downloadable receipt
              will appear. A copy will also be sent to the applicant’s email.
            </li>
            <li>
              Individuals must affix two recent color photographs (3.5 cm × 2.5 cm) in the space
              provided. Photos must not be stapled or clipped.
            </li>
            <li>
              The signature or left thumb impression should be placed across the photo on the left
              side of the acknowledgment.
            </li>
            <li>Signature/thumb impression should remain within the box provided.</li>
            <li>
              For non-individual applicants, the acknowledgment must be signed by the authorized
              signatory. Seal/stamp is not required.
            </li>
            <li>
              Thumb impressions must be attested by a Magistrate, Notary Public, or Gazetted Officer
              with an official seal and stamp.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <ClipboardList size={20} />,
      title: "4. Submission of Documents",
      content: (
        <>
          <ul className="list-disc pl-6">
            <li>Contact support@savedost.com for current document-submission instructions.</li>
            <li>
              For paperless applications (e-KYC, e-Sign, DSC), no physical documents are required.
            </li>
            <li>
              If Aadhaar is provided, attach a copy of Aadhaar allotment letter. For minors, Aadhaar
              of minor must be mentioned. Aadhaar will be authenticated against application details.
            </li>
            <li>
              Superscribe the envelope with: <br />
              “APPLICATION FOR PAN – N-[15 digit Acknowledgment Number]”
            </li>
            <li>Documents should reach within 15 days of online application.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <FileText size={20} />,
      title: "5. Contact Information",
      content: (
        <>
          <ul className="list-disc pl-6">
            <li>Email: support@savedost.com</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <PanGuidelines
      title="Steps for Online PAN Change Request Application"
      sub="Review the complete submission, payment and document process before requesting a correction or amendment."
      sections={sections}
    />
  );
}

