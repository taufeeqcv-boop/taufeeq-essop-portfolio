import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Download, FileText } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

const title = "Thank You | Taufeeq Essop";
const description = "Thank you for your submission.";
const url = `${SITE_CONFIG.siteUrl}/thank-you`;
const ogImage = { url: "/taufeeq-essop-profile.png", width: 1200, height: 630, alt: "Taufeeq Essop - Financial Recovery Architect" };

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url, siteName: "Taufeeq Essop", type: "website", images: [ogImage] },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: url },
};

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 pt-24 pb-12">
      <div className="bg-[#18181b] border border-[#27272a] max-w-lg w-full p-12 rounded-2xl text-center">
        <div className="mx-auto bg-emerald-500/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="text-emerald-400 w-10 h-10" />
        </div>
        <h1 className="text-3xl font-serif font-bold text-white mb-4">
          Message Received
        </h1>
        <p className="text-zinc-400 mb-8">
          Thank you. Your request has been securely processed.
        </p>

        <div className="space-y-4">
          {/* PRIMARY ACTION: Download the Toolkit */}
          <a
            href="/Rehab_Funding_Toolkit.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-emerald-600 text-white font-bold py-4 rounded-lg hover:bg-emerald-500 transition-colors"
          >
            <Download size={20} /> Download Rehab Toolkit
          </a>

          {/* SECONDARY: Resume */}
          <a
            href="/Taufeeq_Essop_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full border border-[#27272a] text-zinc-300 font-bold py-3 rounded-lg hover:bg-[#27272a] transition-colors"
          >
            <FileText size={20} /> Download My Resume
          </a>

          <Link
            href="/"
            className="block text-sm text-zinc-500 hover:text-white mt-4"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
