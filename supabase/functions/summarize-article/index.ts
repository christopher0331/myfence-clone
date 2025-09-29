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

    const prompt = `You are a helpful assistant for MyFence.com, a professional fencing company in Seattle. 
Summarize the following article about "${pageTitle}" in 4-5 concise bullet points. 
Focus on the main benefits, key features, and why customers should consider this option.
Be professional and highlight value propositions clearly.
Keep each bullet point to 1-2 sentences maximum.

Article content:
${pageContent}

Format your response as bullet points starting with •`;

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
            { role: 'system', content: 'You are a helpful assistant that creates concise, professional summaries for fence upgrade options.' },
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
            { role: 'system', content: 'You are a helpful assistant that creates concise, professional summaries for fence upgrade options.' },
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
