"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "taufeeq-essop-popia-consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const consented = sessionStorage.getItem(CONSENT_KEY);
    if (!consented) setShow(true);
  }, []);

  const accept = () => {
    sessionStorage.setItem(CONSENT_KEY, "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] bg-[#0f172a] text-white p-4 shadow-lg border-t border-gray-700"
      role="dialog"
      aria-label="Cookie and privacy consent"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          We use minimal data to run this site and process your enquiries in
          terms of{" "}
          <Link href="/privacy-policy" className="text-[#10b981] underline">
            POPIA
          </Link>
          . By continuing you consent to our Privacy Policy.
        </p>
        <button
          type="button"
          onClick={accept}
          className="bg-[#10b981] text-[#0f172a] px-4 py-2 rounded-lg font-bold text-sm hover:bg-white transition-colors whitespace-nowrap"
        >
          I understand
        </button>
      </div>
    </div>
  );
}
