"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { Product } from "@/features/product/data/product";

export function ProductBanner({ product }: { product: Product }) {
  return (
    <section
      aria-labelledby="product-banner-heading"
      className="bg-brand-primary relative"
    >
      <div className="bg-brand-secondary text-brand-primary relative z-10 pt-12 pb-0 lg:pt-[2.6%] lg:pb-[32.7%]">
        <Container>
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.p
              variants={fadeInUp}
              className="text-brand-primary/70 text-[10px] tracking-[0.22em] uppercase lg:text-[clamp(0.625rem,0.86vw,0.8125rem)]"
            >
              {product.eyebrow}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              id="product-banner-heading"
              className="font-heading mt-4 text-[clamp(2.25rem,8.96vw,8.0625rem)] leading-[1.14] font-bold tracking-tight uppercase lg:mt-[0.9%]"
            >
              {product.headingLines.map((line) => (
                <span key={line} className="block">
                  {line}{" "}
                </span>
              ))}
            </motion.h1>
          </motion.div>
        </Container>

        <div className="relative mt-8 ml-[6%] lg:pointer-events-none lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:ml-[21%] lg:translate-y-[20%]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative aspect-[812/460]"
          >
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              sizes="(min-width: 1024px) 79vw, 94vw"
              priority
              className="object-contain object-left"
            />
          </motion.div>
        </div>

        <div className="lg:absolute lg:inset-x-26 lg:bottom-0 lg:z-20 lg:translate-y-1/2">
          <Container>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="group relative flex items-center gap-2 pt-10 pb-10 lg:py-0"
            >
              <a
                href={product.visit.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary hover:bg-brand-primary-light inline-flex h-12 items-center rounded-full px-7 text-[11px] font-medium tracking-wider text-white uppercase transition-colors lg:h-[clamp(3rem,3.75vw,3.375rem)] lg:px-[3.3%] lg:text-[clamp(0.6875rem,0.83vw,0.75rem)]"
              >
                {product.visit.label}
              </a>
              <a
                href={product.visit.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={product.visit.label}
                className="bg-brand-primary hover:bg-brand-primary-light grid aspect-square h-12 shrink-0 place-items-center rounded-full text-white transition-colors lg:h-[clamp(3rem,3.75vw,3.375rem)]"
              >
                <ArrowUpLeft
                  className="size-[34%] transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </a>
            </motion.div>
          </Container>
        </div>
      </div>

      <div className="lg:px-[6.5%]">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="bg-brand-secondary grid gap-8 px-6 pt-16 pb-10 lg:grid-cols-[minmax(0,39.3%)_minmax(0,58.7%)] lg:gap-x-[2%] lg:rounded-b-[2.5rem] lg:px-[3.3%] lg:pt-[5.06%] lg:pb-[2.5%]"
        >
          <motion.p
            variants={fadeInUp}
            className="text-brand-primary/40 font-heading text-[clamp(1.75rem,4.1vw,3.6875rem)] leading-[1.08] font-bold tracking-tight uppercase"
          >
            {product.summaryLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.p>

          <motion.ul
            variants={fadeInUp}
            className="flex flex-wrap items-start gap-2.5 lg:items-end lg:gap-x-[1.4%] lg:gap-y-3 lg:self-end"
          >
            {product.capabilities.map((capability) => (
              <li
                key={capability}
                className="bg-brand-primary/30 rounded-full px-4 py-2 text-[11px] tracking-wide text-white lg:inline-flex lg:h-[clamp(2.25rem,3.33vw,3rem)] lg:items-center lg:px-[2.2%] lg:py-0 lg:text-[clamp(0.6875rem,1.04vw,0.9375rem)]"
              >
                {capability}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
