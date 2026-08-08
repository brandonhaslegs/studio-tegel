import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/site";

export default function ProjectsPage() {
  return <main><PageIntro compact title="Arbeiten, die bleiben." /><section className="px-4 pb-24 md:px-8 md:pb-40"><div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">{projects.map((project, index) => <Reveal delay={index * 0.06} key={project.slug}><ProjectCard priority={index === 0} project={project} /></Reveal>)}</div></section><Footer /></main>;
}
