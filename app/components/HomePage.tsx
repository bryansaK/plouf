"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/app/components/Header";

/**
 * Composant principal de la page d'accueil.
 * Assemble la scène 3D en arrière-plan, les animations d'entrée Framer Motion
 * et la section défilante avec GSAP ScrollTrigger.
 */
export default function HomePage() {
  return (
    <div className="relative min-h-screen  overflow-x-hidden">
      <Header />
      <section className="relative h-screen">
        <motion.div
          className="absolute inset-0 -z-10 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/divingPicture.avif"
            alt="Fond de plongée"
            fill
            priority
            sizes="100vw"
            quality={100}
            className="object-cover"
          />
        </motion.div>

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

      {/* Footer */}
      <footer className="text-center py-12 text-slate-600 text-sm">
        yikes
      </footer>
    </div>
  );
}
