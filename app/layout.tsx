import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://fistic-craiova.ro");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "FISTIC",
  description: "Clatite fine si mini-gogosi pentru targuri si evenimente in Craiova.",
  openGraph: {
    title: "FISTIC",
    description: "Clatite fine si mini-gogosi pentru targuri si evenimente in Craiova.",
    type: "website",
    locale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    title: "FISTIC",
    description: "Clatite fine si mini-gogosi pentru targuri si evenimente in Craiova.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
