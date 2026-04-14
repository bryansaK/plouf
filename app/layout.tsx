import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plouf – TypeScript · Tailwind · Framer Motion · GSAP · R3F",
  description:
    "A modern stack demo: TypeScript, Tailwind CSS, Framer Motion, GSAP ScrollTrigger, and React Three Fiber",
};

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${playfair.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
