// components/desktop/Desktop.tsx
'use client';

import React, { useState } from 'react';
import MenuBar from './MenuBar';
import Dock from './Dock';
import StickyNote from './StickyNote';
import FolderIcon from './FolderIcon';
import FileIcon from './FileIcon';
import TrashIcon from './TrashIcon';
import WindowManager from './WindowManager';
import { useDesktopStore } from '@/store/useDesktopStore';
import { Project, DesktopItem } from '@/lib/types';

export default function Desktop() {
  const { 
    projects, 
    desktopItems, 
    selectedItemId, 
    setSelectedItemId, 
    openWindow,
  } = useDesktopStore();

  const [trashOver, setTrashOver] = useState(false);

  const handleOpenProject = (project: Project) => {
    openWindow(`project-${project.slug}`, project.title, project);
  };

  const handleOpenDesktopItem = (item: DesktopItem) => {
    if (item.target === 'about') {
      openWindow('about', 'About Me');
    } else if (item.label.includes('Resume')) {
      openWindow('project-resume', 'Resume.pdf', {
        title: 'Resume.pdf',
        description: 'Urvi Ladhani Curriculum Vitae — Full-Stack Developer & Software Engineer',
        tech_stack: ['TypeScript', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'AI/ML'],
        project_url: '/urvi_ladhani_resume.pdf',
      });
    }
  };

  // Only show active (non-deleted) projects on desktop
  const activeProjects = projects.filter((p) => !p.is_deleted);

  return (
    <div 
      className="w-screen h-screen relative flex flex-col overflow-hidden select-none"
      style={{
        backgroundColor: 'var(--color-bg-desktop, #FAFAFA)',
        backgroundImage: 'radial-gradient(var(--color-grid-dot, #E4E4EA) 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px',
      }}
      onClick={() => setSelectedItemId(null)}
    >
      {/* Menu Bar */}
      <MenuBar />

      {/* Desktop Surface Canvas */}
      <main className="relative flex-1 w-full h-[calc(100%-48px)] overflow-hidden">
        {/* ============================================================ */}
        {/* CENTER HERO SECTION */}
        {/* ============================================================ */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 select-none pb-12">
          {/* "welcome to my" */}
          <span
            className="text-[32px] md:text-[34px] font-normal leading-tight tracking-tight text-[var(--color-text-secondary,#8A8A8E)]"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            welcome to my
          </span>

          {/* "portfolio." with blinking cursor */}
          <div className="flex items-baseline justify-center mt-[-4px]">
            <h1
              className="text-[64px] md:text-[78px] font-medium italic text-[var(--color-text-primary,#1A1A1A)] tracking-tight"
              style={{ fontFamily: 'var(--font-fraunces)' }}
            >
              portfolio.
            </h1>
            {/* Blinking vertical cursor */}
            <span
              className="inline-block w-[2.5px] h-[58px] md:h-[68px] ml-1.5 align-middle bg-[var(--color-text-primary,#1A1A1A)] animate-pulse"
              style={{ animationDuration: '1s' }}
            />
          </div>

          {/* Small purple </> glyph */}
          <div
            className="mt-3 text-[22px] md:text-[24px] font-bold text-[var(--color-accent-purple,#6C5CE7)]"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            &lt;/&gt;
          </div>
        </div>

        {/* ============================================================ */}
        {/* TOP-LEFT: STICKY NOTE */}
        {/* ============================================================ */}
        <div className="absolute top-5 left-7 z-10">
          <StickyNote />
        </div>

        {/* ============================================================ */}
        {/* LEFT COLUMN: RESUME.PDF & ABOUT ME */}
        {/* ============================================================ */}
        {desktopItems.map((item) => {
          const isSelected = selectedItemId === item.id;
          const isFile = item.type === 'file';

          return (
            <div
              key={item.id}
              className="absolute z-10 transition-all duration-150"
              style={{
                left: `${item.position_x}%`,
                top: `${item.position_y}%`,
              }}
            >
              {isFile ? (
                <FileIcon
                  label={item.label}
                  isSelected={isSelected}
                  onSelect={() => setSelectedItemId(item.id)}
                  onDoubleClick={() => handleOpenDesktopItem(item)}
                />
              ) : (
                <FolderIcon
                  label={item.label}
                  isSelected={isSelected}
                  onSelect={() => setSelectedItemId(item.id)}
                  onDoubleClick={() => handleOpenDesktopItem(item)}
                />
              )}
            </div>
          );
        })}

        {/* ============================================================ */}
        {/* RIGHT COLUMN: 4 PROJECT FOLDERS STAGGERED */}
        {/* ============================================================ */}
        {activeProjects.map((project) => {
          const isSelected = selectedItemId === project.id;

          return (
            <div
              key={project.id}
              className="absolute z-10 transition-all duration-150"
              style={{
                left: `${project.position_x}%`,
                top: `${project.position_y}%`,
              }}
            >
              <FolderIcon
                label={project.title}
                isSelected={isSelected}
                onSelect={() => setSelectedItemId(project.id)}
                onDoubleClick={() => handleOpenProject(project)}
              />
            </div>
          );
        })}

        {/* ============================================================ */}
        {/* BOTTOM-RIGHT: TRASH ICON */}
        {/* ============================================================ */}
        <div 
          className="absolute bottom-16 right-10 z-10"
          onMouseEnter={() => trashOver && setTrashOver(false)}
        >
          <TrashIcon
            label="Don't Look"
            isOver={trashOver}
            onDoubleClick={() => openWindow('trash', 'Trash / Don\'t Look')}
          />
        </div>

        {/* ============================================================ */}
        {/* BOTTOM-CENTER: DOCK */}
        {/* ============================================================ */}
        <div className="absolute bottom-5 inset-x-0 flex justify-center z-20 pointer-events-none">
          <Dock />
        </div>

        {/* ============================================================ */}
        {/* DESKTOP WINDOW MANAGER (RENDERS OPEN MODALS/WINDOWS)          */}
        {/* ============================================================ */}
        <WindowManager />
      </main>
    </div>
  );
}
