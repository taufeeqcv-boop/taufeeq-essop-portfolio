import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

const title = "Contact | Taufeeq Essop - Financial Recovery Architect";
const description =
  "Get in touch for financial planning, recovery coaching, rehab funding, or collaboration. Partnership and recruitment enquiries welcome.";
const path = "/contact";
const url = `${SITE_CONFIG.siteUrl}${path}`;
const ogImage = { url: "/taufeeq-essop-profile.png", width: 1200, height: 630, alt: "Taufeeq Essop - Financial Recovery Architect" };

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: "Taufeeq Essop",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: { canonical: url },
};

export default function ContactLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
