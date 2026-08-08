import type { Metadata, Viewport } from "next";
import { Navigation } from "@/components/navigation";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://studiotegel.de"),
  title: { default: "Studio Tegel: Maßgefertigte Innenräume & Möbel", template: "%s | Studio Tegel" },
  description: "Designstudio und Holzwerkstatt in Berlin für maßgefertigte Innenräume und Möbel.",
  openGraph: { title: "Studio Tegel", description: "Maßgefertigte Innenräume und Möbel, entworfen und gefertigt in Berlin.", type: "website", locale: "de_DE" },
};

export const viewport: Viewport = {
  themeColor: "#171715",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body><Navigation />{children}</body>
    </html>
  );
}
