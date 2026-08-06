import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://studiotegel.de"),
  title: { default: "Studio Tegel — Bespoke interiors & furniture", template: "%s — Studio Tegel" },
  description: "A Berlin design studio and woodworking workshop for bespoke interiors and furniture.",
  openGraph: { title: "Studio Tegel", description: "Bespoke interiors and furniture, designed and made in Berlin.", type: "website", locale: "en_DE" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
