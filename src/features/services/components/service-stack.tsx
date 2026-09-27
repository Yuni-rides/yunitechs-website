"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { ServiceStackContent } from "@/types";

/**
 * Measured off the design, as shares of the section width: tiles are square at
 * 13.46%, separated by a 0.7% gap, and grow to 20.14% on hover — a 1.5x step.
 *
 * The tiles keep their tops aligned, so a hovered tile grows downward and
 * carries its label with it rather than nudging the whole row, and the row is
 * allowed to run past both edges exactly as the design shows.
 */
export function ServiceStack({ stack }: { stack: ServiceStackContent }) {
  if (stack.items.length === 0) return null;

  return (
    <section
      aria-labelledby="service-stack-heading"
      className="bg-brand-secondary text-brand-primary overflow-hidden py-14 lg:py-[4%]"
    >
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={fadeInUp}
            className="text-brand-primary/80 flex items-center justify-center gap-3 text-[10px] tracking-[0.25em] uppercase lg:text-[clamp(0.625rem,1vw,0.875rem)]"
          >
            <span aria-hidden className="bg-brand-primary/40 h-px w-8" />
            {stack.eyebrow}
            <span aria-hidden className="bg-brand-primary/40 h-px w-8" />
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            id="service-stack-heading"
            className="font-display mt-[1.5%] text-center text-[clamp(1.75rem,4.6vw,4.25rem)] leading-[1.12] font-normal tracking-normal uppercase"
          >
            {stack.heading}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-brand-primary/85 mx-auto mt-[1.4%] max-w-[46ch] text-center text-[13px] leading-[1.5] lg:text-[clamp(0.8125rem,1.11vw,1rem)]"
          >
            {stack.body}
          </motion.p>
        </motion.div>
      </Container>

      {/* Scrollable on small screens, where seven tiles will never fit. */}
      <motion.div
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-8 overflow-hidden lg:mt-[4%]"
      >
        {/* The row runs continuously and pauses under the cursor, so a tile is
            never a moving target. Growth is a scale rather than a width change:
            widening a tile would change the track's width, and the loop's
            -50% translate would jump the moment anything resized. */}
        <ul
          style={{ "--marquee-duration": "45s" } as React.CSSProperties}
          className="animate-marquee flex w-max items-start gap-[0.7vw] hover:[animation-play-state:paused] motion-reduce:animate-none"
        >
          {/* Two identical copies — translating by -50% loops seamlessly. */}
          {[0, 1].map((copy) =>
            stack.items.map((item) => (
              <li
                key={`${copy}-${item.name}`}
                className="relative flex shrink-0 origin-top flex-col items-center transition-transform duration-300 ease-out hover:z-10 lg:hover:scale-[1.496]"
              >
                <div className="relative aspect-square w-24 overflow-hidden rounded-2xl bg-white/10 sm:w-32 lg:w-[13.46vw]">
                  <Image
                    src={item.image}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(min-width: 1024px) 14vw, 8rem"
                    loading="lazy"
                    className="object-contain p-[12%]"
                  />
                </div>

                <p className="mt-[19%] text-center text-[clamp(0.75rem,1.3vw,1.125rem)] leading-tight">
                  {item.name}
                </p>
              </li>
            )),
          )}
        </ul>
      </motion.div>
    </section>
  );
}
