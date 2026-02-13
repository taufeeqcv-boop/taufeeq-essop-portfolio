import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

const title = "Privacy Policy (POPIA) | Taufeeq Essop";
const description = "Privacy Policy in terms of the Protection of Personal Information Act (POPIA).";
const canonicalUrl = `${SITE_CONFIG.siteUrl}/privacy-policy`;
const ogImage = { url: "/taufeeq-essop-profile.png", width: 1200, height: 630, alt: "Taufeeq Essop - Financial Recovery Architect" };

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: canonicalUrl, siteName: "Taufeeq Essop", type: "website", images: [ogImage] },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: canonicalUrl },
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-white mb-8">
          Privacy Policy (POPIA)
        </h1>

        <div className="prose prose-invert max-w-none space-y-8 text-zinc-400">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">
              1. Introduction
            </h2>
            <p>
              Taufeeq Essop (&ldquo;The Practice&rdquo;) respects your privacy
              and is committed to protecting your personal information in terms
              of the Protection of Personal Information Act (POPIA). This policy
              explains how we process data collected through our website and
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">
              2. Collection of Special Personal Information
            </h2>
            <p>
              Unlike standard websites, this Practice collects &ldquo;Special
              Personal Information&rdquo; as defined in Section 26 of POPIA,
              specifically:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Health Information:</strong> Regarding addiction recovery,
                medical aid details, and rehabilitation history.
              </li>
              <li>
                <strong>Financial Information:</strong> Assets, liabilities, tax
                numbers, and credit records.
              </li>
            </ul>
            <p className="mt-2">
              By using our &ldquo;Intake Forms&rdquo; or &ldquo;Toolkit
              Downloads,&rdquo; you explicitly consent to the processing of this
              information for the specific purpose of Financial Planning and
              Recovery Coaching.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">
              3. Purpose of Processing
            </h2>
            <p>We use your data to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Assess eligibility for Medical Aid Prescribed Minimum Benefits (PMB).</li>
              <li>Calculate tax deductions under Section 6B of the Income Tax Act.</li>
              <li>Provide financial advice in terms of the FAIS Act.</li>
              <li>Communicate via email (Newsletters/Toolkits) only if you have opted in.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">
              4. Data Security & Storage
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Financial Data:</strong> Stored in FSCA-compliant
                encrypted servers (e.g., Xplan).
              </li>
              <li>
                <strong>Coaching/Health Data:</strong> Stored in a segregated,
                encrypted environment separate from financial records to ensure
                &ldquo;Chinese Walls&rdquo; between advice and therapy.
              </li>
              <li>
                We use SSL encryption on this website. However, no transmission
                over the internet is completely secure.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">
              5. Sharing of Information
            </h2>
            <p>We do not sell your data. We only share data with:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Medical Schemes: For authorization purposes (with your consent).</li>
              <li>SARS: For tax compliance (with your consent).</li>
              <li>Law Enforcement: Only if required by a court order.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">
              6. Your Rights
            </h2>
            <p>
              You have the right to request access to, correction of, or
              deletion of your personal data. Contact our Information Officer at{" "}
              <a
                href="mailto:info@taufeeqessop.co.za"
                className="text-emerald-400 hover:underline"
              >
                info@taufeeqessop.co.za
              </a>{" "}
              (or the email displayed in the footer) to exercise these rights.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
