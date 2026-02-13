"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { SITE_CONFIG } from "@/lib/site-config";

const CONCERN_OPTIONS = [
  "Rehab Funding",
  "Debt",
  "Wealth Management",
  "Recovery coaching",
  "Other",
] as const;

function concernFromType(type: string | null): string {
  if (type === "crisis") return "Rehab Funding";
  if (type === "wealth") return "Wealth Management";
  if (type === "recovery") return "Recovery coaching";
  return "";
}

function ContactFormInner({ initialConcern }: { initialConcern: string }) {
  const [primaryConcern, setPrimaryConcern] = useState(initialConcern);

  return (
    <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don&apos;t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
              Name *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-[#27272a] bg-[#18181b] focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white placeholder-zinc-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
              Email *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-[#27272a] bg-[#18181b] focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white placeholder-zinc-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-1">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              className="w-full px-4 py-3 rounded-lg border border-[#27272a] bg-[#18181b] focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white placeholder-zinc-500"
            />
          </div>

          <div>
            <label htmlFor="concern" className="block text-sm font-medium text-zinc-300 mb-1">
              Primary Concern *
            </label>
            <select
              id="concern"
              name="primary-concern"
              required
              value={primaryConcern}
              onChange={(e) => setPrimaryConcern(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-[#27272a] bg-[#18181b] focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white"
            >
              <option value="">Select...</option>
              {CONCERN_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-start gap-3">
            <input
              id="consent"
              type="checkbox"
              name="consent"
              required
              className="mt-1 h-4 w-4 rounded border-[#27272a] bg-[#18181b] text-emerald-500 focus:ring-emerald-500"
            />
            <label htmlFor="consent" className="text-sm text-zinc-400">
              I consent to the processing of my personal information in terms
              of POPIA. I understand that health-related information is treated
              with strict confidentiality.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-500 transition-colors"
          >
            Send Message
          </button>
        </form>
  );
}

function ContactForm() {
  const searchParams = useSearchParams();
  const typeFromUrl = searchParams.get("type");
  const initialConcern = concernFromType(typeFromUrl);

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-white mb-2">
          Let&apos;s Build Your Recovery Roadmap
        </h1>
        <p className="text-zinc-400 mb-8">
          Tell me your primary concern and I&apos;ll get back to you
          confidentially.
        </p>

        <div className="mb-6 p-4 rounded-lg bg-[#18181b] border border-amber-800/50 text-sm text-zinc-400">
          <strong>Note:</strong> Financial Planning services are provided under
          FSP License #{SITE_CONFIG.fspNumber}. Recovery Coaching services are
          supportive wellness interventions and do not constitute clinical
          psychological treatment. If you are in a medical emergency, please
          contact 10111.
        </div>

        <ContactFormInner key={typeFromUrl ?? "default"} initialConcern={initialConcern} />
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black pt-24 pb-20 flex items-center justify-center">
          <p className="text-zinc-500">Loading...</p>
        </div>
      }
    >
      <ContactForm />
    </Suspense>
  );
}
