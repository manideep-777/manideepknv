import React from "react";
import Link from "next/link";


const ResumeButton = () => (
  <Link
    href="/manideep resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-7 lg:py-4 bg-black/40 backdrop-blur-md rounded-full border border-white/30 text-zinc-400 hover:bg-black/50 transition-colors w-full sm:w-auto max-w-xs sm:max-w-none"
  >
    <span className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-9 lg:w-9 rounded-full transition-all duration-300 ease-in-out">
      <img src="/file.svg" alt="Resume Icon" className="h-3 sm:h-4 md:h-5 lg:h-6 w-3 sm:w-4 md:w-5 lg:w-6" />
    </span>
    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">View Resume</span>
  </Link>
);

export default ResumeButton;