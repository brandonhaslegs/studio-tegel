import Link from "next/link";
import { colorForProject } from "@/lib/project-colors";
import { SiteImage } from "@/components/site-image";

export function ProjectCard({ project, priority = false }: { project: { title: string; type: string; image: string; slug: string }; priority?: boolean }) {
  return (
    <Link className="group project-card block" href={`/projects/${project.slug}`}>
      <div className="image-frame relative aspect-[4/5]">
        <SiteImage src={project.image} alt="" fill priority={priority} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-35 md:opacity-100 md:group-hover:opacity-35 md:group-focus-visible:opacity-35" />
        <div className="absolute inset-0 md:opacity-0 md:group-hover:opacity-90 md:group-focus-visible:opacity-90" style={{ backgroundColor: colorForProject(project.slug), mixBlendMode: "color" }} />
        <div className="absolute inset-0 flex items-end p-5 text-ink md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
          <div>
            <p className="nav-text mb-3 text-ink/75">{project.type}</p>
            <h3 className="headline project-card-title">{project.title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
