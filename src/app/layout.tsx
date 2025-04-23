import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "../components/Navbar"; // keep this
import Footer from '@/components/Footer';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talagana Rajesh-Full stack web developer",
  authors: [{ name: "Talagana Rajesh" }],
  description: "Portfolio website of Talagana Rajesh-Founder of Get Material",
  icons: "/myphoto.jpg",
  keywords: [
    "Talagana Rajesh",
    "Portfolio",
    "Full stack web developer",
    "Full stack developer in NIST",
    "Get Material",
    "Web development",
    "Software engineer",
    "Software engineer in NIST",
    "Software engineer in Berhampur",
    "Web Developer in Berhampur",
    "Website Developer in Berhampur",
    "Web Developer in India",
    "Website Developer in India",
    "Web Developer in Odisha",
    "Website Developer in Odisha",
    "Web Developer in Berhampur Odisha",
    "Website Developer in Berhampur Odisha",
    "Founder of Get Material",
    "Founder of Get Material nist notes",
    "Founder of Get Material notes",
    "Founder of Get Material notes nist",
    "Rajesh nist",
    "Rajesh Get Material",
    "Rajesh Get Material nist notes",
    "Rajesh Get Material nist",
    "Rajesh Get Material notes",
    "Rajesh Get Material notes nist",
    "Talagana Rajesh nist",
    "Talagana Rajesh Get Material",
    "Talagana Rajesh berhampur",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Pass items to NavBar */}
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
