"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const p = SITE_CONFIG.profile;

export default function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col justify-between rounded-3xl border border-[length:1px] border-[#27272a] bg-[#18181b] p-6 md:p-8 transition-all duration-300 hover:border-zinc-600 hover:-translate-y-1"
    >
      <div>
        <p className="text-zinc-500 text-sm font-mono uppercase tracking-wider mb-3">
          {p.tagline}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5 gap-4 mb-4">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#27272a] overflow-hidden shrink-0 ring-2 ring-transparent hover:ring-zinc-600/50 transition-all duration-300">
            <Image
              src="/taufeeq-essop-profile.png"
              alt={p.name}
              fill
              className="object-cover"
              sizes="96px"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight text-glow">
              {p.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mt-1 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              {p.title}
            </h2>
          </div>
        </div>
        <p className="text-zinc-500 text-sm md:text-base leading-7 max-w-md">
          {p.about}
        </p>
      </div>
      <div className="flex flex-wrap gap-3 mt-8">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl font-medium text-sm shadow-lg shadow-white/10 hover:bg-zinc-200 hover:scale-[1.02] transition-all duration-200"
        >
          <Mail className="w-4 h-4" />
          Get in Touch
        </Link>
        <a
          href={p.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#27272a] text-white border border-[length:1px] border-[#27272a] px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-zinc-700 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-200"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
      </div>
    </motion.div>
  );
}
