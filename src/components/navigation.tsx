"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useLayoutEffect, useState } from "react";
import { StudioTegelMark } from "@/components/studio-tegel-mark";

const links = [{ label: "Projekte", href: "/projects" }, { label: "Studio", href: "/studio" }, { label: "Leistungen", href: "/services" }, { label: "Kontakt", href: "/contact" }];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useLayoutEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 16);
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        updateScrolled();
        window.addEventListener("scroll", updateScrolled, { passive: true });
      });
    });

    setScrolled(false);
    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      window.removeEventListener("scroll", updateScrolled);
    };
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 text-paper mix-blend-difference">
        <nav className="grid grid-cols-2 items-start px-4 py-4 md:grid-cols-6 md:px-8 md:py-6" aria-label="Hauptnavigation">
          <Link href="/" className="block w-fit" aria-label="Studio Tegel, Startseite"><StudioTegelMark className={`h-16 w-11 md:transition-[width,height] md:duration-200 md:ease-out ${scrolled ? "md:h-16 md:w-11" : "md:h-48 md:w-[132px]"}`} /></Link>
          {links.map((link) => <Link aria-current={isActive(link.href) ? "page" : undefined} className={`nav-text hidden justify-self-center hover:underline md:block ${isActive(link.href) ? "border-b border-current pb-1" : ""}`} href={link.href} key={link.href}>{link.label}</Link>)}
          <a className="nav-text hidden justify-self-end hover:underline md:block" href="https://www.instagram.com/studio_tegel/" rel="noreferrer" target="_blank">Instagram</a>
          <button className="nav-text justify-self-end md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation">{open ? "Schließen" : "Menü"}</button>
        </nav>
      </header>
      <AnimatePresence>
        {open && <motion.div id="mobile-navigation" initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.35, ease: [0.2, 0.65, 0.2, 1] }} className="fixed inset-0 z-40 flex min-h-svh flex-col bg-paper px-4 pb-8 pt-24 text-ink">
          <div className="flex flex-col gap-1">{links.map((link) => <Link aria-current={isActive(link.href) ? "page" : undefined} onClick={() => setOpen(false)} className={`headline mobile-nav-item border-t border-ink py-2 ${isActive(link.href) ? "bg-ink text-paper" : ""}`} href={link.href} key={link.href}>{link.label}</Link>)}</div>
          <div className="mt-auto flex items-end justify-between border-t border-ink pt-4"><p className="project-copy">Maßgefertigte Innenräume und Möbel aus Berlin.</p><div className="flex shrink-0 items-center gap-4"><a className="nav-text whitespace-nowrap underline underline-offset-4" href="mailto:team@studiotegel.de">E-Mail</a><a className="nav-text whitespace-nowrap underline underline-offset-4" href="https://www.instagram.com/studio_tegel/" rel="noreferrer" target="_blank">Instagram</a></div></div>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}
