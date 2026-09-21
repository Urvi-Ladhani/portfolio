import type { Metadata } from "next";
import { Inter, Fraunces, Caveat } from "next/font/google";
import "@/styles/tokens.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Urvi Ladhani's Portfolio | macOS Interactive Desktop",
  description: "Interactive macOS desktop portfolio website built with Next.js 14 App Router, TypeScript, Supabase, and Framer Motion.",
  keywords: ["Portfolio", "macOS Desktop", "Full Stack Developer", "Software Engineer", "Next.js", "Supabase"],
  authors: [{ name: "Urvi Ladhani" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="h-full w-full overflow-hidden select-none"
        style={{
          backgroundColor: 'var(--color-bg-desktop, #FAFAFA)',
          fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
