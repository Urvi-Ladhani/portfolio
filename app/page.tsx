import React from 'react'
import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects'
import Experience from '@/sections/Experience'
import Achievements from '@/sections/Achievements'
import Resume from '@/sections/Resume'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'
import { fetchGitHubProjects } from '@/lib/github'

// Forces Next.js to validate/cache correctly
export const revalidate = 3600

export default async function Home() {
  // Fetch projects on the server side
  const projects = await fetchGitHubProjects()

  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-hidden">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects initialProjects={projects} />
        <Experience />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
