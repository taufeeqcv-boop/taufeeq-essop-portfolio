import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG, type VentureWithMedia } from "@/lib/config";
import { getIcon } from "@/lib/icons";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ventures | Taufeeq Essop - Financial Recovery Architect",
  description:
    "Precision LGS, Glengrove Lodge, Al-Kimya, Al-Ameen Caps. A portfolio of specialized businesses.",
};

const colorToBg: Record<(typeof SITE_CONFIG.ventures)[number]["color"], string> = {
  red: "bg-red-900",
  blue: "bg-blue-900",
  emerald: "bg-emerald-900",
  amber: "bg-amber-900",
};

const LOGO_SIZE = 56;

export default function Ventures() {
  const ventures = SITE_CONFIG.ventures.filter(
    (v) => v.type === "venture"
  ) as VentureWithMedia[];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4">
          Venture Ecosystem
        </h1>
        <p className="text-zinc-400 max-w-2xl mb-12">
          A portfolio of specialized businesses designed to build resilience
          across physical, financial, and biological domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ventures.map((v) => {
            const Icon = getIcon(v.icon);
            const bgClass = colorToBg[v.color];
            return (
              <div
                key={v.id}
                className={`rounded-2xl p-8 text-white ${bgClass} hover:shadow-2xl transition-all border border-[#27272a]`}
              >
                <div className="mb-6 bg-white/10 w-14 h-14 flex items-center justify-center p-3 rounded-xl shrink-0">
                  {v.logo ? (
                    <Image
                      src={v.logo}
                      alt=""
                      width={LOGO_SIZE}
                      height={LOGO_SIZE}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Icon className="w-8 h-8 text-white/90" />
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-1">{v.name}</h3>
                <p className="text-xs uppercase tracking-widest opacity-70 mb-4">
                  {v.type === "venture" ? "Venture" : "Service"}
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">{v.description}</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={v.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white"
                  >
                    Learn more <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  {v.website && (
                    <a
                      href={v.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white"
                    >
                      Visit site <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
