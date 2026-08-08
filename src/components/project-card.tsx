import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ project, priority = false }: { project: { title: string; type: string; image: string; slug: string }; priority?: boolean }) {
  return (
    <Link className="group project-card block" href={`/projects/${project.slug}`}>
      <div className="image-frame relative aspect-[4/5]">
        <Image src={project.image} alt="" fill priority={priority} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        <div className="absolute inset-0 hidden items-end bg-paper p-5 text-ink md:group-hover:flex md:group-focus-visible:flex">
          <div>
            <p className="nav-text mb-3">{project.type}</p>
            <h3 className="headline project-card-title">{project.title}</h3>
          </div>
        </div>
      </div>
      <div className="mt-4 md:hidden"><p className="nav-text mb-2">{project.type}</p><h3 className="headline project-card-title">{project.title}</h3></div>
    </Link>
  );
}
