import Image from "next/image";
import Link from "next/link";

const overlayColors = ["#ff9b85", "#963d5a", "#ead637", "#0e34a0", "#a2d3c2"];

function colorForProject(slug: string) {
  return overlayColors[[...slug].reduce((total, character) => total + character.charCodeAt(0), 0) % overlayColors.length];
}

export function ProjectCard({ project, priority = false }: { project: { title: string; type: string; image: string; slug: string }; priority?: boolean }) {
  return (
    <Link className="group project-card block" href={`/projects/${project.slug}`}>
      <div className="image-frame relative aspect-[4/5]">
        <Image src={project.image} alt="" fill priority={priority} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        <div className="absolute inset-0 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-90 md:group-focus-visible:opacity-90" style={{ backgroundColor: colorForProject(project.slug), mixBlendMode: "color" }} />
        <div className="absolute inset-0 flex items-end p-5 text-paper transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
          <div className="translate-y-0 transition-transform duration-500 md:translate-y-3 md:group-hover:translate-y-0 md:group-focus-visible:translate-y-0">
            <p className="eyebrow mb-3 text-paper/85 drop-shadow-sm">{project.type}</p>
            <h3 className="text-3xl leading-[1.05] tracking-[-0.03em] drop-shadow-md md:text-4xl">{project.title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
