import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware to optimize font loading
 * Note: This primarily handles internal requests. External Google Fonts are handled
 * via the client-side script in layout.tsx
 * 
 * Reference: https://developer.chrome.com/docs/performance/insights/font-display
 */
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Only match internal routes, not external font requests
    "/((?!_next/static|_next/image|favicon.ico|fonts\\.googleapis\\.com|fonts\\.gstatic\\.com).*)",
  ],
};
