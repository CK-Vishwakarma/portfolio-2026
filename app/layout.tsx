import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Chanchal KV | Fullstack Developer (React, Next.js, AI)",
  description:
    "Chanchal Vishvakarma is a Senior Fullstack Developer building fast, secure web and mobile applications with AI integrations using React, Next.js, and NestJS.",

  authors: [{ name: "Chanchal Vishvakarma", url: "https://chanchalkv.com" }],

  openGraph: {
    title: "Chanchal KV | Fullstack Developer",
    description:
      "Senior Fullstack Developer building high-performance web and mobile apps with AI features using React, Next.js, and NestJS.",
    url: "https://chanchalkv.com",
    siteName: "Chanchal KV",
    images: [
      {
        url: "https://chanchalkv.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chanchal KV - Fullstack Developer",
      },
    ],
    type: "website",
  },

  alternates: {
    canonical: "https://chanchalkv.com",
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
