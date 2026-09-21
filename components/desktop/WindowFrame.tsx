// components/desktop/WindowFrame.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDesktopStore } from '@/store/useDesktopStore';
import { WindowId } from '@/lib/types';

interface WindowFrameProps {
  id: WindowId;
  title: string;
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
  headerActions?: React.ReactNode;
  className?: string;
}

export default function WindowFrame({
  id,
  title,
  children,
  width = 720,
  height = 640,
  headerActions,
  className = '',
}: WindowFrameProps) {
  const { 
    windows, 
    activeWindowId, 
    closeWindow, 
    focusWindow, 
    minimizeWindow, 
    toggleMaximizeWindow 
  } = useDesktopStore();

  const win = windows.find((w) => w.id === id);
  if (!win || !win.isOpen || win.isMinimized) return null;

  const isActive = activeWindowId === id;
  const isMaximized = win.isMaximized;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        width: isMaximized ? '96vw' : width,
        height: isMaximized ? 'calc(100vh - 80px)' : height,
      }}
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      onMouseDown={() => focusWindow(id)}
      style={{
        zIndex: win.zIndex,
        maxWidth: isMaximized ? '98vw' : '92vw',
        maxHeight: isMaximized ? 'calc(100vh - 64px)' : '86vh',
      }}
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-white dark:bg-[#1E1E20] rounded-[14px] shadow-[0_22px_70px_rgba(0,0,0,0.35)] border border-black/10 dark:border-white/10 overflow-hidden ${
        isActive ? 'ring-1 ring-black/10 dark:ring-white/15' : 'opacity-95'
      } ${className}`}
    >
      {/* macOS Window Title Bar */}
      <div 
        className="h-10 px-4 flex items-center justify-between select-none bg-[#F6F6F6] dark:bg-[#2A2A2C] border-b border-black/5 dark:border-white/5 cursor-move"
      >
        {/* Left: Traffic light control dots */}
        <div className="flex items-center space-x-2">
          {/* Close: Red */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            aria-label="Close window"
            className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] hover:opacity-80 transition-opacity flex items-center justify-center group"
          >
            <svg 
              className="opacity-0 group-hover:opacity-100 transition-opacity" 
              width="6" 
              height="6" 
              viewBox="0 0 6 6" 
              fill="none" 
              stroke="#4D0000" 
              strokeWidth="1.2"
            >
              <path d="M1 1L5 5M5 1L1 5" />
            </svg>
          </button>

          {/* Minimize: Yellow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(id);
            }}
            aria-label="Minimize window"
            className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] hover:opacity-80 transition-opacity flex items-center justify-center group"
          >
            <svg 
              className="opacity-0 group-hover:opacity-100 transition-opacity" 
              width="6" 
              height="6" 
              viewBox="0 0 6 6" 
              fill="none" 
              stroke="#5E4000" 
              strokeWidth="1.2"
            >
              <path d="M1 3H5" />
            </svg>
          </button>

          {/* Maximize: Green */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMaximizeWindow(id);
            }}
            aria-label="Maximize window"
            className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] hover:opacity-80 transition-opacity flex items-center justify-center group"
          >
            <svg 
              className="opacity-0 group-hover:opacity-100 transition-opacity" 
              width="6" 
              height="6" 
              viewBox="0 0 6 6" 
              fill="none" 
              stroke="#004D00" 
              strokeWidth="1"
            >
              <path d="M1 1L5 5M5 1v4H1" />
            </svg>
          </button>
        </div>

        {/* Center: Title */}
        <div className="text-[13px] font-medium text-[#4D4D4D] dark:text-[#CCCCCC] tracking-tight truncate max-w-[50%]">
          {title}
        </div>

        {/* Right: Header Actions (e.g. Download, Edit toggle) */}
        <div className="flex items-center space-x-2">
          {headerActions}
        </div>
      </div>

      {/* Window Body */}
      <div className="flex-1 w-full overflow-hidden relative">
        {children}
      </div>
    </motion.div>
  );
}
