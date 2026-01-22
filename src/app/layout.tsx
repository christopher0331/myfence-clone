import type { ReactNode } from "react";
import Script from "next/script";
import { Inter } from "next/font/google";
import "../index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredGTM from "@/components/DeferredGTM";

// Optimize font loading with Next.js font optimization
// This automatically handles font-display: swap and preloading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload the LCP Hero Image for faster production loading */}
        <link 
          rel="preload" 
          as="image" 
          href="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/father-son-fencing-pic.webp?tr=w-432,h-324,fo-auto,q-40"
          fetchPriority="high"
        />
        {/* Optimize CSS loading with resource hints */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Add resource hints for CSS chunks to improve loading
                const optimizeCSSLinks = function() {
                  const links = document.querySelectorAll('link[rel="stylesheet"]:not([data-hinted])');
                  links.forEach(function(link) {
                    if (link.href && link.href.includes('/_next/static/chunks/')) {
                      link.setAttribute('data-hinted', 'true');
                      link.setAttribute('fetchpriority', 'high');
                      
                      // Add preload hint before the stylesheet
                      const preload = document.createElement('link');
                      preload.rel = 'preload';
                      preload.as = 'style';
                      preload.href = link.href;
                      link.parentNode.insertBefore(preload, link);
                    }
                  });
                };
                
                // Run immediately
                optimizeCSSLinks();
                
                // Watch for new CSS links
                const observer = new MutationObserver(function() {
                  optimizeCSSLinks();
                });
                observer.observe(document.head, { childList: true, subtree: true });
              })();
            `,
          }}
        />
        {/* Synchronously inject font-display: swap for any Google Fonts loaded from CDN */}
        {/* Reference: https://developer.chrome.com/docs/performance/insights/font-display */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Intercept and modify Google Fonts links before they load
                const modifyFontLinks = function() {
                  const links = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
                  links.forEach(function(link) {
                    const href = link.getAttribute('href');
                    if (href && !href.includes('display=')) {
                      const separator = href.includes('?') ? '&' : '?';
                      link.setAttribute('href', href + separator + 'display=swap');
                    }
                  });
                };
                
                // Intercept CSS responses from Google Fonts and inject font-display: swap
                const interceptGoogleFontsCSS = function() {
                  const originalFetch = window.fetch;
                  window.fetch = function(...args) {
                    const url = typeof args[0] === 'string' ? args[0] : args[0]?.url || args[0];
                    if (url && typeof url === 'string' && url.includes('fonts.googleapis.com') && !url.includes('display=')) {
                      const separator = url.includes('?') ? '&' : '?';
                      const newUrl = url + separator + 'display=swap';
                      if (typeof args[0] === 'string') {
                        args[0] = newUrl;
                      } else if (args[0] instanceof Request) {
                        args[0] = new Request(newUrl, args[0]);
                      } else if (args[0] && typeof args[0] === 'object') {
                        args[0] = Object.assign({}, args[0], { url: newUrl });
                      }
                    }
                    return originalFetch.apply(this, args).then(function(response) {
                      // If it's a Google Fonts CSS response, modify it to add font-display
                      if (response.url && response.url.includes('fonts.googleapis.com') && 
                          response.headers.get('content-type')?.includes('text/css')) {
                        return response.clone().text().then(function(cssText) {
                          // Add font-display: swap to all @font-face rules that don't have it
                          const modifiedCSS = cssText.replace(
                            /(@font-face\\s*{[^}]*)(font-display\\s*:[^;]+;)?([^}]*})/gi,
                            function(match, before, fontDisplay, after) {
                              if (fontDisplay) {
                                return match; // Already has font-display
                              }
                              // Insert font-display: swap before the closing brace
                              return before + 'font-display: swap; ' + after;
                            }
                          );
                          return new Response(modifiedCSS, {
                            status: response.status,
                            statusText: response.statusText,
                            headers: response.headers
                          });
                        });
                      }
                      return response;
                    });
                  };
                };
                
                // Intercept XMLHttpRequest for Google Fonts (for older code)
                const originalXHROpen = XMLHttpRequest.prototype.open;
                XMLHttpRequest.prototype.open = function(method, url, ...rest) {
                  if (typeof url === 'string' && url.includes('fonts.googleapis.com') && !url.includes('display=')) {
                    const separator = url.includes('?') ? '&' : '?';
                    url = url + separator + 'display=swap';
                  }
                  return originalXHROpen.call(this, method, url, ...rest);
                };
                
                // Run immediately
                modifyFontLinks();
                interceptGoogleFontsCSS();
                
                // Also watch for dynamically added links
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', modifyFontLinks);
                }
                
                // Use MutationObserver for links added after DOMContentLoaded
                const observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(mutation) {
                    mutation.addedNodes.forEach(function(node) {
                      if (node.nodeType === 1 && node.tagName === 'LINK') {
                        const href = node.getAttribute('href');
                        if (href && href.includes('fonts.googleapis.com') && !href.includes('display=')) {
                          const separator = href.includes('?') ? '&' : '?';
                          node.setAttribute('href', href + separator + 'display=swap');
                        }
                      }
                    });
                  });
                });
                
                observer.observe(document.head, { childList: true, subtree: true });
              })();
            `,
          }}
        />
      </head>
      <body className={`min-h-screen flex flex-col ${inter.className}`}>
        <DeferredGTM />
        <Header />
        {/* Add top padding so content clears the fixed header */}
        <main className="flex-1 pt-24 md:pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
