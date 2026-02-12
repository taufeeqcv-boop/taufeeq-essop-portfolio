import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

const title = "Crisis Interceptor | Taufeeq Essop - Financial Recovery Architect";
const description =
  "Immediate crisis intervention for addiction: placement, financial recovery, aftercare. PMB advocacy, Section 6B, liquidity strategy.";
const url = `${SITE_CONFIG.siteUrl}/crisis-interceptor`;
const ogImage = { url: "/taufeeq-essop-profile.png", width: 1200, height: 630, alt: "Taufeeq Essop - Financial Recovery Architect" };

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url, siteName: "Taufeeq Essop", type: "website", images: [ogImage] },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: url },
};

export default function CrisisInterceptorPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-xl bg-red-950 border border-red-900">
            <ShieldAlert className="w-10 h-10 text-red-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Crisis Interceptor</h1>
            <p className="text-zinc-400 text-sm">Emergency financial triage & intervention</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-zinc-300">
          <p className="text-lg leading-relaxed">
            When someone is in crisis with addiction (drugs or alcohol), families and employers often don&apos;t know the next step. <strong className="text-white">Crisis Interceptor</strong> is immediate intervention: we help get everything necessary in place, get the person checked into a facility that works, and support <strong className="text-white">financial recovery</strong> and <strong className="text-white">aftercare</strong> so the journey is sustainable.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">What we do</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              <li><strong className="text-white">Crisis intervention & placement</strong> — Intervene in addiction crises and help get people into a facility that fits.</li>
              <li><strong className="text-white">Financial recovery</strong> — Funding strategy, payment plans, asset triage so families can pay for care without collapsing financially.</li>
              <li><strong className="text-white">Aftercare support</strong> — Ongoing structure so recovery holds after discharge.</li>
              <li><strong className="text-white">Medical Aid PMB advocacy</strong> — Fighting for Prescribed Minimum Benefits where the law entitles you to addiction treatment cover.</li>
              <li><strong className="text-white">Section 6B tax strategy</strong> — Structuring rehab and qualifying medical costs to maximize SARS medical tax credits.</li>
            </ul>
          </section>

          <p className="text-zinc-400 text-sm">
            Financial planning in this context is provided under FSP License #{SITE_CONFIG.fspNumber}. Recovery coaching and placement support are voluntary, non-clinical services. We refer to registered medical professionals where needed.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact?type=crisis"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-700 transition-colors"
          >
            Initiate protocol – get in touch
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-zinc-600 text-zinc-300 px-6 py-3 rounded-xl font-medium hover:bg-zinc-800 transition-colors"
          >
            View all services
          </Link>
        </div>
      </div>
    </div>
  );
}
