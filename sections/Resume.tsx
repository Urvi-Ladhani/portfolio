'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, CheckCircle, GraduationCap, Server, Code } from 'lucide-react'

export default function Resume() {
  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'Charotar University of Science and Technology (CHARUSAT)',
      duration: '2023 – 2027',
      details: 'CGPA: 8.5/10.0 (Current). Focus on Data Structures, Database Systems, Web Architectures, and Operating Systems.',
    },
  ]

  const certifications = [
    'Postman API Fundamentals Student Expert',
    'MERN Stack Web Development Certification',
    'Algorithm Design & Complexity Analysis (DSA)',
  ]

  return (
    <section id="resume" className="py-24 border-t border-border/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Text and Download CTA */}
          <div className="lg:col-span-5">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              Curriculum Vitae
            </span>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 mb-6">
              Ready for Impact
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
              My resume outlines my academic background, backend competencies, system development skills, and technical accomplishments. Recruiter-friendly, ATS-parsed, and ready for instant printing.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-foreground">ATS-optimized layout</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-foreground">Focus on Backend &amp; Databases</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-foreground">Complete Project portfolio details</span>
              </div>
            </div>

            <a
              href="/Urvi_Ladhani_Resume.pdf"
              download="Urvi_Ladhani_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-102 transition-all cursor-pointer focus:outline-none"
            >
              <Download className="w-4.5 h-4.5" />
              Download Resume (PDF)
            </a>
          </div>

          {/* Right Side: Sleek Simulated Paper Document Preview */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              className="w-full max-w-xl aspect-[1/1.3] bg-card text-foreground rounded-2xl border border-border/80 shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[500px] select-none no-scrollbar"
            >
              {/* Document Header */}
              <div className="text-center border-b border-border/80 pb-5 mb-5">
                <h4 className="text-xl font-bold tracking-tight">Urvi Ladhani</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  urviladhani.work@gmail.com | github.com/Urvi-Ladhani | linkedin.com/in/urvi-ladhani
                </p>
              </div>

              {/* Education section */}
              <div className="mb-5">
                <h5 className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2.5 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Education
                </h5>
                {education.map((edu) => (
                  <div key={edu.degree} className="text-xs mb-3">
                    <div className="flex justify-between font-bold">
                      <span>{edu.degree}</span>
                      <span className="text-muted-foreground">{edu.duration}</span>
                    </div>
                    <div className="text-muted-foreground text-[11px] mt-0.5">{edu.institution}</div>
                    <div className="text-muted-foreground text-[10px] italic mt-1">{edu.details}</div>
                  </div>
                ))}
              </div>

              {/* Experience summary */}
              <div className="mb-5">
                <h5 className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2.5 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5" />
                  Experience
                </h5>
                <div className="text-xs">
                  <div className="flex justify-between font-bold">
                    <span>Backend Development Intern</span>
                    <span className="text-muted-foreground">Jun 2026 – Present</span>
                  </div>
                  <div className="text-muted-foreground text-[11px] mt-0.5">Flyrank</div>
                  <div className="text-muted-foreground text-[10px] mt-1.5 space-y-1">
                    <div>• Developed and optimized high-performance RESTful API endpoints.</div>
                    <div>• Integrated third-party APIs and microservices with input validation.</div>
                    <div>• Maintained schema definitions and queries in MongoDB/MySQL databases.</div>
                  </div>
                </div>
              </div>

              {/* Skills summary */}
              <div className="mb-5">
                <h5 className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2.5 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5" />
                  Technical Stack
                </h5>
                <div className="text-[11px] leading-relaxed text-muted-foreground">
                  <div>
                    <strong className="text-foreground">Languages:</strong> C++, JavaScript, Python, SQL
                  </div>
                  <div className="mt-1">
                    <strong className="text-foreground">Backend &amp; DB:</strong> Node.js, Express.js, REST APIs, MongoDB, MySQL
                  </div>
                  <div className="mt-1">
                    <strong className="text-foreground">Frontend:</strong> Next.js, React, HTML, CSS, Tailwind CSS
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  Certifications
                </h5>
                <div className="text-[10px] leading-relaxed text-muted-foreground space-y-0.5">
                  {certifications.map((cert) => (
                    <div key={cert}>✔ {cert}</div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
