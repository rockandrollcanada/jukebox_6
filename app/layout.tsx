import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rock and Roll Canada | Jukebox 6.0",
  description: "Rock and Roll Canada Video Jukebox - Watch Canadian Rock Bands play Ontario",
  keywords: ["Canada", "Jukebox", "music", "rock", "Toronto", "Rockpile"],
  authors: [{ name: "Glen Smith" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">{children}</body>
    </html>
  );
}
