import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BlogSection from "./components/BlogSection";
import GoogleBusinessMap from "./components/GoogleBusinessMap";

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
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
const TermsConditions = React.lazy(() => import("./pages/TermsConditions"));
const FenceGenius = React.lazy(() => import("./pages/FenceGenius"));
const FenceStaining = React.lazy(() => import("./pages/FenceStaining"));
const PreStaining = React.lazy(() => import("./pages/PreStaining"));
const ExteriorScrews = React.lazy(() => import("./pages/fence-upgrades/ExteriorScrews"));
const ClearCedar = React.lazy(() => import("./pages/fence-upgrades/ClearCedar"));
const RotBoard = React.lazy(() => import("./pages/fence-upgrades/RotBoard"));
const PostOnPipe = React.lazy(() => import("./pages/fence-upgrades/PostOnPipe"));
const LatticeToppers = React.lazy(() => import("./pages/fence-upgrades/LatticeToppers"));
const SoilHaulAway = React.lazy(() => import("./pages/fence-upgrades/SoilHaulAway"));
import BoardOnBoard from "./pages/fence-upgrades/BoardOnBoard";
import Blog from "./pages/Blog";

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

// Lazy load fence post pages
const FourPointOneTwoFivePosts = React.lazy(() => import("./pages/fence-posts/FourPointOneTwoFivePosts"));
const SixBySixPosts = React.lazy(() => import("./pages/fence-posts/SixBySixPosts"));
const ThreePointFivePosts = React.lazy(() => import("./pages/fence-posts/ThreePointFivePosts"));

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
const NorthBend = React.lazy(() => import("./pages/service-areas/NorthBend"));
const BonneyLake = React.lazy(() => import("./pages/service-areas/BonneyLake"));

