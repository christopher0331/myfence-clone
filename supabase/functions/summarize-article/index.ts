import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

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

    if (!openAIApiKey) {
      console.error('OPENAI_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'API key not configured' }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Generating summary for:', pageTitle);

    const prompt = `You are a helpful assistant for MyFence.com, a professional fencing company in Seattle. 
Summarize the following article about "${pageTitle}" in 4-5 concise bullet points. 
Focus on the main benefits, key features, and why customers should consider this option.
Be professional and highlight value propositions clearly.
Keep each bullet point to 1-2 sentences maximum.

Article content:
${pageContent}

Format your response as bullet points starting with •`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-5-mini-2025-08-07',
        messages: [
          { role: 'system', content: 'You are a helpful assistant that creates concise, professional summaries for fence upgrade options.' },
          { role: 'user', content: prompt }
        ],
        max_completion_tokens: 300,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to generate summary' }), 
        { 
          status: response.status, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const data = await response.json();
    const summary = data.choices[0].message.content;

    console.log('Summary generated successfully');

    return new Response(
      JSON.stringify({ summary }), 
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in summarize-article function:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Unknown error occurred' }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
