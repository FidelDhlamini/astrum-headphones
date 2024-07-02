"use effect"
// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/main/Navbar";
import Footer from "@/components/main/main/Footer";
import Product from "@/components/main/main/Product";
import BackgroundColorSwitcher from "@/components/main/main/BackgroundColorSwitcher";
import CanvasBackground from "@/components/main/main/CanvasBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astrum",
  description: "A Beautiful Sonic Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-y-scroll overflow-x-hidden`}>
        <BackgroundColorSwitcher />
        <CanvasBackground />
        <div className="relative z-10">
          <Navbar />
          <main className="flex-grow">
            <Product />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