// Lazy load neighborhood pages
const UpperTehaleh = React.lazy(() => import("./pages/neighborhoods/UpperTehaleh"));
const LowerTehaleh = React.lazy(() => import("./pages/neighborhoods/LowerTehaleh"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Redirect hash-based social shim URLs (/#/path) back into the SPA router
const HashNavigation: React.FC = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#/')) {
      const target = hash.slice(1);
      // Clean the URL and navigate inside SPA
      window.history.replaceState(null, '', target);
      navigate(target, { replace: true });
    }
  }, [navigate]);
  return null;
};

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
  const showBlogSection = location.pathname !== "/blog" && !location.pathname.startsWith("/service-areas/") && !location.pathname.startsWith("/neighborhoods/");

  return (
    <>
      <HashNavigation />
      <ScrollToTop />
      <Header />
      <div className="h-20 md:h-24" aria-hidden="true" />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Service & style redirects */}
          <Route path="/wood-fence-installation" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/wood-fence-installation/*" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/wood-fence-wa" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/wood-fence-wa/*" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/fence-gates-seattle-wa" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/fence-gates-seattle-wa/*" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/gates-faq" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/gates-faq/*" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/horiztonal-fences-myfence" element={<Navigate to="/fence-styles/horizontal-fence" replace />} />
          <Route
            path="/horiztonal-fences-myfence/*"
            element={<Navigate to="/fence-styles/horizontal-fence" replace />}
          />
          <Route path="/seattle-local-fence-companies" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/seattle-local-fence-companies/*" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/seattle-fence-contractor-98115" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/seattle-fence-contractor-98115/*" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/seattle-wood-fence-installation" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/seattle-wood-fence-installation/*" element={<Navigate to="/fence-styles" replace />} />

          {/* Quote & tool redirects */}
          <Route path="/myfence-com-diy-estimate-tool" element={<Navigate to="/quote" replace />} />
          <Route path="/myfence-com-diy-estimate-tool/*" element={<Navigate to="/quote" replace />} />
          <Route path="/book-online-fence-seattle" element={<Navigate to="/contact" replace />} />
          <Route path="/book-online-fence-seattle/*" element={<Navigate to="/contact" replace />} />

          {/* Gallery & project redirects */}
          <Route path="/fence-projects-seattle-wa" element={<Navigate to="/service-areas/seattle" replace />} />
          <Route path="/fence-projects-seattle-wa/" element={<Navigate to="/service-areas/seattle" replace />} />
          <Route path="/fence-projects-seattle-wa/*" element={<Navigate to="/service-areas/seattle" replace />} />
          <Route path="/past-projects" element={<Navigate to="/gallery" replace />} />
          <Route path="/past-projects/*" element={<Navigate to="/gallery" replace />} />

          {/* Process & misc redirects */}
          <Route path="/fencebuildprocess" element={<Navigate to="/contact" replace />} />
          <Route path="/fencebuildprocess/*" element={<Navigate to="/contact" replace />} />
          <Route path="/permitting-hoa-submittal" element={<Navigate to="/contact" replace />} />
          <Route path="/permitting-hoa-submittal/*" element={<Navigate to="/contact" replace />} />
          <Route path="/custom-software" element={<Navigate to="/contact" replace />} />
          <Route path="/custom-software/*" element={<Navigate to="/contact" replace />} />
          <Route path="/myfence-review" element={<Navigate to="/contact" replace />} />
          <Route path="/myfence-review/*" element={<Navigate to="/contact" replace />} />
          <Route path="/map" element={<Navigate to="/contact" replace />} />
          <Route path="/map/*" element={<Navigate to="/contact" replace />} />

          {/* PDF & document redirects */}
          <Route
            path="/wp-content/uploads/2024/02/Fence-Genius.pdf"
            element={<Navigate to="/fence-genius" replace />}
          />
          <Route
            path="/wp-content/uploads/2024/02/Download-Convex-Sheet.pdf"
            element={<Navigate to="/fence-styles" replace />}
          />
          <Route
            path="/wp-content/uploads/2024/02/Download-Convave-Sheet.pdf"
            element={<Navigate to="/fence-styles" replace />}
          />
          <Route
            path="/wp-content/uploads/2024/02/Download-Flat-Gate-Sheet.pdf"
            element={<Navigate to="/fence-styles" replace />}
          />

          {/* Sitemap redirect */}
          <Route path="/sitemap" element={<Navigate to="/sitemap.xml" replace />} />
          <Route path="/sitemap/*" element={<Navigate to="/sitemap.xml" replace />} />

          {/* Location-specific redirects */}
          <Route
            path="/maple-valley-fence-contractor-98038"
            element={<Navigate to="/service-areas/maple-valley" replace />}
          />
          <Route
            path="/maple-valley-fence-contractor-98038/*"
            element={<Navigate to="/service-areas/maple-valley" replace />}
          />
          <Route
            path="/maple-valley-fence-installation"
            element={<Navigate to="/service-areas/maple-valley" replace />}
          />
          <Route
            path="/maple-valley-fence-installation/*"
            element={<Navigate to="/service-areas/maple-valley" replace />}
          />
          <Route
            path="/maple-valley-best-fence-company"
            element={<Navigate to="/service-areas/maple-valley" replace />}
          />
          <Route
            path="/maple-valley-best-fence-company/"
            element={<Navigate to="/service-areas/maple-valley" replace />}
          />
          <Route
            path="/maple-valley-best-fence-company/*"
            element={<Navigate to="/service-areas/maple-valley" replace />}
          />
          <Route path="/maple-valley-home-fencing" element={<Navigate to="/service-areas/maple-valley" replace />} />
          <Route path="/maple-valley-home-fencing/*" element={<Navigate to="/service-areas/maple-valley" replace />} />
          <Route
            path="/federal-way-fence-contractor-98023"
            element={<Navigate to="/service-areas/federal-way" replace />}
          />
          <Route
            path="/federal-way-fence-contractor-98023/*"
            element={<Navigate to="/service-areas/federal-way" replace />}
          />
          <Route path="/auburn-wood-fence-contractors" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/auburn-wood-fence-contractors/*" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/university-place-fence-company-near-me" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/university-place-fence-company-near-me/*" element={<Navigate to="/fence-styles" replace />} />
          <Route path="/issaquah-local-fence-companies" element={<Navigate to="/service-areas/issaquah" replace />} />
          <Route path="/issaquah-local-fence-companies/*" element={<Navigate to="/service-areas/issaquah" replace />} />
          <Route path="/issaquah-wood-fence-contractors" element={<Navigate to="/service-areas/issaquah" replace />} />
          <Route
            path="/issaquah-wood-fence-contractors/*"
            element={<Navigate to="/service-areas/issaquah" replace />}
          />
          <Route
            path="/fence-contractor-issaquah-wa-98027"
            element={<Navigate to="/service-areas/issaquah" replace />}
          />
          <Route
            path="/fence-contractor-issaquah-wa-98027/*"
            element={<Navigate to="/service-areas/issaquah" replace />}
          />
          <Route
            path="/kirkland-wood-fence-company-near-me"
            element={<Navigate to="/service-areas/kirkland" replace />}
          />
          <Route
            path="/kirkland-wood-fence-company-near-me/*"
            element={<Navigate to="/service-areas/kirkland" replace />}
          />
          <Route path="/ravensdale-fence-contractors" element={<Navigate to="/service-areas/maple-valley" replace />} />
          <Route path="/ravensdale-fence-contractors/*" element={<Navigate to="/service-areas/maple-valley" replace />} />
          <Route path="/bellevue-fence-company-near-me" element={<Navigate to="/service-areas/bellevue" replace />} />
          <Route path="/bellevue-fence-company-near-me/*" element={<Navigate to="/service-areas/bellevue" replace />} />
          <Route
            path="/lake-tapps-fence-contractor-98391"
            element={<Navigate to="/service-areas/lake-tapps" replace />}
          />
          <Route
            path="/lake-tapps-fence-contractor-98391/*"
            element={<Navigate to="/service-areas/lake-tapps" replace />}
          />
          <Route
            path="/covington-fence-contractor-98042"
            element={<Navigate to="/service-areas/covington" replace />}
          />
          <Route
            path="/covington-fence-contractor-98042/*"
            element={<Navigate to="/service-areas/covington" replace />}
          />

          {/* Main routes */}
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
          <Route path="/fence-posts/4-125-posts" element={<FourPointOneTwoFivePosts />} />
          <Route path="/fence-posts/6x6" element={<SixBySixPosts />} />
          <Route path="/fence-posts/3-5-posts" element={<ThreePointFivePosts />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/quote" element={<QuoteTool />} />
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
          <Route path="/fence-upgrades/rot-board" element={<RotBoard />} />
          <Route path="/fence-upgrades/post-on-pipe" element={<PostOnPipe />} />
          <Route path="/fence-upgrades/board-on-board" element={<BoardOnBoard />} />
          <Route path="/fence-upgrades/lattice-toppers" element={<LatticeToppers />} />
          <Route path="/fence-upgrades/soil-haul-away" element={<SoilHaulAway />} />
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
          <Route path="/service-areas/north-bend" element={<NorthBend />} />
          <Route path="/service-areas/bonney-lake" element={<BonneyLake />} />
          <Route path="/neighborhoods/upper-tehaleh" element={<UpperTehaleh />} />
          <Route path="/neighborhoods/lower-tehaleh" element={<LowerTehaleh />} />
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
      {showBlogSection && <BlogSection />}
      {showBlogSection && (
        <section className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Service Area</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Proudly serving the greater Seattle area within a 28-mile radius
          </p>
          <GoogleBusinessMap city="Maple Valley" state="WA" radiusMiles={28} showBusinessInfo={false} />
        </section>
      )}
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
