"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue, AnimatePresence } from "framer-motion"

const features = [
  {
    title: "Website Development",
    description: "Custom-built websites tailored to your vision.",
    icon: "💻",
    details: "I design and develop responsive, high-performance websites from scratch using modern technologies. Whether it's a portfolio, blog, or business site, I ensure intuitive navigation, scalable architecture, and seamless user experience aligned with your goals."
  },
  {
    title: "SEO Optimized",
    description: "Engineered for better visibility and higher rankings.",
    icon: "🔎",
    details: "I follow SEO best practices like semantic HTML, optimized metadata, clean URL structures, and fast-loading pages to improve your website’s search engine visibility. This helps drive organic traffic and boosts your online presence effectively."
  },
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

export default function Services() {
  const [width, setWidth] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null)
  const carousel = useRef<HTMLDivElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    // Add event listener for clicks outside the modal
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showModal &&
        modalRef.current instanceof HTMLElement &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showModal])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  interface Feature {
    title: string;
    description: string;
    icon: string;
    details: string;
  }

  const openModal = (feature: Feature) => {
    setSelectedFeature(feature)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  // Animation variants for the modal overlay
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  }

  // Animation variants for the modal content
  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.4
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <div className="py-16 sm:py-32 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-10 text-center font-bold"
        >
          <span className="text-white">What I </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">Provide</span>
        </motion.div>

        <motion.div ref={carousel} className="cursor-grab overflow-x-auto sm:overflow-hidden snap-x snap-mandatory sm:snap-none">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex flex-nowrap sm:flex"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[80vw] sm:min-w-[300px] h-[360px] sm:h-[400px] p-6 sm:p-8 m-2 sm:m-4 bg-zinc-800 rounded-2xl sm:rounded-3xl shadow-lg flex flex-col justify-between snap-center border-2 border-transparent hover:border-primary/10"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                <div>
                  <div className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base">{feature.description}</p>
                </div>
                <div className="mt-3 sm:mt-4">
                  <button
                    onClick={() => openModal(feature)}
                    className="text-white text-sm sm:text-base hover:underline"
                  >
                    Learn more →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Modal */}
        <AnimatePresence>
          {showModal && selectedFeature && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
            >
              <motion.div
                ref={modalRef}
                className="bg-zinc-800 rounded-lg p-6 sm:p-8 max-w-[90vw] sm:max-w-lg w-full mx-4 relative shadow-xl"
                variants={modalVariants}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-100 hover:text-gray-800 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{selectedFeature.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{selectedFeature.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">{selectedFeature.description}</p>
                <div className="border-t border-gray-700 pt-3 sm:pt-4">
                  <h4 className="text-base sm:text-lg font-semibold mb-2 text-white">Details</h4>
                  <p className="text-gray-300 text-sm sm:text-base">{selectedFeature.details}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}