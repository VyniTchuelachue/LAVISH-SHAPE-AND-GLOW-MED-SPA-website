import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function PrimeBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gold via-gold-light to-blush py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-ink/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-ink backdrop-blur-sm">
          <Sparkles size={14} />
          Offre du moment
        </span>
        <h2 className="font-display text-3xl leading-tight text-ink text-balance sm:text-4xl md:text-5xl">
          On te fais vivre ton prime maintenant
        </h2>
        <p className="max-w-xl text-ink-soft">
          Ne remets plus ton glow à demain. Réserve ta séance aujourd'hui et profite de
          l'expérience MAISON LAVISH dès maintenant.
        </p>
        <Link
          to="/reservation"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 font-medium text-cream shadow-lg shadow-ink/30 transition hover:bg-ink-soft"
        >
          Je réserve maintenant
        </Link>
      </motion.div>
    </section>
  );
}
