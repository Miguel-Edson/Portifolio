import type { Metadata } from "next";
import { Inter, K2D } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const k2d = K2D({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-k2d",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portifólio",
  description: "Engenharia de Computação & Desenvolvimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${k2d.variable} antialiased`}>
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}
