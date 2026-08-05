import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Urvi Ladhani | Backend Developer & Computer Engineering Student",
  description: "Explore the portfolio of Urvi Ladhani, a Computer Engineering Student and Backend Developer specializing in MERN stack, AI applications, and scalable systems.",
  keywords: ["Urvi Ladhani", "Backend Developer", "MERN Stack", "Computer Engineering", "Software Engineer Portfolio", "AI Applications"],
  authors: [{ name: "Urvi Ladhani" }],
  openGraph: {
    title: "Urvi Ladhani | Backend Developer & Computer Engineering Student",
    description: "Explore the portfolio of Urvi Ladhani, a Computer Engineering Student and Backend Developer specializing in MERN stack, AI applications, and scalable systems.",
    url: "https://github.com/Urvi-Ladhani",
    siteName: "Urvi Ladhani Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urvi Ladhani | Backend Developer & Computer Engineering Student",
    description: "Explore the portfolio of Urvi Ladhani, a Computer Engineering Student and Backend Developer specializing in MERN stack, AI applications, and scalable systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col transition-colors duration-300 bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
