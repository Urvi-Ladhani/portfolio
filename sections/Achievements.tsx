'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Medal, Zap, Star } from 'lucide-react'

interface Achievement {
  title: string;
  subtitle: string;
  year: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      title: 'Finalist',
      subtitle: 'CVMU Hackathon 4.0',
      year: '2026',
      description: 'Pioneered an innovative project prototype addressing real-world industrial challenges, competing against teams nationwide and presenting to domain experts.',
      icon: <Award className="w-5 h-5" />,
      colorClass: 'bg-blue-500/10 border-blue-500 text-blue-500',
    },
    {
      title: 'Top 90 Teams',
      subtitle: 'Odoo × GCET Hackathon',
      year: '2026',
      description: 'Designed and implemented full-stack modular structures and database optimizations under tight timelines, placing in the top tier of all national submissions.',
      icon: <Medal className="w-5 h-5" />,
      colorClass: 'bg-purple-500/10 border-purple-500 text-purple-500',
    },
    {
      title: 'Institute Top 50',
      subtitle: 'Smart India Hackathon',
      year: '2025',
      description: 'Engineered a backend application solving critical public-sector issues, ranking in the top 50 within the institute selection pool.',
      icon: <Zap className="w-5 h-5" />,
      colorClass: 'bg-pink-500/10 border-pink-500 text-pink-500',
    },
  ]

  return (
    <section id="achievements" className="py-24 border-t border-border/40 bg-secondary/10 dark:bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            Recognitions
          </span>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
            Key Achievements
          </h3>
          <p className="text-muted-foreground text-sm md:text-base mt-2">
            Milestones and hackathon achievements from my engineering journey.
          </p>
        </div>

        {/* Modern Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-border/80" />

          <div className="space-y-12">
            {achievements.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={item.subtitle}
                  className={`flex flex-col sm:flex-row items-stretch relative ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Point */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className={`w-10 h-10 rounded-full border-2 bg-background flex items-center justify-center shadow-sm ${item.colorClass}`}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Left/Right Content Block */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                      className="p-6 rounded-2xl border border-border/80 bg-card hover:bg-secondary/20 shadow-sm transition-all duration-300 relative group"
                    >
                      {/* Year badge */}
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-secondary text-xs font-bold text-foreground mb-3">
                        {item.year}
                      </span>
                      
                      <h4 className="text-lg font-bold text-foreground tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-sm font-semibold text-muted-foreground mt-0.5 mb-3">
                        {item.subtitle}
                      </p>
                      
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden sm:block w-1/2" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
