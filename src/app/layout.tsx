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
  title: "Talagana Rajesh - Full stack web developer from Berhampur, Odisha",
  authors: [{ name: "Talagana Rajesh" }],
  description: "Portfolio website of Talagana Rajesh - Full stack developer and Founder of Get Material NIST notes",
  icons: "/talaganaRajesh.jpg",
  keywords: [
    "Talagana Rajesh",
    "Portfolio of rajesh",
    "Talagana Rajesh portfolio",
    "Talagana Rajesh portfolio website",
    "Talagana Rajesh portfolio website of rajesh",
    "talagana rajesh",
    "Rajesh Talagana",
    "Rajesh Talagana portfolio",
    "Rajesh",
    "Rajesh portfolio",
    "Rajesh portfolio website",
    "Full stack web developer",
    "Full stack developer in berhampur",
    "Full stack developer in odisha",
    "Full stack developer in india",
    "Full stack developer in nist",
    "Full stack developer in berhampur odisha",
    "Full stack developer in india",
    "Web developer",
    "Web developer in berhampur",
    "Web developer in odisha",
    "Web developer in india",
    "Web developer in nist",
    "Web developer in berhampur odisha",
    "Website developer in berhampur",
    "Website developer in odisha",
    "Website developer in india",
    "Need a website developer",
    "Best website developer",
    "Best website developer in berhampur",
    "Best website developer in odisha",
    "Best website developer in india",
    "Best website developer in nist",
    "Best website developer in berhampur odisha",
    "Best full stack web developer",
    "Full stack website developer for my business",
    "Web developer near me",
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
    "Website developers",
    "Website developers in berhampur",
    "Website developers in india",
    "Near by website developers",
    "Best website developers",
    "Best full stack developers",
    "Need a web developer",
    "Freelance web developer",
    "Freelance web developer in berhampur",
    "Freelance web developer in odisha",
    "Freelance web developer in india",
    "Freelancer rajesh",
    "Freelancer rajesh berhampur",
    "Rajesh freelancer",
    "Rajesh freelancing",
    "Freelance web developer in berhampur odisha",
    "Freelance web developer in nist",
    "Freelance web developer in berhampur nist",
    "Freelance web developer in berhampur odisha nist",
    "Freelance web developer in berhampur odisha nist",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Talagana Rajesh",
              image: "https://talaganarajesh.vercel.app/talaganaRajesh.jpg",
              jobTitle: "Website Developer",
              url: "https://talaganarajesh.vercel.app/",
              sameAs: [
                "https://www.linkedin.com/in/talaganaRajesh",
                "https://github.com/talaganaRajesh",
                "https://x.com/talaganaRajesh",
                "https://www.instagram.com/talagana.rajesh/"
              ]
            })
          }}
        />
        <meta name="google-site-verification" content="ETpfMVbd5MVRbbOSI8n5MtBcYkJc7IUWaw9QGhatoCE" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Pass items to NavBar */}
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
