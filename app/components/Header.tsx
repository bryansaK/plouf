"use client";

import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-20 w-full bg-black/35 backdrop-blur-md">
      <div className="relative flex items-center px-4 py-3 md:px-6 md:py-4">
        {/* Bouton burger visible uniquement en mobile */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center border-none bg-transparent text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </div>
        </button>

        {/* Titre centré en mobile, à gauche en desktop */}
        <div className="flex-1 md:flex-none md:w-[50%] flex justify-center md:justify-start animate-fade-in">
          <h1 className="ms-0 md:ms-14 text-2xl md:text-3xl font-semibold tracking-[0.25em] md:tracking-[0.35em] bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent uppercase">
            Plouf
          </h1>
        </div>

        {/* Nav desktop (inchangée visuellement) */}
        <nav className="hidden md:flex items-center gap-20">
          {sections.map((section) => (
            <a
              key={section.label}
              href={section.link}
              className="text-sm font-medium text-slate-150 hover:text-slate-50 transition-colors"
            >
              {section.label}
            </a>
          ))}
        </nav>

        {/* Menu mobile déroulant */}
        {open && (
          <div className="absolute inset-x-0 top-full flex flex-col gap-3 rounded-b-lg  px-4 py-3 md:hidden animate-fade-in  bg-black/35 backdrop-blur-md">
            {sections.map((section) => (
              <a
                key={section.label}
                href={section.link}
                className="text-sm font-medium text-slate-150 hover:text-slate-50 transition-colors"
                onClick={() => setOpen(false)}
              >
                {section.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
