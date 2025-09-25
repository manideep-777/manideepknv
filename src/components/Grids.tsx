import React from 'react';
import { cn } from "@/lib/utils";
import { Globe } from "@/components/magicui/globe";
import { IconCloud } from "@/components/magicui/icon-cloud";

// Feature cards data for the bottom section importing from data.ts
import {featureCards} from '../lib/data'


// BentoGrid component following MagicUI structure
const BentoGrid: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-12 gap-4 p-4 mx-auto max-w-7xl", className)}>
      {children}
    </div>
  );
};

// BentoCard component following MagicUI structure
interface BentoCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
  background?: React.ReactNode;
  cta?: string;
  href?: string;
  email?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({
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
      className={cn(
        "group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow-md transition-all hover:shadow-lg",
        className
      )}
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
          <div className="mt-4 flex-grow relative">{background}</div>
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

export default function PortfolioGrid() {
  return (
    <div className="bg-black w-full pt-40 min-h-screen py-8">
      {/* Two-row grid for the content */}
      <BentoGrid>
        {/* Tech stack card - spans left column, full height */}
        <BentoCard
          subtitle="Tech Enthusiast"
          title="Always excited to build cool stuff with the latest tech."
          className="md:col-span-4 md:row-span-2 h-full"
          background={
            <div className="relative flex size-full items-center justify-center overflow-hidden">
              <IconCloud images={images} />
            </div>
          }
        />

        {/* Middle column, first row - Let's work together */}
        <BentoCard
          title="Let's work together"
          description="on your next project"
          className="md:col-span-4 h-64"
          email="manideepknv@gmail.com"
          background={
            <div className="flex justify-center items-center mt-4">
              <div className="h-16 w-16 rounded-full bg-purple-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">KM</span>
              </div>
            </div>
          }
        />

        {/* Right column, first row - Remote with Globe */}
        <BentoCard
          subtitle="Remote"
          title="India"
          description="I'm very flexible with time zone communications"
          className="md:col-span-4 h-64"
          background={
            <div className="absolute inset-0 z-0">
              <div className="w-full h-full opacity-30 scale-125">
                <Globe />
              </div>
            </div>
          }
        />


        {/* SaaS Features */}
        <BentoCard
          subtitle="Behind the Scenes"
          title="Currently crafting a Business Portfolio for Client."
          className="md:col-span-8"
          background={
            <div className="relative w-full overflow-hidden">
              {/* Animation Container */}
              <div className="flex w-max animate-scrollLeft gap-2 mt-4">
                {[...featureCards, ...featureCards].map((feature, idx) => (
                  <div key={idx} className="h-40 bg-zinc-800 rounded-lg p-3 w-36">
                    <h4 className="text-xs font-medium text-zinc-200 mb-2">{feature.title}</h4>
                    <p className="text-xs text-zinc-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />


      </BentoGrid>
    </div>
  );
}