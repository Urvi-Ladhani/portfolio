'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, ArrowUp } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.id))

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll)
      }

      // Check if scrolled
      setScrolled(window.scrollY > 20)

      // Show back to top button
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Navbar height
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

  if (!mounted) return null

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-muted z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
          style={{ scaleX: scrollProgress }}
        />
      </div>

      {/* Sticky Header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'py-3 glass shadow-sm border-b border-border/40'
            : 'py-5 bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="group flex items-center gap-1.5 focus:outline-none cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-lg tracking-wider shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-200">
              UG
            </div>
            <span className="font-semibold text-lg tracking-tight hidden sm:block bg-gradient-to-r from-foreground via-foreground/90 to-foreground/75 bg-clip-text text-transparent group-hover:opacity-85 transition-opacity">
              Urvi Ladhani
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer focus:outline-none',
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-secondary/80 rounded-lg -z-10 border border-secondary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-xl bg-secondary/60 hover:bg-secondary border border-border/40 text-foreground hover:text-primary transition-colors cursor-pointer focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-secondary/60 hover:bg-secondary border border-border/40 text-foreground hover:text-primary transition-colors md:hidden cursor-pointer focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-30 glass border-b border-border/50 shadow-xl md:hidden py-6 px-6 max-h-[85vh] overflow-y-auto"
          >
            <div className="grid grid-cols-2 gap-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    'flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-semibold border transition-all cursor-pointer focus:outline-none',
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-secondary/40 text-muted-foreground border-border/40 hover:bg-secondary hover:text-foreground'
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back-to-Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105 transition-all cursor-pointer focus:outline-none"
            aria-label="Back to top"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
