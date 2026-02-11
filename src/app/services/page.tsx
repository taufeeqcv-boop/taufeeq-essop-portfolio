import type { Metadata } from "next";
import {
  ShieldAlert,
  HeartHandshake,
  Building2,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Taufeeq Essop - Financial Recovery Architect",
  description:
    "The Crisis Interceptor, Recovery Retainer, and Corporate Shield. Regulated financial planning and recovery coaching.",
};

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-[#0f172a] mb-4">
          Services
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl">
          A clear separation between regulated financial advice and voluntary
          recovery coaching—so you know exactly what you&apos;re engaging with.
        </p>

        <section className="mb-16 p-6 rounded-xl bg-amber-50/50 border border-amber-200/50">
          <h2 className="text-xl font-bold text-[#0f172a] mb-4">
            Compliance: Two Distinct Mandates
          </h2>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <strong>1. Financial Planning (Regulated):</strong> Regulated by
              the FSCA under FSP License #[Insert Number]. This includes advice
              on insurance products, investment vehicles, and tax structuring
              (e.g. Section 6B), estate and risk planning.
            </div>
            <div>
              <strong>2. Recovery & Wellness Coaching (Voluntary):</strong> A
              voluntary engagement focused on behavioral accountability and
              lifestyle management. This service is not regulated by the FAIS
              Act and does not constitute clinical psychological treatment or
              medical advice. Coaching fees are billed separately from any
              financial product commissions or advice fees.
            </div>
          </div>
        </section>

        <div className="space-y-12">
          <article className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-10 h-10 text-red-500" />
              <h2 className="text-2xl font-serif font-bold text-[#0f172a]">
                The Crisis Interceptor
              </h2>
            </div>
            <p className="text-gray-600 mb-4">For families in acute crisis.</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Medical Aid PMB Advocacy:</strong> Fighting for Prescribed
                Minimum Benefits (PMB) for addiction treatment.
              </li>
              <li>
                <strong>Tax-Efficient Funding (Section 6B):</strong> Structuring
                rehab costs to maximize SARS medical tax credits.
              </li>
              <li>
                <strong>Liquidity Strategy:</strong> Asset triage—which assets to
                liquidate first to raise cash without destroying long-term
                solvency.
              </li>
            </ul>
          </article>

          <article className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <HeartHandshake className="w-10 h-10 text-[#10b981]" />
              <h2 className="text-2xl font-serif font-bold text-[#0f172a]">
                The Recovery Retainer
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              For individuals in early recovery (substance or gambling).
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Forensic Audit:</strong> Identifying financial leakage
                and enabling patterns.
              </li>
              <li>
                <strong>The Sober Budget:</strong> A spending plan that
                prioritizes recovery capital—therapy, wellness—while servicing
                debt sustainably.
              </li>
              <li>
                <strong>Impulse Control Coaching:</strong> Behavioral
                accountability using evidence-based techniques (e.g.
                Motivational Interviewing).
              </li>
            </ul>
          </article>

          <article className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-10 h-10 text-blue-600" />
              <h2 className="text-2xl font-serif font-bold text-[#0f172a]">
                The Corporate Shield
              </h2>
            </div>
            <p className="text-gray-600 mb-4">For HR Directors and EAP Managers.</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Executive Financial Stress Audits:</strong> Confidential
                support for high-performance leaders.
              </li>
              <li>
                <strong>Garnishee Prevention:</strong> Pre-emptive debt
                restructuring to reduce HR admin and employee distress.
              </li>
              <li>
                <strong>The &ldquo;Dopamine Budget&rdquo; Workshop:</strong> A
                60-minute high-impact session on the psychology of spending and
                financial sobriety.
              </li>
            </ul>
          </article>
        </div>

        <section className="mt-12 p-6 rounded-xl bg-slate-100 border border-slate-200">
          <p className="text-sm text-gray-600">
            <Scale className="w-4 h-4 inline mr-1" />
            Wealth Management (investment, estate, risk planning) is delivered
            under the regulated FSP mandate. Recovery coaching is delivered under
            a separate coaching agreement. I do not diagnose medical conditions
            and refer clients with active pathology to registered medical
            professionals.
          </p>
        </section>
      </div>
    </div>
  );
}
