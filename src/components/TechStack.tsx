'use client'

// components/TechStack.tsx
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import your tech stack data from data.ts
import { techStack } from '../lib/data'

const TechStack: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "center center"] // triggers animation when centered in viewport
    });

    // Transform values for the three sides of the triangle
    const side1Progress = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
    const side2Progress = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
    const side3Progress = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

    return (
        <div ref={containerRef} className="min-h-screen w-full pt-24 sm:pt-52 bg-black text-white py-12 sm:py-20 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center mb-10 sm:mb-16">

                    {/* Triangle + Heading Section */}
                    <div className="relative w-full flex flex-col items-center justify-center mb-5">
                        {/* Triangle SVG Behind */}
                        <motion.div
                            className="absolute w-40 h-40 sm:w-64 sm:h-64"
                            style={{ zIndex: 0 }} // Behind the heading
                        >
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <motion.line
                                    x1="50" y1="10" x2="10" y2="90"
                                    stroke="orange" strokeWidth="2"
                                    style={{ pathLength: side1Progress }}
                                />
                                <motion.line
                                    x1="10" y1="90" x2="90" y2="90"
                                    stroke="orange" strokeWidth="2"
                                    style={{ pathLength: side2Progress }}
                                />
                                <motion.line
                                    x1="90" y1="90" x2="50" y2="10"
                                    stroke="orange" strokeWidth="2"
                                    style={{ pathLength: side3Progress }}
                                />
                            </svg>
                        </motion.div>

                        {/* Text in front */}
                        <div className="relative pb-4 sm:pb-6 backdrop-blur-xs mt-24 sm:mt-32 z-10 text-center">
                            <p className="text-[10px] sm:text-xs uppercase tracking-widest">
                                Better than yesterday.
                            </p>
                            <motion.h1
                                className="text-3xl sm:text-5xl font-bold"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                My Tech Stack
                            </motion.h1>
                        </div>
                    </div>
                </div>

                <div className="mt-6 sm:mt-10 flex flex-col gap-2 sm:gap-3 items-center justify-center">
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
                        {techStack.slice(0, 7).map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.7 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                whileHover={{ scale: 1.05, rotate: 3, color: "orange" }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="rounded-full py-1.5 sm:py-2 px-2 sm:px-3 flex items-center gap-1.5 sm:gap-2 border border-gray-700 bg-gray-900/50"
                            >
                                <span className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                                    <Image src={tech.icon} alt={tech.name} />
                                </span>
                                <span className="text-xs sm:text-sm font-medium">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
                        {techStack.slice(7, 15).map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.7 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, delay: i * 0.01 }}
                                whileHover={{ scale: 1.05, rotate: 3, color: "orange" }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="rounded-full py-1.5 sm:py-2 px-2 sm:px-3 flex items-center gap-1.5 sm:gap-2 border border-gray-700 bg-gray-900/50"
                            >
                                <span className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                                    <Image src={tech.icon} alt={tech.name} />
                                </span>
                                <span className="text-xs sm:text-sm font-medium">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
                        {techStack.slice(15, 30).map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.7 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, delay: i * 0.02 }}
                                whileHover={{ scale: 1.05, rotate: 3, color: "orange" }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="rounded-full py-1.5 sm:py-2 px-2 sm:px-3 flex items-center gap-1.5 sm:gap-2 border border-gray-700 bg-gray-900/50"
                            >
                                <span className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                                    <Image src={tech.icon} alt={tech.name} />
                                </span>
                                <span className="text-xs sm:text-sm font-medium">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;