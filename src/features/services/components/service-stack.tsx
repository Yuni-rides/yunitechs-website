"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { ServiceStackContent } from "@/types";

/**
 * Measured off the design at a 1440 width: tiles are 195px square (13.54%) on
 * a 7.8px gap (0.54%), and the hovered tile grows to 291px — a 1.493x step.
 *
 * Two details the design is specific about, and which a single transform on
 * the whole tile cannot produce:
 *
 *  - The tiles after the hovered one move right by exactly the width it
 *    gained, so nothing overlaps. That is a real layout change, not a scale.
 *  - The label grows by 1.75x, more than the artwork's 1.493x, and stays the
 *    same distance below it rather than being pushed down proportionally.
 */
const TILE = 13.54; // vw
const TILE_HOVER = 20.21; // vw — 1.493x
const LABEL_GAP = 2.57; // vw, constant whether or not the tile is hovered

export function ServiceStack({ stack }: { stack: ServiceStackContent }) {
  const track = useRef<HTMLUListElement>(null);

  // The loop distance is half the track's resting width, in pixels. Measuring
  // it once means hovering — which widens the track — cannot shift the row.
  useEffect(() => {
    const el = track.current;
    if (!el) return;

    const measure = () => {
      const shift = el.scrollWidth / 2;
      if (shift > 0) el.style.setProperty("--marquee-shift", `${shift}px`);
    };

    measure();
    window.addEventListener("resize", measure);
    // Fonts and lazy images settle after first paint and change the width.
    const timers = [60, 300, 1200].map((ms) => window.setTimeout(measure, ms));
    return () => {
      window.removeEventListener("resize", measure);
      timers.forEach(clearTimeout);
    };
  }, [stack.items.length]);

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

      {/* A hovered tile grows downward as well as sideways. The box is tall
          enough for the grown tile and its label, so the section's height —
          and everything below it on the page — never moves. */}
      <motion.div
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-8 overflow-hidden pb-6 lg:mt-[4%] lg:h-[26.5vw] lg:pb-0"
      >
        <ul
          ref={track}
          style={{ "--marquee-duration": "45s" } as React.CSSProperties}
          className="animate-marquee-fixed flex w-max items-start gap-[0.54vw] hover:[animation-play-state:paused] motion-reduce:animate-none"
        >
          {/* Two identical copies — the loop shift is half the track. */}
          {[0, 1].map((copy) =>
            stack.items.map((item) => (
              <li
                key={`${copy}-${item.name}`}
                className="group relative flex shrink-0 flex-col items-center hover:z-10"
              >
                <div
                  style={
                    {
                      "--w": `${TILE}vw`,
                      "--wh": `${TILE_HOVER}vw`,
                    } as React.CSSProperties
                  }
                  className="relative aspect-square w-24 transition-[width] duration-300 ease-out sm:w-32 lg:w-[var(--w)] lg:group-hover:w-[var(--wh)]"
                >
                  <Image
                    src={item.image}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(min-width: 1024px) 21vw, 8rem"
                    loading="lazy"
                    className="object-contain"
                  />
                </div>

                {/* Scaled rather than resized: a transform keeps the label out
                    of layout, so growing it cannot push the row taller. */}
                <p
                  className="mt-[19%] text-center text-[clamp(0.75rem,1.45vw,1.3rem)] leading-tight transition-transform duration-300 ease-out lg:mt-[var(--gap)] lg:group-hover:scale-[1.75]"
                  style={{ "--gap": `${LABEL_GAP}vw` } as React.CSSProperties}
                >
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
