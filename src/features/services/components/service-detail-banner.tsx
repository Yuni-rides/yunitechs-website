"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { siteConfig } from "@/config/site";
import type { ServiceBanner } from "@/types";

export function ServiceDetailBanner({ banner }: { banner: ServiceBanner }) {
  return (
    <section
      aria-labelledby="service-banner-heading"
      className="bg-brand-secondary text-brand-primary overflow-hidden"
    >
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid items-center gap-10 py-14 lg:grid-cols-[44.2fr_52.2fr] lg:gap-x-[3.8%] lg:gap-y-0 lg:py-0"
        >
          <div className="lg:py-[6%]">
            <motion.p
              variants={fadeInUp}
              className="text-brand-primary/75 text-[11px] tracking-[0.18em] uppercase lg:text-[clamp(0.6875rem,1.47vw,1.25rem)]"
            >
              {siteConfig.name} &middot; {banner.eyebrow}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              id="service-banner-heading"
              className="font-display mt-[7.16%] text-[clamp(2rem,6.95vw,5.875rem)] leading-[1.06] font-bold tracking-normal uppercase"
            >
              {banner.heading}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-brand-primary/85 mt-[7.64%] max-w-[46ch] text-[13px] leading-[1.45] lg:text-[clamp(0.8125rem,1.16vw,1.0625rem)]"
            >
              {banner.body}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-[7.64%] flex flex-wrap items-center gap-3"
            >
              <Link
                href="/projects"
                className="border-brand-primary/60 hover:bg-brand-primary inline-flex h-12 items-center rounded-full border px-7 text-[11px] font-medium tracking-wider uppercase transition-colors duration-300 hover:text-white lg:h-[clamp(3rem,4vw,4.25rem)] lg:px-[clamp(1.5rem,2.6vw,2.75rem)] lg:text-[clamp(0.6875rem,1vw,0.9375rem)]"
              >
                View our work
              </Link>

              <div className="group flex items-center gap-2">
                <Link
                  href="/contact"
                  className="text-brand-primary group-hover:bg-brand-primary inline-flex h-12 items-center rounded-full bg-white px-7 text-[11px] font-medium tracking-wider uppercase transition-colors duration-300 group-hover:text-white lg:h-[clamp(3rem,4vw,4.25rem)] lg:px-[clamp(1.5rem,2.6vw,2.75rem)] lg:text-[clamp(0.6875rem,1vw,0.9375rem)]"
                >
                  Get free consultation
                </Link>
                <Link
                  href="/contact"
                  aria-label="Get a free consultation"
                  className="text-brand-primary group-hover:bg-brand-primary grid aspect-square h-12 place-items-center rounded-full bg-white transition-colors duration-300 group-hover:text-white lg:h-[clamp(3rem,4vw,4.25rem)]"
                >
                  <ArrowUpLeft
                    className="size-[36%] transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="border-brand-primary/35 relative aspect-square"
          >
            <div className="relative h-full w-full">
              <Image
                src={banner.image.src}
                alt={banner.image.alt}
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                priority
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
