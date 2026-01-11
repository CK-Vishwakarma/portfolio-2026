import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chanchal Kumar Vishvakarma - Senior Fullstack Engineer",
  description: "Senior Fullstack Engineer specializing in React/Next.js and scalable backend systems. 5+ years experience leading teams and delivering financial, healthcare, AI, and edtech solutions at scale.",
  keywords: ["fullstack engineer", "react", "nextjs", "nodejs", "aws", "cloud", "ci/cd", "team lead"],
  authors: [{ name: "Chanchal Kumar Vishvakarma" }],
  openGraph: {
    title: "Chanchal Kumar Vishvakarma - Senior Fullstack Engineer",
    description: "Building high-performance frontend architectures and scalable backend systems that deliver exceptional user experiences at scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
