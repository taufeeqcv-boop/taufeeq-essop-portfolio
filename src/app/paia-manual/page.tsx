import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

const title = "PAIA Manual (Section 51) | Taufeeq Essop";
const description = "Promotion of Access to Information Act - Section 51 Notice.";
const url = `${SITE_CONFIG.siteUrl}/paia-manual`;
const ogImage = { url: "/taufeeq-essop-profile.png", width: 1200, height: 630, alt: "Taufeeq Essop - Financial Recovery Architect" };

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url, siteName: "Taufeeq Essop", type: "website", images: [ogImage] },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: url },
};

export default function PAIAManual() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-white mb-8">
          PAIA Manual (Section 51 Notice)
        </h1>

        <div className="prose prose-invert max-w-none space-y-8 text-zinc-400">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">
              1. Access to Information
            </h2>
            <p>
              This notice is prepared in accordance with Section 51 of the
              Promotion of Access to Information Act (PAIA).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">
              2. Information Officer Details
            </h2>
            <ul className="list-none space-y-1">
              <li><strong>Name:</strong> Taufeeq Essop</li>
              <li><strong>Position:</strong> Proprietor / Key Individual</li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@taufeeqessop.co.za"
                  className="text-emerald-400 hover:underline"
                >
                  info@taufeeqessop.co.za
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+27810487447"
                  className="text-emerald-400 hover:underline"
                >
                  +27 81 048 7447
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">
              3. Records Available Without Request
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Marketing brochures (Website content).</li>
              <li>Public pricing (if listed).</li>
              <li>Newsletters.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">
              4. Records Available on Request
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Client advice records (FAIS).</li>
              <li>Coaching notes (subject to health privacy restrictions).</li>
              <li>Business financial records.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">
              5. Request Procedure
            </h2>
            <p>
              To request access to a record, please use Form C of Annexure B of
              the PAIA regulations and submit it to the Information Officer. A
              prescribed fee may be payable.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
