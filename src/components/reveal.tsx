"use client";

import { motion } from "motion/react";

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.7, delay, ease: [0.2, 0.65, 0.2, 1] }}>
      {children}
    </motion.div>
  );
}
