// components/desktop/DockIcon.tsx
'use client';

import React from 'react';

interface DockIconProps {
  id: string;
  label: string;
  onClick: () => void;
  children: React.ReactNode;
  isDashed?: boolean;
}

export default function DockIcon({
  id,
  label,
  onClick,
  children,
  isDashed = false,
}: DockIconProps) {
  return (
    <button
      id={`dock-item-${id}`}
      onClick={onClick}
      className="group flex flex-col items-center justify-end focus:outline-none select-none transition-transform duration-200 hover:-translate-y-2 active:scale-95"
      style={{ width: '56px' }}
      title={label}
    >
      {/* Icon Container */}
      <div
        className={`w-12 h-12 rounded-[14px] flex items-center justify-center transition-all duration-200 shadow-sm group-hover:shadow-md ${
          isDashed
            ? 'border-2 border-dashed border-[#6C5CE7]/60 bg-purple-50/40 group-hover:border-[#6C5CE7] group-hover:bg-purple-50/70'
            : 'bg-white/90 group-hover:bg-white border border-white/80'
        }`}
        style={{
          boxShadow: isDashed 
            ? 'none' 
            : '0 4px 10px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
        }}
      >
        {children}
      </div>

      {/* Label underneath */}
      <span
        className="mt-1.5 text-[11px] font-medium text-[var(--color-text-primary)] text-center leading-tight tracking-tight transition-colors group-hover:text-black group-hover:font-semibold"
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        {label}
      </span>
    </button>
  );
}
