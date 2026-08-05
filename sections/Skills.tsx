'use client'

import { motion, Variants } from 'framer-motion'
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from 'react-icons/si'
import { Database, Code } from 'lucide-react'

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
  color: string;
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: 'Languages',
      color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-500',
      skills: [
        { name: 'C++', icon: <SiCplusplus className="w-5 h-5" /> },
        { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5" /> },
        { name: 'Python', icon: <SiPython className="w-5 h-5" /> },
        { name: 'SQL', icon: <Database className="w-5 h-5" /> },
      ],
    },
    {
      title: 'Backend',
      color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-500',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs className="w-5 h-5" /> },
        { name: 'Express.js', icon: <SiExpress className="w-5 h-5" /> },
        { name: 'REST APIs', icon: <SiPostman className="w-5 h-5" /> },
      ],
    },
    {
      title: 'Frontend',
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-500',
      skills: [
        { name: 'Next.js', icon: <SiNextdotjs className="w-5 h-5" /> },
        { name: 'React', icon: <SiReact className="w-5 h-5" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5" /> },
        { name: 'HTML5', icon: <SiHtml5 className="w-5 h-5" /> },
        { name: 'CSS3', icon: <SiCss className="w-5 h-5" /> },
      ],
    },
    {
      title: 'Database',
      color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-500',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="w-5 h-5" /> },
        { name: 'MySQL', icon: <SiMysql className="w-5 h-5 text-sky-600" /> },
      ],
    },
    {
      title: 'Tools & Platforms',
      color: 'from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-500',
      skills: [
        { name: 'Git', icon: <SiGit className="w-5 h-5" /> },
        { name: 'GitHub', icon: <SiGithub className="w-5 h-5" /> },
        { name: 'VS Code', icon: <Code className="w-5 h-5" /> },
        { name: 'Postman', icon: <SiPostman className="w-5 h-5" /> },
        { name: 'Vercel', icon: <SiVercel className="w-5 h-5" /> },
      ],
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  }

  return (
    <section id="skills" className="py-24 border-t border-border/40 bg-secondary/10 dark:bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest"
          >
            Capabilities
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mt-2 mb-4"
          >
            My Technical Stack
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base"
          >
            A curated selection of languages, frameworks, databases, and workflow tools I work with daily.
          </motion.p>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
            >
              {/* Dynamic Header Glow */}
              <div className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r ${category.color.split(' ').slice(0,2).join(' ')}`} />
              
              <h4 className="text-lg font-bold tracking-tight mb-6 text-foreground">
                {category.title}
              </h4>

              {/* Skills Badges Grid */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary/50 dark:bg-secondary/30 hover:bg-secondary border border-border/40 hover:border-border text-foreground text-sm font-semibold transition-all cursor-default select-none"
                  >
                    <span className="text-muted-foreground group-hover:text-foreground group-hover:scale-105 transition-all">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
