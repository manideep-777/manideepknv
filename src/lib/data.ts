import html from '../assets/tech_logos/html.webp';
import css from '../assets/tech_logos/css.webp';
import javascript from '../assets/tech_logos/javascript.webp';
import typescript from '../assets/tech_logos/typescript.webp';
import react from '../assets/tech_logos/react.png';
import nextjs from '../assets/tech_logos/nextjs.png';
import tailwindcss from '../assets/tech_logos/tailwindcss.png';
import framermotion from '../assets/tech_logos/framermotion.png';
import shadcn from '../assets/tech_logos/shadcn.png';
import nodejs from '../assets/tech_logos/nodejs.png';
import expressjs from '../assets/tech_logos/expressjs.png';
import mongodb from '../assets/tech_logos/mongodb.png';
import sql from '../assets/tech_logos/sql.webp';
import github from '../assets/tech_logos/github.png';
import vercel from '../assets/tech_logos/vercel.png';
import postman from '../assets/tech_logos/postman.webp';
import java from '../assets/tech_logos/java.webp';
import npm from '../assets/tech_logos/npm.webp';
import figma from '../assets/tech_logos/figma.png';
import firebase from '../assets/tech_logos/firebase.webp';
import restapi from '../assets/tech_logos/restapi.webp';
import python from '../assets/tech_logos/python.png';
import prisma from '../assets/tech_logos/prisma.png';
import postgresql from '../assets/tech_logos/postgresql.png';
import clerk from '../assets/tech_logos/clerk.png';
import redux from '../assets/tech_logos/redux.png';
import scss from '../assets/tech_logos/scss.png';
import vite from '../assets/tech_logos/vite.webp';
import socketio from '../assets/tech_logos/socketio.png';
import daisyui from '../assets/tech_logos/daisyui.png';
import zustand from '../assets/tech_logos/zustand.png';
import cloudinary from '../assets/tech_logos/cloudinary.png';
import render from '../assets/tech_logos/render.webp';
import gemini from '/public/assets/gemini.webp';
import uploadthing from '../assets/tech_logos/uploadthing.png';
import RTGSLogo from '../assets/project_images/rtgs.png';

import type { StaticImageData } from 'next/image';

import GetMaterialImage from '/public/assets/getmaterial.png';
import LemonStudioImage from '/public/assets/lemonstudio.png';
import OpenRoomImage from '/public/assets/openroom-image.png';
import AgroVisionImage from '/public/assets/agrovision.png';
import PortfolioImage from '/public/assets/portfolio.png';
import WebCrosImage from '/public/assets/web-cros.png';
import DealsOfAgroImage from '/public/assets/DealsOfAgroImage.png';
import HeyDropImage from '/public/assets/HeyDrop.png';
import cloudflare from '/public/assets/cloudflare.png';
import emailjs from '/public/assets/emailjs.jpeg';
import framer from '/public/assets/framermotion.png';
import upstash from '/public/assets/upstash.png';




import SociallyImage from '../assets/project_images/socially.png';
import CrownShoppingImage from '../assets/project_images/crownshopping.png';
import MernChatAppImage from '../assets/project_images/mernchatapp.png';


// Logos
import DOALogo from '../assets/project_images/DOA-whiteLogo.png';
import FramttLogo from '../assets/tech_logos/framtt-logo.png';

// Screenshots for DealsOfAgro only
import ss3 from '../assets/project_images/realtime-news3.png';
import ss2 from '../assets/project_images/realtime-news2.png';
import ss1 from '../assets/project_images/realtime-news1.png';
import { string } from 'zod';




// Feature cards data for the bottom section in Grids.tsx
export const featureCards = [
  {
    title: "Project Planning & Strategy",
    description: "I work closely with clients to define clear goals and develop a strategic roadmap for each project."
  },
  {
    title: "Design & User Experience",
    description: "I create intuitive and aesthetically pleasing designs that focus on user-centered experiences."
  },
  {
    title: "Custom Development",
    description: "I write clean, efficient code to build custom solutions tailored to the specific needs of the project."
  },
  {
    title: "API Integration",
    description: "I integrate third-party services and APIs to enhance functionality and improve user experience."
  },
  {
    title: "Testing & Optimization",
    description: "I conduct rigorous testing to ensure functionality, performance, and security across all platforms."
  },
  {
    title: "Continuous Support & Maintenance",
    description: "I provide ongoing support and updates to ensure the project remains relevant and fully functional over time."
  }
];



