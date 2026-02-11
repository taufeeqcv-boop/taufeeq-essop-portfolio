import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Logo Column */}
        <div className="col-span-1 md:col-span-2">
          <div className="bg-white p-3 rounded-lg w-fit mb-6 inline-block">
            <Image
              src="/logo.jpg"
              alt="Taufeeq Essop Logo"
              width={180}
              height={50}
              className="h-12 w-auto object-contain mix-blend-multiply"
            />
          </div>
          <p className="text-sm leading-relaxed max-w-md text-gray-400">
            The Financial Recovery Architect. Specialized in bridging the gap
            between wealth management and behavioral health.
          </p>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="text-white font-bold mb-4">Legal & Compliance</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-[#10b981]">
                Privacy Policy (POPIA)
              </Link>
            </li>
            <li>
              <Link href="/paia" className="hover:text-[#10b981]">
                PAIA Manual
              </Link>
            </li>
            <li>FSP License # {SITE_CONFIG.fspNumber}</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Glenwood, Cape Town</li>
            <li>
              <a
                href="mailto:info@taufeeqessop.co.za"
                className="hover:text-[#10b981]"
              >
                info@taufeeqessop.co.za
              </a>
            </li>
            <li>
              <a href="tel:+27810487447" className="hover:text-[#10b981]">
                +27 81 048 7447
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Compliance Firewall Footer */}
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-800 text-xs text-gray-500 text-center">
        <p className="mb-2">
          <strong>DISCLAIMER:</strong> Taufeeq Essop operates under two distinct
          mandates:
        </p>
        <p>
          1. <strong>Financial Planning:</strong> Regulated by the FSCA under the
          FAIS Act.
          <br />
          2. <strong>Recovery Coaching:</strong> A voluntary engagement for
          behavioral accountability. This service is NOT clinical psychological
          treatment or medical advice.
        </p>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} Taufeeq Essop. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
