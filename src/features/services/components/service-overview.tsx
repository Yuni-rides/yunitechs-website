"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart3,
  Clock,
  Database,
  Globe,
  Layers,
  Package,
  Palette,
  Plug,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { ServiceOverviewContent } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  Clock,
  Database,
  Globe,
  Layers,
  Package,
  Palette,
  Plug,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
};

const CARD_PLACEMENT = [
  { left: "44.0%", top: "26.1%", rotate: "-8deg" },
  { left: "74.7%", top: "66.1%", rotate: "-8deg" },
  { left: "24.3%", top: "73.3%", rotate: "8deg" },
];

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
            className="relative lg:aspect-[1185/1121]"
          >
            <div className="relative aspect-[1322/1190] lg:absolute lg:top-[-2.49%] lg:left-[-3.71%] lg:aspect-auto lg:h-[106.07%] lg:w-[111.48%]">
              <Image
                src={overview.image.src}
                alt={overview.image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="lazy"
                className="object-contain"
              />
            </div>

            <ul className="mt-6 grid gap-4 sm:grid-cols-3 lg:mt-0 lg:contents">
              {overview.stats.map((stat, index) => {
                const Icon = iconMap[stat.icon] ?? Sparkles;
                const place = CARD_PLACEMENT[index] ?? CARD_PLACEMENT[0];
                return (
                  <li
                    key={stat.label}
                    style={
                      {
                        "--left": place.left,
                        "--top": place.top,
                        "--rotate": place.rotate,
                      } as React.CSSProperties
                    }
                    className="@container flex flex-col justify-center rounded-2xl bg-white p-5 shadow-[0_18px_40px_-12px_rgb(9_29_64_/_0.45)] lg:absolute lg:[top:var(--top)] lg:[left:var(--left)] lg:aspect-square lg:w-[42%] lg:[transform:translate(-50%,-50%)_rotate(var(--rotate))] lg:p-[8%]"
                  >
                    <span className="bg-brand-secondary/12 text-brand-secondary grid aspect-square w-10 place-items-center rounded-lg lg:w-[24%]">
                      <Icon
                        className="size-1/2 lg:size-[60%]"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </span>

                    <p className="text-brand-secondary mt-3 text-[clamp(1.5rem,17cqw,2.5rem)] leading-none font-bold tracking-tight lg:mt-[8%]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[clamp(0.875rem,7.6cqw,1.125rem)] leading-tight font-semibold lg:mt-[3%]">
                      {stat.label}
                    </p>

                    <span
                      aria-hidden
                      className="bg-brand-primary/10 mt-3 h-px w-full lg:mt-[7%]"
                    />

                    <p className="text-brand-primary/65 mt-3 text-[clamp(0.75rem,5.7cqw,0.8125rem)] leading-[1.35] lg:mt-[6%]">
                      {stat.body}
                    </p>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
