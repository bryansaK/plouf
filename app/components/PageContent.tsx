"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Suspense } from "react";
import ScrollSections from "./ScrollSections";

const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false });

import type { Variants } from "framer-motion";

/**
 * Variantes d'animation Framer Motion pour un effet d'apparition vers le haut.
 * Le paramètre personnalisé `i` permet de décaler l'animation de chaque élément.
 */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const badges = [
  { label: "TypeScript", bg: "bg-blue-600" },
  { label: "Tailwind CSS", bg: "bg-cyan-600" },
  { label: "Framer Motion", bg: "bg-pink-600" },
  { label: "GSAP", bg: "bg-green-600" },
  { label: "React Three Fiber", bg: "bg-violet-600" },
];

/**
 * Composant principal de la page d'accueil.
 * Assemble la scène 3D en arrière-plan, les animations d'entrée Framer Motion
 * et la section défilante avec GSAP ScrollTrigger.
 */
export default function PageContent() {
  return (
    <div className="min-h-screen bg-[#050510] overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        {/* 3D background canvas */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={null}>
            <ThreeScene />
          </Suspense>
        </div>

        {/* Hero text */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-indigo-400 font-semibold tracking-widest uppercase text-sm"
          >
            Welcome to Plouf
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-7xl font-extrabold text-white leading-tight tracking-tight"
          >
            Make it{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              plouf
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-lg text-slate-400 text-lg leading-relaxed"
          >
            A modern stack demo combining TypeScript, Tailwind CSS, Framer
            Motion, GSAP ScrollTrigger, and React Three Fiber.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-3 mt-2"
          >
            {badges.map((b) => (
              <span
                key={b.label}
                className={`${b.bg} text-white text-xs font-semibold px-3 py-1.5 rounded-full`}
              >
                {b.label}
              </span>
            ))}
          </motion.div>

          <motion.a
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            href="#stack"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 transition-colors shadow-lg shadow-indigo-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore the stack
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 text-xs flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-0.5 h-8 bg-slate-600 rounded"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
          scroll
        </motion.div>
      </section>

      {/* Scroll-animated tech cards */}
      <div id="stack">
        <ScrollSections />
      </div>

      {/* Footer */}
      <footer className="text-center py-12 text-slate-600 text-sm">
        Built with Next.js · TypeScript · Tailwind · Framer Motion · GSAP ·
        React Three Fiber
      </footer>
    </div>
  );
}
