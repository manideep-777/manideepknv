'use client';

// components/WorkShowcaseSnapping.tsx
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { StaticImageData } from 'next/image';

import GetMaterialImage from '/public/assets/getmaterial.png';
import LemonStudioImage from '/public/assets/lemonstudio.png';
import OpenRoomImage from '/public/assets/openroom-image.png';
import AgroVisionImage from '/public/assets/agrovision.png';

import cloudflare from '/public/assets/cloudflare.png';
import emailjs from '/public/assets/emailjs.jpeg';
import firebase from '/public/assets/firebase.webp';
import framermotion from '/public/assets/framermotion.png';
import nextjs from '/public/assets/nextjs.png';
import nodejs from '/public/assets/nodejs.png';
import picaura from '/public/assets/picaura.png';
import python from '/public/assets/python.png';
import react from '/public/assets/react.png';
import restapi from '/public/assets/restapi.webp';
import tailwindcss from '/public/assets/tailwindcss.png';
import expressjs from '/public/assets/expressjs.png';
import gemini from '/public/assets/gemini.webp';


import { ArrowBigLeft, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tagline: string;
  techStack: {
    name: string;
    icon: string | StaticImageData;
  }[];
  features: string[];
  image: string | StaticImageData;
  accentColor: string;
  bgGradient: string;
}

