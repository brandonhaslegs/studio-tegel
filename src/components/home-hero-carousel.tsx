"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { colorForProject } from "@/lib/project-colors";
import { SiteImage } from "@/components/site-image";

type Slide = {
  alt: string;
  slug: string;
  src: string;
};

export function HomeHeroCarousel({ slides }: { slides: Slide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setActiveIndex((index) => (index + 1) % slides.length), 5000);
    return () => window.clearInterval(interval);
  }, [slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <section className="relative min-h-[75svh] bg-ink text-ink" data-header-blend-hero>
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.div className="absolute inset-0 bg-paper" animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }} key={activeSlide.src} transition={{ duration: 0.7, ease: [0.2, 0.65, 0.2, 1] }}>
            <SiteImage src={activeSlide.src} alt="" fill priority={activeIndex === 0} sizes="100vw" className="object-cover opacity-35" />
            <div className="absolute inset-0" style={{ backgroundColor: colorForProject(activeSlide.slug), mixBlendMode: "color" }} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="page-grid relative min-h-[75svh] grid-rows-[1fr_auto] pb-7 pt-28 md:pb-10">
        <div className="col-span-12 row-start-1 self-center md:col-span-10">
          <h1 className="headline home-hero-title">Zirkuläres Bauen für die Stadt von morgen.</h1>
          <p className="project-copy mt-8 max-w-md">Wir retten und verbauen bestehende Materialien für maßgefertigte Projekte.</p>
        </div>
        <div className="col-span-5 row-start-2 mt-10 flex items-end gap-2 md:col-span-3" aria-label={`Projektbild ${activeIndex + 1} von ${slides.length}`}>
          {slides.map((slide, index) => <button aria-label={`Projektbild ${index + 1}: ${slide.alt}`} aria-pressed={activeIndex === index} className="flex h-4 w-4 items-center justify-center" key={slide.src} onClick={() => setActiveIndex(index)} type="button"><span className={`block h-2 w-2 rounded-full ${activeIndex === index ? "bg-ink" : "border border-ink"}`} /></button>)}
        </div>
        <Link className="project-copy col-span-7 col-start-6 row-start-2 mt-10 block self-end text-right md:col-span-3 md:col-start-10" href={`/projects/${activeSlide.slug}`}>{activeSlide.alt}</Link>
      </div>
    </section>
  );
}
