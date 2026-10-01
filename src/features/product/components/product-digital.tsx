"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { ProductDigital } from "@/features/product/data/product";

/**
 * Measured off the design at a 1440 width, everything centred:
 *
 *   heading    69px / 1.06, two lines (1052px and 912px wide)
 *   body       17px, three lines on a 680px measure
 *   statement  103px, 1323px wide — "Safe." and "Human." in brand blue
 *   device     1092px wide, its top 795px down
 *
 * The two large sizes were calibrated by measuring the real font rather than
 * read off the screenshot: at this scale a cap height is a few pixels, but a
 * line's width is hundreds, so width is the reliable signal.
 */
export function ProductDigitalSection({
  digital,
}: {
  digital: ProductDigital;
}) {
  return (
    <section
      aria-labelledby="product-digital-heading"
      className="bg-brand-primary overflow-hidden pt-16 pb-0 lg:pt-[clamp(4rem,10.42vw,9.375rem)]"
    >
      <Container>
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="flex items-center justify-center gap-3 text-[10px] tracking-[0.25em] text-white/70 uppercase lg:text-[clamp(0.625rem,0.83vw,0.75rem)]"
          >
            <span aria-hidden className="h-px w-8 bg-white/40" />
            {digital.eyebrow}
            <span aria-hidden className="h-px w-8 bg-white/40" />
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            id="product-digital-heading"
            className="font-display text-brand-secondary mt-8 text-[clamp(1.75rem,4.79vw,4.3125rem)] leading-[1.06] font-bold tracking-tight lg:mt-[clamp(2rem,4.9vw,4.375rem)]"
          >
            {digital.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-[680px] text-[13px] leading-[1.3] text-white/70 lg:mt-[clamp(1.25rem,2.2vw,2rem)] lg:text-[clamp(0.8125rem,1.18vw,1.0625rem)]"
          >
            {digital.body}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="font-display mt-12 text-[clamp(1.75rem,7.15vw,6.4375rem)] leading-none font-bold tracking-tight text-white lg:mt-[clamp(4rem,10.7vw,9.625rem)]"
          >
            {digital.statement.map((word, i) => (
              <span
                key={word.text}
                className={word.accent ? "text-brand-secondary" : undefined}
              >
                {i > 0 ? " " : ""}
                {word.text}
              </span>
            ))}
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto mt-10 aspect-[1413/1884] w-full max-w-[1092px] lg:mt-[clamp(3rem,4.6vw,4.125rem)]"
        >
          <Image
            src={digital.image.src}
            alt={digital.image.alt}
            fill
            sizes="(min-width: 1024px) 76vw, 92vw"
            loading="lazy"
            className="object-contain object-top"
          />
        </motion.div>
      </Container>
    </section>
  );
}
