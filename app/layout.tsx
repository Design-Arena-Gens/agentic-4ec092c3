const title = "Agentic Viral YouTube Director";
const description =
  "Elite autonomous agent that transforms story ideas into cinematic, monetized, copyright-safe 15-minute viral YouTube productions.";

import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title,
  description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
