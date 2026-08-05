'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Star, Award, Layers, Search, Sparkles } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import type { Project } from '@/lib/github'

interface ProjectsProps {
  initialProjects: Project[];
}

function ProjectMockup({ type }: { type: Project['mockupType'] }) {
  // Renders a beautiful visual interface representing the project in-theme
  switch (type) {
    case 'dashboard':
      return (
        <div className="w-full h-full bg-slate-950 p-4 font-mono text-[10px] text-slate-300 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-blue-400 flex items-center gap-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> Student.Stack
            </span>
            <span className="text-[8px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">STUDY PLANNER</span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="bg-slate-900 border border-slate-800 p-2 rounded flex flex-col justify-between">
              <span className="text-[8px] text-slate-500 uppercase">DSA PROGRESS</span>
              <span className="text-sm font-bold text-white mt-1">78%</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-2 rounded flex flex-col justify-between">
              <span className="text-[8px] text-slate-500 uppercase">TASKS DONE</span>
              <span className="text-sm font-bold text-emerald-400 mt-1">12/15</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-2 rounded flex flex-col justify-between">
              <span className="text-[8px] text-slate-500 uppercase">HOURS SPENT</span>
              <span className="text-sm font-bold text-purple-400 mt-1">45h</span>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-2 rounded text-[8px] text-slate-400 flex flex-col gap-1">
            <div className="flex justify-between border-b border-slate-800 pb-1">
              <span>Dynamic Programming</span>
              <span className="text-emerald-400">Solved</span>
            </div>
            <div className="flex justify-between">
              <span>Graph BFS/DFS</span>
              <span className="text-amber-400">In Progress</span>
            </div>
          </div>
        </div>
      )
    case 'ledger':
      return (
        <div className="w-full h-full bg-slate-950 p-4 font-mono text-[10px] text-slate-300 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-purple-400 flex items-center gap-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Family Ledger
            </span>
            <span className="text-[8px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">FINANCE ERP</span>
          </div>
          <div className="my-2 space-y-1.5">
            <div className="flex items-center justify-between bg-slate-900 border border-slate-800 px-2 py-1 rounded">
              <span className="text-slate-400">Weekly Groceries</span>
              <span className="text-rose-400 font-semibold">-$84.50</span>
            </div>
            <div className="flex items-center justify-between bg-slate-900 border border-slate-800 px-2 py-1 rounded">
              <span className="text-slate-400">Salary Deposit</span>
              <span className="text-emerald-400 font-semibold">+$2,450.00</span>
            </div>
            <div className="flex items-center justify-between bg-slate-900 border border-slate-800 px-2 py-1 rounded">
              <span className="text-slate-400">Shared Budget Rent</span>
              <span className="text-rose-400 font-semibold">-$650.00</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-[8px] border-t border-slate-800 pt-2 text-slate-500">
            <span>Net Balance:</span>
            <span className="text-emerald-400 font-bold">+$1,715.50</span>
          </div>
        </div>
      )
    case 'esg':
      return (
        <div className="w-full h-full bg-slate-900/50 dark:bg-slate-950 p-4 flex items-center justify-between select-none border-b border-border/40">
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold text-foreground">EcoSphere Analytics</span>
            <span className="text-[8.5px] text-muted-foreground mt-1">Environmental Dashboard</span>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-emerald-500 font-bold">Carbon Offset Active</span>
            </div>
          </div>
          <div className="relative w-16 h-16 rounded-full border-4 border-emerald-500/20 flex items-center justify-center">
            <div className="absolute inset-0 border-4 border-t-emerald-500 border-r-emerald-500 border-l-transparent border-b-transparent rounded-full rotate-45" />
            <span className="text-xs font-extrabold text-foreground">84%</span>
          </div>
        </div>
      )
    case 'detective':
      return (
        <div className="w-full h-full bg-neutral-950 p-4 font-mono text-[9px] text-red-500/90 flex flex-col justify-between select-none">
          <div className="border-b border-red-950 pb-1.5 flex justify-between text-neutral-400">
            <span>DETECTIVE CONSOLE v1.0.4</span>
            <span className="text-red-500 animate-pulse">● LIVE CASE</span>
          </div>
          <div className="my-2 space-y-1 text-neutral-300">
            <div>&gt; Inspect suspect: <span className="text-amber-500">Arthur Pendelton</span></div>
            <div>&gt; Alibi check: <span className="text-rose-500">Failed (No corroboration)</span></div>
            <div>&gt; Clue database: <span className="text-emerald-400">12 items analyzed</span></div>
          </div>
          <div className="bg-red-950/20 border border-red-950 p-1.5 rounded text-center text-red-400 text-[8px]">
            &gt;&gt; STAGE 3: INTERROGATING THE SUSPECT &lt;&lt;
          </div>
        </div>
      )
    case 'hrms':
      return (
        <div className="w-full h-full bg-slate-900/50 dark:bg-slate-950 p-4 flex flex-col justify-between select-none border-b border-border/40">
          <div className="flex justify-between items-center border-b border-border/50 pb-2">
            <span className="text-[10px] font-bold text-foreground">Dayflow HRMS</span>
            <span className="text-[8px] bg-blue-500/10 text-blue-500 px-1 py-0.5 rounded">ADMIN PORTAL</span>
          </div>
          <div className="space-y-1.5 my-2">
            <div className="flex justify-between text-[9px] text-muted-foreground">
              <span>Employee Attendance:</span>
              <span className="text-emerald-500 font-semibold">96.8%</span>
            </div>
            <div className="flex justify-between text-[9px] text-muted-foreground">
              <span>Active Leave Requests:</span>
              <span className="text-amber-500 font-semibold">4 Pending</span>
            </div>
          </div>
          <div className="flex justify-between gap-1 text-[8px]">
            <span className="bg-secondary px-1.5 py-1 rounded text-center flex-1">Check-in Log</span>
            <span className="bg-secondary px-1.5 py-1 rounded text-center flex-1">Payroll Report</span>
          </div>
        </div>
      )
    case 'marketplace':
      return (
        <div className="w-full h-full bg-slate-900/50 dark:bg-slate-950 p-4 flex flex-col justify-between select-none border-b border-border/40">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-foreground">Print Stack Market</span>
            <span className="text-[8px] text-muted-foreground">Local Print Shops</span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="border border-border/80 p-1.5 rounded bg-card flex flex-col justify-between">
              <span className="text-[8px] text-muted-foreground">Black &amp; White</span>
              <span className="text-[9px] font-bold mt-1">$0.05 / page</span>
            </div>
            <div className="border border-border/80 p-1.5 rounded bg-card flex flex-col justify-between">
              <span className="text-[8px] text-muted-foreground">Color High Gloss</span>
              <span className="text-[9px] font-bold mt-1">$0.25 / page</span>
            </div>
          </div>
          <div className="bg-blue-600 hover:bg-blue-700 text-white text-center py-1 rounded text-[8.5px] font-bold">
            Place Instant Print Order
          </div>
        </div>
      )
    case 'erp':
      return (
        <div className="w-full h-full bg-slate-900/50 dark:bg-slate-950 p-4 flex flex-col justify-between select-none border-b border-border/40">
          <div className="flex justify-between items-center text-[10px] font-bold">
            <span>Rental Management ERP</span>
            <span className="text-emerald-500 font-semibold">Invoice Paid</span>
          </div>
          <div className="border-y border-dashed border-border/60 py-2 my-2 space-y-1 text-[8.5px] text-muted-foreground">
            <div className="flex justify-between">
              <span>Item: Video Camera Rig (3d)</span>
              <span>$150.00</span>
            </div>
            <div className="flex justify-between">
              <span>Item: Studio Lighting Kit (3d)</span>
              <span>$45.00</span>
            </div>
          </div>
          <div className="flex justify-between text-[10px] font-extrabold text-foreground">
            <span>Total Recieved:</span>
            <span>$195.00</span>
          </div>
        </div>
      )
    case 'simulator':
      return (
        <div className="w-full h-full bg-slate-950 p-4 font-mono text-[9px] text-sky-400/90 flex flex-col justify-between select-none">
          <div className="flex justify-between text-slate-500 border-b border-slate-800 pb-1">
            <span>ALGORITHM SIMULATOR</span>
            <span className="text-sky-500 font-bold">FIFO vs LRU</span>
          </div>
          <div className="my-2">
            <div className="text-[8px] text-slate-400 mb-1">PAGE ALLOCATION FRAMES:</div>
            <div className="flex gap-1">
              <span className="w-6 h-6 border border-sky-950 bg-sky-950/40 text-center flex items-center justify-center rounded font-semibold text-white">4</span>
              <span className="w-6 h-6 border border-sky-950 bg-sky-950/40 text-center flex items-center justify-center rounded font-semibold text-white">2</span>
              <span className="w-6 h-6 border border-sky-950 bg-sky-950/40 text-center flex items-center justify-center rounded font-semibold text-white">1</span>
              <span className="w-6 h-6 border border-slate-800 bg-slate-900 text-center flex items-center justify-center rounded text-slate-600">空</span>
            </div>
          </div>
          <div className="text-[8px] text-slate-500">
            Page Faults: <span className="text-red-500 font-bold">7</span> | Page Hits: <span className="text-emerald-500 font-bold">3</span>
          </div>
        </div>
      )
    case 'password':
      return (
        <div className="w-full h-full bg-slate-900/50 dark:bg-slate-950 p-4 flex flex-col justify-center select-none border-b border-border/40">
          <span className="text-[9px] text-muted-foreground mb-1.5 uppercase font-mono">Password Generator</span>
          <div className="border border-border/80 px-2 py-1.5 bg-card rounded flex justify-between items-center">
            <span className="font-mono text-xs tracking-wider text-foreground">k9#M$p2!vQ</span>
            <span className="text-[8px] bg-emerald-500/10 text-emerald-500 px-1 py-0.5 rounded font-bold">STRONG</span>
          </div>
          <div className="flex gap-1.5 mt-3">
            <div className="h-1.5 flex-1 bg-emerald-500 rounded" />
            <div className="h-1.5 flex-1 bg-emerald-500 rounded" />
            <div className="h-1.5 flex-1 bg-emerald-500 rounded" />
            <div className="h-1.5 flex-1 bg-emerald-500 rounded" />
          </div>
        </div>
      )
    default:
      return (
        <div className="w-full h-full bg-slate-900/50 dark:bg-slate-950 p-4 flex items-center justify-center select-none border-b border-border/40">
          <div className="text-center">
            <Layers className="w-8 h-8 mx-auto text-muted-foreground/50 mb-2 animate-pulse" />
            <span className="text-[10px] text-muted-foreground font-mono">Portfolio Site Wireframe</span>
          </div>
        </div>
      )
  }
}

