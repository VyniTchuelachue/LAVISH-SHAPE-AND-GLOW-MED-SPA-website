import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { MapPin, PhoneCall, Clock, MessageCircle, CalendarCheck } from "lucide-react";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-20 text-cream sm:py-28">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blush/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="rounded-full border border-gold-light/30 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-light">
            Réserve ta séance
          </span>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-cream sm:text-4xl md:text-5xl">
            Viens vivre l'expérience LAVISH
          </h2>
          <p className="mt-4 text-cream/70">
            Une question, une envie de glow ? Notre équipe à Douala t'accueille avec plaisir.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 lg:col-span-2"
          >
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-cream/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <MapPin className="mt-0.5 shrink-0 text-gold-light" size={20} />
              <div>
                <p className="font-medium text-cream">{site.addressLine}</p>
                <p className="text-sm text-cream/60">{site.plusCode}</p>
              </div>
            </a>

            <a
              href={site.phoneHref}
              className="flex items-start gap-4 rounded-2xl border border-cream/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <PhoneCall className="mt-0.5 shrink-0 text-gold-light" size={20} />
              <div>
                <p className="font-medium text-cream">{site.phoneDisplay}</p>
                <p className="text-sm text-cream/60">Appelle-nous directement</p>
              </div>
            </a>

            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-cream/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <MessageCircle className="mt-0.5 shrink-0 text-gold-light" size={20} />
              <div>
                <p className="font-medium text-cream">WhatsApp</p>
                <p className="text-sm text-cream/60">Réponse rapide, toute la journée</p>
              </div>
            </a>

            <div className="rounded-2xl border border-cream/10 bg-white/5 p-5">
              <div className="mb-3 flex items-center gap-3">
                <Clock className="text-gold-light" size={20} />
                <p className="font-medium text-cream">Horaires d'ouverture</p>
              </div>
              <ul className="space-y-1.5 text-sm">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-cream/70">
                    <span>{h.day}</span>
                    <span className={h.hours === "Fermé" ? "text-cream/40" : "text-cream"}>{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/reservation"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-medium text-ink transition hover:bg-gold-light"
            >
              <CalendarCheck size={18} /> Prendre rendez-vous
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-cream/10 lg:col-span-3"
          >
            <iframe
              title="LAVISH SHAPE & GLOW MED SPA sur Google Maps"
              src={site.mapsEmbedSrc}
              className="h-full min-h-[420px] w-full grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
