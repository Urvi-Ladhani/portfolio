// components/desktop/TrashIcon.tsx
'use client';

import React from 'react';

interface TrashIconProps {
  label?: string;
  isOver?: boolean;
  onDoubleClick?: () => void;
  className?: string;
  size?: number;
}

export const TrashSvg: React.FC<{ size?: number; className?: string; isOver?: boolean }> = ({ 
  size = 48, 
  className = '',
  isOver = false,
}) => (
  <svg
    width={size}
    height={size * 1.15}
    viewBox="0 0 54 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`filter drop-shadow-sm transition-transform duration-200 group-hover:scale-105 ${
      isOver ? 'scale-110' : ''
    } ${className}`}
  >
    {/* Crumpled paper inside */}
    <ellipse cx="27" cy="16" rx="16" ry="7" fill="#E8ECEF" />
    <path
      d="M17 14L22 9L29 13L34 8L37 14L32 18L24 16L17 14Z"
      fill="#DCE1E5"
    />
    <path
      d="M20 12L25 10L30 14L26 15L20 12Z"
      fill="#CBD3D9"
    />

    {/* Top Rim Outer */}
    <ellipse
      cx="27"
      cy="16"
      rx="21"
      ry="7"
      fill="none"
      stroke="#AEB5BC"
      strokeWidth="2.5"
    />
    <ellipse
      cx="27"
      cy="16"
      rx="20"
      ry="6.5"
      fill="none"
      stroke="#D2D6DC"
      strokeWidth="1.2"
    />

    {/* Basket Mesh Body */}
    <path
      d="M8 17L14 55C14.5 57.5 19.5 59.5 27 59.5C34.5 59.5 39.5 57.5 40 55L46 17"
      fill="none"
      stroke="#B0B7BF"
      strokeWidth="2.2"
    />

    {/* Vertical Mesh Struts */}
    <path d="M14 19L18 56" stroke="#9EA7B0" strokeWidth="1.2" />
    <path d="M20 22L23 58" stroke="#9EA7B0" strokeWidth="1.2" />
    <path d="M27 23L27 59.5" stroke="#9EA7B0" strokeWidth="1.2" />
    <path d="M34 22L31 58" stroke="#9EA7B0" strokeWidth="1.2" />
    <path d="M40 19L36 56" stroke="#9EA7B0" strokeWidth="1.2" />

    {/* Horizontal Mesh Rings */}
    <path d="M10 27C14 30.5 21 32 27 32C33 32 40 30.5 44 27" stroke="#BAC1C8" strokeWidth="1.1" strokeDasharray="2 1.5" />
    <path d="M12 37C16 40 21 41.5 27 41.5C33 41.5 38 40 42 37" stroke="#BAC1C8" strokeWidth="1.1" strokeDasharray="2 1.5" />
    <path d="M13.5 47C17 49.5 22 50.5 27 50.5C32 50.5 37 49.5 40.5 47" stroke="#BAC1C8" strokeWidth="1.1" strokeDasharray="2 1.5" />

    {/* Bottom Rim */}
    <ellipse cx="27" cy="57" rx="13" ry="3" fill="none" stroke="#949DA6" strokeWidth="1.8" />
  </svg>
);

export default function TrashIcon({
  label = "Don't Look",
  isOver = false,
  onDoubleClick,
  className = '',
  size = 48,
}: TrashIconProps) {
  return (
    <div
      onDoubleClick={(e) => {
        e.stopPropagation();
        onDoubleClick?.();
      }}
      className={`group flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer select-none transition-all duration-150 ${
        isOver ? 'bg-red-500/10 ring-2 ring-red-400 scale-105' : 'hover:bg-black/[0.04]'
      } ${className}`}
      style={{ width: '96px' }}
    >
      <TrashSvg size={size} isOver={isOver} />
      <span
        className="mt-1.5 text-[12px] font-medium text-center leading-tight tracking-normal text-[var(--color-text-primary)] group-hover:text-black"
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        {label}
      </span>
    </div>
  );
}
