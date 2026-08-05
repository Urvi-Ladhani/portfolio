'use client'

import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[], offsetPercent = 30) {
  const [activeSection, setActiveSection] = useState<string>('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * (offsetPercent / 100)
      
      // Check if we are at the top of the page
      if (window.scrollY < 50) {
        setActiveSection('home')
        return
      }

      // Check if we are at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection(sectionIds[sectionIds.length - 1])
        return
      }

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run initially to capture current view
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionIds, offsetPercent])

  return activeSection;
}
