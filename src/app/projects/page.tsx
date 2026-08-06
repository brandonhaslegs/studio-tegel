import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/site";

export default function ProjectsPage() {
  return <main><PageIntro compact eyebrow="Referenzen" title="Arbeiten, die bleiben." /><section className="px-4 pb-24 md:px-8 md:pb-40"><div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">{projects.map((project, index) => <ProjectCard key={project.slug} priority={index === 0} project={project} />)}</div></section><Footer /></main>;
}
