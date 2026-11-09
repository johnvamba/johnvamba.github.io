import type { Metadata, Viewport } from "next";
import "@fontsource/source-serif-4/400.css";
import "@fontsource/source-serif-4/600.css";
import "@fontsource/source-serif-4/400-italic.css";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/700.css";
import "./globals.css";
import { profile } from "@/data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: `${profile.name} · ${profile.headline}`,
  description: profile.intro,
  authors: [{ name: profile.name }],
  keywords: ["John Amba", "Full Stack Developer", "Laravel", "ASP.NET Core", "React", "Vue", "Philippines", "Remote"],
  openGraph: {
    title: `${profile.name} · ${profile.headline}`,
    description: profile.summary,
    type: "profile",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f4f4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
