import HeroSection from "@/components/HeroSection";
import SpaceBackground from "@/components/SpaceBG";

import Grids from "@/components/Grids";
import WorkShowcase from '../components/WorkShowcase';
import EnhancedTechStack from "@/components/TechStack";


export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center  font-[family-name:var(--font-geist-sans)]">
      <SpaceBackground/>
      <HeroSection/>
      
     <Grids/>
     <WorkShowcase/>
     <EnhancedTechStack/>
      
    </div>
  );
}
