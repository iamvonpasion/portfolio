import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Von Pasion — Solutions Architect",
  description:
    "AI-Driven Solutions Architect with 17+ years turning complexity into working systems. Enterprise architecture, system design, and AI-powered development.",
  openGraph: {
    title: "Von Pasion — Solutions Architect",
    description:
      "AI-Driven Solutions Architect with 17+ years turning complexity into working systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Von Pasion — Solutions Architect",
    description:
      "AI-Driven Solutions Architect with 17+ years turning complexity into working systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
