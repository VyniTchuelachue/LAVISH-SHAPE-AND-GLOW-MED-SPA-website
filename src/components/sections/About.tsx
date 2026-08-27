import { motion } from "motion/react";
import { ShieldCheck, Gem, HeartHandshake, Users } from "lucide-react";
import reception from "@/assets/images/lavish-reception.webp";
import wallReception from "@/assets/images/lavish-wall-reception.webp";
import careRoom from "@/assets/images/care-room.webp";

const points = [
  {
    icon: Gem,
    title: "Institut haut de gamme",
    text: "Un cadre lavish, propre et pensé pour ton confort, dès l'accueil.",
  },
  {
    icon: ShieldCheck,
    title: "Équipements médicaux",
    text: "Technologies laser & esthétiques certifiées, protocoles sécurisés.",
  },
  {
    icon: Users,
    title: "Géré par une femme",
    text: "Une équipe attentive, professionnelle et à ton écoute.",
  },
  {
    icon: HeartHandshake,
    title: "Résultats qui parlent",
    text: "4,7/5 sur Google, une clientèle fidèle depuis l'ouverture.",
  },
];

export function About() {
  return (
    <section id="a-propos" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <img
              src={reception}
              alt="Réception LAVISH SHAPE & GLOW"
              className="col-span-2 h-56 w-full rounded-3xl object-cover shadow-lg shadow-ink/10 sm:h-72"
              loading="lazy"
            />
            <img
              src={wallReception}
              alt="Intérieur de l'institut"
              className="h-44 w-full rounded-3xl object-cover shadow-lg shadow-ink/10 sm:h-56"
              loading="lazy"
            />
            <img
              src={careRoom}
              alt="Salle de soin"
              className="h-44 w-full rounded-3xl object-cover shadow-lg shadow-ink/10 sm:h-56"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-ink px-6 py-4 text-cream shadow-xl sm:-right-8">
            <p className="font-display text-3xl text-gold-light">4,7★</p>
            <p className="text-xs tracking-wide text-cream/80">31 avis Google</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-gold/30 bg-white px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-dark">
            À propos de nous
          </span>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
            Le spa médical qui prend soin de toi, en toute confiance
          </h2>
          <p className="mt-5 text-ink-soft">
            Chez LAVISH SHAPE &amp; GLOW MED SPA, chaque soin est pensé pour révéler ta meilleure
            version : peau nette, silhouette affinée, corps détendu. Basé à Douala, notre institut
            combine expertise médico-esthétique et accueil chaleureux pour des résultats que tu
            peux vraiment voir — et ressentir.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {points.map((p) => (
              <div key={p.title} className="flex gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush-light text-emerald">
                  <p.icon size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