export default function Projects({ initialProjects }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'featured' | 'other'>('all')

  const filteredProjects = initialProjects.filter((project) => {
    if (filter === 'featured') return project.isFeatured
    if (filter === 'other') return !project.isFeatured
    return true
  })

  // Separate featured and other projects for visual segregation
  const featuredProjects = initialProjects.filter((p) => p.isFeatured)
  const otherProjects = initialProjects.filter((p) => !p.isFeatured)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              My Works
            </span>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
              Featured Case Studies
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mt-2 max-w-lg">
              Dynamic repository feeds compiled directly from GitHub. Featured projects highlight complex architectural works.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-secondary/60 border border-border/40 self-start">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                filter === 'all'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              All Works
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                filter === 'featured'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setFilter('other')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                filter === 'other'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Other
            </button>
          </div>
        </div>

        {/* FEATURED PROJECTS HIGHLIGHT SECTION */}
        {filter !== 'other' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ type: 'spring', stiffness: 90, damping: 18 }}
                className="group border border-border/80 bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/25 transition-all flex flex-col relative h-[480px]"
              >
                {/* Visual Canvas Mockup Header */}
                <div className="h-56 w-full overflow-hidden border-b border-border/40 relative">
                  <ProjectMockup type={project.mockupType} />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    <Award className="w-3.5 h-3.5" />
                    Flagship Project
                  </div>
                  {project.stars > 0 && (
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold backdrop-blur-md">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {project.stars} {project.stars === 1 ? 'star' : 'stars'}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.topics.slice(0, 5).map((topic) => (
                        <span
                          key={topic}
                          className="px-2.5 py-1 rounded-lg bg-secondary/80 text-foreground border border-border/40 text-[10px] font-semibold"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-6 border-t border-border/40">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl border border-border/80 hover:bg-secondary/40 flex items-center gap-1.5 text-xs font-bold text-foreground transition-all focus:outline-none"
                    >
                      <FaGithub className="w-4 h-4" />
                      Code Repository
                    </a>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 flex items-center gap-1.5 text-xs font-bold transition-all focus:outline-none"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* OTHER PROJECTS GRID */}
        {filter !== 'featured' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                className="group border border-border/80 bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-border transition-all flex flex-col h-[400px]"
              >
                {/* Visual Canvas Mockup Header */}
                <div className="h-40 w-full overflow-hidden border-b border-border/40 relative">
                  <ProjectMockup type={project.mockupType} />
                  {project.stars > 0 && (
                    <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[10px] font-bold backdrop-blur-md">
                      <Star className="w-3 h-3 fill-current" />
                      {project.stars}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-1.5">
                      {project.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1">
                      {project.topics.slice(0, 4).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 rounded bg-secondary/80 text-foreground border border-border/40 text-[9px] font-semibold"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/40 gap-2">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg border border-border/80 hover:bg-secondary/40 flex items-center gap-1 text-[10px] font-bold text-foreground transition-all focus:outline-none"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      Code
                    </a>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 flex items-center gap-1 text-[10px] font-bold transition-all focus:outline-none"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
