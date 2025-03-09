import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO and social sharing
export const metadata: Metadata = {
  title: {
    default: "SaaS Template – Modern Software-as-a-Service Platform",
    template: "%s | SaaS Template",
  },
  description: "A powerful, customizable SaaS template built with Next.js and modern web technologies.",
  keywords: ["SaaS", "software", "template", "NextJS", "React", "TypeScript", "business"],
  authors: [{ name: "SaaS Template Team" }],
  creator: "SaaS Template Team",
  robots: {
    index: true,
    follow: true,
  },
};

// Viewport configuration for responsive design
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
