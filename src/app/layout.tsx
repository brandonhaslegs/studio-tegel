import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://studiotegel.de"),
  title: { default: "Studio Tegel: Maßgefertigte Innenräume & Möbel", template: "%s | Studio Tegel" },
  description: "Designstudio und Holzwerkstatt in Berlin für maßgefertigte Innenräume und Möbel.",
  openGraph: { title: "Studio Tegel", description: "Maßgefertigte Innenräume und Möbel, entworfen und gefertigt in Berlin.", type: "website", locale: "de_DE" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body><PageTransition>{children}</PageTransition></body>
    </html>
  );
}
