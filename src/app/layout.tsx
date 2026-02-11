import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://taufeeqessop.co.za";

export const metadata: Metadata = {
  title: "Taufeeq Essop | Financial Recovery Architect",
  description:
    "Specialized financial planning for addiction recovery. We help families secure funding for rehab through Medical Aid advocacy and Section 6B Tax strategies.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    url: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-slate-50 text-slate-900`}
      >
        <TopBar />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
