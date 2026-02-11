"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";
import { getIcon } from "@/lib/icons";

export default function AccoladesCard() {
  const accolades = SITE_CONFIG.accolades;

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {accolades.map(({ label, sub, icon: iconName }) => {
          const Icon = getIcon(iconName);
          return (
            <div
              key={label}
              className="flex items-start gap-3 text-sm min-w-0 p-2 rounded-lg -mx-1 border-l-2 border-transparent hover:bg-white/[0.03] hover:border-zinc-600 transition-colors duration-200"
            >
              <span className="mt-0.5 p-1.5 rounded-lg bg-[#27272a] text-zinc-400 shrink-0">
                <Icon className="w-4 h-4" />
              </span>
              <div className="min-w-0 flex-1 overflow-hidden">
                <span className="font-medium text-white block truncate">{label}</span>
                <span className="text-zinc-500 text-xs line-clamp-2">{sub}</span>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
