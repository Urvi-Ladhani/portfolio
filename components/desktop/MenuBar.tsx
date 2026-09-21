// components/desktop/MenuBar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useDesktopStore } from '@/store/useDesktopStore';

export default function MenuBar() {
  const { siteMeta, openWindow, isOwner } = useDesktopStore();
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format matching: "Saturday, Aug 10  2:22 PM"
      const weekday = now.toLocaleDateString('en-US', { weekday: 'short' });
      const month = now.toLocaleDateString('en-US', { month: 'short' });
      const day = now.getDate();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;

      setTimeString(`${weekday} ${month} ${day}  ${hours}:${minutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="w-full h-12 px-5 flex items-center justify-between select-none z-30 transition-colors"
      style={{
        backgroundColor: 'var(--color-menubar-bg, rgba(245,245,247,0.85))',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
      }}
    >
      {/* Left items */}
      <div className="flex items-center space-x-6 text-[13px] font-medium text-[var(--color-text-primary)]">
        {/* Apple Logo */}
        <button 
          onClick={() => openWindow('about', 'About Me')}
          className="hover:opacity-70 transition-opacity p-0.5"
          title="About This Mac"
        >
          <svg width="15" height="18" viewBox="0 0 170 170" fill="currentColor">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.77-11.73-14.19-5.99-9.35-10.45-19.8-13.38-31.36-2.94-11.55-4.41-22.18-4.41-31.9 0-14.24 3.73-26.04 11.19-35.4 7.46-9.36 16.74-14.15 27.84-14.38 5.43 0 11.06 1.41 16.89 4.24 5.83 2.83 9.68 4.3 11.55 4.41 1.74 0 5.88-1.57 12.41-4.72 6.53-3.15 12.28-4.59 17.26-4.32 13.28.76 24.04 5.87 32.28 15.34-11.52 6.96-17.18 16.63-16.98 29.02.22 9.78 3.91 18 11.08 24.67 7.17 6.67 15.87 10.43 26.1 11.28-2.61 7.6-6.19 16.29-10.74 26.07zM119.22 31.84c0-7.39 2.66-14.45 7.99-21.17 5.33-6.72 11.95-10.67 19.88-11.85.22 1.09.33 2.07.33 2.94 0 7.39-2.77 14.56-8.32 21.52-5.55 6.96-12.17 10.92-19.88 11.89z" />
          </svg>
        </button>

        {/* Site / Portfolio Title */}
        <span className="font-semibold tracking-tight text-[13px]">
          {siteMeta.owner_name}&apos;s Portfolio
        </span>

        {/* Nav Links */}
        <button
          onClick={() => openWindow('contact', 'Contact')}
          className="hover:text-black transition-colors cursor-pointer"
        >
          Contact
        </button>
        <button
          onClick={() => {
            openWindow('project-resume', 'Resume.pdf', {
              title: 'Resume.pdf',
              description: 'Urvi Ladhani Curriculum Vitae - Full-Stack Developer & Software Engineer',
              tech_stack: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AI/ML'],
              thumbnail_url: null,
              project_url: '/urvi_ladhani_resume.pdf',
              repo_url: null,
            });
          }}
          className="hover:text-black transition-colors cursor-pointer"
        >
          Resume
        </button>
      </div>

      {/* Right items: Status Bar + Clock */}
      <div className="flex items-center space-x-3.5 text-[13px] text-[var(--color-text-primary)]">
        {/* Subtle Lock Icon (Owner login trigger) */}
        <button
          onClick={() => openWindow('login', isOwner ? 'Owner Dashboard' : 'Admin Login')}
          className={`p-1 rounded hover:bg-black/5 transition-all ${
            isOwner ? 'text-[var(--color-accent-purple)]' : 'text-neutral-500 hover:text-black'
          }`}
          title={isOwner ? 'Authenticated as Owner (Click to logout)' : 'Owner Login (Cmd+Shift+L)'}
        >
          {isOwner ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
            </svg>
          )}
        </button>

        {/* WiFi SVG */}
        <div className="cursor-default" title="Wi-Fi: Connected">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
            <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
            <line x1="12" y1="20" x2="12.01" y2="20"></line>
          </svg>
        </div>

        {/* Battery SVG */}
        <div className="cursor-default flex items-center" title="Battery: 100%">
          <svg width="19" height="14" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="1" width="19" height="12" rx="3" ry="3"></rect>
            <line x1="23" y1="5" x2="23" y2="9"></line>
            <rect x="3" y="3" width="15" height="8" rx="1.5" fill="currentColor"></rect>
          </svg>
        </div>

        {/* Volume SVG */}
        <div className="cursor-default" title="Volume: 80%">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
        </div>

        {/* Search SVG */}
        <button 
          onClick={() => openWindow('projects', 'All Projects')}
          className="hover:opacity-70 transition-opacity" 
          title="Spotlight Search"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>

        {/* Siri / Rainbow Circle Glyph */}
        <div 
          className="w-4 h-4 rounded-full cursor-pointer hover:scale-110 transition-transform"
          style={{
            background: 'conic-gradient(from 180deg at 50% 50%, #4FA6F7 0deg, #6C5CE7 90deg, #F4B93E 180deg, #E02424 270deg, #4FA6F7 360deg)',
            boxShadow: '0 0 6px rgba(108, 92, 231, 0.4)',
          }}
          title="Siri"
          onClick={() => openWindow('terminal', 'Terminal')}
        />

        {/* Live Clock */}
        <span className="font-normal text-[13px] ml-1 tracking-tight text-[#1A1A1A]">
          {timeString || 'Saturday, Aug 10  2:22 PM'}
        </span>
      </div>
    </header>
  );
}
