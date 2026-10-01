"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { ProductEcosystem } from "@/features/product/data/product";

/**
 * Measured off the design at a 1440 width:
 *
 *   copy       starts on the 90px gutter the other sections use
 *   heading    65px / 1.11, two lines, brand blue
 *   body       17px / 1.24, five lines on one rhythm — the second entry is a
 *              new line, not a new paragraph, so it carries no extra space
 *   tagline    32px bold, brand blue
 *   artwork    756px wide on the right, its top 68px below the copy's
 *
 * Vertical rhythm uses clamp()s capped in rem: the page's container stops at
 * 1440, so a bare `vw` keeps growing after everything around it has stopped.
 */
export function ProductEcosystemSection({
  ecosystem,
}: {
  ecosystem: ProductEcosystem;
}) {
  return (
    <section
      aria-labelledby="product-ecosystem-heading"
      className="bg-brand-primary overflow-hidden py-16 lg:py-[clamp(4rem,11.1vw,10rem)]"
    >
      <Container>
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid items-start gap-10 lg:grid-cols-[minmax(0,57%)_minmax(0,43%)] lg:gap-0"
        >
          <div className="lg:pl-[7.4%]">
            <motion.p
              variants={fadeInUp}
              className="flex items-center gap-3 text-[10px] tracking-[0.25em] text-white uppercase lg:text-[clamp(0.625rem,0.83vw,0.75rem)]"
            >
              <span aria-hidden className="h-px w-8 bg-white/70" />
              {ecosystem.eyebrow}
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              id="product-ecosystem-heading"
              className="font-display text-brand-secondary mt-7 text-[clamp(1.75rem,4.5vw,4.0625rem)] leading-[1.11] font-bold tracking-tight lg:mt-[clamp(1.75rem,3.8vw,3.44rem)]"
            >
              {ecosystem.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-7 max-w-[600px] text-[13px] leading-[1.24] text-white/85 lg:mt-[clamp(1.25rem,2vw,1.8125rem)] lg:text-[clamp(0.8125rem,1.18vw,1.0625rem)]"
            >
              {ecosystem.body.map((line, i) => (
                <span key={line} className={i === 0 ? "block" : "block"}>
                  {line}
                </span>
              ))}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-brand-secondary mt-10 text-[clamp(1rem,2.22vw,2rem)] leading-tight font-bold lg:mt-[clamp(2.5rem,7.7vw,6.94rem)]"
            >
              {ecosystem.tagline}
            </motion.p>
          </div>

          <motion.div
            variants={fadeInUp}
            className="relative aspect-[733/429] w-full lg:mt-[11.5%] lg:-ml-[28%] lg:w-[128%]"
          >
            <Image
              src={ecosystem.image.src}
              alt={ecosystem.image.alt}
              fill
              sizes="(min-width: 1024px) 54vw, 92vw"
              loading="lazy"
              className="object-contain object-right"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
