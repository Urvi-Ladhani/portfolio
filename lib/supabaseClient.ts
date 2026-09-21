// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';
import { Project, DesktopItem, StickyNoteData, SiteMeta, AboutData } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl.startsWith('https://') &&
  !supabaseUrl.includes('your-project')
);

// Fallback dummy client if credentials aren't configured yet to prevent runtime crashes
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://mock-project.supabase.co', 'mock-anon-key');

// Default initial data matching the reference image and SQL seed
export const DEFAULT_SITE_META: SiteMeta = {
  owner_name: "Urvi Ladhani",
  contact_email: "urviladhani23@gmail.com",
  phone: "+91 9712025610",
  github_url: "https://github.com/Urvi-Ladhani",
  linkedin_url: "https://linkedin.com/in/urvi-ladhani",
  leetcode_url: "https://leetcode.com/u/urvi_ladhani",
  website_url: "https://urvi-ladhani.vercel.app",
  resume_url: "/urvi_ladhani_resume.pdf",
};

export const DEFAULT_ABOUT: AboutData = {
  id: '00000000-0000-0000-0000-000000000001',
  tagline: "Software Engineer & Full-Stack Developer",
  bio: "Your personal bio goes here. Replace this text from the owner edit interface or Supabase.\n\nI focus on building intuitive web applications, robust backend architectures, and high-performance user experiences with modern web technologies.",
  soft_skills: [
    'Problem Solving',
    'Curiosity',
    'Consistency',
    'Teamwork',
    'Continuous Learning',
  ],
  currently: "Currently: Add your current focus here.",
  interests: "Add your interests and things you enjoy outside technology here.",
  photo_url: "https://api.dicebear.com/7.x/bottts/svg?seed=Urvi",
};

export const DEFAULT_STICKY_NOTE: StickyNoteData = {
  id: '00000000-0000-0000-0000-000000000001',
  content: [
    'Land my dream UX job',
    'Drink water',
    'Move my body',
    'Finish that dashboard reading my mind',
    'Build that SaaS project (finally)',
    'Help one developer',
    'Get messy and make peace',
    'Travel somewhere new every year',
  ],
};

export const DEFAULT_DESKTOP_ITEMS: DesktopItem[] = [
  {
    id: 'item-resume',
    type: 'file',
    label: 'Resume.pdf',
    target: '/urvi_ladhani_resume.pdf',
    position_x: 10.0,
    position_y: 50.0,
  },
  {
    id: 'item-about',
    type: 'folder',
    label: 'About Me',
    target: 'about',
    position_x: 20.0,
    position_y: 60.0,
  },
];

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'proj-simplifye',
    title: 'Project 02 (Simplifye)',
    slug: 'simplifye',
    description: 'A modern productivity platform for simplifying daily workflows, tracking goals, and streamlining day-to-day focus.',
    tech_stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    thumbnail_url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    project_url: 'https://simplifye.example.com',
    repo_url: 'https://github.com/example/simplifye',
    position_x: 88.0,
    position_y: 18.0,
    icon_type: 'folder',
    sort_order: 2,
    is_deleted: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'proj-abodemeets',
    title: 'Project 01 (AbodeMeets)',
    slug: 'abodemeets',
    description: 'Real-time collaborative workspace and meeting platform for remote product teams with virtual whiteboard rooms.',
    tech_stack: ['React', 'Node.js', 'WebRTC', 'PostgreSQL'],
    thumbnail_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    project_url: 'https://abodemeets.example.com',
    repo_url: 'https://github.com/example/abodemeets',
    position_x: 85.0,
    position_y: 31.0,
    icon_type: 'folder',
    sort_order: 1,
    is_deleted: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'proj-rantpress',
    title: 'Project 03 (Rantpress)',
    slug: 'rantpress',
    description: 'A micro-publishing social network for candid long-form discussions, community feedback, and thoughtful essays.',
    tech_stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
    thumbnail_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    project_url: 'https://rantpress.example.com',
    repo_url: 'https://github.com/example/rantpress',
    position_x: 88.0,
    position_y: 45.0,
    icon_type: 'folder',
    sort_order: 3,
    is_deleted: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'proj-amaana',
    title: 'Project 04 (Amaana)',
    slug: 'amaana',
    description: 'Fintech platform for ethical community savings and investment circles with transparent milestone tracking.',
    tech_stack: ['TypeScript', 'FastAPI', 'React', 'Tailwind'],
    thumbnail_url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    project_url: 'https://amaana.example.com',
    repo_url: 'https://github.com/example/amaana',
    position_x: 70.0,
    position_y: 67.0,
    icon_type: 'folder',
    sort_order: 4,
    is_deleted: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
