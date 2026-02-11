import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldAlert,
  HeartHandshake,
  TrendingUp,
  Scale,
  ArrowRight,
  Handshake,
  Mail,
  Linkedin,
  FileText,
  Briefcase,
  Building2,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services | Taufeeq Essop - Financial Recovery Architect",
  description:
    "Crisis Interceptor, Wealth Management, Recovery Coaching. What I do, how it helps, and how we can build together. Partnership and collaboration enquiries welcome.",
};

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100/70 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-[#0f172a] mb-4 tracking-tight">
          Services
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl leading-relaxed">
          A clear separation between regulated financial advice and voluntary
          recovery coaching—so you know exactly what you&apos;re engaging with.
          Below: what I do, what I offer, how it helps, and how we can link and
          build together.
        </p>

        {/* Services under Taufeeq Essop – umbrella */}
        <section className="mb-10 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-emerald-300">
          <h2 className="text-lg font-bold text-[#0f172a] mb-2">
            Financial & Recovery Architect Services
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Under my name I provide <strong>counseling and immediate crisis intervention</strong> for people affected by addiction (drugs and alcohol). We intervene, get everything necessary in place, help get them checked into a facility that works, and assist with <strong>financial recovery</strong> as well as <strong>aftercare services</strong>. In conjunction with <strong>Al-Kimya</strong> we can operate and deliver integrated solutions—we can work something out that fits your situation.
          </p>
        </section>

        {/* Giving back – free services */}
        <section className="mb-10 p-6 rounded-2xl bg-amber-50 border border-amber-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-amber-300">
          <h2 className="text-lg font-bold text-[#0f172a] mb-2">
            Giving Back – Free Financial & Recovery Support
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            I am currently offering <strong>financial and recovery services at no cost</strong> to help people and give back. If you are in need of crisis triage, sober budgeting support, or rehab-funding guidance and cannot afford to pay, reach out. We can see how to assist within the scope of what I provide (financial planning under FSP and voluntary recovery coaching).
          </p>
        </section>

        {/* Taufeeq Essop Financial & Recovery Wellness – integrated practice */}
        <section className="mb-12 p-8 rounded-2xl bg-[#0f172a] text-gray-200 border border-[#0f172a] shadow-lg shadow-slate-900/10 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20">
          <h2 className="text-xl font-bold text-white mb-2">
            Taufeeq Essop Financial & Recovery Wellness
          </h2>
          <p className="text-sm text-emerald-300/90 font-medium mb-4">
            Integrated Counseling & Financial Guidance
          </p>
          <p className="text-sm leading-relaxed mb-4">
            This consultancy offers a dual-pronged approach to wellness, recognizing that financial stress and addiction are often deeply intertwined. Drawing on professional training through ACCSA (Addiction Counselor Certification Board of South Africa) and lived experience with financial restructuring, this practice offers compassionate, practical intervention.
          </p>
          <p className="text-sm leading-relaxed mb-6">
            We break the cycle of despair by treating the person, not just the symptom. Whether it is navigating the complexities of debt review or beginning the journey of sobriety, we provide the strategic planning and emotional support needed to reclaim control of your life.
          </p>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
            Services Offered
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
            <li><strong className="text-white">Addiction Counseling:</strong> Professional support and intervention strategies based on ACCSA standards.</li>
            <li><strong className="text-white">Financial Wellness Coaching:</strong> Practical guidance on budgeting, navigating debt review, and financial rehabilitation.</li>
            <li><strong className="text-white">Family Intervention:</strong> Mediated sessions to help families support their loved ones effectively.</li>
            <li><strong className="text-white">Metro North Early Intervention:</strong> Community-based support structures for early-stage recovery and assistance.</li>
          </ul>
        </section>

        {/* Business operations – what I do */}
        <section className="mb-12 p-6 rounded-2xl bg-[#0f172a] text-gray-200 border border-[#0f172a] shadow-lg shadow-slate-900/10 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20">
          <h2 className="text-xl font-bold text-white mb-3">
            What I Do – Business Operations
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            I run a dual-practice: <strong className="text-white">regulated financial planning</strong> (FSP License #{SITE_CONFIG.fspNumber}) and <strong className="text-white">voluntary recovery coaching</strong>. On the financial side, I advise on insurance, investments, tax structuring (including Section 6B for rehab funding), estate and risk planning. On the recovery side, I offer non-clinical, voluntary coaching for sober budgeting and behavioral accountability. I also operate a crisis triage service (<strong className="text-white">Crisis Interceptor</strong>) for families and businesses in financial distress, and a venture ecosystem—<strong className="text-white">Al-Kimya Recovery</strong>, <strong className="text-white">Precision LGS</strong>, <strong className="text-white">Glengrove</strong>—focused on wealth recovery, construction, and hospitality. My goal is to bridge crisis and long-term stability so clients and partners can grow with clarity and structure.
          </p>
        </section>

        {/* Compliance firewall */}
        <section className="mb-12 space-y-6">
          <div className="p-6 rounded-xl bg-[#0f172a] text-gray-200 border border-[#0f172a] shadow-md transition-all duration-300 hover:shadow-lg">
            <h2 className="text-lg font-bold text-white mb-2">
              Financial Planning – Regulated by the FSCA
            </h2>
            <p className="text-sm">
              Includes advice on insurance, investment vehicles, tax structuring
              (e.g. Section 6B), estate and risk planning. FSP License #{" "}
              {SITE_CONFIG.fspNumber}.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-amber-50/80 border border-amber-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-amber-300">
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">
              Recovery Coaching – Voluntary
            </h2>
            <p className="text-sm text-gray-700">
              Voluntary engagement for behavioral accountability. NOT clinical
              psychological treatment or medical advice.
            </p>
          </div>
        </section>

        {/* Service pillars with detail + how to get involved + links */}
        <div className="space-y-12">
          {/* Crisis Interceptor */}
          <article className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-0.5 hover:border-gray-300">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-10 h-10 text-red-500" />
              <h2 className="text-2xl font-serif font-bold text-[#0f172a]">
                Crisis Interceptor
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Immediate crisis intervention for people addicted to drugs and alcohol: we intervene, get everything necessary in place, help get them checked into a facility that works, and assist with financial recovery and aftercare. Plus medical aid PMB advocacy, Section 6B tax strategy for rehab costs, and liquidity planning so you can fund recovery without destroying long-term solvency.
            </p>
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-[#0f172a] uppercase tracking-wider mb-2">What I provide</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Crisis intervention & placement:</strong> Intervene in addiction crises, get the necessary arrangements in place, and help get people into a facility that works.</li>
                <li><strong>Financial recovery & aftercare:</strong> Assist with funding, payment plans, and aftercare so recovery is sustainable.</li>
                <li><strong>Medical Aid PMB Advocacy:</strong> Fighting for Prescribed Minimum Benefits (PMB) so addiction treatment is covered where the law entitles you.</li>
                <li><strong>Section 6B Tax Strategy:</strong> Structuring rehab and qualifying medical costs to maximize SARS medical tax credits.</li>
                <li><strong>Liquidity Strategy:</strong> Asset triage—which assets to use first and how to service debt without collapsing the family balance sheet.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-[#0f172a] uppercase tracking-wider mb-2">How it helps</h3>
              <p className="text-gray-600 text-sm">
                You get a clear, confidential roadmap: intervention, placement, what to claim, what to pay, and in what order. Families and executives can make decisions under pressure with structure instead of panic.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?type=crisis"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-red-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-ring focus:outline-none"
              >
                Initiate protocol
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>

          {/* Wealth Management */}
          <article className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-0.5 hover:border-gray-300">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-10 h-10 text-blue-600" />
              <h2 className="text-2xl font-serif font-bold text-[#0f172a]">
                Wealth Management
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Long-term planning: estate, risk, and tax-efficient investment vehicles so your wealth supports your goals and your family.
            </p>
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-[#0f172a] uppercase tracking-wider mb-2">What I provide</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Estate Planning:</strong> Wills, trusts, and succession structures so assets pass the way you intend.</li>
                <li><strong>Risk Planning:</strong> Insurance and portfolio management aligned with your risk tolerance and life stage.</li>
                <li><strong>Investment Vehicles:</strong> Tax-efficient long-term wealth building and retirement planning.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-[#0f172a] uppercase tracking-wider mb-2">How it helps</h3>
              <p className="text-gray-600 text-sm">
                You get a structured plan that protects what you have and grows it in line with your values—whether that&apos;s family security, recovery capital, or legacy.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?type=wealth"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-ring focus:outline-none"
              >
                Book a consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>

          {/* Recovery Coaching */}
          <article className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-0.5 hover:border-gray-300">
            <div className="flex items-center gap-3 mb-4">
              <HeartHandshake className="w-10 h-10 text-[#10b981]" />
              <h2 className="text-2xl font-serif font-bold text-[#0f172a]">
                Recovery Coaching
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Voluntary coaching for sober budgeting, impulse control, and financial behavior—supportive wellness, not medical or clinical treatment.
            </p>
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-[#0f172a] uppercase tracking-wider mb-2">What I provide</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Sober Budget:</strong> A spending plan that prioritizes recovery capital (therapy, wellness) while servicing debt sustainably.</li>
                <li><strong>Impulse Control:</strong> Behavioral accountability using evidence-based techniques (e.g. Motivational Interviewing).</li>
                <li><strong>Forensic Audit:</strong> Identifying financial leakage and enabling patterns so you can redirect money toward recovery and stability.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-[#0f172a] uppercase tracking-wider mb-2">How it helps</h3>
              <p className="text-gray-600 text-sm">
                You get a practical, confidential space to align money with recovery—fewer surprises, more control, and a plan that supports sobriety and long-term financial health.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?type=recovery"
                className="inline-flex items-center gap-2 bg-[#10b981] text-[#0f172a] px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-ring focus:outline-none"
              >
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>

          {/* Glengrove Lodge – detox when available */}
          <article className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-0.5 hover:border-gray-300">
            <div className="flex items-center gap-3 mb-4">
              <HeartHandshake className="w-10 h-10 text-amber-500" />
              <h2 className="text-2xl font-serif font-bold text-[#0f172a]">
                Glengrove Lodge
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Hospitality and asset utilization at Glengrove. When availability allows, we can run a <strong>short inpatient detox-type treatment setting</strong>—a quick, supportive environment for stabilisation before longer-term treatment if needed.
            </p>
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-[#0f172a] uppercase tracking-wider mb-2">How to get involved</h3>
              <p className="text-gray-600 text-sm">
                Enquiries for stays or detox availability: use the contact form or reach out directly. We can discuss dates, capacity, and what we can offer.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-amber-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-ring focus:outline-none"
            >
              Enquire about Glengrove
              <ArrowRight className="w-4 h-4" />
            </Link>
          </article>

          {/* Al-Kimya – partnership */}
          <article className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-0.5 hover:border-gray-300">
            <h2 className="text-xl font-serif font-bold text-[#0f172a] mb-4">
              In Conjunction With Al-Kimya
            </h2>
            <p className="text-gray-600 mb-4">
              I work with <strong>Al-Kimya</strong> to deliver solutions that fit your context. We can operate together—whether that&apos;s integrated recovery and financial workflows, reporting, or something tailored. If you have a project or partnership in mind, we can work something out.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#27272a] text-white px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-zinc-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-ring focus:outline-none"
            >
              Discuss collaboration
              <ArrowRight className="w-4 h-4" />
            </Link>
          </article>
        </div>

        {/* Venture With Me – Rehabilitation Center */}
        <section className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-emerald-900/90 to-[#0f172a] text-gray-200 border border-emerald-800/50 shadow-xl shadow-emerald-900/20 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/30 hover:border-emerald-700/50">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-10 h-10 text-emerald-400" />
            <h2 className="text-2xl font-serif font-bold text-white">
              Venture With Me – Rehabilitation Center
            </h2>
          </div>
          <p className="text-sm leading-relaxed mb-4 max-w-2xl">
            I&apos;m looking to <strong className="text-white">venture with people who are interested in opening a rehabilitation center</strong>—combining our skills to build something that does real good. <strong className="text-white">Sadaqah Jariah:</strong> ongoing charity for the community and the country. Business people, finance people who want to put capital to work for something that matters; people who want to do something good for life.
          </p>
          <p className="text-sm leading-relaxed mb-4 max-w-2xl">
            The vision is a facility that can sit in the <strong className="text-white">top three in South Africa</strong>, with a recovery rate in the <strong className="text-white">90–99%</strong> range. I&apos;m looking for <strong className="text-white">spiritual people</strong>, people with <strong className="text-white">vast experience in addiction and recovery</strong>, who are in it for the love of it and who want to try to do something lasting. If that&apos;s you—reach out. Let&apos;s see if we can build this together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-500 text-[#0f172a] px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-ring focus:outline-none"
          >
            I want to venture – get in touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* How to link with me – build business networks */}
        <section className="mt-12 p-8 rounded-2xl bg-[#0f172a] text-gray-200 border border-[#0f172a] shadow-xl shadow-slate-900/20 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/30">
          <div className="flex items-center gap-3 mb-4">
            <Handshake className="w-10 h-10 text-[#10b981]" />
            <h2 className="text-2xl font-serif font-bold text-white">
              Link With Me – Build Together
            </h2>
          </div>
          <p className="text-sm leading-relaxed mb-6 max-w-2xl">
            I&apos;m building business networks: people I can do business with, refer to, and grow with. Whether you&apos;re a rehab facility, a financial adviser, a builder, an investor, or someone who wants to collaborate on projects—I want to connect. Use the links below to get in touch, share your focus, and we can see where we align.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0f172a] px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-ring focus:outline-none"
            >
              <Mail className="w-4 h-4" />
              Contact / Enquiry
            </Link>
            <Link
              href="/for-recruiters"
              className="inline-flex items-center gap-2 bg-[#10b981] text-[#0f172a] px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-ring focus:outline-none"
            >
              <Briefcase className="w-4 h-4" />
              For Recruiters
            </Link>
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#27272a] text-white border border-[#27272a] px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-zinc-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-ring focus:outline-none"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 bg-[#27272a] text-white border border-[#27272a] px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-zinc-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-ring focus:outline-none"
            >
              <FileText className="w-4 h-4" />
              Resume / CV
            </Link>
          </div>
          <p className="text-xs text-gray-400 mt-6 max-w-xl">
            Whether you need one of my services or want to explore a partnership, referral arrangement, or joint venture—start with the contact form or LinkedIn. I respond to serious enquiries and collaboration ideas.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="mt-12 p-6 rounded-xl bg-slate-100 border border-slate-200 shadow-sm">
          <p className="text-sm text-gray-600 flex items-start gap-2">
            <Scale className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              Wealth Management is delivered under the regulated FSP mandate.
              Recovery coaching is delivered under a separate coaching agreement. I
              do not diagnose medical conditions and refer clients with active
              pathology to registered medical professionals.
            </span>
          </p>
        </section>
      </div>
    </div>
  );
}
