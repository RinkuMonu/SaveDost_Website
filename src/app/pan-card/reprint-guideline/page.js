"use client";
import React from "react";
import Link from "next/link";
import Reprintguide from "../../../../components/Reprint/Reprintguidelines";
import { Zap, Lightbulb, PenTool } from "lucide-react";

export default function Reprintguideline() {
  const guidelinepoints = [
    {
      icon: <Zap size={22} className="text-[#0077b6]" />,
      question: "Steps for Online Application",
      answer: (
        <>
          Applicant will fill the PAN Change Request Form online and submit the form. Applicant will
          initially select a PAN Change Request along with citizenship, category, and title of the
          applicant, then enter the required details and submit the form. A token number will be
          generated and displayed to the applicant before filling the form. This token number will
          also be sent to the registered e-mail ID for reference purposes.
          <br />
          There is a facility to save details entered in the application form, allowing the
          applicant to view and edit before final submission using the temporary token number.
          Applicant can select any one of the four options while filling the online PAN Change
          Request application.
          <br />
          If the submitted data fails in any format-level validation, an error message will be
          displayed on the screen. The applicant shall rectify the error(s) and re-submit the form.
          If there are no format-level errors, a confirmation screen with all data filled by the
          applicant will be displayed. The applicant may either edit or confirm the same.
          <br />
          For Changes or Correction in PAN Data
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>
              Fill all mandatory fields (marked with *) of the form and select the corresponding box
              on the left margin of the appropriate field where correction is required.
            </li>
          </ul>
          For Re-issuance of pancard Without Any Changes
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Fill all fields in the form but do not select any box on the left margin.</li>
          </ul>
          <br />
          In both cases, the address for communication will be updated in the Income Tax Department
          database using the address provided in the application. For Cancellation of PAN
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>
              Fill all mandatory fields in the form, enter the PAN to be cancelled in Item No.10 of
              the form and select the checkbox on the left margin.
            </li>
            <li>
              The PAN to be cancelled should not be the same as the PAN currently used and mentioned
              at the top of the form.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <Lightbulb size={22} className="text-[#00b4d8]" />,
      question: "Acknowledgment",
      answer: (
        <>
          After confirmation, an acknowledgment screen with a downloadable acknowledgment receipt
          will be displayed. An e-mail containing this acknowledgment receipt (in PDF format) will
          also be sent to the applicant’s e-mail ID mentioned in the application.
          <br />
          Applicants must save and print this acknowledgment
          <br />
          For Individual Applicants
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>
              Affix two recent colour photographs (3.5 cm x 2.5 cm) in the space provided in the
              acknowledgment.
            </li>
            <li>The photographs should not be stapled or clipped.</li>
            <li>
              Signature or left-hand thumb impression should be provided across the photo affixed on
              the left side of the acknowledgment in such a manner that a portion of the
              signature/impression is on the photo as well as on the acknowledgment receipt.
            </li>
            <li>The signature/left thumb impression should not be on the right-side photograph.</li>
            <li>Signature or thumb impression should only be within the box provided.</li>
            <li>
              If there is any mark or impression that affects the visibility of the photo, the
              application may not be processed.
            </li>
          </ul>
          For Non-Individual Applicants
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>
              The acknowledgment receipt shall be signed by the authorized signatory
              <ul className="list-decimal list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
                <li>Karta (in case of HUF)</li>
                <li>Director (in case of Company)</li>
                <li>Partner (in case of Partnership Firm / LLP)</li>
                <li>Trustee (in case of Trust)</li>
                <li>Authorized signatory (in other cases)</li>
              </ul>
            </li>
          </ul>
          Seal or stamp is not required on the PAN application form. If a thumb impression is used,
          it must be attested by a Magistrate, Notary Public, or Gazetted Officer under official
          seal and stamp.
        </>
      ),
    },
    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "Mode of Submission of Documents",
      answer: (
        <>
          The acknowledgement, duly signed and affixed with photographs (in case of individuals),
          along with proof of existing PAN, proof of identity, proof of address, proof of date of
          birth (for individuals and Karta of HUF), and proof for requested changes (if any), must
          be sent to:
          <br />
          Income Tax PAN Services Unit
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Finunique Small Private Limited</li>
            <li>
              {" "}
              Website:{" "}
              <Link
                href="https://savedost.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.savedost.com
              </Link>
            </li>
          </ul>
          <br />
          For e-KYC & e-Sign, e-Sign based, or DSC-based online PAN applications, there is no need
          to send physical documents, as these are processed through a paperless mode. If Aadhaar is
          mentioned in the application, a copy of the Aadhaar allotment letter should also be
          enclosed along with the acknowledgement and supporting documents.
          <br />
          Superscribe the envelope with: ‘APPLICATION FOR PAN – N-[15 digit Acknowledgement Number]’
          (e.g., APPLICATION FOR PAN – N-881010200000097). Your acknowledgement and proofs should
          reach Finunique Small Private Limited within 15 days from the date of online application.
          Applications shall be processed upon receipt of relevant documents (acknowledgment and
          proofs).
        </>
      ),
    },
    {
      icon: <Zap size={22} className="text-[#0077b6]" />,
      question: "Contact Information",
      answer: (
        <>
          <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
            <li>Finunique Small Private Limited</li>
            <li>
              Website:
              <Link
                href="https://savedost.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.savedost.com
              </Link>
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
          <h1 className="text-3xl font-bold text-center text-[#0C3D4C] mb-12">
            PAN CHANGE REQUEST FORM — ONLINE APPLICATION GUIDELINES
          </h1>
          <Reprintguide points={guidelinepoints} />
        </div>
      </main>
    </>
  );
}

