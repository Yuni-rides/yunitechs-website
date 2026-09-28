"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { CtaBandContent } from "@/types";

/**
 * Measured off the design, which is 945x342 — a band 36.2% as tall as it is
 * wide. Everything is centred and sized as a share of that width, so the band
 * keeps its proportions at any viewport:
 *
 *   heading   59px (4.1vw), line-height 1.11, brand secondary, uppercase
 *   body      17.5px (1.22vw), line-height 1.2, white at 70%, max 530px
 *             wide — the size at which the design's own copy breaks over
 *             the two lines it is set on
 *   button    245x56px pill + a 50px circle, 8px apart, dark label on blue
 *
 * The background is the site's dark blue under a 15px dot grid, with a soft
 * blue glow off the top-right and bottom-left corners.
 *
 * The block is centred rather than pinned at a fixed offset, so copy of a
 * different length still sits well; the small bottom padding lifts it the
 * 11px the design sits above true centre.
 */
export function CtaBand({ cta }: { cta: CtaBandContent }) {
  const href = cta.href ?? "/contact#get-in-touch-heading";

  return (
    <section
      aria-labelledby="cta-band-heading"
      className="bg-brand-primary-dark relative isolate overflow-hidden py-20 lg:grid lg:aspect-[945/342] lg:place-items-center lg:py-0 lg:pb-[1.53vw]"
    >
      {/* Dot grid. Sized in px rather than a share of the band so the dots stay
          the same size the design draws them at, whatever the band's width. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(circle,rgb(255_255_255/0.13)_1px,transparent_1px)] [background-size:15px_15px] opacity-[0.55]"
      />

      {/* The two corner glows. */}
      <div
        aria-hidden
        className="bg-brand-secondary/60 pointer-events-none absolute -top-[22%] -right-[8%] -z-10 aspect-square w-[42%] rounded-full blur-[110px]"
      />
      <div
        aria-hidden
        className="bg-brand-secondary/55 pointer-events-none absolute -bottom-[26%] -left-[10%] -z-10 aspect-square w-[38%] rounded-full blur-[110px]"
      />

      <Container>
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeInUp}
            id="cta-band-heading"
            className="text-brand-secondary font-sans text-[clamp(1.75rem,4.1vw,3.75rem)] leading-[1.11] font-normal tracking-tight uppercase"
          >
            {cta.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-[530px] text-[13px] leading-[1.2] text-balance text-white/70 lg:mt-[1.6vw] lg:text-[clamp(0.8125rem,1.22vw,1.125rem)]"
          >
            {cta.body}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="group mt-8 flex items-center gap-2 lg:mt-[3.05vw]"
          >
            <Link
              href={href}
              className="bg-brand-secondary text-brand-primary-dark group-hover:bg-brand-secondary-light inline-flex h-14 items-center justify-center rounded-full px-10 text-[11px] font-medium tracking-[0.12em] uppercase transition-colors lg:min-w-[245px]"
            >
              {cta.label}
            </Link>
            <Link
              href={href}
              aria-label={cta.label}
              className="bg-brand-secondary text-brand-primary-dark group-hover:bg-brand-secondary-light grid size-[50px] shrink-0 place-items-center rounded-full transition-colors"
            >
              <ArrowUpLeft
                className="size-5 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
                aria-hidden
              />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
