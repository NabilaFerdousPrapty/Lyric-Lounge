import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lyric Lounge-Leading the way in music education",
  description:
    "Lyric Lounge is a music education platform that offers courses in music production, songwriting, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">

      <body className={inter.className}>
        <div className="relative flex justify-center items-center w-full">
        <Navbar/>
        </div>
        {children}</body>
    </html>
  );
}
