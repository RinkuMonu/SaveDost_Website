import React from "react";
import { FileText, ArrowUpRight, Shield } from "lucide-react";

export default function DocumentsRequired2() {
  const documents = [
    {
      title: "POI/POA Documents Required – Indian Citizen",
      description: "Proof of Identity and Address documents for Indian citizens",
      type: "pdf",
      size: "2.1 MB",
    },
    {
      title: "POI/POA Documents Required – Foreign Citizen / NRI",
      description: "Required documents for foreign citizens and NRIs",
      type: "pdf",
      size: "1.8 MB",
    },
    {
      title: "Additional Documents for Change / Correction",
      description: "Documents needed for corrections in PAN details",
      type: "pdf",
      size: "1.5 MB",
    },
    {
      title: "Affidavit Format for Corporate PAN Applicant",
      description: "Legal affidavit format for corporate applications",
      type: "doc",
      size: "3.2 MB",
    },
    {
      title: "Employer Certificate Format (on Organization Letterhead)",
      description: "Format for employer verification certificate",
      type: "doc",
      size: "2.7 MB",
    },
    {
      title: "Bank Certificate Format (on Bank Letterhead)",
      description: "Bank verification certificate template",
      type: "doc",
      size: "2.4 MB",
    },
    {
      title: "Overseas Bank Certificate Format (Registered in India)",
      description: "Format for overseas bank certificates",
      type: "doc",
      size: "2.9 MB",
    },
    {
      title: "Identity/Address Certificate by MP / MLA / Gazetted Officer",
      description: "Certificate format for government officials",
      type: "pdf",
      size: "1.9 MB",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:px-0 lg:py-20">
      {/* Enhanced Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0C3D4C] px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Shield size={16} />
          Required Documents
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0C3D4C] mb-6">Documents Required</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Prepare these essential documents before submitting your PAN Card application. Ensure all
          copies are self-attested and meet the specified requirements.
        </p>
      </div>

      {/* Enhanced Documents Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl border shadow-md border-gray-200 p-6 hover:border-[#0C3D4C]/50 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10">
              {/* Action Buttons */}
              <div className="flex  justify-between">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#0C3D4C] text-white mb-4 group-hover:bg-[#0C3D4C]/90 transition-all duration-300 transform group-hover:scale-110">
                  <FileText size={24} />
                </div>
                <div className="flex gap-3">
                  <ArrowUpRight
                    size={18}
                    className="text-gray-400 group-hover:text-[#0C3D4C] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
              {/* Document Info */}
              <div className="mb-4">
                <h3 className="text-gray-900 font-semibold text-lg leading-tight mb-2 line-clamp-2">
                  {doc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {doc.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
