import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"], 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DeBloomField Investment Ltd | Business Services in Nigeria",
    template: "%s | DeBloomField Investment Ltd",
  },

  description:
    "DeBloomField Investment Ltd provides contracting, logistics, supplies, shipping, equipment, real estate and solar energy solutions in Port Harcourt and across Nigeria.",

  keywords: [
    "DeBloomField Investment Ltd",
    "business services Nigeria",
    "general contractor Port Harcourt",
    "logistics services Nigeria",
    "supplies Port Harcourt",
    "shipping services Nigeria",
    "construction equipment Nigeria",
    "real estate Port Harcourt",
    "solar energy Nigeria",
  ],

  authors: [{ name: "DeBloomField Investment Ltd" }],
  creator: "DeBloomField Investment Ltd",
  publisher: "DeBloomField Investment Ltd",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "DeBloomField Investment Ltd",
    title: "DeBloomField Investment Ltd",
    description:
      "Integrated contracting, logistics, supplies, shipping, equipment, real estate and solar energy solutions across Nigeria.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
     <body>
  <Header />
  {children}
  <Footer />
</body>
    </html>
  );
}