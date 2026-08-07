"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const links = [{ label: "Projekte", href: "/projects" }, { label: "Studio", href: "/studio" }, { label: "Leistungen", href: "/services" }, { label: "Kontakt", href: "/contact" }];

function StudioTegelMark() {
  return (
    <svg aria-hidden="true" className="block h-16 w-11" viewBox="0 0 33 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 19.3239H3.852C6.66481 19.3239 7.62347 21.9804 7.62347 24.3886V28.4446C7.62347 30.8543 6.66833 33.6039 3.852 33.6039H0V19.3239ZM2.64997 30.9639H3.216C4.392 30.9639 4.80347 30.0926 4.80347 28.4446V24.3886C4.80347 22.7406 4.392 21.9639 3.216 21.9639H2.64997V30.9639Z" fill="currentColor" />
      <path d="M24.728 10.872V0.119995H27.548V10.872C27.548 11.3823 27.9853 11.76 28.484 11.76C29.0008 11.76 29.408 11.399 29.408 10.872V0.119995H32.228V10.872C32.228 13.0236 30.6457 14.52 28.484 14.52C26.3458 14.52 24.728 12.9867 24.728 10.872Z" fill="currentColor" />
      <path d="M14.764 14.4V2.76H12.544V0.119995H19.804V2.76H17.584V14.4H14.764Z" fill="currentColor" />
      <path d="M4.488 4.404V3.564C4.488 2.788 4.228 2.4 3.708 2.4C3.15331 2.4 2.93169 2.90626 2.93238 3.41761C2.93377 4.44958 3.8943 5.20826 4.596 5.832C5.33211 6.49995 6.05944 7.20469 6.684 7.98C7.38644 8.90044 7.62 9.65694 7.62 10.692C7.62 12.9313 6.08182 14.52 3.768 14.52C1.42057 14.52 0 13.0044 0 10.644V9.384H2.64V10.656C2.64 11.3646 2.92905 12.12 3.744 12.12C4.39002 12.12 4.72676 11.6044 4.788 10.992C4.90272 9.7301 3.91792 9.03059 3.06 8.268C2.612 7.868 2.22 7.504 1.884 7.176C0.892675 6.16049 0.120001 4.97805 0.120001 3.504C0.120001 1.4307 1.51292 0 3.66 0C5.72635 0 7.128 1.20059 7.128 3.348V4.404H4.488Z" fill="currentColor" />
      <path d="M28.7672 47.1257V38.5448H30.4617V45.5393H32.2284V47.1257H28.7672Z" fill="currentColor" />
      <path d="M26.4451 47.1257H22.8397V38.5448H26.4091V40.1312H24.5342V41.768H26.2648V43.3544H24.5342V45.5393H26.4451V47.1257Z" fill="currentColor" />
      <path d="M10.1831 47.1258H6.5777V38.5448H10.1471V40.1312H8.27226V41.7681H10.0029V43.3545H8.27226V45.5394H10.1831V47.1258Z" fill="currentColor" />
      <path d="M1.33402 47.1258V40.1312H0V38.5448H4.3626V40.1312H3.02858V47.1258H1.33402Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M28.4716 19.2635C30.6097 19.2635 32.2284 20.7973 32.2284 22.912V30.0155C32.2284 32.167 30.6458 33.6638 28.4843 33.6639C26.3461 33.6639 24.7284 32.1302 24.7284 30.0155V22.912C24.7284 20.7605 26.3101 19.2637 28.4716 19.2635ZM28.4716 22.0243C27.9549 22.0245 27.5477 22.3851 27.5477 22.912V30.0155C27.5477 30.5258 27.9855 30.9042 28.4843 30.9042C29.001 30.904 29.4081 30.5424 29.4081 30.0155V22.912C29.4081 22.4017 28.9703 22.0243 28.4716 22.0243Z" fill="currentColor" />
      <path d="M19.8041 21.9633H17.5844V30.9633H19.8041V33.6039H12.5444V30.9633H14.7641V21.9633H12.5444V19.3237H19.8041V21.9633Z" fill="currentColor" />
      <path d="M16.5232 38.4728C18.3392 38.473 19.9664 39.7257 20.333 41.4915H18.5834C18.3023 40.6298 17.411 40.1312 16.5232 40.1311C15.0223 40.1311 14.0924 41.4594 14.0924 42.85C14.0925 44.2653 15.0722 45.5397 16.53 45.5397C17.5202 45.5397 18.4352 44.9592 18.7293 44.0031H16.53V42.561H20.5179V43.0436C20.5177 45.6127 18.5778 47.1978 16.4726 47.1979C14.0865 47.1979 12.3982 45.103 12.3981 42.8354C12.3981 40.5151 14.1637 38.4728 16.5232 38.4728Z" fill="currentColor" />
    </svg>
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference text-paper">
      <nav className="relative z-10 grid grid-cols-2 items-start px-4 py-4 md:grid-cols-6 md:px-8 md:py-6" aria-label="Hauptnavigation">
        <Link href="/" className="block w-fit" aria-label="Studio Tegel, Startseite"><StudioTegelMark /></Link>
        {links.map((link) => <Link className="nav-text hidden justify-self-center transition-opacity hover:opacity-50 md:block" href={link.href} key={link.href}>{link.label}</Link>)}
        <a className="nav-text hidden justify-self-end transition-opacity hover:opacity-50 md:block" href="https://www.instagram.com/studio_tegel/" rel="noreferrer" target="_blank">Instagram</a>
        <button className="nav-text justify-self-end md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation">{open ? "Schließen" : "Menü"}</button>
      </nav>
      <AnimatePresence>
        {open && <motion.div id="mobile-navigation" initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.35, ease: [0.2, 0.65, 0.2, 1] }} className="fixed inset-0 z-0 flex min-h-svh flex-col bg-paper px-4 pb-8 pt-24 text-ink">
          <div className="flex flex-col gap-1">{links.map((link) => <Link onClick={() => setOpen(false)} className="headline border-t border-ink/20 py-2" href={link.href} key={link.href}>{link.label}</Link>)}</div>
          <div className="mt-auto flex items-end justify-between border-t border-ink/20 pt-4"><p className="project-copy max-w-[14ch] text-ink/65">Maßgefertigte Innenräume und Möbel aus Berlin.</p><div className="flex flex-col items-end gap-2"><a className="nav-text underline underline-offset-4" href="mailto:team@studiotegel.de">E-Mail</a><a className="nav-text underline underline-offset-4" href="https://www.instagram.com/studio_tegel/" rel="noreferrer" target="_blank">Instagram</a></div></div>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
