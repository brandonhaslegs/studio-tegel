"use client";

import Image, { type ImageProps } from "next/image";
import { useState, type ComponentProps } from "react";

export function SiteImage({ className = "", ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return <><span aria-hidden="true" className={`image-skeleton absolute inset-0 ${loaded ? "hidden" : ""}`} /><Image {...props} className={`${className} ${loaded ? "" : "invisible"}`} onLoad={() => setLoaded(true)} /></>;
}

export function GalleryImage({ className = "", onLoad, ...props }: ComponentProps<"img">) {
  const [loaded, setLoaded] = useState(false);

  return <div className="relative min-h-48">{!loaded && <span aria-hidden="true" className="image-skeleton absolute inset-0" />}<img {...props} className={`${className} ${loaded ? "" : "invisible"}`} onLoad={(event) => { setLoaded(true); onLoad?.(event); }} /></div>;
}
