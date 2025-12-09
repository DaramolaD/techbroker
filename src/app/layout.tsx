import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tech Brokers | Digital Transformation Partner",
  description: "Empowering Businesses & Governments to Build and Scale Digitally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-gray-900 bg-white`}>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
