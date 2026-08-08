export function PageIntro({ label, title, children, compact = false }: { label?: string; title: string; children?: React.ReactNode; compact?: boolean }) {
  return <section className={`page-grid items-end bg-paper pt-[136px] ${compact ? "pb-16 md:pb-20" : "min-h-[68svh] pb-10 md:pb-16"}`}>{label && <p className="nav-text col-span-12 self-start pt-2 md:col-span-2">{label}</p>}<div className="col-span-12 md:col-span-9 md:col-start-4"><h1 className="headline max-w-[12ch]">{title}</h1>{children && <div className="project-copy mt-10 max-w-sm">{children}</div>}</div></section>;
}
