"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { LucideIcon } from "lucide-react";
import type { VentureColor } from "@/lib/config";

/* Color logic: Crisis Red, Construction Blue, Al-Kimya Emerald, Glengrove Amber, Al-Ameen Violet */
const colorGradients: Record<VentureColor, string> = {
  red: "from-red-600/15 via-red-900/5 to-transparent",
  blue: "from-blue-500/15 via-blue-900/5 to-transparent",
  emerald: "from-emerald-500/15 via-emerald-900/5 to-transparent",
  amber: "from-amber-500/15 via-amber-900/5 to-transparent",
  violet: "from-violet-500/15 via-violet-900/5 to-transparent",
};

const colorHoverBorder: Record<VentureColor, string> = {
  red: "hover:border-red-600",
  blue: "hover:border-blue-500",
  emerald: "hover:border-emerald-500",
  amber: "hover:border-amber-500",
  violet: "hover:border-violet-500",
};

const colorHoverGlow: Record<VentureColor, string> = {
  red: "hover:glow-red",
  blue: "hover:glow-blue",
  emerald: "hover:glow-emerald",
  amber: "hover:glow-amber",
  violet: "hover:glow-violet",
};

export interface BentoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  href?: string;
  color?: VentureColor;
  index?: number;
  /** Path under public/ (e.g. /logos/glengrove.png). When set, shown instead of icon. */
  logo?: string;
  /** External URL; when set, card links here (opens in new tab) instead of href. */
  website?: string;
}

export default function BentoCard({
  title,
  description,
  icon: Icon,
  className,
  href,
  color = "emerald",
  index = 0,
  logo,
  website,
}: BentoCardProps) {
  const gradient = colorGradients[color];
  const hoverBorder = colorHoverBorder[color];
  const glow = colorHoverGlow[color];
  const cardHref = website ?? href;
  const isExternal = Boolean(website);
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = logo && !logoFailed;

  const cardClasses = twMerge(
    "relative overflow-hidden rounded-3xl border border-[length:1px] border-[#27272a] bg-[#18181b] p-6",
    "transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]",
    hoverBorder,
    glow,
    className
  );

  const cardInner = (
    <>
      <div
        className={clsx(
          "p-3 rounded-xl bg-[#27272a] text-zinc-300 mb-4 flex items-center justify-center shrink-0",
          showLogo ? "h-24 w-32" : "w-24 h-24"
        )}
      >
        {showLogo ? (
          <Image
            src={logo}
            alt=""
            width={128}
            height={96}
            className="w-full h-full object-fill"
            onError={() => setLogoFailed(true)}
            unoptimized
          />
        ) : (
          <Icon className="w-12 h-12" />
        )}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed flex-1">
        {description}
      </p>
    </>
  );

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
        {cardInner}
      </div>
    </>
  );

  const motionWrapper = (
    <motion.div
      className="h-full flex flex-col min-h-0"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 + index * 0.05, ease: "easeOut" }}
    >
      {cardHref ? (
        isExternal ? (
          <a
            href={cardHref}
            target="_blank"
            rel="noopener noreferrer"
            className={twMerge(cardClasses, "h-full flex flex-col")}
          >
            {content}
          </a>
        ) : (
          <Link href={cardHref} className={twMerge(cardClasses, "h-full flex flex-col")}>
            {content}
          </Link>
        )
      ) : (
        <div className={twMerge(cardClasses, "h-full flex flex-col")}>{content}</div>
      )}
    </motion.div>
  );

  return motionWrapper;
}
