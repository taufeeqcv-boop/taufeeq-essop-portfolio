import type { Metadata } from "next";
import { Hammer, Home, Activity, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Ventures | Taufeeq Essop - Financial Recovery Architect",
  description:
    "Precision LGS, Glengrove Lodge, Al-Kimya, Al-Ameen Caps. A portfolio of specialized businesses.",
};

const ventures = [
  {
    title: "Precision LGS",
    role: "Co-Founder",
    desc: "Light Gauge Steel (LGS) construction technology specializing in rapid Garden Cottage deployment for rental income. Turn your backyard into income in 4 weeks.",
    icon: <Hammer className="w-8 h-8 text-[#10b981]" />,
    color: "bg-slate-900",
  },
  {
    title: "Glengrove Lodge",
    role: "Owner",
    desc: "Premium short-term rental and hospitality. Little Explorers touring division for family travel. Airbnb Superhost.",
    icon: <Home className="w-8 h-8 text-orange-400" />,
    color: "bg-orange-900",
  },
  {
    title: "Al-Kimya",
    role: "Founder",
    desc: "Metabolic psychiatry & integrative recovery. Combining ketogenic protocols with clinical therapy and somatic tools for relapse prevention.",
    icon: <Activity className="w-8 h-8 text-blue-400" />,
    color: "bg-blue-900",
  },
  {
    title: "Al-Ameen Caps",
    role: "Director",
    desc: "Artisan export division manufacturing luxury ceremonial headwear (Azhari, Na'lain Pak) for the global diaspora.",
    icon: <Globe className="w-8 h-8 text-purple-400" />,
    color: "bg-purple-900",
  },
];

export default function Ventures() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-[#0f172a] mb-4">
          Venture Ecosystem
        </h1>
        <p className="text-gray-600 max-w-2xl mb-12">
          A portfolio of specialized businesses designed to build resilience
          across physical, financial, and biological domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ventures.map((v, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 text-white ${v.color} hover:shadow-2xl transition-all`}
            >
              <div className="mb-6 bg-white/10 w-fit p-3 rounded-xl">
                {v.icon}
              </div>
              <h3 className="text-2xl font-bold mb-1">{v.title}</h3>
              <p className="text-xs uppercase tracking-widest opacity-70 mb-4">
                {v.role}
              </p>
              <p className="text-gray-300 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
