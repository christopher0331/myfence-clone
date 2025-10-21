import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
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
const DiscountsPage = React.lazy(() => import("./pages/Discounts"));
// Backward-compat alias to avoid stale references
const Discounts = DiscountsPage;
const Contact = React.lazy(() => import("./pages/Contact"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = React.lazy(() => import("./pages/TermsConditions"));
const FenceGenius = React.lazy(() => import("./pages/FenceGenius"));
const FenceStaining = React.lazy(() => import("./pages/FenceStaining"));
const PreStaining = React.lazy(() => import("./pages/PreStaining"));
const ExteriorScrews = React.lazy(() => import("./pages/fence-upgrades/ExteriorScrews"));
const ClearCedar = React.lazy(() => import("./pages/fence-upgrades/ClearCedar"));
const BoardOnBoard = React.lazy(() => import("./pages/fence-upgrades/BoardOnBoard"));
const Blog = React.lazy(() => import("./pages/Blog"));

// Lazy load blog post pages (MDX versions)
const FenceCleaningStainingMDX = React.lazy(() => import("./pages/blog/FenceCleaningStainingMDX"));
const HowToStainFenceMDX = React.lazy(() => import("./pages/blog/HowToStainFenceMDX"));
const NeighborFenceCostSplitMDX = React.lazy(() => import("./pages/blog/NeighborFenceCostSplitMDX"));
const VirtualQuoteToolMDX = React.lazy(() => import("./pages/blog/VirtualQuoteToolMDX"));
const SixFtFenceCostMDX = React.lazy(() => import("./pages/blog/SixFtFenceCostMDX"));
const WoodenFenceCost2025MDX = React.lazy(() => import("./pages/blog/WoodenFenceCost2025MDX"));

// Lazy load fence style pages
const PictureFrameFence = React.lazy(() => import("./pages/fence-styles/PictureFrameFence"));
const ThreeRailPictureFrameFence = React.lazy(() => import("./pages/fence-styles/ThreeRailPictureFrameFence"));
const CraftsmanStyleFence = React.lazy(() => import("./pages/fence-styles/CraftsmanStyleFence"));
const HorizontalLatticeFence = React.lazy(() => import("./pages/fence-styles/HorizontalLatticeFence"));
const SolidBoardFence = React.lazy(() => import("./pages/fence-styles/SolidBoardFence"));
const HorizontalFence = React.lazy(() => import("./pages/fence-styles/HorizontalFence"));
const BlackHogwireFence = React.lazy(() => import("./pages/fence-styles/BlackHogwireFence"));
const GalvanizedHogwireFence = React.lazy(() => import("./pages/fence-styles/GalvanizedHogwireFence"));
const ThreeFtBlackHogwireFence = React.lazy(() => import("./pages/fence-styles/ThreeFtBlackHogwireFence"));
const PicketFence = React.lazy(() => import("./pages/fence-styles/PicketFence"));

// Lazy load service area pages
const FederalWay = React.lazy(() => import("./pages/service-areas/FederalWay"));
const Redmond = React.lazy(() => import("./pages/service-areas/Redmond"));
const Sammamish = React.lazy(() => import("./pages/service-areas/Sammamish"));
const Seattle = React.lazy(() => import("./pages/service-areas/Seattle"));
const Kirkland = React.lazy(() => import("./pages/service-areas/Kirkland"));
const Renton = React.lazy(() => import("./pages/service-areas/Renton"));
const MountlakeTerrace = React.lazy(() => import("./pages/service-areas/MountlakeTerrace"));
const MapleValley = React.lazy(() => import("./pages/service-areas/MapleValley"));
const Bellevue = React.lazy(() => import("./pages/service-areas/Bellevue"));
const Covington = React.lazy(() => import("./pages/service-areas/Covington"));
const Issaquah = React.lazy(() => import("./pages/service-areas/Issaquah"));
const LakeTapps = React.lazy(() => import("./pages/service-areas/LakeTapps"));
const GigHarbor = React.lazy(() => import("./pages/service-areas/GigHarbor"));
const Enumclaw = React.lazy(() => import("./pages/service-areas/Enumclaw"));

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
          <Route path="/fence-styles/galvanized-hogwire-fence" element={<GalvanizedHogwireFence />} />
          <Route path="/fence-styles/three-ft-black-hogwire-fence" element={<ThreeFtBlackHogwireFence />} />
          <Route path="/fence-styles/picket-fence" element={<PicketFence />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/quote" element={<QuoteTool />} />
          <Route path="/book-online-fence-seattle" element={<Navigate to="/contact" replace />} />
          <Route path="/book-online-fence-seattle/*" element={<Navigate to="/contact" replace />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/discounts" element={<DiscountsPage />} />
            <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/fence-genius" element={<FenceGenius />} />
          <Route path="/should-i-stain-my-fence" element={<FenceStaining />} />
          <Route path="/pre-staining-cedar-fence" element={<PreStaining />} />
          <Route path="/fence-upgrades/exterior-screws" element={<ExteriorScrews />} />
          <Route path="/fence-upgrades/clear-cedar" element={<ClearCedar />} />
          <Route path="/fence-upgrades/board-on-board" element={<BoardOnBoard />} />
          <Route path="/service-areas/federal-way" element={<FederalWay />} />
          <Route path="/service-areas/redmond" element={<Redmond />} />
          <Route path="/service-areas/sammamish" element={<Sammamish />} />
          <Route path="/service-areas/seattle" element={<Seattle />} />
          <Route path="/service-areas/kirkland" element={<Kirkland />} />
          <Route path="/service-areas/renton" element={<Renton />} />
          <Route path="/service-areas/mountlake-terrace" element={<MountlakeTerrace />} />
          <Route path="/service-areas/maple-valley" element={<MapleValley />} />
          <Route path="/service-areas/bellevue" element={<Bellevue />} />
          <Route path="/service-areas/covington" element={<Covington />} />
          <Route path="/service-areas/issaquah" element={<Issaquah />} />
          <Route path="/service-areas/lake-tapps" element={<LakeTapps />} />
          <Route path="/service-areas/gig-harbor" element={<GigHarbor />} />
          <Route path="/service-areas/enumclaw" element={<Enumclaw />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/fence-cleaning-staining" element={<FenceCleaningStainingMDX />} />
          <Route path="/blog/how-to-stain-fence" element={<HowToStainFenceMDX />} />
          <Route path="/blog/fence-cost-shared-with-neighbor" element={<NeighborFenceCostSplitMDX />} />
          <Route path="/blog/virtual-quote-tool" element={<VirtualQuoteToolMDX />} />
          <Route path="/blog/fence-cost-seattle" element={<SixFtFenceCostMDX />} />
          <Route path="/blog/seattle-fence-cost-2025" element={<WoodenFenceCost2025MDX />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
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
