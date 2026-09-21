// lib/types.ts

export type DesktopItemType = 'file' | 'folder' | 'link';

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  tech_stack: string[];
  thumbnail_url: string | null;
  project_url: string | null;
  repo_url: string | null;
  position_x: number;
  position_y: number;
  icon_type: 'folder' | 'code' | 'file';
  sort_order: number;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
}

export interface DesktopItem {
  id: string;
  type: DesktopItemType;
  label: string;
  target: string;
  position_x: number;
  position_y: number;
  created_at?: string;
}

export interface StickyNoteData {
  id: string;
  content: string[];
  updated_at?: string;
}

export interface SiteMeta {
  id?: string;
  owner_name: string;
  contact_email: string;
  phone?: string;
  github_url?: string;
  linkedin_url?: string;
  leetcode_url?: string;
  website_url?: string;
  resume_url: string;
  updated_at?: string;
}

export interface AboutData {
  id?: string;
  tagline: string;
  bio: string;
  soft_skills: string[];
  currently: string;
  interests: string;
  photo_url: string;
  updated_at?: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  message: string;
  created_at?: string;
  read?: boolean;
}

export type WindowId = 
  | 'terminal'
  | 'code'
  | 'about'
  | 'projects'
  | 'skills'
  | 'achievements'
  | 'contact'
  | 'blog'
  | 'trash'
  | 'add-project'
  | 'edit-project'
  | 'login'
  | `project-${string}`;

export interface WindowState {
  id: WindowId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position?: { x: number; y: number };
  size?: { width: number; height: number };
  data?: any;
}
