// store/useDesktopStore.ts
import { create } from 'zustand';
import { 
  Project, 
  DesktopItem, 
  StickyNoteData, 
  SiteMeta, 
  AboutData,
  WindowState, 
  WindowId 
} from '@/lib/types';
import { 
  DEFAULT_PROJECTS, 
  DEFAULT_DESKTOP_ITEMS, 
  DEFAULT_STICKY_NOTE, 
  DEFAULT_SITE_META, 
  DEFAULT_ABOUT,
  supabase, 
  isSupabaseConfigured 
} from '@/lib/supabaseClient';

interface DesktopStore {
  isOwner: boolean;
  setOwner: (isOwner: boolean) => void;
  
  // Data
  projects: Project[];
  desktopItems: DesktopItem[];
  stickyNote: StickyNoteData;
  siteMeta: SiteMeta;
  aboutData: AboutData;
  
  // Window Management
  windows: WindowState[];
  activeWindowId: WindowId | null;
  highestZIndex: number;
  
  // Selection
  selectedItemId: string | null;
  setSelectedItemId: (id: string | null) => void;

  // Actions
  setProjects: (projects: Project[]) => void;
  setDesktopItems: (items: DesktopItem[]) => void;
  setStickyNote: (note: StickyNoteData) => void;
  setSiteMeta: (meta: SiteMeta) => void;
  setAboutData: (data: AboutData) => void;
  updateAboutData: (data: Partial<AboutData>) => Promise<void>;

  openWindow: (id: WindowId, title: string, data?: any) => void;
  closeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  toggleMaximizeWindow: (id: WindowId) => void;
  updateWindowPosition: (id: WindowId, position: { x: number; y: number }) => void;

  updateProjectPosition: (id: string, x: number, y: number) => void;
  updateDesktopItemPosition: (id: string, x: number, y: number) => void;
  softDeleteProject: (id: string) => Promise<void>;
  restoreProject: (id: string) => Promise<void>;
  deleteProjectForever: (id: string) => Promise<void>;
  addProject: (project: Project) => Promise<void>;
  updateProject: (project: Project) => Promise<void>;
  updateStickyNoteContent: (content: string[]) => Promise<void>;
}

export const useDesktopStore = create<DesktopStore>((set, get) => ({
  isOwner: false,
  setOwner: (isOwner) => set({ isOwner }),

  projects: DEFAULT_PROJECTS,
  desktopItems: DEFAULT_DESKTOP_ITEMS,
  stickyNote: DEFAULT_STICKY_NOTE,
  siteMeta: DEFAULT_SITE_META,
  aboutData: DEFAULT_ABOUT,

  windows: [],
  activeWindowId: null,
  highestZIndex: 10,
  selectedItemId: null,

  setSelectedItemId: (id) => set({ selectedItemId: id }),

  setProjects: (projects) => set({ projects }),
  setDesktopItems: (desktopItems) => set({ desktopItems }),
  setStickyNote: (stickyNote) => set({ stickyNote }),
  setSiteMeta: (siteMeta) => set({ siteMeta }),
  setAboutData: (aboutData) => set({ aboutData }),

  openWindow: (id, title, data) => {
    const { windows, highestZIndex } = get();
    const existing = windows.find(w => w.id === id);
    const newZ = highestZIndex + 1;

    if (existing) {
      set({
        windows: windows.map(w => 
          w.id === id ? { ...w, isOpen: true, isMinimized: false, zIndex: newZ, data: data ?? w.data } : w
        ),
        activeWindowId: id,
        highestZIndex: newZ,
      });
    } else {
      const newWindow: WindowState = {
        id,
        title,
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
        zIndex: newZ,
        data,
      };
      set({
        windows: [...windows, newWindow],
        activeWindowId: id,
        highestZIndex: newZ,
      });
    }
  },

  closeWindow: (id) => {
    set(state => ({
      windows: state.windows.filter(w => w.id !== id),
      activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    }));
  },

  focusWindow: (id) => {
    const { windows, highestZIndex, activeWindowId } = get();
    if (activeWindowId === id) return;
    const newZ = highestZIndex + 1;
    set({
      windows: windows.map(w => w.id === id ? { ...w, zIndex: newZ, isMinimized: false } : w),
      activeWindowId: id,
      highestZIndex: newZ,
    });
  },

  minimizeWindow: (id) => {
    set(state => ({
      windows: state.windows.map(w => w.id === id ? { ...w, isMinimized: true } : w),
      activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    }));
  },

  toggleMaximizeWindow: (id) => {
    set(state => ({
      windows: state.windows.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w),
    }));
  },

  updateWindowPosition: (id, position) => {
    set(state => ({
      windows: state.windows.map(w => w.id === id ? { ...w, position } : w),
    }));
  },

  updateProjectPosition: async (id, x, y) => {
    // Optimistic update
    set(state => ({
      projects: state.projects.map(p => p.id === id ? { ...p, position_x: x, position_y: y } : p)
    }));

    if (isSupabaseConfigured) {
      await supabase
        .from('projects')
        .update({ position_x: x, position_y: y, updated_at: new Date().toISOString() })
        .eq('id', id);
    }
  },

  updateDesktopItemPosition: async (id, x, y) => {
    set(state => ({
      desktopItems: state.desktopItems.map(item => item.id === id ? { ...item, position_x: x, position_y: y } : item)
    }));

    if (isSupabaseConfigured) {
      await supabase
        .from('desktop_items')
        .update({ position_x: x, position_y: y })
        .eq('id', id);
    }
  },

  softDeleteProject: async (id) => {
    // Optimistic delete
    set(state => ({
      projects: state.projects.map(p => p.id === id ? { ...p, is_deleted: true } : p)
    }));

    if (isSupabaseConfigured) {
      await supabase
        .from('projects')
        .update({ is_deleted: true, updated_at: new Date().toISOString() })
        .eq('id', id);
    }
  },

  restoreProject: async (id) => {
    set(state => ({
      projects: state.projects.map(p => p.id === id ? { ...p, is_deleted: false } : p)
    }));

    if (isSupabaseConfigured) {
      await supabase
        .from('projects')
        .update({ is_deleted: false, updated_at: new Date().toISOString() })
        .eq('id', id);
    }
  },

  deleteProjectForever: async (id) => {
    set(state => ({
      projects: state.projects.filter(p => p.id !== id)
    }));

    if (isSupabaseConfigured) {
      await supabase
        .from('projects')
        .delete()
        .eq('id', id);
    }
  },

  addProject: async (project) => {
    set(state => ({
      projects: [project, ...state.projects]
    }));

    if (isSupabaseConfigured) {
      await supabase.from('projects').insert([project]);
    }
  },

  updateProject: async (project) => {
    set(state => ({
      projects: state.projects.map(p => p.id === project.id ? project : p)
    }));

    if (isSupabaseConfigured) {
      await supabase.from('projects').update(project).eq('id', project.id);
    }
  },

  updateStickyNoteContent: async (content) => {
    const { stickyNote } = get();
    const updated = { ...stickyNote, content, updated_at: new Date().toISOString() };
    set({ stickyNote: updated });

    if (isSupabaseConfigured) {
      await supabase
        .from('sticky_note')
        .upsert(updated);
    }
  },

  updateAboutData: async (data: Partial<AboutData>) => {
    const { aboutData } = get();
    const updated = { ...aboutData, ...data, updated_at: new Date().toISOString() };
    set({ aboutData: updated });

    if (isSupabaseConfigured) {
      await supabase
        .from('about')
        .upsert(updated);
    }
  },
}));
