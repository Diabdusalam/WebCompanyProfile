import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/Footer"));

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOOK",
  description: "LOOK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
