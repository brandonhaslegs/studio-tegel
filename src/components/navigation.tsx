"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { StudioTegelMark } from "@/components/studio-tegel-mark";

const links = [{ label: "Projekte", href: "/projects" }, { label: "Studio", href: "/studio" }, { label: "Leistungen", href: "/services" }, { label: "Kontakt", href: "/contact" }];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
        <nav className="grid grid-cols-2 items-start px-4 py-4 md:grid-cols-6 md:px-8 md:py-6" aria-label="Hauptnavigation">
          <Link href="/" className="block w-fit" aria-label="Studio Tegel, Startseite"><StudioTegelMark className="h-16 w-11" /></Link>
          {links.map((link) => <Link className="nav-text hidden justify-self-center transition-opacity hover:opacity-50 md:block" href={link.href} key={link.href}>{link.label}</Link>)}
          <a className="nav-text hidden justify-self-end transition-opacity hover:opacity-50 md:block" href="https://www.instagram.com/studio_tegel/" rel="noreferrer" target="_blank">Instagram</a>
          <button className="nav-text justify-self-end md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation">{open ? "Schließen" : "Menü"}</button>
        </nav>
      </header>
      <AnimatePresence>
        {open && <motion.div id="mobile-navigation" initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.35, ease: [0.2, 0.65, 0.2, 1] }} className="fixed inset-0 z-40 flex min-h-svh flex-col bg-paper px-4 pb-8 pt-24 text-ink">
          <div className="flex flex-col gap-1">{links.map((link) => <Link onClick={() => setOpen(false)} className="headline mobile-nav-item border-t border-ink/20 py-2" href={link.href} key={link.href}>{link.label}</Link>)}</div>
          <div className="mt-auto flex items-end justify-between border-t border-ink/20 pt-4"><p className="project-copy text-ink/65">Maßgefertigte Innenräume und Möbel aus Berlin.</p><div className="flex shrink-0 items-center gap-4"><a className="nav-text whitespace-nowrap underline underline-offset-4" href="mailto:team@studiotegel.de">E-Mail</a><a className="nav-text whitespace-nowrap underline underline-offset-4" href="https://www.instagram.com/studio_tegel/" rel="noreferrer" target="_blank">Instagram</a></div></div>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}
