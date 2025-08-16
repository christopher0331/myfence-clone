import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load pages for better performance
const Index = React.lazy(() => import("./pages/Index"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const FenceStyles = React.lazy(() => import("./pages/FenceStyles"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const QuoteTool = React.lazy(() => import("./pages/QuoteTool"));
const Financing = React.lazy(() => import("./pages/Financing"));
const Contact = React.lazy(() => import("./pages/Contact"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = React.lazy(() => import("./pages/TermsConditions"));

// Lazy load fence style pages
const PictureFrameFence = React.lazy(() => import("./pages/fence-styles/PictureFrameFence"));
const ThreeRailPictureFrameFence = React.lazy(() => import("./pages/fence-styles/ThreeRailPictureFrameFence"));
const CraftsmanStyleFence = React.lazy(() => import("./pages/fence-styles/CraftsmanStyleFence"));
const HorizontalLatticeFence = React.lazy(() => import("./pages/fence-styles/HorizontalLatticeFence"));
const SolidBoardFence = React.lazy(() => import("./pages/fence-styles/SolidBoardFence"));
const HorizontalFence = React.lazy(() => import("./pages/fence-styles/HorizontalFence"));
const BlackHogwireFence = React.lazy(() => import("./pages/fence-styles/BlackHogwireFence"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <div className="h-20 md:h-24" aria-hidden="true" />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/fence-styles" element={<FenceStyles />} />
              <Route path="/fence-styles/picture-frame-fence" element={<PictureFrameFence />} />
              <Route path="/fence-styles/3-rail-picture-frame-fence" element={<ThreeRailPictureFrameFence />} />
              <Route path="/fence-styles/craftsman-style-fence" element={<CraftsmanStyleFence />} />
              <Route path="/fence-styles/horizontal-lattice-fence" element={<HorizontalLatticeFence />} />
              <Route path="/fence-styles/solid-board-fence" element={<SolidBoardFence />} />
              <Route path="/fence-styles/horizontal-fence" element={<HorizontalFence />} />
              <Route path="/fence-styles/black-hogwire-fence" element={<BlackHogwireFence />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/quote" element={<QuoteTool />} />
              <Route path="/financing" element={<Financing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
