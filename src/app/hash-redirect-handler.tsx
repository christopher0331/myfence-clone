"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Client-side handler to redirect hash-based URLs (#/path) to clean Next.js routes
 * This fixes issues where old React Router hash URLs are being used
 */
export function HashRedirectHandler() {
  const router = useRouter();

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    
    // If we have a hash-based route (#/path), redirect to clean path
    if (hash && hash.startsWith("#/")) {
      const cleanPath = hash.slice(1); // Remove the #
      
      // Only redirect if it's a valid path (starts with /)
      if (cleanPath.startsWith("/")) {
        // Use replace to avoid adding to history
        window.history.replaceState(null, "", cleanPath);
        router.replace(cleanPath);
      }
    }
  }, [router]);

  return null;
}

