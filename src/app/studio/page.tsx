import Image from "next/image";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/page-intro";
import { images } from "@/lib/site";

export default function StudioPage() { return <main><PageIntro compact eyebrow="The studio" title="A workshop with an architectural point of view.">We work between design and making, with a direct relationship to every material and detail.</PageIntro><section className="page-grid pb-24 md:pb-40"><div className="image-frame relative col-span-12 aspect-[3/2] md:col-span-8 md:col-start-3"><Image src={images.team} alt="The Studio Tegel team" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover" /></div></section><section className="page-grid bg-charcoal py-24 text-paper md:py-40"><p className="eyebrow col-span-12 md:col-span-2">Our approach</p><p className="col-span-12 mt-8 text-2xl leading-[1.18] tracking-[-0.02em] md:col-span-7 md:col-start-4 md:mt-0 md:text-4xl">We make work that acknowledges its material, earns its place and improves with time.</p></section><Footer /></main>; }
