"use client";

import Image from "next/image";
import Header from "@/app/components/Header";
import ScrollHint from "@/app/components/ScrollHint";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <section className="relative h-screen">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/divingPicture.avif"
            alt="Fond de plongée"
            fill
            priority
            sizes="100vw"
            quality={100}
            className="object-cover"
          />
        </div>

        {/* Scroll hint */}
        <ScrollHint />
      </section>

      {/* Scroll-animated tech cards */}

      {/* Footer */}
      <footer className="text-center py-12 text-slate-600 text-sm">yikes</footer>
    </div>
  );
}
