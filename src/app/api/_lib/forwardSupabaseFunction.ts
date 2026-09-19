const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://tlsayvwmcqnmdoairbeb.supabase.co";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsc2F5dndtY3FubWRvYWlyYmViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzODM4NDIsImV4cCI6MjA3MDk1OTg0Mn0.mgcamhsEcu2xSFz5LOxCjcWWLuvt53iySmXpwp-ytG8";

export async function forwardSupabaseFunction(
  functionName: string,
  body: Record<string, unknown>,
): Promise<{ ok: boolean; status: number; error: string | null }> {
  const res = await fetch(`${SUPABASE_URL}/functions/v1/${functionName}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      apikey: SUPABASE_ANON_KEY,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return {
      ok: false,
      status: res.status,
      error: text.slice(0, 400) || `Supabase function failed (${res.status})`,
    };
  }

  return { ok: true, status: res.status, error: null };
}
