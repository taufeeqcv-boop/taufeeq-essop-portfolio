"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert, ChevronRight } from "lucide-react";

export default function CrisisCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
    >
      <Link
        href="/contact"
        className="group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-[length:1px] border-[#27272a] bg-gradient-to-br from-red-950 to-black p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-red-600/60 hover:glow-red"
      >
        {/* Large background icon, 20% opacity, subtle pulse */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none rounded-3xl"
          aria-hidden
        >
          <ShieldAlert className="w-32 h-32 md:w-40 md:h-40 text-red-600 opacity-20 animate-pulse" />
        </div>
        <div className="relative z-10">
          <span className="text-xs font-mono uppercase tracking-wider text-red-400/90 mb-2 block">
            Crisis Interceptor
          </span>
          <p className="text-white font-semibold text-lg flex items-center gap-1">
            Initiate Protocol
            <ChevronRight className="w-5 h-5 text-red-400 group-hover:translate-x-0.5 transition-transform" />
          </p>
          <p className="text-red-200/80 text-sm mt-1">
            Emergency financial triage
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
