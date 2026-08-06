import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ project, priority = false }: { project: { title: string; type: string; image: string; slug: string }; priority?: boolean }) {
  return (
    <Link className="group block" href={`/projects/${project.slug}`}>
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
