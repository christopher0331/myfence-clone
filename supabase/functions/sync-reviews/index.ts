import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Review {
  author_name: string;
  rating: number;
  review_text: string;
  review_date: string;
  source: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting review sync process...');

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get reviews from request body (scraped from Trustindex widget)
    const { reviews } = await req.json() as { reviews: Review[] };

    if (!reviews || !Array.isArray(reviews)) {
      throw new Error('Invalid reviews data format');
    }

    console.log(`Received ${reviews.length} reviews to sync`);

    // Insert or update reviews using upsert
    const { data, error } = await supabase
      .from('reviews')
      .upsert(
        reviews.map(review => ({
          author_name: review.author_name,
          rating: review.rating,
          review_text: review.review_text,
          review_date: review.review_date,
          source: review.source || 'trustindex'
        })),
        { 
          onConflict: 'author_name,review_date,source',
          ignoreDuplicates: false 
        }
      );

    if (error) {
      console.error('Database error:', error);
      throw error;
    }

    console.log('Reviews synced successfully:', data);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Synced ${reviews.length} reviews`,
        count: reviews.length 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error syncing reviews:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
