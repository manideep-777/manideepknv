import HeroSection from "@/components/HeroSection";
// import SpaceBg from "@/components/SpaceBg";
import Grids from "@/components/Grids";
import WorkShowcase from '../components/WorkShowcase';
import EnhancedTechStack from "@/components/TechStack";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import LiquidEther from "@/components/LiquidEther";

import { FaArrowRight } from "react-icons/fa";

import Link from "next/link";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center font-[family-name:var(--font-geist-sans)]">
      {/* Global LiquidEther Background - covers entire viewport */}
      <div className="fixed inset-0 w-full h-full z-30 pointer-events-none overflow-hidden">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={false}
          autoSpeed={0}
          autoIntensity={0}
          takeoverDuration={0}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <HeroSection />

      {/* <SpaceBg/> */}
      <div className="z-500">
        <Grids />
        <WorkShowcase />

        <div className="bg-black flex justify-center items-center w-full">
          <Link href="/projects" className="bg-zinc-900 w-40 text-center flex flex-row justify-center items-center gap-2 rounded-full text-white px-3 py-1">Explore More <FaArrowRight />  </Link>
        </div>

        <EnhancedTechStack />
        <WorkExperience />
        <Services />
        <Marquee />
      </div>
    </div>
  );
}
