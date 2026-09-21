// app/page.tsx
import React from 'react';
import Desktop from '@/components/desktop/Desktop';

export const metadata = {
  title: "Ishika_Awesome's Portfolio",
  description: "Interactive macOS desktop portfolio experience.",
};

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen">
      <Desktop />
    </div>
  );
}