export default function WorkShowcaseSnapping() {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrollingRef = useRef<boolean>(false);


  const projects: Project[] = [
    {
      id: 1,
      title: "GetMaterial",
      tagline: "A collaborative note-sharing platform built for students, by students.",
      description: "Developed a centralized hub where students can upload, discover, and access academic notes, fostering a peer-driven learning ecosystem.",
      techStack: [
        { name: "React", icon: react },
        { name: "Node.js", icon: nodejs },
        { name: "Firebase", icon: firebase },
        { name: "Express.js", icon: expressjs },
        { name: "Cloudflare", icon: cloudflare },
        {name : "Rest API", icon: restapi},
        {name : "Email js", icon: emailjs},
        { name: "Tailwind CSS", icon: tailwindcss }
      ],
      features: [
        "Notes sharing and uploading system for students",
        "Used by 500+ users with 160+ notes within 2 weeks",
        "Categorized and searchable content by subject and semester",
        "User authentication and content moderation using Firebase",
        "Real-time data sync and analytics",
        "Responsive UI designed for student accessibility"
      ],
      image: GetMaterialImage,
      accentColor: "bg-green-500",
      bgGradient: "from-green-800 to-green-600"
    },
    {
      id: 2,
      title: "Lemon Studio",
      tagline: "Portfolio website for a photography studio with service showcase.",
      description: "Designed a visually striking and user-friendly photography portfolio website for a client, showcasing their work, services, and contact options.",
      techStack: [
        { name: "React", icon: react },
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "Framer Motion", icon: framermotion },
        { name: "EmailJS", icon: emailjs }
      ],
      features: [
        "Gallery layout with hover animations and lightbox previews",
        "Smooth page transitions using Framer Motion",
        "Responsive contact form with email notifications",
        "Mobile-optimized UI with modern design",
        "Showcased services and packages with styled components"
      ],
      image: LemonStudioImage,
      accentColor: "bg-yellow-500",
      bgGradient: "from-yellow-600 to-orange-600"
    },
    {
      id: 3,
      title: "OpenRoom",
      tagline: "Anonymous real-time chat with AI replies, threading, and safe moderation",
      description: "Developed a platform allowing users to engage in anonymous chats, with real-time messaging, AI-powered responses, and secure, moderated threads for safe interactions.",
      techStack: [
        { name: "React", icon: react },
        {name :"Gemini API", icon: gemini},
        { name: "Node.js", icon: nodejs },
        { name: "API", icon: restapi },
        { name: "Firebase", icon: firebase },
        { name: "Cloudflare", icon: cloudflare }
      ],
      features: [
        "Anonymous chat system with real-time messaging",
        "AI-driven replies for engaging conversations",
        "Threaded discussions for better organization",
        "Safe moderation system to ensure healthy interactions",
        "Cloudflare integration for security and performance optimization"
      ],
      image: OpenRoomImage,
      accentColor: "bg-blue-500",
      bgGradient: "from-blue-950 to-blue-800"
    },

    {
      id: 4,
      title: "AgroVision",
      tagline: "AI-powered crop disease detection and farmer support platform.",
      description: "Built a smart agricultural assistant that uses AI to detect crop diseases and provides actionable insights for farmers with a chatbot interface.",
      techStack: [
        { name: "React", icon: react },
        { name: "Python", icon: python },
        { name: "Tailwind CSS", icon:  tailwindcss },
        { name: "API", icon:  restapi },
      ],
      features: [
        "Integrated AI model to detect crop diseases from images",
        "Visual result display with prediction confidence",
        "Chatbot assistant for farming queries and solutions",
        "Backend APIs using Flask for prediction services",
        "UI designed for farmers with simplified interaction"
      ],
      image: AgroVisionImage,
      accentColor: "bg-purple-500",
      bgGradient: "from-purple-900 to-purple-500"
    }
  ];


  const hasMountedRef = useRef(false);


  // Scroll to project when activeProject changes
  useEffect(() => {

    // Skip scroll on initial render
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    if (!projectRefs.current[activeProject]) return;

    isScrollingRef.current = true;

    // Get the element to scroll to
    const targetElement = projectRefs.current[activeProject];
    if (!targetElement) return;

    // Scroll to the element with smooth behavior
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

    // Reset scrolling flag after animation completes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  }, [activeProject]);

  // Handle scroll events to update active project
  useEffect(() => {
    const handleScroll = () => {
      // If we're currently programmatically scrolling, don't update activeProject
      if (isScrollingRef.current) return;

      // Calculate which project is most visible
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let closestProject = 0;
      let closestDistance = Number.MAX_VALUE;

      projectRefs.current.forEach((projectRef, index) => {
        if (!projectRef) return;

        const rect = projectRef.getBoundingClientRect();
        const projectCenter = rect.top + rect.height / 2;
        const distance = Math.abs(projectCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestProject = index;
        }
      });

      // Only update if we have a new closest project
      if (closestProject !== activeProject) {
        setActiveProject(closestProject);
      }
    };

    // Add special wheel handler for snap effect
    const handleWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) {
        // If we're in a programmatic scroll, prevent default
        // to avoid interfering with the smooth scrolling
        e.preventDefault();
        return;
      }

      // If we're not in a programmatic scroll, let the regular
      // scroll handler deal with it
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activeProject]);

  // Custom cursor styles for hover effect
  const cursorVariants = {
    default: {
      opacity: 0,
      scale: 0,
    },
    hover: {
      opacity: 1,
      scale: 1,
    }
  };

  return (
    <div
      ref={componentRef}
      className="bg-black pt-32 w-full text-white"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      <div className="py-10 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-gray-300 uppercase tracking-wider font-medium text-sm mb-2"
          >
            Code Meets Creativity
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-5xl md:text-6xl font-bold"
          >
            <span className="text-white">Crafted </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">Projects</span>
          </motion.div>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row">
            {/* Left side - scrollable projects */}
            <div className="w-full md:w-1/2">
              {projects.map((project, index) => {
                const isHovered = hoveredProject === index;

                return (
                  <div
                    key={project.id}
                    ref={el => {
                      projectRefs.current[index] = el;
                    }}
                    className=" py-24 flex items-center relative"
                    style={{ scrollSnapAlign: 'center' }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 100, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: false, margin: "-20%" }}
                      className="w-full cursor-pointer"
                    >
                      <div className={`bg-gradient-to-b ${projects[activeProject].bgGradient} overflow-hidden rounded-3xl px-8 pt-10 flex flex-col`}>
                        <div className="text-white flex flex-row text-2xl font-bold mb-6">
                          {project.tagline}

                          <div className="">
                            <motion.div
                              className="flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-6 py-3"
                              initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            >
                              <ArrowRight className="w-5 h-5" />
                            </motion.div>
                          </div>

                        </div>

                        <div className={`relative h-80 w-full overflow-hidden transition-transform duration-300 rounded-xl mt-4 group ${isHovered ? 'scale-110 -rotate-5' : 'scale-100'} `}>
                          <Image
                            src={project.image}
                            alt={project.title}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Right side - fixed content */}
            <div className="hidden md:block md:w-1/2 sticky top-0 h-screen items-center">
              <div className="h-full flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 h-full flex flex-col justify-center"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`h-1 w-10 ${projects[activeProject].accentColor}`}></div>
                      <h3 className="text-2xl font-bold">{projects[activeProject].title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{projects[activeProject].description}</p>

                    <div className="space-y-4">
                      {projects[activeProject].features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className={`${projects[activeProject].accentColor.replace('bg-', 'text-')} mt-1`}>+</span>
                          <p className="text-gray-300">{feature}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-10">
                      <div className="flex flex-wrap gap-3">
                        {projects[activeProject].techStack.slice(0, 12).map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className={`rounded-full py-1 px-2 flex items-center gap-2 border border-gray-700`}
                          >
                            <span className="w-5 h-5 flex items-center justify-center">
                              <Image src={tech.icon} alt={tech.name} />
                            </span>
                            <span className="text-sm font-medium">{tech.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}