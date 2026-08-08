import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { projectBySlug, projects } from "@/lib/site";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) notFound();
  const gallery = project.gallery ?? [project.image];
  const galleryPhotos = [...gallery.slice(1), gallery[0]];
  const otherProjects = projects.filter(({ slug: projectSlug }) => projectSlug !== project.slug);
  return <main><Navigation /><section className="relative min-h-[75svh] bg-ink text-paper"><Image src={project.image} alt={project.title} fill priority sizes="100vw" className="object-cover opacity-90" /><div className="absolute inset-0 bg-ink/25" /><div className="page-grid relative min-h-[75svh] items-end pb-8"><div className="col-span-12 md:col-span-8"><p className="nav-text mb-5">{project.type}</p><h1 className="headline">{project.title}</h1></div></div></section><section className="page-grid py-24 md:items-baseline md:py-40"><p className="project-copy col-span-12 md:col-start-1 md:col-span-2">Projekt</p><p className="middle-text col-span-12 mt-8 md:col-span-6 md:col-start-4 md:mt-0">{project.description}</p>{project.meta && <><p className="project-copy col-span-12 mt-16 md:col-start-1 md:col-span-2">{project.meta.label}</p><p className="middle-text col-span-12 mt-5 md:col-span-6 md:col-start-4 md:mt-16">{project.meta.value}</p></>}</section><section className="grid grid-cols-1 gap-4 px-4 pb-24 md:px-8 md:pb-40">{galleryPhotos.map((image, index) => <img alt={`${project.title} Ansicht ${index + 2}`} className="block h-auto w-full" decoding="async" key={image} loading="lazy" src={image} />)}</section><section className="bg-paper px-4 py-24 md:px-8 md:py-40"><h2 className="headline max-w-4xl">Weitere Projekte.</h2><div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">{otherProjects.map((otherProject) => <ProjectCard key={otherProject.slug} project={otherProject} />)}</div></section><Footer /></main>;
}
