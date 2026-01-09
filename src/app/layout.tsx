import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Ebubechukwu Chiemeka | Fullstack Developer",
  description:
    "Hey! Welcome to my portfolio. I’m Ebubechukwu Chiemeka, a fullstack developer showcasing versatile websites and modern designs. If you like what you see, hit me up!",

  openGraph: {
    title: "Ebubechukwu Chiemeka | Fullstack Developer Portfolio",
    description:
      "Fullstack developer building modern, responsive, and scalable web experiences.",
    url: "https://portfolio-delta-three-24.vercel.app/",
    siteName: "Ebubechukwu Portfolio",
    images: [
      {
        url: "https://portfolio-delta-three-24.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Ebubechukwu Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ebubechukwu Chiemeka | Fullstack Developer",
    description:
      "Check out my portfolio showcasing versatile websites and designs. Fullstack developer ready to bring your ideas to life.",
    images: ["https://portfolio-delta-three-24.vercel.app/og.png"],
    site: "@Fatboy_Of_Web3",
    creator: "@Fatboy_Of_Web3",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
