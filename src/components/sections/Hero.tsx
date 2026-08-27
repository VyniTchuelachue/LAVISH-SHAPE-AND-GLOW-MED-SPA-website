import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, PhoneCall, Sparkles } from "lucide-react";
import { heroSlides } from "@/data/hero";
import { site } from "@/data/site";

const SLIDE_DURATION = 4200;

export function Hero() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(t);
  }, [next]);

  const slide = heroSlides[index];

  return (
    <section id="accueil" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{
            opacity: 1,
            scale: 1.08,
            transition: {
              opacity: { duration: 0.7, ease: "easeInOut" },
              scale: { duration: SLIDE_DURATION / 1000, ease: "easeOut" },
            },
          }}
          exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.6, ease: "easeIn" } }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
            fetchPriority={index === 0 ? "high" : "auto"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-28 sm:px-10 md:pb-32 lg:px-20">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-light/40 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cream backdrop-blur-sm">
                <Sparkles size={14} className="text-gold-light" />
                {slide.eyebrow}
              </span>
              <h1 className="mt-6 font-display text-3xl leading-[1.15] text-cream text-balance sm:text-4xl md:text-5xl lg:text-[3.4rem]">
                {slide.titleLine2 ? (
                  <>
                    {slide.title}
                    <br />
                    {slide.titleLine2}
                  </>
                ) : (
                  slide.title
                )}
              </h1>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/reservation"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-medium text-ink shadow-lg shadow-gold/30 transition hover:bg-gold-light"
            >
              Prendre rendez-vous
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 font-medium text-cream backdrop-blur-sm transition hover:bg-cream/10"
            >
              <PhoneCall size={16} /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex items-center justify-center gap-6 px-6">
        <button
          aria-label="Visuel précédent"
          onClick={prev}
          className="hidden rounded-full border border-cream/30 p-2 text-cream transition hover:bg-cream/10 sm:flex"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex items-center gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.image}
              aria-label={`Aller au visuel ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-gold-light" : "w-1.5 bg-cream/40 hover:bg-cream/70"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Visuel suivant"
          onClick={next}
          className="hidden rounded-full border border-cream/30 p-2 text-cream transition hover:bg-cream/10 sm:flex"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
