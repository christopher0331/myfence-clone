import { createClient } from '@supabase/supabase-js'

// Next.js environment variables (client-side variables need NEXT_PUBLIC_ prefix)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://vcrkvdtlnhihglgahfcr.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjcmt2ZHRsbmhpaGdsZ2FoZmNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMjM2MTksImV4cCI6MjA0OTY5OTYxOX0.rNFVXl5gYvjjWz3MO2WXPzr_fFf7jYtWAqJKCYI2EwI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper function to call edge functions
export const callEdgeFunction = async (functionName: string, data: any) => {
  const { data: result, error } = await supabase.functions.invoke(functionName, {
    body: JSON.stringify(data),
  })

  if (error) {
    console.error(`Edge function ${functionName} error:`, error)
    throw error
  }

  return result
}