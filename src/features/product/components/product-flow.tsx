"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpLeft,
  CircleCheckBig,
  Columns3,
  FileText,
  LifeBuoy,
  MapPin,
  Radio,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { ProductFlow } from "@/features/product/data/product";

const iconMap: Record<string, LucideIcon> = {
  CircleCheckBig,
  Columns3,
  FileText,
  LifeBuoy,
  MapPin,
  Radio,
  Users,
};

/**
 * Measured off the design at a 1440 width:
 *
 *   background  navy at the top, fully blue by 572px, with a glow behind
 *               the headline
 *   heading     62px / 1.15, two lines, centred
 *   body        18px / 1.2, centred on a 660px measure
 *   tiles       247px squares, 34px apart, four to a row
 *   button      48px tall, in the grid's last cell
 *
 * Vertical rhythm is set with clamp()s capped in rem rather than bare `vw`:
 * the page's container stops at 1440, so a vw-only value keeps growing after
 * everything around it has stopped.
 */
export function ProductFlowSection({ flow }: { flow: ProductFlow }) {
  // Which tile wears the picked-out treatment. The first one has it to begin
  // with and hands it over on hover, so only ever one tile is lit. Tracked in
  // state rather than with :hover, because a CSS rule that both sets the first
  // tile's default and takes it away on a sibling's hover comes down to source
  // order, which Tailwind decides, not this file.
  const [active, setActive] = useState(0);

  return (
    <section
      aria-labelledby="product-flow-heading"
      className="from-brand-primary via-brand-primary to-brand-secondary relative isolate bg-gradient-to-b via-15% to-48% pt-20 pb-16 lg:pt-[clamp(4rem,16.4vw,14.75rem)] lg:pb-[clamp(3rem,5.4vw,4.875rem)]"
    >
      {/* The glow behind the headline. */}
      <div
        aria-hidden
        className="bg-brand-secondary/55 pointer-events-none absolute top-[6%] left-1/2 -z-10 aspect-[2/1] w-[62%] -translate-x-1/2 rounded-[50%] blur-[90px]"
      />

      <Container>
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-brand-primary text-center"
        >
          <motion.h2
            variants={fadeInUp}
            id="product-flow-heading"
            className="font-display mx-auto text-[clamp(1.75rem,4.3vw,3.875rem)] leading-[1.15] font-bold tracking-tight"
          >
            {flow.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-[660px] text-[13px] leading-[1.2] lg:mt-[clamp(1.5rem,3.3vw,3rem)] lg:text-[clamp(0.8125rem,1.25vw,1.125rem)]"
          >
            {flow.body}
          </motion.p>
        </motion.div>

        <motion.ul
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onMouseLeave={() => setActive(0)}
          className="mx-auto mt-10 grid w-full max-w-[1090px] grid-cols-2 gap-x-[3.12%] gap-y-5 sm:grid-cols-3 lg:mt-[clamp(2.5rem,3.24vw,2.9rem)] lg:grid-cols-4 lg:gap-y-[1.94rem]"
        >
          {flow.steps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? FileText;
            const lit = i === active;
            return (
              <motion.li
                key={step.label}
                variants={fadeInUp}
                onMouseEnter={() => setActive(i)}
                className={`flex aspect-square cursor-default flex-col items-center justify-center gap-[12%] rounded-xl text-center transition-colors duration-300 lg:rounded-2xl ${
                  lit
                    ? "bg-brand-primary text-brand-secondary"
                    : "bg-brand-primary/30 text-brand-primary"
                }`}
              >
                <Icon className="size-[23%]" strokeWidth={1.75} aria-hidden />
                <span className="text-[11px] leading-tight lg:text-[clamp(0.6875rem,1.11vw,1rem)]">
                  {step.label}
                </span>
              </motion.li>
            );
          })}

          {/* The design puts the button in the grid's last cell. */}
          <motion.li
            variants={fadeInUp}
            className="group col-span-2 flex items-end justify-center sm:col-span-3 lg:col-span-1 lg:justify-end"
          >
            <div className="flex items-center gap-2">
              <Link
                href={flow.cta.href}
                className="bg-brand-primary hover:bg-brand-primary-light inline-flex h-12 items-center rounded-full px-6 text-[10px] font-medium tracking-wider text-white uppercase transition-colors lg:h-[clamp(2.5rem,3.33vw,3rem)] lg:px-[1.6vw] lg:text-[clamp(0.625rem,0.76vw,0.6875rem)]"
              >
                {flow.cta.label}
              </Link>
              <Link
                href={flow.cta.href}
                aria-label={flow.cta.label}
                className="bg-brand-primary hover:bg-brand-primary-light grid aspect-square h-12 shrink-0 place-items-center rounded-full text-white transition-colors lg:h-[clamp(2.5rem,3.33vw,3rem)]"
              >
                <ArrowUpLeft
                  className="size-[38%] transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </Link>
            </div>
          </motion.li>
        </motion.ul>
      </Container>
    </section>
  );
}
