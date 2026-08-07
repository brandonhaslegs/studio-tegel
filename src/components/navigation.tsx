"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const links = [{ label: "Projekte", href: "/projects" }, { label: "Studio", href: "/studio" }, { label: "Leistungen", href: "/services" }, { label: "Kontakt", href: "/contact" }];

export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-ink">
      <nav className="relative z-10 grid grid-cols-2 items-start px-4 py-4 md:grid-cols-6 md:px-8 md:py-6" aria-label="Hauptnavigation">
        <Link href="/" className="text-[0.82rem] font-medium tracking-[-0.045em] md:text-[clamp(1.05rem,1.6vw,1.65rem)] md:tracking-[-0.04em]">STUDIO TEGEL</Link>
        {links.map((link) => <Link className="hidden justify-self-center text-[clamp(1.05rem,1.6vw,1.65rem)] leading-none tracking-[-0.04em] transition-opacity hover:opacity-50 md:block" href={link.href} key={link.href}>{link.label}</Link>)}
        <a className="hidden justify-self-end text-[clamp(1.05rem,1.6vw,1.65rem)] leading-none tracking-[-0.04em] transition-opacity hover:opacity-50 md:block" href="https://www.instagram.com/studio_tegel/" rel="noreferrer" target="_blank">Instagram</a>
        <button className="eyebrow justify-self-end md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation">{open ? "Schließen" : "Menü"}</button>
      </nav>
      <AnimatePresence>
        {open && <motion.div id="mobile-navigation" initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.35, ease: [0.2, 0.65, 0.2, 1] }} className="fixed inset-0 z-0 flex min-h-svh flex-col bg-paper px-4 pb-8 pt-24 text-ink">
          <div className="flex flex-col gap-1">{links.map((link, index) => <Link onClick={() => setOpen(false)} className="display-medium border-t border-line py-2" href={link.href} key={link.href}><span className="mr-3 align-top font-sans text-[0.75rem] tracking-normal">0{index + 1}</span>{link.label}</Link>)}</div>
          <div className="mt-auto flex items-end justify-between border-t border-line pt-4"><p className="eyebrow max-w-[14ch] text-stone">Maßgefertigte Innenräume und Möbel aus Berlin.</p><div className="flex flex-col items-end gap-2"><a className="eyebrow underline underline-offset-4" href="mailto:team@studiotegel.de">E-Mail</a><a className="eyebrow underline underline-offset-4" href="https://www.instagram.com/studio_tegel/" rel="noreferrer" target="_blank">Instagram</a></div></div>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
