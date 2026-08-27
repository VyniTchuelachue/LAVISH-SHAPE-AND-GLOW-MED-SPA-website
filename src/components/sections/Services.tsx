import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Sparkles, Sun, Flame, Droplets, Zap, HeartPulse, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

const icons = {
  sparkles: Sparkles,
  sun: Sun,
  flame: Flame,
  droplets: Droplets,
  zap: Zap,
  "heart-pulse": HeartPulse,
};

export function Services() {
  return (
    <section id="services" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="rounded-full border border-gold/30 bg-white px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-dark">
            Nos soins signature
          </span>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
            Une peau qui glow, un corps qui se sent bien
          </h2>
          <p className="mt-4 text-ink-soft">
            Des protocoles médico-esthétiques pensés pour des résultats visibles et durables,
            dans un cadre chaleureux, propre et professionnel.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                viewport={{ once: true }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-gold/10 bg-white shadow-sm shadow-ink/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold/90 text-ink backdrop-blur">
                    <Icon size={20} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.description}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-ink-soft">
                        <span className="h-1 w-1 rounded-full bg-gold" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/reservation?service=${encodeURIComponent(s.title)}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark transition group-hover:gap-2.5"
                  >
                    Réserver ce soin <ArrowUpRight size={15} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
