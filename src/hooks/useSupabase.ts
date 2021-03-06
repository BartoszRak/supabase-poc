import { createClient } from "@supabase/supabase-js"
import { useMemo } from "react"
import { useSupabaseConfig } from "./useSupabaseConfig"


export const useSupabase = () => {
    const { apiKey, apiUrl} = useSupabaseConfig()
    return useMemo(() => createClient(apiUrl, apiKey, {
        localStorage: window.localStorage,
        persistSession: true
    }), [apiUrl, apiKey])
}