import Link from "next/link";
export default function NotFound() { return <main className="grid min-h-svh place-items-center bg-ink p-6 text-paper"><div><p className="eyebrow mb-7">404 / Not found</p><h1 className="display-medium max-w-[9ch]">This room isn’t here.</h1><Link className="text-link mt-10" href="/">Back home</Link></div></main>; }
