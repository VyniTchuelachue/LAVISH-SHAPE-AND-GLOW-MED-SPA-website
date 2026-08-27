import React from "react";
import { motion } from "motion/react";
import type { Review } from "@/data/reviews";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Review[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role, initials }, i) => (
                <div
                  className="p-8 rounded-3xl border border-gold/15 bg-white shadow-lg shadow-ink/5 max-w-xs w-full"
                  key={i}
                >
                  <p className="font-serif text-lg leading-snug text-ink-soft italic">
                    “{text}”
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="h-11 w-11 shrink-0 rounded-full bg-gradient-to-br from-gold to-gold-dark text-cream flex items-center justify-center font-display text-sm">
                      {initials}
                    </div>
                    <div className="flex flex-col text-left">
                      <div className="font-medium tracking-tight leading-5 text-ink">
                        {name}
                      </div>
                      <div className="leading-5 text-ink-soft/70 text-xs tracking-tight">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
