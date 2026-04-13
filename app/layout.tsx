import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plouf – TypeScript · Tailwind · Framer Motion · GSAP · R3F",
  description:
    "A modern stack demo: TypeScript, Tailwind CSS, Framer Motion, GSAP ScrollTrigger, and React Three Fiber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