// Project showcase data for WorkShowcase.tsx
interface Project {
  id: number;
  link: string;
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


// export const projects: Project[] = [
//     {
//       id: 1,
//       link: "https://getmaterial.vercel.app/",
//       title: "GetMaterial",
//       tagline: "A collaborative note-sharing platform built for students, by students.",
//       description: "Developed a centralized hub where students can upload, discover, and access academic notes, fostering a peer-driven learning ecosystem.",
//       techStack: [
//         { name: "React", icon: react },
//         { name: "Node.js", icon: nodejs },
//         { name: "Firebase", icon: firebase },
//         { name: "Express.js", icon: expressjs },
//         { name: "Cloudflare", icon: cloudflare },
//         { name: "Rest API", icon: restapi },
//         { name: "Email js", icon: emailjs },
//         { name: "Tailwind CSS", icon: tailwindcss }
//       ],
//       features: [
//         "Notes sharing and uploading system for students",
//         "Used by 500+ users with 160+ notes within 2 weeks",
//         "Categorized and searchable content by subject and semester",
//         "User authentication and content moderation using Firebase",
//         "Real-time data sync and analytics",
//         "Responsive UI designed for student accessibility"
//       ],
//       image: GetMaterialImage,
//       accentColor: "bg-green-500",
//       bgGradient: "from-green-800 to-green-600"
//     },
//     {
//   id: 2,
//   link: "https://heydrop.vercel.app/",
//   title: "HeyDrop",
//   tagline: "Share Anything Instantly – Files, Images, and Text with No Login.",
//   description: "HeyDrop is a seamless real-world web app that enables instant, login-free sharing of files, images, and messages via unique room links. Built for frictionless transfer across devices without installing any app or creating an account.",
//   techStack: [
//     { name: "Next.js", icon: nextjs },
//     { name: "TypeScript", icon: typescript },
//     { name: "Tailwind CSS", icon: tailwindcss },
//     { name: "Upstash Redis", icon: upstash },
//     { name: "UploadThing", icon: uploadthing },
//     { name: "React", icon: react },
//   ],
//   features: [
//     "Instant file, image, and text sharing across devices",
//     "No login, sign-up, or installation required",
//     "Generate secure, sharable room links for temporary sessions",
//     "Real-time message syncing using Upstash Redis",
//     "Secure file handling and upload with UploadThing",
//   ],
//   image: HeyDropImage, // Replace this with your imported image reference
//   accentColor: "bg-orange-500",
//   bgGradient: "from-zinc-950 to-orange-400"
// }
// ,
//     {
//       id: 3,
//       link: "https://lemonstudio.vercel.app/",
//       title: "Lemon Studio",
//       tagline: "Portfolio website for a photography studio with service showcase.",
//       description: "Designed a visually striking and user-friendly photography portfolio website for a client, showcasing their work, services, and contact options.",
//       techStack: [
//         { name: "React", icon: react },
//         { name: "Tailwind CSS", icon: tailwindcss },
//         { name: "Framer Motion", icon: framermotion },
//         { name: "EmailJS", icon: emailjs }
//       ],
//       features: [
//         "Gallery layout with hover animations and lightbox previews",
//         "Smooth page transitions using Framer Motion",
//         "Responsive contact form with email notifications",
//         "Mobile-optimized UI with modern design",
//         "Showcased services and packages with styled components"
//       ],
//       image: LemonStudioImage,
//       accentColor: "bg-yellow-500",
//       bgGradient: "from-yellow-600 to-orange-600"
//     },

//     {
//   id: 4,
//   link: "https://dealsofagro.vercel.app/",
//   title: "DealsOfAgro",
//   tagline: "E-commerce website for selling agricultural machinery online.",
//   description: "Developed a full-fledged online marketplace for an agricultural machinery company during an internship. The platform allows sellers to list equipment and enables farmers to browse, explore, and purchase machinery with ease. Focused on user-friendly design, performance, and real-time database integration.",
//   techStack: [
//     { name: "Next.js", icon: nextjs },
//     { name: "Tailwind CSS", icon: tailwindcss },
//     { name: "TypeScript", icon: typescript },
//     { name: "Firebase", icon: firebase },
//   ],
//   features: [
//     "Product listing and detailed pages with real-time data from Firebase",
//     "Secure user authentication and dynamic routing with Next.js",
//     "Interactive and responsive UI tailored for farmers and sellers",
//     "Admin features for product management and inventory control",
//     "Designed UI prototypes using Figma before development"
//   ],
//   image: DealsOfAgroImage,
//   accentColor: "bg-green-600",
//   bgGradient: "from-green-700 to-lime-600"
// },
// {
//   id: 5,
//   link: "https://talaganarajesh.vercel.app/",
//   title: "Portfolio",
//   tagline: "Dynamic and interactive portfolio showcasing my work and skills.",
//       description:
//         "Built a high-performance portfolio website to highlight my projects, technical skills, and web development journey, combineing modern UI design with smooth animations and a responsive layout",
//       techStack: [
//         { name: "Next.js", icon: nextjs },
//         { name: "TypeScript", icon: typescript },
//         { name: "Framer Motion", icon: framer },
//         { name: "Tailwind CSS", icon: tailwindcss },
//         { name: "ShadCN UI", icon: shadcn }
//       ],
//       features: [
//         "Smooth animations and transitions using Framer Motion",
//         "Interactive UI components with ShadCN and Tailwind CSS",
//         "Project showcase with detailed descriptions and tech stack",
//         "Fully responsive design optimized for all devices",
//         "Clean codebase using TypeScript for maintainability"
//       ],
//       image: PortfolioImage,
//       accentColor: "bg-cyan-500",
//       bgGradient: "from-cyan-800 to-cyan-600"
//     },

//     {
//       id: 6,
//       link: "https://oroom.vercel.app/",
//       title: "OpenRoom",
//       tagline: "Anonymous real-time chat with AI replies, threading, and safe moderation",
//       description: "Developed a platform allowing users to engage in anonymous chats, with real-time messaging, AI-powered responses, and secure, moderated threads for safe interactions.",
//       techStack: [
//         { name: "React", icon: react },
//         { name: "Gemini API", icon: gemini },
//         { name: "Node.js", icon: nodejs },
//         { name: "API", icon: restapi },
//         { name: "Firebase", icon: firebase },
//         { name: "Cloudflare", icon: cloudflare }
//       ],
//       features: [
//         "Anonymous chat system with real-time messaging",
//         "AI-driven replies for engaging conversations",
//         "Threaded discussions for better organization",
//         "Safe moderation system to ensure healthy interactions",
//         "Cloudflare integration for security and performance optimization"
//       ],
//       image: OpenRoomImage,
//       accentColor: "bg-blue-500",
//       bgGradient: "from-blue-950 to-blue-800"
//     },

//     {
//       id: 7,
//       link: "https://webcros.vercel.app/",
//       title: "WebCros",
//       tagline: "Professional web development services tailored for clients.",
//       description: "Launched a modern agency platform that offers custom website solutions for businesses and individuals, focusing on performance, design, and client satisfaction.",
//       techStack: [
//         { name: "Next.js", icon: nextjs },
//         { name: "React", icon: react },
//         { name: "Tailwind CSS", icon: tailwindcss },
//         { name: "Framer Motion", icon: framermotion },
//         { name: "EmailJS", icon: emailjs }
//       ],
//       features: [
//         "Agency-style landing page with sleek design and animations",
//         "Showcases client work, pricing, and services clearly",
//         "Responsive contact form with automated email handling",
//         "Optimized for mobile and desktop with smooth interactions",
//         "Built with reusability and scalability in mind"
//       ],
//       image: WebCrosImage,
//       accentColor: "bg-teal-500",
//       bgGradient: "from-teal-800 to-teal-600"
//     },
//     {
//       id: 8,
//       link: "https://agrovision-sih.vercel.app/",
//       title: "AgroVision",
//       tagline: "AI-powered crop disease detection and farmer support platform.",
//       description: "Built a smart agricultural assistant that uses AI to detect crop diseases and provides actionable insights for farmers with a chatbot interface.",
//       techStack: [
//         { name: "React", icon: react },
//         { name: "Python", icon: python },
//         { name: "Tailwind CSS", icon: tailwindcss },
//         { name: "API", icon: restapi },
//       ],
//       features: [
//         "Integrated AI model to detect crop diseases from images",
//         "Visual result display with prediction confidence",
//         "Chatbot assistant for farming queries and solutions",
//         "Backend APIs using Flask for prediction services",
//         "UI designed for farmers with simplified interaction"
//       ],
//       image: AgroVisionImage,
//       accentColor: "bg-purple-500",
//       bgGradient: "from-purple-900 to-purple-500"
//     }
//   ];

export const projects: Project[] = [
  {
    id: 1,
    link: "https://socially-next-js-chi.vercel.app/",
    title: "Socially",
    tagline: "A modern full-stack social media platform with real-time interactions.",
    description:
      "Developed a scalable, feature-rich social media app using Next.js 14. Supports real-time updates, media uploads, authentication, and a sleek, responsive design optimized for performance.",
    techStack: [
      { name: "Next.js", icon: nextjs },
      { name: "React", icon: react },
      { name: "TypeScript", icon: typescript },
      { name: "Tailwind CSS", icon: tailwindcss },
      { name: "ShadCN UI", icon: shadcn },
      { name: "Prisma", icon: prisma },
      { name: "PostgreSQL", icon: postgresql },
      { name: "Clerk", icon: clerk },
      { name: "UploadThing", icon: uploadthing },
      { name: "Vercel", icon: vercel }
    ],
    features: [
      "Secure authentication and authorization with Clerk",
      "Customizable user profiles with avatars and bio",
      "Real-time updates with optimistic UI interactions",
      "Image and file uploads powered by UploadThing",
      "Responsive modern UI with Tailwind CSS and ShadCN",
      "PostgreSQL database integration with Prisma ORM"
    ],
    image: SociallyImage,
    accentColor: "bg-indigo-500",
    bgGradient: "from-indigo-900 to-indigo-600"
  },
  {
    id: 2,
    link: "https://crownclothing777.netlify.app/",
    title: "Crown Shopping",
    tagline: "A modern e-commerce platform with sleek UI and powerful shopping features.",
    description:
      "Built a responsive e-commerce web app with React and TypeScript, featuring state management with Redux, product browsing, authentication, and secure payments — delivering a seamless shopping experience.",
    techStack: [
      { name: "React", icon: react },
      { name: "TypeScript", icon: typescript },
      { name: "Redux", icon: redux },
      { name: "SCSS", icon: scss },
      { name: "Vite", icon: vite },
      { name: "Firebase", icon: firebase }
    ],
    features: [
      "Product browsing with category-based navigation",
      "Shopping cart with add/remove and quantity updates",
      "Persistent state management using Redux Persist",
      "Firebase authentication with email/password & Google sign-in",
      "Firestore-powered product storage and retrieval",
      "Responsive modern UI with Styled Components and SCSS"
    ],
    image: CrownShoppingImage, 
    accentColor: "bg-pink-500",
    bgGradient: "from-pink-700 to-red-500"
  },
  {
  id: 3,
  link: "https://mern-chat-app-zq9u.onrender.com",
  title: "MERN Realtime Chat",
  tagline: "A full-stack realtime chat app with secure authentication and media sharing.",
  description:
    "Developed a realtime chat application using the MERN stack, featuring JWT authentication, live messaging with Socket.io, media uploads via Cloudinary, and Zustand for global state — providing a seamless modern chat experience.",
  techStack: [
    { name: "MongoDB", icon: mongodb },
    { name: "Express", icon: expressjs },
    { name: "React", icon: react },
    { name: "Node.js", icon: nodejs },
    { name: "Socket.io", icon: socketio },
    { name: "TailwindCSS", icon: tailwindcss },
    { name: "DaisyUI", icon: daisyui },
    { name: "Zustand", icon: zustand },
    { name: "Cloudinary", icon: cloudinary },
    { name: "Render", icon: render }
  ],
  features: [
    "JWT authentication & authorization for secure user access",
    "Realtime messaging powered by Socket.io",
    "Online user status and presence tracking",
    "Global state management with Zustand",
    "Media uploads and storage using Cloudinary",
    "Interactive toast notifications for user actions"
  ],
  image: MernChatAppImage,
  accentColor: "bg-purple-500",
  bgGradient: "from-indigo-700 to-purple-500"
}

];


// Tech stack data for TechStack.tsx
interface TechItem {
  name: string;
  icon: string | StaticImageData;
}

export const techStack: TechItem[] = [
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'JavaScript', icon: javascript },
  { name: 'TypeScript', icon: typescript },
  { name: 'ReactJS', icon: react },
  { name: 'NextJS', icon: nextjs },
  { name: 'Tailwind CSS', icon: tailwindcss },
  { name: 'Framer Motion', icon: framermotion },
  { name: 'Shadcn', icon: shadcn },
  { name: 'NodeJS', icon: nodejs },
  { name: 'ExpressJS', icon: expressjs },
  { name: 'MongoDB', icon: mongodb },
  { name: 'SQL', icon: sql },
  { name: 'GitHub', icon: github },
  { name: 'Vercel', icon: vercel },
  { name: 'Postman', icon: postman },
  { name: 'Java', icon: java },
  { name: 'npm', icon: npm },
  { name: 'Figma', icon: figma },
  { name: 'Firebase', icon: firebase },
  { name: 'REST API', icon: restapi },
  { name: 'Python', icon: python },
]

