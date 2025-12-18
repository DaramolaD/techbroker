import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://techbrokers.com'),
  title: {
    default: "Tech Brokers | Digital Transformation & Innovation Partner",
    template: "%s | Tech Brokers"
  },
  description: "Tech Brokers operates as a catalyst for digital transformation and innovation. We partner with businesses, industries, and government entities to navigate technology adoption and drive measurable impact.",
  keywords: [
    "digital transformation",
    "technology consulting",
    "innovation partner",
    "business digitalization",
    "government technology solutions",
    "tech consulting Africa",
    "enterprise solutions",
    "digital innovation",
    "technology adoption",
    "software development",
    "digital strategy",
    "Tech Brokers"
  ],
  authors: [{ name: "Tech Brokers" }],
  creator: "Tech Brokers",
  publisher: "Tech Brokers",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon0.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techbrokers.com',
    siteName: 'Tech Brokers',
    title: 'Tech Brokers | Digital Transformation & Innovation Partner',
    description: 'We partner with businesses, industries, and government entities to navigate technology adoption and drive measurable impact through digital transformation.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Tech Brokers - Digital Transformation Partner',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Brokers | Digital Transformation & Innovation Partner',
    description: 'We partner with businesses, industries, and government entities to navigate technology adoption and drive measurable impact.',
    images: ['/images/hero.jpg'],
    creator: '@techbrokers',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://techbrokers.com',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="manifest" href="/manifest.json" />
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-gray-900 bg-white`}>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
