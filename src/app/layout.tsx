import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://studiotegel.de"),
  title: { default: "Studio Tegel — Bespoke interiors & furniture", template: "%s — Studio Tegel" },
  description: "A Berlin design studio and woodworking workshop for bespoke interiors and furniture.",
  openGraph: { title: "Studio Tegel", description: "Bespoke interiors and furniture, designed and made in Berlin.", type: "website", locale: "en_DE" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
