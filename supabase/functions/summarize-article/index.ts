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

    // Call all three AI providers in parallel
    const [geminiResult, chatgptResult, grokResult] = await Promise.allSettled([
      // Gemini (Google Direct API)
      fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=' + geminiApiKey, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          }
        })
      }).then(async (res) => {
        if (!res.ok) throw new Error(`Gemini API error: ${res.status}`);
        const data = await res.json();
        return data.candidates[0].content.parts[0].text;
      }).catch((error) => {
        console.error('Gemini error:', error);
        return null;
      }),

      // ChatGPT (OpenAI)
      fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-5-mini-2025-08-07',
          messages: [
            { role: 'system', content: 'You are an enthusiastic sales assistant that creates POSITIVE, BENEFIT-FOCUSED summaries. NEVER mention drawbacks or considerations.' },
            { role: 'user', content: prompt }
          ],
          max_completion_tokens: 500,
        })
      }).then(async (res) => {
        if (!res.ok) throw new Error(`OpenAI API error: ${res.status}`);
        const data = await res.json();
        return data.choices[0].message.content;
      }).catch((error) => {
        console.error('ChatGPT error:', error);
        return null;
      }),

      // Grok (xAI)
      fetch('https://api.x.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${grokApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'grok-2-latest',
          messages: [
            { role: 'system', content: 'You are an enthusiastic sales assistant that creates POSITIVE, BENEFIT-FOCUSED summaries. NEVER mention drawbacks or considerations.' },
            { role: 'user', content: prompt }
          ],
          max_tokens: 500,
          temperature: 0.7,
        })
      }).then(async (res) => {
        if (!res.ok) throw new Error(`Grok API error: ${res.status}`);
        const data = await res.json();
        return data.choices[0].message.content;
      }).catch((error) => {
        console.error('Grok error:', error);
        return null;
      })
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

    // At least one provider must succeed
    if (!summaries.gemini && !summaries.chatgpt && !summaries.grok) {
      return new Response(
        JSON.stringify({ error: 'All AI providers failed to generate summaries' }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    return new Response(
      JSON.stringify({ summaries }), 
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
