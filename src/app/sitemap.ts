import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/projects", "/studio", "/services", "/contact"].map((path) => ({ url: `https://studiotegel.de${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : 0.8 })); }
