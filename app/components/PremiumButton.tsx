"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PremiumButtonProps {
  href?: string;
  children: ReactNode;
  className?: string;
}

export function PremiumButton({ href, children, className = "" }: PremiumButtonProps) {
  const baseClasses =
    "relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 text-slate-900 text-sm font-semibold shadow-[0_0_24px_rgba(34,211,238,0.6)] hover:shadow-[0_0_34px_rgba(34,211,238,0.9)] overflow-hidden";

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="pointer-events-none absolute inset-0 -translate-x-1/2 bg-white/30 blur-2xl"
        initial={{ x: "-120%", opacity: 0 }}
        whileHover={{ x: "120%", opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <span className="relative z-10 text-xs text-slate-900/80">➜</span>
    </>
  );

  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag
      href={href}
      type={href ? undefined : "button"}
      className={`${baseClasses} ${className}`}
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {content}
    </MotionTag>
  );
}
