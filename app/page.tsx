"use client";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Header from "@/app/components/Header";
import ScrollHint from "@/app/components/ScrollHint";
import { HomePageCard, StepContent } from "./components/HomePageCard";

const steps: (StepContent & { image: string })[] = [
  {
    image: "/divingPicture.avif",
    subtitle: "1 - Près de chez vous",
    text: "Découvrez les clubs de plongée locaux, leurs offres et événements à venir.",
    link: "#discover",
  },
  {
    image: "/divingPicture2.jpeg",
    subtitle: "2 - Matériel nécessaire",
    text: "Explorez notre guide complet du matériel de plongée pour débutants et experts.",
    link: "#explore",
  },
  {
    image: "/divingPicture3.jpg",
    subtitle: "3 - Vous inscrire chez nos partenaires",
    text: "Rejoignez nos clubs partenaires et profitez d'avantages exclusifs.",
    link: "#signup",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const lastScrollRef = useRef(0);

  const handleWheel = useCallback(
    (event: React.WheelEvent<HTMLElement>) => {
      const now = Date.now();
      if (now - lastScrollRef.current < 400) return;

      if (event.deltaY > 0 && index < steps.length - 1) {
        setIndex((i) => Math.min(i + 1, steps.length - 1));
        lastScrollRef.current = now;
      } else if (event.deltaY < 0 && index > 0) {
        setIndex((i) => Math.max(i - 1, 0));
        lastScrollRef.current = now;
      }
    },
    [index]
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <section
        className="relative h-screen flex items-center justify-center"
        onWheel={handleWheel}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={steps[index].image}
            className="absolute inset-0 -z-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={steps[index].image}
              alt="Fond de plongée"
              fill
              priority
              sizes="100vw"
              quality={100}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <HomePageCard className="" step={index} />
        {/* Scroll hint */}
        <ScrollHint />
      </section>

      {/* Scroll-animated tech cards */}

      {/* Footer */}
    </div>
  );
}
