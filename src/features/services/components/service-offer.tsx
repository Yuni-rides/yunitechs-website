"use client";

import { motion } from "framer-motion";
import {
  Apple,
  Bot,
  Brush,
  Cloud,
  Code2,
  Gauge,
  Layers,
  LifeBuoy,
  LineChart,
  MonitorSmartphone,
  PenTool,
  Plug,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { ServiceOfferContent } from "@/types";

/**
 * Lucide dropped its brand marks, so there is no Android glyph — `Bot` is the
 * closest robot in the set. Apple is still there.
 */
const iconMap: Record<string, LucideIcon> = {
  Apple,
  Bot,
  Brush,
  Cloud,
  Code2,
  Gauge,
  Layers,
  LifeBuoy,
  LineChart,
  MonitorSmartphone,
  PenTool,
  Plug,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Wrench,
};

/**
 * Sizes are shares of the container: heading 5.29%, eyebrow 1.32%, body
 * 1.11%, and a three-column grid whose cells sit on hairline rules. Hovering
 * a cell lifts the design's navy card out of it.
 */
export function ServiceOffer({ offer }: { offer: ServiceOfferContent }) {
  if (offer.items.length === 0) return null;

  return (
    <section
      aria-labelledby="service-offer-heading"
      className="bg-brand-secondary text-brand-primary overflow-hidden py-14 lg:py-[4%]"
    >
      <Container>
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={fadeInUp}
            className="text-brand-primary/80 flex items-center justify-center gap-3 text-[10px] tracking-[0.25em] uppercase lg:text-[clamp(0.625rem,1.32vw,1rem)]"
          >
            <span aria-hidden className="bg-brand-primary/40 h-px w-8" />
            {offer.eyebrow}
            <span aria-hidden className="bg-brand-primary/40 h-px w-8" />
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            id="service-offer-heading"
            className="font-display mt-[1.5%] text-center text-[clamp(1.75rem,5.29vw,4.5rem)] leading-none font-normal tracking-normal uppercase"
          >
            {offer.heading}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-brand-primary/85 mx-auto mt-[1.4%] max-w-[54ch] text-center text-[13px] leading-[1.5] lg:text-[clamp(0.8125rem,1.11vw,1rem)]"
          >
            {offer.body}
          </motion.p>

          {/* Hairline rules come from the gap showing through a tinted track,
              so no cell needs edge-specific border classes. */}
          <ul className="bg-brand-primary/15 mt-[11.9%] grid gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {offer.items.map((item) => {
              const Icon = iconMap[item.icon] ?? Sparkles;
              return (
                <motion.li
                  variants={fadeInUp}
                  key={item.title}
                  className="bg-brand-secondary p-[4%]"
                >
                  <div className="group hover:bg-brand-primary flex h-full flex-col items-center rounded-2xl px-[8%] py-[12%] text-center transition-colors duration-300">
                    <Icon
                      className="group-hover:text-brand-secondary size-[clamp(2rem,3.4vw,3.25rem)] transition-colors duration-300"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <h3 className="group-hover:text-brand-secondary mt-[9%] text-[clamp(0.875rem,1.5vw,1.375rem)] leading-tight font-semibold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-brand-primary/80 group-hover:text-brand-secondary/85 mt-[6%] text-[clamp(0.6875rem,1.02vw,0.9375rem)] leading-[1.5] transition-colors duration-300">
                      {item.body}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
