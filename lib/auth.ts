// lib/auth.ts
import { supabase, isSupabaseConfigured } from './supabaseClient';

export async function signInWithEmail(email: string, password: string) {
  if (!isSupabaseConfigured) {
    // If Supabase credentials are not yet set up, provide a fallback demo credential check
    // so owner mode can be previewed/tested immediately
    if (email === 'owner@portfolio.com' && password === 'admin123') {
      return { data: { user: { email, id: 'demo-owner-id' } }, error: null };
    }
    return { data: null, error: new Error('Invalid credentials or Supabase not configured. (Demo: owner@portfolio.com / admin123)') };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}

export async function signOut() {
  if (!isSupabaseConfigured) {
    return { error: null };
  }
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getCurrentUser() {
  if (!isSupabaseConfigured) {
    return null;
  }
  const { data } = await supabase.auth.getUser();
  return data.user;
}
