# Reviews Component - Complete Implementation Guide

This guide contains everything you need to implement the reviews component in another application.

## 1. Database Setup (Supabase)

First, create the reviews table in your Supabase database:

```sql
-- Create reviews table
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  author_name TEXT NOT NULL,
  rating INTEGER NOT NULL,
  review_text TEXT NOT NULL,
  review_date DATE NOT NULL,
  source TEXT NOT NULL DEFAULT 'trustindex',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Anyone can view reviews" 
ON public.reviews 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can insert reviews" 
ON public.reviews 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated users can update reviews" 
ON public.reviews 
FOR UPDATE 
USING (true);

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public';

-- Add trigger to auto-update updated_at
CREATE TRIGGER update_reviews_updated_at
BEFORE UPDATE ON public.reviews
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();
```

## 2. Edge Function (Supabase Functions)

Create `supabase/functions/sync-reviews/index.ts`:

```typescript
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
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { reviews } = await req.json() as { reviews: Review[] };

    if (!reviews || !Array.isArray(reviews)) {
      throw new Error('Invalid reviews data format');
    }

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

    if (error) throw error;

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
```

## 3. Supabase Client Setup

Create a Supabase client file (e.g., `lib/supabase.ts`):

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
```

## 4. TypeScript Types

Create a types file (e.g., `types/reviews.ts`):

```typescript
export interface Review {
  id: string;
  author_name: string;
  rating: number;
  review_text: string;
  review_date: string;
  source: string;
  created_at: string;
  updated_at: string;
}
```

## 5. Reviews Component

Create `components/ReviewsSection.tsx`:

```tsx
import { useState, useEffect, useRef } from 'react';
import { supabase, callEdgeFunction } from '@/lib/supabase';
import type { Review } from '@/types/reviews';

export const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const reviewsRef = useRef<HTMLDivElement>(null);

  // Load reviews from database
  useEffect(() => {
    const loadReviews = async () => {
      try {
        const { data, error } = await supabase
          .from('reviews')
          .select('*')
          .order('review_date', { ascending: false })
          .limit(10);

        if (error) {
          console.error('Error loading reviews:', error);
          return;
        }

        if (data) {
          setReviews(data);
        }
      } catch (error) {
        console.error('Error loading reviews:', error);
      }
    };

    loadReviews();
  }, []);

  // Load and initialize Trustindex widget
  useEffect(() => {
    const loadTrustindexWidget = () => {
      // Remove existing script if present
      const existingScript = document.querySelector('script[src*="trustindex.io"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Clear the container
      if (reviewsRef.current) {
        reviewsRef.current.innerHTML = '';
      }

      // Create and append new script
      const script = document.createElement('script');
      script.src = 'https://cdn.trustindex.io/loader.js?d3ba6efde8965a3ba5a94ef13';
      script.async = true;
      script.defer = true;

      script.onload = () => {
        setTimeout(async () => {
          try {
            const scrapedReviews = scrapeReviewsFromWidget();
            if (scrapedReviews.length > 0) {
              await syncReviewsToDatabase(scrapedReviews);
            }
          } catch (error) {
            console.error('Error scraping/syncing reviews:', error);
          }
        }, 3000);
      };

      if (reviewsRef.current) {
        reviewsRef.current.appendChild(script);
      }
    };

    loadTrustindexWidget();

    return () => {
      const script = document.querySelector('script[src*="trustindex.io"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  // Scrape reviews from Trustindex widget
  const scrapeReviewsFromWidget = (): Review[] => {
    try {
      const reviewElements = document.querySelectorAll('.ti-widget .ti-review-item');
      const scrapedReviews: Review[] = [];

      reviewElements.forEach((element) => {
        try {
          const authorElement = element.querySelector('.ti-name');
          const ratingElement = element.querySelector('.ti-rating');
          const textElement = element.querySelector('.ti-review-text');
          const dateElement = element.querySelector('.ti-date');

          if (authorElement && ratingElement && textElement) {
            const author_name = authorElement.textContent?.trim() || '';
            const ratingMatch = ratingElement.getAttribute('data-rating') || 
                              ratingElement.textContent?.match(/(\d+)/)?.[1];
            const rating = ratingMatch ? parseInt(ratingMatch, 10) : 5;
            const review_text = textElement.textContent?.trim() || '';
            const dateText = dateElement?.textContent?.trim() || new Date().toISOString().split('T')[0];
            const review_date = new Date(dateText).toISOString().split('T')[0];

            if (author_name && rating && review_text) {
              scrapedReviews.push({
                id: crypto.randomUUID(),
                author_name,
                rating,
                review_text,
                review_date,
                source: 'trustindex',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
              });
            }
          }
        } catch (error) {
          console.error('Error parsing review element:', error);
        }
      });

      return scrapedReviews;
    } catch (error) {
      console.error('Error scraping reviews:', error);
      return [];
    }
  };

  // Sync reviews to database
  const syncReviewsToDatabase = async (scrapedReviews: Review[]) => {
    try {
      await callEdgeFunction('sync-reviews', { reviews: scrapedReviews });
      
      // Reload reviews after sync
      const { data } = await supabase
        .from('reviews')
        .select('*')
        .order('review_date', { ascending: false })
        .limit(10);

      if (data) {
        setReviews(data);
      }
    } catch (error) {
      console.error('Error syncing reviews to database:', error);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground">
            Real reviews from real customers
          </p>
        </div>
        
        <div ref={reviewsRef} className="max-w-6xl mx-auto">
          {/* Trustindex widget will be injected here */}
        </div>
      </div>
    </section>
  );
};
```

## 6. Usage in Your App

Simply import and use the component:

```tsx
import { ReviewsSection } from '@/components/ReviewsSection';

function App() {
  return (
    <div>
      {/* Your other content */}
      <ReviewsSection />
    </div>
  );
}
```

## 7. Environment Variables

Add to your `.env` file:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 8. Dependencies

Install required packages:

```bash
npm install @supabase/supabase-js
```

## 9. Trustindex Widget ID

**IMPORTANT**: Replace the Trustindex widget ID in the component:

```typescript
script.src = 'https://cdn.trustindex.io/loader.js?YOUR_TRUSTINDEX_ID';
```

You'll need to sign up at [Trustindex.io](https://www.trustindex.io/) and get your own widget ID.

## How It Works

1. **Widget Display**: The Trustindex widget loads and displays reviews visually on your page
2. **Scraping**: After the widget loads, the component scrapes the reviews from the DOM
3. **Syncing**: Scraped reviews are sent to your Supabase edge function
4. **Storage**: The edge function stores/updates reviews in your database
5. **Structured Data**: Database reviews can be used for SEO structured data and aggregate ratings

This gives you both a beautiful visual display (via Trustindex) and programmatic access to review data (via Supabase).
