'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, AlertCircle, CheckCircle } from 'lucide-react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const validate = () => {
    const nextErrors: Record<string, string> = {}
    if (!formData.name.trim()) nextErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = 'Please provide a valid email address'
    }
    if (!formData.message.trim()) nextErrors.message = 'Message cannot be empty'
    return nextErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 border-t border-border/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct info & socials */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                Get In Touch
              </span>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 mb-6">
                Let&apos;s Build Something Beautiful
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
                I am always open to discussing new opportunities, backend architecture optimization, or project collaborations. Drop me a line, and let&apos;s start a conversation!
              </p>

              {/* Direct email and phone display */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/40 border border-border/40 hover:bg-secondary/70 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Direct Email</span>
                    <a href="mailto:urviladhani23@gmail.com" className="block text-sm font-semibold text-foreground hover:underline">
                      urviladhani23@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/40 border border-border/40 hover:bg-secondary/70 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                    📞
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Phone</span>
                    <a href="tel:+919712025610" className="block text-sm font-semibold text-foreground hover:underline">
                      +91 9712025610
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Connect Elsewhere</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Urvi-Ladhani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/60 hover:bg-secondary border border-border/40 text-sm font-semibold text-muted-foreground hover:text-foreground transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/urvi-ladhani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/60 hover:bg-secondary border border-border/40 text-sm font-semibold text-muted-foreground hover:text-foreground transition-all"
                >
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/urvi_ladhani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/60 hover:bg-secondary border border-border/40 text-sm font-semibold text-muted-foreground hover:text-foreground transition-all"
                >
                  LeetCode
                </a>
                <a
                  href="https://urvi-ladhani.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/60 hover:bg-secondary border border-border/40 text-sm font-semibold text-muted-foreground hover:text-foreground transition-all"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 90, damping: 18 }}
              className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-sm relative overflow-hidden"
            >
              {/* Form header */}
              <h4 className="text-xl font-bold tracking-tight text-foreground mb-6">Send Message</h4>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-secondary/40 border border-border/80 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-foreground"
                    placeholder="John Doe"
                    disabled={isSubmitting || isSuccess}
                  />
                  {errors.name && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-rose-500 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-secondary/40 border border-border/80 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-foreground"
                    placeholder="john@example.com"
                    disabled={isSubmitting || isSuccess}
                  />
                  {errors.email && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-rose-500 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-secondary/40 border border-border/80 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-foreground resize-none"
                    placeholder="Tell me about your project..."
                    disabled={isSubmitting || isSuccess}
                  />
                  {errors.message && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-rose-500 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Status Notifications */}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium flex items-start gap-2.5"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Your message has been sent successfully. Thank you for reaching out! (Mock submission success)</span>
                  </motion.div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full py-3.5 px-6 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
