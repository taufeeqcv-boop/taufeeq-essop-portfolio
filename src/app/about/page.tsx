import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Taufeeq Essop - Financial Recovery Architect",
  description:
    "The Intersection of Finance and Human Resilience. BCom Tax, ACCSA Addiction Specialist, Old Mutual and Sanlam awards.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-[#10b981] font-semibold uppercase tracking-wider text-sm mb-2">
          Sovereign Architect · Dual Competency
        </p>
        <h1 className="text-4xl font-serif font-bold text-[#0f172a] mb-8">
          The Intersection of Finance and Human Resilience
        </h1>

        <div className="prose prose-lg text-gray-600 max-w-none">
          <p className="leading-relaxed mb-6">
            For over 7 years, I operated in the high-stakes world of corporate
            finance—League of Champions at Sanlam, Grand Prize winner, and
            &ldquo;Best Sales Closer&rdquo; at Old Mutual. I was a
            &ldquo;Retention Architect,&rdquo; helping clients hold onto their
            assets.
          </p>
          <p className="leading-relaxed mb-6">
            But I realized the biggest storm wasn&apos;t the market—it was the
            human element. Financial stress is a trigger for anxiety, burnout,
            and addiction.
          </p>
          <p className="leading-relaxed mb-6">
            Today, I hold a dual-competency profile rare in South Africa: I am a
            Senior Financial Planner with a BCom in Tax (UWC), and an ACCSA
            Addiction Specialist in progress. I bridge corporate awards and
            human recovery.
          </p>
          <p className="leading-relaxed mb-10">
            I don&apos;t just manage your portfolio. I help you manage the
            behaviors that threaten it. Whether you are a family funding a loved
            one&apos;s recovery, or an executive fighting gambling debt, I am
            your Financial Recovery Architect.
          </p>
        </div>

        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-serif font-bold text-[#0f172a] mb-6">
            Lineage & Heritage
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            My maternal lineage traces to the Rakieps of Bo-Kaap: descendants
            of Tuan Guru (Imam Abdullah ibn Qadi Abdus Salam), Prince of
            Tidore, who founded the Auwal Masjid and preserved knowledge through
            the written word. My paternal lineage carries the Essop-Motura
            heritage from District Six—Sayed Abdurrahman Motura, the Prince of
            Madura, a warrior-saint whose karamat on Robben Island stands as a
            symbol of resilience and spiritual endurance.
          </p>
          <p className="text-gray-600 leading-relaxed">
            I stand at the convergence of these two lines: the Architect and the
            Survivor—using the discipline of structure and the wisdom of
            endurance to serve families and individuals in their toughest
            transitions.
          </p>
        </section>
      </div>
    </div>
  );
}
