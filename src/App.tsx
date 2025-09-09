import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BlogSection from "./components/BlogSection";

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
const FenceGenius = React.lazy(() => import("./pages/FenceGenius"));
const FenceStaining = React.lazy(() => import("./pages/FenceStaining"));
const PreStaining = React.lazy(() => import("./pages/PreStaining"));
const Blog = React.lazy(() => import("./pages/Blog"));

// Lazy load blog post pages
const FenceCleaningStaining = React.lazy(() => import("./pages/blog/FenceCleaningStaining"));
const HowToStainFence = React.lazy(() => import("./pages/blog/HowToStainFence"));
const VirtualQuoteToolBlog = React.lazy(() => import("./pages/blog/VirtualQuoteTool"));
const SixFtFenceCostBlog = React.lazy(() => import("./pages/blog/SixFtFenceCost"));
const WoodenFenceCost2025Blog = React.lazy(() => import("./pages/blog/WoodenFenceCost2025"));

// Lazy load fence style pages
const PictureFrameFence = React.lazy(() => import("./pages/fence-styles/PictureFrameFence"));
const ThreeRailPictureFrameFence = React.lazy(() => import("./pages/fence-styles/ThreeRailPictureFrameFence"));
const CraftsmanStyleFence = React.lazy(() => import("./pages/fence-styles/CraftsmanStyleFence"));
const HorizontalLatticeFence = React.lazy(() => import("./pages/fence-styles/HorizontalLatticeFence"));
const SolidBoardFence = React.lazy(() => import("./pages/fence-styles/SolidBoardFence"));
const HorizontalFence = React.lazy(() => import("./pages/fence-styles/HorizontalFence"));
const BlackHogwireFence = React.lazy(() => import("./pages/fence-styles/BlackHogwireFence"));
const ThreeFtBlackHogwireFence = React.lazy(() => import("./pages/fence-styles/ThreeFtBlackHogwireFence"));
const PicketFence = React.lazy(() => import("./pages/fence-styles/PicketFence"));

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

const AppContent = () => {
  const location = useLocation();
  const showBlogSection = location.pathname !== "/blog";

  return (
    <>
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
          <Route path="/fence-styles/three-ft-black-hogwire-fence" element={<ThreeFtBlackHogwireFence />} />
          <Route path="/fence-styles/picket-fence" element={<PicketFence />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/quote" element={<QuoteTool />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/fence-genius" element={<FenceGenius />} />
          <Route path="/should-i-stain-my-fence" element={<FenceStaining />} />
          <Route path="/pre-staining-cedar-fence" element={<PreStaining />} />
          <Route path="/blog" element={<Blog />} />
            <Route path="/blog/fence-cleaning-staining" element={<FenceCleaningStaining />} />
            <Route path="/blog/how-to-stain-fence" element={<HowToStainFence />} />
            <Route path="/blog/virtual-quote-tool" element={<VirtualQuoteToolBlog />} />
            <Route path="/blog/6ft-cost" element={<SixFtFenceCostBlog />} />
            <Route path="/blog/2025-cost" element={<WoodenFenceCost2025Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {showBlogSection && <BlogSection />}
      <Footer />
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
