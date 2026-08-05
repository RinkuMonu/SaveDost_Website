"use client";

import Guide from "../../../../components/Pancard/Guide";

export default function Guidelines() {
  const guidelinesData = [
    {
      title: "Online PAN Applications Steps",
      desc: `SaveDost, powered by Finunique Small Private Limited, provides a secure digital PAN card application service for Indian citizens, and it is also available to foreign nationals of Indian origin. Applicants must begin by selecting Form 49A, choosing the correct category, and entering basic personal details. After submission, a unique token number is generated and sent to the registered email address, allowing the form to be saved and edited before final submission. The system verifies all information entered, and any errors can be corrected. Once validation is complete, a confirmation page displays the details for final review.`,
    },
    {
      title: "Acknowledgement and Verifications",
      desc: `Once the application is submitted, an acknowledgment receipt is generated and sent to the registered email address. Applicants must download, print, and sign the acknowledgment following the given instructions. The signature or left-hand thumb impression should partially overlap the photograph. In the case of non-individual applicants such as companies, firms, or trusts, the acknowledgment must be signed by the authorized signatory, including a director, partner, trustee, or karta. If a thumb impression is used, it must be duly attested by a notary, magistrate, or gazetted officer along with an official seal and stamp`,
    },
    {
      title: "Submission of Documents",
      desc: `For offline submissions, applicants must send the signed acknowledgement along with required documents such as proof of identity, address proof, and date of birth to our office. For paperless online PAN services, including e-KYC, e-Sign, and DSC-based applications, submission of physical documents is not required. Mentioning the Aadhaar number in Form 49A is compulsory, and a copy of the Aadhaar allotment letter must be enclosed where applicable. All documents should be submitted within 15 days. Applicants can track their application status and download the e-PAN once it is approved.`,
    },
    {
      title: "Contact Us",
      desc: `For dependable online PAN service support, email support@savedost.in.`,
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-[#ebf7fa] to-[#fffaf0] ">
        <h1 className="text-3xl md:text-3xl font-bold text-[#176B87] mb-4 text-center tracking-tight mx-auto pt-10">
          Application Form PAN (Form 49A) - Document Guidelines.
        </h1>
        {/* <p className='text-center text-gray-800 pb-6'>
            Individuals and Hindu Undivided Families (HUF).

          </p> */}
        <Guide guidelines={guidelinesData} />
      </section>
    </>
  );
}
