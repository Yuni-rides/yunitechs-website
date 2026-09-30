"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { ProjectCard } from "@/features/projects/components/project-card";
import { projects } from "@/features/projects/data/projects";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { ServiceWorkContent } from "@/types";

/**
 * The projects built for this service, on its detail page.
 *
 * Measured off the design at 1440: heading 66px, body 18px over a 576px
 * measure, and a three-column grid of the same cards the projects page uses —
 * reused rather than rebuilt so a change to the card reaches both places.
 *
 * Renders nothing when the service has no projects. That is checked twice: a
 * service can leave `work` off entirely, and a tab that is configured but
 * currently empty drops out too, so neither can leave an empty heading behind.
 */
export function ServiceProjects({ work }: { work?: ServiceWorkContent }) {
  const items = work
    ? projects.filter((project) => project.filter === work.projectFilter)
    : [];

  if (!work || items.length === 0) return null;

  return (
    <section
      aria-labelledby="service-work-heading"
      className="bg-brand-primary py-16 lg:pt-[9.4%] lg:pb-[7.6%]"
    >
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={fadeInUp}
            className="text-brand-secondary flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase"
          >
            <span aria-hidden className="bg-brand-secondary/60 h-px w-8" />
            Our work
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            id="service-work-heading"
            className="text-brand-secondary mt-10 font-sans text-[clamp(1.75rem,4.6vw,4.25rem)] leading-[1.1] font-normal tracking-tight uppercase lg:mt-[2.9rem]"
          >
            {work.heading}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-[576px] text-[13px] leading-[1.2] text-white/60 lg:mt-[1.8rem] lg:text-[clamp(0.8125rem,1.25vw,1.125rem)]"
          >
            {work.body}
          </motion.p>
        </motion.div>

        <motion.ul
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-[5.2rem] lg:grid-cols-3 lg:gap-x-12"
        >
          {items.map((project) => (
            <motion.li key={project.slug} variants={fadeInUp}>
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
