'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

// Import social icons
import profileImage from '/public/manideepknv.png';
 // Replace with your actual image path

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  company: string;
  location: string;
  remote: boolean;
  description: string;
  achievements: string[];
  skills: string[];
  images?: string[];
}

export default function AboutPage() {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      date: "JULY 2025 - PRESENT",
      title: "Full-Stack Developer",
      company: "Freelance & Personal Projects",
      location: "Berhampur, Odisha, India",
      remote: true,
      description: "As a passionate web developer, I specialize in creating responsive, accessible, and performance-optimized websites. My journey into full-stack development allows me to deliver impactful and real-world solutions. My focus is on mastering modern web technologies while making valuable contributions to various freelance and personal projects.",
      achievements: [
  "Engineered 'Daily Governance News System' for the Andhra Pradesh Secretariat, automating real-time news fetch, AI-powered summarization, and PDF reporting, improving governance information accessibility.",
  "Developed 'Crown Shopping' – a modern React + TypeScript e-commerce platform featuring Firebase authentication, Google Sign-in, category navigation, cart persistence, and responsive UI.",
  "Built 'Realtime MERN Chat App' with Socket.io, enabling instant messaging, online user tracking, Cloudinary media uploads, and JWT-secured authentication, deployed seamlessly on Render.",
  "Leveraged cutting-edge technologies including React, Next.js, TypeScript, Tailwind CSS, Firebase, MongoDB, Flask, and Vercel to deliver high-performance, scalable applications across domains.",
  "Team of 5 we organized and hosted a national-level hackathon at our college, fostering innovation and collaboration among participants from across the country.",
  "Collaborated effectively in diverse teams, contributing to full-stack development, deployment, and problem-solving under real-world deadlines and high-pressure environments."
],
      skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Vercel", "HTML", "CSS", "JavaScript","Nodejs", "Express.js","Python","GitHub"],
    },
    {
      id: 2,
      date: "JUN 2024 - PRESENT",
      title: "Problem Solver - DSA Enthusiast",
      company: "GeeksforGeeks",
      location: "India",
      remote: true,
      description: "I actively solve Data Structures and Algorithms (DSA) problems on GeeksforGeeks, utilizing Java and Python to enhance my problem-solving skills. This practice helps me build a strong foundation in coding, algorithm design, and data structures, which are crucial for technical interviews and real-world applications.",
      achievements: [
        "Solved multiple DSA problems on GeeksforGeeks using Java and Python, focusing on topics such as arrays, linked lists, trees, dynamic programming, and graph algorithms.",
        "Sharpened problem-solving skills by regularly participating in coding challenges and improving algorithmic efficiency to solve complex problems within time constraints.",
        "Gained proficiency in optimizing code for better performance and memory utilization, ensuring that solutions are not only correct but also efficient."
      ],
      skills: ["Java", "Python", "Data Structures", "Algorithms", "Problem Solving", "GeeksforGeeks"],
    },
    {
  id: 3,
  date: "JULY-SEPTEMBER 2025",
  title: "Full-Stack Developer (Governance Automation Suite)",
  company: "Andhra Pradesh Secretariat – RTGS",
  location: "Amaravati, Andhra Pradesh, India",
  remote: false,
  description:
    "Contributed to the development of a Governance Automation Suite for the Andhra Pradesh Secretariat, integrating real-time governance news reporting with automated district-level monitoring. The system focused on AI-powered summarization, PDF generation, and seamless WhatsApp-based delivery to officials.",
  achievements: [
    "Built a Flask backend integrated with NewsData.io API to fetch and clean real-time Andhra Pradesh governance news.",
    "Implemented AI-driven categorization and summarization using Gemini AI, streamlining decision-making for officials.",
    "Developed automated PDF report generation with Playwright and ReportLab, ensuring accurate and timely insights.",
    "Engineered workflows to generate district-specific PDF reports with visual charts and performance metrics.",
    "Integrated WhatsApp Business Cloud API for secure, real-time delivery of reports to all District Collectors.",
    "Implemented AI-based highlights and alerts in reports, enabling officials to quickly identify critical issues."
  ],
  skills: [
    "React",
    "Flask",
    "FastAPI",
    "Playwright",
    "PDFKit",
    "Python",
    "Gemini AI",
    "REST API",
    "MongoDB",
    "WhatsApp Business API",
    "Automation"
  ]
}
  ];
  
  // Handle scroll events to update active timeline item based on visibility
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let closestItem = 0;
      let closestDistance = Number.MAX_VALUE;

      timelineRefs.current.forEach((itemRef, index) => {
        if (!itemRef) return;

        const rect = itemRef.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestItem = index;
        }
      });

      if (closestItem !== activeTimelineItem) {
        setActiveTimelineItem(closestItem);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTimelineItem]);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const badgeRefs = useRef<Array<HTMLDivElement | null>>([null, null, null]);

  const [constraints, setConstraints] = useState<{
    left: number;
    right: number;
    top: number;
    bottom: number;
  }>({ left: 0, right: 0, top: 0, bottom: 0 });

  const [positions, setPositions] = useState<{ x: number; y: number }[]>([
    { x: 0, y: 0 }, // I Code
    { x: 0, y: 0 }, // I Lift
    { x: 0, y: 0 }, // I Vibin'
  ]);

  useEffect(() => {
    const updateLayout = () => {
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const newConstraints = {
          left: 0,
          right: heroRect.width,
          top: 0,
          bottom: heroRect.height,
        };
        setConstraints(newConstraints);

        // Mobile-specific badge positioning
        const isMobile = window.innerWidth < 768;
        
        const newPositions = badgeRefs.current.map((ref, index) => {
          const badgeRect = ref?.getBoundingClientRect() || { width: 100, height: 40 };
          
          // Mobile layout - vertical stacking with smaller gaps
          if (isMobile) {
            const yOffset = 20; // Space between badges on mobile
            return {
              x: 20, // Fixed x position from left
              y: yOffset + (badgeRect.height + yOffset) * index, // Stack vertically
            };
          } 
          // Desktop layout - horizontal spacing
          else {
            const yPosition = (heroRect.height - badgeRect.height) / 2;
            const xPosition = (heroRect.width - badgeRect.width * 3 - 2 * 2) / 2 + 
              (badgeRect.width + 2) * index;
            return { x: xPosition, y: yPosition };
          }
        });

        setPositions(newPositions);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const badgeData = [
    { label: "I Lift", color: "emerald" },
    { label: "I Code", color: "purple" },
    { label: "I Vibin'", color: "blue" },
  ];

  return (
    <div className="bg-black min-h-screen text-white pt-16 md:pt-32">
      {/* Hero Section - Mobile Optimized */}
      <section
        ref={heroRef}
        className="px-4 md:px-10 max-w-7xl mx-auto mb-16 md:mb-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 ml-5 md:ml-0 uppercase tracking-wider font-medium text-xs md:text-sm mb-2"
        >
          {/* MORE ABOUT ME */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center"
        >
          {/* Mobile First: Photo on top for small screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full lg:w-1/3 relative mx-auto max-w-[250px] md:max-w-full lg:mx-0"
          >
            <div className="rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-pink-500 p-1">
              <div className="rounded-full overflow-hidden aspect-square">
                <Image
                  src={profileImage}
                  alt="Kandepu Naga Venkata Manideep"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJUw8YhgAAAABJRU5ErkJggg=="
                  loading="eager"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <div className="lg:w-2/3 mt-6 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center lg:text-left">
              Hi there! I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Manideep</span>
            </h1>

            <div className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base">
              <p>I&apos;m Kandepu Naga Venkata Manideep, a passionate web developer dedicated to building impactful and user-friendly websites. I specialize in React, Next.js and modern frontend technologies, and I&apos;m constantly exploring AI, machine learning and Gen ai to integrate into web solutions.</p>

              <p>When I&apos;m not coding, I&apos;m brainstorming new ideas, learning emerging tech, or helping others grow. I believe in consistency, curiosity, and leveling up every day.</p>

              <p>I wake up each day excited to build something meaningful and work towards becoming a top developer!</p>

              <div className="flex justify-center lg:justify-start gap-4 pt-2">
                <Link href="https://www.linkedin.com/in/knv-manideep-81664926a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white transition-colors" />
                </Link>
                <Link href="https://github.com/manideep-777" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white transition-colors" />
                </Link>
                {/* <Link href="https://x.com/Rajeshtalagana" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white transition-colors" />
                </Link> */}
                <Link href="mailto:manideepknv@gmail.com" aria-label="Email">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Draggable Badges - Mobile Optimized */}
        <div className="mt-12 md:mt-0">
          {badgeData.map((badge, index) => (
            <motion.div
              key={index}
              drag
              dragConstraints={constraints}
              dragElastic={0.2}
              dragMomentum={true}
              ref={(el) => {
                badgeRefs.current[index] = el;
              }}
              style={{
                x: positions[index]?.x ?? 0,
                y: positions[index]?.y ?? 0,
              }}
              className="pointer-events-auto absolute cursor-grab active:cursor-grabbing z-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-${badge.color}-500 text-${badge.color}-500 text-sm md:text-base font-semibold hover:bg-${badge.color}-500 hover:text-white transition-all duration-300 bg-black whitespace-nowrap`}
              >
                {badge.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section - Mobile Optimized */}
      <section className="py-12 md:py-20 bg-black">
        <div className="px-4 md:px-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="text-gray-300 uppercase tracking-wider font-medium text-xs md:text-sm mb-2">
              THE EXPERIENCE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Experiences</span>
            </h2>
          </motion.div>

          {/* Mobile Timeline Navigation Tabs */}
          <div className="lg:hidden mb-8 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-2 min-w-max">
              {timelineItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTimelineItem(index);
                    timelineRefs.current[index]?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                  className={`px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all duration-300 ${
                    index === activeTimelineItem
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col lg:flex-row">
            {/* Left side - sticky timeline markers (desktop only) */}
            <div className="hidden lg:block lg:w-1/3 sticky top-0 h-screen">
              <div className="h-full flex flex-col justify-center space-y-8 relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>

                {timelineItems.map((item, index) => (
                  <div key={item.id} className="relative pl-10">
                    {/* Timeline dot */}
                    <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${index === activeTimelineItem ? 'bg-purple-500 scale-110' : 'bg-gray-800'}`}>
                      <div className={`w-3 h-3 rounded-full ${index === activeTimelineItem ? 'bg-white' : 'bg-gray-500'}`}></div>
                    </div>

                    <div className="space-y-1">
                      <p className={`text-sm ${index === activeTimelineItem ? 'text-white' : 'text-gray-600'} `}>{item.date}</p>
                      <h3 className={`text-2xl font-bold transition-all duration-300 ${index === activeTimelineItem ? 'text-white' : 'text-gray-600'}`}>
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className={`rounded-md px-2 py-1 text-sm ${index === activeTimelineItem ? 'bg-purple-800 text-white' : 'bg-gray-900 text-gray-600'}`}>
                          {item.company}
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <span>{item.location}</span>
                        {item.remote && <span>• Remote</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - scrollable content - Mobile Optimized */}
            <div className="lg:w-2/3 lg:pl-16">
              {timelineItems.map((item, index) => (
                <div
                  key={item.id}
                  ref={el => { timelineRefs.current[index] = el; }}
                  className="py-8 md:py-16 lg:py-24 min-h-[80vh] lg:min-h-screen flex flex-col justify-center"
                >
                  {/* Mobile timeline header with visual improvements */}
                  <div className="lg:hidden mb-6 space-y-1 relative pl-8 border-l-2 border-purple-500">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-purple-500 rounded-full -translate-x-1/2"></div>
                    <p className="text-gray-400 text-xs">{item.date}</p>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="rounded-md px-2 py-1 text-xs bg-gray-800 text-white">
                        {item.company}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-400">
                      <span>{item.location}</span>
                      {item.remote && <span>• Remote</span>}
                    </div>
                  </div>

                  {/* Content - Mobile Optimized */}
                  <div className="space-y-6 md:space-y-8">
                    <p className="text-gray-300 text-sm md:text-base">{item.description}</p>

                    <div className="space-y-3 md:space-y-4">
                      {item.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <span className="text-purple-500 mt-1 text-lg flex-shrink-0">•</span>
                          <p className="text-gray-300 text-sm md:text-base">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Skills - Mobile Optimized */}
                    <div className="mt-4 md:mt-6">
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {item.skills.map((skill, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="rounded-md py-1 px-2 md:px-3 bg-gray-800 text-xs md:text-sm font-medium"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}