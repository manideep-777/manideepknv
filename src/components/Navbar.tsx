"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

import { useRouter } from 'next/navigation';


interface NavItem {
  name: string;
  url: string;
}

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>("");

  const navItems: NavItem[] = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  useEffect(() => {
    const currentPath = pathname;
    const active = navItems.find((item) => item.url === currentPath)?.name || navItems[0].name;
    setActiveItem(active);
  }, [pathname]);

  const router = useRouter();
  const pathnameLogo = usePathname();
  
  const handleLogoClick = (e) => {
    if (pathnameLogo === "/") {
      // Already on homepage, scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Else: Link will navigate normally
  };

  return (
    <div className={cn(
      "fixed top-2 left-1/2 backdrop-blur-sm rounded-full -translate-x-1/2 z-50 pt-4 w-full max-w-screen-lg px-5",
      className
    )}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={handleLogoClick} className="text-2xl w-24 font-bold">
          <div className="flex items-center">
            <span className="text-white">TR</span>
          </div>
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center justify-center backdrop-blur-md bg-black/20 rounded-full px-6 py-2 border border-white/10">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveItem(item.name)}
                className={cn(
                  "relative px-4 py-2 text-sm transition-colors",
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -top-5 left-1/2 -translate-x-1/2"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.3
                    }}
                  >
                    {/* Glowing line indicator */}
                    <div className="relative">
                      {/* Main line */}
                      <div className="h-1 w-8 bg-white rounded-full" />

                      {/* Glow effects */}
                      <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-4 bg-white/30 rounded-full blur-sm -top-1 left-0" />
                      <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
          <Link href="/contact" className="text-white text-sm font-medium">
            Book a Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;