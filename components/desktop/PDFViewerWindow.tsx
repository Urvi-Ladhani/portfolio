// components/desktop/PDFViewerWindow.tsx
'use client';

import React from 'react';
import WindowFrame from './WindowFrame';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { useDesktopStore } from '@/store/useDesktopStore';

interface PDFViewerWindowProps {
  id?: string;
  pdfUrl?: string;
  title?: string;
}

export default function PDFViewerWindow({
  id = 'project-resume',
  pdfUrl = '/urvi_ladhani_resume.pdf',
  title = 'Resume.pdf',
}: PDFViewerWindowProps) {
  const { siteMeta } = useDesktopStore();
  const fileUrl = siteMeta.resume_url || pdfUrl;

  return (
    <WindowFrame
      id={id as any}
      title={title}
      width={800}
      height={720}
      headerActions={
        <div className="flex items-center space-x-2">
          {/* Download Button */}
          <a
            href={fileUrl}
            download="urvi_ladhani_resume.pdf"
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-[#2E86E0] hover:bg-[#2573c2] text-white text-[12px] font-medium transition-colors shadow-sm cursor-pointer"
            title="Download PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </a>

          {/* Open in new tab */}
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded hover:bg-black/5 dark:hover:white/5 text-neutral-600 dark:text-neutral-300 transition-colors"
            title="Open in new tab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      }
    >
      <div className="w-full h-full flex flex-col bg-[#525659]">
        {/* PDF Viewer using iframe */}
        <iframe
          src={`${fileUrl}#toolbar=1&navpanes=0`}
          className="w-full h-full border-0 bg-white"
          title="Resume PDF Viewer"
        />

        {/* Fallback bar if browser restricts inline PDF display */}
        <div className="py-2 px-4 bg-[#323639] text-neutral-300 text-xs flex items-center justify-between border-t border-neutral-700 select-none">
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Urvi Ladhani — Resume</span>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href={fileUrl}
              download="urvi_ladhani_resume.pdf"
              className="text-blue-400 hover:underline font-medium"
            >
              Download PDF directly
            </a>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}
