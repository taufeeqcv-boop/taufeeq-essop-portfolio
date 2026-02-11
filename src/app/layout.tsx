import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://taufeeqessop.co.za";

export const metadata: Metadata = {
  title: "Taufeeq Essop | Financial Recovery Architect",
  description:
    "Rebuilding Wealth. Engineering Resilience. Bridging the gap between financial crisis and structural recovery.",
  metadataBase: new URL(siteUrl),
  openGraph: { url: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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
