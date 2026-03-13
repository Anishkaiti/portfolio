import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getAssets } from "@/lib/getAssets";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const assets = getAssets();
  return {
    title: assets.seo.title,
    description: assets.seo.description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-[#fafafa] text-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}
