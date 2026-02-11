"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { LucideIcon } from "lucide-react";
import type { VentureColor } from "@/lib/config";

/* Color logic: Crisis Red-600, Construction Blue-500, Wealth Emerald-500, Hospitality Amber-500 */
const colorGradients: Record<VentureColor, string> = {
  red: "from-red-600/15 via-red-900/5 to-transparent",
  blue: "from-blue-500/15 via-blue-900/5 to-transparent",
  emerald: "from-emerald-500/15 via-emerald-900/5 to-transparent",
  amber: "from-amber-500/15 via-amber-900/5 to-transparent",
};

const colorHoverBorder: Record<VentureColor, string> = {
  red: "hover:border-red-600",
  blue: "hover:border-blue-500",
  emerald: "hover:border-emerald-500",
  amber: "hover:border-amber-500",
};

const colorHoverGlow: Record<VentureColor, string> = {
  red: "hover:glow-red",
  blue: "hover:glow-blue",
  emerald: "hover:glow-emerald",
  amber: "hover:glow-amber",
};

export interface BentoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  href?: string;
  color?: VentureColor;
  index?: number;
}

export default function BentoCard({
  title,
  description,
  icon: Icon,
  className,
  href,
  color = "emerald",
  index = 0,
}: BentoCardProps) {
  const gradient = colorGradients[color];
  const hoverBorder = colorHoverBorder[color];
  const glow = colorHoverGlow[color];
  const content = (
    <>
      <div
        className={clsx(
          "absolute inset-0 bg-gradient-to-br opacity-90 pointer-events-none rounded-3xl",
          gradient
        )}
        aria-hidden
      />
      <div className="relative z-10 flex flex-col h-full">
        <div className="p-3 w-fit rounded-xl bg-[#27272a] text-zinc-300 mb-4">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed flex-1">
          {description}
        </p>
      </div>
    </>
  );

  const cardClasses = twMerge(
    "relative overflow-hidden rounded-3xl border border-[length:1px] border-[#27272a] bg-[#18181b] p-6",
    "transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]",
    hoverBorder,
    glow,
    className
  );

  const motionWrapper = (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 + index * 0.05, ease: "easeOut" }}
    >
      {href ? (
        <Link href={href} className={cardClasses}>
          {content}
        </Link>
      ) : (
        <div className={cardClasses}>{content}</div>
      )}
    </motion.div>
  );

  return motionWrapper;
}
