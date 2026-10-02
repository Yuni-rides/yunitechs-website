import { notFound } from "next/navigation";
import { JsonLd } from "@/components/shared";
import { ProjectDetail } from "@/features/projects";
import {
  getProjectBySlug,
  getRelatedProjects,
  projects,
} from "@/features/projects/data/projects";
import { getSeoPage } from "@/config/seo-pages";
import { breadcrumbSchema, caseStudySchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({ title: "Project not found", noIndex: true });
  }

  return buildMetadata({
    path: `/projects/${project.slug}`,
    image: project.image.src,
    imageAlt: `The ${project.name} project`,
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const path = `/projects/${project.slug}`;
  const seo = getSeoPage(path);

  return (
    <>
      {/* A case study is work we made, so CreativeWork rather than Article —
          Article would claim this is journalism about the client. */}
      <JsonLd
        data={[
          caseStudySchema({
            name: project.title,
            description: seo?.description ?? project.excerpt,
            path,
            image: project.image.src,
            dateModified: seo?.lastModified,
          }),
          breadcrumbSchema([
            { name: "Projects", path: "/projects" },
            { name: project.name, path },
          ]),
        ]}
      />
      <ProjectDetail project={project} related={getRelatedProjects(slug)} />
    </>
  );
}
