"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ServiceProcessContent } from "@/types";

const SPAN = ["lg:col-span-2", "", "", "", "lg:col-span-2"];

export function ServiceProcess({
  process,
}: {
  process: ServiceProcessContent;
}) {
  if (process.steps.length === 0) return null;

  return (
    <section
      aria-labelledby="service-process-heading"
      className="bg-brand-primary overflow-hidden py-14 lg:py-[4%]"
    >
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 lg:grid-cols-[minmax(0,44%)_minmax(0,34%)] lg:gap-x-[5%]"
        >
          <div>
            <motion.p
              variants={fadeInUp}
              className="text-brand-secondary flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase lg:text-[clamp(0.625rem,1vw,0.875rem)]"
            >
              <span aria-hidden className="bg-brand-secondary/60 h-px w-8" />
              {process.eyebrow}
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              id="service-process-heading"
              className="text-brand-secondary font-display mt-[4%] text-[clamp(1.5rem,4.2vw,3.75rem)] leading-[1.1] font-normal tracking-normal uppercase"
            >
              {process.heading}
            </motion.h2>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-[13px] leading-[1.5] text-white/80 lg:mt-[4%] lg:text-[clamp(0.75rem,1vw,0.9375rem)]"
          >
            {process.body}
          </motion.p>
        </motion.div>
      </Container>

      {/* Full-bleed in the design — the cards run to both edges. */}
      <motion.ul
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-8 grid gap-1 sm:grid-cols-2 lg:mt-[3%] lg:grid-cols-4"
      >
        {process.steps.map((step, index) => (
          <motion.li
            variants={fadeInUp}
            key={step.title}
            className={cn(
              "group relative aspect-square overflow-hidden",
              SPAN[index],
              // The wide cards keep the row height without going square.
              SPAN[index] && "lg:aspect-auto",
            )}
          >
            <Image
              src={step.image}
              alt=""
              aria-hidden
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="lazy"
              className="object-cover"
            />

            <div
              aria-hidden
              className="from-brand-primary/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent"
            />

            {/* At rest the glass slab sits along the bottom with its label to
                the left; hovering floats it to the middle of the card, narrows
                it and centres the copy, as in the design. */}
            <div className="absolute inset-0 flex items-end p-[3%] transition-all duration-300 ease-out lg:group-hover:items-center">
              <div className="w-full rounded-xl border border-white/20 bg-white/10 p-[4%] backdrop-blur-md transition-all duration-300 ease-out lg:group-hover:mx-auto lg:group-hover:w-[82%] lg:group-hover:text-center">
                <h3 className="text-[clamp(0.75rem,1.15vw,1.0625rem)] leading-tight font-semibold text-white">
                  <span className="text-brand-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="mx-2 text-white/50">
                    &mdash;
                  </span>
                  {step.title}
                </h3>

                {/* Collapsed with max-height rather than a 0fr/1fr grid row:
                    `overflow-hidden` on a grid item zeroes its automatic
                    minimum, so that row measured 0px even when opened. */}
                <div className="max-h-40 overflow-hidden opacity-100 transition-all duration-300 ease-out lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-40 lg:group-hover:opacity-100">
                  <p className="mt-[3%] text-[clamp(0.625rem,0.95vw,0.875rem)] leading-[1.5] text-white/85">
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
        ))}

        {/* Closing call to action, sitting in the grid's last cell. */}
        <motion.li
          variants={fadeInUp}
          className="bg-brand-secondary text-brand-primary flex aspect-square flex-col justify-between p-[8%] sm:col-span-2 lg:col-span-1 lg:aspect-auto"
        >
          <p className="font-display text-[clamp(1.125rem,1.9vw,2rem)] leading-[1.2] font-semibold">
            {process.cta.heading}
          </p>

          <div className="group mt-4 flex items-center gap-2">
            <Link
              href={process.cta.href}
              className="text-brand-primary group-hover:bg-brand-tertiary inline-flex h-10 items-center rounded-full bg-white px-5 text-[10px] font-medium tracking-wider uppercase transition-all duration-300 lg:h-[clamp(2.5rem,2.8vw,3.25rem)] lg:text-[clamp(0.625rem,0.8vw,0.8125rem)]"
            >
              {process.cta.label}
            </Link>
            <Link
              href={process.cta.href}
              aria-label={process.cta.label}
              className="text-brand-primary group-hover:bg-brand-tertiary grid aspect-square h-10 place-items-center rounded-full bg-white transition-all duration-300 lg:h-[clamp(2.5rem,2.8vw,3.25rem)]"
            >
              <ArrowUpLeft
                className="size-[40%] transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
                aria-hidden
              />
            </Link>
          </div>
        </motion.li>
      </motion.ul>
    </section>
  );
}
