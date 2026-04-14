"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { link } from "fs";
import { li } from "framer-motion/client";


const sections = [
  {
    label: "Découvrir la plongée",
    link: "#discover"
  },
  {
    label: "Les meilleurs destinations",
    link: "#destinations"
  },
  {
    label: "S'informer sur le matériel",
    link: "#equipment"
  },
  {
    label: "Nous contacter",
    link: "#contact",

  },
];

export default function Header() {
  return (
    <div className="w-full fixed top-0 left-0 z-20 flex p-4 bg-black/35 backdrop-blur-md flex">
      <div className=" flex w-[40%] animate-fade-in">
        <h1 className="ms-12 text-3xl font-semibold tracking-[0.35em] bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent uppercase">
          Plouf
        </h1>
      </div>
      <nav className="ms-50 flex items-center gap-20">
        {sections.map((section) => (
          <a
            key={section.label}
            href={`#${section.label.toLowerCase().replace(/\s/g, "-")}`}
            className="text-sm font-medium text-slate-150 hover:text-slate-50 transition-colors"
          >
            {section.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
