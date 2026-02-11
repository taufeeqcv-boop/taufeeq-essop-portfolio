import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume | Taufeeq Essop - Financial Recovery Architect",
  description:
    "Senior Financial Planner & Recovery Specialist. BCom Tax, RE5, ACCSA. Old Mutual, Sanlam, Glengrove Lodge.",
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <a
            href="/Taufeeq_Essop_Resume_2026.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-zinc-200 transition-colors w-fit"
          >
            <Download size={18} />
            Download PDF
          </a>
        </div>

        <div className="rounded-2xl border border-[#27272a] bg-[#18181b] overflow-hidden">
          <iframe
            src="/Taufeeq_Essop_Resume_2026.pdf"
            title="Taufeeq Essop - CV / Resume"
            className="w-full h-[calc(100vh-12rem)] min-h-[700px]"
          />
        </div>
        <p className="text-zinc-500 text-sm mt-3 text-center">
          Your CV is displayed above. Use the Download button to save the PDF.
        </p>
      </div>
    </div>
  );
}
