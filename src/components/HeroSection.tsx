"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import myPhoto from "/public/myphoto.jpg";

export default function HeroSection() {
  return (
    <div className=" flex min-h-screen bottom-0 w-full h-full flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      
      <div className="absolute inset-0 bg-black/60 z-0">
        {/* Star field effect */}
      </div>

      {/* Planet curve at bottom */}
      <div className="absolute border-b-8 mb-2 border-black bottom-0 left-0 right-0 h-32 bg-purple-900 rounded-t-[100%] blur-md z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-black/90 rounded-t-[100%] z-0"></div>

      {/* Content container */}
      <div className="container mx-auto max-w-6xl flex flex-col justify-center items-center z-10 mt-24">
        {/* Announcement banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <a href="https://getmaterial.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white/90 hover:bg-black/50 transition-colors">
            <span className="bg-purple-800 text-gray-200 text-xs font-medium px-2 py-1 rounded-full">New</span>
            <AnimatedShinyText>Project Launched</AnimatedShinyText>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Turning thoughts into<br />
            beautiful <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-b from-zinc-600 to-white">
              web stories
            </span>

          </h1>
        </motion.div>

        {/* Introduction with image */}
        <motion.div
          className="flex relative flex-col md:flex-row items-center justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-xl text-white/90">Hello, I&apos;m
            <span
              className="px-5 py-1 text-white bg-purple-700 inline-block"
              style={{
                clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"
              }}
            >
              Talagana Rajesh
            </span>
          </p>
          <div className="group cursor-pointer h-12 w-12 rounded-full overflow-hidden border-2 border-white/20">
            <Image
              src={myPhoto}
              alt="Talagana Rajesh"
              width={50}
              height={50}
              className="h-full w-full object-cover"
            />

            {/* Hover Popup */}
            <div
              className="absolute rounded-full  -top-20 left-1/2 ml-8 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out
               border border-white/30 shadow-lg overflow-hidden z-10"
            >
              <Image
                src={myPhoto}
                alt="Talagana Rajesh"
                width={120}
                height={120}
                className="object-cover w-40 h-40"
              />
            </div>
          </div>

          <p className="text-xl text-white/90">a Full Stack Developer</p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {/* Let's Connect Button */}
          <Link href="/contact" className="group flex items-center gap-2 px-6 py-4 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-zinc-400 hover:bg-black/50 transition-colors">
            <span className="text-lg font-medium">Let&apos;s Connect</span>
            <div className="h-8 w-8 rounded-full bg-zinc-400 flex items-center justify-center group-hover:bg-purple-600 group-hover:translate-x-2 transition-all duration-300 ease-in-out">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>

          {/* Email */}
          <a href="mailto:talaganarajesh@gmail.com" className="hidden md:flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="gray" strokeWidth="2" />
              <path d="M2 7L9.95263 12.4526C10.5936 12.8747 11.3796 13.0964 12.1748 13.0964C12.97 13.0964 13.756 12.8747 14.397 12.4526L22 7" stroke="gray" strokeWidth="2" />
            </svg>
            <span className="text-zinc-400 hover:text-purple-500 transition-all duration-300 ">talaganarajesh@gmail.com</span>
          </a>

        </motion.div>
      </div>
    </div>
  );
}