'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Trophy, Code2, Cpu, GraduationCap, Server, BrainCircuit, Terminal } from 'lucide-react'

interface StatCardProps {
  value: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  colorClass: string;
  glowClass: string;
}

function StatCard({ value, label, sublabel, icon, colorClass, glowClass }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="p-6 rounded-2xl border border-border/80 bg-card hover:bg-secondary/40 shadow-sm relative overflow-hidden group cursor-default"
    >
      {/* Glow Effect */}
      <div className={`absolute -right-10 -top-10 w-24 h-24 rounded-full opacity-15 group-hover:opacity-25 blur-xl transition-opacity duration-300 ${glowClass}`} />
      
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 transition-transform duration-300 group-hover:scale-110 ${colorClass}`}>
        {icon}
      </div>

      {/* Value */}
      <h4 className="text-3xl font-extrabold tracking-tight bg-gradient-to-br from-foreground to-foreground/80 mb-1">
        {value}
      </h4>

      {/* Title */}
      <p className="text-sm font-semibold text-foreground mb-1">{label}</p>

      {/* Sublabel */}
      <p className="text-xs text-muted-foreground">{sublabel}</p>
    </motion.div>
  )
}

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  }

  return (
    <section id="about" className="py-24 border-t border-border/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          {/* Left: Bio Text */}
          <div className="lg:col-span-7">
            <motion.div variants={revealVariants}>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                My Story
              </span>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 mb-8 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Engineering Scalable Solutions &amp; Solving Complex Problems
              </h3>
            </motion.div>

            <motion.div
              variants={revealVariants}
              className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg"
            >
              <p>
                Hello! I am <strong className="text-foreground font-semibold">Urvi Ladhani</strong>, a Computer Engineering Student passionate about software architecture, back-end technologies, and building robust platforms. My core focus lies in engineering highly performant API layers, designing database schemas, and integrating AI microservices.
              </p>
              
              <p>
                My expertise spans the <strong className="text-foreground font-semibold">MERN Stack</strong>, system optimization, and backend architectures. With a strong command of Data Structures &amp; Algorithms (DSA), I love dissecting complex problems and translating them into elegant, clean code.
              </p>

              <p>
                I thrive in fast-paced environments like hackathons, where I enjoy turning zero-to-one ideas into working prototypes. Whether it is optimizing page replacement simulators or developing ESG management tools, I approach every project with an eye for scalability and detail.
              </p>
            </motion.div>

            {/* Core Pillars */}
            <motion.div
              variants={revealVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-border/45"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                  <Server className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-foreground">Backend &amp; APIs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-foreground">AI Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-500 flex items-center justify-center shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-foreground">Problem Solving</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Stats Grid */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
            >
              <StatCard
                value="500+"
                label="LeetCode Problems"
                sublabel="Solved with C++ &amp; Java"
                icon={<Code2 className="w-5 h-5 text-blue-500" />}
                colorClass="bg-blue-500/10 border-blue-500/20"
                glowClass="bg-blue-500"
              />
              <StatCard
                value="12+"
                label="Projects Built"
                sublabel="Full-stack &amp; Backend ERPs"
                icon={<Cpu className="w-5 h-5 text-purple-500" />}
                colorClass="bg-purple-500/10 border-purple-500/20"
                glowClass="bg-purple-500"
              />
              <StatCard
                value="3+"
                label="Hackathons"
                sublabel="Smart India Finalist &amp; more"
                icon={<Trophy className="w-5 h-5 text-pink-500" />}
                colorClass="bg-pink-500/10 border-pink-500/20"
                glowClass="bg-pink-500"
              />
              <StatCard
                value="15+"
                label="Technologies"
                sublabel="Dev tools &amp; Databases"
                icon={<GraduationCap className="w-5 h-5 text-emerald-500" />}
                colorClass="bg-emerald-500/10 border-emerald-500/20"
                glowClass="bg-emerald-500"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
