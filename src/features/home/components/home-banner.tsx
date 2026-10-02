"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LetsTalk } from "@/components/layout";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function HomeBanner() {
  return (
    <section className="bg-brand-primary pt-10 pb-16 lg:pt-14 lg:pb-24">
      <Container>
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
        >
          {/* The eyebrow line is the page's one H1: it is the only heading here
              that reads as a sentence, so it is what Google and a screen reader
              should get. The display words below are the artwork. */}
          <h1 className="text-brand-secondary mb-3 text-[11px] tracking-[0.2em] uppercase sm:text-xs lg:mb-5 lg:text-sm">
            Software, app and AI development company
          </h1>

          {/* Not animated from opacity 0: this is the largest thing on the
              screen, so it is what Largest Contentful Paint is measured
              against, and fading it in delays the score by the whole
              animation. */}
          <p className="font-heading text-[2.75rem] leading-[1.02] font-bold tracking-tight text-white uppercase sm:text-6xl lg:text-[6.5rem] xl:text-[7.5rem]">
            <span className="block">Integrated</span>
            <span className="block">Platforms Future</span>
          </p>

          <div className="mt-2 grid items-center gap-8 lg:grid-cols-[minmax(0,280px)_1fr_minmax(0,220px)] lg:gap-6">
            {/* Banner image with "UN MUTED" badge */}
            <motion.div
              variants={fadeInUp}
              className="relative order-2 w-fit lg:order-1"
            >
              <Image
                src="/images/homeBanner.png"
                alt="Scientist analysing a sample in a laboratory"
                width={271}
                height={182}
                priority
                className="h-auto w-[200px] rounded-md object-cover sm:w-[240px] lg:w-[271px]"
              />
              <span className="bg-brand-tertiary text-brand-primary absolute -bottom-10 left-1/2 grid size-[104px] place-items-center rounded-full text-[11px] font-medium tracking-wider uppercase sm:left-[60%]">
                Un Muted
              </span>
            </motion.div>

            {/* Part of the same display line as "Integrated Platforms Future",
                so it is a <p> too — a lone word is not a section heading. */}
            <p className="font-heading order-1 text-[2.75rem] leading-[1.02] font-bold tracking-tight text-white uppercase sm:text-6xl lg:order-2 lg:text-center lg:text-[6.5rem] xl:text-[7.5rem]">
              Cohesion
            </p>

            <motion.div
              variants={fadeInUp}
              className="order-3 flex flex-col gap-5 lg:pt-4"
            >
              <p className="max-w-[220px] text-[11px] leading-relaxed text-white/85">
                Yuni Tech. designs, builds, and scales the websites,
                applications, and systems that growing businesses run on, from
                first prototype to production traffic.
              </p>
              <LetsTalk />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
