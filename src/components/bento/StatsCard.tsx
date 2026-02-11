"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";

const stats = [
  {
    label: "Absa Top 10 Trending Young Entrepreneur",
    icon: Award,
  },
  {
    label: "Sanlam League of Champions (4x)",
    icon: Trophy,
  },
  {
    label: "Airbnb Superhost (4.8+ Rating)",
    icon: Star,
  },
];

export default function StatsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
      className="rounded-3xl border border-[length:1px] border-[#27272a] bg-[#18181b] p-6 transition-all duration-300 hover:border-zinc-600 hover:-translate-y-1"
    >
      <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-4">
        Accolades
      </h3>
      <ul className="space-y-3">
        {stats.map(({ label, icon: Icon }) => (
          <li key={label} className="flex items-start gap-3 text-sm">
            <span className="mt-0.5 p-1.5 rounded-lg bg-[#27272a] text-zinc-400 shrink-0">
              <Icon className="w-4 h-4" />
            </span>
            <span className="text-zinc-300 leading-snug">{label}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
