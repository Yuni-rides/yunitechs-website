"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { ProductScalability } from "@/features/product/data/product";

export function ProductScalabilitySection({
  scalability,
}: {
  scalability: ProductScalability;
}) {
  const [active, setActive] = useState(0);

  return (
    <section
      aria-labelledby="product-scalability-heading"
      className="bg-brand-primary overflow-hidden pt-16 pb-16 lg:pt-0 lg:pb-[clamp(4rem,8.8vw,7.94rem)]"
    >
      <Container>
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-10 lg:grid-cols-[minmax(0,35%)_minmax(0,64%)] lg:gap-x-[1%]"
        >
          <div className="lg:pt-[clamp(3rem,7.5vw,6.75rem)] lg:pl-[11.2%]">
            <motion.p
              variants={fadeInUp}
              className="flex items-center gap-3 text-[10px] tracking-[0.25em] text-white/80 uppercase lg:text-[clamp(0.625rem,0.83vw,0.75rem)]"
            >
              <span aria-hidden className="h-px w-7 bg-white/50" />
              {scalability.eyebrow}
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              id="product-scalability-heading"
              className="font-display text-brand-secondary mt-6 text-[clamp(1.75rem,4.51vw,4.0625rem)] leading-[1.07] font-bold tracking-tight lg:mt-[clamp(1.5rem,2.9vw,2.6rem)] lg:w-[clamp(20rem,36.1vw,32.5rem)]"
            >
              {scalability.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-[400px] text-[13px] leading-[1.3] text-white/75 lg:mt-[clamp(1.5rem,2.6vw,2.4rem)] lg:text-[clamp(0.8125rem,1.11vw,1rem)]"
            >
              {scalability.body}
            </motion.p>
          </div>

          <div className="lg:pt-[clamp(0.5rem,0.83vw,0.75rem)]">
            <motion.div
              variants={fadeInUp}
              className="relative aspect-[847/548] w-full lg:w-[96.3%]"
            >
              <Image
                src={scalability.map.src}
                alt={scalability.map.alt}
                fill
                sizes="(min-width: 1024px) 59vw, 92vw"
                loading="lazy"
                className="object-contain object-right-top"
              />
            </motion.div>

            <motion.ul
              variants={staggerContainer(0.07)}
              onMouseLeave={() => setActive(0)}
              className="mt-8 grid grid-cols-1 gap-[29px] sm:grid-cols-3 lg:mt-[clamp(1rem,2vw,1.8rem)] lg:pr-[2.8%] lg:pl-[4.7%]"
            >
              {scalability.cards.map((card, i) => {
                const lit = i === active;
                return (
                  <motion.li
                    key={card.label}
                    variants={fadeInUp}
                    onMouseEnter={() => setActive(i)}
                    className={`flex aspect-square cursor-default flex-col items-center justify-center gap-[9%] rounded-lg px-[10%] text-center transition-colors duration-300 lg:rounded-xl ${
                      lit
                        ? "bg-brand-secondary text-brand-primary"
                        : "bg-brand-secondary/[0.28] text-brand-secondary"
                    }`}
                  >
                    <span
                      aria-hidden
                      className="block aspect-square bg-current"
                      style={{
                        width: card.iconWidth,
                        maskImage: `url(${card.icon})`,
                        WebkitMaskImage: `url(${card.icon})`,
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                      }}
                    />
                    <span className="text-[11px] leading-tight tracking-wide uppercase lg:text-[clamp(0.6875rem,1.04vw,0.9375rem)]">
                      {card.label}
                    </span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
