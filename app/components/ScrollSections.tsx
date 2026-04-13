"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    label: "Tailwind CSS",
    color: "from-sky-500 to-cyan-400",
    description:
      "Utility-first CSS framework for building any design, directly in your markup.",
    icon: "🎨",
  },
  {
    label: "Framer Motion",
    color: "from-pink-500 to-rose-400",
    description:
      "A production-ready motion library for React. Animate components with ease.",
    icon: "✨",
  },
  {
    label: "GSAP ScrollTrigger",
    color: "from-green-500 to-emerald-400",
    description:
      "Scroll-driven animations powered by GSAP – smooth, performant, and precise.",
    icon: "🚀",
  },
  {
    label: "React Three Fiber",
    color: "from-violet-500 to-purple-400",
    description:
      "A React renderer for Three.js – build 3D worlds with declarative components.",
    icon: "🌐",
  },
];

export default function ScrollSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.05,
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6">
      <h2 className="text-center text-4xl font-bold text-white mb-4 tracking-tight">
        Tech Stack
      </h2>
      <p className="text-center text-slate-400 mb-16 text-lg max-w-xl mx-auto">
        Scroll down to see each library animated into view with GSAP
        ScrollTrigger.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {sections.map((s, i) => (
          <div
            key={s.label}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className={`rounded-2xl p-8 bg-gradient-to-br ${s.color} shadow-2xl`}
          >
            <div className="text-5xl mb-4">{s.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{s.label}</h3>
            <p className="text-white/80 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
