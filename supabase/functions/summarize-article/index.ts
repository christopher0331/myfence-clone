import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const geminiApiKey = Deno.env.get('GOOGLE_GEMINI_API_KEY');
const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
const grokApiKey = Deno.env.get('GROK_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { pageTitle, pageContent } = await req.json();

    console.log('Generating summaries for:', pageTitle);

    const prompt = `You are an enthusiastic content summarizer for MyFence.com, a leading fencing company in Seattle.

Create a POSITIVE, SALES-FOCUSED summary of the article "${pageTitle}" using EXACTLY this format:

## Overview
[Write 1-2 enthusiastic sentences introducing the main value proposition]

## Key Benefits
• [Benefit 1 in 1 sentence - focus on value and positive outcomes]
• [Benefit 2 in 1 sentence - focus on value and positive outcomes]
• [Benefit 3 in 1 sentence - focus on value and positive outcomes]
• [Benefit 4 in 1 sentence - focus on value and positive outcomes]

## Why Choose This
• [Reason 1 in 1 sentence - emphasize advantages]
• [Reason 2 in 1 sentence - emphasize advantages]

## Bottom Line
[Write 1 compelling sentence about why this is an excellent choice]

---

CRITICAL RULES:
- ONLY include positive, value-driven content
- NEVER mention drawbacks, warnings, considerations, or anything that could cause buyer hesitation
- Focus on benefits, advantages, and reasons to buy
- Be enthusiastic and encouraging
- Use markdown headers (##) for sections
- Use bullet points (•) for lists
- Keep each bullet point to ONE sentence maximum
- Do not add extra sections or deviate from the format

Article content:
${pageContent}`;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function fetchJsonWithText(res: Response) {
      const text = await res.text();
      try {
        return { json: JSON.parse(text), text };
      } catch {
        return { json: null, text };
      }
    }

    async function fetchWithRetry(url: string, init: RequestInit, retries = 2) {
      let attempt = 0;
      while (true) {
        const res = await fetch(url, init);
        if (res.status !== 429 || attempt >= retries) return res;
        const retryAfter = res.headers.get("retry-after");
        const delayMs = retryAfter ? Number(retryAfter) * 1000 : 500 * Math.pow(2, attempt);
        await sleep(Number.isFinite(delayMs) ? delayMs : 500);
        attempt += 1;
      }
    }

    const errors: Record<string, string> = {};

    // Call providers in parallel, but skip if env key missing.
    const [geminiResult, chatgptResult, grokResult] = await Promise.allSettled([
      (async () => {
        if (!geminiApiKey) {
          errors.gemini = "Missing GOOGLE_GEMINI_API_KEY";
          return null;
        }
        const res = await fetchWithRetry(
          'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + geminiApiKey,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: { temperature: 0.7, maxOutputTokens: 500 },
            }),
          },
          2,
        );
        if (!res.ok) {
          const { text } = await fetchJsonWithText(res);
          errors.gemini = `Gemini API error: ${res.status} ${text?.slice(0, 200) ?? ""}`.trim();
          return null;
        }
        const data = await res.json();
        return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? null;
      })(),

      (async () => {
        if (!openaiApiKey) {
          errors.chatgpt = "Missing OPENAI_API_KEY";
          return null;
        }
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openaiApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              { role: 'system', content: 'You are an enthusiastic sales assistant that creates POSITIVE, BENEFIT-FOCUSED summaries. NEVER mention drawbacks or considerations.' },
              { role: 'user', content: prompt }
            ],
            max_tokens: 500,
          })
        });
        if (!res.ok) {
          const { text } = await fetchJsonWithText(res);
          errors.chatgpt = `OpenAI API error: ${res.status} ${text?.slice(0, 200) ?? ""}`.trim();
          return null;
        }
        const data = await res.json();
        return data?.choices?.[0]?.message?.content ?? null;
      })(),

      (async () => {
        if (!grokApiKey) {
          errors.grok = "Missing GROK_API_KEY";
          return null;
        }

        async function callGrok(model: string) {
          const res = await fetch('https://api.x.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${grokApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model,
              messages: [
                { role: 'system', content: 'You are an enthusiastic sales assistant that creates POSITIVE, BENEFIT-FOCUSED summaries. NEVER mention drawbacks or considerations.' },
                { role: 'user', content: prompt }
              ],
              max_tokens: 500,
              temperature: 0.7,
            })
          });
          return res;
        }

        // Try the configured model first, then a fallback model if we get 404.
        const primary = 'grok-2-latest';
        let res = await callGrok(primary);
        if (res.status === 404) {
          res = await callGrok('grok-2');
        }

        if (!res.ok) {
          const { text } = await fetchJsonWithText(res);
          errors.grok = `Grok API error: ${res.status} ${text?.slice(0, 200) ?? ""}`.trim();
          return null;
        }

        const data = await res.json();
        return data?.choices?.[0]?.message?.content ?? null;
      })(),
    ]);

    const summaries = {
      gemini: geminiResult.status === 'fulfilled' ? geminiResult.value : null,
      chatgpt: chatgptResult.status === 'fulfilled' ? chatgptResult.value : null,
      grok: grokResult.status === 'fulfilled' ? grokResult.value : null,
    };

    // Log which providers succeeded
    console.log('Summary generation results:', {
      gemini: !!summaries.gemini,
      chatgpt: !!summaries.chatgpt,
      grok: !!summaries.grok
    });

    return new Response(
      JSON.stringify({
        summaries,
        errors,
        ok: !!(summaries.gemini || summaries.chatgpt || summaries.grok),
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in summarize-article function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
