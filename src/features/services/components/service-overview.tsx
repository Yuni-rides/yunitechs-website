"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { ServiceOverviewContent } from "@/types";

/**
 * Shares of the container width, read off the design: columns 46.9% / 2.8%
 * gap / 50.4%, heading 4.81% on a 5.01% line step, eyebrow 1.25%, body 1.16%.
 * The dashed frame carries the artwork at its own aspect, which is why the
 * frame in the design measures 1.110 against the file's 1.111.
 */
export function ServiceOverview({
  overview,
}: {
  overview: ServiceOverviewContent;
}) {
  return (
    <section
      aria-labelledby="service-overview-heading"
      className="bg-brand-secondary text-brand-primary overflow-hidden"
    >
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid items-center gap-10 py-14 lg:grid-cols-[46.9fr_50.4fr] lg:gap-x-[2.8%] lg:gap-y-0 lg:py-[3%]"
        >
          <div>
            <motion.p
              variants={fadeInUp}
              className="text-brand-primary/80 flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase lg:text-[clamp(0.625rem,1.25vw,1rem)]"
            >
              <span aria-hidden className="bg-brand-primary/50 h-px w-8" />
              {overview.eyebrow}
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              id="service-overview-heading"
              className="font-display mt-[4.9%] text-[clamp(1.75rem,4.81vw,4.125rem)] leading-[1.04] font-normal tracking-normal uppercase"
            >
              {overview.heading}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brand-primary/85 mt-[4.4%] max-w-[52ch] text-[13px] leading-[1.5] lg:text-[clamp(0.8125rem,1.16vw,1.0625rem)]"
            >
              {overview.body}
            </motion.p>
          </div>

          <motion.div
            variants={fadeInUp}
            className="border-brand-primary/30 relative rounded-2xl border border-dashed p-[3%]"
          >
            <div className="relative aspect-[1322/1190]">
              <Image
                src={overview.image.src}
                alt={overview.image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="lazy"
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
