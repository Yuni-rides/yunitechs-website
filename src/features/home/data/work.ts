import {
  projectFilters,
  projects,
  type ProjectFilterId,
} from "@/features/projects/data/projects";

/**
 * The home page's "Our work" grid shows the same projects as /projects, under
 * the same tabs. Deriving both from one list is deliberate: when these were two
 * hand-written arrays, a project could be renamed or retagged in one and not
 * the other, and the home cards drifted away from the case studies they link to.
 */
export const workCategories = projectFilters;

export type WorkCategoryId = ProjectFilterId;

export type WorkItem = {
  id: string;
  category: WorkCategoryId;
  /** Small label above the title, e.g. "Sports Medicine & Healthcare Website" */
  eyebrow: string;
  title: string;
  description: string;
  image: { src: string; width: number; height: number; alt: string };
  /** Spans both columns on desktop */
  wide?: boolean;
  /** Show the green "VIEW CASE STUDY" badge */
  caseStudyHref?: string;
};

/**
 * Cards run two-up, so the third in a category spans the row rather than
 * leaving a gap — the same shape the design uses.
 */
const perCategory = new Map<ProjectFilterId, number>();

export const workItems: WorkItem[] = projects.map((project) => {
  const seen = (perCategory.get(project.filter) ?? 0) + 1;
  perCategory.set(project.filter, seen);

  return {
    id: project.slug,
    category: project.filter,
    eyebrow: project.service,
    title: project.name,
    description: project.excerpt,
    image: {
      src: project.image,
      width: 248,
      height: 237,
      alt: `${project.name} — ${project.service}`,
    },
    wide: seen % 3 === 0,
    caseStudyHref: `/projects/${project.slug}`,
  };
});
