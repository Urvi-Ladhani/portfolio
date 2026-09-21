// components/desktop/AboutWindow.tsx
'use client';

import React, { useState, useEffect } from 'react';
import WindowFrame from './WindowFrame';
import { useDesktopStore } from '@/store/useDesktopStore';
import { 
  Download, 
  ExternalLink, 
  Edit3, 
  Check, 
  X, 
  Plus, 
  Code, 
  Trophy, 
  FolderGit2, 
  Sparkles,
  Globe
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function AboutWindow() {
  const { aboutData, siteMeta, isOwner, updateAboutData, openWindow } = useDesktopStore();
  
  // Edit mode state
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(aboutData);
  const [newSkill, setNewSkill] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setFormData(aboutData);
  }, [aboutData]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateAboutData(formData);
      setIsEditing(false);
    } catch (err) {
      console.error('Failed to update About data:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddSkill = () => {
    if (!newSkill.trim()) return;
    if (!formData.soft_skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        soft_skills: [...formData.soft_skills, newSkill.trim()],
      });
    }
    setNewSkill('');
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      soft_skills: formData.soft_skills.filter((s) => s !== skillToRemove),
    });
  };

  const handleOpenResume = () => {
    openWindow('project-resume', 'Resume.pdf', {
      title: 'Resume.pdf',
      project_url: siteMeta.resume_url || '/urvi_ladhani_resume.pdf',
    });
  };

  return (
    <WindowFrame
      id="about"
      title="About Me"
      width={740}
      height={640}
      headerActions={
        isOwner && (
          <div className="flex items-center space-x-1.5">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition-colors"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{isSaving ? 'Saving...' : 'Save'}</span>
                </button>
                <button
                  onClick={() => {
                    setFormData(aboutData);
                    setIsEditing(false);
                  }}
                  className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 text-neutral-500 text-xs transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-200 text-xs font-medium transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
            )}
          </div>
        )
      }
    >
      <div className="w-full h-full flex flex-col md:flex-row bg-[#FAFAFA] dark:bg-[#1E1E20] overflow-y-auto md:overflow-hidden text-neutral-900 dark:text-neutral-100">
        {/* ============================================================ */}
        {/* LEFT SIDEBAR: FIXED / NON-SCROLLING (STACKED ON MOBILE)      */}
        {/* ============================================================ */}
        <aside className="w-full md:w-[240px] shrink-0 p-6 flex flex-col items-center text-center bg-white/70 dark:bg-black/20 border-b md:border-b-0 md:border-r border-black/5 dark:border-white/5 select-none">
          {/* Circular Profile Photo */}
          <div className="relative group mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-black/10 dark:border-white/20 shadow-md bg-gradient-to-tr from-purple-500/20 to-blue-500/20 flex items-center justify-center">
              {formData.photo_url ? (
                <img
                  src={formData.photo_url}
                  alt="Urvi Ladhani"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to avatar if broken url
                    (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/bottts/svg?seed=Urvi';
                  }}
                />
              ) : (
                <span className="text-3xl font-semibold text-neutral-400">UL</span>
              )}
            </div>

            {isEditing && (
              <div className="mt-2 w-full">
                <label className="text-[10px] text-neutral-500 uppercase font-bold block mb-1">
                  Photo URL
                </label>
                <input
                  type="text"
                  value={formData.photo_url}
                  onChange={(e) => setFormData({ ...formData, photo_url: e.target.value })}
                  placeholder="https://..."
                  className="w-full text-xs px-2 py-1 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded text-center focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
            )}
          </div>

          {/* Name */}
          <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Urvi Ladhani
          </h2>

          {/* Tagline from data */}
          {isEditing ? (
            <div className="w-full mt-2">
              <label className="text-[10px] text-neutral-500 uppercase font-bold block mb-1">
                Tagline
              </label>
              <textarea
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                rows={2}
                className="w-full text-xs p-1.5 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded text-center focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
          ) : (
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-snug">
              {aboutData.tagline}
            </p>
          )}

          {/* Social Links Row */}
          <div className="flex items-center justify-center space-x-2.5 mt-5">
            <a
              href="https://github.com/Urvi-Ladhani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-neutral-700 dark:text-neutral-200 transition-colors"
              title="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/urvi-ladhani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-blue-600 dark:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/urvi_ladhani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-amber-500 transition-colors font-mono font-bold text-xs flex items-center justify-center"
              title="LeetCode"
            >
              <Code className="w-4 h-4" />
            </a>
            <a
              href="https://urvi-ladhani.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-purple-600 dark:text-purple-400 transition-colors"
              title="Portfolio"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>

          {/* Download Resume Button (Opens the Resume PDF viewer window) */}
          <div className="mt-6 w-full">
            <button
              onClick={handleOpenResume}
              className="w-full py-2 px-3 rounded-lg bg-[var(--color-accent-purple,#6C5CE7)] hover:bg-[#5B4FCF] text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all shadow-sm active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>
          </div>
        </aside>

        {/* ============================================================ */}
        {/* RIGHT CONTENT: SCROLLABLE PERSONAL NARRATIVE                 */}
        {/* ============================================================ */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6">
          {/* SECTION 1: BIO */}
          <section className="max-w-[540px]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
              Bio
            </h3>
            {isEditing ? (
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows={5}
                className="w-full text-sm p-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            ) : (
              <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                {aboutData.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </section>

          {/* SECTION 2: HOW I WORK (SOFT SKILLS BADGES/CHIPS) */}
          <section className="max-w-[540px]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
              How I Work
            </h3>
            {isEditing ? (
              <div className="space-y-2.5">
                <div className="flex flex-wrap gap-2">
                  {formData.soft_skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                    >
                      <span>{skill}</span>
                      <button
                        onClick={() => handleRemoveSkill(skill)}
                        className="hover:text-red-500"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                    placeholder="Add a soft skill (press Enter)..."
                    className="flex-1 text-xs px-3 py-1.5 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                  <button
                    onClick={handleAddSkill}
                    className="px-2.5 py-1.5 rounded bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {aboutData.soft_skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/40 shadow-xs transition-transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </section>

          {/* SECTION 3: CURRENTLY CALLOUT BOX */}
          <section className="max-w-[540px]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Focus
            </h3>
            {isEditing ? (
              <input
                type="text"
                value={formData.currently}
                onChange={(e) => setFormData({ ...formData, currently: e.target.value })}
                className="w-full text-xs p-2.5 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            ) : (
              <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-900 dark:text-purple-200 text-xs font-medium leading-relaxed flex items-start space-x-2.5 shadow-xs">
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                <span>{aboutData.currently}</span>
              </div>
            )}
          </section>

          {/* SECTION 4: BEYOND THE SCREEN */}
          <section className="max-w-[540px] pt-3 border-t border-black/5 dark:border-white/10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Beyond the Screen
            </h3>
            {isEditing ? (
              <textarea
                value={formData.interests}
                onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                rows={3}
                className="w-full text-sm p-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            ) : (
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {aboutData.interests}
              </p>
            )}
          </section>

          {/* SECTION 5: FOOTER NAVIGATION TO EXISTING WINDOWS */}
          <section className="max-w-[540px] pt-4 border-t border-black/5 dark:border-white/10">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Explore More
            </h4>
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => openWindow('skills', 'Skills & Technologies')}
                className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10 hover:border-purple-400 text-xs font-semibold text-neutral-700 dark:text-neutral-200 hover:text-purple-600 dark:hover:text-purple-400 shadow-2xs transition-all active:scale-[0.98]"
              >
                <Code className="w-3.5 h-3.5 text-blue-500" />
                <span>See my Skills →</span>
              </button>

              <button
                onClick={() => openWindow('achievements', 'Achievements & Honors')}
                className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10 hover:border-purple-400 text-xs font-semibold text-neutral-700 dark:text-neutral-200 hover:text-purple-600 dark:hover:text-purple-400 shadow-2xs transition-all active:scale-[0.98]"
              >
                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                <span>See my Achievements →</span>
              </button>

              <button
                onClick={() => openWindow('projects', 'Projects Gallery')}
                className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10 hover:border-purple-400 text-xs font-semibold text-neutral-700 dark:text-neutral-200 hover:text-purple-600 dark:hover:text-purple-400 shadow-2xs transition-all active:scale-[0.98]"
              >
                <FolderGit2 className="w-3.5 h-3.5 text-purple-500" />
                <span>See my Projects →</span>
              </button>
            </div>
          </section>
        </main>
      </div>
    </WindowFrame>
  );
}
