import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ project, priority = false, variant = "default" }: { project: { title: string; type: string; image: string; slug: string }; priority?: boolean; variant?: "default" | "overlay" }) {
  if (variant === "overlay") {
    return (
      <Link className="group project-card block" href={`/projects/${project.slug}`}>
        <div className="image-frame relative aspect-[4/5]">
          <Image src={project.image} alt="" fill priority={priority} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0 flex items-end bg-black/35 p-5 text-paper transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
            <div className="translate-y-0 transition-transform duration-500 md:translate-y-3 md:group-hover:translate-y-0 md:group-focus-visible:translate-y-0">
              <p className="eyebrow mb-3 text-paper/70">{project.type}</p>
              <h3 className="text-3xl leading-[1.05] tracking-[-0.03em] md:text-4xl">{project.title}</h3>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link className="group project-card block" href={`/projects/${project.slug}`}>
      <div className="image-frame relative aspect-[4/5]">
        <Image src={project.image} alt="" fill priority={priority} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      </div>
      <div className="flex items-start justify-between gap-5 border-t border-line pt-3">
        <h3 className="text-xl tracking-[-0.02em] md:text-2xl">{project.title}</h3>
        <p className="pt-1 text-right text-[0.64rem] uppercase tracking-[0.08em] text-stone">{project.type}</p>
      </div>
    </Link>
  );
}
