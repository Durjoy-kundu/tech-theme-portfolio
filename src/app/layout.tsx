import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Durjoy Kundu- Software Engineer",
  description: "Building scalable applications with modern technologies. Full-stack developer specializing in React, Next.js, Node.js, and cloud solutions.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Durjoy Kundu" }],
  creator: "Durjoy Kundu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "#",
    title: "Durjoy Kundu - Software Engineer",
    description: "Building scalable applications with modern technologies.",
    siteName: "Durjoy Kundu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Durjoy Kundu- Software Engineer",
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
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className={`${inter.className} grid-background`}>
        {children}
      </body>
    </html>
  );
}
