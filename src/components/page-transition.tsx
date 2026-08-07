"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <>{children}</>;

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-12vh" }}
        initial={{ opacity: 0, y: "100vh" }}
        key={pathname}
        transition={{ duration: 0.65, ease: [0.2, 0.65, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
