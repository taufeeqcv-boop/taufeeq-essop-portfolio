import type { Metadata } from "next";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume | Taufeeq Essop - Financial Recovery Architect",
  description:
    "Senior Financial Planner & Recovery Specialist. BCom Tax, RE5, ACCSA. Old Mutual, Sanlam, Glengrove Lodge.",
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-12">
          <div>
            <h1 className="text-4xl font-serif font-bold text-[#0f172a]">
              Taufeeq Essop
            </h1>
            <p className="text-[#10b981] font-medium mt-2">
              Senior Financial Planner & Recovery Specialist
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Cape Town, South Africa
            </p>
          </div>
          <a
            href="/Taufeeq_Essop_Resume_2026.pdf"
            download
            className="flex items-center gap-2 bg-[#0f172a] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#10b981] transition-colors"
          >
            <Download size={16} /> Download PDF
          </a>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-[#0f172a] mb-6 border-b border-gray-200 pb-2">
            Professional Experience
          </h2>

          <div className="mb-8">
            <h3 className="font-bold text-lg">Director & Owner</h3>
            <p className="text-[#10b981] text-sm">
              Glengrove Lodge & Tours | Aug 2024 - Present
            </p>
            <p className="text-gray-600 mt-2 text-sm">
              Built a profitable property business achieving Airbnb Superhost
              status. Expanded into &ldquo;Little Explorers&rdquo; touring
              division.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-lg">Consultant (Retention Architect)</h3>
            <p className="text-[#10b981] text-sm">
              Sanlam Life Insurance | Jan 2019 - Feb 2022
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 text-sm space-y-1">
              <li>4x League of Champions Winner.</li>
              <li>Grand Prize Winner (Kia Picanto) for top sales performance.</li>
              <li>Specialized in risk portfolio management and forensic policy analysis.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-lg">Financial Adviser</h3>
            <p className="text-[#10b981] text-sm">
              Old Mutual | Jan 2015 - Feb 2019
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 text-sm space-y-1">
              <li>&ldquo;Best Sales Closer&rdquo; Award.</li>
              <li>Focused on holistic Lifestyle Financial Planning using Xplan.</li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mb-6 border-b border-gray-200 pb-2">
              Education
            </h2>
            <div className="mb-4">
              <h3 className="font-bold">Baccalaureus Commercii (BCom)</h3>
              <p className="text-sm text-gray-500">
                University of the Western Cape
              </p>
              <p className="text-xs text-[#10b981]">
                Majors: Industrial Psychology & IS
              </p>
            </div>
            <div>
              <h3 className="font-bold">Higher Cert. in Financial Planning</h3>
              <p className="text-sm text-gray-500">Milpark Education</p>
              <p className="text-xs text-[#10b981]">
                Distinction in Income Tax
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mb-6 border-b border-gray-200 pb-2">
              Certifications & Skills
            </h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#10b981] rounded-full" />
                Regulatory Exam (RE5) Representative
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#10b981] rounded-full" />
                Addictions Specialist (ACCSA) - In Progress
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#10b981] rounded-full" />
                Motivational Interviewing (MI)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#10b981] rounded-full" />
                Xplan, Sentrix, Astute, FAIS Compliance
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
