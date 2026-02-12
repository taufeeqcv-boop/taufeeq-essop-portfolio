import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { SITE_CONFIG } from "@/lib/site-config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = SITE_CONFIG.siteUrl;
const defaultTitle = "Taufeeq Essop | Financial Recovery Architect";
const defaultDescription =
  "Rebuilding Wealth. Engineering Resilience. Bridging the gap between financial crisis and structural recovery.";
const ogImage = { url: "/taufeeq-essop-profile.png", width: 1200, height: 630, alt: "Taufeeq Essop - Financial Recovery Architect" };

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  metadataBase: new URL(siteUrl),
  keywords: [
    "financial recovery",
    "wealth management",
    "recovery coaching",
    "crisis interceptor",
    "rehab funding",
    "Taufeeq Essop",
    "Financial Recovery Architect",
  ],
  openGraph: {
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    siteName: "Taufeeq Essop",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-financial-recovery-architect.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Taufeeq Essop",
      url: siteUrl,
      jobTitle: "Financial Recovery Architect",
      description: defaultDescription,
      sameAs: SITE_CONFIG.linkedinUrl ? [SITE_CONFIG.linkedinUrl] : undefined,
    },
    {
      "@type": "ProfessionalService",
      name: "Taufeeq Essop",
      url: siteUrl,
      description: defaultDescription,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-black text-zinc-100 antialiased font-sans`}
      >
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
