-- ==============================================================================
-- 02_about_me.sql
-- Creates the 'about' table for the redesigned About Me personal narrative
-- ==============================================================================

CREATE TABLE IF NOT EXISTS public.about (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tagline TEXT NOT NULL DEFAULT 'Software Engineer & Full-Stack Developer',
    bio TEXT NOT NULL DEFAULT 'Your personal bio goes here. Replace this text from the owner edit interface or Supabase.',
    soft_skills TEXT[] DEFAULT ARRAY['Problem Solving', 'Curiosity', 'Consistency', 'Teamwork'],
    currently TEXT DEFAULT 'Currently: Add your current focus here.',
    interests TEXT DEFAULT 'Add your interests and things you enjoy outside technology here.',
    photo_url TEXT DEFAULT 'https://api.dicebear.com/7.x/bottts/svg?seed=Urvi',
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.about ENABLE ROW LEVEL SECURITY;

-- 1. Anyone (public anonymous & authenticated) can view About info
CREATE POLICY "Public Read Access for About"
ON public.about FOR SELECT 
TO public 
USING (true);

-- 2. Authenticated users (owner) can update About info
CREATE POLICY "Authenticated Update for About"
ON public.about FOR UPDATE 
TO authenticated 
USING (true)
WITH CHECK (true);

-- 3. Authenticated users (owner) can insert About info
CREATE POLICY "Authenticated Insert for About"
ON public.about FOR INSERT 
TO authenticated 
WITH CHECK (true);

-- Seed initial default singleton row
INSERT INTO public.about (id, tagline, bio, soft_skills, currently, interests, photo_url)
VALUES (
    '00000000-0000-0000-0000-000000000001',
    'Software Engineer & Full-Stack Developer',
    'Your personal bio goes here. Replace this text from the owner edit interface or Supabase.\n\nI focus on building intuitive web applications, robust backend architectures, and high-performance user experiences with modern web technologies.',
    ARRAY['Problem Solving', 'Curiosity', 'Consistency', 'Teamwork', 'Continuous Learning'],
    'Currently: Add your current focus here.',
    'Add your interests and things you enjoy outside technology here.',
    'https://api.dicebear.com/7.x/bottts/svg?seed=Urvi'
)
ON CONFLICT (id) DO NOTHING;
