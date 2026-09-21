// components/desktop/FolderIcon.tsx
'use client';

import React from 'react';

interface FolderIconProps {
  label: string;
  isSelected?: boolean;
  onSelect?: () => void;
  onDoubleClick?: () => void;
  className?: string;
  size?: number;
}

export const FolderSvg: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg
    width={size}
    height={size * 0.85}
    viewBox="0 0 74 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`filter drop-shadow-sm transition-transform duration-200 group-hover:scale-105 ${className}`}
  >
    {/* Back flap */}
    <path
      d="M3 11C3 7.68629 5.68629 5 9 5H24.5C26.7865 5 28.9103 6.17056 30.134 8.08642L32.866 12.3736C34.0897 14.2894 36.2135 15.46 38.5 15.46H65C68.3137 15.46 71 18.1463 71 21.46V53C71 56.3137 68.3137 59 65 59H9C5.68629 59 3 56.3137 3 53V11Z"
      fill="var(--color-folder-base, #2E86E0)"
    />
    {/* Tab highlight gradient */}
    <path
      d="M4.5 11C4.5 8.51472 6.51472 6.5 9 6.5H24.5C26.3768 6.5 28.1218 7.46162 29.1274 9.03577L31.8594 13.323C33.2644 15.5224 35.6983 16.96 38.3108 16.96H65C67.4853 16.96 69.5 18.9747 69.5 21.46V23H4.5V11Z"
      fill="white"
      fillOpacity="0.25"
    />
    {/* Front folder body with subtle curve & shine */}
    <rect
      x="3"
      y="18"
      width="68"
      height="41"
      rx="6"
      fill="var(--color-folder-top, #4FA6F7)"
    />
    {/* Front subtle top bevel reflection */}
    <rect
      x="5"
      y="19"
      width="64"
      height="2"
      rx="1"
      fill="white"
      fillOpacity="0.4"
    />
    {/* Front subtle bottom shadow */}
    <path
      d="M3 53C3 56.3137 5.68629 59 9 59H65C68.3137 59 71 56.3137 71 53V54C71 57.3137 68.3137 60 65 60H9C5.68629 60 3 57.3137 3 54V53Z"
      fill="#1A65B8"
      fillOpacity="0.3"
    />
  </svg>
);

export default function FolderIcon({
  label,
  isSelected = false,
  onSelect,
  onDoubleClick,
  className = '',
  size = 64,
}: FolderIconProps) {
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
      style={{ width: '100px' }}
    >
      <FolderSvg size={size} />
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
