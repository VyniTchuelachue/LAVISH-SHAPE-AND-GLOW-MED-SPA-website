import { motion } from "motion/react";
import beautifulWall from "@/assets/images/beautiful-wall.webp";
import woodenChairs from "@/assets/images/wooden-chairs.webp";
import careEquipment from "@/assets/images/care-room-equipment.webp";
import careEquipment2 from "@/assets/images/care-room-equipment-2.webp";
import productsRoom from "@/assets/images/lavish-products-room.webp";
import table from "@/assets/images/table.webp";

const images = [
  { src: beautifulWall, alt: "Espace d'accueil MAISON LAVISH" },
  { src: careEquipment, alt: "Équipement de soin médical" },
  { src: woodenChairs, alt: "Salle d'attente" },
  { src: productsRoom, alt: "Salle de produits & maquillage" },
  { src: careEquipment2, alt: "Cabine de soin" },
  { src: table, alt: "Table de soin" },
];

export function Gallery() {
  return (
    <section className="bg-cream-dark/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="rounded-full border border-gold/30 bg-white px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-dark">
            L'institut
          </span>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
            Un cadre lavish, pensé pour toi
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className={`overflow-hidden rounded-2xl shadow-md shadow-ink/5 ${
                i === 0 || i === 3 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full max-h-64 w-full object-cover transition duration-700 hover:scale-105 sm:max-h-none sm:aspect-square"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
