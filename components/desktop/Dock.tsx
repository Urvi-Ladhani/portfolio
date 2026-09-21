// components/desktop/Dock.tsx
'use client';

import React from 'react';
import DockIcon from './DockIcon';
import { useDesktopStore } from '@/store/useDesktopStore';
import { FolderSvg } from './FolderIcon';

export default function Dock() {
  const { openWindow, isOwner } = useDesktopStore();

  return (
    <div className="flex flex-col items-center select-none pointer-events-auto">
      {/* 3 Pagination Dots */}
      <div className="flex items-center space-x-1.5 mb-2.5">
        <div 
          className="w-2 h-2 rounded-full" 
          style={{ backgroundColor: 'var(--color-accent-purple, #6C5CE7)' }} 
        />
        <div 
          className="w-1.5 h-1.5 rounded-full" 
          style={{ backgroundColor: '#D4D2E6' }} 
        />
        <div 
          className="w-1.5 h-1.5 rounded-full" 
          style={{ backgroundColor: '#D4D2E6' }} 
        />
      </div>

      {/* Floating Glassmorphic Pill Dock */}
      <div
        className="px-4 py-2.5 rounded-[26px] flex items-center space-x-3 transition-all duration-200"
        style={{
          backgroundColor: 'var(--color-dock-bg, rgba(255, 255, 255, 0.85))',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 12px 32px -4px rgba(50, 50, 93, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* 1. Terminal */}
        <DockIcon
          id="terminal"
          label="Terminal"
          onClick={() => openWindow('terminal', 'Terminal — bash')}
        >
          <div className="w-full h-full rounded-[13px] bg-[#1C1C1E] flex items-center justify-center text-[#2ECC71] font-mono text-[14px] font-bold tracking-tighter">
            &gt;_
          </div>
        </DockIcon>

        {/* 2. Code */}
        <DockIcon
          id="code"
          label="Code"
          onClick={() => openWindow('code', 'Code / Tech Stack')}
        >
          <div className="text-[var(--color-accent-purple,#6C5CE7)] font-bold text-[16px] tracking-tight">
            &lt;/&gt;
          </div>
        </DockIcon>

        {/* 3. About */}
        <DockIcon
          id="about"
          label="About"
          onClick={() => openWindow('about', 'About Me')}
        >
          <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center text-[var(--color-accent-purple,#6C5CE7)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </DockIcon>

        {/* 4. Projects */}
        <DockIcon
          id="projects"
          label="Projects"
          onClick={() => openWindow('projects', 'Projects Gallery')}
        >
          <FolderSvg size={30} />
        </DockIcon>

        {/* 5. Skills */}
        <DockIcon
          id="skills"
          label="Skills"
          onClick={() => openWindow('skills', 'Skills & Technologies')}
        >
          <div className="w-7 h-8 rounded bg-sky-50 border border-sky-200 flex flex-col justify-center px-1.5 space-y-1">
            <div className="w-4 h-1 bg-[#4A90E2] rounded-full" />
            <div className="w-3 h-1 bg-[#4A90E2]/60 rounded-full" />
            <div className="w-2.5 h-1 bg-[#4A90E2]/40 rounded-full" />
          </div>
        </DockIcon>

        {/* 6. Achievements */}
        <DockIcon
          id="achievements"
          label="Achievements"
          onClick={() => openWindow('achievements', 'Achievements & Honors')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-gold, #F4B93E)">
            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
          </svg>
        </DockIcon>

        {/* 7. Contact */}
        <DockIcon
          id="contact"
          label="Contact"
          onClick={() => openWindow('contact', 'Send a Message')}
        >
          <div className="w-8 h-6 rounded bg-[var(--color-mail-blue,#4A90E2)] flex items-center justify-center text-white shadow-sm">
            <svg width="16" height="14" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
        </DockIcon>

        {/* 8. Blog */}
        <DockIcon
          id="blog"
          label="Blog"
          onClick={() => openWindow('blog', 'Blog & Articles')}
        >
          <div className="w-7 h-8 rounded bg-amber-100 border border-amber-300 flex flex-col justify-center px-1.5 space-y-1">
            <div className="w-4 h-1 bg-amber-600 rounded-full" />
            <div className="w-3.5 h-1 bg-amber-500 rounded-full" />
            <div className="w-2.5 h-1 bg-amber-400 rounded-full" />
          </div>
        </DockIcon>

        {/* 9. Add (Owner only or click to trigger login / add project) */}
        <DockIcon
          id="add"
          label="Add"
          isDashed={true}
          onClick={() => {
            if (isOwner) {
              openWindow('add-project', 'Create New Project');
            } else {
              openWindow('login', 'Owner Login Required to Add Projects');
            }
          }}
        >
          <span className="text-2xl text-[var(--color-accent-purple,#6C5CE7)] font-light leading-none">
            +
          </span>
        </DockIcon>
      </div>
    </div>
  );
}
