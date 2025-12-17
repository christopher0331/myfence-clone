"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Review {
  id?: string;
  author_name: string;
  rating: number;
  review_text: string;
  review_date: string;
  source: string;
}

export const useTrustindexReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const reviewsRef = useRef<HTMLDivElement | null>(null);

  // Load reviews from Supabase
  useEffect(() => {
    const loadReviews = async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('review_date', { ascending: false });
      
      if (error) {
        console.error('Error loading reviews:', error);
      } else if (data) {
        setReviews(data);
      }
    };

    loadReviews();
  }, []);

  // Load Trustindex reviews widget and sync to database
  useEffect(() => {
    if (!reviewsRef.current) return;
    
    const widgetDiv = document.createElement("div");
    widgetDiv.setAttribute("data-widget-id", "d273c79511b386516c861cd858a");
    widgetDiv.className = "trustindex-widget";
    reviewsRef.current.appendChild(widgetDiv);
    
    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?d273c79511b386516c861cd858a";
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      setTimeout(async () => {
        try {
          const scrapedReviews = scrapeReviewsFromWidget();
          
          if (scrapedReviews.length > 0) {
            await syncReviewsToDatabase(scrapedReviews, setReviews);
          }
        } catch (error) {
          console.error('Error scraping reviews:', error);
        }
      }, 4000);
    };
    
    reviewsRef.current.appendChild(script);
    
    return () => {
      script.remove();
      widgetDiv.remove();
      if (reviewsRef.current) reviewsRef.current.innerHTML = "";
    };
  }, []);

  return { reviews, reviewsRef };
};

const scrapeReviewsFromWidget = (): Review[] => {
  const scrapedReviews: Review[] = [];
  
  try {
    let reviewElements = document.querySelectorAll('[data-trustindex-review], .ti-review-item, .trustindex-review-item');
    
    if (reviewElements.length === 0) {
      reviewElements = document.querySelectorAll('div[itemtype*="Review"], [itemprop="review"]');
    }
    
    if (reviewElements.length === 0) {
      const widget = document.querySelector('[data-widget-id], .ti-widget, #ti-widget-content');
      if (widget) {
        reviewElements = widget.querySelectorAll('div[class*="review"], .ti-review, [class*="item"]');
      }
    }
    
    reviewElements.forEach((element) => {
      const authorElement = element.querySelector('[itemprop="author"], .ti-name, [class*="author"], [class*="name"]');
      const ratingElement = element.querySelector('[itemprop="ratingValue"], [class*="rating"], [class*="star"]');
      const textElement = element.querySelector('[itemprop="reviewBody"], .ti-review-text, [class*="review-text"], [class*="comment"]');
      const dateElement = element.querySelector('[itemprop="datePublished"], .ti-date, [class*="date"]');
      
      if (authorElement && textElement) {
        const author = authorElement.textContent?.trim() || '';
        const ratingText = ratingElement?.getAttribute('data-rating') || 
                          ratingElement?.getAttribute('content') ||
                          ratingElement?.textContent || '';
        const rating = parseInt(ratingText.replace(/[^0-9]/g, '')) || 5;
        const text = textElement.textContent?.trim() || '';
        const dateText = dateElement?.getAttribute('content') || 
                        dateElement?.textContent?.trim() || 
                        new Date().toISOString().split('T')[0];
        
        if (author && text && text.length > 10) {
          scrapedReviews.push({
            author_name: author,
            rating: Math.min(5, Math.max(1, rating)),
            review_text: text,
            review_date: dateText,
            source: 'trustindex'
          });
        }
      }
    });
  } catch (error) {
    console.error('Error scraping reviews:', error);
  }
  
  return scrapedReviews;
};

const syncReviewsToDatabase = async (
  scrapedReviews: Review[], 
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>
) => {
  try {
    const { error } = await supabase.functions.invoke('sync-reviews', {
      body: { reviews: scrapedReviews }
    });
    
    if (error) throw error;
    
    const { data: updatedReviews } = await supabase
      .from('reviews')
      .select('*')
      .order('review_date', { ascending: false });
    
    if (updatedReviews) {
      setReviews(updatedReviews);
    }
  } catch (error) {
    console.error('Error syncing reviews:', error);
  }
};
