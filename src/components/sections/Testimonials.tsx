import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { reviews, googleRating, googleReviewCount, googleReviewsUrl } from "@/data/reviews";

export function Testimonials() {
  return (
    <section className="relative bg-cream-dark/60 py-20 sm:py-28" id="avis">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-xl flex-col items-center text-center"
        >
          <div className="flex justify-center">
            <span className="rounded-full border border-gold/30 bg-white px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-dark">
              Avis clients
            </span>
          </div>

          <h2 className="mt-5 font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
            Nos clientes en témoignent
          </h2>

          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-sm shadow-ink/5 transition hover:shadow-md"
          >
            <span className="font-display text-lg text-ink">{googleRating}</span>
            <span className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="text-sm text-ink-soft">
              sur Google · {googleReviewCount} avis
            </span>
          </a>
        </motion.div>

        <div className="mt-12 flex max-h-[720px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_85%,transparent)]">
          <TestimonialsColumn testimonials={reviews.slice(0, 5)} duration={26} />
          <TestimonialsColumn testimonials={reviews.slice(5, 10)} duration={32} className="hidden md:block" />
          <TestimonialsColumn testimonials={reviews.slice(10, 15)} duration={29} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
