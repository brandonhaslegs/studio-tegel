"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const links = [{ label: "Projects", href: "/projects" }, { label: "Studio", href: "/studio" }, { label: "Services", href: "/services" }, { label: "Contact", href: "/contact" }];

export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-multiply">
      <nav className="flex items-center justify-between px-4 py-4 md:px-8 md:py-6" aria-label="Main navigation">
        <Link href="/" className="text-[0.82rem] font-medium tracking-[-0.045em]">STUDIO TEGEL</Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => <Link className="eyebrow transition-opacity hover:opacity-50" href={link.href} key={link.href}>{link.label}</Link>)}
        </div>
        <button className="eyebrow md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation">{open ? "Close" : "Menu"}</button>
      </nav>
      <AnimatePresence>
        {open && <motion.div id="mobile-navigation" initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.35 }} className="absolute inset-x-0 top-0 -z-10 bg-paper px-4 pb-10 pt-20">
          <div className="flex flex-col gap-3">{links.map((link) => <Link onClick={() => setOpen(false)} className="display-medium" href={link.href} key={link.href}>{link.label}</Link>)}</div>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
