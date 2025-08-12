import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FenceStyles from "./pages/FenceStyles";
import Gallery from "./pages/Gallery";
import QuoteTool from "./pages/QuoteTool";
import Financing from "./pages/Financing";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import PictureFrameFence from "./pages/fence-styles/PictureFrameFence";
const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/fence-styles" element={<FenceStyles />} />
            <Route path="/fence-styles/picture-frame-fence" element={<PictureFrameFence />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/quote" element={<QuoteTool />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
