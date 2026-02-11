"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert, ChevronRight } from "lucide-react";

export default function CrisisCard() {
  return (
    <motion.div
      className="h-full flex flex-col min-h-0"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
    >
      <Link
        href="/contact"
        className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-[length:1px] border-[#27272a] bg-gradient-to-br from-red-950 to-black p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-red-600/60 hover:glow-red"
      >
        <div className="relative z-10 flex flex-col h-full">
          <div className="p-3 w-14 h-14 rounded-xl bg-[#27272a] text-red-400 flex items-center justify-center mb-4 shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-1">
            Crisis Interceptor
            <ChevronRight className="w-5 h-5 text-red-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </h3>
          <p className="text-sm text-red-200/80 leading-relaxed flex-1">
            Emergency financial triage
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
