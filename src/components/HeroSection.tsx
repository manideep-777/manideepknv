"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import myPhoto from "/public/myphoto.jpg";

export default function HeroSection() {
  return (
    <div className="flex  min-h-[100svh] md:min-h-screen w-full h-full flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}

      <div className="absolute inset-0 bg-black/60 z-0">
        {/* Star field effect */}
      </div>

      {/* Planet curve at bottom */}
      <div className="absolute border-b-8 mb-2 border-black bottom-0 left-0 right-0 h-52 md:h-32 bg-purple-900 rounded-t-[100%] blur-md z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-52 md:h-32 bg-black/90 rounded-t-[100%] z-0"></div>

      {/* Content container */}
      <div className="container mx-auto max-w-6xl flex flex-col justify-center items-center z-10 mt-14 md:mt-24">
        {/* Announcement banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-5 md:mb-12 w-full px-2 flex justify-center"
        >
          <a
            href="https://getmaterial.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white/90 hover:bg-black/50 transition-colors text-sm md:text-base"
          >
            <span className="bg-purple-800 text-gray-200 text-xs font-medium px-1.5 py-0.5 md:px-2 md:py-1 rounded-full">New</span>
            <AnimatedShinyText>Project Launched</AnimatedShinyText>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-4 md:h-4">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          className="text-center mb-16 md:mb-10 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-tight">
            Turning thoughts into<br />
            beautiful <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-b from-zinc-600 to-white">
              web stories
            </span>
          </h1>
        </motion.div>

        {/* Introduction with image */}
        <motion.div
          className="flex relative flex-col items-center justify-center gap-3 mb-10 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-lg md:text-xl text-white/90">Hello, I&apos;m
            <span
              className="mx-2 px-3 md:px-5 py-1 text-white bg-purple-700 inline-block"
              style={{
                clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"
              }}
            >
              Talagana Rajesh
            </span>
          </p>
          <div className="group md:block hidden cursor-pointer h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border-2 border-white/20 my-2 md:my-0">
            <Image
              src={myPhoto}
              alt="Talagana Rajesh"
              width={50}
              height={50}
              className="h-full w-full object-cover"
            />

            {/* Hover Popup */}
            <div
              className="absolute rounded-full -top-16 md:-top-20 left-1/2 ml-0 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out
               border border-white/30 shadow-lg overflow-hidden z-10"
            >
              <Image
                src={myPhoto}
                alt="Talagana Rajesh"
                width={100}
                height={100}
                className="object-cover w-32 h-32 md:w-40 md:h-40"
              />
            </div>
          </div>

          <p className="text-sm md:text-xl text-white/90">A Full Stack Developer</p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="flex flex-col mt-5 md:flex-row items-center justify-center gap-4 md:gap-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {/* Let's Connect Button */}
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-4 bg-black/40 backdrop-blur-md rounded-full border border-white/30 text-zinc-400 hover:bg-black/50 transition-colors"
          >
            <span className="text-base md:text-lg font-medium">Let&apos;s Connect</span>
            <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-zinc-400 flex items-center justify-center group-hover:bg-purple-600 group-hover:translate-x-2 transition-all duration-300 ease-in-out">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>

          {/* Email */}
          <a
            href="mailto:talaganarajesh@gmail.com"
            className="flex items-center justify-center gap-2 text-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="gray" strokeWidth="2" />
              <path d="M2 7L9.95263 12.4526C10.5936 12.8747 11.3796 13.0964 12.1748 13.0964C12.97 13.0964 13.756 12.8747 14.397 12.4526L22 7" stroke="gray" strokeWidth="2" />
            </svg>
            <span className="text-zinc-400 hover:text-purple-500 transition-all duration-300 text-sm md:text-base truncate">talaganarajesh@gmail.com</span>
          </a>
        </motion.div>



      </div>
    </div>
  );
}