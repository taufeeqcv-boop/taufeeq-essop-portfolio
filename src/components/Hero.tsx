"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldAlert, TrendingUp, HeartHandshake } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a] pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0a1220] to-black opacity-90 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#10b981] uppercase tracking-[0.2em] text-sm font-bold">
            The Financial Recovery Architect
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
            Secure Your Wealth. <br />
            <span className="text-gray-400 italic">Sustain Your Recovery.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Holistic Financial Planning & Recovery Coaching for Life&apos;s
            Toughest Transitions. Bridging the gap between financial advice,
            addiction, and gambling recovery.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Link href="/contact?type=crisis">
            <motion.div
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl bg-white/5 border border-red-500/30 hover:border-red-500/60 transition-all cursor-pointer backdrop-blur-sm"
            >
              <ShieldAlert className="w-12 h-12 text-red-500 mb-4 mx-auto" />
              <h3 className="text-white font-bold text-xl">
                I am in Financial Crisis (Addiction/Gambling)
              </h3>
              <p className="text-gray-400 text-sm mt-2 group-hover:text-white transition-colors">
                Immediate Rehab Funding & Debt Triage
              </p>
            </motion.div>
          </Link>

          <Link href="/contact?type=wealth">
            <motion.div
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl bg-white/5 border border-blue-500/30 hover:border-blue-500/60 transition-all cursor-pointer backdrop-blur-sm"
            >
              <TrendingUp className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-white font-bold text-xl">
                I am looking for Wealth Management
              </h3>
              <p className="text-gray-400 text-sm mt-2 group-hover:text-white transition-colors">
                Investment, Estate & Risk Planning
              </p>
            </motion.div>
          </Link>

          <Link href="/contact?type=recovery">
            <motion.div
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl bg-white/5 border border-[#10b981]/30 hover:border-[#10b981]/60 transition-all cursor-pointer backdrop-blur-sm"
            >
              <HeartHandshake className="w-12 h-12 text-[#10b981] mb-4 mx-auto" />
              <h3 className="text-white font-bold text-xl">
                I am building my Recovery
              </h3>
              <p className="text-gray-400 text-sm mt-2 group-hover:text-white transition-colors">
                Sober Budgeting & Accountability
              </p>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
