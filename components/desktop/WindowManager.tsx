// components/desktop/WindowManager.tsx
'use client';

import React from 'react';
import { useDesktopStore } from '@/store/useDesktopStore';
import WindowFrame from './WindowFrame';
import PDFViewerWindow from './PDFViewerWindow';
import AboutWindow from './AboutWindow';
import Skills from '@/sections/Skills';
import Achievements from '@/sections/Achievements';
import Contact from '@/sections/Contact';
import Projects from '@/sections/Projects';

export default function WindowManager() {
  const { windows, projects, isOwner, setOwner, closeWindow } = useDesktopStore();

  const [password, setPassword] = React.useState('');
  const [loginError, setLoginError] = React.useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin' || password === 'owner') {
      setOwner(true);
      closeWindow('login');
      setPassword('');
      setLoginError('');
    } else {
      setLoginError('Invalid owner passphrase.');
    }
  };

  return (
    <>
      {/* 1. Dedicated About Me Window */}
      {windows.some((w) => w.id === 'about' && w.isOpen) && (
        <AboutWindow />
      )}

      {/* 2. Dedicated Resume PDF Viewer Window */}
      {windows.some((w) => (w.id === 'project-resume' || w.id.toString().includes('resume')) && w.isOpen) && (
        <PDFViewerWindow />
      )}

      {/* 3. Skills Window */}
      {windows.some((w) => w.id === 'skills' && w.isOpen) && (
        <WindowFrame id="skills" title="Skills & Technologies" width={820} height={660}>
          <div className="w-full h-full overflow-y-auto p-4 md:p-6 bg-[#FAFAFA] dark:bg-[#1E1E20]">
            <Skills />
          </div>
        </WindowFrame>
      )}

      {/* 4. Achievements Window */}
      {windows.some((w) => w.id === 'achievements' && w.isOpen) && (
        <WindowFrame id="achievements" title="Achievements & Honors" width={820} height={660}>
          <div className="w-full h-full overflow-y-auto p-4 md:p-6 bg-[#FAFAFA] dark:bg-[#1E1E20]">
            <Achievements />
          </div>
        </WindowFrame>
      )}

      {/* 5. Projects Window */}
      {windows.some((w) => w.id === 'projects' && w.isOpen) && (
        <WindowFrame id="projects" title="Projects Gallery" width={860} height={700}>
          <div className="w-full h-full overflow-y-auto p-4 md:p-6 bg-[#FAFAFA] dark:bg-[#1E1E20]">
            <Projects initialProjects={projects.map((p) => ({
              name: p.slug,
              title: p.title,
              description: p.description || '',
              html_url: p.repo_url || `https://github.com/Urvi-Ladhani/${p.slug}`,
              homepage: p.project_url,
              topics: p.tech_stack || [],
              stars: 5,
              isFeatured: true,
              language: p.tech_stack?.[0] || 'TypeScript',
              mockupType: 'dashboard' as const,
            }))} />
          </div>
        </WindowFrame>
      )}

      {/* 6. Individual Project Window */}
      {windows
        .filter((w) => w.id.toString().startsWith('project-') && w.id !== 'project-resume' && w.isOpen)
        .map((w) => {
          const project = w.data || projects.find((p) => `project-${p.slug}` === w.id);
          return (
            <WindowFrame key={w.id} id={w.id} title={w.title || 'Project Details'} width={760} height={600}>
              <div className="w-full h-full overflow-y-auto p-6 bg-[#FAFAFA] dark:bg-[#1E1E20] space-y-4">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {project?.title || w.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project?.description || 'No description provided.'}
                </p>
                {project?.tech_stack && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech_stack.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-semibold bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {project?.project_url && (
                  <div className="pt-4">
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors"
                    >
                      <span>Visit Live Demo</span>
                      <span>→</span>
                    </a>
                  </div>
                )}
              </div>
            </WindowFrame>
          );
        })}

      {/* 7. Contact Window */}
      {windows.some((w) => w.id === 'contact' && w.isOpen) && (
        <WindowFrame id="contact" title="Get in Touch" width={800} height={660}>
          <div className="w-full h-full overflow-y-auto p-4 md:p-6 bg-[#FAFAFA] dark:bg-[#1E1E20]">
            <Contact />
          </div>
        </WindowFrame>
      )}

      {/* 8. Terminal Window */}
      {windows.some((w) => w.id === 'terminal' && w.isOpen) && (
        <WindowFrame id="terminal" title="Terminal — bash" width={680} height={460}>
          <div className="w-full h-full bg-[#1C1C1E] text-[#2ECC71] font-mono text-xs p-4 overflow-y-auto select-text space-y-2">
            <div>Last login: {new Date().toLocaleDateString()} on ttys001</div>
            <div>urvi-ladhani@macbook-pro ~ % whoami</div>
            <div className="text-white">Urvi Ladhani — Full-Stack Developer & Software Engineer</div>
            <div>urvi-ladhani@macbook-pro ~ % cat skills.txt</div>
            <div className="text-neutral-300">
              Next.js, React, TypeScript, Node.js, Python, PostgreSQL, Supabase, Tailwind CSS
            </div>
            <div>urvi-ladhani@macbook-pro ~ % cat contact.json</div>
            <div className="text-neutral-300">
              &#123; &quot;email&quot;: &quot;urviladhani23@gmail.com&quot;, &quot;phone&quot;: &quot;+91 9712025610&quot;, &quot;github&quot;: &quot;https://github.com/Urvi-Ladhani&quot; &#125;
            </div>
            <div className="flex items-center space-x-1.5 pt-2">
              <span>urvi-ladhani@macbook-pro ~ %</span>
              <span className="w-2 h-4 bg-[#2ECC71] animate-pulse" />
            </div>
          </div>
        </WindowFrame>
      )}

      {/* 9. Trash Window */}
      {windows.some((w) => w.id === 'trash' && w.isOpen) && (
        <WindowFrame id="trash" title="Trash / Don't Look" width={560} height={400}>
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#FAFAFA] dark:bg-[#1E1E20] select-none">
            <span className="text-4xl mb-3">🗑️</span>
            <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-200">
              Nothing to see here!
            </h3>
            <p className="text-xs text-neutral-500 mt-1 max-w-xs">
              This trash can is empty. All active projects and work are neatly arranged on the desktop.
            </p>
          </div>
        </WindowFrame>
      )}

      {/* 10. Owner Login Modal */}
      {windows.some((w) => w.id === 'login' && w.isOpen) && (
        <WindowFrame id="login" title={isOwner ? "Owner Session" : "Owner Authentication"} width={420} height={320}>
          <div className="w-full h-full flex flex-col justify-center p-6 bg-[#FAFAFA] dark:bg-[#1E1E20]">
            {isOwner ? (
              <div className="text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                    Logged in as Owner
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    You can edit the Sticky Note, About Me, and manage projects.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setOwner(false);
                    closeWindow('login');
                  }}
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-colors"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="text-center">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                    Owner Access
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Enter passphrase to enable editing on desktop and windows.
                  </p>
                </div>
                <div>
                  <input
                    type="password"
                    autoFocus
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter owner passphrase (admin)..."
                    className="w-full text-xs px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  {loginError && (
                    <p className="text-[11px] text-red-500 mt-1">{loginError}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold transition-colors"
                >
                  Unlock Owner Mode
                </button>
              </form>
            )}
          </div>
        </WindowFrame>
      )}
    </>
  );
}
