"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { ServiceStackContent } from "@/types";

const TILE = 13.54;
const TILE_HOVER = 20.21;
const LABEL_GAP = 2.57;

export function ServiceStack({ stack }: { stack: ServiceStackContent }) {
  const track = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;

    const measure = () => {
      const shift = el.scrollWidth / 2;
      if (shift > 0) el.style.setProperty("--marquee-shift", `${shift}px`);
    };

    measure();
    window.addEventListener("resize", measure);
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
