import React from 'react';
import { BellIcon, CalendarIcon, FileTextIcon, Share2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Globe } from "@/components/magicui/globe";
import { IconCloud } from "@/components/magicui/icon-cloud";

// Main Bento Grid component
const BentoGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 mx-auto max-w-7xl">
      {children}
    </div>
  );
};

// Individual Bento Card component
const BentoCard = ({
  title,
  subtitle,
  description,
  icon: Icon,
  className,
  background,
  cta,
  href,
  email,
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow-md transition-all hover:shadow-lg ${className}`}
    >
      <div className="h-full p-6 flex flex-col justify-between">
        {subtitle && (
          <div className="text-sm text-zinc-400 mb-1">{subtitle}</div>
        )}
        <div className="flex items-start">
          {Icon && (
            <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center text-zinc-400">
              <Icon className="h-5 w-5" />
            </div>
          )}
          <div>
            {title && (
              <h3 className="font-medium text-zinc-200 text-lg">{title}</h3>
            )}
            {description && (
              <p className="text-sm text-zinc-400 mt-1">{description}</p>
            )}
          </div>
        </div>
        {background && (
          <div className="mt-4 flex-grow">{background}</div>
        )}
        {cta && href && (
          <div className="mt-4">
            <a
              href={href}
              className="text-sm font-medium text-zinc-200 hover:underline inline-flex items-center"
            >
              {cta}
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        )}
        {email && (
          <div className="mt-4">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-700"
            >
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// Skill icons for the tech enthusiast card
const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "github",
  "vercel",
  "tailwindcss",
  "express",
  "mongodb",
  "firebase",
  "aws",
];

const images = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
);

// Feature cards for the bottom section
const featureCards = [
  {
    title: "Analytics Dashboard",
    description: "Provides real-time insights into user behavior"
  },
  {
    title: "Brand Identity",
    description: "Unified design assets, including logos and themes"
  },
  {
    title: "API Documentation",
    description: "Guides developers to integrate with our API"
  },
  {
    title: "User Onboarding",
    description: "Step-by-step guides and interactive tutorials"
  },
  {
    title: "Subscription Management",
    description: "Handles recurring payments and user accounts"
  },
  {
    title: "Analytics Dashboard",
    description: "Provides real-time insights into user behavior"
  }
];

export default function PortfolioGrid() {
  return (
    <div className="bg-black min-h-screen py-8">
      {/* First row - Collaboration card (spans full width) */}
      <div className="px-4 mx-auto max-w-7xl mb-4">
        <BentoCard
          icon={BellIcon}
          subtitle="Collaboration"
          title="I prioritize client collaboration, fostering open communication"
          cta="Book a call"
          href="#contact"
          className="h-48 w-full"
          background={
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border border-zinc-800 absolute opacity-20"></div>
                <div className="w-48 h-48 rounded-full border border-zinc-800 absolute opacity-20" style={{ top: '-8px', left: '-8px' }}></div>
                <div className="w-64 h-64 rounded-full border border-zinc-800 absolute opacity-20" style={{ top: '-16px', left: '-16px' }}></div>
                <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-blue-500 z-10 relative">
                  <div className="h-full w-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          }
        />
      </div>

      {/* Two-row grid for the remaining content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 mx-auto max-w-7xl">
        {/* Tech stack card - spans left column, full height */}
        <div className="md:col-span-4 md:row-span-2">
          <BentoCard
            subtitle="Tech Enthusiast"
            title="Passionate about cutting-edge development technologies"
            className="h-full"
            background={
              <div className="relative flex size-full items-center justify-center overflow-hidden">
                <IconCloud images={images} />
              </div>
            }
          />
        </div>

        {/* Middle column, first row - Let's work together */}
        <div className="md:col-span-4">
          <BentoCard
            title="Let's work together"
            description="on your next project"
            className="h-64"
            email="hello@aayushbharti.in"
            background={
              <div className="flex justify-center items-center mt-4">
                <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AB</span>
                </div>
              </div>
            }
          />
        </div>

        {/* Right column, first row - Remote */}
        <div className="md:col-span-4">
          <BentoCard
            subtitle="Remote"
            title="India - 24:28"
            description="I'm very flexible with time zone communications"
            className="h-64"
            background={
              <div className="relative flex size-full items-center justify-center overflow-hidden">
                <Globe />
              </div>
            }
          />
        </div>

        {/* Bottom row, spans middle and right columns - Inside Scoop */}
        <div className="md:col-span-8">
          <BentoCard
            subtitle="The Inside Scoop"
            title="Currently building a SaaS Application"
            className="h-64"
            background={
              <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mt-4 overflow-x-auto">
                {featureCards.map((feature, idx) => (
                  <div key={idx} className="bg-zinc-800 rounded-lg p-3 min-w-32">
                    <h4 className="text-xs font-medium text-zinc-200 mb-1">{feature.title}</h4>
                    <p className="text-xs text-zinc-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}