// Work experience data for WorkExperience.tsx
interface WorkExperience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  headlineDescription: string;
  footerDescription: string;
  description: string[];
  logo: string | StaticImageData;
  screenshots?: (string | StaticImageData)[];
  website: string;
  achievements: string[];
  techStack: string[];
}

// export const workData: WorkExperience[] = [
//   {
//     company: 'DealsOfAgro',
//     role: 'Full-Stack Developer',
//     duration: 'April 2025 - Present',
//     location: 'Odisha, India',
//     description: [
//       'Spearheading the development of an innovative e-commerce platform that revolutionizes how farmers access agricultural machinery across Odisha.',
//       'Architected and implemented a scalable, responsive web application using Next.js, TypeScript, and modern web technologies.',
//       'Designed intuitive user interfaces specifically tailored for the agricultural community, ensuring ease of use for farmers of all technical backgrounds.',
//       'Developed comprehensive backend systems handling product catalogs, secure transactions, user management, and dealer networks.',
//       'Integrated advanced search and filtering capabilities to help farmers find the right machinery for their specific needs.',
//       'Collaborated closely with stakeholders to align technical solutions with business objectives and user requirements.'
//     ],
//     logo: DOALogo,
//     screenshots: [ss1, ss2, ss3],
//     website: 'https://www.dealsofagro.com',
//     achievements: [
//       'Serving 30+ Districts across Odisha',
//       '500+ Agricultural Machinery Listed',
//       '100+ Active Dealers on Platform',
//       'Built from Scratch to Production'
//     ],
//     techStack: [
//       'Next.js', 'TypeScript', 'Tailwind CSS',
//       'Node.js', 'Firebase', 'Figma', 'Vercel'
//     ]
//   },
//   {
//     company: 'Framtt',
//     role: 'Full-Stack Developer',
//     duration: 'May 2025 - Present',
//     location: 'Remote, India',
//     description: [
//       'Developing the main car rental management dashboard for a fast-growing startup.',
//       'Building tenant-focused features where companies manage car details, bookings, availability, and customer data.',
//       'Implementing scalable backend services for booking logic, availability tracking, and secure data handling.',
//       'Collaborating with the startup team to deliver a seamless, user-friendly platform optimized for both admins and tenants.'
//     ],
//     logo: FramttLogo,
//     website: 'https://www.framtt.com',
//     achievements: [
//       'Designed and developed the core tenant dashboard',
//       'Improved booking and management workflows',
//       'Collaborated with a cross-functional startup team',
//       'Delivered scalable full-stack solutions'
//     ],
//     techStack: [
//       'Next.js', 'Tailwind CSS', 'Framer Motion',
//       'Node.js', 'Express', 'Supabase', 'TypeScript'
//     ]
//   }
// ];


