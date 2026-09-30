"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { ProductOverview } from "@/features/product/data/product";

/**
 * Measured off the design at a 1440 width: the copy column runs to about 47.5%
 * and the statement starts at 54%, both aligned to the same 6.3% gutter the
 * blue panel above uses.
 *
 *   heading    31px, two lines
 *   body       15px / 1.6, white at 60%
 *   statement  66px / 0.99, alternating white and brand blue
 */
export function ProductOverviewSection({
  overview,
}: {
  overview: ProductOverview;
}) {
  return (
    <section
      aria-labelledby="product-overview-heading"
      className="bg-brand-primary py-16 lg:pt-[7.7%] lg:pb-[8%]"
    >
      <Container>
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-12 lg:grid-cols-[minmax(0,47.5%)_minmax(0,45.5%)] lg:gap-x-[7%]"
        >
          <div className="lg:pl-[4.1vw]">
            <motion.p
              variants={fadeInUp}
              className="text-brand-secondary flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase lg:text-[clamp(0.625rem,0.83vw,0.75rem)]"
            >
              <span aria-hidden className="bg-brand-secondary/60 h-px w-8" />
              {overview.eyebrow}
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              id="product-overview-heading"
              className="font-heading mt-5 text-[clamp(1.125rem,2.15vw,1.9375rem)] leading-[1.25] font-bold text-white lg:mt-[4.5%]"
            >
              {overview.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.h2>

            <div className="mt-7 space-y-5 lg:mt-[6.5%]">
              {overview.body.map((paragraph) => (
                <motion.p
                  key={paragraph}
                  variants={fadeInUp}
                  className="text-[13px] leading-[1.6] text-white/60 lg:text-[clamp(0.8125rem,1.04vw,0.9375rem)]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="font-heading text-[clamp(1.75rem,4.6vw,4.125rem)] leading-[0.99] font-bold tracking-tight text-white uppercase"
          >
            {overview.statement.map((line) => (
              <span
                key={line.text}
                className={line.accent ? "text-brand-secondary block" : "block"}
              >
                {line.text}
              </span>
            ))}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
