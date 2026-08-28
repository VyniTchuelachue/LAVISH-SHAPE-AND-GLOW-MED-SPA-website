import { motion } from "motion/react";
import logo from "@/assets/images/logo.webp";

export function LogoLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-cream"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(182,138,78,0.12),transparent_60%)]" />

      <motion.img
        src={logo}
        alt="Maison Lavish"
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-28 w-auto sm:h-32"
      />

      <div className="relative h-[2px] w-32 overflow-hidden rounded-full bg-gold/15">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut", delay: 0.15 }}
          style={{ transformOrigin: "left" }}
          className="h-full w-full bg-gold"
        />
      </div>
    </motion.div>
  );
}
