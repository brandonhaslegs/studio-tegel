import { Navigation } from "@/components/navigation";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <><Navigation /><section className="page-grid min-h-[68svh] items-end bg-paper pb-10 pt-28 md:pb-16"><p className="eyebrow col-span-12 self-start pt-2 md:col-span-2">{eyebrow}</p><div className="col-span-12 md:col-span-9 md:col-start-4"><h1 className="display-medium max-w-[12ch]">{title}</h1>{children && <div className="mt-10 max-w-sm text-sm leading-[1.55] text-charcoal">{children}</div>}</div></section></>;
}
