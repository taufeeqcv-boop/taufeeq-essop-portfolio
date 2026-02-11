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

export const metadata: Metadata = {
  title: "Taufeeq Essop | Financial Recovery Architect",
  description:
    "Bridging the gap between regulated financial advice and addiction recovery. Secure Your Wealth. Sustain Your Recovery.",
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
