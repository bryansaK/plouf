"use client";

import { motion } from "framer-motion";

export default function ScrollHint() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-100 text-[11px] tracking-[0.2em] uppercase flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <motion.div
        className="w-px h-8 bg-gradient-to-b from-slate-100/80 to-slate-100/10 rounded-full"
        animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      />
      Scroll
    </motion.div>
  );
}
