"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Ventures", href: "/ventures" },
];

export default function QuickLinksCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
      className="rounded-3xl border border-[length:1px] border-[#27272a] bg-[#18181b] p-6 transition-all duration-300 hover:border-zinc-600 hover:-translate-y-1"
    >
      <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-4">
        Quick Links
      </h3>
      <ul className="space-y-2">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex items-center justify-between text-sm text-zinc-300 hover:text-white transition-colors group"
            >
              {label}
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
