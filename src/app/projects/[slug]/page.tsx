import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { projectBySlug, projects } from "@/lib/site";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) notFound();
  const gallery = project.gallery ?? [project.image];
  return <main><Navigation /><section className="relative min-h-svh bg-charcoal text-paper"><Image src={project.image} alt={project.title} fill priority sizes="100vw" className="object-cover opacity-90" /><div className="absolute inset-0 bg-black/25" /><div className="page-grid relative min-h-svh items-end pb-8"><div className="col-span-12 md:col-span-8"><p className="eyebrow mb-5">{project.type}</p><h1 className="display">{project.title}</h1></div></div></section><section className="page-grid py-24 md:py-40"><p className="eyebrow col-span-12 md:col-span-2">Projekt</p><p className="col-span-12 mt-8 text-2xl leading-[1.18] tracking-[-0.02em] md:col-span-6 md:col-start-4 md:mt-0 md:text-4xl">{project.description}</p></section>{gallery.length > 1 && <section className="grid grid-cols-1 gap-3 px-4 pb-24 md:grid-cols-2 md:px-8 md:pb-40">{gallery.slice(1).map((image, index) => <div className={`image-frame relative aspect-[4/5] ${index % 2 === 1 ? "md:mt-28" : ""}`} key={image}><Image src={image} alt={`${project.title} Ansicht ${index + 2}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>)}</section>}<Footer /></main>;
}
