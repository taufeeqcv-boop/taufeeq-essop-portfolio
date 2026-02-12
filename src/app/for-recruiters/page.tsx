import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Mail,
  Linkedin,
  Target,
  Users,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { SITE_CONFIG as APP_CONFIG } from "@/lib/config";

const title = "For Recruiters | Taufeeq Essop - Financial Recovery Architect";
const description =
  "Open to roles in financial planning, recovery, advisory. BCom Tax, RE5, ACCSA. Sanlam & Old Mutual awards. Download CV, contact for opportunities.";
const url = `${SITE_CONFIG.siteUrl}/for-recruiters`;
const ogImage = { url: "/taufeeq-essop-profile.png", width: 1200, height: 630, alt: "Taufeeq Essop - Financial Recovery Architect" };

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url, siteName: "Taufeeq Essop", type: "website", images: [ogImage] },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: url },
};

export default function ForRecruiters() {
  const profile = APP_CONFIG.profile;
  const ventures = APP_CONFIG.ventures;

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-[#0f172a] mb-4">
          For Recruiters & Hiring Managers
        </h1>
        <p className="text-gray-600 mb-10 max-w-2xl">
          I&apos;m open to being recruited for the right role—full-time, contract,
          or advisory—in financial planning, recovery, or ventures. Below: how I
          market myself, how I network, and how to reach me.
        </p>

        {/* One-line pitch */}
        <section className="mb-10 p-6 rounded-2xl bg-[#0f172a] text-gray-200">
          <p className="text-lg font-medium text-white">
            {profile.name} — {profile.title}. {profile.tagline} BCom Tax (UWC),
            RE5, ACCSA in progress. League of Champions (Sanlam), Old Mutual
            awards, Absa Top 10. I bridge financial planning and human recovery.
          </p>
        </section>

        {/* Marketing & networking strategy */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-[#0f172a] mb-6 flex items-center gap-2">
            <Target className="w-7 h-7 text-[#10b981]" />
            Marketing & Networking Strategy
          </h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-sm font-semibold text-[#0f172a] uppercase tracking-wider mb-2">
                Positioning
              </h3>
              <p className="text-sm leading-relaxed">
                I position myself as a <strong>Financial Recovery Architect</strong>:
                someone who combines regulated financial planning (FSP) with
                voluntary recovery coaching and crisis intervention. My niche is
                families and individuals at the intersection of money and
                addiction/recovery—rehab funding, sober budgeting, and
                long-term wealth stability.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#0f172a] uppercase tracking-wider mb-2">
                Who I want to reach
              </h3>
              <p className="text-sm leading-relaxed">
                <strong>Recruiters and employers</strong> in financial services,
                recovery/wellness, or ventures; <strong>referral partners</strong> (rehab
                facilities, advisers, builders); and <strong>clients</strong> who need
                crisis triage, wealth planning, or recovery coaching. I use this
                site, LinkedIn, and direct contact to stay visible and easy to
                find.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#0f172a] uppercase tracking-wider mb-2">
                How I stay visible
              </h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Public CV and Services page so recruiters can assess fit quickly.</li>
                <li>Clear &quot;For Recruiters&quot; page with strategy and contact links.</li>
                <li>LinkedIn profile kept current; open to connection requests from recruiters.</li>
                <li>Contact form and email for role briefs, partnership enquiries, and collaboration.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What I'm open to */}
        <section className="mb-12 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
          <h2 className="text-xl font-serif font-bold text-[#0f172a] mb-4 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-[#10b981]" />
            What I&apos;m Open To
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
              <span><strong>Full-time or contract roles</strong> in financial planning, wealth management, or recovery-related programmes.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
              <span><strong>Advisory or consulting</strong> for firms that serve families in crisis, rehab funding, or behavioral finance.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
              <span><strong>Partnerships and JVs</strong> with rehab facilities, software, or ventures (e.g. Al-Kimya) where my dual competency adds value.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
              <span><strong>Venturing to open a rehabilitation center</strong>—seeking spiritual, experienced partners (business, finance, clinical) who want to build something in the top tier in South Africa with a 90–99% recovery vision; Sadaqah Jariah for community and country.</span>
            </li>
          </ul>
        </section>

        {/* Ventures / proof points */}
        <section className="mb-12">
          <h2 className="text-xl font-serif font-bold text-[#0f172a] mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-[#10b981]" />
            Ventures & Proof Points
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            I operate Crisis Interceptor (crisis triage), Al-Kimya Recovery (wealth recovery), Precision LGS (construction), and Glengrove (hospitality; when available, short inpatient detox-type support). In conjunction with Al-Kimya we can deliver integrated solutions. This shows I can run operations, partner, and scale.
          </p>
          <div className="flex flex-wrap gap-2">
            {ventures.map((v) => (
              <Link
                key={v.id}
                href={v.link}
                className="px-3 py-1.5 rounded-lg bg-slate-200 text-[#0f172a] text-sm font-medium hover:bg-slate-300 transition-colors"
              >
                {v.name}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA – links together */}
        <section className="p-8 rounded-2xl bg-[#0f172a] text-gray-200">
          <h2 className="text-xl font-bold text-white mb-4">
            Reach Me – Links in One Place
          </h2>
          <p className="text-sm mb-6 max-w-xl">
            For role briefs, salary discussions, or partnership ideas: use the
            contact form or email. For a quick scan of experience, download the
            CV or connect on LinkedIn.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 bg-white text-[#0f172a] px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-gray-100 transition-colors"
            >
              <FileText className="w-4 h-4" />
              View / Download CV
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#10b981] text-[#0f172a] px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-emerald-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact / Send brief
            </Link>
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#27272a] text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-zinc-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Email: {SITE_CONFIG.contactEmail}
          </p>
        </section>
      </div>
    </div>
  );
}
