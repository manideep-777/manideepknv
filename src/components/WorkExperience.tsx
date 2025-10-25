'use client'

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Calendar,
  MapPin,
  Database,
  Globe,
  Users,
  Zap,
  Building2,
  Cpu
} from 'lucide-react';
import Image from 'next/image';

// Import work experience data from data.ts
import { workData } from '../lib/data';

const WorkExperience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 sm:py-20 w-full bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-4 sm:mb-6">
            <Building2 className="w-4 h-4 text-blue-400" />
            <span className="text-xs sm:text-sm text-gray-300">Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-3 sm:mb-4">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Building impactful solutions that transform industries
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {workData.map((work, idx) => (
            <motion.div key={idx} variants={cardVariants} className="mb-10 sm:mb-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-900 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg p-1">
                        <Image src={work.logo} alt="logo" className="object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-3xl font-bold text-white mb-1">{work.company}</h3>
                        <p className="text-sm sm:text-xl text-blue-400 font-semibold">{work.role}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-400 text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{work.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{work.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 sm:mb-8">
                    <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-4">
                      {work.headlineDescription}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {work.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-zinc-800 rounded-lg p-3 sm:p-4 text-center border border-blue-900 hover:border-blue-500/50 transition-colors duration-300"
                      >
                        <div className="text-blue-400 font-bold text-base mb-1">
                          {index === 0 && <Zap className="w-5 h-5 mx-auto mb-1" />}
                          {index === 1 && <Globe className="w-5 h-5 mx-auto mb-1" />}
                          {index === 2 && <Cpu className="w-5 h-5 mx-auto mb-1" />}
                          {index === 3 && <Users className="w-5 h-5 mx-auto mb-1" />}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-300 font-medium">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-blue-400" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {work.description.map((point, index) => (
                        <motion.li key={index} variants={itemVariants} className="flex items-start group">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0  transition-colors"></div>
                          <span className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Database className="w-5 h-5 text-blue-400" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {work.techStack.map((tech, index) => (
                        <motion.span
                          key={index}
                          variants={itemVariants}
                          className="px-3 py-1 sm:px-4 sm:py-2 bg-zinc-800 text-gray-300 rounded-full text-xs sm:text-sm border border-emerald-900 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Only show screenshots if available */}
                  {work.screenshots && (
                    <div className="mb-6 sm:mb-8">
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-purple-400" />
                        Platform Preview
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {work.screenshots.map((screenshot, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.01, y: -1 }}
                            transition={{ duration: 0.3 }}
                            className="relative group cursor-pointer"
                          >
                            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
                            <div className="relative bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 aspect-video">
                              <Image src={screenshot} alt="screenshot" fill className="object-fit" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between pt-5 border-t border-zinc-800">
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-blue-400" />
                      {work.footerDescription}
                    </p>
                    {/* <motion.a
                      href={work.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group text-sm sm:text-base"
                    >
                      Visit {work.company}
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
