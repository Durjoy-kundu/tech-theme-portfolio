import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Badhan Sen - Software Engineer",
  description: "Building scalable applications with modern technologies. Full-stack developer specializing in React, Next.js, Node.js, and cloud solutions.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Badhan Sen" }],
  creator: "Badhan Sen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://badhansen.com",
    title: "Badhan Sen - Software Engineer",
    description: "Building scalable applications with modern technologies.",
    siteName: "Badhan Sen Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Badhan Sen - Software Engineer",
    description: "Building scalable applications with modern technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} grid-background`}>
        {children}
      </body>
    </html>
  );
}
