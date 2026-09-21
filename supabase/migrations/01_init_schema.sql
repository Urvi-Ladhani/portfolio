-- ==============================================================================
-- 01_init_schema.sql
-- macOS Desktop Portfolio Initial Schema with Row Level Security (RLS) & Seed Data
-- ==============================================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROJECTS TABLE
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    tech_stack TEXT[] DEFAULT '{}',
    thumbnail_url TEXT,
    project_url TEXT,
    repo_url TEXT,
    position_x FLOAT NOT NULL DEFAULT 85.0,
    position_y FLOAT NOT NULL DEFAULT 20.0,
    icon_type TEXT DEFAULT 'folder',
    sort_order INT DEFAULT 0,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. DESKTOP ITEMS TABLE (About Me, Resume.pdf, etc.)
CREATE TABLE IF NOT EXISTS public.desktop_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type TEXT NOT NULL CHECK (type IN ('file', 'folder', 'link')),
    label TEXT NOT NULL,
    target TEXT NOT NULL,
    position_x FLOAT NOT NULL DEFAULT 10.0,
    position_y FLOAT NOT NULL DEFAULT 50.0,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. STICKY NOTE TABLE (Singleton row)
CREATE TABLE IF NOT EXISTS public.sticky_note (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content TEXT[] NOT NULL DEFAULT '{}',
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 4. SITE META TABLE (Singleton row)
CREATE TABLE IF NOT EXISTS public.site_meta (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_name TEXT NOT NULL DEFAULT 'Ishika_Awesome',
    contact_email TEXT DEFAULT 'hello@example.com',
    resume_url TEXT DEFAULT '/resume.pdf',
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 5. MESSAGES TABLE
CREATE TABLE IF NOT EXISTS public.messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    read BOOLEAN DEFAULT false
);

-- ==============================================================================
-- ENABLE ROW LEVEL SECURITY (RLS) ON ALL TABLES
-- ==============================================================================
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.desktop_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sticky_note ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_meta ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- ==============================================================================
-- RLS POLICIES
-- Rule: Public SELECT everywhere except messages.
-- Authenticated-only INSERT/UPDATE/DELETE everywhere.
-- Messages: Public INSERT, Authenticated-only SELECT/UPDATE/DELETE.
-- ==============================================================================

-- Projects Policies
CREATE POLICY "Public projects are viewable by everyone" 
ON public.projects FOR SELECT 
USING (is_deleted = false OR auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert projects" 
ON public.projects FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects" 
ON public.projects FOR UPDATE 
TO authenticated 
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects" 
ON public.projects FOR DELETE 
TO authenticated 
USING (true);

-- Desktop Items Policies
CREATE POLICY "Public desktop items are viewable by everyone" 
ON public.desktop_items FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can insert desktop items" 
ON public.desktop_items FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Authenticated users can update desktop items" 
ON public.desktop_items FOR UPDATE 
TO authenticated 
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete desktop items" 
ON public.desktop_items FOR DELETE 
TO authenticated 
USING (true);

-- Sticky Note Policies
CREATE POLICY "Public sticky note is viewable by everyone" 
ON public.sticky_note FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can insert sticky note" 
ON public.sticky_note FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Authenticated users can update sticky note" 
ON public.sticky_note FOR UPDATE 
TO authenticated 
USING (true)
WITH CHECK (true);

-- Site Meta Policies
CREATE POLICY "Public site meta is viewable by everyone" 
ON public.site_meta FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can update site meta" 
ON public.site_meta FOR UPDATE 
TO authenticated 
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can insert site meta" 
ON public.site_meta FOR INSERT 
TO authenticated 
WITH CHECK (true);

-- Messages Policies
CREATE POLICY "Anyone can submit a contact message" 
ON public.messages FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

CREATE POLICY "Only authenticated users can view messages" 
ON public.messages FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Only authenticated users can update messages" 
ON public.messages FOR UPDATE 
TO authenticated 
USING (true)
WITH CHECK (true);

CREATE POLICY "Only authenticated users can delete messages" 
ON public.messages FOR DELETE 
TO authenticated 
USING (true);

-- ==============================================================================
-- STORAGE BUCKET CONFIGURATION (for project-thumbnails)
-- ==============================================================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('project-thumbnails', 'project-thumbnails', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public Access to Project Thumbnails"
ON storage.objects FOR SELECT
USING (bucket_id = 'project-thumbnails');

CREATE POLICY "Authenticated Upload to Project Thumbnails"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'project-thumbnails');

CREATE POLICY "Authenticated Update to Project Thumbnails"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'project-thumbnails');

CREATE POLICY "Authenticated Delete to Project Thumbnails"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'project-thumbnails');

-- ==============================================================================
-- INITIAL SEED DATA (matches reference mockup exactly)
-- ==============================================================================

-- Seed Desktop Items
INSERT INTO public.desktop_items (label, type, target, position_x, position_y)
VALUES 
    ('Resume.pdf', 'file', '/resume.pdf', 10.0, 50.0),
    ('About Me', 'folder', 'about', 20.0, 60.0)
ON CONFLICT DO NOTHING;

-- Seed Projects (staggered on the right matching the design)
INSERT INTO public.projects (title, slug, description, tech_stack, position_x, position_y, sort_order)
VALUES
    (
        'Project 02 (Simplifye)', 
        'simplifye', 
        'A modern productivity platform for simplifying daily workflows and tracking goals.', 
        ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'], 
        88.0, 
        18.0, 
        2
    ),
    (
        'Project 01 (AbodeMeets)', 
        'abodemeets', 
        'Real-time collaborative workspace and meeting platform for remote product teams.', 
        ARRAY['React', 'Node.js', 'WebRTC', 'PostgreSQL'], 
        85.0, 
        32.0, 
        1
    ),
    (
        'Project 03 (Rantpress)', 
        'rantpress', 
        'A micro-publishing social network for candid long-form discussions and thoughtful essays.', 
        ARRAY['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'], 
        88.0, 
        46.0, 
        3
    ),
    (
        'Project 04 (Amaana)', 
        'amaana', 
        'Fintech platform for ethical community savings and investment circles with transparent tracking.', 
        ARRAY['TypeScript', 'FastAPI', 'React', 'Tailwind'], 
        70.0, 
        67.0, 
        4
    )
ON CONFLICT DO NOTHING;

-- Seed Sticky Note
INSERT INTO public.sticky_note (id, content)
VALUES (
    '00000000-0000-0000-0000-000000000001',
    ARRAY[
        'Land my dream UX job',
        'Drink water',
        'Move my body',
        'Finish that dashboard reading my mind',
        'Build that SaaS project (finally)',
        'Help one developer',
        'Get messy and make peace',
        'Travel somewhere new every year'
    ]
)
ON CONFLICT (id) DO NOTHING;

-- Seed Site Meta
INSERT INTO public.site_meta (id, owner_name, contact_email, resume_url)
VALUES (
    '00000000-0000-0000-0000-000000000001',
    'Ishika_Awesome',
    'hello@example.com',
    '/resume.pdf'
)
ON CONFLICT (id) DO NOTHING;
