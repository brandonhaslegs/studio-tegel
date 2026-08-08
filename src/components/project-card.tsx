import Image from "next/image";
import Link from "next/link";

const overlayColors = ["#ff3b30", "#ff9500", "#ffd60a", "#34c759", "#0a84ff", "#af52de", "#ff2d55"];

function colorForProject(slug: string) {
  return overlayColors[[...slug].reduce((total, character) => total + character.charCodeAt(0), 0) % overlayColors.length];
}

export function ProjectCard({ project, priority = false }: { project: { title: string; type: string; image: string; slug: string }; priority?: boolean }) {
  return (
    <Link className="group project-card block" href={`/projects/${project.slug}`}>
      <div className="image-frame relative aspect-[4/5]">
        <Image src={project.image} alt="" fill priority={priority} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-35 md:opacity-100 md:group-hover:opacity-35 md:group-focus-visible:opacity-35" />
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
