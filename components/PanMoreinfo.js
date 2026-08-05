"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PanMoreinfo() {
  const [activeTab, setActiveTab] = useState("types");
  const tabs = [
    { id: "types", label: "Types of PAN Application" },
    { id: "apply", label: "How to Apply" },
    { id: "docs", label: "Supporting Documents" },
    { id: "comm", label: "Communications" },
    { id: "fee", label: "Processing Fee" },
    { id: "time", label: "Processing Time" },
  ];
  return (
    <>
      <section className="relative bg-white py-12 md:mb-15 px-6 md:px-16 overflow-hidden">
        {/* Decorative arcs */}
        <div className="absolute right-0 bottom-0 hidden md:block opacity-40">
          <svg width="220" height="220" viewBox="0 0 220 220">
            <path
              d="M220,110 A110,110 0 0,1 110,220 L110,180 A70,70 0 0,0 180,110 Z"
              fill="#FFB703"
            />
            <path d="M220,110 A110,110 0 0,0 110,0 L110,40 A70,70 0 0,1 180,110 Z" fill="#E85D04" />
            <path d="M110,220 A110,110 0 0,1 0,110 L40,110 A70,70 0 0,0 110,180 Z" fill="#94D2BD" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          More info on <span className="text-[#E60012]">PAN</span>
        </h1>

        {/* Tabs */}
        <div className="relative mb-10 border-b border-gray-200">
          <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium text-gray-600">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-3 transition-colors duration-200 ${
                  activeTab === tab.id ? "text-[#E60012] font-semibold" : "hover:text-[#E60012]"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E60012] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="text-gray-800 leading-relaxed max-w-5xl space-y-6">
          {activeTab === "types" && (
            <div>
              <h2 className="text-lg font-semibold mb-3">
                There are mainly two types of PAN applications, depending on whether you are
                applying for a new PAN or updating an existing one.
              </h2>
              <p className="mb-2">
                {" "}
                SaveDost offers an online PAN service platform that streamlines the entire process,
                making it faster, simpler, and completely digital.
              </p>
              <ol className="list-decimal list-inside space-y-10">
                <li className="">
                  <span className="font-bold mb-2">Application for Allotment of PAN:</span>
                  {/* <p className="my-2">
                                       This option is meant for individuals who have never been issued a PAN earlier. Before applying, applicants can verify on the official Income Tax Department website whether a PAN has already been allotted in their name.

                                    </p> */}
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      This option is meant for individuals who have never been issued a PAN earlier.
                      Before applying, applicants can verify on the official Income Tax Department
                      website whether a PAN has already been allotted in their name.
                    </li>
                    <li>
                      As per Income Tax Department guidelines effective from November 1, 2011, the
                      following forms are applicable:
                    </li>
                  </ul>
                  <p className="my-3">
                    {" "}
                    <b>Form 49A:</b> is used by Indian citizens, whether they are residing in India
                    or abroad.
                  </p>
                  <p className="my-3">
                    {" "}
                    <b>Form 49AA:</b> is applicable for foreign nationals who wish to apply for a
                    PAN.
                  </p>
                </li>

                <li>
                  <span className="font-bold mb-2">New PAN Card or PAN Detail Correction:</span>
                  <ul className="list-disc list-inside ml-8 space-y-1 mt-3">
                    <li style={{ listStylePosition: "outside" }}>
                      If you already hold a PAN and require a reprinted card or need to update
                      details such as name, date of birth, or address, this option should be
                      selected.
                    </li>
                    <li style={{ listStylePosition: "outside" }}>
                      A new PAN card will be issued carrying the same PAN number with the updated
                      information.
                    </li>
                    <li style={{ listStylePosition: "outside" }}>
                      Through India’s digital PAN card system, both Indian and foreign citizens can
                      conveniently apply for new PANs or request corrections online using SaveDost’s
                      quick and reliable PAN application services.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          )}

          {activeTab === "apply" && (
            <div>
              <h2 className="text-lg font-semibold mb-3">How to Apply for PAN</h2>
              <p className="mb-4">
                SaveDost offers two convenient ways to apply for a PAN card, allowing applicants to
                choose the method that best suits them:
              </p>

              <ol className="list-decimal list-inside space-y-6">
                {/* Online Mode */}
                <li>
                  <p className="font-semibold text-gray-900 mb-1">Online Application:</p>
                  <p className="text-gray-700">
                    Applicants can submit their PAN request digitally through SaveDost’s online PAN
                    platform. The entire process can be completed paperlessly using e-KYC, e-Sign,
                    or a Digital Signature Certificate (DSC). If preferred, applicants may also
                    upload the form online and later send physical documents for verification.
                  </p>
                </li>

                {/* Offline Mode */}
                <li>
                  <p className="font-semibold text-gray-900 mb-1">Offline Application:</p>
                  <p className="text-gray-700">
                    For those who prefer an offline process, the PAN application form can be
                    downloaded and printed. After filling in the details manually and attaching the
                    necessary supporting documents, the completed form can be submitted at any
                    SaveDost-authorized PAN service center. Before submitting the application,
                    applicants are advised to review all instructions and guidelines carefully to
                    ensure accurate details and smooth processing without delays.
                  </p>
                  {/* <p className="text-gray-700 mt-2">
                                        Please make sure to carefully read all{" "}
                                        <b>instructions and guidelines</b> before filling the form to avoid
                                        mistakes or delays in processing.
                                    </p> */}
                </li>
              </ol>
            </div>
          )}

          {activeTab === "docs" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Supporting Documents Required</h2>
              <ul className="list-disc ml-8 space-y-6">
                <li style={{ listStylePosition: "outside" }}>
                  Applicants must submit valid Proof of Identity (POI) and Proof of Address (POA)
                  documents in accordance with Rule 114 of the Income Tax Department.
                </li>
                <li style={{ listStylePosition: "outside" }}>
                  The name mentioned in the PAN application must exactly match the name appearing on
                  the submitted documents.
                </li>
                <li style={{ listStylePosition: "outside" }}>
                  A complete list of accepted documents is available on our PAN service portal under
                  the “Documents Required” section.
                </li>
              </ul>
            </div>
          )}

          {activeTab === "comm" && (
            <div>
              <h2 className="text-lg font-semibold mb-3">Communications</h2>
              <p className="mb-3 text-gray-700">
                After submission, SaveDost verifies and digitizes your PAN application details
                before securely transmitting them to the Income Tax Department (ITD).
              </p>

              <p className="mb-3 text-gray-700">
                For Form 49A (New PAN) applications, the ITD issues a fresh PAN number. SaveDost
                then arranges the printing and delivery of the physical PAN card, while the e-PAN is
                sent directly to your registered email address.
              </p>

              <p className="mb-3 text-gray-700">
                For correction or update requests, the revised information is forwarded to the ITD.
                Once approved, a new PAN card containing the updated details is printed and
                dispatched to the address provided in the application.
              </p>

              <p className="mb-3 text-gray-700">
                All official correspondence related to your PAN application will be sent to the
                communication address specified in your form.
              </p>

              <p className="mb-3 text-gray-700">
                Applicants who provide a valid email address will receive the e-PAN card promptly,
                along with the physical PAN card.
              </p>

              <p className="text-gray-700">
                To stay informed throughout the process and to ensure quick resolution of any
                issues, we highly recommend adding your mobile number during the application.
              </p>
            </div>
          )}

          {activeTab === "fee" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Processing Fee</h2>

              <p className="mb-3 text-gray-700">
                <span className="text-[#E60012] font-semibold">SaveDost</span> provides
                cost-effective and fully transparent pricing for all types of PAN card applications
                submitted through its online PAN service platform.
              </p>

              <p className="mb-3 text-gray-700">
                <b>Note:</b>eSign charges apply only when applicants opt for e-KYC or e-Sign based
                verification. All payments processed via the SaveDost PAN service portal are
                completed through secure and protected channels. This ensures fast confirmation,
                dependable transactions, and a seamless application experience for users.
              </p>

              <p className="mb-6 text-gray-700">
                All payments made through the{" "}
                <span className="text-[#E60012] font-semibold">SaveDost PAN service portal</span>{" "}
                are handled in a safe and secure manner, ensuring instant and reliable processing
                for a smooth experience.
              </p>

              {/* Section A */}
              <h3 className="text-md font-semibold text-gray-900 mb-3">
                A) When a Physical PAN card Is Necessary
              </h3>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200 text-sm">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="border px-4 py-2 text-left">Sr. No.</th>
                      <th className="border px-4 py-2 text-left">Application Type</th>
                      <th className="border px-4 py-2 text-left">Address Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    <tr>
                      <td className="border px-4 py-2">1</td>
                      <td className="border px-4 py-2">Application in India filed in PAN</td>
                      <td className="border px-4 py-2">Indian Address</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">2</td>
                      <td className="border px-4 py-2">PAN application made outside India</td>
                      <td className="border px-4 py-2">Foreign Address</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">3</td>
                      <td className="border px-4 py-2">
                        Physical document mode of online application
                      </td>
                      <td className="border px-4 py-2">Indian Address</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">4</td>
                      <td className="border px-4 py-2">
                        Application online through physical document mode
                      </td>
                      <td className="border px-4 py-2">Foreign Address</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">5</td>
                      <td className="border px-4 py-2">
                        Electronic knowledge of customer (e-KYC / e-Sign / DSC)
                      </td>
                      <td className="border px-4 py-2">Indian Address</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">6</td>
                      <td className="border px-4 py-2">
                        e-KYC / e-Sign / DSC paperless application
                      </td>
                      <td className="border px-4 py-2">Foreign Address</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">7</td>
                      <td className="border px-4 py-2">Order of Reprint pancard</td>
                      <td className="border px-4 py-2">Indian Address</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">8</td>
                      <td className="border px-4 py-2">Application to Reprint pancard</td>
                      <td className="border px-4 py-2">Foreign Address</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 italic mb-8">
                <b>Remark:</b> An eSign fee of ₹5.90 (inclusive of applicable taxes) is charged
                whenever the e-KYC and/or e-Sign service is selected.
              </p>

              {/* Section B */}
              <h3 className="text-md font-semibold text-gray-900 mb-3">
                B) Physical pancard Not Needed (e-PAN Only)
              </h3>
              <p className="mb-4 text-gray-700">
                Applicants who prefer a completely digital option can choose to receive only the
                e-PAN. The <b>e-PAN </b>will be issued electronically and delivered directly to the
                applicant’s registered email address.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-sm">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="border px-4 py-2 text-left">Sr. No.</th>
                      <th className="border px-4 py-2 text-left">Application Type</th>
                      <th className="border px-4 py-2 text-left">Delivery Mode</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    <tr>
                      <td className="border px-4 py-2">1</td>
                      <td className="border px-4 py-2">Application received at PAN Centre</td>
                      <td className="border px-4 py-2">e-PAN only</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">2</td>
                      <td className="border px-4 py-2">
                        Application (physical documents sent) online
                      </td>
                      <td className="border px-4 py-2">e-PAN only</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">3</td>
                      <td className="border px-4 py-2">Paperless (e-KYC / e-Sign / DSC)</td>
                      <td className="border px-4 py-2">e-PAN only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "time" && (
            <div>
              <h2 className="text-lg font-semibold mb-3">Processing Time</h2>

              <p className="mb-3 text-gray-700">
                Once a PAN application is submitted with complete and correct details along with
                valid supporting documents, it generally takes about two weeks for the application
                to be verified and for the physical PAN card to be printed and dispatched.
              </p>

              <p className="mb-3 text-gray-700">
                For applicants choosing the paperless e-PAN option, the processing is significantly
                faster. Using SaveDost’s Online Quick PAN Service, the e-PAN is usually generated
                and delivered digitally within 2–3 working days.
              </p>

              <p className="mb-3 text-gray-700">
                Applicants can conveniently track the progress of their PAN application at any stage
                through the SaveDost PAN Service Portal by entering their acknowledgment number.
              </p>

              <p className="text-gray-700">
                Since early 2015, the PAN processing ecosystem has shown steady year-on-year growth
                in operational capacity. This consistent improvement highlights enhanced efficiency,
                better infrastructure, and faster turnaround times across the system.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
