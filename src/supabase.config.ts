export interface SupabaseConfig {
  apiUrl: string;
  apiKey: string;
}

export const supabaseConfig: SupabaseConfig = Object.freeze({
  apiUrl: process.env.REACT_APP_SUPABASE_API_URL || "",
  apiKey: process.env.REACT_APP_SUPABASE_API_KEY || "",
});
