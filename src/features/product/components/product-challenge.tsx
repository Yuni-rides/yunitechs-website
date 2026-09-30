"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { ProductChallenge } from "@/features/product/data/product";

/**
 * Measured off the design at a 1440 width. A blue panel inset 6.4% on the navy
 * page, with the map inset ~20px inside it:
 *
 *   panel    1280 wide, 467 tall — its height follows the map
 *   map      646x420, 52.1% of the panel's content width
 *   copy     starts 59.2% across; heading 30px/0.97, body 16px/1.2
 *   foot     a 158px artwork card and a 436px note card, bottom-aligned and
 *            hanging 31px past the panel's bottom edge
 *
 * The foot row is positioned rather than in flow: it has to break the panel's
 * bottom edge, and the artwork card also overlaps the map's corner — neither
 * is something flow layout can do without changing the panel's height.
 */
export function ProductChallengeSection({
  challenge,
}: {
  challenge: ProductChallenge;
}) {
  return (
    <section
      aria-labelledby="product-challenge-heading"
      className="bg-brand-primary py-16 lg:pt-[4.4%] lg:pb-[7.5%]"
    >
      <Container className="lg:px-[6.4vw]">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="bg-brand-secondary relative rounded-3xl p-5 lg:rounded-[2.75rem] lg:p-[1.56%]"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,52.1%)_minmax(0,40.8%)] lg:gap-x-[7.1%]">
            <motion.div
              variants={fadeInUp}
              className="relative aspect-[646/420] overflow-hidden rounded-2xl lg:rounded-[2rem]"
            >
              <Image
                src={challenge.map.src}
                alt={challenge.map.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 92vw"
                loading="lazy"
                className="object-cover"
              />
            </motion.div>

            <div>
              <motion.p
                variants={fadeInUp}
                className="text-brand-primary/55 flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase lg:text-[clamp(0.625rem,0.83vw,0.75rem)]"
              >
                <span aria-hidden className="bg-brand-primary/40 h-px w-7" />
                {challenge.eyebrow}
              </motion.p>

              <motion.h2
                variants={fadeInUp}
                id="product-challenge-heading"
                className="font-heading text-brand-primary mt-5 text-[clamp(1.125rem,2.08vw,1.875rem)] leading-[0.97] font-bold lg:mt-[6.2%]"
              >
                {challenge.heading.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </motion.h2>

              <div className="mt-6 space-y-4 lg:mt-[6.2%]">
                {challenge.body.map((paragraph) => (
                  <motion.p
                    key={paragraph}
                    variants={fadeInUp}
                    className="text-brand-primary/45 text-[13px] leading-[1.2] lg:text-[clamp(0.8125rem,1.11vw,1rem)]"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>

          {/* The note card spans the whole foot row and the artwork card sits
              on top of its left end — they are not side by side. Both hang
              29px past the panel's bottom edge, which flow layout cannot do
              without changing the panel's height. */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 lg:absolute lg:right-[4.5%] lg:bottom-[-2vw] lg:left-[48.5%] lg:mt-0"
          >
            <div className="to-brand-primary/65 relative rounded-2xl border border-white/20 bg-gradient-to-b from-white/10 via-transparent lg:rounded-[1.25rem]">
              <p className="text-brand-primary p-5 text-[13px] leading-[1.35] lg:py-[2.7vw] lg:pr-[4.7%] lg:pl-[32.8%] lg:text-[clamp(0.8125rem,1.04vw,0.9375rem)]">
                {challenge.note}
              </p>

              <div className="bg-brand-primary mt-4 overflow-hidden rounded-2xl border border-white/15 lg:absolute lg:top-0 lg:bottom-0 lg:left-[1.8%] lg:mt-0 lg:w-[25.1%] lg:rounded-[1.25rem]">
                <div className="relative h-full min-h-[8rem]">
                  <Image
                    src={challenge.inset.src}
                    alt={challenge.inset.alt}
                    fill
                    sizes="(min-width: 1024px) 11vw, 40vw"
                    loading="lazy"
                    className="object-contain p-3"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
