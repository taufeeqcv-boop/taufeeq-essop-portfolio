import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, GraduationCap, Scale } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-[#64748b]">
            <span className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#10b981]" />
              FPI (CFP)
            </span>
            <span className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#10b981]" />
              ACCSA
            </span>
            <span className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#10b981]" />
              UWC (BCom)
            </span>
            <span className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#10b981]" />
              Commissioner of Oaths
            </span>
          </div>
          <p className="text-lg text-gray-600 mb-6 italic max-w-2xl mx-auto">
            &ldquo;Traditional financial advisors don&apos;t understand the chaos
            of addiction. Traditional therapists don&apos;t understand the
            complexity of tax and estate planning. I speak both languages.&rdquo;
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-6">
            The Intersection of Finance & Human Resilience
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            For over 7 years, I operated in the high-stakes world of corporate
            finance, winning awards at Old Mutual and Sanlam. I was a
            &ldquo;Retention Architect,&rdquo; helping clients hold onto their
            assets. But I realized the biggest storm wasn&apos;t the
            market—it was the human element.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-[#0f172a] font-bold hover:text-[#10b981] transition-colors"
          >
            Read My Full Story <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <section
        id="toolkit"
        className="py-16 bg-gray-100"
        aria-labelledby="toolkit-heading"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#0f172a] rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden relative">
            <div className="relative z-10 max-w-2xl">
              <h2
                id="toolkit-heading"
                className="text-3xl font-serif font-bold text-white mb-4"
              >
                The Rehab Funding Toolkit
              </h2>
              <p className="text-gray-300 mb-6">
                Don&apos;t liquidate your assets in a panic. Download my guide on
                Section 6B Tax Deductions and Medical Aid Advocacy to fund
                recovery intelligently.
              </p>
              <form
                name="toolkit-download"
                method="POST"
                action="/thank-you"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="flex flex-col sm:flex-row gap-2"
              >
                <input type="hidden" name="form-name" value="toolkit-download" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="px-4 py-3 rounded-lg w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#10b981]"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="bg-[#10b981] text-[#0f172a] px-6 py-3 rounded-lg font-bold hover:bg-white transition-colors whitespace-nowrap"
                >
                  Download Toolkit
                </button>
              </form>
            </div>
            <div className="hidden md:block absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#10b981]/20 to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
}
