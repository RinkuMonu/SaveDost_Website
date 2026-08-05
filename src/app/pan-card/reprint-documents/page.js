"use client";
import React from "react";
import { FileText, BookOpen, ClipboardList } from "lucide-react";

const guidelinepoints = [
  {
    icon: <FileText size={22} className="text-[#0077b6]" />,
    question: "For Individuals & HUF",
    answer: (
      <>
        <table className="w-full border border-gray-300 mt-3 text-sm rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-[#eaf4f5] text-[#0C3D4C]">
            <tr>
              <th className="p-3 text-left border-b border-gray-200 w-1/3 font-semibold">Type</th>
              <th className="p-3 text-left border-b border-gray-200 font-semibold">
                Acceptable Documents
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Proof of Identity */}
            <tr className="odd:bg-[#f9fafb] hover:bg-[#eef9fb] transition-colors align-top">
              <td className="p-3 border-b border-gray-100 font-medium text-[#0C3D4C]">
                Proof of Identity
              </td>
              <td className="p-3 border-b border-gray-100">
                <ul className="list-disc list-inside space-y-1">
                  {[
                    "Aadhaar Card",
                    "Voter ID",
                    "Driving License",
                    "Passport",
                    "Ration card with photo",
                    "Arms license",
                    "Central/State Government or PSU ID card (Transgender: certificate from District Magistrate)",
                    "Pensioner card",
                    "CGHS / Ex-servicemen card",
                    "Certificate signed by MP/MLA/Municipal Councillor/Gazetted Officer",
                    "Bank certificate on branch letterhead with attested photo and account number",
                  ].map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>
              </td>
            </tr>

            {/* Proof of Address */}
            <tr className="odd:bg-[#f9fafb] hover:bg-[#eef9fb] transition-colors align-top">
              <td className="p-3 border-b border-gray-100 font-medium text-[#0C3D4C]">
                Proof of Address
              </td>
              <td className="p-3 border-b border-gray-100">
                <ul className="list-disc list-inside space-y-1">
                  {[
                    "Aadhaar Card",
                    "Voter ID",
                    "Driving License",
                    "Passport (or spouse’s passport)",
                    "Post Office passbook",
                    "Property tax assessment order",
                    "Domicile certificate",
                    "Government allotment letter (≤3 years old)",
                    "Property registration document",
                    "Pension payment order",
                    "Utility bills (≤3 months old) such as Electricity, Landline, Water, Gas",
                    "Bank / Depository / Credit card statements",
                    "Certificate signed by MP/MLA/Municipal Councillor/Gazetted Officer",
                    "Employer certificate in original",
                  ].map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>
              </td>
            </tr>

            {/* Proof of Date of Birth */}
            <tr className="odd:bg-[#f9fafb] hover:bg-[#eef9fb] transition-colors align-top">
              <td className="p-3 border-b border-gray-100 font-medium text-[#0C3D4C]">
                Proof of Date of Birth
              </td>
              <td className="p-3 border-b border-gray-100">
                <ul className="list-disc list-inside space-y-1">
                  {[
                    "Aadhaar Card",
                    "Voter ID",
                    "Driving License",
                    "Passport",
                    "Matriculation certificate/Marksheet",
                    "Birth certificate",
                    "Photo ID card issued by Government/PSU (Transgender: certificate from District Magistrate)",
                    "Domicile certificate",
                    "CGHS / Ex-servicemen card",
                    "Pension payment order",
                    "Marriage certificate",
                    "Affidavit sworn before magistrate stating DOB",
                  ].map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Notes */}
        <h4 className="font-semibold mt-6 text-[#0C3D4C] border-l-4 border-[#0077b6] pl-3">
          Notes:
        </h4>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>For minors, parents’/guardians’ documents may be used as a proof.</li>
          <li>
            For HUF, Karta’s affidavit with names, father’s names, and addresses of coparceners plus
            any of the above documents in Karta’s name is required.
          </li>
          <li>Proof of Address must match item no.7.</li>
          <li>
            Indian citizens abroad: Bank statement (local or NRE account, ≤3 months old) may serve
            as proof of address.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: <BookOpen size={22} className="text-[#00b4d8]" />,
    question:
      "For Other Categories (Firm, BOI, AOP, Trust, Local Authority, Company, LLP, Artificial Juridical Person)",
    answer: (
      <>
        <table className="w-full border border-gray-300 mt-3 text-sm rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-[#eaf4f5] text-[#0C3D4C]">
            <tr>
              <th className="p-3 text-left border-b border-gray-200 w-1/3 font-semibold">Type</th>
              <th className="p-3 text-left border-b border-gray-200 font-semibold">
                Acceptable Documents
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Proof of Identity */}
            <tr className="odd:bg-[#f9fafb] hover:bg-[#eef9fb] transition-colors align-top">
              <td className="p-3 border-b border-gray-100 font-medium text-[#0C3D4C]">
                Proof of Identity
              </td>
              <td className="p-3 border-b border-gray-100 space-y-2">
                <p>
                  <strong>No attestation required:</strong> Passport / PIO / OCI card / Bank
                  statement (country of residence) / NRE account statement / Certificate of
                  residence in India or Residential permit / Visa & appointment letter from Indian
                  company with employer certificate (original)
                </p>
                <p>
                  <strong>Attestation required:</strong> National ID / Taxpayer ID attested by
                  Apostille (for Hague Convention countries) or Indian Embassy / High Commission /
                  Consulate or authorized bank officials overseas
                </p>
              </td>
            </tr>

            {/* Proof of Address */}
            <tr className="odd:bg-[#f9fafb] hover:bg-[#eef9fb] transition-colors align-top">
              <td className="p-3 border-b border-gray-100 font-medium text-[#0C3D4C]">
                Proof of Address
              </td>
              <td className="p-3 border-b border-gray-100">
                Same as above; must match PAN application form.
              </td>
            </tr>

            {/* Additional (Office Address in India) */}
            <tr className="odd:bg-[#f9fafb] hover:bg-[#eef9fb] transition-colors align-top">
              <td className="p-3 border-b border-gray-100 font-medium text-[#0C3D4C]">
                Additional (Office Address in India for Foreign Citizens)
              </td>
              <td className="p-3 border-b border-gray-100">
                <ul className="list-disc list-inside space-y-1">
                  {[
                    "Appointment letter / contract from Indian company",
                    "Certificate (original) of Indian address issued by employer with employer PAN",
                    "pancard of employer mentioned in certificate",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <h4 className="font-semibold mt-6 text-[#0C3D4C] border-l-4 border-[#00b4d8] pl-3">
          2a. Applicants with Office in India
        </h4>
        <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead className="bg-gradient-to-r from-[#00b4d8] to-[#90e0ef] text-white">
            <tr>
              <th className="p-4 text-base font-semibold border-b border-white/50">Example Name</th>
              <th className="p-4 text-base font-semibold border-b border-white/50">
                How to Fill in the Form
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-[#e0f7fa] transition-colors duration-300">
              <td className="p-4 font-medium text-gray-800">Ravikant</td>
              <td className="p-4 text-gray-700">Last Name: RAVIKANT</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-[#e0f7fa] transition-colors duration-300">
              <td className="p-4 font-medium text-gray-800">Suresh Sarda</td>
              <td className="p-4 text-gray-700">Last Name: SARDA, First Name: SURESH</td>
            </tr>
            <tr className="hover:bg-[#e0f7fa] transition-colors duration-300">
              <td className="p-4 font-medium text-gray-800">Poonam Ravi Narayan</td>
              <td className="p-4 text-gray-700">
                Last Name: NARAYAN, First Name: POONAM, Middle Name: RAVI
              </td>
            </tr>
            <tr className="bg-gray-50 hover:bg-[#e0f7fa] transition-colors duration-300">
              <td className="p-4 font-medium text-gray-800">Satyam Venkat M.K. Rao</td>
              <td className="p-4 text-gray-700">
                Last Name: RAO, First Name: SATYAM, Middle Name: VENKAT M K
              </td>
            </tr>
            <tr className="hover:bg-[#e0f7fa] transition-colors duration-300">
              <td className="p-4 font-medium text-gray-800">
                M.S. Kandaswamy (Madurai Somasundram Kandaswamy)
              </td>
              <td className="p-4 text-gray-700">
                Last Name: KANDASWAMY, First Name: MADURAI, Middle Name: SOMASUNDRAM
              </td>
            </tr>
          </tbody>
        </table>

        <h4 className="font-semibold mt-6 text-[#0C3D4C] border-l-4 border-[#00b4d8] pl-3">
          2b. Applicants without Office in India
        </h4>
        <p>
          Certificate of registration from the country of residence, attested by Apostille (Hague
          Convention countries) or Indian Embassy / High Commission / Consulate, or authorized bank
          officials, as per ITD guidelines.
        </p>
      </>
    ),
  },
  {
    icon: <ClipboardList size={22} className="text-[#9b5de5]" />,
    question: "Supporting Documents for PAN Data Changes",
    answer: (
      <>
        <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-[#f6f3ff] text-left">
            <tr>
              <th className="p-2">Applicant Type</th>
              <th className="p-2">Documents Accepted</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Married women – name change due to marriage",
                "Marriage certificate, marriage invitation, passport showing husband’s name, gazette notification, or certificate from Gazetted officer",
              ],
              ["Other Individuals", "Gazette notification or certificate from Gazetted officer"],
              ["Transgender", "Certificate from District Magistrate"],
              ["Companies", "ROC certificate for name change"],
              ["Firms / LLP", "Revised partnership deed or registrar certificate"],
              [
                "AOP / Trust / BOI / AJP / Local Authority",
                "Revised deed / agreement or revised registration certificate",
              ],
            ].map(([type, doc], i) => (
              <tr key={i} className="odd:bg-[#f9fafb] hover:bg-[#f3f0ff] transition-colors">
                <td className="p-2 border-b border-gray-100">{type}</td>
                <td className="p-2 border-b border-gray-100">{doc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ),
  },
];

export default function Reprintdocuments({ guidelinepoints: propsPoints }) {
  const points = propsPoints || guidelinepoints;
  return (
    <section className="pb-16 bg-gradient-to-b from-white to-[#f9fbfc]">
      <div className="max-w-7xl mx-auto px-6 pt-10 relative">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#0C3D4C] sm:mb-12 sm:text-4xl">
          Proof of Identity, Address, and Date of Birth for PAN Application
        </h1>

        <div className="space-y-10 relative">
          <div className=" hidden md:block absolute -left-4 top-0 w-[2px] h-full bg-[#0c3d4c]"></div>

          {points.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start gap-5 pl-10 border border-gray-100 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="hidden md:block absolute -left-[22px] top-7 w-3 h-3 bg-[#0077b6] rounded-full shadow-md"></div>

              <div className="p-3 rounded-xl bg-[#f1f9fa] flex items-center justify-center shrink-0">
                {item.icon}
              </div>

              <div className="overflow-x-auto w-full">
                <h3 className="text-xl font-semibold text-[#0C3D4C] mb-4">{item.question}</h3>
                <div className="text-gray-700 leading-relaxed space-y-4">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
