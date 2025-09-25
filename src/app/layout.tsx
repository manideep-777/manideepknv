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
  title: "Kandepu Nage Venkata Manideep - Full stack web developer from Berhampur, Odisha",
  authors: [{ name: "Kandepu Nage Venkata Manideep" }],
  description: "Portfolio website of Kandepu Nage Venkata Manideep - Full stack developer and Founder of Get Material NIST notes",
  icons: "/logo.png",
  keywords: [
    "Kandepu Nage Venkata Manideep",
    "Portfolio of manideep",
    "Kandepu Nage Venkata Manideep portfolio",
    "Kandepu Nage Venkata Manideep portfolio website",
    "Kandepu Nage Venkata Manideep portfolio website of manideep",
    "kandepu nage venkata manideep",
    "Manideep Kandepu",
    "Manideep Kandepu portfolio",
    "Kandepu",
    "Kandepu portfolio",
    "Kandepu portfolio website",
    "Full stack web developer",
    "Full stack developer in vijayawada",
    "Full stack developer in andhra pradesh",
    "Full stack developer in india",
    "Full stack developer in nist",
    "Full stack developer in vijayawada andhra pradesh",
    "Full stack developer in india",
    "Web developer",
    "Web developer in vijayawada",
    "Web developer in andhra pradesh",
    "Web developer in india",
    "Web developer in nist",
    "Web developer in vijayawada andhra pradesh",
    "Website developer in vijayawada",
    "Website developer in andhra pradesh",
    "Website developer in india",
    "Need a website developer",
    "Best website developer",
    "Best website developer in vijayawada",
    "Best website developer in andhra pradesh",
    "Best website developer in india",
    "Best website developer in nist",
    "Best website developer in vijayawada andhra pradesh",
    "Best full stack web developer",
    "Full stack website developer for my business",
    "Web developer near me",
    "Full stack web developer",
    "Full stack developer in NIST",
    "Get Material",
    "Web development",
    "Software engineer",
    "Software engineer in NIST",
    "Software engineer in Vijayawada",
    "Web Developer in Vijayawada",
    "Website Developer in Vijayawada",
    "Web Developer in India",
    "Website Developer in India",
    "Web Developer in Andhra Pradesh",
    "Website Developer in Andhra Pradesh",
    "Web Developer in Vijayawada Andhra Pradesh",
    "Website Developer in Vijayawada Andhra Pradesh",
    "Founder of Get Material",
    "Founder of Get Material nist notes",
    "Founder of Get Material notes",
    "Founder of Get Material notes nist",
    "Kandepu Nage Venkata Manideep nist",
    "Kandepu Nage Venkata Manideep Get Material",
    "Kandepu Nage Venkata Manideep Get Material nist notes",
    "Kandepu Nage Venkata Manideep Get Material nist",
    "Kandepu Nage Venkata Manideep Get Material notes",
    "Kandepu Nage Venkata Manideep Get Material notes nist",
    "Kandepu Naga Venkata Manideep nist",
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
    "Freelance web developer in vijayawada",
    "Freelance web developer in andhra pradesh",
    "Freelance web developer in india",
    "Freelancer rajesh",
    "Freelancer rajesh vijayawada",
    "Rajesh freelancer",
    "Rajesh freelancing",
    "Freelance web developer in vijayawada andhra pradesh",
    "Freelance web developer in nist",
    "Freelance web developer in vijayawada andhra pradesh",
    "Freelance web developer in vijayawada andhra pradesh",
    "Freelance web developer in vijayawada andhra pradesh",
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
