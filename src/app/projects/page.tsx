import { CtaBanner } from "@/features/home";
import { ProjectsBanner, ProjectsGrid } from "@/features/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ path: "/projects" });

export default function ProjectsPage() {
  return (
    <>
      <ProjectsBanner />
      <ProjectsGrid />
      <CtaBanner/>
    </>
  );
}
