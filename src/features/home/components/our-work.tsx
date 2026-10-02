"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MotionInView } from "@/components/shared";
import { Container } from "@/components/ui";
import {
  workCategories,
  workItems,
  type WorkCategoryId,
  type WorkItem,
} from "@/features/home/data/work";
import { cn } from "@/lib/utils";
import { WhoWeAre } from "./who-we-are";
import { OurProduct } from "./our-product";

export function OurWork() {
  const [active, setActive] = useState<WorkCategoryId>("website");
  const items = workItems.filter((item) => item.category === active);

  return (
    <section
      aria-labelledby="our-work-heading"
      className="bg-brand-primary relative"
    >
      <div className="bg-brand-secondary py-20 [clip-path:polygon(0_3%,100%_0,100%_100%,0_100%)] sm:py-24 lg:pt-46 lg:[clip-path:polygon(0_6%,100%_0,100%_100%,0_100%)]">
        <Container>
          <WhoWeAre />
          <MotionInView className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-[5.05%]">
            <h2
              id="our-work-heading"
              className="font-heading text-brand-primary shrink-0 text-5xl font-medium tracking-tight uppercase sm:text-6xl lg:text-[clamp(3.5rem,7.64vw,6.875rem)]"
            >
              Our work
            </h2>

            <div
              role="tablist"
              aria-label="Filter work by category"
              className="no-scrollbar -mx-4 flex gap-6 overflow-x-auto px-4 pb-1 lg:mx-0 lg:gap-10 lg:overflow-visible lg:px-0"
            >
              {workCategories.map((cat) => {
                const selected = cat.id === active;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls="our-work-panel"
                    onClick={() => setActive(cat.id)}
                    className={cn(
                      "inline-flex shrink-0 items-center gap-1 text-[11px] font-medium tracking-wider uppercase transition-colors lg:gap-[1.15rem] lg:text-[clamp(0.6875rem,1.25vw,1.125rem)]",
                      selected
                        ? "text-white"
                        : "text-brand-primary hover:text-white",
                    )}
                  >
                    {selected && (
                      <ArrowRight className="size-3 lg:size-5" aria-hidden />
                    )}
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </MotionInView>

          <div
            id="our-work-panel"
            role="tabpanel"
            className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-x-[2.5%] lg:gap-y-9"
          >
            <AnimatePresence mode="popLayout">
              {items.length === 0 ? (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-brand-primary/80 text-sm lg:col-span-2"
                >
                  Case studies for this category are coming soon.
                </motion.p>
              ) : (
                items.map((item, i) => (
                  <WorkCard key={item.id} item={item} index={i} />
                ))
              )}
            </AnimatePresence>
          </div>
          <OurProduct />
        </Container>
      </div>

      <div
        aria-hidden
        className="bg-brand-primary h-16 [clip-path:polygon(0_0,100%_60%,100%_100%,0_100%)] sm:h-24 lg:h-32"
        style={{ marginTop: "-1px" }}
      />
    </section>
  );
}

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group text-brand-primary relative overflow-hidden rounded-xl bg-white p-5 transition-shadow duration-300 sm:p-6",
        "lg:ring-brand-primary lg:rounded-[1.125rem] lg:p-0 lg:hover:ring-1",
        "lg:hover:shadow-[-8px_8px_0_0_var(--color-brand-primary)]",
        item.caseStudyHref && "cursor-pointer",
        item.wide ? "lg:col-span-2 lg:aspect-[727/196]" : "lg:aspect-[352/196]",
      )}
    >
      <div
        className={cn(
          "relative lg:absolute lg:top-[23.5%] lg:right-0 lg:bottom-0 lg:overflow-hidden lg:rounded-tl-[1.25rem]",
          item.wide
            ? "min-h-[220px] lg:min-h-0 lg:w-[65.9%]"
            : "aspect-[300/286] lg:aspect-auto lg:w-[44.3%]",
        )}
      >
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes={
            item.wide
              ? "(min-width: 1024px) 68vw, 92vw"
              : "(min-width: 1024px) 22vw, (min-width: 640px) 44vw, 92vw"
          }
          className="rounded-md object-cover lg:rounded-none"
        />
      </div>

      <div
        className={cn(
          "relative mt-6 lg:mt-0",
          item.wide
            ? "lg:w-[23.9%] lg:pt-[2.88%] lg:pl-[2.6%]"
            : "lg:w-[48.86%] lg:pt-[5.11%] lg:pl-[5.11%]",
        )}
      >
        <p className="text-brand-secondary text-[10px] font-medium lg:text-[clamp(0.75rem,1.46vw,1.3125rem)]">
          {item.eyebrow}
        </p>
        <h3 className="font-heading text-brand-primary group-hover:text-brand-secondary mt-2 text-base leading-tight font-bold uppercase transition-colors duration-300 lg:mt-[3.4%] lg:text-[clamp(1rem,2.01vw,1.8125rem)]">
          {item.title}
        </h3>
        <p className="text-brand-primary/80 mt-3 text-[11px] leading-relaxed lg:mt-[5.1%] lg:text-justify lg:text-[clamp(0.8125rem,1.32vw,1.1875rem)] lg:leading-[1.15]">
          {item.description}
        </p>
      </div>

      {item.caseStudyHref && (
        <Link
          href={item.caseStudyHref}
          className={cn(
            "bg-brand-tertiary text-brand-primary pointer-events-none absolute top-1/2 left-1/2 z-10 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 scale-75 cursor-pointer place-items-center content-center gap-1 rounded-full text-center text-[10px] leading-tight font-medium tracking-wider uppercase opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 focus-visible:pointer-events-auto focus-visible:scale-100 focus-visible:opacity-100 lg:aspect-square lg:h-auto lg:gap-[0.875rem] lg:text-[clamp(0.6875rem,1.23vw,1.125rem)] lg:leading-[1.17]",
            item.wide
              ? "lg:left-[67.05%] lg:w-[12.8%]"
              : "lg:left-[77.85%] lg:w-[26.4%]",
          )}
        >
          <ArrowUpRight
            className="size-[18%] lg:size-[clamp(0.75rem,1.58vw,1.4375rem)]"
            strokeWidth={2.25}
            aria-hidden
          />
          <span>
            View case
            <br />
            study
          </span>
        </Link>
      )}
    </motion.article>
  );
}
