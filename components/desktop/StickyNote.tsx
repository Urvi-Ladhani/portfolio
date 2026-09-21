// components/desktop/StickyNote.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useDesktopStore } from '@/store/useDesktopStore';

interface StickyNoteProps {
  className?: string;
}

export default function StickyNote({ className = '' }: StickyNoteProps) {
  const { stickyNote, isOwner, updateStickyNoteContent } = useDesktopStore();
  const [items, setItems] = useState<string[]>(stickyNote.content || []);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (stickyNote?.content) {
      setItems(stickyNote.content);
      setEditText(stickyNote.content.join('\n'));
    }
  }, [stickyNote]);

  const handleStartEdit = () => {
    if (!isOwner) return;
    setIsEditing(true);
    setEditText(items.join('\n'));
  };

  const handleBlur = async () => {
    if (!isOwner) return;
    setIsEditing(false);
    const newItems = editText
      .split('\n')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    setItems(newItems);
    await updateStickyNoteContent(newItems);
  };

  return (
    <div
      onClick={handleStartEdit}
      className={`relative select-none transition-all duration-200 ${
        isOwner ? 'cursor-text hover:brightness-[0.98]' : 'cursor-default'
      } ${className}`}
      style={{
        width: '310px',
        minHeight: '230px',
        backgroundColor: 'var(--color-sticky-bg, #FCF1A0)',
        boxShadow: '0 10px 24px -4px rgba(245, 232, 138, 0.8), 0 4px 12px rgba(0, 0, 0, 0.06)',
        transform: 'rotate(-1deg)',
        borderRadius: '3px 3px 20px 3px',
      }}
    >
      {/* Subtle top adhesive tape/strip sheen */}
      <div 
        className="w-full h-3 rounded-t-sm opacity-20 bg-gradient-to-b from-black/5 to-transparent" 
      />

      <div className="p-5 pt-2">
        {/* Header */}
        <h2
          className="text-[20px] font-bold text-[#1A1A1A] mb-2 leading-tight"
          style={{ fontFamily: 'var(--font-caveat)' }}
        >
          To do:
        </h2>

        {isEditing && isOwner ? (
          <textarea
            ref={textareaRef}
            autoFocus
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleBlur}
            rows={8}
            className="w-full bg-transparent resize-none border-none outline-none text-[16px] text-[#222] leading-[1.35] tracking-wide"
            style={{ fontFamily: 'var(--font-caveat)' }}
          />
        ) : (
          <ul className="space-y-[3px]">
            {items.map((item, index) => (
              <li
                key={index}
                className="text-[16px] text-[#222] leading-[1.35] tracking-wide"
                style={{ fontFamily: 'var(--font-caveat)' }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Folded bottom-right dog-ear effect */}
      <div
        className="absolute bottom-0 right-0 w-5 h-5 pointer-events-none rounded-br-[3px]"
        style={{
          background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.06) 50%)',
        }}
      />
    </div>
  );
}
