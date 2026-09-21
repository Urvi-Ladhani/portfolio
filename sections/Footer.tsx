'use client'

import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="border-t border-border/40 py-10 bg-secondary/10 dark:bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleScrollToTop}
            className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-xs tracking-wider cursor-pointer focus:outline-none"
          >
            UG
          </button>
          <span className="text-xs text-muted-foreground">
            &copy; {currentYear} Urvi Ladhani. All rights reserved.
          </span>
        </div>

        {/* Social connections */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Urvi-Ladhani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/urvi-ladhani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
          >
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="mailto:urviladhani23@gmail.com"
            className="text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
          >
            <FaEnvelope className="w-4 h-4" />
            Email
          </a>
        </div>

      </div>
    </footer>
  )
}
