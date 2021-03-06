import { SupabaseConfig, supabaseConfig } from "../supabase.config"

export const useSupabaseConfig = (): SupabaseConfig => ({...supabaseConfig})