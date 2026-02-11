import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Download, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Taufeeq Essop",
  description: "Thank you for your submission.",
};

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4 pt-24 pb-12">
      <div className="bg-white max-w-lg w-full p-12 rounded-2xl text-center shadow-2xl">
        <div className="mx-auto bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="text-green-600 w-10 h-10" />
        </div>
        <h1 className="text-3xl font-serif font-bold text-[#0f172a] mb-4">
          Message Received
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you. Your request has been securely processed.
        </p>

        <div className="space-y-4">
          {/* PRIMARY ACTION: Download the Toolkit */}
          <a
            href="/Rehab_Funding_Toolkit.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#10b981] text-[#0f172a] font-bold py-4 rounded-lg hover:bg-green-400 transition-colors shadow-lg"
          >
            <Download size={20} /> Download Rehab Toolkit
          </a>

          {/* SECONDARY: Resume */}
          <a
            href="/Taufeeq_Essop_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full border border-gray-200 text-gray-600 font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FileText size={20} /> Download My Resume
          </a>

          <Link
            href="/"
            className="block text-sm text-gray-400 hover:text-[#0f172a] mt-4"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