export const workData: WorkExperience[] = [
  {
  id: 1,
  company: "RTGS, Andhra Pradesh Secretariat",
  role: "Full-Stack Developer",
  duration: "July 2025 - September 2025",
  location: "Andhra Pradesh, India",
  headlineDescription: "At RTGS Andhra Pradesh Secretariat, I built a Daily Governance News dashboard, enabling officials to fetch, summarize, and download real-time governance reports efficiently.",
  footerDescription: "Transforming governance reporting with automation and AI.",
  description: [
    "Built a full-stack Daily Governance News system fetching real-time Andhra Pradesh news via NewsData.io API.",
    "Implemented automated categorization and summarization of news articles using Gemini AI.",
    "Designed and generated downloadable PDF reports using Playwright and Flask for daily governance insights.",
    "Built a React frontend for displaying articles and providing live fetch and download functionalities.",
    "Ensured seamless backend integration with Flask, Playwright, and pdfkit for structured news management.",
    "Optimized the workflow to allow officials to quickly access categorized governance updates in PDF format."
  ],
  logo: RTGSLogo,
  screenshots: [ss1, ss2, ss3],
  website: "https://your-project-live-link.com",
  achievements: [
    "Automated daily governance news reporting",
    "Real-time news fetch and PDF generation",
    "Integrated Gemini AI for summarization",
    "Improved accessibility of daily governance insights for officials"
  ],
  techStack: [
    "React",
    "Flask",
    "Playwright",
    "pdfkit",
    "Gemini AI",
    "NewsData.io API",
    "Vite",
    "Python"
  ]
}
];








