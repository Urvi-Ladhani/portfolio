'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { FileText, ArrowRight, Code } from 'lucide-react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  }

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden gradient-bg"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide mb-6 uppercase"
          >
            <Code className="w-3.5 h-3.5" />
            Computer Engineering Student
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Urvi
            </span>
            .
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-muted-foreground mb-6"
          >
            Backend Developer &amp; Engineering Student
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8"
          >
            I specialize in building scalable **Backend Development** architectures, developing AI-driven applications, and writing clean, reliable code with the **MERN Stack**. Focused on **Problem Solving**, efficient data structures, and engineering high-throughput **Full Stack** solutions.
          </motion.p>

          {/* Call-to-actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-102 transition-all cursor-pointer focus:outline-none"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollTo('resume')}
              className="px-6 py-3 rounded-xl bg-secondary/80 border border-border text-foreground font-semibold flex items-center gap-2 hover:bg-secondary hover:scale-102 transition-all cursor-pointer focus:outline-none"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <a
              href="https://github.com/Urvi-Ladhani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary/60 hover:bg-secondary border border-border/40 text-muted-foreground hover:text-foreground transition-all"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/urvi-ladhani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary/60 hover:bg-secondary border border-border/40 text-muted-foreground hover:text-foreground transition-all"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:urviladhani.work@gmail.com"
              className="p-3 rounded-xl bg-secondary/60 hover:bg-secondary border border-border/40 text-muted-foreground hover:text-foreground transition-all"
              aria-label="Email Contact"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Premium Mock Code Editor Illustration */}
        <motion.div
          className="lg:col-span-5 hidden lg:block"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
        >
          <div className="w-full rounded-2xl border border-border/80 shadow-2xl overflow-hidden glass">
            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-xs text-muted-foreground font-mono">urvi.config.ts</span>
              <div className="w-10" />
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-xs leading-relaxed overflow-x-auto select-none bg-slate-950/40 dark:bg-slate-950/70 text-slate-300">
              <div>
                <span className="text-blue-400">import</span> &#123; Developer, MERN, AI &#125; <span className="text-blue-400">from</span> <span className="text-emerald-400">&apos;@/types/engineer&apos;</span>;
              </div>
              <div className="mt-4">
                <span className="text-purple-400">const</span> <span className="text-amber-400">urvi</span>: Developer = &#123;
              </div>
              <div className="pl-4">
                name: <span className="text-emerald-400">&apos;Urvi Ladhani&apos;</span>,
              </div>
              <div className="pl-4">
                role: <span className="text-emerald-400">&apos;Backend Developer &amp; Computer Engineering Student&apos;</span>,
              </div>
              <div className="pl-4">
                stack: [<span className="text-emerald-400">&apos;MongoDB&apos;</span>, <span className="text-emerald-400">&apos;Express&apos;</span>, <span className="text-emerald-400">&apos;React&apos;</span>, <span className="text-emerald-400">&apos;Node&apos;</span>],
              </div>
              <div className="pl-4">
                skills: [
              </div>
              <div className="pl-8">
                <span className="text-emerald-400">&apos;Backend System Design&apos;</span>,
              </div>
              <div className="pl-8">
                <span className="text-emerald-400">&apos;AI Application Development&apos;</span>,
              </div>
              <div className="pl-8">
                <span className="text-emerald-400">&apos;Data Structures &amp; Algorithms&apos;</span>,
              </div>
              <div className="pl-8">
                <span className="text-emerald-400">&apos;Scalable APIs &amp; Architecture&apos;</span>
              </div>
              <div className="pl-4">
                ],
              </div>
              <div className="pl-4">
                passionateAbout: <span className="text-emerald-400">&apos;Building efficient, impact-driven software&apos;</span>
              </div>
              <div>&#125;;</div>

              <div className="mt-6 text-slate-500">// Executing profile analytics...</div>
              <div>
                <span className="text-amber-400">console</span>.<span className="text-blue-400">log</span>(<span className="text-emerald-400">`Hello, let&apos;s build something great together!`</span>);
              </div>

              {/* Decorative Console Output */}
              <div className="mt-6 p-3 rounded-lg bg-black/40 border border-border/30 text-emerald-400">
                <span className="text-slate-500">$ ts-node urvi.config.ts</span>
                <br />
                <span className="text-slate-300">&gt; Hello, let&apos;s build something great together!</span>
                <br />
                <span className="text-blue-400">&gt; Status: Open for opportunities 🚀</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
