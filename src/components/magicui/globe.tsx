/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
height: 800,
onRender: () => {},
devicePixelRatio: 2,
phi: 0,
theta: 0.3,
dark: 0,
diffuse: 0.4,
mapSamples: 16000,
mapBrightness: 1.2,
baseColor: [1, 1, 1],           // Light purple (#E6CCFF)
markerColor: [0.24, 0, 0.11],        // Dark purple (#4B0082)
glowColor: [1, 1, 1],                 // Blue (#0000FF)

  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    
    // India Border Outline - Major border points
    // Northern Border (Pakistan/China border)
    { location: [34.5, 74.5], size: 0.02 },      // Kashmir region
    { location: [32.0, 76.0], size: 0.02 },      // Himachal Pradesh
    { location: [30.0, 78.0], size: 0.02 },      // Uttarakhand
    { location: [28.5, 80.5], size: 0.02 },      // Nepal border
    { location: [27.0, 88.0], size: 0.02 },      // Sikkim/Bhutan
    { location: [26.0, 91.5], size: 0.02 },      // Assam
    { location: [25.5, 94.0], size: 0.02 },      // Arunachal Pradesh
    
    // Eastern Border (Myanmar/Bangladesh)
    { location: [24.0, 93.5], size: 0.02 },      // Manipur
    { location: [23.0, 92.5], size: 0.02 },      // Mizoram
    { location: [22.0, 91.0], size: 0.02 },      // Bangladesh border
    { location: [21.0, 89.0], size: 0.02 },      // West Bengal
    
    // Southern Coast
    { location: [20.0, 86.0], size: 0.02 },      // Odisha coast
    { location: [17.0, 82.0], size: 0.02 },      // Andhra Pradesh
    { location: [13.0, 80.0], size: 0.02 },      // Tamil Nadu
    { location: [10.0, 77.0], size: 0.02 },      // Kerala
    { location: [8.0, 77.0], size: 0.02 },       // Kanyakumari
    
    // Western Coast
    { location: [12.0, 75.0], size: 0.02 },      // Karnataka coast
    { location: [15.0, 74.0], size: 0.02 },      // Goa
    { location: [18.0, 73.0], size: 0.02 },      // Maharashtra coast
    { location: [20.0, 70.0], size: 0.02 },      // Gujarat coast
    { location: [23.0, 68.0], size: 0.02 },      // Gujarat-Pakistan border
    { location: [25.0, 70.0], size: 0.02 },      // Rajasthan
    { location: [28.0, 70.0], size: 0.02 },      // Punjab border
    
    // Major Cities (larger markers)
    { location: [19.076, 72.8777], size: 0.08 },    // Mumbai
    { location: [28.6139, 77.2090], size: 0.08 },   // New Delhi
    { location: [12.9716, 77.5946], size: 0.06 },   // Bangalore
    { location: [13.0827, 80.2707], size: 0.06 },   // Chennai
    { location: [22.5726, 88.3639], size: 0.06 },   // Kolkata
    
    // Other countries (existing markers)
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
    { location: [51.5074, -0.1278], size: 0.1 },
    { location: [55.7558, 37.6173], size: 0.05 },
    { location: [48.8566, 2.3522], size: 0.1 },
    { location: [52.5200, 13.4050], size: 0.05 },
    { location: [35.6895, 139.6917], size: 0.1 },
    { location: [37.7749, -122.4194], size: 0.1 },
    { location: [34.0522, -118.2437], size: 0.1 },
    { location: [55.9533, -3.1883], size: 0.05 },
    { location: [48.1351, 11.582], size: 0.05 },
    { location: [59.9342, 30.335], size: 0.05 },
    { location: [40.4168, -3.7038], size: 0.05 },
    { location: [41.9028, 12.4964], size: 0.05 },

  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-1/2",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