// Features data for the Features section in Services.tsx
export const features = [
  {
    title: "Website Development",
    description: "Custom-built websites tailored to your vision.",
    icon: "💻",
    details: "I design and develop responsive, high-performance websites from scratch using modern technologies. Whether it's a portfolio, blog, or business site, I ensure intuitive navigation, scalable architecture, and seamless user experience aligned with your goals."
  },
  // {
  //   title: "SEO Optimized",
  //   description: "Engineered for better visibility and higher rankings.",
  //   icon: "🔎",
  //   details: "I follow SEO best practices like semantic HTML, optimized metadata, clean URL structures, and fast-loading pages to improve your website’s search engine visibility. This helps drive organic traffic and boosts your online presence effectively."
  // },
  {
    title: "Modern Design",
    description: "Clean, contemporary UI that reflects your brand.",
    icon: "🎨",
    details: "I use modern UI/UX design principles to craft visually appealing and user-friendly interfaces. My focus is on clarity, consistency, and engagement—using minimal design aesthetics, smooth interactions, and accessible layouts that leave a lasting impression."
  },
  {
    title: "Responsive",
    description: "Perfect experience across all devices and screen sizes.",
    icon: "📱",
    details: "I ensure that every website I build works flawlessly on desktops, tablets, and smartphones. Using responsive layouts, flexible grids, and mobile-first design techniques, I deliver smooth functionality and elegant visuals on every screen."
  },
  {
    title: "Landing Pages",
    description: "High-converting pages built for impact and speed.",
    icon: "⚡",
    details: "I create Applied fast, optimized landing pages designed to convert visitors into customers. From compelling headlines to focused call-to-actions, I make sure every element serves a purpose—delivering both performance and results."
  }
];