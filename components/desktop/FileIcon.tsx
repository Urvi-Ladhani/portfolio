// components/desktop/FileIcon.tsx
'use client';

import React from 'react';

interface FileIconProps {
  label: string;
  isSelected?: boolean;
  onSelect?: () => void;
  onDoubleClick?: () => void;
  className?: string;
  size?: number;
}

export const FileSvg: React.FC<{ size?: number; className?: string }> = ({ size = 52, className = '' }) => (
  <svg
    width={size}
    height={size * 1.25}
    viewBox="0 0 52 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`filter drop-shadow-sm transition-transform duration-200 group-hover:scale-105 ${className}`}
  >
    {/* Page Shadow */}
    <rect x="2" y="2" width="48" height="61" rx="4" fill="black" fillOpacity="0.06" />
    
    {/* Page base */}
    <path
      d="M4 6C4 3.79086 5.79086 2 8 2H34L48 16V59C48 61.2091 46.2091 63 44 63H8C5.79086 63 4 61.2091 4 59V6Z"
      fill="#F9F9FA"
      stroke="#D1D1D6"
      strokeWidth="1.2"
    />
    
    {/* Folded corner */}
    <path
      d="M34 2V13C34 14.6569 35.3431 16 37 16H48"
      fill="#E5E5EA"
      stroke="#C7C7CC"
      strokeWidth="1.2"
    />

    {/* Document lines */}
    <rect x="12" y="22" width="22" height="3" rx="1.5" fill="#D1D1D6" />
    <rect x="12" y="29" width="28" height="2.5" rx="1.25" fill="#E5E5EA" />
    <rect x="12" y="35" width="28" height="2.5" rx="1.25" fill="#E5E5EA" />
    <rect x="12" y="41" width="24" height="2.5" rx="1.25" fill="#E5E5EA" />
    <rect x="12" y="47" width="20" height="2.5" rx="1.25" fill="#E5E5EA" />

    {/* Subtle Red/Grey PDF badge */}
    <rect x="11" y="52" width="16" height="6" rx="1" fill="#E02424" fillOpacity="0.1" />
    <text x="13" y="56.5" fontSize="4.5" fontWeight="bold" fill="#E02424" fontFamily="sans-serif">
      PDF
    </text>
  </svg>
);

export default function FileIcon({
  label,
  isSelected = false,
  onSelect,
  onDoubleClick,
  className = '',
  size = 50,
}: FileIconProps) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onSelect?.();
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        onDoubleClick?.();
      }}
      className={`group flex flex-col items-center justify-center p-1.5 rounded-lg cursor-pointer select-none transition-all duration-150 ${
        isSelected
          ? 'bg-[var(--color-selection-blue)] ring-1 ring-[#2E86E0]/50'
          : 'hover:bg-black/[0.04]'
      } ${className}`}
      style={{ width: '90px' }}
    >
      <FileSvg size={size} />
      <span
        className={`mt-1.5 text-[12px] font-medium text-center leading-tight tracking-normal line-clamp-2 px-1 rounded transition-colors ${
          isSelected
            ? 'bg-[#2E86E0] text-white'
            : 'text-[var(--color-text-primary)] group-hover:text-black'
        }`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        {label}
      </span>
    </div>
  );
}
