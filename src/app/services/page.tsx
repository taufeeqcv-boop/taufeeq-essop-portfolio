import type { Metadata } from "next";
import {
  ShieldAlert,
  HeartHandshake,
  TrendingUp,
  Scale,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services | Taufeeq Essop - Financial Recovery Architect",
  description:
    "Crisis Interceptor, Wealth Management, Recovery Coaching. Regulated financial planning and voluntary recovery coaching.",
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

        {/* Compliance firewall: two clearly separated blocks */}
        <section className="mb-16 space-y-6">
          <div className="p-6 rounded-xl bg-[#0f172a] text-gray-200 border border-[#0f172a]">
            <h2 className="text-lg font-bold text-white mb-2">
              Financial Planning – Regulated by the FSCA
            </h2>
            <p className="text-sm">
              Includes advice on insurance, investment vehicles, tax structuring
              (e.g. Section 6B), estate and risk planning. FSP License #{" "}
              {SITE_CONFIG.fspNumber}.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-amber-50/80 border border-amber-200">
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">
              Recovery Coaching – Voluntary
            </h2>
            <p className="text-sm text-gray-700">
              Voluntary engagement for behavioral accountability. NOT clinical
              psychological treatment or medical advice.
            </p>
          </div>
        </section>

        {/* Three service pillars */}
        <div className="space-y-12">
          <article className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-10 h-10 text-red-500" />
              <h2 className="text-2xl font-serif font-bold text-[#0f172a]">
                Crisis Interceptor
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Medical Aid Advocacy (PMB), Section 6B tax strategy.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Medical Aid PMB Advocacy:</strong> Fighting for Prescribed
                Minimum Benefits (PMB) for addiction treatment.
              </li>
              <li>
                <strong>Section 6B Tax Strategy:</strong> Structuring rehab
                costs to maximize SARS medical tax credits.
              </li>
              <li>
                <strong>Liquidity Strategy:</strong> Asset triage—which assets to
                liquidate first without destroying long-term solvency.
              </li>
            </ul>
          </article>

          <article className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-10 h-10 text-blue-600" />
              <h2 className="text-2xl font-serif font-bold text-[#0f172a]">
                Wealth Management
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Estate planning, risk planning.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Estate Planning:</strong> Wills, trusts, and succession
                structures.
              </li>
              <li>
                <strong>Risk Planning:</strong> Insurance and portfolio
                management aligned with your goals.
              </li>
              <li>
                <strong>Investment Vehicles:</strong> Tax-efficient long-term
                wealth building.
              </li>
            </ul>
          </article>

          <article className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <HeartHandshake className="w-10 h-10 text-[#10b981]" />
              <h2 className="text-2xl font-serif font-bold text-[#0f172a]">
                Recovery Coaching
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Sober budgeting, impulse control. Voluntary engagement—not medical
              or clinical advice.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Sober Budget:</strong> A spending plan that prioritizes
                recovery capital—therapy, wellness—while servicing debt
                sustainably.
              </li>
              <li>
                <strong>Impulse Control:</strong> Behavioral accountability
                using evidence-based techniques (e.g. Motivational Interviewing).
              </li>
              <li>
                <strong>Forensic Audit:</strong> Identifying financial leakage
                and enabling patterns.
              </li>
            </ul>
          </article>
        </div>

        <section className="mt-12 p-6 rounded-xl bg-slate-100 border border-slate-200">
          <p className="text-sm text-gray-600">
            <Scale className="w-4 h-4 inline mr-1" />
            Wealth Management is delivered under the regulated FSP mandate.
            Recovery coaching is delivered under a separate coaching agreement. I
            do not diagnose medical conditions and refer clients with active
            pathology to registered medical professionals.
          </p>
        </section>
      </div>
    </div>
  );
}
