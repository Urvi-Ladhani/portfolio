'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'

export default function Experience() {
  const bulletPoints = [
    'Engineered and optimized high-performance RESTful API endpoints utilizing Node.js, Express.js, and TypeScript, improving query processing efficiency.',
    'Integrated third-party APIs and microservices, designing clean data validation layers and error-handling middleware to safeguard system stability.',
    'Collaborated closely with cross-functional teams to integrate MERN stack components, enhancing overall application responsiveness and front-end connection flows.',
    'Optimized database queries and indexing strategies in MongoDB/MySQL, reducing average page-load latency and supporting data integrity guidelines.',
  ]

  return (
    <section id="experience" className="py-24 border-t border-border/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest"
          >
            My Journey
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mt-2"
          >
            Professional Experience
          </motion.h3>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
          >
            {/* Left Accent Bar */}
            <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-blue-600" />

            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  Internship
                </span>
                <h4 className="text-2xl font-extrabold tracking-tight text-foreground">
                  Backend Development Intern
                </h4>
                <p className="text-lg font-semibold text-muted-foreground mt-1">
                  Flyrank
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-2 md:items-end text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  Jun 2026 – Present
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  Remote / Hybrid
                </span>
              </div>
            </div>

            {/* Bullet points */}
            <ul className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              {bulletPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
